// 全国 食品営業許可 施設検索API クローラー
//
// 各自治体が公開する食品営業許可・届出のオープンデータをクロールし、
// geolonia/japanese-addresses と同じ思想の階層型静的JSONを生成する。
//
// 出力構造（都道府県 > 市区町村 > data.json）:
//   api/facilities/index.json                都道府県名 → 市区町村名の配列
//   api/facilities/{都道府県}/index.json      市区町村名 → 施設数
//   api/facilities/{都道府県}/{市区町村}/data.json  施設オブジェクトの配列
//
// 緯度経度の無い施設は @geolonia/normalize-japanese-addresses で住所から付与する。
// 都道府県・市区町村カラムが無いデータは、ジオコーディング結果から補完する。
//
// 使い方:
//   node scripts/crawl.js              通常実行（ダウンロード→ジオコーディング→生成）
//   node scripts/crawl.js --dry-run    ダウンロードをスキップしキャッシュを使う
//   node scripts/crawl.js --no-geocode ジオコーディングをスキップ
//   node scripts/crawl.js --only=osaka-city,minato   指定キーのソースだけ処理

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalize, config as njaConfig } from '@geolonia/normalize-japanese-addresses';
import { generateSearchIndex } from './gen-search-index.js';
import { generateReadmeStats } from './gen-readme-stats.js';
import { SOURCES } from './sources.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(ROOT, '.cache');
const GEOCODE_CACHE_PATH = path.join(CACHE_DIR, 'geocode-cache.json');
const OUT_DIR = path.join(ROOT, 'api', 'facilities');

const DRY_RUN = process.argv.includes('--dry-run');
const NO_GEOCODE = process.argv.includes('--no-geocode');

// --only=key1,key2 で処理対象ソースを絞る（動作確認・部分再生成用）
const ONLY = (() => {
  const arg = process.argv.find((a) => a.startsWith('--only='));
  if (!arg) return null;
  return new Set(arg.slice('--only='.length).split(',').map((s) => s.trim()).filter(Boolean));
})();

// ジオコーディングの並列数。公開APIに優しくするため控えめにする。
// （同一市区町村のデータはLRUキャッシュで再利用されるため過剰な並列は不要）
const GEOCODE_CONCURRENCY = 8;

