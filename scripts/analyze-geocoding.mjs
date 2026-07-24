// ジオコーディング検証スクリプト（分析用・非コミット出力）
//
// config/sources.yaml の全ソースを取得・パースし、施設住所を
// @geolonia/normalize-japanese-addresses(nja) で正規化＆ジオコーディングする。
// 正規化後の住所でユニーク化（同一住所は1行に集約し件数を数える）し、結果を CSV に出力する。
//
// 出力（analysis/ 配下・Git管理外）:
//   analysis/all.csv        全ユニーク住所（座標付与の成否 has_coord つき）
//   analysis/no-coord.csv   座標を付与できなかった住所だけ（原因分析用・reason 付き）
//
// 使い方:
//   node scripts/analyze-geocoding.mjs                全ソース
//   node scripts/analyze-geocoding.mjs --only=osaka-city,okinawa-bodik   指定ソースのみ
//   node scripts/analyze-geocoding.mjs --concurrency=8

import fs from 'node:fs';
import path from 'node:path';
import { normalize, config as njaConfig } from '@geolonia/normalize-japanese-addresses';
import { loadConfig, ROOT } from './lib/config.js';
import { acquire } from './lib/acquire.js';
import { parseSource } from './lib/parse.js';
import { mapRecord, toFacility, resolvePrefecture, resolveCity } from './lib/normalize.js';
import { geocodeQuery } from './lib/geocode.js';

const CACHE_DIR = path.join(ROOT, '.cache');
const OUT_DIR = path.join(ROOT, 'analysis');

const ONLY = (() => {
  const a = process.argv.find((x) => x.startsWith('--only='));
  return a ? new Set(a.slice(7).split(',').map((s) => s.trim()).filter(Boolean)) : null;
})();
const CONCURRENCY = (() => {
  const a = process.argv.find((x) => x.startsWith('--concurrency='));
  return a ? parseInt(a.split('=')[1], 10) : 8;
})();

const csvCell = (v) => {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const writeCsv = (file, columns, rows) => {
  const out = fs.createWriteStream(file, { encoding: 'utf-8' });
  out.write('﻿'); // Excel 互換 BOM
  out.write(columns.join(',') + '\n');
  for (const r of rows) out.write(columns.map((c) => csvCell(r[c])).join(',') + '\n');
  return new Promise((res) => out.end(res));
};

// 並列ワーカープール
async function runPool(items, concurrency, worker) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        await worker(items[i], i);
      }
    }),
  );
}

// nja 結果（座標なし）の失敗理由を分類する。
function classifyFailure(r) {
  if (!r) return '正規化結果なし';
  if (!r.pref) return '都道府県も未特定';
  if (!r.city) return '都道府県のみ（市区町村未特定）';
  if (!r.town) return '市区町村まで（町字未特定）';
  return '町字まで（座標なし）';
}

