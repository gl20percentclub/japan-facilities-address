// ベクトルタイル生成（z/x/y .pbf ディレクトリ）
//
// api/facilities 配下の全 data.json を読み、座標を持つ施設を点(Point)として
// Mapbox Vector Tile（MVT）に焼き、GitHub Pages から直接配信できる z/x/y 形式で出力する。
//   api/tiles/{z}/{x}/{y}.pbf   MapLibre の tiles:["{z}/{x}/{y}.pbf"] でそのまま読める
//   api/tiles/metadata.json     TileJSON（レイヤ・ズーム範囲・bounds）
//
// tippecanoe 等のシステムバイナリは不要（pure JS: geojson-vt + vt-pbf）。
// タイルは非圧縮 pbf で書くため、GitHub Pages で Content-Encoding 設定なしにそのまま配信できる。
//
// 使い方:
//   node scripts/gen-tiles.js          既存の api/facilities から生成
//   TILES_MIN_ZOOM=6 TILES_MAX_ZOOM=12 node scripts/gen-tiles.js   ズーム範囲を指定
//   （crawl.js の最後でも自動生成される）

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as gvtNs from 'geojson-vt';
import * as vtpbfNs from 'vt-pbf';

const geojsonvt = gvtNs.default || gvtNs;
const vtpbf = vtpbfNs.default || vtpbfNs;
const fromGeojsonVt = vtpbf.fromGeojsonVt || vtpbfNs.fromGeojsonVt;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FACILITIES_DIR = path.join(ROOT, 'api', 'facilities');
const TILES_DIR = path.join(ROOT, 'api', 'tiles');
const LAYER = 'facilities';

const MIN_ZOOM = Number(process.env.TILES_MIN_ZOOM ?? 6);
const MAX_ZOOM = Number(process.env.TILES_MAX_ZOOM ?? 12);
// 日本のおおよその範囲 [west, south, east, north]
const BOUNDS = [122, 20, 154, 46];

// 経緯度 → スリッピータイル座標 (x, y)
export function lonLatToTile(lng, lat, z) {
  const n = 2 ** z;
  const latRad = (lat * Math.PI) / 180;
  let x = Math.floor(((lng + 180) / 360) * n);
  let y = Math.floor(((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n);
  x = Math.max(0, Math.min(n - 1, x));
  y = Math.max(0, Math.min(n - 1, y));
  return [x, y];
}

// facilities ディレクトリの全 data.json から、座標を持つ施設の GeoJSON FeatureCollection を組み立てる。
export function buildFeatureCollection(facilitiesDir = FACILITIES_DIR) {
  const features = [];
  for (const pref of fs.readdirSync(facilitiesDir).sort()) {
    const prefDir = path.join(facilitiesDir, pref);
    if (!fs.statSync(prefDir).isDirectory()) continue;
    for (const city of fs.readdirSync(prefDir).sort()) {
      const dataPath = path.join(prefDir, city, 'data.json');
      if (!fs.existsSync(dataPath)) continue;
      const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      for (const f of json.data ?? []) {
        if (typeof f.lat !== 'number' || typeof f.lng !== 'number') continue;
        features.push({
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [f.lng, f.lat] },
          properties: { name: f.name || '', business_type: f.business_type || '', pref, city },
        });
      }
    }
  }
  return { type: 'FeatureCollection', features };
}

/** facilities ツリーから z/x/y ベクトルタイルを生成する。書き出したタイル数を返す。 */
export function generateTiles({
  minZoom = MIN_ZOOM,
  maxZoom = MAX_ZOOM,
  facilitiesDir = FACILITIES_DIR,
  outDir = TILES_DIR,
} = {}) {
  if (!fs.existsSync(facilitiesDir)) {
    console.warn('  api/facilities が無いため ベクトルタイルの生成をスキップ');
    return 0;
  }

  const fc = buildFeatureCollection(facilitiesDir);
  if (fc.features.length === 0) {
    console.warn('  座標を持つ施設が無いため ベクトルタイルの生成をスキップ');
    return 0;
  }

  // 古いタイルを消してから作り直す（点が減った場合の取り残しを防ぐ）。
  if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const index = geojsonvt(fc, { maxZoom, extent: 4096, buffer: 64, tolerance: 3 });

  // 各点が属するタイル座標を全ズームで集め、非空タイルだけを書き出す。
  const coords = new Set();
  for (const f of fc.features) {
    const [lng, lat] = f.geometry.coordinates;
    for (let z = minZoom; z <= maxZoom; z++) {
      const [x, y] = lonLatToTile(lng, lat, z);
      coords.add(`${z}/${x}/${y}`);
    }
  }

  let written = 0;
  let bytes = 0;
  for (const key of coords) {
    const [z, x, y] = key.split('/').map(Number);
    const tile = index.getTile(z, x, y);
    if (!tile || !tile.features.length) continue;
    const buf = Buffer.from(fromGeojsonVt({ [LAYER]: tile }, { version: 2 }));
    const dir = path.join(outDir, String(z), String(x));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${y}.pbf`), buf);
    written++;
    bytes += buf.length;
  }

  // TileJSON（利用側は tiles テンプレートと vector_layers を参照）
  const metadata = {
    tilejson: '2.2.0',
    name: 'japan-facilities',
    description: '全国 食品営業許可 施設の点データ',
    format: 'pbf',
    scheme: 'xyz',
    minzoom: minZoom,
    maxzoom: maxZoom,
    bounds: BOUNDS,
    tiles: ['{z}/{x}/{y}.pbf'],
    vector_layers: [
      { id: LAYER, fields: { name: 'String', business_type: 'String', pref: 'String', city: 'String' } },
    ],
  };
  fs.writeFileSync(path.join(outDir, 'metadata.json'), JSON.stringify(metadata, null, 2) + '\n');

  console.log(
    `  ベクトルタイル: ${fc.features.length}点 → ${written}タイル（z${minZoom}-${maxZoom}, ` +
      `計 ${(bytes / 1024 / 1024).toFixed(1)} MB）→ api/tiles/`,
  );
  return written;
}

// 直接実行された場合は生成する。
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTiles();
}
