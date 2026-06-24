# okinawa-facilities-api

沖縄県のオープンデータ（食品営業許可・届出）をクロールし、
[geolonia/japanese-addresses](https://github.com/geolonia/japanese-addresses) と同じ思想の
**階層型静的JSON** として配信するシステムです。

- **ソース**: 沖縄県BODIK オープンデータ（CKAN: `https://data.bodik.jp`）
- **運用**: GitHub Actions で毎週自動クロール → GitHub Pages で配信
- **ライセンス**: 元データは CC BY 4.0

## API 構造

```
api/facilities/
├── index.json              # 市区町村一覧（市区町村名 → 業種名の配列）
├── 那覇市/
│   ├── index.json          # 業種名 → 施設数 のマップ
│   ├── 飲食店営業.json      # 施設オブジェクトの配列
│   └── 菓子製造業.json
└── 宜野湾市/
    └── ...
```

### `index.json`

```json
{
  "meta": { "updated": 1749600000, "source": "沖縄県食品営業許可・届出", "license": "CC BY 4.0" },
  "data": { "那覇市": ["飲食店営業", "菓子製造業"], "宜野湾市": ["飲食店営業"] }
}
```

### `{市区町村}/index.json`

```json
{
  "meta": { "updated": 1749600000 },
  "data": { "飲食店営業": 342, "菓子製造業": 28 }
}
```

### `{市区町村}/{業種}.json`

```json
{
  "meta": { "updated": 1749600000 },
  "data": [
    {
      "name": "ステーキハウス○○",
      "name_kana": "ステーキハウスマルマル",
      "business_type": "飲食店営業",
      "address": "那覇市松山1-9-9",
      "lat": null,
      "lng": null,
      "phone": "098-XXX-XXXX",
      "license_no": "第01202300556号",
      "license_date": "2023-12-07",
      "expire_date": "2030-01-31"
    }
  ]
}
```

## 使い方

```bash
npm ci

# クロール → api/ を生成
npm run build

# ダウンロードをスキップしキャッシュ（.cache/）を使う
npm run build:dry

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
