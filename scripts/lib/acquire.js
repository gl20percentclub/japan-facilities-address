// 取得(acquire): ソース定義に従ってファイルを取得し .cache に保存する。
// 取得方法は5種: ckan / get / post / resolve / i2fasglob。
// 一過性の失敗はリトライ、恒久的な失敗(4xx)は即失敗。ZIP は中の csv/xlsx/xls を展開する。

import fs from 'node:fs';
import path from 'node:path';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// bot 対策で User-Agent 等を求めるサーバがあるため、常識的なヘッダを付ける。
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; japan-facilities-api/1.0; +https://github.com/gl20percentclub/japan-facilities-api)',
  'Accept-Language': 'ja,en;q=0.8',
  Accept: '*/*',
};

// CKAN API: リソース情報（URL・フォーマット）を取得。403/429/5xx は指数バックオフでリトライ。
export async function fetchCkanResourceInfo(ckanBase, resourceId, attempt = 0) {
  const url = `${ckanBase}/api/3/action/resource_show?id=${encodeURIComponent(resourceId)}`;
  const res = await fetch(url);
  if (!res.ok) {
    if ((res.status === 403 || res.status === 429 || res.status >= 500) && attempt < 4) {
      await sleep(1000 * 2 ** attempt);
      return fetchCkanResourceInfo(ckanBase, resourceId, attempt + 1);
    }
    throw new Error(`resource_show failed: ${res.status} ${res.statusText} (${resourceId})`);
  }
  const json = await res.json();
  if (!json.success) throw new Error(`resource_show returned success=false (${resourceId})`);
  return json.result; // { url, format, ... }
}

// キャッシュ済みファイルを拡張子から探す（dry-run で CKAN 問い合わせ・リンク解決を避けるため）。
// `key.ext` に加え、multi 取得の `key-0.ext` `key-1.ext` … も拾う。
function findCachedFiles(cacheDir, key) {
  const exts = ['csv', 'tsv', 'xlsx', 'xls'];
  const found = [];
  for (const ext of exts) {
    const p = path.join(cacheDir, `${key}.${ext}`);
    if (fs.existsSync(p)) found.push({ cachePath: p, format: ext });
  }
  for (let j = 0; ; j++) {
    const hit = exts
      .map((ext) => ({ cachePath: path.join(cacheDir, `${key}-${j}.${ext}`), format: ext }))
      .find((c) => fs.existsSync(c.cachePath));
    if (!hit) break;
    found.push(hit);
  }
  return found;
}

// HTTP GET/POST をリトライ付きで実行し、本文を ArrayBuffer で返す。
// 一過性の失敗（ネットワーク例外・5xx・429）は指数バックオフで再試行、4xx（429除く）は即失敗。
export async function fetchWithRetry(url, opts = {}, { retries = 3, baseDelayMs = 1000 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      const delay = baseDelayMs * 2 ** (attempt - 1);
      console.log(`    リトライ ${attempt}/${retries}（${delay}ms 待機）: ${lastErr.message}`);
      await sleep(delay);
    }
    try {
      const res = await fetch(url, opts);
      if (res.ok) return await res.arrayBuffer();
      if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        const err = new Error(`ダウンロード失敗: ${res.status} ${res.statusText}`);
        err.permanent = true;
        throw err;
      }
      lastErr = new Error(`ダウンロード失敗: ${res.status} ${res.statusText}`);
    } catch (e) {
      if (e.permanent) throw e;
      lastErr = e;
    }
  }
  throw lastErr;
}

