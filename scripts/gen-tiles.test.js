// gen-tiles.js のユニットテスト。
//   node scripts/gen-tiles.test.js
// タイル座標計算(lonLatToTile)と、一時ディレクトリに対する generateTiles の生成結果を検証する。

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { lonLatToTile, buildFeatureCollection, generateTiles } from './gen-tiles.js';

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

// --- lonLatToTile: スリッピータイル座標（独立した基準で検証） ---
test('lonLatToTile: z0 は常に (0,0)', () => {
  assert.deepEqual(lonLatToTile(139.7, 35.6, 0), [0, 0]);
  assert.deepEqual(lonLatToTile(-70, 40, 0), [0, 0]);
});
test('lonLatToTile: z1 は経度・緯度の符号で象限が決まる', () => {
  assert.deepEqual(lonLatToTile(0.1, 0.1, 1), [1, 0]);   // 東・北
  assert.deepEqual(lonLatToTile(-0.1, 0.1, 1), [0, 0]);  // 西・北
  assert.deepEqual(lonLatToTile(0.1, -0.1, 1), [1, 1]);  // 東・南
  assert.deepEqual(lonLatToTile(-0.1, -0.1, 1), [0, 1]); // 西・南
});
test('lonLatToTile: 範囲外の座標は 0..2^z-1 にクランプ', () => {
  const [x, y] = lonLatToTile(999, 999, 3); // 8x8 グリッド
  assert.ok(x >= 0 && x <= 7 && y >= 0 && y <= 7, `クランプされる (${x},${y})`);
});
// 逆変換でタイルの地理境界を求め、元の点がそのタイルに含まれることを確認する
// （実装式の自己参照でなく、独立した基準での正しさ検証）。
test('lonLatToTile: 返したタイルの境界内に元の点が含まれる', () => {
  const tile2lng = (x, z) => (x / 2 ** z) * 360 - 180;
  const tile2lat = (y, z) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) * 180) / Math.PI;
  for (const [lng, lat] of [[139.7671, 35.6812], [135.5, 34.7], [141.35, 43.06], [127.68, 26.21]]) {
    for (const z of [6, 10, 12]) {
      const [x, y] = lonLatToTile(lng, lat, z);
      const west = tile2lng(x, z), east = tile2lng(x + 1, z);
      const north = tile2lat(y, z), south = tile2lat(y + 1, z);
      assert.ok(lng >= west && lng < east, `lng ${lng} が [${west},${east}) 内 (z${z})`);
      assert.ok(lat <= north && lat > south, `lat ${lat} が (${south},${north}] 内 (z${z})`);
    }
  }
});

// --- buildFeatureCollection / generateTiles: 一時フィクスチャで検証 ---
function makeFixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tiles-test-'));
  const cityDir = path.join(dir, 'facilities', '東京都', '港区');
  fs.mkdirSync(cityDir, { recursive: true });
  fs.writeFileSync(
    path.join(cityDir, 'data.json'),
    JSON.stringify({
      meta: { updated: 1749600000 },
      data: [
        { name: '店A', business_type: '飲食店営業', address: '港区赤坂1-1', lat: 35.673, lng: 139.737, geocoding_level: 8 },
        { name: '店B', business_type: '喫茶店営業', address: '港区六本木6-1', lat: 35.662, lng: 139.731, geocoding_level: 8 },
        { name: '座標なし', business_type: '飲食店営業', address: '港区不明', lat: null, lng: null, geocoding_level: null },
      ],
    }),
  );
  return dir;
}

test('buildFeatureCollection: 座標を持つ施設だけを点に変換する', () => {
  const dir = makeFixture();
  try {
    const fc = buildFeatureCollection(path.join(dir, 'facilities'));
    assert.equal(fc.type, 'FeatureCollection');
    assert.equal(fc.features.length, 2); // 座標なしは除外
    const f = fc.features[0];
    assert.equal(f.geometry.type, 'Point');
    assert.deepEqual(f.geometry.coordinates, [139.737, 35.673]); // [lng, lat]
    assert.equal(f.properties.pref, '東京都');
    assert.equal(f.properties.city, '港区');
    assert.ok('name' in f.properties && 'business_type' in f.properties);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('generateTiles: metadata.json と、各点に対応する非空 pbf タイルを生成する', () => {
  const dir = makeFixture();
  const outDir = path.join(dir, 'tiles');
  try {
    const written = generateTiles({
      minZoom: 12,
      maxZoom: 12,
      facilitiesDir: path.join(dir, 'facilities'),
      outDir,
    });
    assert.ok(written >= 1, `タイルが1枚以上生成される (${written})`);

    // metadata.json（TileJSON）の要点
    const meta = JSON.parse(fs.readFileSync(path.join(outDir, 'metadata.json'), 'utf-8'));
    assert.equal(meta.format, 'pbf');
    assert.equal(meta.minzoom, 12);
    assert.equal(meta.maxzoom, 12);
    assert.deepEqual(meta.tiles, ['{z}/{x}/{y}.pbf']);
    assert.equal(meta.vector_layers[0].id, 'facilities');

    // フィクスチャの点が属する z12 タイルに、非空の .pbf が実在する
    // （書き出しパスが lonLatToTile と整合していることの検証）
    const [x, y] = lonLatToTile(139.737, 35.673, 12);
    const pbfPath = path.join(outDir, '12', String(x), `${y}.pbf`);
    assert.ok(fs.existsSync(pbfPath), `点に対応する pbf が存在する: 12/${x}/${y}.pbf`);
    assert.ok(fs.statSync(pbfPath).size > 0, 'pbf が非空である');

    // 出力された .pbf の総数が戻り値(written)と一致する
    const pbfCount = fs
      .readdirSync(outDir)
      .filter((z) => /^\d+$/.test(z))
      .reduce((n, z) => n + fs.readdirSync(path.join(outDir, z)).reduce((m, xx) => m + fs.readdirSync(path.join(outDir, z, xx)).length, 0), 0);
    assert.equal(pbfCount, written, `.pbf 数(${pbfCount}) が戻り値(${written})と一致`);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

console.log(`\n✅ gen-tiles ユニットテスト: ${passed}件すべて合格`);
