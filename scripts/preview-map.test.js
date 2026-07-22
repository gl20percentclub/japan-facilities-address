// プレビュー地図(index.html)と gen-tiles.js の生成物との整合性テスト。
//   node scripts/preview-map.test.js
//
// index.html はベクトルタイル(api/tiles)を直接読むため、レイヤ名・ズーム範囲・
// タイルパス・利用する属性が gen-tiles.js の出力とズレると地図が黙って壊れる。
// ここでは実際に generateTiles を走らせた生成物と index.html の記述を突き合わせ、
// 両者が食い違ったら失敗させることで、その回帰を防ぐ。

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildFeatureCollection, generateTiles } from './gen-tiles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const HTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

// index.html から地図設定に使っている値を素朴に抽出する（フルパーサは不要）。
function htmlValue(re, label) {
  const m = HTML.match(re);
  assert.ok(m, `index.html から ${label} を抽出できる`);
  return m[1];
}

function makeFixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'preview-test-'));
  const cityDir = path.join(dir, 'facilities', '東京都', '千代田区');
  fs.mkdirSync(cityDir, { recursive: true });
  fs.writeFileSync(
    path.join(cityDir, 'data.json'),
    JSON.stringify({
      meta: { updated: 1749600000 },
      data: [
        { name: '店A', business_type: '飲食店営業', address: '千代田区丸の内1-1', lat: 35.681, lng: 139.767, geocoding_level: 8 },
      ],
    }),
  );
  return dir;
}

test('source-layer が gen-tiles の出力レイヤ名(metadata.vector_layers[0].id)と一致する', () => {
  const sourceLayer = htmlValue(/'source-layer':\s*'([^']+)'/, "source-layer");
  const dir = makeFixture();
  try {
    const outDir = path.join(dir, 'tiles');
    generateTiles({ minZoom: 6, maxZoom: 12, facilitiesDir: path.join(dir, 'facilities'), outDir });
    const meta = JSON.parse(fs.readFileSync(path.join(outDir, 'metadata.json'), 'utf-8'));
    assert.equal(sourceLayer, meta.vector_layers[0].id, `source-layer(${sourceLayer}) == 生成レイヤ(${meta.vector_layers[0].id})`);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('TILE_MIN_ZOOM / TILE_MAX_ZOOM が gen-tiles の既定ズーム範囲と一致する', () => {
  const minZoom = Number(htmlValue(/TILE_MIN_ZOOM\s*=\s*(\d+)/, 'TILE_MIN_ZOOM'));
  const maxZoom = Number(htmlValue(/TILE_MAX_ZOOM\s*=\s*(\d+)/, 'TILE_MAX_ZOOM'));
  const dir = makeFixture();
  try {
    const outDir = path.join(dir, 'tiles');
    // 既定のズーム範囲(scripts/gen-tiles.js の MIN_ZOOM/MAX_ZOOM)で生成する。
    generateTiles({ facilitiesDir: path.join(dir, 'facilities'), outDir });
    const meta = JSON.parse(fs.readFileSync(path.join(outDir, 'metadata.json'), 'utf-8'));
    assert.equal(minZoom, meta.minzoom, `TILE_MIN_ZOOM(${minZoom}) == metadata.minzoom(${meta.minzoom})`);
    assert.equal(maxZoom, meta.maxzoom, `TILE_MAX_ZOOM(${maxZoom}) == metadata.maxzoom(${meta.maxzoom})`);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('タイルURLテンプレートが「api/tiles/ + metadata.tiles[0]」の配置と一致する', () => {
  const dir = makeFixture();
  try {
    const outDir = path.join(dir, 'tiles');
    generateTiles({ minZoom: 6, maxZoom: 12, facilitiesDir: path.join(dir, 'facilities'), outDir });
    const meta = JSON.parse(fs.readFileSync(path.join(outDir, 'metadata.json'), 'utf-8'));
    const expectedPath = `api/tiles/${meta.tiles[0]}`; // = api/tiles/{z}/{x}/{y}.pbf
    assert.ok(HTML.includes(expectedPath), `index.html がタイルパス ${expectedPath} を参照する`);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('ポップアップで参照する施設属性がすべて生成featureに存在する', () => {
  const dir = makeFixture();
  try {
    const fc = buildFeatureCollection(path.join(dir, 'facilities'));
    const props = fc.features[0].properties;
    // index.html が p.<prop> として参照している属性を抽出する。
    const referenced = new Set(
      [...HTML.matchAll(/\bp\.([a-z_]+)\b/g)].map((m) => m[1]),
    );
    assert.ok(referenced.size >= 3, `index.html が施設属性を参照している (${[...referenced].join(',')})`);
    for (const key of referenced) {
      assert.ok(key in props, `属性 ${key} が生成feature.properties に存在する`);
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

console.log(`\n✅ preview-map 整合性テスト: ${passed}件すべて合格`);
