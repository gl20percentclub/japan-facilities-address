# okinawa-facilities-api

沖縄県のオープンデータ（食品営業許可・届出）をクロールし、
[geolonia/japanese-addresses](https://github.com/geolonia/japanese-addresses) と同じ思想の
**階層型静的JSON** として配信するシステムです。

- **ソース**: 沖縄県BODIK オープンデータ（CKAN: `https://data.bodik.jp`）
- **運用**: GitHub Actions で毎週自動クロール → GitHub Pages で配信
- **ライセンス**: 元データは CC BY 4.0

## API 構造

**都道府県 > 市区町村 > `data.json`** の3階層構造です。

```
api/facilities/
├── index.json                  # 都道府県一覧（都道府県名 → 市区町村名の配列）
└── 沖縄県/
    ├── index.json              # 市区町村名 → 施設数 のマップ
    ├── 那覇市/
    │   └── data.json           # その市区町村の全施設オブジェクトの配列
    └── 宜野湾市/
        └── data.json
```

### `index.json`

```json
{
  "meta": { "updated": 1749600000, "source": "沖縄県食品営業許可・届出", "license": "CC BY 4.0" },
  "data": { "沖縄県": ["那覇市", "宜野湾市"] }
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

#### 緯度経度（ジオコーディング）

元データに緯度経度が無い施設は、住所をもとに
[@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)
で座標を補完します。

- `lat` / `lng`: WGS84（EPSG:4326）。補完できなかった場合は `null`。
- `geocoding_level`: 補完した座標の**精度レベル**。元データに座標があった場合や補完できなかった場合は `null`。
  - `1` = 都道府県の代表点 / `2` = 市区町村の代表点 / `3` = 町丁目の代表点（重心） / `8` = 街区・地番レベル
  - 値が小さいほど大まかな位置（例: `3` は丁目の中心であり、建物の正確な位置ではない）。

補完結果は `.cache/geocode-cache.json` にキャッシュされ、再クロール時に再利用されます。

## 使い方

```bash
npm ci

# クロール → api/ を生成
npm run build

# ダウンロードをスキップしキャッシュ（.cache/）を使う
npm run build:dry

# ジオコーディングをスキップして高速に生成（座標は補完されない）
node scripts/crawl.js --no-geocode

# 生成結果のバリデーション
npm test
```

## 複数リソースへの対応

`scripts/crawl.js` の `TARGET_RESOURCE_IDS` 配列にリソースIDを追加するだけで、
複数データを1つのツリーに統合できます。

```js
const TARGET_RESOURCE_IDS = [
  'c9bf82c1-0689-4354-aada-c422f052be5e',
  // 別のリソースIDをここに追加
];
```

## 自動更新

`.github/workflows/crawl.yml` が毎週月曜 18:00 UTC（JST 火曜 AM 3:00）に実行され、
変更があれば `api/` をコミットし、`gh-pages` ブランチへデプロイします。
`workflow_dispatch` から手動実行も可能（`dry_run` オプション付き）。