// ---------------------------------------------------------------------------
// カラムマッピング（元ヘッダー → 内部キー）
//
// 自治体・年度ごとにヘッダー表記が揺れるため、既知の表記をすべて内部キーに寄せる。
// 同じ内部キーに複数の元表記がマップされてよい（データに現れた最初の値を採用）。
// ---------------------------------------------------------------------------
const COLUMN_MAP = {
  // --- 旧フォーマット ---
  '市区町村コード（JIS市区町村コード）': 'city_code',
  '市区町村コード': 'city_code',
  'NO': 'no',
  '市区町村名（カナ）': 'city_name_kana',
  '営業者名': 'operator_name',
  '営業者氏名': 'operator_name',
  '営業者名（カナ）': 'operator_name_kana',
  '業態の種類': 'business_type',
  '業種名': 'business_type',
  '業種': 'business_type',
  '業種分類': 'business_type',
  '種目': 'business_subtype',
  '施設名': 'facility_name',
  '営業施設名称': 'facility_name',
  '施設名称': 'facility_name',
  '屋号': 'facility_name',
  '営業施設所在地': 'address',
  '営業施設電話番号': 'phone',
  '許可認証日': 'license_date',
  '有効期間開始日': 'valid_start',
  '有効期間終了日': 'valid_end',

  // --- 新・標準フォーマット（食品等営業許可・届出一覧 / GIF推奨データセット） ---
  '都道府県コード又は市区町村コード': 'city_code',
  '全国地方公共団体コード': 'city_code',
  '都道府県名': 'prefecture_name',
  '施設所在地_都道府県': 'prefecture_name',
  '営業所名称': 'facility_name',
  '営業所名称_カナ': 'facility_name_kana',
  '施設名称_カナ': 'facility_name_kana',
  '営業の種類': 'business_type',
  '業態': 'business_subtype',
  '営業所所在地': 'address',
  '所在地_連結表記': 'address',
  '施設所在地_市区町村': 'city_name',
  '施設所在地_町字': 'address_town',
  '施設所在地_番地以下': 'address_street',
  '営業所方書': 'address_extra',
  '施設方書': 'address_extra',
  '営業所電話番号': 'phone',
  '施設電話番号': 'phone',
  '初回許可年月日': 'first_license_date',
  '許可年月日': 'license_date',
  '許可開始日': 'valid_start',
  '許可満了日': 'valid_end',
  '許可終了日': 'valid_end',

  // --- 厚労省 食品衛生申請等システム(i2fas) オープンデータ ---
  '自治体コード': 'city_code',
  '営業施設名称、屋号又は商号': 'facility_name',
  '営業施設名称、屋号又は商号（フリガナ）': 'facility_name_kana',
  '営業施設方書': 'address_extra',

  // --- 各自治体ポータル フォーマットのヘッダー揺れ ---
  '営業所名': 'facility_name', // 秋田市・柏市
  '営業所住所': 'address',
  '申請者名': 'operator_name',
  '許可期間（開始）': 'valid_start',
  '許可期間（満了）': 'valid_end',
  '業態名': 'business_subtype',
  '有効期限': 'valid_end',
  '営業所の名称': 'facility_name', // 川崎市
  '営業所の所在地': 'address',
  '営業所の所在地方書': 'address_extra',
  '営業者氏名（法人のみ）': 'operator_name',
  '営業種目': 'business_type',
  '施設屋号': 'facility_name', // 富山県
  '施設住所１': 'address',
  '施設住所２': 'address_extra',
  '施設市町村': 'city_name',
  '施設都道府県': 'prefecture_name',
  '細分類名': 'business_subtype',
  '新規許可日': 'first_license_date',
  '営業施設名称１': 'facility_name', // 長野県
  '営業所所在地１': 'address',
  '営業所所在地２': 'address_extra',
  '営業所名1': 'facility_name', // 藤沢市（TSV）
  '営業所所在地1': 'address',
  '営業所所在地2': 'address_extra',
  '詳細業種': 'business_subtype',
  '屋号(漢字)': 'facility_name', // 岐阜県
  '申請者名(漢字)': 'operator_name',
  '許可業種名': 'business_type',
  '最初の許可年月日': 'first_license_date',
  '現在の許可年月日': 'license_date',
  '現在の有効年月日': 'valid_end',
  '屋号名称': 'facility_name', // 千葉市（住所は区+町丁+番地に分割）
  '営業所住所区': 'address_ward',
  '営業所住所町丁': 'address_town',
  '営業所住所番地': 'address_street',
  '施設名称': 'facility_name', // 福井市（施設名称/施設所在地）
  '施設所在地': 'address',
  '施設電話番号': 'phone',
  // --- デジタル庁 推奨データセット（英語ヘッダー: 鳥取市 ほか） ---
  'name': 'facility_name',
  'nameKana': 'facility_name_kana',
  'category': 'business_type',
  'categoryDetail': 'business_subtype',
  'fullAddress': 'address',
  'prefecture': 'prefecture_name',
  'city': 'city_name',
  'latitude': 'lat',
  'longitude': 'lng',
  'contactPointPhoneNumber': 'phone',
  'localGovernmentCode': 'city_code',
  // --- 推奨データセット（全角アンダースコア＿: 松山市 ほか） ---
  '施設名称1': 'facility_name',
  '施設名称＿ｶﾅ': 'facility_name_kana',
  '営業の種類': 'business_type',
  '所在地＿連結表記': 'address',
  '施設所在地＿都道府県': 'prefecture_name',
  '施設所在地＿市区町村': 'city_name',
  '施設所在地＿町字': 'address_town',
  '施設所在地＿番地以下': 'address_street',
  '施設方書': 'address_extra',

  // --- BODIK 各自治体フォーマットのヘッダー揺れ ---
  '営業施設屋号': 'facility_name', // 四日市市
  '営業施設住所': 'address',
  '初許可日': 'first_license_date',
  '申請者氏名': 'operator_name',
  '施設_名称': 'facility_name', // 静岡市（半角アンダースコア区切り）
  '施設_所在地1': 'address',
  '施設_所在地2': 'address_extra',
  '施設_電話番号': 'phone',
  '申請者_氏名': 'operator_name',
  '終了年月日': 'valid_end',
  '営業許可番号': 'license_no', // 北九州市 ほか
  '許可期間_開始': 'valid_start',
  '許可期間_終了': 'valid_end',

  // --- 京都市フォーマット（区ごとシート） ---
  '申請者＿申請者名': 'operator_name',
  '営業所＿所在地１': 'address',
  '営業所＿所在地２': 'address_extra',
  '営業所＿名称（屋号・商号）１': 'facility_name',
  '営業所＿名称（屋号・商号）２': 'facility_name_sub',
  '許可届出番号': 'license_no',

  // --- 共通 ---
  '市区町村名': 'city_name',
  '緯度': 'lat',
  '経度': 'lng',
  '法人名': 'corporation_name',
  '法人番号': 'corporation_no',
  '許可番号': 'license_no',
  '指令番号': 'license_no',
  '廃業年月日': 'close_date',
};

