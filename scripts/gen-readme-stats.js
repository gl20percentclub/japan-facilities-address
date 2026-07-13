// ---------------------------------------------------------------------------
// README.md の「収録データ」統計ブロックを api/ の実データから再生成する。
//
// 施設数・都道府県数・市区町村数・主要ファイルサイズ（目安）を集計し、README の
// <!-- STATS:START --> 〜 <!-- STATS:END --> の間を書き換える。クロール
// （crawl.js）の最後でも自動的に呼ばれるので、更新のたびに README も最新になる。
//
// 使い方:
//   node scripts/gen-readme-stats.js     既存の api/ から README を更新
// ---------------------------------------------------------------------------

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const API_DIR = path.join(ROOT, 'api');
const FACILITIES_DIR = path.join(API_DIR, 'facilities');
const SEARCH_INDEX_PATH = path.join(API_DIR, 'search-index.json');
const README_PATH = path.join(ROOT, 'README.md');

const START = '<!-- STATS:START -->';
const END = '<!-- STATS:END -->';

/** ディレクトリ配下の全ファイルの合計バイト数を再帰的に求める。 */
function dirSize(dir) {
  let total = 0;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    total += st.isDirectory() ? dirSize(p) : st.size;
  }
  return total;
}

/** バイト数を目安のサイズ表記（KB / MB）にする。 */
function humanSize(bytes) {
  if (bytes >= 1024 * 1024) return `約 ${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `約 ${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

/** 3桁区切りの数値文字列。 */
function num(n) {
  return n.toLocaleString('en-US');
}

/**
 * api/ を集計して統計オブジェクトを返す。data.json を走査して施設レコード数と
 * data.json 合計サイズを同時に求める。返り値はテスト等からも利用できる。
 */
export function collectStats() {
  if (!fs.existsSync(FACILITIES_DIR)) return null;

  const top = JSON.parse(fs.readFileSync(path.join(FACILITIES_DIR, 'index.json'), 'utf-8'));
  const prefectures = Object.keys(top.data ?? {});
  let cityCount = 0;
  let recordCount = 0;
  let dataJsonBytes = 0;
  let updated = top.meta?.updated ?? 0;

  for (const pref of prefectures) {
    for (const city of top.data[pref] ?? []) {
      const dataPath = path.join(FACILITIES_DIR, pref, city, 'data.json');
      if (!fs.existsSync(dataPath)) continue;
      cityCount += 1;
      dataJsonBytes += fs.statSync(dataPath).size;
      const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      recordCount += Array.isArray(json.data) ? json.data.length : 0;
      if (json.meta?.updated) updated = Math.max(updated, json.meta.updated);
    }
  }

  // ユニーク施設数は search-index.json（名前+座標で重複排除済み）の件数を使う。
  let uniqueCount = null;
  if (fs.existsSync(SEARCH_INDEX_PATH)) {
    const idx = JSON.parse(fs.readFileSync(SEARCH_INDEX_PATH, 'utf-8'));
    uniqueCount = idx.meta?.count ?? (Array.isArray(idx.data) ? idx.data.length : null);
  }

  return {
    prefectureCount: prefectures.length,
    cityCount,
    recordCount,
    uniqueCount,
    updated,
    apiBytes: dirSize(API_DIR),
    dataJsonBytes,
    searchIndexBytes: fs.existsSync(SEARCH_INDEX_PATH) ? fs.statSync(SEARCH_INDEX_PATH).size : 0,
  };
}

/** 統計オブジェクトから README に埋め込む Markdown テーブルを組み立てる。 */
export function renderStats(s) {
  const date = s.updated ? new Date(s.updated * 1000).toISOString().slice(0, 10) : '—';
  const lines = [
    `> **最終更新: ${date}**`,
    '>',
    '> | 項目 | 値 |',
    '> |---|---|',
    `> | 施設レコード数 | ${num(s.recordCount)} 件 |`,
  ];
  if (s.uniqueCount != null) {
    lines.push(`> | ユニーク施設数（名前+座標） | ${num(s.uniqueCount)} 件 |`);
  }
  lines.push(
    `> | 都道府県 | ${num(s.prefectureCount)} |`,
    `> | 市区町村 | ${num(s.cityCount)} |`,
    `> | \`api/\` 合計サイズ | ${humanSize(s.apiBytes)} |`,
    `> | \`data.json\` 合計 | ${humanSize(s.dataJsonBytes)} |`,
    `> | \`search-index.json\` | ${humanSize(s.searchIndexBytes)} |`,
  );
  return lines.join('\n');
}

/** README の STATS ブロックを再生成して書き出す。集計できなければ何もしない。 */
export function generateReadmeStats() {
  const s = collectStats();
  if (!s) {
    console.warn('  api/ が無いため README 統計の生成をスキップ');
    return null;
  }
  const readme = fs.readFileSync(README_PATH, 'utf-8');
  const startIdx = readme.indexOf(START);
  const endIdx = readme.indexOf(END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.warn(`  README に ${START} / ${END} マーカーが無いためスキップ`);
    return null;
  }
  const before = readme.slice(0, startIdx + START.length);
  const after = readme.slice(endIdx);
  const next = `${before}\n${renderStats(s)}\n${after}`;
  if (next !== readme) {
    fs.writeFileSync(README_PATH, next);
    console.log(`  README 統計を更新: ${num(s.recordCount)}件 / ${s.cityCount}市区町村`);
  } else {
    console.log('  README 統計に変更なし');
  }
  return s;
}

// 直接実行された場合は生成する。
if (import.meta.url === `file://${process.argv[1]}`) {
  generateReadmeStats();
}
