// 市区町村名の名寄せ表を生成する。
//
// api/facilities/{都道府県}/{市区町村}/ のディレクトリ名（表記ゆれを含む生の市区町村名）を
// @geolonia/normalize-japanese-addresses で正規化し、公式の都道府県・市区町村名へ寄せた
// 対応表 api/_city_normmap.json を出力する。
//   キー: "元pref\t元city"  ->  { pref, city }（正規化後）または null（解決不能）
//
// この表を build-merged-csv.js が読み、結合CSVの city 列を名寄せする。
// 郡名あり/なし（今帰仁村 / 国頭郡今帰仁村）や県名なし住所の列ズレも同時に是正される。
//
// 全市区町村（約2,000ディレクトリ）だけを対象にするため、施設全件（145万件）を
// 正規化する必要はない。並列8本で数分で完了する。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalize } from '@geolonia/normalize-japanese-addresses';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FACILITIES_DIR = path.join(ROOT, 'api', 'facilities');
const OUT_PATH = path.join(ROOT, 'api', '_city_normmap.json');
const CONCURRENCY = 8;

const PREFS = new Set('北海道 青森県 岩手県 宮城県 秋田県 山形県 福島県 茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県 新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県 三重県 滋賀県 京都府 大阪府 兵庫県 奈良県 和歌山県 鳥取県 島根県 岡山県 広島県 山口県 徳島県 香川県 愛媛県 高知県 福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県 沖縄県'.split(' '));

// 各 (pref, city) ディレクトリの代表住所を1件拾う（normalize は住所文字列が要るため）。
function collectSamples() {
  const samples = [];
  if (!fs.existsSync(FACILITIES_DIR)) return samples;
  for (const prefD of fs.readdirSync(FACILITIES_DIR, { withFileTypes: true })) {
    if (!prefD.isDirectory()) continue;
    const prefPath = path.join(FACILITIES_DIR, prefD.name);
    for (const cityD of fs.readdirSync(prefPath, { withFileTypes: true })) {
      if (!cityD.isDirectory()) continue;
      const dataPath = path.join(prefPath, cityD.name, 'data.json');
      if (!fs.existsSync(dataPath)) continue;
      let addr = '';
      try {
        const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        addr = (json.data || []).find((f) => f.address)?.address || '';
      } catch { /* skip */ }
      samples.push({ pref: prefD.name, city: cityD.name, addr });
    }
  }
  return samples;
}

async function runPool(items, concurrency, worker) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        await worker(items[i]);
      }
    }),
  );
}

async function main() {
  const samples = collectSamples();
  console.log(`名寄せ対象: ${samples.length} 市区町村ディレクトリ`);

  const map = {};
  let ok = 0, ng = 0, done = 0;
  const t0 = Date.now();

  await runPool(samples, CONCURRENCY, async (s) => {
    let q = s.addr;
    const pref = PREFS.has(s.pref) ? s.pref : '';
    if (pref && q && !q.startsWith(pref)) q = pref + q;
    try {
      const r = q ? await normalize(q) : null;
      if (r && r.pref && r.city) {
        map[`${s.pref}\t${s.city}`] = { pref: r.pref, city: r.city, level: r.level };
        ok++;
      } else {
        map[`${s.pref}\t${s.city}`] = null;
        ng++;
      }
    } catch {
      map[`${s.pref}\t${s.city}`] = null;
      ng++;
    }
    if (++done % 200 === 0) console.log(`  ...${done}/${samples.length} (${Math.round((Date.now() - t0) / 1000)}s)`);
  });

  fs.writeFileSync(OUT_PATH, JSON.stringify(map));
  const uniq = new Set(Object.values(map).filter(Boolean).map((v) => `${v.pref}/${v.city}`));
  console.log(`✅ 名寄せ表を生成: ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`   成功 ${ok} / 解決不能 ${ng} / 正規化後ユニーク市区町村 ${uniq.size}（${Math.round((Date.now() - t0) / 1000)}s）`);
}

main().catch((err) => {
  console.error('❌ エラー:', err.message);
  process.exit(1);
});
