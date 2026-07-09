# 食品営業許可オープンデータ カバレッジ（全市区町村）

**母数 = 全国の市区町村**（政令指定都市は市単位に集約。東京特別区・行政区を含む）。各行に、その区域の食品営業許可を所管する**保健所設置主体**と、当サービスでのデータ収集状況を示す。

## 前提となる仕組み
- 食品営業許可を**発行する権限**は「保健所設置主体」（都道府県／政令指定都市／中核市／その他政令市＝小樽・町田・藤沢・茅ヶ崎・四日市／特別区23）にある。**一般の市町村は許可を発行しない**（区域内の施設は都道府県の保健所が所管）。
- ただし一般市町村でも、**自区域内の許可施設一覧を都道府県等から得てオープンデータとして“二次公開”**することはできる（例: 久万高原町・和水町・東村山市）。この場合その市町村自身のソースで収集できる。
- したがって各市区町村の「データ有無」は次の優先で判定: ①**自治体自身が公開**していれば✅（`収集経路=自身`） → ②なければ**管轄保健所設置主体**が公開していれば✅（`収集経路=管轄主体`。県所管域データ等に含まれる） → ③厚労省**食品衛生申請等システム(i2fas)** に当該市区町村の施設が含まれれば✅（`収集経路=i2fas`。全国の保健所設置主体別オープンデータ・掲載賛同施設のみ） → ④いずれも無ければ❌。
- **❌の意味**: その市区町村を所管する主体のデータが未収集。`管轄`列を見れば「自前保健所を持つ市自身が未収集」なのか「都道府県所管で、その県データが未収集」なのかが分かる。

母数（保健所設置主体）の根拠: 厚生労働省「設置主体別保健所数」（令和8年4月1日現在） https://www.mhlw.go.jp/content/10900000/001232824.pdf （都道府県47・指定都市20・中核市62・その他政令市5・特別区23＝計157主体）。市区町村一覧の出典: geolonia/japanese-addresses。i2fasライセンス: 公共データ利用規約(第1.0版/PDL1.0)＝CC BY 4.0互換。

**データがある市区町村: 1727 / 1740（99%）**

