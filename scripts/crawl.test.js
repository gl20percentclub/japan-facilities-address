// crawl.js の純粋関数のユニットテスト。
//   node scripts/crawl.test.js
//
// import.meta ガードにより crawl.js を import してもクロールは実行されない。

import assert from 'node:assert/strict';
import {
  normalizeDate,
  sanitizeLatLng,
  resolvePrefecture,
  resolveCity,
  mapRecord,
  toFacility,
  parseCSVText,
  splitPrefCity,
  findEmptySources,
  fetchWithRetry,
  resolveLinkFromHtml,
  isPlaceholderAddress,
} from './crawl.js';

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

const asyncTests = [];
function testAsync(name, fn) {
  asyncTests.push({ name, fn });
}

// --- normalizeDate: 和暦・西暦の正規化 ---
test('normalizeDate: 令和 → 西暦', () => {
  assert.equal(normalizeDate('R01.06.21'), '2019-06-21');
  assert.equal(normalizeDate('R8.5.31'), '2026-05-31');
});
test('normalizeDate: 平成 → 西暦', () => {
  assert.equal(normalizeDate('H27.03.16'), '2015-03-16');
});
test('normalizeDate: 西暦（各区切り・年月日）', () => {
  assert.equal(normalizeDate('2030-10-31'), '2030-10-31');
  assert.equal(normalizeDate('2030/1/5'), '2030-01-05');
  assert.equal(normalizeDate('2030年10月31日'), '2030-10-31');
});
test('normalizeDate: 空・不正は null', () => {
  assert.equal(normalizeDate(''), null);
  assert.equal(normalizeDate(null), null);
  assert.equal(normalizeDate('不明'), null);
});

// --- sanitizeLatLng: 緯度経度のサニティ補正 ---
test('sanitizeLatLng: 正常はそのまま', () => {
  assert.deepEqual(sanitizeLatLng(34.7, 135.5), [34.7, 135.5]);
});
test('sanitizeLatLng: 入れ替わり（大阪市パターン）は入替', () => {
  // 緯度列に経度値(135.5)、経度列に緯度値(34.7)が入っているケース
  assert.deepEqual(sanitizeLatLng(135.5139347, 34.70680958), [34.70680958, 135.5139347]);
});
test('sanitizeLatLng: 日本域外は無効(null)', () => {
  assert.deepEqual(sanitizeLatLng(0, 0), [null, null]);
  assert.deepEqual(sanitizeLatLng(500, 500), [null, null]);
});
test('sanitizeLatLng: 片方 null はそのまま', () => {
  assert.deepEqual(sanitizeLatLng(null, 135.5), [null, 135.5]);
});

// --- resolvePrefecture / resolveCity ---
test('resolvePrefecture: カラム優先', () => {
  assert.equal(resolvePrefecture({ prefecture_name: '大阪府' }, {}), '大阪府');
});
test('resolvePrefecture: 市区町村コード先頭2桁から解決', () => {
  assert.equal(resolvePrefecture({ city_code: '271004' }, {}), '大阪府');
  assert.equal(resolvePrefecture({ city_code: '131032' }, {}), '東京都');
});
test('resolvePrefecture: 既定値フォールバック', () => {
  assert.equal(resolvePrefecture({}, { defaultPref: '奈良県' }), '奈良県');
  assert.equal(resolvePrefecture({}, {}), '不明');
});
test('resolveCity: カラム→既定値→不明', () => {
  assert.equal(resolveCity({ city_name: '港区' }, {}), '港区');
  assert.equal(resolveCity({}, { defaultCity: '京都市' }), '京都市');
  assert.equal(resolveCity({}, {}), '不明');
});

// --- mapRecord: 元ヘッダー揺れ → 内部キー ---
test('mapRecord: 各フォーマットの別名を同一キーへ寄せる', () => {
  assert.equal(mapRecord({ 屋号: 'バル惣田' }).facility_name, 'バル惣田');
  assert.equal(mapRecord({ 営業所名称: 'てぃ～けぇ～' }).facility_name, 'てぃ～けぇ～');
  assert.equal(mapRecord({ '営業所＿名称（屋号・商号）１': '広来' }).facility_name, '広来');
  assert.equal(mapRecord({ 業種: '飲食店営業' }).business_type, '飲食店営業');
  assert.equal(mapRecord({ 業種分類: '飲食店営業' }).business_type, '飲食店営業');
  assert.equal(mapRecord({ 指令番号: '第1号' }).license_no, '第1号');
  assert.equal(mapRecord({ 許可終了日: 'R08.05.31' }).valid_end, 'R08.05.31');
});