async function main() {
  const { sources: allSources, columnMap } = loadConfig();
  const sources = allSources.filter((s) => !ONLY || ONLY.has(s.key));
  console.log(`ジオコーディング検証: 対象ソース ${sources.length}件${ONLY ? `（--only）` : ''}\n`);

  // 1) 取得・パース・正規化(内部キー化) → 施設の住所クエリを収集
  const facilities = []; // { name, rawAddress, pref, city, query, source, srcLat, srcLng }
  const skipped = [];
  for (const source of sources) {
    try {
      const files = await acquire(source, { cacheDir: CACHE_DIR, dryRun: false });
      let kept = 0;
      for (const { cachePath, format } of files) {
        const rawRecords = await parseSource(source, cachePath, format, columnMap);
        for (const raw of rawRecords) {
          const rec = mapRecord(raw, columnMap);
          const f = toFacility(rec);
          if (!f) continue;
          const pref = resolvePrefecture(rec, source);
          const city = resolveCity(rec, source);
          const query = geocodeQuery({ address: f.address, _pref: pref, _city: city });
          if (!query) continue;
          facilities.push({
            name: f.name,
            rawAddress: f.address,
            pref,
            city,
            query,
            source: source.source,
            srcLat: f.lat,
            srcLng: f.lng,
          });
          kept++;
        }
      }
      console.log(`  ✓ ${source.key}: ${kept}件`);
    } catch (err) {
      skipped.push({ key: source.key, source: source.source, error: err.message });
      console.log(`  ⚠ ${source.key} スキップ: ${err.message}`);
    }
  }
  console.log(`\n収集: ${facilities.length}施設 / スキップ ${skipped.length}ソース`);

  // 2) ユニークな住所クエリを nja で正規化＆ジオコーディング（クエリ単位でキャッシュ）
  njaConfig.cacheSize = 100000;
  const uniqueQueries = [...new Set(facilities.map((f) => f.query))];
  console.log(`ユニーク住所クエリ: ${uniqueQueries.length}件 を正規化中...`);

  const resultByQuery = new Map(); // query -> { ok, lat, lng, level, npref, ncity, ntown, naddr, normAddr, reason }
  let done = 0;
  await runPool(uniqueQueries, CONCURRENCY, async (q) => {
    let entry;
    try {
      const r = await normalize(q);
      const npref = r?.pref || '';
      const ncity = r?.city || '';
      const ntown = r?.town || '';
      const naddr = r?.addr || '';
      const normAddr = `${npref}${ncity}${ntown}${naddr}`;
      if (r && r.point && Number.isFinite(r.point.lat) && Number.isFinite(r.point.lng)) {
        entry = { ok: true, lat: r.point.lat, lng: r.point.lng, level: r.point.level ?? r.level ?? null, npref, ncity, ntown, naddr, normAddr };
      } else {
        entry = { ok: false, lat: null, lng: null, level: r?.level ?? null, npref, ncity, ntown, naddr, normAddr, reason: classifyFailure(r) };
      }
    } catch (e) {
      entry = { ok: false, lat: null, lng: null, level: null, npref: '', ncity: '', ntown: '', naddr: '', normAddr: '', reason: `正規化エラー: ${e.message}` };
    }
    resultByQuery.set(q, entry);
    if (++done % 20000 === 0) console.log(`    ...${done}/${uniqueQueries.length}`);
  });

  // 3) 正規化後の住所でユニーク化して集約
  const byNorm = new Map(); // normKey -> aggregate
  for (const f of facilities) {
    const res = resultByQuery.get(f.query);
    // 正規化に成功していれば正規化住所で、失敗していれば元クエリで束ねる
    const key = res.normAddr || `【未正規化】${f.query}`;
    let a = byNorm.get(key);
    if (!a) {
      a = {
        normalized_address: res.normAddr,
        pref: res.npref,
        city: res.ncity,
        town: res.ntown,
        addr: res.naddr,
        level: res.level,
        has_coord: res.ok ? 1 : 0,
        lat: res.lat,
        lng: res.lng,
        reason: res.ok ? '' : res.reason,
        src_lat: null,
        src_lng: null,
        dup_count: 0,
        _names: new Set(),
        sample_name: f.name,
        sample_raw_address: f.rawAddress,
        _sources: new Set(),
      };
      byNorm.set(key, a);
    }
    a.dup_count++;
    a._names.add(f.name);
    a._sources.add(f.source);
    if (a.src_lat == null && f.srcLat != null) {
      a.src_lat = f.srcLat;
      a.src_lng = f.srcLng;
    }
  }

  const rows = [...byNorm.values()].map((a) => ({
    ...a,
    sources: [...a._sources].join('; '),
    has_src_coord: a.src_lat != null ? 1 : 0,
  }));
  rows.sort((x, y) => y.dup_count - x.dup_count);

  // 4) CSV 出力
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const ALL_COLS = ['normalized_address', 'pref', 'city', 'town', 'addr', 'level', 'has_coord', 'lat', 'lng', 'src_lat', 'src_lng', 'dup_count', 'sample_name', 'sample_raw_address', 'sources'];
  const NO_COORD_COLS = ['normalized_address', 'reason', 'level', 'has_src_coord', 'src_lat', 'src_lng', 'pref', 'city', 'dup_count', 'sample_name', 'sample_raw_address', 'sources'];

  await writeCsv(path.join(OUT_DIR, 'all.csv'), ALL_COLS, rows);
  const failures = rows.filter((r) => !r.has_coord);
  await writeCsv(path.join(OUT_DIR, 'no-coord.csv'), NO_COORD_COLS, failures);

  // 5) サマリ（原因分析の手がかり）
  const uniqAddr = rows.length;
  const failAddr = failures.length;
  const failRecords = failures.reduce((n, r) => n + r.dup_count, 0);
  const byReason = {};
  const byPref = {};
  let failButSrcCoord = 0;
  for (const r of failures) {
    byReason[r.reason] = (byReason[r.reason] || 0) + 1;
    byPref[r.pref || '(都道府県不明)'] = (byPref[r.pref || '(都道府県不明)'] || 0) + 1;
    if (r.has_src_coord) failButSrcCoord++;
  }

  console.log(`\n===== サマリ =====`);
  console.log(`施設レコード: ${facilities.length}`);
  console.log(`ユニーク住所: ${uniqAddr}（うち座標付与できた: ${uniqAddr - failAddr} / できなかった: ${failAddr}）`);
  console.log(`座標付与できなかった住所に紐づく施設レコード数: ${failRecords}`);
  console.log(`  └ うち元データには座標があった住所: ${failButSrcCoord}（nja辞書に無いだけの可能性が高い）`);
  console.log(`\n失敗理由の内訳（ユニーク住所数）:`);
  for (const [k, v] of Object.entries(byReason).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(7)}  ${k}`);
  console.log(`\n失敗が多い都道府県 top15:`);
  for (const [k, v] of Object.entries(byPref).sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(`  ${String(v).padStart(7)}  ${k}`);
  if (skipped.length) {
    console.log(`\nスキップしたソース ${skipped.length}件:`);
    for (const s of skipped) console.log(`  ${s.key}: ${s.error}`);
  }
  console.log(`\n出力: analysis/all.csv (${uniqAddr}行) / analysis/no-coord.csv (${failAddr}行)`);
}

main().catch((err) => {
  console.error('\n❌ エラー:', err.stack || err.message);
  process.exit(1);
});
