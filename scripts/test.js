// api/ ディレクトリが正しく生成されたことを確認するバリデーションスクリプト

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

const cities = Object.keys(top.data);
assert(cities.length >= 1, `少なくとも1つの市区町村がある (${cities.length}件)`);

// 3. 少なくとも1つの市区町村ディレクトリとその index.json がある
let totalFacilities = 0;
let checkedFacilitySample = false;

for (const city of cities) {
  const cityDir = path.join(OUT_DIR, city.replace(/[\\/:*?"<>|]/g, '_'));
  const cityIndexPath = path.join(cityDir, 'index.json');
  if (!fs.existsSync(cityIndexPath)) {
    console.error(`  ✗ ${city}/index.json が存在しない`);
    failures++;
    continue;
  }
  const cityIndex = readJSON(cityIndexPath);

  // 業種.json をチェックし施設総数を集計
  for (const [bt, count] of Object.entries(cityIndex.data || {})) {
    totalFacilities += count;
    const btPath = path.join(cityDir, `${bt.replace(/[\\/:*?"<>|]/g, '_')}.json`);
    if (!fs.existsSync(btPath)) {
      console.error(`  ✗ ${city}/${bt}.json が存在しない`);
      failures++;
      continue;
    }
    if (!checkedFacilitySample) {
      const btJson = readJSON(btPath);
      assert(btJson.meta && typeof btJson.meta === 'object', `施設JSONに meta がある (${city}/${bt})`);
      assert(Array.isArray(btJson.data), `施設JSONの data が配列 (${city}/${bt})`);
      const sample = btJson.data[0];
      assert(sample && 'name' in sample, '施設に name フィールドがある');
      assert(sample && 'address' in sample, '施設に address フィールドがある');
      checkedFacilitySample = true;
    }
  }
}

assert(checkedFacilitySample, '少なくとも1つの施設JSONを検証した');

console.log(`\n施設総数: ${totalFacilities}件 / ${cities.length}市区町村`);

if (failures > 0) {
  console.error(`\n❌ ${failures}件のチェックに失敗`);
  process.exit(1);
}
console.log('\n✅ すべてのバリデーションに合格');