// --- toFacility: 施設オブジェクト生成 ---
test('toFacility: 分割住所を結合し方書を付す', () => {
  const f = toFacility({
    facility_name: 'テスト店',
    address_town: '赤坂一丁目',
    address_street: '１番１２号',
    address_extra: '明産ビル１階',
    business_type: '飲食店営業',
    valid_end: 'R08.05.31',
  });
  assert.equal(f.address, '赤坂一丁目１番１２号 明産ビル１階');
  assert.equal(f.expire_date, '2026-05-31');
});
test('toFacility: 名称も住所も無ければ null', () => {
  assert.equal(toFacility({ phone: '000' }), null);
});
test('toFacility: 座標入れ替わりを補正して格納', () => {
  const f = toFacility({ facility_name: 'X', address: 'a', lat: '135.5', lng: '34.7' });
  assert.equal(f.lat, 34.7);
  assert.equal(f.lng, 135.5);
});

// --- parseCSVText: 引用符・改行・カンマ ---
test('parseCSVText: 引用符内のカンマと改行', () => {
  const rows = parseCSVText('a,b\n"x,y","z\nw"\n');
  assert.deepEqual(rows, [['a', 'b'], ['x,y', 'z\nw']]);
});
test('parseCSVText: 空行を除去', () => {
  const rows = parseCSVText('a,b\n\n\nc,d\n');
  assert.deepEqual(rows, [['a', 'b'], ['c', 'd']]);
});

// --- splitPrefCity: 住所→[都道府県, 市区町村] ---
test('splitPrefCity: 郡+町村（郡名に市を含む場合も）', () => {
  assert.deepEqual(splitPrefCity('北海道足寄郡足寄町南三条1丁目'), ['北海道', '足寄郡足寄町']);
  assert.deepEqual(splitPrefCity('北海道余市郡余市町大川町'), ['北海道', '余市郡余市町']);
});
test('splitPrefCity: 政令市の行政区は市に集約', () => {
  assert.deepEqual(splitPrefCity('北海道札幌市中央区北1条'), ['北海道', '札幌市']);
  assert.deepEqual(splitPrefCity('大阪府大阪市北区梅田'), ['大阪府', '大阪市']);
});
test('splitPrefCity: 一般市・特別区', () => {
  assert.deepEqual(splitPrefCity('千葉県市川市八幡'), ['千葉県', '市川市']);
  assert.deepEqual(splitPrefCity('東京都千代田区丸の内'), ['東京都', '千代田区']);
});
test('splitPrefCity: 市名が「市」で終わる市（二重の市）', () => {
  assert.deepEqual(splitPrefCity('三重県四日市市諏訪町'), ['三重県', '四日市市']);
  assert.deepEqual(splitPrefCity('広島県廿日市市下平良'), ['広島県', '廿日市市']);
  assert.deepEqual(splitPrefCity('石川県野々市市三納'), ['石川県', '野々市市']);
});
test('splitPrefCity: 都道府県で始まらなければ null', () => {
  assert.deepEqual(splitPrefCity('足寄町南三条'), [null, null]);
  assert.deepEqual(splitPrefCity(''), [null, null]);
});

// --- isPlaceholderAddress: 実体のない住所（一円・管内・空欄等）の判定 ---
test('isPlaceholderAddress: プレースホルダを true と判定', () => {
  for (const s of ['', '   ', '市内一円', '県内一円', '県下一円', '堺市内一円', '富山県内一円',
    '県下一円（ただし、神戸市、姫路市を除く）', '北部保健所管内', '（露店営業）', '那覇市内']) {
    assert.equal(isPlaceholderAddress(s), true, `placeholder: «${s}»`);
  }
});
test('isPlaceholderAddress: 実住所は false と判定', () => {
  for (const s of ['大阪府堺市中区深阪3丁10-59', '那覇市松山1-9-9', '港区赤坂一丁目1番',
    '丸の内2-1-1', '足寄郡足寄町南三条']) {
    assert.equal(isPlaceholderAddress(s), false, `real: «${s}»`);
  }
});

// --- findEmptySources: 施設0件のソース検知 ---
test('findEmptySources: 0件・未処理のソースを返す', () => {
  const sources = [{ key: 'a' }, { key: 'b' }, { key: 'c' }];
  const kept = new Map([
    ['a', 10],
    ['b', 0],
    // c は未処理（取得前に落ちた） → Map に無い
  ]);
  assert.deepEqual(findEmptySources(sources, kept), [{ key: 'b' }, { key: 'c' }]);
});
test('findEmptySources: 全ソースに施設があれば空配列', () => {
  const sources = [{ key: 'a' }, { key: 'b' }];
  const kept = new Map([['a', 1], ['b', 5]]);
  assert.deepEqual(findEmptySources(sources, kept), []);
});

// --- fetchWithRetry: 一過性の失敗はリトライ、恒久的な失敗は即失敗 ---
// テスト用に global fetch を差し替える。バックオフは baseDelayMs=1 で高速化。
function withMockFetch(impl, run) {
  const orig = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async (...args) => {
    calls++;
    return impl(calls, ...args);
  };
  return Promise.resolve(run(() => calls)).finally(() => {
    globalThis.fetch = orig;
  });
}
const okRes = (body) => ({ ok: true, status: 200, statusText: 'OK', arrayBuffer: async () => Buffer.from(body) });
const errRes = (status) => ({ ok: false, status, statusText: 'x', arrayBuffer: async () => Buffer.from('') });

