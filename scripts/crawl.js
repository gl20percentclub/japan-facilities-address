// 沖縄県施設検索API クローラー
//
// 沖縄県BODIKオープンデータ（食品営業許可・届出）をクロールし、
// geolonia/japanese-addresses と同じ思想の階層型静的JSONを生成する。
//
// 出力構造（都道府県 > 市区町村 > data.json）:
//   api/facilities/index.json                都道府県名 → 市区町村名の配列
//   api/facilities/{都道府県}/index.json      市区町村名 → 施設数
//   api/facilities/{都道府県}/{市区町村}/data.json  施設オブジェクトの配列
//
// 緯度経度の無い施設は @geolonia/normalize-japanese-addresses で住所から付与する。
//
// 使い方:
//   node scripts/crawl.js              通常実行（ダウンロード→ジオコーディング→生成）
//   node scripts/crawl.js --dry-run    ダウンロードをスキップしキャッシュを使う
//   node scripts/crawl.js --no-geocode ジオコーディングをスキップ

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalize, config as njaConfig } from '@geolonia/normalize-japanese-addresses';
import { generateSearchIndex } from './gen-search-index.js';
import { generateReadmeStats } from './gen-readme-stats.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(ROOT, '.cache');
const GEOCODE_CACHE_PATH = path.join(CACHE_DIR, 'geocode-cache.json');
const OUT_DIR = path.join(ROOT, 'api', 'facilities');

const CKAN_BASE = 'https://data.bodik.jp';

// 対象リソースID。ここにIDを追加するだけで複数データを統合できる。
const TARGET_RESOURCE_IDS = [
  'c9bf82c1-0689-4354-aada-c422f052be5e',
];

const META = {
  source: '沖縄県食品営業許可・届出',
  license: 'CC BY 4.0',
};

const DRY_RUN = process.argv.includes('--dry-run');
const NO_GEOCODE = process.argv.includes('--no-geocode');

// ジオコーディングの並列数。公開APIに優しくするため控えめにする。
// （同一市区町村のデータはLRUキャッシュで再利用されるため過剰な並列は不要）
const GEOCODE_CONCURRENCY = 8;

