// api/ ディレクトリが正しく生成されたことを確認するバリデーションスクリプト
//
// 検証する構造（都道府県 > 市区町村 > data.json）:
//   api/facilities/index.json                都道府県名 → 市区町村名の配列
//   api/facilities/{都道府県}/index.json      市区町村名 → 施設数
//   api/facilities/{都道府県}/{市区町村}/data.json  施設オブジェクトの配列

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'api', 'facilities');

let failures = 0;
function assert(cond, msg) {
  if (cond) {
    console.log(`  ✓ ${msg}`);
  } else {
    console.error(`  ✗ ${msg}`);
    failures++;
  }
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function safeName(s) {
  return String(s).replace(/[\\/:*?"<>|]/g, '_');
}

console.log('API バリデーション\n');

// 1. トップレベル index.json が存在する
const topPath = path.join(OUT_DIR, 'index.json');
assert(fs.existsSync(topPath), 'api/facilities/index.json が存在する');

if (failures > 0) {
  console.error('\n❌ index.json が無いため中断');
  process.exit(1);
}

const top = readJSON(topPath);

// 2. meta.updated と data オブジェクトがある
assert(typeof top.meta?.updated === 'number', 'トップ index.json に meta.updated (number) がある');
assert(top.data && typeof top.data === 'object', 'トップ index.json に data オブジェクトがある');

const prefectures = Object.keys(top.data);
assert(prefectures.length >= 1, `少なくとも1つの都道府県がある (${prefectures.length}件)`);

// 3. 都道府県ごとに index.json と各市区町村の data.json を検証
let totalFacilities = 0;
let totalCities = 0;
let withCoords = 0;
let checkedFacilitySample = false;

for (const pref of prefectures) {
  const prefDir = path.join(OUT_DIR, safeName(pref));
  const prefIndexPath = path.join(prefDir, 'index.json');
  if (!fs.existsSync(prefIndexPath)) {
    console.error(`  ✗ ${pref}/index.json が存在しない`);
    failures++;
    continue;
  }
  const prefIndex = readJSON(prefIndexPath);

  // トップ index.json の市区町村一覧と、都道府県 index.json のキーが一致する
  const citiesFromTop = [...top.data[pref]].sort();
  const citiesFromIndex = Object.keys(prefIndex.data || {}).sort();
  assert(
    JSON.stringify(citiesFromTop) === JSON.stringify(citiesFromIndex),
    `${pref}: トップ index と都道府県 index の市区町村一覧が一致する`,
  );

  for (const [city, count] of Object.entries(prefIndex.data || {})) {
    totalCities++;
    const dataPath = path.join(prefDir, safeName(city), 'data.json');
    if (!fs.existsSync(dataPath)) {
      console.error(`  ✗ ${pref}/${city}/data.json が存在しない`);
      failures++;
      continue;
    }
    const cityData = readJSON(dataPath);
    if (!Array.isArray(cityData.data)) {
      console.error(`  ✗ ${pref}/${city}/data.json の data が配列でない`);
      failures++;
      continue;
    }
    totalFacilities += cityData.data.length;

    // index.json の件数と data.json の要素数が一致する
    if (cityData.data.length !== count) {
      console.error(`  ✗ ${pref}/${city}: index の件数(${count})と data.json の要素数(${cityData.data.length})が不一致`);
      failures++;
    }

    // 座標の検証: 値があれば数値かつ日本の範囲内であること
    for (const f of cityData.data) {
      const hasLat = f.lat != null;
      const hasLng = f.lng != null;
      if (hasLat || hasLng) {
        if (
          typeof f.lat !== 'number' || typeof f.lng !== 'number' ||
          f.lat < 20 || f.lat > 46 || f.lng < 122 || f.lng > 154
        ) {
          console.error(`  ✗ ${pref}/${city}: 不正な座標 (${f.lat}, ${f.lng}) - ${f.name}`);
          failures++;
        } else {
          withCoords++;
        }
      }

      // geocoding_level は null または 1〜8 の整数であること
      if (
        f.geocoding_level != null &&
        (!Number.isInteger(f.geocoding_level) || f.geocoding_level < 1 || f.geocoding_level > 8)
      ) {
        console.error(`  ✗ ${pref}/${city}: 不正な geocoding_level (${f.geocoding_level}) - ${f.name}`);
        failures++;
      }
    }

    if (!checkedFacilitySample && cityData.data.length > 0) {
      assert(cityData.meta && typeof cityData.meta === 'object', `施設JSONに meta がある (${pref}/${city})`);
      const sample = cityData.data[0];
      assert(sample && 'name' in sample, '施設に name フィールドがある');
      assert(sample && 'address' in sample, '施設に address フィールドがある');
      assert(sample && 'business_type' in sample, '施設に business_type フィールドがある');
      assert(sample && 'lat' in sample && 'lng' in sample, '施設に lat / lng フィールドがある');
      assert(sample && 'geocoding_level' in sample, '施設に geocoding_level フィールドがある');
      checkedFacilitySample = true;
    }
  }
}

assert(checkedFacilitySample, '少なくとも1つの施設サンプルを検証した');
assert(withCoords > 0, `座標を持つ施設が存在する (${withCoords}件)`);

// 4. 施設名検索用の索引（マニフェスト＋都道府県別 shard）を検証
const indexPath = path.join(ROOT, 'api', 'search-index.json');
assert(fs.existsSync(indexPath), 'api/search-index.json（マニフェスト）が存在する');
if (fs.existsSync(indexPath)) {
  const manifest = readJSON(indexPath);
  assert(Array.isArray(manifest.prefectures), 'search-index マニフェストに prefectures 配列がある');
  assert(
    Array.isArray(manifest.meta?.schema) && manifest.meta.schema[0] === 'name',
    'search-index の meta.schema が定義されている',
  );
  assert(manifest.prefectures?.length > 0, `search-index に都道府県 shard がある (${manifest.prefectures?.length ?? 0}件)`);

  // 各 shard ファイルが存在し 100MB 未満であることを確認（GitHub のファイル上限対策）。
  let idxTotal = 0;
  let sampleChecked = false;
  for (const p of manifest.prefectures ?? []) {
    const shardPath = path.join(ROOT, 'api', p.file);
    if (!fs.existsSync(shardPath)) {
      console.error(`  ✗ search-index shard が存在しない: ${p.file}`);
      failures++;
      continue;
    }
    const sizeMB = fs.statSync(shardPath).size / (1024 * 1024);
    if (sizeMB >= 100) {
      console.error(`  ✗ search-index shard が100MB以上: ${p.file} (${sizeMB.toFixed(1)}MB)`);
      failures++;
    }
    const shard = readJSON(shardPath);
    idxTotal += shard.data?.length ?? 0;
    if (!sampleChecked && shard.data?.length > 0) {
      const [name, , lat, lng] = shard.data[0];
      assert(typeof name === 'string' && name !== '', 'search-index shard の行に施設名がある');
      assert(
        typeof lat === 'number' && typeof lng === 'number' &&
          lat >= 20 && lat <= 46 && lng >= 122 && lng <= 154,
        'search-index shard の座標が日本の範囲内である',
      );
      sampleChecked = true;
    }
  }
  assert(idxTotal > 0, `search-index に施設が存在する (${idxTotal}件)`);
  assert(idxTotal === manifest.meta?.count, `マニフェストの count(${manifest.meta?.count}) と shard 合計(${idxTotal}) が一致する`);
}

console.log(`\n施設総数: ${totalFacilities}件 / ${totalCities}市区町村 / ${prefectures.length}都道府県`);
console.log(`座標あり: ${withCoords}件 (${((withCoords / totalFacilities) * 100).toFixed(1)}%)`);

if (failures > 0) {
  console.error(`\n❌ ${failures}件のチェックに失敗`);
  process.exit(1);
}
console.log('\n✅ すべてのバリデーションに合格');
