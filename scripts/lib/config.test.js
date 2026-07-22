// config ローダーのユニットテスト。
//   node scripts/lib/config.test.js
// config/sources.yaml の読み込みと、columns(内部キー→別名[]) の
// columnMap(元ヘッダー→内部キー) への反転を検証する。

import assert from 'node:assert/strict';
import { loadConfig } from './config.js';

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

const cfg = loadConfig();

test('sources: 配列で1件以上、必須フィールドを持つ', () => {
  assert.ok(Array.isArray(cfg.sources) && cfg.sources.length > 0, `sources がある (${cfg.sources.length})`);
  for (const s of cfg.sources) {
    assert.ok(s.key, `key がある: ${JSON.stringify(s).slice(0, 60)}`);
    assert.ok(s.acquire && s.acquire.type, `acquire.type がある: ${s.key}`);
    assert.ok(s.source, `source がある: ${s.key}`);
  }
});

test('sources: key が一意である', () => {
  const keys = cfg.sources.map((s) => s.key);
  assert.equal(new Set(keys).size, keys.length, '重複キーなし');
});

test('columnMap: columns(内部キー→別名[]) を 元ヘッダー→内部キー に反転する', () => {
  assert.ok(cfg.columns && typeof cfg.columns === 'object', 'columns がある');
  // columns に定義された全ての元ヘッダーが columnMap に現れ、正しい内部キーを指す
  for (const [internal, headers] of Object.entries(cfg.columns)) {
    for (const h of headers) {
      assert.equal(cfg.columnMap[h], internal, `"${h}" → ${internal}`);
    }
  }
});

test('columnMap: 代表的なヘッダー揺れが期待の内部キーに寄る', () => {
  assert.equal(cfg.columnMap['屋号'], 'facility_name');
  assert.equal(cfg.columnMap['営業所名称'], 'facility_name');
  assert.equal(cfg.columnMap['業種'], 'business_type');
  assert.equal(cfg.columnMap['緯度'], 'lat');
  assert.equal(cfg.columnMap['経度'], 'lng');
});

test('loadConfig: 同一パスはキャッシュされ同じ参照を返す', () => {
  assert.equal(loadConfig(), cfg, '2回目の呼び出しは同じオブジェクト');
});

console.log(`\n✅ config ローダー ユニットテスト: ${passed}件すべて合格`);