testAsync('fetchWithRetry: 5xx を経て成功', () =>
  withMockFetch(
    (n) => (n < 3 ? errRes(503) : okRes('good')),
    async (calls) => {
      const buf = await fetchWithRetry('u', {}, { retries: 3, baseDelayMs: 1 });
      assert.equal(Buffer.from(buf).toString(), 'good');
      assert.equal(calls(), 3);
    },
  ));

testAsync('fetchWithRetry: ネットワーク例外を経て成功', () =>
  withMockFetch(
    (n) => {
      if (n < 2) throw new Error('ECONNRESET');
      return okRes('recovered');
    },
    async (calls) => {
      const buf = await fetchWithRetry('u', {}, { retries: 3, baseDelayMs: 1 });
      assert.equal(Buffer.from(buf).toString(), 'recovered');
      assert.equal(calls(), 2);
    },
  ));

testAsync('fetchWithRetry: 404 は再試行せず即失敗', () =>
  withMockFetch(
    () => errRes(404),
    async (calls) => {
      await assert.rejects(() => fetchWithRetry('u', {}, { retries: 3, baseDelayMs: 1 }), /404/);
      assert.equal(calls(), 1); // 恒久的な失敗なのでリトライしない
    },
  ));

testAsync('fetchWithRetry: リトライ上限を超えたら失敗', () =>
  withMockFetch(
    () => errRes(500),
    async (calls) => {
      await assert.rejects(() => fetchWithRetry('u', {}, { retries: 2, baseDelayMs: 1 }), /500/);
      assert.equal(calls(), 3); // 初回 + リトライ2回
    },
  ));

// --- resolveLinkFromHtml: 掲載ページからリンクを解決 ---
// 奈良県の掲載ページを模した HTML（全件1本＋差分複数）。
const NARA_HTML = `
<ul>
  <li><a href="/documents/4585/20260527103326.xlsx">食品営業許可施設一覧【令和8年3月末時点の全許可施設一覧】（エクセル：1,105KB）</a></li>
  <li><a href="/documents/4585/20260130165931_1.xlsx">食品営業許可施設一覧【令和7年4月～5月の新規許可施設】（エクセル：35KB）</a></li>
  <li><a href="/documents/4585/keisair0802-0803.xlsx">食品営業許可施設一覧【令和8年2月～3月の新規許可施設一覧】（エクセル：42KB）</a></li>
  <li><a href="/n086/other.html">関連ページ</a></li>
</ul>`;

test('resolveLinkFromHtml: 文言一致リンクを相対→絶対URLで解決', () => {
  const hit = resolveLinkFromHtml(NARA_HTML, {
    pattern: '全許可施設',
    format: 'xlsx',
    baseUrl: 'https://www.pref.nara.lg.jp/n086/52413.html',
  });
  assert.equal(hit.url, 'https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx');
  assert.equal(hit.count, 1); // 差分（新規許可施設）とは区別され1件に絞れる
  assert.match(hit.text, /全許可施設/);
});
test('resolveLinkFromHtml: format 拡張子で絞り込む', () => {
  // pattern を緩めても .xlsx 以外（.html）は候補から除外される
  const hit = resolveLinkFromHtml(NARA_HTML, { pattern: '関連', format: 'xlsx', baseUrl: 'https://x/' });
  assert.equal(hit, null);
});
test('resolveLinkFromHtml: 複数一致は総数を返し先頭を採用', () => {
  const hit = resolveLinkFromHtml(NARA_HTML, { pattern: '新規許可施設', format: 'xlsx', baseUrl: 'https://x/' });
  assert.equal(hit.count, 2);
  assert.equal(hit.url, 'https://x/documents/4585/20260130165931_1.xlsx');
});
test('resolveLinkFromHtml: 一致なしは null', () => {
  assert.equal(resolveLinkFromHtml(NARA_HTML, { pattern: '存在しない', format: 'xlsx' }), null);
});
test('resolveLinkFromHtml: href の &amp; を復元', () => {
  const html = '<a href="/dl?id=1&amp;t=x.csv">最新データ</a>';
  const hit = resolveLinkFromHtml(html, { pattern: '最新', baseUrl: 'https://x/' });
  assert.equal(hit.url, 'https://x/dl?id=1&t=x.csv');
});

const runAsync = async () => {
  for (const { name, fn } of asyncTests) {
    await fn();
    passed++;
    console.log(`  ✓ ${name}`);
  }
  console.log(`\n✅ crawl.js ユニットテスト: ${passed}件すべて合格`);
};

runAsync().catch((err) => {
  console.error('\n❌ テスト失敗:', err);
  process.exit(1);
});
