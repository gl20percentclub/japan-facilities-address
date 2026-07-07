// data.bodik.jp から食品営業許可データセットを列挙し、自治体(org)ごとに
// 「全件・許可」に最も近い CSV/XLSX リソースを1つ選び、sources 定義を生成する。
//
//   node scripts/gen-bodik-sources.mjs   → scripts/bodik-sources.js を再生成
const BASE = 'https://data.bodik.jp';
async function search(q){
  const url = `${BASE}/api/3/action/package_search?q=${encodeURIComponent(q)}&rows=1000`;
  const r = await fetch(url); return (await r.json()).result;
}
const pkgs = new Map();
for (const q of ['食品営業許可','飲食店営業許可','食品等営業許可','営業許可施設']) {
  const res = await search(q);
  for (const p of res.results) if(!pkgs.has(p.id)) pkgs.set(p.id, p);
}
// データセットのタイトルが「食品/飲食店の営業許可・届出の一覧」であるものだけを対象にする。
// （package_search は無関係なデータセットも拾うため、タイトルでゲートする）
function isFoodLicenseDataset(title){
  const t=(title||'');
  if(/(保育|給食|食品群|学校|栄養|統計|施設数|件数|年鑑|集計|報告|要領|様式|申請書|手数料|マニュアル|Q&A|補助|献立)/.test(t)) return false;
  const hasLicense=/(営業許可|営業の届出|営業届出|営業届|許可施設)/.test(t);
  const hasFood=/(食品|飲食店|食品衛生|食品等)/.test(t);
  return hasLicense && hasFood;
}
function scoreRes(r, title){
  const f=(r.format||'').toUpperCase();
  let s=0;
  if(f==='CSV') s+=3; else if(f==='XLSX') s+=2; else if(f==='XLS') s+=1; else return -999;
  const hay=((r.name||'')+' '+(r.url||'')+' '+title).toLowerCase();
  if(/(_all|全件|一覧|all_)/.test(hay)) s+=3;
  if(/許可|kyoka|food_business/.test(hay)) s+=1;
  if(/(shinki|新規|_new|todoke|届出|haigyo|廃業|変更|抹消|pdf)/.test(hay)) s-=4;
  if(/(20\d{4}|令和\d+年\d+月|r\d[._-]?\d{1,2})/.test(hay)) s-=1;
  return s;
}
const byOrg = new Map();
for (const p of pkgs.values()){
  if(!isFoodLicenseDataset(p.title)) continue;
  const orgName=(p.organization||{}).title||'';
  if(orgName==='沖縄県') continue; // PR1 で沖縄県BODIKを取込済み
  const org=(p.organization||{}).title||'(不明)';
  const title=p.title||'';
  for (const r of (p.resources||[])){
    const sc=scoreRes(r,title);
    if(sc<=-900) continue;
    const cur=byOrg.get(org);
    if(!cur || sc>cur.sc) byOrg.set(org,{org,title,sc,fmt:(r.format||'').toUpperCase(),resourceId:r.id,url:r.url,license:p.license_title||null,datasetId:p.id});
  }
}
const list=[...byOrg.values()].sort((a,b)=>a.org.localeCompare(b.org,'ja'));
console.log('orgs with a chosen resource:', list.length);
const esc=s=>String(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");
let out=`// 自動生成: data.bodik.jp の食品営業許可データセット（自治体ごとに全件・許可の代表リソース1件）\n`;
out+=`// 生成: node scripts/gen-bodik-sources.mjs（再生成で更新）。手修正時はこのヘッダを削除。\n\n`;
out+=`export const BODIK_SOURCES = [\n`;
for(const x of list){
  out+=`  { key: 'bodik-${x.datasetId.slice(0,8)}', acquire: { type: 'ckan', ckanBase: 'https://data.bodik.jp', resourceId: '${x.resourceId}' }, source: '${esc(x.org)} ${esc(x.title)}', license: ${x.license?`'${esc(x.license)}'`:'null'} },\n`;
}
out+=`];\n`;
import('node:fs').then(fs=>{fs.writeFileSync('scripts/bodik-sources.js',out);fs.writeFileSync('/tmp/bodik-list.json',JSON.stringify(list,null,1));});
console.log('sample:', list.slice(0,12).map(x=>x.org+' / '+x.title+' ['+x.fmt+' sc'+x.sc+']'));