// ---------------------------------------------------------------------------
// カラムマッピング（元CSVヘッダー → 内部キー）
// ---------------------------------------------------------------------------
const COLUMN_MAP = {
  // --- 旧フォーマット（指示書記載） ---
  '市区町村コード（JIS市区町村コード）': 'city_code',
  '市区町村コード': 'city_code',
  'NO': 'no',
  '市区町村名（カナ）': 'city_name_kana',
  '営業者名': 'operator_name',
  '営業者名（カナ）': 'operator_name_kana',
  '業態の種類': 'business_type',
  '業種名': 'business_type',
  '施設名': 'facility_name',
  '営業施設名称': 'facility_name',
  '施設名称': 'facility_name',
  '営業施設所在地': 'address',
  '営業施設電話番号': 'phone',
  '許可認証日': 'license_date',
  '有効期間開始日': 'valid_start',
  '有効期間終了日': 'valid_end',

  // --- 新・標準フォーマット（食品等営業許可・届出一覧） ---
  '都道府県コード又は市区町村コード': 'city_code',
  '都道府県名': 'prefecture_name',
  '営業所名称': 'facility_name',
  '営業所名称_カナ': 'facility_name_kana',
  '営業の種類': 'business_type',
  '営業所所在地': 'address',
  '営業所方書': 'address_extra',
  '営業所電話番号': 'phone',
  '初回許可年月日': 'first_license_date',
  '許可年月日': 'license_date',
  '許可開始日': 'valid_start',
  '許可満了日': 'valid_end',

  // --- 共通 ---
  '市区町村名': 'city_name',
  '緯度': 'lat',
  '経度': 'lng',
  '法人名': 'corporation_name',
  '法人番号': 'corporation_no',
  '許可番号': 'license_no',
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

// レコードから都道府県名を解決する。
// 優先: 都道府県名カラム → 市区町村コードの先頭2桁 → '不明'
function resolvePrefecture(rec) {
  const name = (rec.prefecture_name || '').trim();
  if (name) return name;
  const code = String(rec.city_code || '').trim();
  const m = code.match(/^(\d{2})/);
  if (m && PREFECTURE_BY_CODE[m[1]]) return PREFECTURE_BY_CODE[m[1]];
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

  // 既に西暦（YYYY-MM-DD / YYYY/MM/DD / YYYY.MM.DD）
  const seireki = s.match(/^(\d{4})[.\-/年]\s*0*(\d+)[.\-/月]\s*0*(\d+)/);
  if (seireki) {
    const month = String(parseInt(seireki[2], 10)).padStart(2, '0');
    const day = String(parseInt(seireki[3], 10)).padStart(2, '0');
    return `${seireki[1]}-${month}-${day}`;
  }

  return null;
}

// ---------------------------------------------------------------------------
// CKAN API: リソース情報（URL・フォーマット）を取得
// ---------------------------------------------------------------------------
async function fetchResourceInfo(resourceId) {
  const url = `${CKAN_BASE}/api/3/action/resource_show?id=${encodeURIComponent(resourceId)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`resource_show failed: ${res.status} ${res.statusText} (${resourceId})`);
  }
  const json = await res.json();
  if (!json.success) {
    throw new Error(`resource_show returned success=false (${resourceId})`);
  }
  return json.result; // { url, format, ... }
}

// ---------------------------------------------------------------------------
// リソースファイルをダウンロード（.cache/ にキャッシュ）
// ---------------------------------------------------------------------------
async function downloadResource(resourceId, info) {
  const format = (info.format || '').toLowerCase();
  const ext = format === 'xlsx' ? 'xlsx' : 'csv';
  const cachePath = path.join(CACHE_DIR, `${resourceId}.${ext}`);

  if (DRY_RUN) {
    if (!fs.existsSync(cachePath)) {
      throw new Error(`--dry-run ですがキャッシュが存在しません: ${cachePath}`);
    }
    console.log(`  [dry-run] キャッシュを使用: ${cachePath}`);
    return { cachePath, format };
  }

  console.log(`  ダウンロード中: ${info.url}`);
  const res = await fetch(info.url);
  if (!res.ok) {
    throw new Error(`ダウンロード失敗: ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(cachePath, buf);
  console.log(`  キャッシュに保存: ${cachePath} (${buf.length} bytes)`);
  return { cachePath, format };
}

// ---------------------------------------------------------------------------
// CSVパース（Shift-JIS → UTF-8 変換のため iconv-lite を dynamic import）
// ---------------------------------------------------------------------------
async function parseCSV(cachePath) {
  const { default: iconv } = await import('iconv-lite');
  const buf = fs.readFileSync(cachePath);
  const text = iconv.decode(buf, 'Shift_JIS');
  const rows = parseCSVText(text);
  if (rows.length === 0) return [];

  const headers = rows[0].map((h) => h.trim().replace(/^﻿/, ''));
  return rows.slice(1).map((cells) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cells[i] !== undefined ? cells[i] : '';
    });
    return obj;
  });
}

// RFC4180 風のCSVパーサ（引用符・引用符内の改行/カンマに対応）
function parseCSVText(text) {
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
    } else if (c === ',') {
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

// ---------------------------------------------------------------------------
// XLSXパース
// ---------------------------------------------------------------------------
async function parseXLSX(cachePath) {
  const xlsx = await import('xlsx');
  const wb = xlsx.read(fs.readFileSync(cachePath), { type: 'buffer' });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet, { defval: '', raw: false });
}

// ---------------------------------------------------------------------------
// 生レコード（元ヘッダーのまま）→ 内部キーのレコードに変換
// ---------------------------------------------------------------------------
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
  // 所在地（方書があれば結合）
  const address = [rec.address, rec.address_extra]
    .filter((s) => s && String(s).trim())
    .join(' ')
    .trim();
  if (!name && !address) return null; // name と address が両方空ならスキップ

  const lat = parseCoord(rec.lat);
  const lng = parseCoord(rec.lng);

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

