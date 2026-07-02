// ---------------------------------------------------------------------------
// 施設名検索用のコンパクトな索引 api/search-index.json を生成する。
//
// 施設名で地図アプリ（BA-SHARE 等）から検索できるよう、全市区町村の data.json を
// 横断して「名前・住所・座標・精度レベル」だけを 1 ファイルにまとめる。各 data.json
// を個別に読ませると重い（合計〜14MB）ため、検索に必要な項目だけを抽出し、キー名の
// 繰り返しを避ける配列形式にして小さくする（gzip 配信で数百KB 程度）。
//
// 使い方:
//   node scripts/gen-search-index.js     既存の api/facilities から生成
//   （crawl.js の最後でも自動生成される）
// ---------------------------------------------------------------------------

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FACILITIES_DIR = path.join(ROOT, 'api', 'facilities');
const INDEX_PATH = path.join(ROOT, 'api', 'search-index.json');

/** 座標を 6 桁に丸めてサイズを削減する（約 0.1m 精度で十分）。 */
function round6(n) {
  return Math.round(n * 1e6) / 1e6;
}

/**
 * api/facilities 配下の全 data.json から検索索引を組み立てて書き出す。
 * 生成した索引オブジェクトを返す（テスト等から利用できる）。
 */
export function generateSearchIndex() {
  if (!fs.existsSync(FACILITIES_DIR)) {
    console.warn('  api/facilities が無いため search-index の生成をスキップ');
    return null;
  }

  const rows = [];
  const seen = new Set();
  let updated = 0;

  // readdirSync の列挙順は OS/ファイルシステム依存（macOS は名前順、Linux は
  // 非ソート）。索引はコミット対象なので、環境に依らず安定した行順になるよう
  // 都道府県・市区町村ともに名前順にソートしてから処理する。
  for (const pref of fs.readdirSync(FACILITIES_DIR).sort()) {
    const prefDir = path.join(FACILITIES_DIR, pref);
    if (!fs.statSync(prefDir).isDirectory()) continue;

    for (const city of fs.readdirSync(prefDir).sort()) {
      const dataPath = path.join(prefDir, city, 'data.json');
      if (!fs.existsSync(dataPath)) continue;

      const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      if (json?.meta?.updated) updated = Math.max(updated, json.meta.updated);

      for (const f of json.data ?? []) {
        // 座標を持ち、名前がある施設だけを索引に載せる（座標が無いと飛べない）。
        if (typeof f.lat !== 'number' || typeof f.lng !== 'number') continue;
        if (!f.name) continue;

        // 出力する丸め後の座標で重複排除する（生値で判定すると、丸めると同一に
        // なる同名施設が重複行として残り得るため、出力値でキーを作る）。
        const lat = round6(f.lat);
        const lng = round6(f.lng);

        // 同一施設が業種違いで複数行あるため、名前+座標で重複排除する。
        const key = `${f.name}|${lat}|${lng}`;
        if (seen.has(key)) continue;
        seen.add(key);

        // schema: [name, address, lat, lng, level]
        rows.push([f.name, f.address ?? '', lat, lng, f.geocoding_level ?? null]);
      }
    }
  }

  const out = {
    meta: {
      updated,
      count: rows.length,
      // 各要素の並び。利用側（BA-SHARE 等）はこの順で解釈する。
      schema: ['name', 'address', 'lat', 'lng', 'level'],
    },
    data: rows,
  };

  fs.mkdirSync(path.dirname(INDEX_PATH), { recursive: true });
  fs.writeFileSync(INDEX_PATH, JSON.stringify(out));
  console.log(`  検索索引: ${rows.length}件 → ${path.relative(ROOT, INDEX_PATH)}`);
  return out;
}

// 直接実行された場合は生成する。
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSearchIndex();
}
