// 厚生労働省「食品衛生申請等システム（i2fas）」オープンデータ取得スクリプト。
//
// 公開画面 https://i2fas.mhlw.go.jp/faspub/IO_S010303.do は、自治体別に
// 「営業許可・届出のオープンデータ（掲載賛同施設のみ）」CSVを配布している。
// ダウンロードはセッション型JSPの多段フロー（サーバ生成 → 無害化ゲートウェイ →
// 202ポーリング → Blob）で、静的URLが無いためブラウザ自動化で取得する。
//
// 取得したCSVは .cache/i2fas/<自治体コード>.csv に保存する（許可＋届出＋廃業を含む
// 「_all」ファイル。GIF標準フォーマット・UTF-8 BOM・緯度経度カラムあり）。
// crawl.js は acquire type 'i2fasglob' でこれらをまとめて1ソースとして取り込む。
//
// 利用条件: 厚労省コンテンツは「公共データ利用規約(第1.0版/PDL1.0)」= CC BY 4.0 互換
// （出典明示で商用含む再利用可）。robots.txt が /faspub/ をクロール禁止としているため、
// 逐次・低レート・キャッシュ（レジューム）で節度をもって取得する。
//
// 使い方:
//   node scripts/fetch-i2fas.mjs             全自治体を取得（キャッシュ済みはスキップ）
//   node scripts/fetch-i2fas.mjs --limit=5   先頭5自治体だけ（動作確認）
//   node scripts/fetch-i2fas.mjs --force     キャッシュを無視して再取得

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '.cache', 'i2fas');
const PUB = 'https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action';

const LIMIT = (() => { const a = process.argv.find((x) => x.startsWith('--limit=')); return a ? parseInt(a.split('=')[1], 10) : Infinity; })();
const FORCE = process.argv.includes('--force');
const DELAY_MS = 1800;       // 各取得間の待機（サーバ負荷に配慮）
const PER_FILE_TIMEOUT = 90000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ acceptDownloads: true, locale: 'ja-JP' });
const page = await ctx.newPage();

// ダウンロードはメインページ or ポップアップで発火する。キューに貯めて逐次消費する。
const dlQueue = [];
const hook = (p) => p.on('download', (d) => dlQueue.push(d));
hook(page);
ctx.on('page', (p) => { hook(p); });

console.log('公開ページを開いています…');
await page.goto(PUB, { waitUntil: 'networkidle' });

// 「届出/オープンデータ」ダウンロードリンク（sidA_N<自治体コード>）を列挙。
// このリンクの CSV は許可・届出・廃業を含む全件（_all）。
const targets = await page.evaluate(() => {
  const out = [];
  for (const a of document.querySelectorAll('a[id^="sidA_N"]')) {
    const m = a.id.match(/^sidA_N(\d+)$/);
    if (m) out.push({ id: a.id, code: m[1] });
  }
  return out;
});
console.log(`対象自治体: ${targets.length}件${LIMIT !== Infinity ? `（--limit=${LIMIT}）` : ''}`);

let done = 0, saved = 0, skipped = 0, failed = 0;
for (const t of targets) {
  if (done >= LIMIT) break;
  done++;
  const dest = path.join(OUT, `${t.code}.csv`);
  if (!FORCE && fs.existsSync(dest) && fs.statSync(dest).size > 0) { skipped++; continue; }

  dlQueue.length = 0;
  try {
    await page.locator('a#' + t.id).dispatchEvent('click');
    const start = Date.now();
    while (dlQueue.length === 0 && Date.now() - start < PER_FILE_TIMEOUT) {
      await sleep(500);
    }
    if (dlQueue.length === 0) { failed++; console.log(`  ✗ ${t.code}: タイムアウト`); continue; }
    const d = dlQueue.shift();
    await d.saveAs(dest);
    const sz = fs.statSync(dest).size;
    saved++;
    if (saved % 20 === 0 || saved <= 3) console.log(`  ✓ ${t.code} (${sz} bytes)  [${saved}保存/${done}件目]`);
    // 開いたポップアップを閉じる（メモリ節約）
    for (const p of ctx.pages()) { if (p !== page) await p.close().catch(() => {}); }
  } catch (e) {
    failed++;
    console.log(`  ✗ ${t.code}: ${e.message.slice(0, 80)}`);
  }
  await sleep(DELAY_MS);
}

console.log(`\n完了: 保存 ${saved} / スキップ(既存) ${skipped} / 失敗 ${failed} / 対象 ${targets.length}`);
await browser.close();