// ---------------------------------------------------------------------------
// 安全なディレクトリ名（スラッシュ等を除去）
// ---------------------------------------------------------------------------
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
//   結果は .cache/geocode-cache.json に永続化し、再実行・週次クロールを高速化する。
// ---------------------------------------------------------------------------

// 住所が都道府県名で始まっていなければ前置し、正規化の精度を上げる
function geocodeQuery(facility) {
  const addr = facility.address || '';
  const pref = facility._pref || '';
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

  njaConfig.cacheSize = 2000;

  let done = 0;
  let failed = 0; // 住所として解決できなかった（恒久的な失敗）
  let errored = 0; // ネットワーク障害・レート制限等の一過性エラー（キャッシュせず次回再試行）
  await runPool(toFetch, GEOCODE_CONCURRENCY, async (query) => {
    try {
      const r = await normalize(query);
      if (r && r.point && Number.isFinite(r.point.lat) && Number.isFinite(r.point.lng)) {
        cache[query] = { lat: r.point.lat, lng: r.point.lng, level: r.point.level ?? null };
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

  // キャッシュの結果を施設へ反映
  let filled = 0;
  for (const f of targets) {
    const hit = cache[geocodeQuery(f)];
    if (hit) {
      f.lat = hit.lat;
      f.lng = hit.lng;
      f.geocoding_level = hit.level;
      filled++;
    }
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
  console.log(`沖縄県施設検索API クローラー${DRY_RUN ? ' (--dry-run)' : ''}`);
  console.log(`対象リソース: ${TARGET_RESOURCE_IDS.length}件\n`);

  const facilities = [];

  for (const resourceId of TARGET_RESOURCE_IDS) {
    console.log(`▼ リソース: ${resourceId}`);
    const info = await fetchResourceInfo(resourceId);
    const { cachePath, format } = await downloadResource(resourceId, info);

    let rawRecords;
    if (format === 'xlsx') {
      rawRecords = await parseXLSX(cachePath);
    } else {
      rawRecords = await parseCSV(cachePath);
    }
    console.log(`  ${rawRecords.length}行を読み込み`);

    for (const raw of rawRecords) {
      const rec = mapRecord(raw);
      const facility = toFacility(rec);
      if (facility) {
        facilities.push({
          ...facility,
          _pref: resolvePrefecture(rec),
          _city: rec.city_name || '不明',
        });
      }
    }
  }

  console.log(`\n有効な施設: ${facilities.length}件`);

  // 緯度経度の無い施設を住所からジオコーディングして補完
  if (NO_GEOCODE) {
    console.log('\n▼ ジオコーディング: スキップ (--no-geocode)');
  } else {
    console.log('\n▼ ジオコーディング');
    await enrichWithGeocoding(facilities);
  }

  // 都道府県 → 市区町村 → 施設 の3階層ツリーを組み立て
  const tree = new Map(); // prefecture -> Map(city -> facility[])
  for (const f of facilities) {
    const pref = f._pref;
    const city = f._city;
    delete f._pref;
    delete f._city;
    if (!tree.has(pref)) tree.set(pref, new Map());
    const byCity = tree.get(pref);
    if (!byCity.has(city)) byCity.set(city, []);
    byCity.get(city).push(f);
  }

  // 出力ディレクトリをクリーンに作り直す
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const updated = Math.floor(Date.now() / 1000);

  // トップレベル index.json（都道府県名 → 市区町村名の配列）
  const topData = {};
  for (const [pref, byCity] of tree) {
    topData[pref] = [...byCity.keys()].sort();
  }
  writeJSON(path.join(OUT_DIR, 'index.json'), {
    meta: { updated, source: META.source, license: META.license },
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
      meta: { updated },
      data: counts,
    });

    // 都道府県/市区町村/data.json（施設配列）
    for (const [city, list] of byCity) {
      cityCount++;
      writeJSON(path.join(prefDir, safeName(city), 'data.json'), {
        meta: { updated },
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

main().catch((err) => {
  console.error('\n❌ エラー:', err.message);
  process.exit(1);
});
