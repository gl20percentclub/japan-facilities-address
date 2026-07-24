// 全国 食品営業許可 施設検索API クローラー（オーケストレーター）
//
// config/sources.yaml を単一の情報源として、取得 → パース → 正規化 → 出力 を束ねる。
// 各段の実装は scripts/lib/ に分割してある:
//   lib/config.js     設定ファイル(YAML)の読み込み
//   lib/acquire.js    取得（ckan / get / post / resolve / i2fasglob）
//   lib/parse.js      パース（CSV/TSV/XLSX、文字コード、ヘッダー行判定）
//   lib/normalize.js  正規化（別名→内部キー、住所結合、日付、座標補正、都道府県/市区町村解決）
//   lib/geocode.js    ジオコーディング（住所→座標の補完）
//
// 出力構造（都道府県 > 市区町村 > data.json）と派生成果物:
//   api/facilities/index.json / {都道府県}/index.json / {都道府県}/{市区町村}/data.json
//   api/search-index.json ほか（gen-search-index.js）
//   api/tiles/{z}/{x}/{y}.pbf（gen-tiles.js — ベクトルタイル）
//
// 使い方:
//   node scripts/crawl.js              通常実行（ダウンロード→ジオコーディング→生成）
//   node scripts/crawl.js --dry-run    ダウンロードをスキップしキャッシュを使う
//   node scripts/crawl.js --no-geocode ジオコーディングをスキップ
//   node scripts/crawl.js --only=osaka-city,minato   指定キーのソースだけ処理

import fs from 'node:fs';
import path from 'node:path';
import { loadConfig, ROOT } from './lib/config.js';
import { acquire } from './lib/acquire.js';
import { parseSource } from './lib/parse.js';
import {
  mapRecord,
  toFacility,
  resolvePrefecture,
  resolveCity,
  safeName,
} from './lib/normalize.js';
import { enrichWithGeocoding } from './lib/geocode.js';
import { generateSearchIndex } from './gen-search-index.js';
import { generateTiles } from './gen-tiles.js';
import { generateReadmeStats } from './gen-readme-stats.js';

const CACHE_DIR = path.join(ROOT, '.cache');
const OUT_DIR = path.join(ROOT, 'api', 'facilities');

const DRY_RUN = process.argv.includes('--dry-run');
const NO_GEOCODE = process.argv.includes('--no-geocode');
// 施設0件のソースがあっても失敗させない（部分実行や意図的な空ソースの動作確認用）。
const ALLOW_EMPTY_SOURCES = process.argv.includes('--allow-empty-sources');

// --only=key1,key2 で処理対象ソースを絞る（動作確認・部分再生成用）
const ONLY = (() => {
  const arg = process.argv.find((a) => a.startsWith('--only='));
  if (!arg) return null;
  return new Set(arg.slice('--only='.length).split(',').map((s) => s.trim()).filter(Boolean));
})();

function writeJSON(filePath, obj) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + '\n');
}

// 施設を1件も取り込めなかったソースを返す。
// keptBySource に載っていない（＝処理前に落ちた）ソースも 0 件扱いにする。
export function findEmptySources(sources, keptBySource) {
  return sources.filter((s) => (keptBySource.get(s.key) || 0) === 0);
}

async function main() {
  const { sources: allSources, columnMap } = loadConfig();
  const sources = allSources.filter((s) => !ONLY || ONLY.has(s.key));
  console.log(`全国 食品営業許可 施設検索API クローラー${DRY_RUN ? ' (--dry-run)' : ''}`);
  console.log(`対象ソース: ${sources.length}件${ONLY ? `（--only=${[...ONLY].join(',')}）` : ''}\n`);

  const facilities = [];
  const keptBySource = new Map(); // source.key -> 取り込めた施設数

  for (const source of sources) {
    console.log(`▼ ${source.key}: ${source.source}`);
    let kept = 0;
    try {
      const files = await acquire(source, { cacheDir: CACHE_DIR, dryRun: DRY_RUN });
      const rawRecords = [];
      for (const { cachePath, format } of files) {
        rawRecords.push(...(await parseSource(source, cachePath, format, columnMap)));
      }
      console.log(`  ${rawRecords.length}行を読み込み (${files.map((f) => f.format).join('+')})`);

      for (const raw of rawRecords) {
        const rec = mapRecord(raw, columnMap);
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
    keptBySource.set(source.key, kept);
  }

  console.log(`\n有効な施設: 合計 ${facilities.length}件`);

  // 施設を1件も取り込めなかったソースがあれば失敗させ、api/ を書き換えない。
  // 取得失敗が黙って欠落データに化けるのを防ぐ。--allow-empty-sources で無効化。
  const emptySources = findEmptySources(sources, keptBySource);
  if (emptySources.length > 0) {
    const list = emptySources.map((s) => `${s.key}（${s.source}）`).join('\n    - ');
    const msg =
      `施設を1件も取り込めなかったソースが ${emptySources.length}件 あります:\n    - ${list}\n` +
      `  取得/パースの一時的な失敗の可能性があります。再実行するか、意図的な場合は ` +
      `--allow-empty-sources を付けてください（欠落データのコミットを防ぐため中断しました）。`;
    if (ALLOW_EMPTY_SOURCES) console.warn(`\n⚠ ${msg}`);
    else throw new Error(msg);
  }

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
  if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const updated = Math.floor(Date.now() / 1000);

  // 全ソースの一覧（トップ index.json 用）
  const allSet = new Set();
  for (const set of sourcesByPref.values()) for (const s of set) allSet.add(s);

  // トップレベル index.json（都道府県名 → 市区町村名の配列）
  const topData = {};
  for (const [pref, byCity] of tree) topData[pref] = [...byCity.keys()].sort();
  writeJSON(path.join(OUT_DIR, 'index.json'), {
    meta: { updated, sources: toSourceList(allSet) },
    data: topData,
  });

  let cityCount = 0;
  for (const [pref, byCity] of tree) {
    const prefDir = path.join(OUT_DIR, safeName(pref));

    // 都道府県/index.json（市区町村名 → 施設数）
    const counts = {};
    for (const [city, list] of byCity) counts[city] = list.length;
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

  // 施設名検索用の索引・ベクトルタイル・README統計を生成する。
  generateSearchIndex();
  generateTiles();
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

// テスト用に純粋関数を再エクスポートする（公開面は従来どおり）。
export { normalizeDate, sanitizeLatLng, resolvePrefecture, resolveCity, mapRecord, toFacility, splitPrefCity, isPlaceholderAddress } from './lib/normalize.js';
export { parseCSVText } from './lib/parse.js';
export { fetchWithRetry, resolveLinkFromHtml } from './lib/acquire.js';