// ---------------------------------------------------------------------------
// JIS都道府県コード（先頭2桁）→ 都道府県名
// ---------------------------------------------------------------------------
const PREFECTURE_BY_CODE = {
  '01': '北海道', '02': '青森県', '03': '岩手県', '04': '宮城県', '05': '秋田県',
  '06': '山形県', '07': '福島県', '08': '茨城県', '09': '栃木県', '10': '群馬県',
  '11': '埼玉県', '12': '千葉県', '13': '東京都', '14': '神奈川県', '15': '新潟県',
  '16': '富山県', '17': '石川県', '18': '福井県', '19': '山梨県', '20': '長野県',
  '21': '岐阜県', '22': '静岡県', '23': '愛知県', '24': '三重県', '25': '滋賀県',
  '26': '京都府', '27': '大阪府', '28': '兵庫県', '29': '奈良県', '30': '和歌山県',
  '31': '鳥取県', '32': '島根県', '33': '岡山県', '34': '広島県', '35': '山口県',
  '36': '徳島県', '37': '香川県', '38': '愛媛県', '39': '高知県', '40': '福岡県',
  '41': '佐賀県', '42': '長崎県', '43': '熊本県', '44': '大分県', '45': '宮崎県',
  '46': '鹿児島県', '47': '沖縄県',
};

const PREFECTURE_NAMES = Object.values(PREFECTURE_BY_CODE);

// 住所文字列から都道府県・市区町村を切り出す。
//   例: 「北海道足寄郡足寄町南三条…」→ ['北海道','足寄郡足寄町']
//       「北海道札幌市中央区…」→ ['北海道','札幌市']（政令市は市に集約）
//       「東京都千代田区…」→ ['東京都','千代田区']
// ジオコーディング結果に頼れない/座標だけある一部データ（例: i2fas は市区町村名カラムが
// 管轄自治体で施設の市区町村ではない）の grouping に使う。
function splitPrefCity(addr) {
  const a = String(addr || '').trim();
  const pref = PREFECTURE_NAMES.find((p) => a.startsWith(p));
  if (!pref) return [null, null];
  const rest = a.slice(pref.length);
  // 郡＋町村（「余市郡余市町」等、郡名に「市」を含むケースを先に処理）
  let m = rest.match(/^(.+?郡.+?[町村])/);
  if (m) return [pref, m[1]];
  // 市（政令市の行政区「札幌市中央区」は市に集約）
  m = rest.match(/^(.+?市)/);
  if (m) return [pref, m[1]];
  // 特別区・政令区
  m = rest.match(/^(.+?区)/);
  if (m) return [pref, m[1]];
  // 郡なしの町村
  m = rest.match(/^(.+?[町村])/);
  if (m) return [pref, m[1]];
  return [pref, null];
}

// レコードから都道府県名を解決する。
// locateByAddress ソースは施設住所から導出（管轄カラムを信用しない）。
// 通常: 都道府県名カラム → 市区町村コードの先頭2桁 → ソース既定値 → '不明'
// locateByAddress 用: 施設住所から [都道府県, 市区町村] を得る。
// 住所が都道府県名で始まらない場合は、管轄の都道府県名（施設の都道府県と一致）を前置して再解析する。
function locatedPrefCity(rec) {
  let [p, c] = splitPrefCity(rec.address);
  if (!p && rec.prefecture_name) [p, c] = splitPrefCity(`${rec.prefecture_name}${rec.address}`);
  return [p, c];
}

function resolvePrefecture(rec, source) {
  if (source.locateByAddress) return locatedPrefCity(rec)[0] || (rec.prefecture_name || '不明');
  const name = (rec.prefecture_name || '').trim();
  if (name) return name;
  const code = String(rec.city_code || '').trim();
  const m = code.match(/^(\d{2})/);
  if (m && PREFECTURE_BY_CODE[m[1]]) return PREFECTURE_BY_CODE[m[1]];
  if (source.defaultPref) return source.defaultPref;
  return '不明';
}

// レコードから市区町村名を解決する。
// locateByAddress ソースは施設住所から導出。
// 通常: 市区町村名カラム → ソース既定値 → '不明'（後段のジオコーディングで補完を試みる）
function resolveCity(rec, source) {
  if (source.locateByAddress) return locatedPrefCity(rec)[1] || '不明';
  const name = (rec.city_name || '').trim();
  if (name) return name;
  if (source.defaultCity) return source.defaultCity;
  return '不明';
}

// ---------------------------------------------------------------------------
// 和暦 → 西暦 の日付正規化
//   R{n}.MM.DD → {2018+n}-MM-DD
//   H{n}.MM.DD → {1988+n}-MM-DD
// ---------------------------------------------------------------------------
function normalizeDate(raw) {
  if (!raw) return null;
  const s = String(raw).trim();
  if (!s) return null;

  // 和暦（令和・平成）
  const wareki = s.match(/^([RHrh])\s*0*(\d+)[.\-/年]\s*0*(\d+)[.\-/月]\s*0*(\d+)/);
  if (wareki) {
    const era = wareki[1].toUpperCase();
    const eraYear = parseInt(wareki[2], 10);
    const month = String(parseInt(wareki[3], 10)).padStart(2, '0');
    const day = String(parseInt(wareki[4], 10)).padStart(2, '0');
    const base = era === 'R' ? 2018 : 1988;
    return `${base + eraYear}-${month}-${day}`;
  }

  // 既に西暦（YYYY-MM-DD / YYYY/MM/DD / YYYY.MM.DD / YYYY年MM月DD日）
  const seireki = s.match(/^(\d{4})[.\-/年]\s*0*(\d+)[.\-/月]\s*0*(\d+)/);
  if (seireki) {
    const month = String(parseInt(seireki[2], 10)).padStart(2, '0');
    const day = String(parseInt(seireki[3], 10)).padStart(2, '0');
    return `${seireki[1]}-${month}-${day}`;
  }

  return null;
}

