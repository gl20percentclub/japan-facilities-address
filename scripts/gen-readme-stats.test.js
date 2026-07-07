// gen-readme-stats.js の集計・整形ロジックを検証する。
// collectStats() は api/ の生成物に依存するので、存在する時だけ検証する。
// renderStats() は純粋関数なので固定入力で検証する。
//
//   node scripts/gen-readme-stats.test.js

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectStats, renderStats } from './gen-readme-stats.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_DIR = path.join(__dirname, '..', 'api');

let failures = 0;
function assert(cond, msg) {
  if (cond) {
    console.log(`  ✓ ${msg}`);
  } else {
    console.error(`  ✗ ${msg}`);
    failures++;
  }
}

console.log('gen-readme-stats テスト\n');

// renderStats: 固定の統計から想定の Markdown 断片が出る（純粋関数）。
const fixed = {
  prefectureCount: 1,
  cityCount: 39,
  recordCount: 30000,
  uniqueCount: 26374,
  updated: 1783366001, // 2026-07-06
  apiBytes: 14 * 1024 * 1024,
  dataJsonBytes: 12 * 1024 * 1024,
  searchIndexBytes: 2.5 * 1024 * 1024,
};
const md = renderStats(fixed);
assert(md.includes('最終更新: 2026-07-06'), 'updated が日付に整形される');
assert(md.includes('| 施設レコード数 | 30,000 件 |'), '施設レコード数が3桁区切りで出る');
assert(md.includes('| ユニーク施設数（名前+座標） | 26,374 件 |'), 'ユニーク施設数が出る');
assert(md.includes('| 市区町村 | 39 |'), '市区町村数が出る');
assert(md.includes('約 14.0 MB'), 'api/ サイズが MB 目安で出る');
assert(md.includes('約 2.5 MB'), 'search-index サイズが MB 目安で出る');

// uniqueCount が無い場合はその行を出さない。
const noUnique = renderStats({ ...fixed, uniqueCount: null });
assert(!noUnique.includes('ユニーク施設数'), 'uniqueCount が null なら行を出さない');

// collectStats: api/ があれば妥当な集計が返る。
if (fs.existsSync(API_DIR)) {
  const s = collectStats();
  assert(s && s.prefectureCount >= 1, `都道府県が1件以上 (${s?.prefectureCount})`);
  assert(s && s.cityCount >= 1, `市区町村が1件以上 (${s?.cityCount})`);
  assert(s && s.recordCount > 0, `施設レコードが1件以上 (${s?.recordCount})`);
  assert(s && s.apiBytes > 0, 'api/ 合計サイズが正の値');
} else {
  console.log('  (api/ が無いため collectStats はスキップ)');
}

if (failures > 0) {
  console.error(`\n❌ ${failures}件のチェックに失敗`);
  process.exit(1);
}
console.log('\n✅ gen-readme-stats テストに合格');
