// クロール対象データソースの定義。
//
// ここに1エントリ追加するだけで、新しい自治体の食品営業許可オープンデータを
// 取り込める。crawl.js は各エントリを取得（acquire）→ パース → 施設ツリーに統合する。
//
// エントリの形:
//   key         一意のキー（キャッシュファイル名・--only 指定にも使う）
//   acquire     取得方法。
//               { type: 'ckan', ckanBase, resourceId }  CKAN resource_show でURL解決
//               { type: 'get',  url, format?, encoding? } URLを直接GET
//               { type: 'post', url, body, format?, encoding? } フォームPOSTで取得（京都市等）
//               format:   'csv' | 'xlsx' | 'xls'（省略時はURL拡張子/CKAN情報から推定）
//               encoding: CSVの文字コード 'utf-8' | 'shift_jis' | 'auto'（既定auto）
//   source      出典表示名（attribution）
//   license     ライセンス表記
//   defaultPref 都道府県カラムが無いデータの既定都道府県
//   defaultCity 市区町村カラムが無いデータの既定市区町村
//   allSheets   Excelの全シートを結合する（京都市は区ごとにシート分割のためtrue）
//
// 都道府県・市区町村カラムがなく defaultCity も無いデータ（例: 奈良県）は、
// ジオコーディング結果の都道府県・市区町村で補完される。

import { BODIK_SOURCES } from './bodik-sources.js';
import { PORTAL_SOURCES } from './portal-sources.js';

export const SOURCES = [
  // -------------------------------------------------------------------------
  // 沖縄県 BODIK（既存）
  // -------------------------------------------------------------------------
  {
    key: 'okinawa-bodik',
    acquire: {
      type: 'ckan',
      ckanBase: 'https://data.bodik.jp',
      resourceId: 'c9bf82c1-0689-4354-aada-c422f052be5e',
    },
    source: '沖縄県食品営業許可・届出',
    license: 'CC BY 4.0',
  },

  // -------------------------------------------------------------------------
  // 大阪市 食品営業許可施設一覧（令和8年3月31日時点・全区）
  // 直リンクCSV(UTF-8)。元データに緯度経度あり（ジオコーディング不要）。
  // https://www.city.osaka.lg.jp/kenko/page/0000575579.html
  // -------------------------------------------------------------------------
  {
    key: 'osaka-city',
    acquire: {
      type: 'get',
      url: 'https://www.city.osaka.lg.jp/contents/wdu280/260331zenku.csv',
      format: 'csv',
      encoding: 'shift_jis',
    },
    source: '大阪市食品営業許可施設一覧',
    license: 'CC BY 4.0',
    defaultPref: '大阪府',
    defaultCity: '大阪市',
  },

  // -------------------------------------------------------------------------
  // 東京都港区 食品営業許可一覧（GIF推奨データセット標準フォーマット）
  // 東京都オープンデータカタログ（catalog.data.metro.tokyo.lg.jp）の
  //   dataset t131032d0000000244 の実体CSV。緯度経度カラムは概ね空欄。
  // -------------------------------------------------------------------------
  {
    key: 'tokyo-minato',
    acquire: {
      type: 'get',
      url: 'https://opendata.city.minato.tokyo.jp/dataset/54d8c582-00e2-4730-a23f-4a5befec9ae5/resource/c9d0299e-8e05-4317-877f-83055709e41f/download/food_business_all.csv',
      format: 'csv',
      encoding: 'utf-8',
    },
    source: '東京都港区食品営業許可一覧',
    license: 'CC BY 4.0',
    defaultPref: '東京都',
    defaultCity: '港区',
  },

  // -------------------------------------------------------------------------
  // 奈良県 食品営業許可施設一覧（令和8年3月末時点の全許可施設・奈良市を除く）
  // XLSX。都道府県・市区町村カラムなし → 市区町村はジオコーディングで補完。
  // https://www.pref.nara.lg.jp/n086/52413.html
  // -------------------------------------------------------------------------
  {
    key: 'nara-pref',
    acquire: {
      type: 'get',
      url: 'https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx',
      format: 'xlsx',
    },
    source: '奈良県食品営業許可施設一覧（奈良市を除く）',
    license: '奈良県（出典明示・利用規約に従う）',
    defaultPref: '奈良県',
  },

  // -------------------------------------------------------------------------
  // 京都市 食品営業許可施設一覧（令和3年3月末時点・全市）
  // 京都市オープンデータポータル（独自）。POSTフォームでXLSを取得。
  //   区ごとにシートが分かれているため allSheets: true。
  // https://data.city.kyoto.lg.jp/dataset/00414/  (resource id=15447)
  // 注: 掲載データが令和3年(2021)時点と古い点に留意。
  // -------------------------------------------------------------------------
  {
    key: 'kyoto-city',
    acquire: {
      type: 'post',
      url: 'https://data.city.kyoto.lg.jp/resource/?id=15447',
      body: {
        download: 'Download',
        upload_file: '令和3年3月末時点許可施設一覧（全市）.xls',
      },
      format: 'xls',
    },
    allSheets: true,
    source: '京都市食品営業許可施設一覧（令和3年3月末時点）',
    license: 'CC BY 4.0',
    defaultPref: '京都府',
    defaultCity: '京都市',
  },

  // -------------------------------------------------------------------------
  // BODIK（data.bodik.jp）で食品営業許可施設一覧を公開している自治体（自動生成）。
  // 自治体ごとに全件・許可の代表リソースを1件ずつ。scripts/gen-bodik-sources.mjs で再生成。
  // -------------------------------------------------------------------------
  ...BODIK_SOURCES,

  // -------------------------------------------------------------------------
  // 各自治体が独自ポータル/自庁サイトで公開している食品営業許可オープンデータ。
  // -------------------------------------------------------------------------
  ...PORTAL_SOURCES,
];