// ---------------------------------------------------------------------------
// リソース取得（CKAN / 直リンクGET / POSTフォーム）
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// CKAN API: リソース情報（URL・フォーマット）を取得。
// 一時的なレート制限（403/429）や5xxは指数バックオフで数回リトライする。
async function fetchCkanResourceInfo(ckanBase, resourceId, attempt = 0) {
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
  if (!json.success) {
    throw new Error(`resource_show returned success=false (${resourceId})`);
  }
  return json.result; // { url, format, ... }
}

// キャッシュ済みファイルを拡張子から探す（dry-run で CKAN 問い合わせを避けるため）
function findCachedFile(key) {
  for (const ext of ['csv', 'xlsx', 'xls']) {
    const p = path.join(CACHE_DIR, `${key}.${ext}`);
    if (fs.existsSync(p)) return { cachePath: p, format: ext };
  }
  return null;
}

// bot 対策で User-Agent 等を求めるサーバがあるため、常識的なヘッダを付ける。
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; japan-facilities-api/1.0; +https://github.com/gl20percentclub/japan-facilities-address)',
  'Accept-Language': 'ja,en;q=0.8',
  Accept: '*/*',
};

// ZIP バイト列から対象の csv/xlsx/xls を取り出す。
// entryPattern（正規表現文字列）に一致するエントリ、無ければ最初の csv/xlsx/xls。
async function extractFromZip(zipBuf, entryPattern) {
  const { unzipSync } = await import('fflate');
  const files = unzipSync(new Uint8Array(zipBuf));
  const names = Object.keys(files).filter((n) => !n.endsWith('/'));
  const re = entryPattern ? new RegExp(entryPattern, 'i') : /\.(csv|xlsx|xls)$/i;
  let name = names.find((n) => re.test(n)) || names.find((n) => /\.(csv|xlsx|xls)$/i.test(n));
  if (!name) throw new Error(`ZIP 内に csv/xlsx/xls が見つかりません: [${names.join(', ')}]`);
  const m = name.toLowerCase().match(/\.(csv|xlsx|xls)$/);
  return { buf: Buffer.from(files[name]), format: m[1] };
}