// href/リンク文言中の基本的な HTML 実体参照を復元する（&amp; 等）。
function decodeHtmlEntities(s) {
  return String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// HTML から、条件に一致する <a href> を解決する。
//   pattern      リンク表示テキストにマッチさせる正規表現文字列（任意）
//   hrefPattern  href にマッチさせる正規表現文字列（任意。ファイル名で全件/差分を区別する場合に使う）
//   format       href の拡張子で絞り込む（'xlsx' 等。任意）
//   baseUrl      相対 href を絶対化する基準
// 返り値: { url, text, count, all }（一致0件なら null）。
//   url/text は先頭一致。all は全一致の [{url,text}]（multi 取得に使う）。
export function resolveLinkFromHtml(htmlText, { pattern, hrefPattern, format, baseUrl } = {}) {
  const textRe = pattern ? new RegExp(pattern, 'i') : null;
  const hrefRe = hrefPattern ? new RegExp(hrefPattern, 'i') : null;
  const extRe = format ? new RegExp(`\\.${format}(?:$|[?#])`, 'i') : null;
  const anchorRe = /<a\b[^>]*\shref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  const candidates = [];
  let m;
  while ((m = anchorRe.exec(htmlText))) {
    const href = decodeHtmlEntities(m[1]);
    const text = decodeHtmlEntities(m[2].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
    if (extRe && !extRe.test(href)) continue;
    if (textRe && !textRe.test(text)) continue;
    if (hrefRe && !hrefRe.test(href)) continue;
    candidates.push({ href, text });
  }
  if (candidates.length === 0) return null;
  const toUrl = (c) => ({ url: baseUrl ? new URL(c.href, baseUrl).toString() : c.href, text: c.text });
  const all = candidates.map(toUrl);
  return { ...all[0], count: candidates.length, all };
}

// ZIP バイト列から対象の csv/xlsx/xls を取り出す。
async function extractFromZip(zipBuf, entryPattern) {
  const { unzipSync } = await import('fflate');
  const files = unzipSync(new Uint8Array(zipBuf));
  const names = Object.keys(files).filter((n) => !n.endsWith('/'));
  const re = entryPattern ? new RegExp(entryPattern, 'i') : /\.(csv|xlsx|xls)$/i;
  const name = names.find((n) => re.test(n)) || names.find((n) => /\.(csv|xlsx|xls)$/i.test(n));
  if (!name) throw new Error(`ZIP 内に csv/xlsx/xls が見つかりません: [${names.join(', ')}]`);
  const mm = name.toLowerCase().match(/\.(csv|xlsx|xls)$/);
  return { buf: Buffer.from(files[name]), format: mm[1] };
}

// ソースが取得すべきファイル群を返す。単一 url でも複数 urls[] でも扱える。
// 返り値: [{ cachePath, format }, ...]（複数ファイルはパース後に結合される）
export async function acquire(source, { cacheDir, dryRun = false } = {}) {
  const a = source.acquire;

  // i2fasglob: scripts/fetch-i2fas.mjs が取得した .cache/i2fas/*.csv をまとめて読む。
  if (a.type === 'i2fasglob') {
    const dir = path.join(cacheDir, 'i2fas');
    if (!fs.existsSync(dir)) throw new Error(`.cache/i2fas がありません（先に node scripts/fetch-i2fas.mjs を実行）`);
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.csv')).sort();
    if (files.length === 0) throw new Error('.cache/i2fas に CSV がありません');
    console.log(`  i2fas キャッシュ ${files.length} ファイルを使用`);
    return files.map((f) => ({ cachePath: path.join(dir, f), format: 'csv' }));
  }

  const urls = a.urls || (a.url ? [a.url] : [null]); // ckan は url なしで resourceId 解決
  const results = [];

  // 1URLを取得して .cache に保存し {cachePath, format} を返す。
  // 形式はヒント fmt を優先し、無ければ拡張子から推定。zip は中身を展開する。
  async function downloadOne(downloadUrl, key, fmt) {
    let format = (fmt || '').toLowerCase();
    if (!format) {
      const mm = String(downloadUrl).toLowerCase().match(/\.(csv|tsv|txt|xlsx|xls|zip)(?:$|\?)/);
      format = mm ? mm[1] : 'csv';
    }
    if (format === 'txt') format = 'tsv'; // LinkData 等の tab 区切り txt

    const fetchOpts = { headers: { ...DEFAULT_HEADERS } };
    if (a.type === 'post') {
      fetchOpts.method = 'POST';
      fetchOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      fetchOpts.body = new URLSearchParams(a.body || {}).toString();
    }

    console.log(`  ダウンロード中: ${downloadUrl}`);
    let buf = Buffer.from(await fetchWithRetry(downloadUrl, fetchOpts));

    // format: 'zip' のとき、中の csv/xlsx/xls を取り出す（acquire.zipEntry で対象指定可）。
    if (format === 'zip') {
      const extracted = await extractFromZip(buf, a.zipEntry);
      buf = extracted.buf;
      format = extracted.format;
    }

    const ext = format === 'xlsx' ? 'xlsx' : format === 'xls' ? 'xls' : format === 'tsv' ? 'tsv' : 'csv';
    const cachePath = path.join(cacheDir, `${key}.${ext}`);
    fs.mkdirSync(cacheDir, { recursive: true });
    fs.writeFileSync(cachePath, buf);
    console.log(`  キャッシュに保存: ${cachePath} (${buf.length} bytes)`);
    return { cachePath, format };
  }

  for (let i = 0; i < urls.length; i++) {
    const suffix = urls.length > 1 ? `-${i}` : '';
    const key = `${source.key}${suffix}`;

    // dry-run はキャッシュのみ使用。CKAN 問い合わせをせず拡張子からファイルを特定する。
    if (dryRun) {
      const hits = findCachedFiles(cacheDir, key);
      if (hits.length === 0) throw new Error(`--dry-run ですがキャッシュが存在しません: ${key}`);
      for (const hit of hits) {
        console.log(`  [dry-run] キャッシュを使用: ${hit.cachePath}`);
        results.push(hit);
      }
      continue;
    }

    let downloadUrl = urls[i];
    const format = (a.format || '').toLowerCase();

    if (a.type === 'ckan') {
      const info = await fetchCkanResourceInfo(a.ckanBase, a.resourceId);
      downloadUrl = info.url;
      results.push(await downloadOne(downloadUrl, key, format || (info.format || '').toLowerCase()));
      continue;
    }

    // resolve: 掲載ページ(pageUrl)を取得し、最新のダウンロードURLを解決する（日付でURLが変わる自治体向け）。
    //   linkPattern  <a> の表示テキストにマッチ / hrefPattern  href にマッチ（ファイル名で全件/差分を区別）
    //   multi:true   一致した全リンクを取得（全件が複数ファイルに分割された自治体）
    //   hrefScan:true <a> に限らず生HTML中で hrefPattern に一致するURL/パスを拾う
    //                 （<button value="..."> 等 アンカー以外にURLが埋まっているページ向け）
    if (a.type === 'resolve') {
      console.log(`  リンク解決中: ${a.pageUrl}`);
      const html = Buffer.from(await fetchWithRetry(a.pageUrl, { headers: { ...DEFAULT_HEADERS } })).toString('utf-8');
      const linkFmt = (a.linkFormat || format || '').toLowerCase();
      let resolvedUrls;

      if (a.hrefScan) {
        if (!a.hrefPattern) throw new Error(`resolve hrefScan には hrefPattern が必要です: ${source.key}`);
        const re = new RegExp(a.hrefPattern, 'ig');
        const seen = new Set();
        let mm;
        while ((mm = re.exec(html))) seen.add(new URL(mm[0], a.pageUrl).toString());
        resolvedUrls = [...seen];
        if (resolvedUrls.length === 0) {
          throw new Error(`リンク解決に失敗: ${a.pageUrl} に hrefPattern「${a.hrefPattern}」に一致するURLがありません`);
        }
        console.log(`  リンク解決(hrefScan): ${resolvedUrls.length}件`);
      } else {
        const hit = resolveLinkFromHtml(html, { pattern: a.linkPattern, hrefPattern: a.hrefPattern, format: linkFmt, baseUrl: a.pageUrl });
        if (!hit) {
          throw new Error(
            `リンク解決に失敗: ${a.pageUrl} に「${a.linkPattern || a.hrefPattern || '(指定なし)'}」に一致する` +
              `${linkFmt ? ` .${linkFmt}` : ''} リンクが見つかりません`,
          );
        }
        resolvedUrls = a.multi ? hit.all.map((h) => h.url) : [hit.url];
        if (a.multi) console.log(`  リンク解決: ${hit.count}件を取得`);
        else {
          if (hit.count > 1) console.log(`  ⚠ ${hit.count}件一致。先頭を採用: 「${hit.text}」`);
          console.log(`  リンク解決: 「${hit.text}」 -> ${hit.url}`);
        }
      }

      if (a.multi || a.hrefScan) {
        for (let j = 0; j < resolvedUrls.length; j++) {
          results.push(await downloadOne(resolvedUrls[j], `${key}-${j}`, format));
        }
        continue;
      }
      downloadUrl = resolvedUrls[0];
    }

    results.push(await downloadOne(downloadUrl, key, format));
  }
  return results;
}
