<div align="center">

# 🍽️ Japan Facilities API

**日本全国の飲食施設オープンデータ（食品営業許可・届出）を、無料で使える静的 API として配信**

[![Contributors](https://img.shields.io/github/contributors/gl20percentclub/japan-facilities-api)](https://github.com/gl20percentclub/japan-facilities-api/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-コントリビューション)
[![GitHub Issues](https://img.shields.io/github/issues/gl20percentclub/japan-facilities-api)](https://github.com/gl20percentclub/japan-facilities-api/issues)
[![Last Commit](https://img.shields.io/github/last-commit/gl20percentclub/japan-facilities-api)](https://github.com/gl20percentclub/japan-facilities-api/commits/main)
[![Weekly Crawl](https://img.shields.io/badge/更新-毎週自動-blue)](#️-自動更新の仕組み)

[クイックスタート](#-クイックスタート) · [API リファレンス](#-api-リファレンス) · [収録状況](docs/COVERAGE.md) · [バグ報告](https://github.com/gl20percentclub/japan-facilities-api/issues/new) · [機能要望](https://github.com/gl20percentclub/japan-facilities-api/issues/new)

</div>

---

各自治体が公開しているオープンデータ（食品営業許可・届出）を毎週自動クロールし、正規化・ジオコーディングした上で GitHub Pages から静的 API として配信しています。**登録不要・API キー不要**でそのまま利用できます。

## ✨ 特徴

- 🗾 **全国カバー** — 47都道府県・1,800以上の市区町村、70万件超の施設レコードを収録
- 📍 **緯度経度つき** — 座標が無い元データも [normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses) でジオコーディングして補完
- 🔄 **毎週自動更新** — GitHub Actions が毎週クロールして最新データを配信
- 📦 **好きな形式で** — 市区町村別 JSON、検索用インデックス、全国結合 CSV の3形式
- 🆓 **静的配信** — GitHub Pages でホスティング。登録・認証・レート制限の心配なし

<details>
<summary><b>📖 目次</b></summary>

- [クイックスタート](#-クイックスタート)
- [収録データ](#-収録データ)
- [全データ結合CSV（ダウンロード）](#-全データ結合csvダウンロード)
- [API リファレンス](#-api-リファレンス)
- [開発](#️-開発)
  - [セットアップとビルド](#セットアップとビルド)
  - [データソースの追加](#データソースの追加)
- [自動更新の仕組み](#️-自動更新の仕組み)
- [コントリビューション](#-コントリビューション)
- [コントリビューター](#-コントリビューター)
- [出典・ライセンス・免責事項](#-出典ライセンス免責事項)

</details>

## 🚀 クイックスタート

ベース URL は `https://gl20percentclub.github.io/japan-facilities-api/api/` です。

```bash
# 都道府県一覧（都道府県名 → 市区町村名の配列）
curl https://gl20percentclub.github.io/japan-facilities-api/api/facilities/index.json

# 那覇市の全施設（パスは URL エンコードが必要な場合があります）
curl "https://gl20percentclub.github.io/japan-facilities-api/api/facilities/%E6%B2%96%E7%B8%84%E7%9C%8C/%E9%82%A3%E8%A6%87%E5%B8%82/data.json"
```

JavaScript からはこう使えます。

```js
const BASE = 'https://gl20percentclub.github.io/japan-facilities-api/api';

// 那覇市の全施設を取得（日本語パスは encodeURIComponent でエンコード）
const res = await fetch(
  `${BASE}/facilities/${encodeURIComponent('沖縄県')}/${encodeURIComponent('那覇市')}/data.json`
);
const { data } = await res.json();
console.log(data[0].name, data[0].lat, data[0].lng);
```

## 📊 収録データ

> 📋 **どの自治体のデータをカバーしているか**は [`docs/COVERAGE.md`](docs/COVERAGE.md) を参照（全市区町村 × 管轄保健所設置主体の一覧・収集状況・出典・ライセンス）。

以下はクロール（`npm run build`）のたびに自動更新されます。ファイルサイズは目安です。

<!-- STATS:START -->
> **最終更新: 2026-07-09**
>
> | 項目 | 値 |
> |---|---|
> | 施設レコード数 | 705,914 件 |
> | ユニーク施設数（名前+座標） | 576,202 件 |
> | 都道府県 | 47 |
> | 市区町村 | 1,872 |
> | `api/` 合計サイズ | 約 366.6 MB |
> | `data.json` 合計 | 約 305.3 MB |
> | `search-index.json` | 約 61.1 MB |
<!-- STATS:END -->

## 📥 全データ結合CSV（ダウンロード）

都道府県別・市区町村別に分かれた JSON を、**全国 1 本にまとめた CSV** も配信しています。
Excel / pandas / BI ツール等で扱いたい場合はこちらが便利です。

| ファイル | 配布URL |
|---|---|
| 結合CSV（gzip 圧縮・約60MB） | https://gl20percentclub.github.io/japan-facilities-api/api/facilities-all.csv.gz |
| 結合CSV（非圧縮・約540MB） | https://gl20percentclub.github.io/japan-facilities-api/api/facilities-all.csv |

- **文字コード**: UTF-8（BOM 付き。Excel でそのまま開けます）
- **列**: `prefecture, city, city_raw, name, name_kana, business_type, address, lat, lng, geocoding_level, phone, license_no, license_date, expire_date, sources, licenses`
  - `city` は [normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses) で名寄せした公式市区町村名、`city_raw` は元データの生表記（郡名の有無などの揺れを含む）
- **クレンジング**: 全列一致の重複を除去。一部ソースの列ズレ（都道府県が欠けた住所など）を補正。業種違いで別レコードになっている同一施設は、許可レコードとして残しています
- 週次クロール（`npm run build`）のたびに再生成され、gh-pages で配信されます

> ⚠️ **市区町村が「不明」の行について**: 元データに市区町村欄が無く住所も粗い個票は、都道府県／市区町村を機械的に確定できず `prefecture=不明` または `city=不明` のまま収録しています（欠損させるより残す方針）。これらは元データ側の品質に起因するもので、結合CSVの生成ロジックの問題ではありません。

## 🔍 API リファレンス

**都道府県 > 市区町村 > `data.json`** の3階層構造です。

```
api/
├── search-index.json           # 施設名検索用のコンパクトな索引（全市区町村横断）
└── facilities/
    ├── index.json              # 都道府県一覧（都道府県名 → 市区町村名の配列）
    └── 沖縄県/
        ├── index.json          # 市区町村名 → 施設数 のマップ
        ├── 那覇市/
        │   └── data.json       # その市区町村の全施設オブジェクトの配列
        └── 宜野湾市/
            └── data.json
```

### `search-index.json`（施設名検索用・都道府県別分割）

施設名で横断検索したい利用側（地図アプリ等）向けの軽量な索引。検索に必要な項目だけを
配列形式で持ちます。データ量増加で単一ファイルが GitHub の 100MB/ファイル上限に近づくため、
**都道府県ごとに分割**し、トップにマニフェストを置きます。

```
api/
├── search-index.json          # マニフェスト（都道府県一覧・件数・schema・各shardのパス）
└── search-index/
    ├── 東京都.json             # { meta, data:[[name, address, lat, lng, level], ...] }
    ├── 大阪府.json
    └── …
```

**マニフェスト `search-index.json`**:
```json
{
  "meta": { "updated": 1700000000, "count": 576220, "schema": ["name", "address", "lat", "lng", "level"] },
  "prefectures": [
    { "name": "東京都", "count": 41234, "file": "search-index/東京都.json" }
  ]
}
```

**各 shard `search-index/{都道府県}.json`**:
```json
{
  "meta": { "updated": 1700000000, "count": 41234, "schema": ["name", "address", "lat", "lng", "level"] },
  "data": [ ["ステーキハウス○○", "港区松山1-9-9", 35.665, 139.75, 8] ]
}
```

- 各行は `meta.schema` の順（`name, address, lat, lng, level`）。
- 同一施設（業種違いで複数行）は `名前+座標` で重複排除済み。座標を持つ施設のみ収録。
- 利用側はマニフェストを読み、必要な都道府県 shard を取得。全国横断検索は全 shard を連結。
- `npm run build:search-index` で再生成、クロール時（`npm run build`）にも自動生成されます。

### `index.json`

`meta.sources` は、そのファイルに含まれる施設の出典・ライセンスの一覧（複数ソースを統合した場合は複数要素）。

```json
{
  "meta": {
    "updated": 1749600000,
    "sources": [
      { "source": "沖縄県食品営業許可・届出", "license": "CC BY 4.0" },
      { "source": "大阪市食品営業許可施設一覧", "license": "CC BY 4.0" }
    ]
  },
  "data": { "沖縄県": ["那覇市", "宜野湾市"], "大阪府": ["大阪市"] }
}
```

### `{都道府県}/index.json`

```json
{
  "meta": { "updated": 1749600000 },
  "data": { "那覇市": 342, "宜野湾市": 128 }
}
```

### `{都道府県}/{市区町村}/data.json`

業種ごとには分割せず、その市区町村の全施設を1ファイルにまとめます。
業種は各施設の `business_type` で判別できます。

```json
{
  "meta": { "updated": 1749600000 },
  "data": [
    {
      "name": "ステーキハウス○○",
      "name_kana": "ステーキハウスマルマル",
      "business_type": "飲食店営業",
      "address": "那覇市松山1-9-9",
      "lat": 26.216965935,
      "lng": 127.678060421,
      "geocoding_level": 8,
      "phone": "098-XXX-XXXX",
      "license_no": "第01202300556号",
      "license_date": "2023-12-07",
      "expire_date": "2030-01-31"
    }
  ]
}
```

### 緯度経度（ジオコーディング）

元データに緯度経度が無い施設は、住所をもとに
[@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)
で座標を補完します。

- `lat` / `lng`: WGS84（EPSG:4326）。補完できなかった場合は `null`。
- `geocoding_level`: 補完した座標の**精度レベル**。元データに座標があった場合や補完できなかった場合は `null`。
  - `1` = 都道府県の代表点 / `2` = 市区町村の代表点 / `3` = 町丁目の代表点（重心） / `8` = 街区・地番レベル
  - 値が小さいほど大まかな位置（例: `3` は丁目の中心であり、建物の正確な位置ではない）。

補完結果は `.cache/geocode-cache.json` にキャッシュされ、再クロール時に再利用されます。

## 🛠️ 開発

### セットアップとビルド

```bash
npm ci

# クロール → api/ を生成
npm run build

# ダウンロードをスキップしキャッシュ（.cache/）を使う
npm run build:dry

# ジオコーディングをスキップして高速に生成（座標は補完されない）
node scripts/crawl.js --no-geocode

# 特定ソースだけ処理（動作確認・部分再生成）
node scripts/crawl.js --only=osaka-city,tokyo-minato

# 生成結果のバリデーション
npm test
```

### データソースの追加

`scripts/sources.js` の `SOURCES` 配列に1エントリ追加するだけで、新しい自治体の
オープンデータを取り込めます。取得方法（CKAN / 直リンクGET / フォームPOST）、
形式（CSV / XLSX / XLS）、文字コード、都道府県・市区町村の既定値などをエントリで指定します。

```js
export const SOURCES = [
  // CKAN リソース
  {
    key: 'okinawa-bodik',
    acquire: { type: 'ckan', ckanBase: 'https://data.bodik.jp', resourceId: 'c9bf82c1-...' },
    source: '沖縄県食品営業許可・届出',
    license: 'CC BY 4.0',
  },
  // 直リンク CSV（都道府県・市区町村カラムが無ければ defaultPref / defaultCity を指定）
  {
    key: 'osaka-city',
    acquire: { type: 'get', url: 'https://.../260331zenku.csv', format: 'csv', encoding: 'shift_jis' },
    source: '大阪市食品営業許可施設一覧',
    license: 'CC BY 4.0',
    defaultPref: '大阪府',
    defaultCity: '大阪市',
  },
];
```

- 都道府県・市区町村カラムが無く `defaultCity` も指定しないデータは、ジオコーディング結果の
  都道府県・市区町村で自動補完されます。
- 一部データはヘッダの「緯度」「経度」が入れ替わっている（例: 大阪市）ため、日本域の範囲で
  自動的にサニティ補正します。

## ⚙️ 自動更新の仕組み

`.github/workflows/crawl.yml` が毎週月曜 18:00 UTC（JST 火曜 AM 3:00）に実行され、
`api/` を生成して `gh-pages` ブランチへ配信します。**生成物 `api/` は Git 管理せず**（`.gitignore`）、
配信は gh-pages のみ（履歴肥大を避けるため）。README の「収録データ」統計だけを main に反映します。
`workflow_dispatch` から手動実行も可能（`dry_run` / `fetch_i2fas` オプション付き）。

## 🤝 コントリビューション

**コントリビューションは大歓迎です！** バグ報告・機能提案・プルリクエスト、どんな形の貢献でも歓迎します。

たとえば次のような貢献ができます。

- 🗾 **新しい自治体データソースの追加** — [データソースの追加](#データソースの追加) の手順どおり `scripts/sources.js` に1エントリ追加するだけです。未収録の自治体は [`docs/COVERAGE.md`](docs/COVERAGE.md) で確認できます
- 🐛 **バグ報告・データ品質の問題報告** — [Issues](https://github.com/gl20percentclub/japan-facilities-api/issues) からお気軽にどうぞ（座標のずれ、重複、文字化けなど）
- 💡 **機能提案・改善アイデア** — Issue で議論を始めてください
- 📖 **ドキュメントの改善** — 誤字修正や説明の追加も立派な貢献です

### プルリクエストの流れ

1. このリポジトリを Fork する
2. ブランチを作成する（`git checkout -b feature/add-your-city`）
3. 変更をコミットする
4. `npm test` でバリデーションが通ることを確認する
5. プルリクエストを作成する

小さな変更でも遠慮なくどうぞ。不明点があれば Issue で気軽に質問してください。

## ✨ コントリビューター

このプロジェクトに貢献してくださった皆さんです。ありがとうございます！

<a href="https://github.com/gl20percentclub/japan-facilities-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gl20percentclub/japan-facilities-api" alt="Contributors" />
</a>

*Made with [contrib.rocks](https://contrib.rocks).*

## 📄 出典・ライセンス・免責事項

本サービスは各自治体が公開するオープンデータを取得・加工・統合して提供しています。

### 出典・データソース

全国の自治体が公開する食品営業許可オープンデータを収録しています。対象ソースの完全な一覧（自治体・取得URL・ライセンス）は、機械可読な形で以下に定義されています。

- `scripts/sources.js` — 個別定義（大阪市・東京都港区・奈良県・京都市 ほか）
- `scripts/bodik-sources.js` — BODIK（`data.bodik.jp`）掲載自治体（自動生成）
- `scripts/portal-sources.js` — 各自治体の独自ポータル/自庁サイト掲載分
- `scripts/fetch-i2fas.mjs` — 厚生労働省 食品衛生申請等システム（i2fas）オープンデータ（全国・保健所設置主体別）を取得

各データの出典・ライセンスは、生成物 `api/**/index.json` ・ `data.json` の `meta.sources` にも埋め込まれています。

- 自治体ごとにライセンスは異なります（例: CC BY 4.0 / CC BY 2.1 JP / Public Data License (PDL1.0) / 自治体独自ライセンス）。ライセンス表記が確認できないソースは出典明示で運用しています。
- 一部データは改正食品衛生法（令和3年6月）以前のスナップショットで、他ソースより古い場合があります（例: 京都市は令和3年3月末時点）。
- 厚生労働省「食品衛生申請等システム（i2fas）」のオープンデータも収録対象です。ライセンスは「公共データ利用規約（第1.0版, PDL1.0）」＝CC BY 4.0 互換（出典明示で商用含む再利用可）。掲載賛同施設のみの公開のため全件ではありません。取得はブラウザ自動化（`node scripts/fetch-i2fas.mjs`）で行い、`.cache/i2fas` に保存後クロールで統合します。robots.txt が `/faspub/` をクロール禁止としているため、逐次・低レートで取得します。

### 加工データであることについて

本データは各自治体が公開するオープンデータを加工・統合したものです。
当サービスでは、全国共通フォーマットへの正規化、項目名の統一、緯度経度の付与などの加工を行っています。

### 緯度経度について

緯度経度は当サービスが独自に付与した参考情報です。
緯度経度は自治体が提供しているものではなく、住所等をもとにジオコーディングして付与しています。
一部施設について位置情報が実際の所在地と異なる場合があります。
地図表示や位置情報について正確性を保証するものではありません。

### 正確性・最新性について

本サービスは、内容の正確性、完全性、最新性について保証するものではありません。
最新かつ正式な情報は、各自治体が公開する情報をご確認ください。

### 公式サービスではないことについて

本サービスは各自治体が公開するオープンデータを独自に集約・加工したサービスです。
**各自治体の公式サービスではありません。**