// ソースが取得すべきファイル群を返す。単一 url でも複数 urls[] でも扱える。
// 返り値: [{ cachePath, format }, ...]（複数ファイルはパース後に結合される）
async function acquire(source) {
  const a = source.acquire;

  // i2fasglob: scripts/fetch-i2fas.mjs が取得した .cache/i2fas/*.csv をまとめて読む
  // （厚労省 食品衛生申請等システムのオープンデータ。取得はブラウザ自動化のため別スクリプト）。
  if (a.type === 'i2fasglob') {
    const dir = path.join(CACHE_DIR, 'i2fas');
    if (!fs.existsSync(dir)) {
      throw new Error(`.cache/i2fas がありません（先に node scripts/fetch-i2fas.mjs を実行）`);
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.csv')).sort();
    if (files.length === 0) throw new Error('.cache/i2fas に CSV がありません');
    console.log(`  i2fas キャッシュ ${files.length} ファイルを使用`);
    return files.map((f) => ({ cachePath: path.join(dir, f), format: 'csv' }));
  }

  const urls = a.urls || (a.url ? [a.url] : [null]); // ckan は url なしで resourceId 解決
  const results = [];

  for (let i = 0; i < urls.length; i++) {
    const suffix = urls.length > 1 ? `-${i}` : '';
    const key = `${source.key}${suffix}`;

    // dry-run はキャッシュのみ使用。CKAN 問い合わせをせず拡張子からファイルを特定する。
    if (DRY_RUN) {
      const hit = findCachedFile(key);
      if (!hit) throw new Error(`--dry-run ですがキャッシュが存在しません: ${key}`);
      console.log(`  [dry-run] キャッシュを使用: ${hit.cachePath}`);
      results.push(hit);
      continue;
    }

    let downloadUrl = urls[i];
    let format = (a.format || '').toLowerCase();

    if (a.type === 'ckan') {
      const info = await fetchCkanResourceInfo(a.ckanBase, a.resourceId);
      downloadUrl = info.url;
      if (!format) format = (info.format || '').toLowerCase();
    }
    if (!format) {
      const m = String(downloadUrl).toLowerCase().match(/\.(csv|tsv|txt|xlsx|xls|zip)(?:$|\?)/);
      format = m ? m[1] : 'csv';
    }
    if (format === 'txt') format = 'tsv'; // LinkData 等の tab 区切り txt

    const fetchOpts = { headers: { ...DEFAULT_HEADERS } };
    if (a.type === 'post') {
      fetchOpts.method = 'POST';
      fetchOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      fetchOpts.body = new URLSearchParams(a.body || {}).toString();
    }

    console.log(`  ダウンロード中: ${downloadUrl}`);
    const res = await fetch(downloadUrl, fetchOpts);
    if (!res.ok) {
      throw new Error(`ダウンロード失敗: ${res.status} ${res.statusText}`);
    }
    let buf = Buffer.from(await res.arrayBuffer());

    // format: 'zip' のとき、中の csv/xlsx/xls を取り出す。
    // （xlsx/xls も実体は ZIP なので、マジックバイトでなく明示指定で判定する。）
    // acquire.zipEntry（正規表現文字列）で対象を指定でき、無ければ最初の対象ファイル。
    if (format === 'zip') {
      const extracted = await extractFromZip(buf, a.zipEntry);
      buf = extracted.buf;
      format = extracted.format;
    }

    const ext = format === 'xlsx' ? 'xlsx' : format === 'xls' ? 'xls' : format === 'tsv' ? 'tsv' : 'csv';
    const cachePath = path.join(CACHE_DIR, `${key}.${ext}`);
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(cachePath, buf);
    console.log(`  キャッシュに保存: ${cachePath} (${buf.length} bytes)`);
    results.push({ cachePath, format });
  }
  return results;
}

// ---------------------------------------------------------------------------
// パース
// ---------------------------------------------------------------------------

// CSV のバイト列を文字列にデコードする。
//   encoding 明示（'utf-8' / 'shift_jis' / 'utf-16' / 'utf-16le' / 'utf-16be'）があればそれを使う。
//   'auto'（既定）は BOM と UTF-8 妥当性から判定し、化ける場合は Shift_JIS にフォールバック。
async function decodeCsvBuffer(buf, encoding) {
  const { default: iconv } = await import('iconv-lite');
  const enc = (encoding || 'auto').toLowerCase();

  if (enc === 'shift_jis' || enc === 'sjis' || enc === 'cp932') {
    return iconv.decode(buf, 'Shift_JIS');
  }
  if (enc === 'utf-8' || enc === 'utf8') {
    return iconv.decode(buf, 'utf-8');
  }
  if (enc === 'utf-16' || enc === 'utf16' || enc === 'utf-16le' || enc === 'utf16le') {
    return iconv.decode(buf, 'utf-16le');
  }
  if (enc === 'utf-16be' || enc === 'utf16be') {
    return iconv.decode(buf, 'utf-16be');
  }

  // auto: BOM から判定
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) return iconv.decode(buf, 'utf-16le');
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) return iconv.decode(buf, 'utf-16be');
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    return iconv.decode(buf, 'utf-8');
  }
  // UTF-8 としてデコードし、置換文字（U+FFFD）が出るようなら Shift_JIS とみなす
  const asUtf8 = iconv.decode(buf, 'utf-8');
  if (asUtf8.includes('�')) {
    return iconv.decode(buf, 'Shift_JIS');
  }
  return asUtf8;
}

// 表（行の配列）から、ヘッダー行を自動判定してレコード（{ヘッダー: 値}）配列に変換する。
// 一部自治体データは先頭にタイトル行や空行があるため、先頭行をヘッダーと決め打ちにしない。
// COLUMN_MAP に載っている見出しを最も多く含む行をヘッダーとみなす（無ければ先頭行）。
function detectHeaderRow(rows) {
  let bestIdx = 0;
  let bestScore = -1;
  const limit = Math.min(rows.length, 8);
  for (let i = 0; i < limit; i++) {
    const score = rows[i].reduce(
      (n, c) => n + (COLUMN_MAP[String(c).trim().replace(/^﻿/, '')] ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestIdx = i;
    }
  }
  return bestScore >= 2 ? bestIdx : 0;
}

function rowsToRecords(rows) {
  if (rows.length === 0) return [];
  const hi = detectHeaderRow(rows);
  const headers = rows[hi].map((h) => String(h).trim().replace(/^﻿/, ''));
  return rows.slice(hi + 1).map((cells) => {
    const obj = {};
    headers.forEach((h, i) => {
      if (!h) return;
      const v = cells[i];
      obj[h] = v === undefined || v === null ? '' : typeof v === 'string' ? v : String(v);
    });
    return obj;
  });
}

async function parseCSV(cachePath, encoding, delimiter = ',') {
  const buf = fs.readFileSync(cachePath);
  const text = await decodeCsvBuffer(buf, encoding);
  return rowsToRecords(parseCSVText(text, delimiter));
}

// RFC4180 風の区切りテキストパーサ（引用符・引用符内の改行/区切り文字に対応）。
// delimiter を切り替えれば CSV（,）でも TSV（\t）でも扱える。
function parseCSVText(text, delimiter = ',') {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  const len = text.length;

  for (let i = 0; i < len; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === delimiter) {
      row.push(field);
      field = '';
    } else if (c === '\r') {
      // 次の \n と合わせて1改行として扱う
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  // 末尾フィールド/行
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // 空行を除去
  return rows.filter((r) => r.some((cell) => cell.trim() !== ''));
}

// XLSX / XLS パース。allSheets=true の場合は全シートを結合する（例: 京都市は区ごとにシート）。
async function parseExcel(cachePath, { allSheets = false } = {}) {
  const xlsx = await import('xlsx');
  const wb = xlsx.read(fs.readFileSync(cachePath), { type: 'buffer' });
  const names = allSheets ? wb.SheetNames : [wb.SheetNames[0]];
  const out = [];
  for (const name of names) {
    // header:1 で行の配列として読み、ヘッダー行を自動判定してからレコード化する
    // （タイトル行が先頭にあるシートに対応するため）。
    const rows = xlsx.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: '', raw: false });
    out.push(...rowsToRecords(rows));
  }
  return out;
}