| 都道府県 | 市区町村 | 管轄（保健所設置主体） | データ | 収集経路 | ソース | ライセンス |
|---|---|---|:---:|---|---|---|
| 北海道 | 札幌市 | 札幌市（指定都市） | ✅ | 自身 | [link](https://ckan.pf-sapporo.jp/dataset/be44af14-f135-41b9-acca-08e215d8a540/resource/54618ac4-da90-493c-8a20-8df29be9d435/download/shokuhin260331.csv) | CC BY 4.0 |
| 北海道 | 函館市 | 函館市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 小樽市 | 小樽市（その他政令市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 旭川市 | 旭川市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 室蘭市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 釧路市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 帯広市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 北見市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 夕張市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 岩見沢市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 網走市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 留萌市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 苫小牧市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 稚内市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 美唄市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 芦別市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 江別市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 赤平市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 士別市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 名寄市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 三笠市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 根室市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 千歳市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 滝川市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 砂川市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 歌志内市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 深川市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 富良野市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 登別市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 恵庭市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 伊達市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 北広島市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 石狩市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 北斗市 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 石狩郡当別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 石狩郡新篠津村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 松前郡松前町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 松前郡福島町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上磯郡知内町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上磯郡木古内町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 亀田郡七飯町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 茅部郡鹿部町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 茅部郡森町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 二海郡八雲町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 山越郡長万部町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 檜山郡江差町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 檜山郡上ノ国町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 檜山郡厚沢部町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 爾志郡乙部町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 奥尻郡奥尻町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 瀬棚郡今金町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 久遠郡せたな町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 島牧郡島牧村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 寿都郡寿都町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 寿都郡黒松内町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 磯谷郡蘭越町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡ニセコ町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡真狩村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡留寿都村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡喜茂別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡京極町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡倶知安町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 岩内郡共和町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 岩内郡岩内町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 古宇郡泊村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 古宇郡神恵内村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 積丹郡積丹町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 古平郡古平町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 余市郡仁木町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 余市郡余市町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 余市郡赤井川村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡南幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡奈井江町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡上砂川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 夕張郡由仁町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 夕張郡長沼町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 夕張郡栗山町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 樺戸郡月形町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 樺戸郡浦臼町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 樺戸郡新十津川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡妹背牛町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡秩父別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡雨竜町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡北竜町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡沼田町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡鷹栖町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡東神楽町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡当麻町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡比布町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡愛別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡上川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡東川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡美瑛町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡上富良野町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡中富良野町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 空知郡南富良野町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 勇払郡占冠村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡和寒町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡剣淵町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡下川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡美深町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡音威子府村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡中川町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 雨竜郡幌加内町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 増毛郡増毛町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 留萌郡小平町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 苫前郡苫前町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 苫前郡羽幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 苫前郡初山別村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 天塩郡遠別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 天塩郡天塩町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 宗谷郡猿払村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 枝幸郡浜頓別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 枝幸郡中頓別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 枝幸郡枝幸町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 天塩郡豊富町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 礼文郡礼文町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 利尻郡利尻町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 利尻郡利尻富士町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 天塩郡幌延町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 網走郡美幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 網走郡津別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 斜里郡斜里町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 斜里郡清里町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 斜里郡小清水町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 常呂郡訓子府町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 常呂郡置戸町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 常呂郡佐呂間町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡遠軽町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡湧別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡滝上町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡興部町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡西興部村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 紋別郡雄武町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 網走郡大空町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡豊浦町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 有珠郡壮瞥町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 白老郡白老町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 勇払郡厚真町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 虻田郡洞爺湖町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 勇払郡安平町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 勇払郡むかわ町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 沙流郡日高町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 沙流郡平取町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 新冠郡新冠町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 浦河郡浦河町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 様似郡様似町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 幌泉郡えりも町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 日高郡新ひだか町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河東郡音更町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河東郡士幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河東郡上士幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河東郡鹿追町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡新得町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 上川郡清水町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河西郡芽室町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河西郡中札内村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 河西郡更別村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 広尾郡大樹町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 広尾郡広尾町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡幕別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡池田町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡豊頃町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 中川郡本別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 足寄郡足寄町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 足寄郡陸別町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 十勝郡浦幌町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 釧路郡釧路町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 厚岸郡厚岸町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 厚岸郡浜中町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 川上郡標茶町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 川上郡弟子屈町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 阿寒郡鶴居村 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 白糠郡白糠町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 野付郡別海町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 標津郡中標津町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 標津郡標津町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 北海道 | 目梨郡羅臼町 | 北海道（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 青森市 | 青森市（中核市） | ✅ | 自身 | [link](https://www.city.aomori.aomori.jp/_res/projects/default_project/_page_/001/006/184/r0805zendate.csv) | CC BY 4.0 |
| 青森県 | 弘前市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 八戸市 | 八戸市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 黒石市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 五所川原市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 十和田市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三沢市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | むつ市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | つがる市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 平川市 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 東津軽郡平内町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 東津軽郡今別町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 東津軽郡蓬田村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 東津軽郡外ケ浜町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 西津軽郡鰺ヶ沢町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 西津軽郡深浦町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 中津軽郡西目屋村 | 青森県（都道府県） | ❌ |  | — | — |
| 青森県 | 南津軽郡藤崎町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 南津軽郡大鰐町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 南津軽郡田舎館村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 北津軽郡板柳町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 北津軽郡鶴田町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 北津軽郡中泊町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡野辺地町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡七戸町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡六戸町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡横浜町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡東北町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡六ヶ所村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 上北郡おいらせ町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 下北郡大間町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 下北郡東通村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 下北郡風間浦村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 下北郡佐井村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡三戸町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡五戸町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡田子町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡南部町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡階上町 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 青森県 | 三戸郡新郷村 | 青森県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 盛岡市 | 盛岡市（中核市） | ✅ | 自身 | [link](https://www.city.morioka.iwate.jp/_res/projects/default_project/_page_/001/006/689/20260630.csv) | CC BY 4.0 |
| 岩手県 | 宮古市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 大船渡市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 花巻市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 北上市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 久慈市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 遠野市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 一関市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 陸前高田市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 釜石市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 二戸市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 八幡平市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 奥州市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 滝沢市 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 岩手郡雫石町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 岩手郡葛巻町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 岩手郡岩手町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 紫波郡紫波町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 紫波郡矢巾町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 和賀郡西和賀町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 胆沢郡金ケ崎町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 西磐井郡平泉町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 気仙郡住田町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 上閉伊郡大槌町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 下閉伊郡山田町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 下閉伊郡岩泉町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 下閉伊郡田野畑村 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 下閉伊郡普代村 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 九戸郡軽米町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 九戸郡野田村 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 九戸郡九戸村 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 九戸郡洋野町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岩手県 | 二戸郡一戸町 | 岩手県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 仙台市 | 仙台市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 石巻市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 塩竈市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 気仙沼市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 白石市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 名取市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 角田市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 多賀城市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 岩沼市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 登米市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 栗原市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 東松島市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 大崎市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 富谷市 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 刈田郡蔵王町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 刈田郡七ヶ宿町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 柴田郡大河原町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 柴田郡村田町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 柴田郡柴田町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 柴田郡川崎町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 伊具郡丸森町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 亘理郡亘理町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 亘理郡山元町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 宮城郡松島町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 宮城郡七ヶ浜町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 宮城郡利府町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 黒川郡大和町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 黒川郡大郷町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 黒川郡大衡村 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 加美郡色麻町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 加美郡加美町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 遠田郡涌谷町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 遠田郡美里町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 牡鹿郡女川町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮城県 | 本吉郡南三陸町 | 宮城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 秋田市 | 秋田市（中核市） | ✅ | 自身 | [link](https://www.city.akita.lg.jp/_res/projects/default_project/_page_/001/017/339/r080601.xlsx) | CC BY 4.0 |
| 秋田県 | 能代市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 横手市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 大館市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 男鹿市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 湯沢市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 鹿角市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 由利本荘市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 潟上市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 大仙市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 北秋田市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | にかほ市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 仙北市 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 鹿角郡小坂町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 北秋田郡上小阿仁村 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 山本郡藤里町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 山本郡三種町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 山本郡八峰町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 南秋田郡五城目町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 南秋田郡八郎潟町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 南秋田郡井川町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 南秋田郡大潟村 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 仙北郡美郷町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 雄勝郡羽後町 | 秋田県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 秋田県 | 雄勝郡東成瀬村 | 秋田県（都道府県） | ❌ |  | — | — |
| 山形県 | 山形市 | 山形市（中核市） | ✅ | 自身 | [link](https://www.city.yamagata-yamagata.lg.jp/_res/projects/default_project/_page_/001/012/802/062014_syokuhin_list_20260531.csv) | CC BY 4.0 |
| 山形県 | 米沢市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 鶴岡市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 酒田市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 新庄市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 寒河江市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 上山市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 村山市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 長井市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 天童市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東根市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 尾花沢市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 南陽市 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東村山郡山辺町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東村山郡中山町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西村山郡河北町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西村山郡西川町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西村山郡朝日町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西村山郡大江町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 北村山郡大石田町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡金山町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡最上町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡舟形町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡真室川町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡大蔵村 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡鮭川村 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 最上郡戸沢村 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東置賜郡高畠町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東置賜郡川西町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西置賜郡小国町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西置賜郡白鷹町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 西置賜郡飯豊町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東田川郡三川町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 東田川郡庄内町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山形県 | 飽海郡遊佐町 | 山形県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福島県 | 福島市 | 福島市（中核市） | ✅ | 自身 | [link](https://www.city.fukushima.fukushima.jp/material/files/group/7/R7nendo_syokuhin.csv) | CC BY 2.1 JP |
| 福島県 | 会津若松市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 郡山市 | 福島県（都道府県） | ✅ | 自身 | [link](https://www.city.koriyama.lg.jp/uploaded/attachment/120902.xls) | 要確認 |
| 福島県 | いわき市 | いわき市（中核市） | ✅ | 自身 | [link](https://www.city.iwaki.lg.jp/www/contents/1652661537484/simple/Shokuhin_itiran_R08.csv) | CC BY 4.0 |
| 福島県 | 白河市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 須賀川市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 喜多方市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 相馬市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 二本松市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 田村市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 南相馬市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 伊達市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 本宮市 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 伊達郡桑折町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 伊達郡国見町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 伊達郡川俣町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 安達郡大玉村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 岩瀬郡鏡石町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 岩瀬郡天栄村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 南会津郡下郷町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 南会津郡檜枝岐村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 南会津郡只見町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 南会津郡南会津町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 耶麻郡北塩原村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 耶麻郡西会津町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 耶麻郡磐梯町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 耶麻郡猪苗代町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 河沼郡会津坂下町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 河沼郡湯川村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 河沼郡柳津町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 大沼郡三島町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 大沼郡金山町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 大沼郡昭和村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 大沼郡会津美里町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 西白河郡西郷村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 西白河郡泉崎村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 西白河郡中島村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 西白河郡矢吹町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 東白川郡棚倉町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 東白川郡矢祭町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 東白川郡塙町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 東白川郡鮫川村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 石川郡石川町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 石川郡玉川村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 石川郡平田村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 石川郡浅川町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 石川郡古殿町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 田村郡三春町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 田村郡小野町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡広野町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡楢葉町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡富岡町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡川内村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡大熊町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡双葉町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡浪江町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 双葉郡葛尾村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 相馬郡新地町 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 福島県 | 相馬郡飯舘村 | 福島県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.fukushima.lg.jp/uploaded/attachment/743308.xlsx) | CC BY 2.1 JP |
| 茨城県 | 水戸市 | 水戸市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 日立市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 土浦市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 古河市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 石岡市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 結城市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 龍ヶ崎市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 下妻市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 常総市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 常陸太田市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 高萩市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 北茨城市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 笠間市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 取手市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 牛久市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | つくば市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | ひたちなか市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 鹿嶋市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 潮来市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 守谷市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 常陸大宮市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 那珂市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 筑西市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 坂東市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 稲敷市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | かすみがうら市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 桜川市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 神栖市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 行方市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 鉾田市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | つくばみらい市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 小美玉市 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 東茨城郡茨城町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 東茨城郡大洗町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 東茨城郡城里町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 那珂郡東海村 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 久慈郡大子町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 稲敷郡美浦村 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 稲敷郡阿見町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 稲敷郡河内町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 結城郡八千代町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 猿島郡五霞町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 猿島郡境町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 茨城県 | 北相馬郡利根町 | 茨城県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 宇都宮市 | 宇都宮市（中核市） | ✅ | 自身 | [link](https://catalog.city.utsunomiya.tochigi.jp/dataset/4b5cae93-4640-4b4e-87bb-a5e18042366c/resource/a53500f2-7ba1-4e77-a906-e17dc5b60714/download/092011_seikatsueisei_shokuhin_shokuhin.csv) | CC BY 4.0 |
| 栃木県 | 足利市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 栃木市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 佐野市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 鹿沼市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 日光市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 小山市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 真岡市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 大田原市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 矢板市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 那須塩原市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | さくら市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 那須烏山市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 下野市 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 河内郡上三川町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 芳賀郡益子町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 芳賀郡茂木町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 芳賀郡市貝町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 芳賀郡芳賀町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 下都賀郡壬生町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 下都賀郡野木町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 塩谷郡塩谷町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 塩谷郡高根沢町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 那須郡那須町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 栃木県 | 那須郡那珂川町 | 栃木県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 前橋市 | 前橋市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/be0e8464-4b96-41f6-901d-1aa4bf11bcc0) | Creative Commons Attribution 4.0 International |
| 群馬県 | 高崎市 | 高崎市（中核市） | ✅ | 自身 | [link](https://www.city.takasaki.gunma.jp/uploaded/attachment/40475.xlsx) | 要確認 |
| 群馬県 | 桐生市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 伊勢崎市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 太田市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 沼田市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 館林市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 渋川市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 藤岡市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 富岡市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 安中市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | みどり市 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 北群馬郡榛東村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 北群馬郡吉岡町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 多野郡上野村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 多野郡神流町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 甘楽郡下仁田町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 甘楽郡南牧村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 甘楽郡甘楽町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡中之条町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡長野原町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡嬬恋村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡草津町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡高山村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 吾妻郡東吾妻町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 利根郡片品村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 利根郡川場村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 利根郡昭和村 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 利根郡みなかみ町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 佐波郡玉村町 | 群馬県（都道府県） | ❌ |  | — | — |
| 群馬県 | 邑楽郡板倉町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 邑楽郡明和町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 邑楽郡千代田町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 邑楽郡大泉町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 群馬県 | 邑楽郡邑楽町 | 群馬県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | さいたま市 | さいたま市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 川越市 | 川越市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 熊谷市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 川口市 | 川口市（中核市） | ✅ | 自身 | [link](https://www.city.kawaguchi.lg.jp/material/files/group/232/R0803zenshisetsuichiran.xls) | 要確認 |
| 埼玉県 | 行田市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 所沢市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 飯能市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 加須市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 本庄市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 東松山市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 春日部市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 狭山市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 羽生市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 鴻巣市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 深谷市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 上尾市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 草加市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 越谷市 | 越谷市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 蕨市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 戸田市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 入間市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 朝霞市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 志木市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 和光市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 新座市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 桶川市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 久喜市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 北本市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 八潮市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 富士見市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 三郷市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 蓮田市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 坂戸市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 幸手市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 鶴ヶ島市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 日高市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 吉川市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | ふじみ野市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 白岡市 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 北足立郡伊奈町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 入間郡三芳町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 入間郡毛呂山町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 入間郡越生町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡滑川町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡嵐山町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡小川町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡川島町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡吉見町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡鳩山町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 比企郡ときがわ町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父郡横瀬町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父郡皆野町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父郡長瀞町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父郡小鹿野町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 秩父郡東秩父村 | 埼玉県（都道府県） | ❌ |  | — | — |
| 埼玉県 | 児玉郡美里町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 児玉郡神川町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 児玉郡上里町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 大里郡寄居町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 南埼玉郡宮代町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 北葛飾郡杉戸町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 埼玉県 | 北葛飾郡松伏町 | 埼玉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 千葉市 | 千葉市（指定都市） | ✅ | 自身 | [link](https://www.city.chiba.jp/somu/somu/seisakuhomu/shisei/documents/202605syokuhin.xlsx) | 要確認 |
| 千葉県 | 銚子市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 市川市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 船橋市 | 船橋市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 館山市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 木更津市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 松戸市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 野田市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 茂原市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 成田市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 佐倉市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 東金市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 旭市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 習志野市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 柏市 | 柏市（中核市） | ✅ | 自身 | [link](https://www.city.kashiwa.lg.jp/documents/24912/122173_food_business_all.csv) | 柏市オープンデータ利用規約 |
| 千葉県 | 勝浦市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 市原市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 流山市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 八千代市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 我孫子市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 鴨川市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 鎌ヶ谷市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 君津市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 富津市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 浦安市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 四街道市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 袖ヶ浦市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 八街市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 印西市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 白井市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 富里市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 南房総市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 匝瑳市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 香取市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 山武市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | いすみ市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 大網白里市 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 印旛郡酒々井町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 印旛郡栄町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 香取郡神崎町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 香取郡多古町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 香取郡東庄町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 山武郡九十九里町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 山武郡芝山町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 山武郡横芝光町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡一宮町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡睦沢町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡長生村 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡白子町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡長柄町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 長生郡長南町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 夷隅郡大多喜町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 夷隅郡御宿町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 千葉県 | 安房郡鋸南町 | 千葉県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 千代田区 | 千代田区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 中央区 | 中央区（特別区） | ✅ | 自身 | [link](https://www.city.chuo.lg.jp/documents/984/syokuhineigyoukyoka.csv) | CC BY 4.0 |
| 東京都 | 港区 | 港区（特別区） | ✅ | 自身 | [link](https://opendata.city.minato.tokyo.jp/dataset/54d8c582-00e2-4730-a23f-4a5befec9ae5/resource/c9d0299e-8e05-4317-877f-83055709e41f/download/food_business_all.csv) | CC BY 4.0 |
| 東京都 | 新宿区 | 新宿区（特別区） | ✅ | 自身 | [link](https://www.city.shinjuku.lg.jp/content/000399975.csv) | CC BY 4.0 |
| 東京都 | 文京区 | 文京区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 台東区 | 台東区（特別区） | ✅ | 自身 | [link](https://www.city.taito.lg.jp/kenkohukusi/kenkokikikanrieisei/food/syokuhin-sisetu/index.files/2026ALL-IND-CSV.csv) | CC BY 4.0 |
| 東京都 | 墨田区 | 墨田区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 江東区 | 江東区（特別区） | ✅ | 自身 | [link](https://www.opendata.metro.tokyo.lg.jp/koto/131083_015_food_business_all.csv) | CC BY 4.0 |
| 東京都 | 品川区 | 品川区（特別区） | ✅ | 自身 | [link](https://www.city.shinagawa.tokyo.jp/contentshozon2026/R6-7.csv) | CC BY 4.0 |
| 東京都 | 目黒区 | 目黒区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 大田区 | 大田区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 世田谷区 | 世田谷区（特別区） | ✅ | 自身 | [link](https://www.city.setagaya.lg.jp/documents/3246/zenkenr080331.csv) | CC BY 4.0 |
| 東京都 | 渋谷区 | 渋谷区（特別区） | ✅ | 自身 | [link](https://city-shibuya-data.opendata.arcgis.com/api/download/v1/items/e68f41ebfa5f4ea490ca9af701d44e02/csv?layers=0) | CC BY 4.0 |
| 東京都 | 中野区 | 中野区（特別区） | ✅ | 自身 | [link](https://www2.wagmap.jp/nakanodatamap/nakanodatamap/opendatafile/map_40/CSV/opendata_550150.csv) | CC BY 4.0 |
| 東京都 | 杉並区 | 杉並区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 豊島区 | 豊島区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 北区 | 北区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 荒川区 | 荒川区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 板橋区 | 板橋区（特別区） | ✅ | 自身 | [link](https://www.city.itabashi.tokyo.jp/_res/projects/default_project/_page_/001/051/220/r8.5_shokuhinkyokashisetsu.xlsx) | 要確認 |
| 東京都 | 練馬区 | 練馬区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 足立区 | 足立区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 葛飾区 | 葛飾区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 江戸川区 | 江戸川区（特別区） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 八王子市 | 八王子市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 立川市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 武蔵野市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 三鷹市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 青梅市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 府中市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 昭島市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 調布市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 町田市 | 町田市（その他政令市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 小金井市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 小平市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 日野市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 東村山市 | 東京都（都道府県） | ✅ | 自身 | [link](https://www.opendata.metro.tokyo.lg.jp/higashimurayama/20240619_food_business_all.csv) | CC BY 4.0 |
| 東京都 | 国分寺市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 国立市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 福生市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 狛江市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 東大和市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 清瀬市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 東久留米市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 武蔵村山市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 多摩市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 稲城市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 羽村市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | あきる野市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 西東京市 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 西多摩郡瑞穂町 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 西多摩郡日の出町 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 西多摩郡檜原村 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 西多摩郡奥多摩町 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 大島町 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 新島村 | 東京都（都道府県） | ❌ |  | — | — |
| 東京都 | 神津島村 | 東京都（都道府県） | ❌ |  | — | — |
| 東京都 | 三宅村 | 東京都（都道府県） | ❌ |  | — | — |
| 東京都 | 御蔵島村 | 東京都（都道府県） | ❌ |  | — | — |
| 東京都 | 八丈町 | 東京都（都道府県） | ❌ |  | — | — |
| 東京都 | 青ヶ島村 | 東京都（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 東京都 | 小笠原村 | 東京都（都道府県） | ❌ |  | — | — |
| 神奈川県 | 横浜市 | 横浜市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 川崎市 | 川崎市（指定都市） | ✅ | 自身 | [link](https://www.city.kawasaki.jp/350/cmsfiles/contents/0000093/93741/080503(UTF-8).csv) | CC BY 4.0 |
| 神奈川県 | 相模原市 | 相模原市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 横須賀市 | 横須賀市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/3a1aaf46-e6ca-41fa-8977-3388f3b7e3ba) | Creative Commons Attribution 4.0 International |
| 神奈川県 | 平塚市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 鎌倉市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 藤沢市 | 藤沢市（その他政令市） | ✅ | 自身 | [link](https://www.city.fujisawa.kanagawa.jp/documents/28905/zende-ta2020603houjin.csv) | 要確認 |
| 神奈川県 | 小田原市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 茅ヶ崎市 | 茅ヶ崎市（その他政令市） | ✅ | 自身 | [link](https://www.city.chigasaki.kanagawa.jp/_res/projects/default_project/_page_/001/041/779/syokuhinall2025.csv) | 要確認 |
| 神奈川県 | 逗子市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 三浦市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 秦野市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 厚木市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 大和市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 伊勢原市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 海老名市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 座間市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 南足柄市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 綾瀬市 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 三浦郡葉山町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 高座郡寒川町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 中郡大磯町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 中郡二宮町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄上郡中井町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄上郡大井町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄上郡松田町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄上郡山北町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄上郡開成町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄下郡箱根町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄下郡真鶴町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 足柄下郡湯河原町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 愛甲郡愛川町 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 神奈川県 | 愛甲郡清川村 | 神奈川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 新潟市 | 新潟市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 長岡市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 三条市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 柏崎市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 新発田市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 小千谷市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 加茂市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 十日町市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 見附市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 村上市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 燕市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 糸魚川市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 妙高市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 五泉市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 上越市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 阿賀野市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 佐渡市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 魚沼市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 南魚沼市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 胎内市 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 北蒲原郡聖籠町 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 西蒲原郡弥彦村 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 南蒲原郡田上町 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 東蒲原郡阿賀町 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 三島郡出雲崎町 | 新潟県（都道府県） | ❌ |  | — | — |
| 新潟県 | 南魚沼郡湯沢町 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 中魚沼郡津南町 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 刈羽郡刈羽村 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 岩船郡関川村 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 新潟県 | 岩船郡粟島浦村 | 新潟県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 富山県 | 富山市 | 富山市（中核市） | ✅ | 自身 | [link](https://opdt.city.toyama.lg.jp/dataset/fb1198c6-3ac2-42fc-ae99-81ea5ba09a2d/resource/fa38003f-accd-4690-b71b-96b1d78e1c45/download/syokuhin.xlsx) | CC BY |
| 富山県 | 高岡市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 魚津市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 氷見市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 滑川市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 黒部市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 砺波市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 小矢部市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 南砺市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 射水市 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 中新川郡舟橋村 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 中新川郡上市町 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 中新川郡立山町 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 下新川郡入善町 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 富山県 | 下新川郡朝日町 | 富山県（都道府県） | ✅ | 管轄主体 | [link](https://toyama-pref.box.com/shared/static/1t6074lluawpua1u5jhx1yeaynb48rle.csv) | CC BY |
| 石川県 | 金沢市 | 金沢市（中核市） | ✅ | 自身 | [link](https://catalog-data.city.kanazawa.ishikawa.jp/datastore/dump/09a49521-cabf-40b4-978b-bd61ef02f650?bom=true) | CC BY |
| 石川県 | 七尾市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 小松市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 輪島市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 珠洲市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 加賀市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 羽咋市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | かほく市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 白山市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 能美市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 野々市市 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 能美郡川北町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 河北郡津幡町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 河北郡内灘町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 羽咋郡志賀町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 羽咋郡宝達志水町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 鹿島郡中能登町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 鳳珠郡穴水町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 石川県 | 鳳珠郡能登町 | 石川県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.ishikawa.lg.jp/yakuji/syokuhin/documents/nendor7.xlsx) | 石川県利用規約 |
| 福井県 | 福井市 | 福井市（中核市） | ✅ | 自身 | [link](https://www.city.fukui.lg.jp/fukusi/eisei/syokuhin/p070519_d/fil/11syokuhin_202605.xlsx) | 要確認 |
| 福井県 | 敦賀市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 小浜市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 大野市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 勝山市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 鯖江市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | あわら市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 越前市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 坂井市 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 吉田郡永平寺町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 今立郡池田町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 南条郡南越前町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 丹生郡越前町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 三方郡美浜町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 大飯郡高浜町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 大飯郡おおい町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 福井県 | 三方上中郡若狭町 | 福井県（都道府県） | ✅ | 管轄主体 | [link](https://data.odp.jig.jp/viewcsv/jp/fukui/776.csv) | CC BY |
| 山梨県 | 甲府市 | 甲府市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山梨県 | 富士吉田市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 都留市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 山梨市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 大月市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 韮崎市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南アルプス市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 北杜市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 甲斐市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 笛吹市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 上野原市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 甲州市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 中央市 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 西八代郡市川三郷町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南巨摩郡早川町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南巨摩郡身延町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南巨摩郡南部町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南巨摩郡富士川町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 中巨摩郡昭和町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡道志村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡西桂町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡忍野村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡山中湖村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡鳴沢村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 南都留郡富士河口湖町 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 北都留郡小菅村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 山梨県 | 北都留郡丹波山村 | 山梨県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.yamanashi.jp/documents/23776/190004_food_business_all.csv) | CC BY 2.1 JP |
| 長野県 | 長野市 | 長野市（中核市） | ✅ | 自身 | [link](https://www.city.nagano.nagano.jp/documents/1948/202011_food_business_202605.csv) | CC BY 4.0 |
| 長野県 | 松本市 | 松本市（中核市） | ✅ | 自身 | [link](http://linkdata.org/download/rdf1s8748i/link/shokuhin_kyoka_eigyo_matsumoto.txt) | CC BY 3.0 |
| 長野県 | 上田市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 岡谷市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 飯田市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 諏訪市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 須坂市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 小諸市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 伊那市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 駒ヶ根市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 中野市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 大町市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 飯山市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 茅野市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 塩尻市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 佐久市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 千曲市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東御市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 安曇野市 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡小海町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡川上村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡南牧村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡南相木村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡北相木村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 南佐久郡佐久穂町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北佐久郡軽井沢町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北佐久郡御代田町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北佐久郡立科町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 小県郡青木村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 小県郡長和町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 諏訪郡下諏訪町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 諏訪郡富士見町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 諏訪郡原村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡辰野町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡箕輪町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡飯島町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡南箕輪村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡中川村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上伊那郡宮田村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡松川町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡高森町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡阿南町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡阿智村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡平谷村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡根羽村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡下條村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡売木村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡天龍村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡泰阜村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡喬木村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡豊丘村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下伊那郡大鹿村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡上松町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡南木曽町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡木祖村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡王滝村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡大桑村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 木曽郡木曽町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東筑摩郡麻績村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東筑摩郡生坂村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東筑摩郡山形村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東筑摩郡朝日村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 東筑摩郡筑北村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北安曇郡池田町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北安曇郡松川村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北安曇郡白馬村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 北安曇郡小谷村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 埴科郡坂城町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上高井郡小布施町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上高井郡高山村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下高井郡山ノ内町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下高井郡木島平村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下高井郡野沢温泉村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上水内郡信濃町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上水内郡小川村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 上水内郡飯綱町 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 長野県 | 下水内郡栄村 | 長野県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nagano.lg.jp/shokusei/kenko/shokuhin/seikatsu/documents/food_20260531_csv.csv) | 要確認 |
| 岐阜県 | 岐阜市 | 岐阜市（中核市） | ✅ | 自身 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/2f9f1b1c-be25-4a27-96c6-47b597f1a0bd/resource/16ef7794-d2b6-4d7d-8353-f55193432530/download/gifushisyokuhinkyokar7.6.1.csv) | CC BY 2.0 |
| 岐阜県 | 大垣市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 高山市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 多治見市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 関市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 中津川市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 美濃市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 瑞浪市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 羽島市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 恵那市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 美濃加茂市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 土岐市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 各務原市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 可児市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 山県市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 瑞穂市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 飛騨市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 本巣市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 郡上市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 下呂市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 海津市 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 羽島郡岐南町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 羽島郡笠松町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 養老郡養老町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 不破郡垂井町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 不破郡関ケ原町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 安八郡神戸町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 安八郡輪之内町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 安八郡安八町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 揖斐郡揖斐川町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 揖斐郡大野町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 揖斐郡池田町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 本巣郡北方町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡坂祝町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡富加町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡川辺町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡七宗町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡八百津町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡白川町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 加茂郡東白川村 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 可児郡御嵩町 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 岐阜県 | 大野郡白川村 | 岐阜県（都道府県） | ✅ | 管轄主体 | [link](https://gifu-opendata.pref.gifu.lg.jp/dataset/f6bbdb66-1d55-4e55-82cb-15fe1bb24223/resource/3c7d862d-a126-4441-a5b1-4839096b2591/download/20250331syokuhin.csv) | CC BY 2.0 |
| 静岡県 | 静岡市 | 静岡市（指定都市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/86a8d652-beb2-41b7-8da6-f9245e04217d) | Creative Commons Attribution |
| 静岡県 | 浜松市 | 浜松市（指定都市） | ✅ | 自身 | [link](https://static.hamamatsu.odpf.net/opendata/v01/syokuhineiseidaityou202401/syokuhineiseidaityou202401.csv) | CC BY |
| 静岡県 | 沼津市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 熱海市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 三島市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 富士宮市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 伊東市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 島田市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 富士市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 磐田市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 焼津市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 掛川市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 藤枝市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 御殿場市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 袋井市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 下田市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 裾野市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 湖西市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 伊豆市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 御前崎市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 菊川市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 伊豆の国市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 牧之原市 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 賀茂郡東伊豆町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 賀茂郡河津町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 賀茂郡南伊豆町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 賀茂郡松崎町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 賀茂郡西伊豆町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 田方郡函南町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 駿東郡清水町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 駿東郡長泉町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 駿東郡小山町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 榛原郡吉田町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 榛原郡川根本町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 静岡県 | 周智郡森町 | 静岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛知県 | 名古屋市 | 名古屋市（指定都市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/979f325a-1b27-45d0-8eb5-dd4aeb85b1f5) | Creative Commons Attribution 4.0 International |
| 愛知県 | 豊橋市 | 豊橋市（中核市） | ✅ | 自身 | [link](https://www.city.toyohashi.lg.jp/secure/18290/shokuhinshinki202605EXCEL.xlsx) | 要確認 |
| 愛知県 | 岡崎市 | 岡崎市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/aabced9d-d86e-422d-8ad0-2781d0f30671) | Creative Commons Attribution 4.0 International |
| 愛知県 | 一宮市 | 一宮市（中核市） | ✅ | 自身 | [link](https://www.city.ichinomiya.aichi.jp/_res/projects/default_project/_page_/001/040/636/232033_Food_Business_All_20260331.csv) | CC BY 4.0 |
| 愛知県 | 瀬戸市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 半田市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 春日井市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 豊川市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 津島市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 碧南市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 刈谷市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 豊田市 | 豊田市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/385d18b1-7493-4a82-8b0d-b00d2996da69) | Creative Commons Attribution 4.0 International |
| 愛知県 | 安城市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 西尾市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 蒲郡市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 犬山市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 常滑市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 江南市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 小牧市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 稲沢市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 新城市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 東海市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 大府市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知立市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 尾張旭市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 高浜市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 岩倉市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 豊明市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 日進市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 田原市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 愛西市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 清須市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 北名古屋市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 弥富市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | みよし市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | あま市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 長久手市 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 愛知郡東郷町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 西春日井郡豊山町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 丹羽郡大口町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 丹羽郡扶桑町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 海部郡大治町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 海部郡蟹江町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 海部郡飛島村 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多郡阿久比町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多郡東浦町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多郡南知多町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多郡美浜町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 知多郡武豊町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 額田郡幸田町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 北設楽郡設楽町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 北設楽郡東栄町 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 愛知県 | 北設楽郡豊根村 | 愛知県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.aichi.jp/uploaded/attachment/619853.csv) | 要確認 |
| 三重県 | 津市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 四日市市 | 四日市市（その他政令市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/e5809d89-173d-40ea-9ee7-5bc4a61678a6) | Creative Commons Attribution 4.0 International |
| 三重県 | 伊勢市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 松阪市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 桑名市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 鈴鹿市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 名張市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 尾鷲市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 亀山市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 鳥羽市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 熊野市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | いなべ市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 志摩市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 伊賀市 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 桑名郡木曽岬町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 員弁郡東員町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 三重郡菰野町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 三重郡朝日町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 三重郡川越町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 多気郡多気町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 多気郡明和町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 多気郡大台町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 度会郡玉城町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 度会郡度会町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 度会郡大紀町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 度会郡南伊勢町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 北牟婁郡紀北町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 南牟婁郡御浜町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 三重県 | 南牟婁郡紀宝町 | 三重県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/796b84b4-c197-44bd-b852-664a8a423676) | Creative Commons Attribution 4.0 International |
| 滋賀県 | 大津市 | 大津市（中核市） | ✅ | 自身 | [link](https://www.city.otsu.lg.jp/material/files/group/4/od_2605.csv) | 要確認 |
| 滋賀県 | 彦根市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 長浜市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 近江八幡市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 草津市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 守山市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 栗東市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 甲賀市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 野洲市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 湖南市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 高島市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 東近江市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 米原市 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 蒲生郡日野町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 蒲生郡竜王町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 愛知郡愛荘町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 犬上郡豊郷町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 犬上郡甲良町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 滋賀県 | 犬上郡多賀町 | 滋賀県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.shiga.lg.jp/file/attachment/5615791.csv) | 滋賀県OD利用規約 |
| 京都府 | 京都市 | 京都市（指定都市） | ✅ | 自身 | [link](https://data.city.kyoto.lg.jp/resource/?id=15447) | CC BY 4.0 |
| 京都府 | 福知山市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 舞鶴市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 綾部市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 宇治市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 宮津市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 亀岡市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 城陽市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 向日市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 長岡京市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 八幡市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 京田辺市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 京丹後市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 南丹市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 木津川市 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 乙訓郡大山崎町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 久世郡久御山町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 綴喜郡井手町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 綴喜郡宇治田原町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 相楽郡笠置町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 相楽郡和束町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 相楽郡精華町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 相楽郡南山城村 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 船井郡京丹波町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 与謝郡伊根町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 京都府 | 与謝郡与謝野町 | 京都府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 大阪市 | 大阪市（指定都市） | ✅ | 自身 | [link](https://www.city.osaka.lg.jp/contents/wdu280/260331zenku.csv) | CC BY 4.0 |
| 大阪府 | 堺市 | 堺市（指定都市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/f861e58c-ee2b-4a8c-8bc7-db9f70431b4b) | Creative Commons Attribution 4.0 International |
| 大阪府 | 岸和田市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 豊中市 | 豊中市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/2d6870cc-3db8-4069-841e-2a6deeb173b4) | Creative Commons Attribution 4.0 International |
| 大阪府 | 池田市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 吹田市 | 吹田市（中核市） | ✅ | 自身 | [link](https://www.city.suita.osaka.jp/_res/projects/default_project/_page_/001/017/170/20260331new.xlsx) | CC BY 4.0 |
| 大阪府 | 泉大津市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 高槻市 | 高槻市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 貝塚市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 守口市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 枚方市 | 枚方市（中核市） | ✅ | 自身 | [link](https://www.city.hirakata.osaka.jp/cmsfiles/contents/0000023/23479/272108_food_business_all_202603_end.csv) | CC BY 2.1 JP |
| 大阪府 | 茨木市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 八尾市 | 八尾市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 泉佐野市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 富田林市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 寝屋川市 | 寝屋川市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 河内長野市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 松原市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 大東市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 和泉市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 箕面市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 柏原市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 羽曳野市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 門真市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 摂津市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 高石市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 藤井寺市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 東大阪市 | 東大阪市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/b5eeed4c-cec0-4eef-8513-b4882d6a18ec) | Creative Commons Attribution 4.0 International |
| 大阪府 | 泉南市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 四條畷市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 交野市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 大阪狭山市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 阪南市 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 三島郡島本町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 豊能郡豊能町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 豊能郡能勢町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 泉北郡忠岡町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 泉南郡熊取町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 泉南郡田尻町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 泉南郡岬町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 南河内郡太子町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 南河内郡河南町 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 大阪府 | 南河内郡千早赤阪村 | 大阪府（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 兵庫県 | 神戸市 | 神戸市（指定都市） | ✅ | 自身 | [link](https://www.city.kobe.lg.jp/documents/6359/20260407150739.csv) | CC BY 2.1 JP |
| 兵庫県 | 姫路市 | 姫路市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 兵庫県 | 尼崎市 | 尼崎市（中核市） | ✅ | 自身 | [link](https://www.city.amagasaki.hyogo.jp/_res/projects/default_project/_page_/001/001/025/kyoka202605.csv) | CC BY 4.0 |
| 兵庫県 | 明石市 | 明石市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 兵庫県 | 西宮市 | 西宮市（中核市） | ✅ | 自身 | [link](http://opendata.nishi.or.jp/opendata/files/9/R8.5ichiran_syokuhin.xlsx) | CC BY相当 |
| 兵庫県 | 洲本市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 芦屋市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 伊丹市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 相生市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 豊岡市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 加古川市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 赤穂市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 西脇市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 宝塚市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 三木市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 高砂市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 川西市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 小野市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 三田市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 加西市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 丹波篠山市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 養父市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 丹波市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 南あわじ市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 朝来市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 淡路市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 宍粟市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 加東市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | たつの市 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 川辺郡猪名川町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 多可郡多可町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 加古郡稲美町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 加古郡播磨町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 神崎郡市川町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 神崎郡福崎町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 神崎郡神河町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 揖保郡太子町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 赤穂郡上郡町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 佐用郡佐用町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 美方郡香美町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 兵庫県 | 美方郡新温泉町 | 兵庫県（都道府県） | ✅ | 管轄主体 | [link](https://web.pref.hyogo.lg.jp/kf14/documents/000028_food_business_lisence_all.xlsx) | 要確認 |
| 奈良県 | 奈良市 | 奈良市（中核市） | ✅ | 自身 | [link](https://www.city.nara.lg.jp/uploaded/attachment/203480.csv) | CC BY 2.1 JP |
| 奈良県 | 大和高田市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 大和郡山市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 天理市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 橿原市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 桜井市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 五條市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 御所市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 生駒市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 香芝市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 葛城市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 宇陀市 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 山辺郡山添村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 生駒郡平群町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 生駒郡三郷町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 生駒郡斑鳩町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 生駒郡安堵町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 磯城郡川西町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 磯城郡三宅町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 磯城郡田原本町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 宇陀郡曽爾村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 宇陀郡御杖村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 高市郡高取町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 高市郡明日香村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 北葛城郡上牧町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 北葛城郡王寺町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 北葛城郡広陵町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 北葛城郡河合町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡吉野町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡大淀町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡下市町 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡黒滝村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡天川村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡野迫川村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡十津川村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡下北山村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡上北山村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡川上村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 奈良県 | 吉野郡東吉野村 | 奈良県（都道府県） | ✅ | 管轄主体 | [link](https://www.pref.nara.lg.jp/documents/4585/20260527103326.xlsx) | 奈良県（出典明示・利用規約に従う） |
| 和歌山県 | 和歌山市 | 和歌山市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 海南市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 橋本市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 有田市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 御坊市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 田辺市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 新宮市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 紀の川市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 岩出市 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 海草郡紀美野町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 伊都郡かつらぎ町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 伊都郡九度山町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 伊都郡高野町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 有田郡湯浅町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 有田郡広川町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 有田郡有田川町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡美浜町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡日高町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡由良町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡印南町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡みなべ町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 日高郡日高川町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 西牟婁郡白浜町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 西牟婁郡上富田町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 西牟婁郡すさみ町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 東牟婁郡那智勝浦町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 東牟婁郡太地町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 東牟婁郡古座川町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 東牟婁郡北山村 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 和歌山県 | 東牟婁郡串本町 | 和歌山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 鳥取市 | 鳥取市（中核市） | ✅ | 自身 | [link](https://odp-pref-tottori.tori-info.co.jp/dataset/1858/resource/9560/312011_food_business_all.csv) | CC BY |
| 鳥取県 | 米子市 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 倉吉市 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 境港市 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 岩美郡岩美町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 八頭郡若桜町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 八頭郡智頭町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 八頭郡八頭町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 東伯郡三朝町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 東伯郡湯梨浜町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 東伯郡琴浦町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 東伯郡北栄町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 西伯郡日吉津村 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 西伯郡大山町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 西伯郡南部町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 西伯郡伯耆町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 日野郡日南町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 日野郡日野町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鳥取県 | 日野郡江府町 | 鳥取県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 松江市 | 松江市（中核市） | ✅ | 自身 | [link](https://www.city.matsue.lg.jp/material/files/group/50/202605_eigyoukyoka_zenken.xlsx) | 要確認 |
| 島根県 | 浜田市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 出雲市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 益田市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 大田市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 安来市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 江津市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 雲南市 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 仁多郡奥出雲町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 飯石郡飯南町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 邑智郡川本町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 邑智郡美郷町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 邑智郡邑南町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 鹿足郡津和野町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 鹿足郡吉賀町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 隠岐郡海士町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 隠岐郡西ノ島町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 隠岐郡知夫村 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 島根県 | 隠岐郡隠岐の島町 | 島根県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 岡山市 | 岡山市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 倉敷市 | 倉敷市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 津山市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 玉野市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 笠岡市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 井原市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 総社市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 高梁市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 新見市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 備前市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 瀬戸内市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 赤磐市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 真庭市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 美作市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 浅口市 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 和気郡和気町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 都窪郡早島町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 浅口郡里庄町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 小田郡矢掛町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 真庭郡新庄村 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 苫田郡鏡野町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 勝田郡勝央町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 勝田郡奈義町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 英田郡西粟倉村 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 久米郡久米南町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 久米郡美咲町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 岡山県 | 加賀郡吉備中央町 | 岡山県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 広島市 | 広島市（指定都市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 呉市 | 呉市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 竹原市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 三原市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 尾道市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 福山市 | 福山市（中核市） | ✅ | 自身 | [link](https://data.city.fukuyama.hiroshima.jp/dataset/61f415c5-88f7-46d0-8ada-4bb8855685a0/resource/21fec913-dc08-4344-94d1-ffb0068ab147/download/2026_3all.csv) | CC BY |
| 広島県 | 府中市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 三次市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 庄原市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 大竹市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 東広島市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 廿日市市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 安芸高田市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 江田島市 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 安芸郡府中町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 安芸郡海田町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 安芸郡熊野町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 安芸郡坂町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 山県郡安芸太田町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 山県郡北広島町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 豊田郡大崎上島町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 世羅郡世羅町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 広島県 | 神石郡神石高原町 | 広島県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 山口県 | 下関市 | 下関市（中核市） | ✅ | 自身 | [link](https://yamaguchi-opendata.jp/ckan/dataset/50c21bfa-4ee1-4553-b166-8ed2e625a6f5/resource/f61a61f9-a9ca-448f-8e48-38f647fd2539/download/352012_food_business_map.csv) | CC BY |
| 山口県 | 宇部市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 山口市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 萩市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 防府市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 下松市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 岩国市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 光市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 長門市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 柳井市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 美祢市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 周南市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 山陽小野田市 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 大島郡周防大島町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 玖珂郡和木町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 熊毛郡上関町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 熊毛郡田布施町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 熊毛郡平生町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 山口県 | 阿武郡阿武町 | 山口県（都道府県） | ✅ | 管轄主体 | [link](https://yamaguchi-opendata.jp/ckan/dataset/9d0d2325-62b4-447c-8817-a381c968a5cd/resource/44efb857-48c7-4a2e-9e99-61bf38f6f125/download/350001_food_business_all.csv) | CC BY |
| 徳島県 | 徳島市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 鳴門市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 小松島市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 阿南市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 吉野川市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 阿波市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 美馬市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 三好市 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 勝浦郡勝浦町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 勝浦郡上勝町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 名東郡佐那河内村 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 名西郡石井町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 名西郡神山町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 那賀郡那賀町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 海部郡牟岐町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 海部郡美波町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 海部郡海陽町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 板野郡松茂町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 板野郡北島町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 板野郡藍住町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 板野郡板野町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 板野郡上板町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 美馬郡つるぎ町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 徳島県 | 三好郡東みよし町 | 徳島県（都道府県） | ✅ | 管轄主体 | [link](https://opendata.pref.tokushima.lg.jp/dataset/4615/resource/14084/36000_food_business_all.csv) | CC BY |
| 香川県 | 高松市 | 高松市（中核市） | ✅ | 自身 | [link](https://opendata.takamatsu-fact.com/licensed_food_business_facility_list/data.csv) | CC BY |
| 香川県 | 丸亀市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 坂出市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 善通寺市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 観音寺市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | さぬき市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 東かがわ市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 三豊市 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 小豆郡土庄町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 小豆郡小豆島町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 木田郡三木町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 香川郡直島町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 綾歌郡宇多津町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 綾歌郡綾川町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 仲多度郡琴平町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 仲多度郡多度津町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 香川県 | 仲多度郡まんのう町 | 香川県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 松山市 | 松山市（中核市） | ✅ | 自身 | [link](https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shokuhin.files/382019_food_business_all_2026031.csv) | CC BY |
| 愛媛県 | 今治市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 宇和島市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 八幡浜市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 新居浜市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 西条市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 大洲市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 伊予市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 四国中央市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 西予市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 東温市 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 越智郡上島町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 上浮穴郡久万高原町 | 愛媛県（都道府県） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/88d27dcd-c645-4e36-84c8-e74b481f0cee) | Creative Commons Attribution 4.0 International |
| 愛媛県 | 伊予郡松前町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 伊予郡砥部町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 喜多郡内子町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 西宇和郡伊方町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 北宇和郡松野町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 北宇和郡鬼北町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 愛媛県 | 南宇和郡愛南町 | 愛媛県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高知市 | 高知市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 室戸市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 南国市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 土佐市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 須崎市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 宿毛市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 土佐清水市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 四万十市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 香南市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 香美市 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡東洋町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡奈半利町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡田野町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡安田町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡北川村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡馬路村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 安芸郡芸西村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 長岡郡本山町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 長岡郡大豊町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 土佐郡土佐町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 土佐郡大川村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 吾川郡いの町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 吾川郡仁淀川町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡中土佐町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡佐川町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡越知町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡檮原町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡日高村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡津野町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 高岡郡四万十町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 幡多郡大月町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 幡多郡三原村 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 高知県 | 幡多郡黒潮町 | 高知県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 北九州市 | 北九州市（指定都市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/822fb681-346a-444e-b482-33c67b50cac3) | Creative Commons Attribution |
| 福岡県 | 福岡市 | 福岡市（指定都市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/5925a9fb-3326-4499-9acd-7b18c03d5e32) | Creative Commons Attribution |
| 福岡県 | 大牟田市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 久留米市 | 久留米市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/f85dc2fb-b148-4ed8-a00e-51a51e953793) | Creative Commons Attribution |
| 福岡県 | 直方市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 飯塚市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 柳川市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 八女市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 筑後市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 大川市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 行橋市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 豊前市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 中間市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 小郡市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 筑紫野市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 春日市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 大野城市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 宗像市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 太宰府市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 古賀市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 福津市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | うきは市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 宮若市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 嘉麻市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 朝倉市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | みやま市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糸島市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 那珂川市 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡宇美町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡篠栗町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡志免町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡須恵町 | 福岡県（都道府県） | ❌ |  | — | — |
| 福岡県 | 糟屋郡新宮町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡久山町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 糟屋郡粕屋町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 遠賀郡芦屋町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 遠賀郡水巻町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 遠賀郡岡垣町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 遠賀郡遠賀町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 鞍手郡小竹町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 鞍手郡鞍手町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 嘉穂郡桂川町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 朝倉郡筑前町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 朝倉郡東峰村 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 三井郡大刀洗町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 三潴郡大木町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 八女郡広川町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡香春町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡添田町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡糸田町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡川崎町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡大任町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡赤村 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 田川郡福智町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 京都郡苅田町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 京都郡みやこ町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 築上郡吉富町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 築上郡上毛町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 福岡県 | 築上郡築上町 | 福岡県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 佐賀市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 唐津市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 鳥栖市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 多久市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 伊万里市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 武雄市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 鹿島市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 小城市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 嬉野市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 神埼市 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 神埼郡吉野ヶ里町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 三養基郡基山町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 三養基郡上峰町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 三養基郡みやき町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 東松浦郡玄海町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 西松浦郡有田町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 杵島郡大町町 | 佐賀県（都道府県） | ❌ |  | — | — |
| 佐賀県 | 杵島郡江北町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 杵島郡白石町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 佐賀県 | 藤津郡太良町 | 佐賀県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 長崎県 | 長崎市 | 長崎市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/4d70b9d1-9885-4045-9f59-9d1b99e02910) | Creative Commons Attribution 4.0 International |
| 長崎県 | 佐世保市 | 佐世保市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/571df2fc-f781-4a2c-b9d7-09e1637b15fe) | Creative Commons Attribution 4.0 International |
| 長崎県 | 島原市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 諫早市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 大村市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 平戸市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 松浦市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 対馬市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 壱岐市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 五島市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 西海市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 雲仙市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 南島原市 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 西彼杵郡長与町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 西彼杵郡時津町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 東彼杵郡東彼杵町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 東彼杵郡川棚町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 東彼杵郡波佐見町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 北松浦郡小値賀町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 北松浦郡佐々町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 長崎県 | 南松浦郡新上五島町 | 長崎県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/22c74cf1-6e13-449a-a139-ee9fdc16130a) | Creative Commons Attribution 4.0 International |
| 熊本県 | 熊本市 | 熊本市（指定都市） | ✅ | 自身 | [link](https://www.city.kumamoto.jp/dynamic/opendata/pub/Insyokutenneigyoukyoka.csv) | 公共データ利用規約 |
| 熊本県 | 八代市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 人吉市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 荒尾市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 水俣市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 玉名市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 山鹿市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 菊池市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 宇土市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上天草市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 宇城市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 天草市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 合志市 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 下益城郡美里町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 玉名郡玉東町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 玉名郡南関町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 玉名郡長洲町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 玉名郡和水町 | 熊本県（都道府県） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/ec8a7389-ec6d-4630-b7dd-942d41138715) | Creative Commons Attribution 4.0 International |
| 熊本県 | 菊池郡大津町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 菊池郡菊陽町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡南小国町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡小国町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡産山村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡高森町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡西原村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 阿蘇郡南阿蘇村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上益城郡御船町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上益城郡嘉島町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上益城郡益城町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上益城郡甲佐町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 上益城郡山都町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 八代郡氷川町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 葦北郡芦北町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 葦北郡津奈木町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡錦町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡多良木町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡水上村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡相良村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡五木村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡山江村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡球磨村 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡あさぎり町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 天草郡苓北町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 熊本県 | 球磨郡湯前町 | 熊本県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/5a58e9d4-f3cc-4b21-9ec8-4896f7b42774) | Creative Commons Attribution 4.0 International |
| 大分県 | 大分市 | 大分市（中核市） | ✅ | 自身 | [link](https://www.city.oita.oita.jp/o095/kenko/hoken/documents/r080601allkyoka.csv) | CC BY 2.1 JP |
| 大分県 | 別府市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 中津市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 日田市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 佐伯市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 臼杵市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 津久見市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 竹田市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 豊後高田市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 杵築市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 宇佐市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 豊後大野市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 由布市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 国東市 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 東国東郡姫島村 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 速見郡日出町 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 玖珠郡九重町 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 大分県 | 玖珠郡玖珠町 | 大分県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1b0a322a-6355-4b47-8fe7-478ec1b7d5e9) | Creative Commons Attribution 4.0 International |
| 宮崎県 | 宮崎市 | 宮崎市（中核市） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 都城市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 延岡市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 日南市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 小林市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 日向市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 串間市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 西都市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | えびの市 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 北諸県郡三股町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 西諸県郡高原町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東諸県郡国富町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東諸県郡綾町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡高鍋町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡新富町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡西米良村 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡木城町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡川南町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 児湯郡都農町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東臼杵郡門川町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東臼杵郡諸塚村 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東臼杵郡椎葉村 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 東臼杵郡美郷町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 西臼杵郡高千穂町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 西臼杵郡日之影町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 宮崎県 | 西臼杵郡五ヶ瀬町 | 宮崎県（都道府県） | ✅ | i2fas | [link](https://i2fas.mhlw.go.jp/faspub/IO_S010303.do?method=a_menu_o01Action) | 公共データ利用規約（第1.0版, PDL1.0） |
| 鹿児島県 | 鹿児島市 | 鹿児島市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/f7485a92-6386-43f5-b65f-a6f32bbf0645) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 鹿屋市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 枕崎市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 阿久根市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 出水市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 指宿市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 西之表市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 垂水市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 薩摩川内市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 日置市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 曽於市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 霧島市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | いちき串木野市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 南さつま市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 志布志市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 奄美市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 南九州市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 伊佐市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 姶良市 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 鹿児島郡三島村 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 鹿児島郡十島村 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 薩摩郡さつま町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 出水郡長島町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 姶良郡湧水町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 曽於郡大崎町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 肝属郡東串良町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 肝属郡錦江町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 肝属郡南大隅町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 肝属郡肝付町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 熊毛郡中種子町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 熊毛郡南種子町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 熊毛郡屋久島町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡大和村 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡宇検村 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡瀬戸内町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡龍郷町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡喜界町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡徳之島町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡天城町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡伊仙町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡和泊町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡知名町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 鹿児島県 | 大島郡与論町 | 鹿児島県（都道府県） | ✅ | 管轄主体 | [link](https://data.bodik.jp/dataset/1bca2ed4-7d8f-4330-b8e6-a05d27ace017) | Creative Commons Attribution 4.0 International |
| 沖縄県 | 那覇市 | 那覇市（中核市） | ✅ | 自身 | [link](https://data.bodik.jp/dataset/cbd20a26-da5f-4c15-a472-37cb43345c86) | Creative Commons Attribution 4.0 International |
| 沖縄県 | 宜野湾市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 石垣市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 浦添市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 名護市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 糸満市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 沖縄市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 豊見城市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | うるま市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 宮古島市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 南城市 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡国頭村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡大宜味村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡東村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡今帰仁村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡本部町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡恩納村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡宜野座村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡金武町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 国頭郡伊江村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡読谷村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡嘉手納町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡北谷町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡北中城村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡中城村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 中頭郡西原町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡与那原町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡南風原町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡渡嘉敷村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡座間味村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡粟国村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡渡名喜村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡南大東村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡北大東村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡伊平屋村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡伊是名村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡久米島町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 島尻郡八重瀬町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 宮古郡多良間村 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 八重山郡竹富町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
| 沖縄県 | 八重山郡与那国町 | 沖縄県（都道府県） | ✅ | 管轄主体 | [link](ckan:c9bf82c1-0689-4354-aada-c422f052be5e) | CC BY 4.0 |
