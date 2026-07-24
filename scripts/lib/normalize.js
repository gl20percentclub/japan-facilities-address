// 正規化: 元データの生レコードを、全国共通フォーマットの施設オブジェクトへ変換する。
//
// ここが「どう正規化しているか」の中心。処理は3段:
//   1. mapRecord   元ヘッダー(揺れあり) → 内部キー（config の columns 別名表を使う）
//   2. toFacility  内部キー → 出力用の施設オブジェクト（住所結合・日付正規化・座標補正）
//   3. resolve*    都道府県・市区町村を解決（カラム → コード → 既定値 / 住所から導出）

import { loadConfig } from './config.js';

// 既定の別名辞書（元ヘッダー → 内部キー）。config/sources.yaml の columns から構築。
// mapRecord / detectHeaderRow はこれを既定で使う（テストは引数なしで呼ぶ）。
const DEFAULT_COLUMN_MAP = loadConfig().columnMap;

// ---------------------------------------------------------------------------
// JIS都道府県コード（先頭2桁）→ 都道府県名
// ---------------------------------------------------------------------------
export const PREFECTURE_BY_CODE = {
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
export function splitPrefCity(addr) {
  const a = String(addr || '').trim();
  const pref = PREFECTURE_NAMES.find((p) => a.startsWith(p));
  if (!pref) return [null, null];
  const rest = a.slice(pref.length);
  // 市名自体が「市」で終わる市（二重の「市」）を先に確定させる（例: 四日市市・廿日市市・野々市市）
  for (const d of ['四日市市', '廿日市市', '野々市市']) {
    if (rest.startsWith(d)) return [pref, d];
  }
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

// レコードから都道府県・市区町村を施設住所から導出する（locateByAddress ソース用）。
// 住所が都道府県名で始まらない場合は、管轄の都道府県名を前置して再解析する。
function locatedPrefCity(rec) {
  let [p, c] = splitPrefCity(rec.address);
  if (!p && rec.prefecture_name) [p, c] = splitPrefCity(`${rec.prefecture_name}${rec.address}`);
  return [p, c];
}

// レコードから都道府県名を解決する。
// locateByAddress ソースは施設住所から導出（管轄カラムを信用しない）。
// 通常: 都道府県名カラム → 市区町村コードの先頭2桁 → ソース既定値 → '不明'
export function resolvePrefecture(rec, source) {
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
export function resolveCity(rec, source) {
  if (source.locateByAddress) return locatedPrefCity(rec)[1] || '不明';
  const name = (rec.city_name || '').trim();
  if (name) return name;
  if (source.defaultCity) return source.defaultCity;
  return '不明';
}

// ---------------------------------------------------------------------------
// 和暦 → 西暦 の日付正規化
//   R{n}.MM.DD → {2018+n}-MM-DD / H{n}.MM.DD → {1988+n}-MM-DD
// ---------------------------------------------------------------------------
export function normalizeDate(raw) {
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
// レコード変換
// ---------------------------------------------------------------------------

// 生レコード（元ヘッダーのまま）→ 内部キーのレコードに変換。
// columnMap は 元ヘッダー → 内部キー の辞書（既定は config の columns 由来）。
export function mapRecord(raw, columnMap = DEFAULT_COLUMN_MAP) {
  const out = {};
  for (const [key, value] of Object.entries(raw)) {
    const cleanKey = String(key).trim().replace(/^﻿/, '');
    const internal = columnMap[cleanKey];
    if (internal && out[internal] === undefined) {
      out[internal] = typeof value === 'string' ? value.trim() : value;
    }
  }
  return out;
}

// 内部レコード → 出力用の施設オブジェクト
export function toFacility(rec) {
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
    // ジオコーディングで座標を補完した場合の精度レベル。元々座標があった/補完不可なら null。
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
// 値が明らかに入れ替わっている場合は入れ替え、どちらでも日本域外なら null にする。
export function sanitizeLatLng(lat, lng) {
  if (lat == null || lng == null) return [lat, lng];
  if (inRange(lat, JP_LAT) && inRange(lng, JP_LNG)) return [lat, lng];
  if (inRange(lng, JP_LAT) && inRange(lat, JP_LNG)) return [lng, lat]; // 入れ替わり
  return [null, null]; // どちらでも日本域に収まらない → 無効
}

// 住所として実体を持たないプレースホルダを判定する。
// 「市内一円」「県内一円」「県下一円」「○○保健所管内」「（露店営業）」空欄 などは、
// 正規化しても都道府県の代表点(level 1)にしか落ちず施設位置として誤解を招くため、
// ジオコーディング対象から除外する（座標は null のままにする）。
export function isPlaceholderAddress(addr) {
  const s = String(addr || '').trim();
  if (!s) return true; // 空欄
  if (/一円/.test(s)) return true; // 市内一円 / 県内一円 / 県下一円 / ○○内一円
  if (/保健所管内/.test(s)) return true; // ○○保健所管内
  if (/^[（(][^（(]*[)）]$/.test(s)) return true; // 「（露店営業）」等 括弧のみ
  if (/(都|道|府|県|市|区|町|村)内$/.test(s)) return true; // 「那覇市内」等（住所続きなし）
  return false;
}

// 安全なディレクトリ/ファイル名（スラッシュ等を除去）
export function safeName(s) {
  return String(s).replace(/[\\/:*?"<>|]/g, '_').trim();
}

export { DEFAULT_COLUMN_MAP };