async function parseSource(source, cachePath, format) {
  if (format === 'xlsx' || format === 'xls') {
    return parseExcel(cachePath, { allSheets: !!source.allSheets });
  }
  // TSV（タブ区切り）は delimiter を切り替える
  const delimiter = format === 'tsv' || source.acquire.format === 'tsv' ? '\t' : ',';
  return parseCSV(cachePath, source.encoding, delimiter);
}

// ---------------------------------------------------------------------------
// レコード変換
// ---------------------------------------------------------------------------

// 生レコード（元ヘッダーのまま）→ 内部キーのレコードに変換
function mapRecord(raw) {
  const out = {};
  for (const [key, value] of Object.entries(raw)) {
    const cleanKey = String(key).trim().replace(/^﻿/, '');
    const internal = COLUMN_MAP[cleanKey];
    if (internal && out[internal] === undefined) {
      out[internal] = typeof value === 'string' ? value.trim() : value;
    }
  }
  return out;
}

// 内部レコード → 出力用の施設オブジェクト
function toFacility(rec) {
  const name = rec.facility_name || rec.operator_name || '';
  // 所在地。分割カラム（町字・番地以下）しか無い場合はそれを結合し、方書があれば付す。
  const base =
    rec.address || [rec.address_ward, rec.address_town, rec.address_street].filter(Boolean).join('');
  const address = [base, rec.address_extra]
    .filter((s) => s && String(s).trim())
    .join(' ')
    .trim();
  if (!name && !address) return null; // name と address が両方空ならスキップ

  const [lat, lng] = sanitizeLatLng(parseCoord(rec.lat), parseCoord(rec.lng));

  return {
    name,
    name_kana: rec.facility_name_kana || rec.operator_name_kana || '',
    business_type: rec.business_type || '',
    address,
    lat,
    lng,
    // ジオコーディングで座標を補完した場合の精度レベル（point.level）。
    // 元データに座標があった場合や補完できなかった場合は null。
    geocoding_level: null,
    phone: rec.phone || '',
    license_no: rec.license_no || '',
    license_date: normalizeDate(rec.license_date),
    expire_date: normalizeDate(rec.valid_end),
  };
}

