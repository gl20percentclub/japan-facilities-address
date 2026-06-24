// 沖縄県施設検索API クローラー
//
// 沖縄県BODIKオープンデータ（食品営業許可・届出）をクロールし、
// geolonia/japanese-addresses と同じ思想の階層型静的JSONを生成する。
//
// 使い方:
//   node scripts/crawl.js            通常実行（ダウンロード→生成）
//   node scripts/crawl.js --dry-run  ダウンロードをスキップしキャッシュを使う

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(ROOT, '.cache');
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
        facilities.push({ ...facility, _city: rec.city_name || '不明' });
      }
    }
  }

  console.log(`\n有効な施設: ${facilities.length}件`);

  // 市区町村 → 業種 → 施設 の3階層ツリーを組み立て
  const tree = new Map(); // city -> Map(businessType -> facility[])
  for (const f of facilities) {
    const city = f._city;
    const bt = f.business_type || '不明';
    delete f._city;
    if (!tree.has(city)) tree.set(city, new Map());
    const byType = tree.get(city);
    if (!byType.has(bt)) byType.set(bt, []);
    byType.get(bt).push(f);
  }

  // 出力ディレクトリをクリーンに作り直す
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const updated = Math.floor(Date.now() / 1000);

  // トップレベル index.json
  const topData = {};
  for (const [city, byType] of tree) {
    topData[city] = [...byType.keys()].sort();
  }
  writeJSON(path.join(OUT_DIR, 'index.json'), {
    meta: { updated, source: META.source, license: META.license },
    data: topData,
  });

  // 各市区町村のファイル群
  for (const [city, byType] of tree) {
    const cityDir = path.join(OUT_DIR, safeName(city));

    // 市区町村/index.json（業種名: 施設数）
    const counts = {};
    for (const [bt, list] of byType) {
      counts[bt] = list.length;
    }
    writeJSON(path.join(cityDir, 'index.json'), {
      meta: { updated },
      data: counts,
    });

    // 市区町村/業種.json（施設配列）
    for (const [bt, list] of byType) {
      writeJSON(path.join(cityDir, `${safeName(bt)}.json`), {
        meta: { updated },
        data: list,
      });
    }
  }

  console.log(`\n✅ 生成完了: ${tree.size}市区町村 / ${facilities.length}施設`);
  console.log(`   出力先: ${path.relative(ROOT, OUT_DIR)}`);
}

main().catch((err) => {
  console.error('\n❌ エラー:', err.message);
  process.exit(1);
});
