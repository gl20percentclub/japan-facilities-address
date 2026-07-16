// 全国 食品営業許可データ 結合CSV生成
//
// api/facilities/{都道府県}/{市区町村}/data.json を全て読み込み、
// 1つの CSV（全国結合版）に出力する。都道府県・市区町村は各行に付与する。
//
// 出力時に以下の浄化を行う（元データ JSON は変更しない）:
//  1. 全列完全一致の重複レコードを除去（無条件のゴミ）
//  2. 市区町村名の表記ゆれを名寄せ（郡名プレフィックスを剥がして統一。
//     例: 「玖珠郡九重町」→「九重町」）。正規化後の名を city 列に入れ、
//     元の生表記は city_raw 列に残す。
//  3. 一部ソースの列ズレ補正（pref 列が郵便番号・city 列が都道府県名に
//     なっている富山県の数件を、住所先頭から市区町村を復元）。
//
// 業種違いの同一施設は「別の許可レコード」として残す（許可データの全量が価値のため）。
//
// 使い方: node scripts/build-merged-csv.js [出力パス]
//   既定出力: api/facilities-all.csv

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FACILITIES_DIR = path.join(ROOT, 'api', 'facilities');
const OUT_PATH = process.argv[2] || path.join(ROOT, 'api', 'facilities-all.csv');

const PREFS = new Set('北海道 青森県 岩手県 宮城県 秋田県 山形県 福島県 茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県 新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県 三重県 滋賀県 京都府 大阪府 兵庫県 奈良県 和歌山県 鳥取県 島根県 岡山県 広島県 山口県 徳島県 香川県 愛媛県 高知県 福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県 沖縄県'.split(' '));

// 市区町村名の名寄せ表（@geolonia/normalize-japanese-addresses で事前生成）。
//   scripts/_normmap.mjs が api/_city_normmap.json を作る。
//   キー "元pref\t元city_raw" -> { pref, city }（正規化後）。
// 表記ゆれ（郡名あり/なし・県名なし等）を公式の市区町村名へ寄せる。
const NORMMAP = (() => {
  const p = path.join(ROOT, 'api', '_city_normmap.json');
  try { return JSON.parse(fs.readFileSync(p, 'utf-8')); } catch { return {}; }
})();

// 名寄せ表にあればそれを使い、無ければ郡名プレフィックスを剥がすフォールバック。
function normalizeCityName(city) {
  const m = String(city).match(/郡(.+?[町村])$/);
  return m ? m[1] : city;
}

// 住所文字列から [都道府県, 市区町村] を切り出す（列ズレ補正用）。
function splitPrefCity(addr) {
  const a = String(addr || '').trim();
  const pref = [...PREFS].find((p) => a.startsWith(p));
  const rest = pref ? a.slice(pref.length) : a;
  for (const d of ['四日市市', '廿日市市', '野々市市']) {
    if (rest.startsWith(d)) return [pref || null, d];
  }
  let m = rest.match(/^(.+?郡.+?[町村])/);
  if (m) return [pref || null, m[1]];
  m = rest.match(/^(.+?市)/);
  if (m) return [pref || null, m[1]];
  m = rest.match(/^(.+?区)/);
  if (m) return [pref || null, m[1]];
  m = rest.match(/^(.+?[町村])/);
  if (m) return [pref || null, m[1]];
  return [pref || null, null];
}

function csvCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const COLUMNS = [
  'prefecture', 'city', 'city_raw', 'name', 'name_kana', 'business_type', 'address',
  'lat', 'lng', 'geocoding_level', 'phone', 'license_no', 'license_date', 'expire_date',
  'sources', 'licenses',
];