function parseCoord(v) {
  if (v === undefined || v === null || String(v).trim() === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

// 日本国内の緯度・経度のおおよその範囲
const JP_LAT = [20, 46];
const JP_LNG = [122, 154];
const inRange = (x, [lo, hi]) => x != null && x >= lo && x <= hi;

// 緯度・経度のサニティ補正。
// 一部の自治体データ（例: 大阪市）は「緯度」「経度」列の中身が逆になっている。
// 値が明らかに入れ替わっている（lat が経度域・lng が緯度域）場合は入れ替える。
// 補正しても日本の範囲に収まらない座標は無効として null にする（誤配置を防ぐ）。
function sanitizeLatLng(lat, lng) {
  if (lat == null || lng == null) return [lat, lng];
  if (inRange(lat, JP_LAT) && inRange(lng, JP_LNG)) return [lat, lng];
  if (inRange(lng, JP_LAT) && inRange(lat, JP_LNG)) return [lng, lat]; // 入れ替わり
  return [null, null]; // どちらでも日本域に収まらない → 無効
}

// ---------------------------------------------------------------------------
// 出力ヘルパ
// ---------------------------------------------------------------------------

// 安全なディレクトリ名（スラッシュ等を除去）
function safeName(s) {
  return String(s).replace(/[\\/:*?"<>|]/g, '_').trim();
}

function writeJSON(filePath, obj) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + '\n');
}

// ---------------------------------------------------------------------------
// ジオコーディング
//   緯度経度が無い施設を、住所から @geolonia/normalize-japanese-addresses で補完する。
//   併せて正規化結果の都道府県・市区町村も取得し、これらのカラムが無いデータ
//   （例: 奈良県データ）の _pref / _city 補完にも使う。
//   結果は .cache/geocode-cache.json に永続化し、再実行・週次クロールを高速化する。
// ---------------------------------------------------------------------------

// 住所が都道府県名で始まっていなければ前置し、正規化の精度を上げる
function geocodeQuery(facility) {
  const addr = facility.address || '';
  const pref = facility._pref && facility._pref !== '不明' ? facility._pref : '';
  return pref && !addr.startsWith(pref) ? `${pref}${addr}` : addr;
}

function loadGeocodeCache() {
  try {
    return JSON.parse(fs.readFileSync(GEOCODE_CACHE_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

function saveGeocodeCache(cache) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(GEOCODE_CACHE_PATH, JSON.stringify(cache));
}

// 指定並列数でタスクを処理する単純なワーカープール
async function runPool(items, concurrency, worker) {
  let next = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) {
      const idx = next++;
      await worker(items[idx], idx);
    }
  });
  await Promise.all(workers);
}

async function enrichWithGeocoding(facilities) {
  const targets = facilities.filter((f) => (f.lat == null || f.lng == null) && f.address);
  if (targets.length === 0) {
    console.log('  座標補完が必要な施設はありません');
    return;
  }

  const cache = loadGeocodeCache();
  // 同一住所への重複リクエストを避けるためクエリ単位に集約
  const uniqueQueries = [...new Set(targets.map(geocodeQuery))];
  const toFetch = uniqueQueries.filter((q) => !(q in cache));

  console.log(
    `  座標補完が必要: ${targets.length}施設 / ユニーク住所 ${uniqueQueries.length}件` +
      `（キャッシュ済 ${uniqueQueries.length - toFetch.length}件、新規 ${toFetch.length}件）`,
  );

  njaConfig.cacheSize = 4000;

  let done = 0;
  let failed = 0; // 住所として解決できなかった（恒久的な失敗）
  let errored = 0; // ネットワーク障害・レート制限等の一過性エラー（キャッシュせず次回再試行）
  await runPool(toFetch, GEOCODE_CONCURRENCY, async (query) => {
    try {
      const r = await normalize(query);
      if (r && r.point && Number.isFinite(r.point.lat) && Number.isFinite(r.point.lng)) {
        cache[query] = {
          lat: r.point.lat,
          lng: r.point.lng,
          level: r.point.level ?? null,
          pref: r.pref || null,
          city: r.city || null,
        };
      } else if (r && (r.pref || r.city)) {
        // 座標は取れなかったが都道府県・市区町村は解決できた場合も記録する
        // （_pref / _city 補完に使う）。座標は null。
        cache[query] = { lat: null, lng: null, level: null, pref: r.pref || null, city: r.city || null };
        failed++;
      } else {
        // 住所として解決できなかった恒久的な失敗。null を記録し再試行を避ける。
        cache[query] = null;
        failed++;
      }
    } catch {
      // ネットワーク障害・レート制限・タイムアウト等の一過性エラー。
      // 恒久的な失敗（null 記録）とは区別し、キャッシュには書かないことで
      // 次回実行時（`!(q in cache)`）に再試行されるようにする。一時的な障害が
      // キャッシュに焼き付いて座標が永久に null になるのを防ぐ。
      errored++;
    }
    done++;
    if (done % 1000 === 0) {
      console.log(`    ...${done}/${toFetch.length}件 取得`);
      saveGeocodeCache(cache);
    }
  });
  saveGeocodeCache(cache);

  // キャッシュの結果を施設へ反映（座標と、未確定の都道府県・市区町村）
  let filled = 0;
  for (const f of targets) {
    const hit = cache[geocodeQuery(f)];
    if (!hit) continue;
    if (hit.lat != null && hit.lng != null) {
      f.lat = hit.lat;
      f.lng = hit.lng;
      f.geocoding_level = hit.level;
      filled++;
    }
    if ((!f._pref || f._pref === '不明') && hit.pref) f._pref = hit.pref;
    if ((!f._city || f._city === '不明') && hit.city) f._city = hit.city;
  }
  console.log(
    `  座標を補完: ${filled}/${targets.length}施設` +
      `（住所解決失敗 ${failed}件、一時エラーで未取得 ${errored}件は次回再試行）`,
  );
}

// ---------------------------------------------------------------------------
// メイン
// ---------------------------------------------------------------------------
async function main() {
  const sources = SOURCES.filter((s) => !ONLY || ONLY.has(s.key));
  console.log(`全国 食品営業許可 施設検索API クローラー${DRY_RUN ? ' (--dry-run)' : ''}`);
  console.log(`対象ソース: ${sources.length}件${ONLY ? `（--only=${[...ONLY].join(',')}）` : ''}\n`);

  const facilities = [];

  for (const source of sources) {
    console.log(`▼ ${source.key}: ${source.source}`);
    try {
      const files = await acquire(source);
      const rawRecords = [];
      for (const { cachePath, format } of files) {
        rawRecords.push(...(await parseSource(source, cachePath, format)));
      }
      console.log(`  ${rawRecords.length}行を読み込み (${files.map((f) => f.format).join('+')})`);

      let kept = 0;
      for (const raw of rawRecords) {
        const rec = mapRecord(raw);
        const facility = toFacility(rec);
        if (facility) {
          facilities.push({
            ...facility,
            _pref: resolvePrefecture(rec, source),
            _city: resolveCity(rec, source),
            _source: source.source,
            _license: source.license || null,
          });
          kept++;
        }
      }
      console.log(`  有効施設: ${kept}件`);
    } catch (err) {
      console.error(`  ⚠ ${source.key} をスキップ: ${err.message}`);
    }
  }

  console.log(`\n有効な施設: 合計 ${facilities.length}件`);

  // 緯度経度の無い施設を住所からジオコーディングして補完
  if (NO_GEOCODE) {
    console.log('\n▼ ジオコーディング: スキップ (--no-geocode)');
  } else {
    console.log('\n▼ ジオコーディング');
    await enrichWithGeocoding(facilities);
  }

  // 都道府県 → 市区町村 → 施設 の3階層ツリーを組み立て
  const tree = new Map(); // prefecture -> Map(city -> facility[])
  const sourcesByPref = new Map(); // prefecture -> Set("source|license")
  const sourcesByCity = new Map(); // "pref/city" -> Set("source|license")
  for (const f of facilities) {
    const pref = f._pref || '不明';
    const city = f._city || '不明';
    const srcKey = `${f._source || ''}|${f._license || ''}`;
    delete f._pref;
    delete f._city;
    delete f._source;
    delete f._license;

    if (!tree.has(pref)) tree.set(pref, new Map());
    const byCity = tree.get(pref);
    if (!byCity.has(city)) byCity.set(city, []);
    byCity.get(city).push(f);

    if (!sourcesByPref.has(pref)) sourcesByPref.set(pref, new Set());
    sourcesByPref.get(pref).add(srcKey);
    const ck = `${pref}/${city}`;
    if (!sourcesByCity.has(ck)) sourcesByCity.set(ck, new Set());
    sourcesByCity.get(ck).add(srcKey);
  }

  // "source|license" の Set を [{source, license}] 配列に変換
  const toSourceList = (set) =>
    [...set].map((s) => {
      const [source, license] = s.split('|');
      return { source, license: license || null };
    });

  // 出力ディレクトリをクリーンに作り直す
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const updated = Math.floor(Date.now() / 1000);

  // 全ソースの一覧（トップ index.json 用）
  const allSet = new Set();
  for (const set of sourcesByPref.values()) for (const s of set) allSet.add(s);

  // トップレベル index.json（都道府県名 → 市区町村名の配列）
  const topData = {};
  for (const [pref, byCity] of tree) {
    topData[pref] = [...byCity.keys()].sort();
  }
  writeJSON(path.join(OUT_DIR, 'index.json'), {
    meta: { updated, sources: toSourceList(allSet) },
    data: topData,
  });

  let cityCount = 0;
  for (const [pref, byCity] of tree) {
    const prefDir = path.join(OUT_DIR, safeName(pref));

    // 都道府県/index.json（市区町村名 → 施設数）
    const counts = {};
    for (const [city, list] of byCity) {
      counts[city] = list.length;
    }
    writeJSON(path.join(prefDir, 'index.json'), {
      meta: { updated, sources: toSourceList(sourcesByPref.get(pref)) },
      data: counts,
    });

    // 都道府県/市区町村/data.json（施設配列）
    for (const [city, list] of byCity) {
      cityCount++;
      writeJSON(path.join(prefDir, safeName(city), 'data.json'), {
        meta: { updated, sources: toSourceList(sourcesByCity.get(`${pref}/${city}`)) },
        data: list,
      });
    }
  }

  // 施設名検索用のコンパクトな索引 api/search-index.json も生成する。
  generateSearchIndex();

  // README の「収録データ」統計（件数・サイズ）も最新化する。
  generateReadmeStats();

  console.log(`\n✅ 生成完了: ${tree.size}都道府県 / ${cityCount}市区町村 / ${facilities.length}施設`);
  console.log(`   出力先: ${path.relative(ROOT, OUT_DIR)}`);
}

// 直接実行された場合のみクロールを開始する（テストから import しても main は走らない）。
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error('\n❌ エラー:', err.message);
    process.exit(1);
  });
}

// テスト用に純粋関数をエクスポートする。
export { normalizeDate, sanitizeLatLng, resolvePrefecture, resolveCity, mapRecord, toFacility, parseCSVText, splitPrefCity };