function main() {
  if (!fs.existsSync(FACILITIES_DIR)) {
    console.error(`api/facilities がありません: ${FACILITIES_DIR}`);
    process.exit(1);
  }

  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('﻿'); // Excel 互換 UTF-8 BOM
  out.write(COLUMNS.join(',') + '\n');

  let rowsIn = 0, rowsOut = 0, dupSkipped = 0, colFixed = 0, nameMerged = 0;
  const seen = new Set(); // 全列一致の重複判定
  const cityKeys = new Set();
  const prefs = new Set();

  const prefDirs = fs.readdirSync(FACILITIES_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());

  for (const prefD of prefDirs) {
    const prefName = prefD.name;
    const prefPath = path.join(FACILITIES_DIR, prefName);
    const cityDirs = fs.readdirSync(prefPath, { withFileTypes: true }).filter((d) => d.isDirectory());

    for (const cityD of cityDirs) {
      const cityDir = cityD.name;
      const dataPath = path.join(prefPath, cityDir, 'data.json');
      if (!fs.existsSync(dataPath)) continue;

      let json;
      try { json = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); }
      catch { console.warn(`  ⚠ 読み込み失敗: ${dataPath}`); continue; }

      const srcList = json.meta?.sources || [];
      const sources = srcList.map((s) => s.source).filter(Boolean).join('; ');
      const licenses = [...new Set(srcList.map((s) => s.license).filter(Boolean))].join('; ');

      for (const f of (json.data || [])) {
        rowsIn++;
        let pref = prefName;
        let cityRaw = cityDir;

        // 列ズレ補正: pref がプレフィックス名でない(郵便番号等) or city が都道府県名 の場合。
        // 富山県ソースは pref=郵便番号 / city=都道府県名 / address="市区町村 ..." とズレる。
        // このとき本当の都道府県名は city_raw 側に入っているので、まずそれを pref に移す。
        if (!PREFS.has(pref) || PREFS.has(cityRaw)) {
          if (PREFS.has(cityRaw)) pref = cityRaw; // city 列に入っていた都道府県名を採用
          const [p, c] = splitPrefCity(f.address);
          if (!PREFS.has(pref) && p) pref = p;    // それでも不正なら住所先頭から
          if (c) cityRaw = c;                     // 市区町村は住所先頭から復元
          colFixed++;
        }

        // 名寄せ: 事前生成した normmap を最優先。無ければ郡名剥がしフォールバック。
        const nm = NORMMAP[`${prefName}\t${cityDir}`];
        let city;
        if (nm && nm.pref && nm.city) {
          pref = nm.pref;      // 正規化された都道府県（列ズレも同時に是正される）
          city = nm.city;      // 公式市区町村名
        } else {
          city = normalizeCityName(cityRaw);
        }
        if (city !== cityRaw) nameMerged++;

        const rec = [
          pref, city, cityRaw, f.name, f.name_kana, f.business_type, f.address,
          f.lat, f.lng, f.geocoding_level, f.phone, f.license_no, f.license_date, f.expire_date,
          sources, licenses,
        ];

        // 全列一致の重複を除去
        const dedupKey = rec.join('');
        if (seen.has(dedupKey)) { dupSkipped++; continue; }
        seen.add(dedupKey);

        out.write(rec.map(csvCell).join(',') + '\n');
        rowsOut++;
        prefs.add(pref);
        cityKeys.add(`${pref}/${city}`);
      }
    }
  }

  out.end(() => {
    const bytes = fs.statSync(OUT_PATH).size;
    console.log(`✅ 結合CSV生成完了: ${path.relative(ROOT, OUT_PATH)}`);
    console.log(`   入力レコード: ${rowsIn.toLocaleString()} 件`);
    console.log(`   出力レコード: ${rowsOut.toLocaleString()} 件（全列一致の重複 ${dupSkipped.toLocaleString()} 件を除去）`);
    console.log(`   列ズレ補正: ${colFixed.toLocaleString()} 件 / 市区町村名の名寄せ: ${nameMerged.toLocaleString()} 件`);
    console.log(`   都道府県: ${prefs.size} / 市区町村（名寄せ後）: ${cityKeys.size}`);
    console.log(`   ファイルサイズ: ${(bytes / 1024 / 1024).toFixed(1)} MB`);
  });
}

main();
