(()=>{
const $=s=>document.querySelector(s),C=(v,a,b)=>Math.max(a,Math.min(b,v)),P=n=>String(n).padStart(2,'0');
const DATE='11/11/2026',DAY='WED'; // demo date used across the submission
const CTX={morning:{n:'Morning',a:'#d9b46a',bg:'#2b2415'},afternoon:{n:'Afternoon',a:'#4cc9e8',bg:'#10282f'},evening:{n:'Evening',a:'#ff8a65',bg:'#2d1710'},sleep:{n:'Sleep time',a:'#8da2c8',bg:'#0a0e19'}};
const THEMES=[['Gold Classic','#d9b46a'],['Cyan Aero','#4cc9e8'],['Rose Ember','#ff8a65'],['Titanium','#cfd6e0'],['Emerald','#5fd6a0']];
const FONTS=['Jost','Bodoni Moda','JetBrains Mono'];
const WX={sunny:['Sunny','#ffd27a2a'],cloudy:['Cloudy','#9aa5b42a'],rain:['Rain','#4f7bd638']};
const PAGES=['Welcome','Main face','Health hub','Activity','AI insights','Diet & activity coach','Personalise','Theme gallery','SOS','Ambient'];
const S={page:0,ctx:'auto',accent:null,font:0,swap:false,amb:false,steps:8542,bpm:72,bat:85,spo2:98,stress:25,sleep:7.5,sys:118,dia:78,temp:36.6,cond:'diabetes',sos:-1,wx:'sunny',tour:null};
const ICONS={heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',
 bars:'<path d="M5 20V12M10 20V8M15 20V4M20 20V10"/>',batt:'<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/><rect x="4.5" y="9.5" width="9" height="5" fill="currentColor" stroke="none"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
 cloud:'<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 11a3.5 3.5 0 0 1-.5 7z"/>',rain:'<path d="M7 14a4 4 0 0 1-.5-8A6 6 0 0 1 18 7a3.5 3.5 0 0 1-.5 7zM8 17l-1 3M12 17l-1 3M16 17l-1 3"/>',
 bt:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',gauge:'<path d="M4 18a8 8 0 1 1 16 0M12 18l4-5"/>',
 pulse:'<path d="M2 12h4l3-7 4 14 3-7h6"/>',moon:'<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10z"/>',temp:'<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
 food:'<path d="M5 3v8a3 3 0 0 0 3 3v7M8 3v6M11 3v8a3 3 0 0 1-3 3M18 21V3c-3 2-4 6-4 9h4"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="M12 8l-3 5 3 3v5M12 8l4 3 3 1M9 13l-3 1"/>',cup:'<path d="M6 4h12l-1 14a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zM7 10h10"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;
const hourCtx=h=>h>=5&&h<12?'morning':h<17&&h>=12?'afternoon':h>=17&&h<22?'evening':'sleep';
const ctxNow=()=>S.ctx==='auto'?hourCtx(new Date().getHours()):S.ctx;
const accent=()=>S.accent||CTX[ctxNow()].a;
const sleepTxt=()=>`${Math.floor(S.sleep)}h ${P(Math.round((S.sleep%1)*60))}m`;
const score=()=>Math.round(C(.3*C(S.sleep/8,0,1)*100+.2*C(100-Math.abs(S.bpm-65)*1.5,0,100)+.15*C((S.spo2-90)*10,0,100)+.2*(100-S.stress)+.15*C(S.steps/10000,0,1)*100,0,100));
const batMode=()=>S.amb?'Ambient, 1 fps':S.bat<25?'Saver mode':'Smart power';
const insight=()=>S.stress>60?'Stress is high. Try a 1 minute breath.':S.sleep>=7?`You slept ${S.sleep} hours. Excellent recovery.`:`You slept ${S.sleep} hours. Take it easy today.`;
const pt=(a,r)=>[223+r*Math.sin(a),223-r*Math.cos(a)];
function arc(f,r,w,col){const a=C(f,0,.999)*2*Math.PI,[x,y]=pt(a,r);return `<path d="M223 ${223-r} A${r} ${r} 0 ${a>Math.PI?1:0} 1 ${x} ${y}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`}
function dial(amb){let t='';for(let i=0;i<60;i++){const maj=i%5===0,a=i*Math.PI/30,[x1,y1]=pt(a,maj?176:186),[x2,y2]=pt(a,200);
  t+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${maj?(amb?'#6b5a33':'var(--accent)'):'#ffffff26'}" stroke-width="${maj?5:2}" stroke-linecap="round"/>`}
  if(amb)return `<svg class="dial" viewBox="0 0 446 446">${t.replace(/stroke="#ffffff26"[^>]*>/g,'stroke="none">')}</svg>`;
  const f=S.steps/10000,[ex,ey]=pt(C(f,0,.999)*2*Math.PI,205);
  return `<svg class="dial" viewBox="0 0 446 446">${t}${arc(f,205,6,'var(--accent)')}<circle cx="${ex}" cy="${ey}" r="9" fill="#f7e6b8"/></svg>`}
const timeHTML=()=>{const d=new Date();return `${P(d.getHours())}<i>:</i>${P(d.getMinutes())}`};
const chips=(arr,cur,act)=>`<div class="chips">${arr.map((l,i)=>`<button class="chip ${cur===i?'on':''}" data-act="${act}:${i}">${l}</button>`).join('')}</div>`;
const WXI={sunny:'sun',cloudy:'cloud',rain:'rain'};
const VIEW=[
 ()=>`<div class="pg c"><svg width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="var(--accent)" stroke-width="3"><circle cx="35" cy="45" r="26"/><circle cx="55" cy="45" r="26"/></svg><h2>AetherWatch AI</h2><div class="acc" style="font:500 22px var(--ui)">Design Time Your Way</div><p class="dim">Swipe to begin</p></div>`,
 ()=>`<div class="pg ${S.swap?'swap':''} ${ctxNow()==='sleep'?'sleepmode':''}"><div class="top">${ic('bt')}<span>${DAY}</span>${ic('bell')}</div><div class="sun"></div><div class="time">${timeHTML()}</div><div class="rule"></div>
  <div class="dt"><span>${DATE}</span><span class="acc">${ic(WXI[S.wx])}${S.wx==='rain'?22:26}°C</span></div>
  <div class="pill"><span class="h">${ic('heart')}${Math.round(S.bpm)}</span><u></u><span>${ic('bars')}${Math.round(S.steps).toLocaleString('en-US')}</span><u></u><span>${ic('batt')}${Math.round(S.bat)}%</span></div></div>`,
 ()=>`<div class="pg"><div class="ttl">HEALTH</div><div class="grid">${[['heart',Math.round(S.bpm),'BPM'],['drop',S.spo2+'%','SpO2'],['gauge',S.sys+'/'+S.dia,'BP'],['pulse',Math.round(S.stress)+'%','Stress'],['moon',sleepTxt(),'Sleep'],['temp',S.temp+'°','Temp']].map(t=>`<div class="tile">${ic(t[0])}<div><b>${t[1]}</b><small>${t[2]}</small></div></div>`).join('')}</div></div>`,
 ()=>{const f=[S.steps/10000,342/500,8/12],R=[88,68,48],K=['var(--accent)','var(--cyan)','var(--pink)'];
  return `<div class="pg"><div class="ttl">ACTIVITY</div><svg width="200" height="200" viewBox="0 0 200 200">${R.map((r,i)=>`<circle cx="100" cy="100" r="${r}" fill="none" stroke="#ffffff14" stroke-width="14"/>`+arc2(f[i],r,K[i])).join('')}</svg>
  <div class="row3"><span>${ic('bars')}${Math.round(S.steps).toLocaleString('en-US')}</span><span>${ic('drop')}342</span><span>${ic('walk')}6.4 km</span></div></div>`},
 ()=>`<div class="pg"><div class="ttl">AI INSIGHTS</div><div class="big acc">${score()}</div><div class="dim">Health score</div><div class="txt">${insight()}</div><div class="txt dim" style="margin-top:4px">${Math.max(0,10000-Math.round(S.steps)).toLocaleString('en-US')} steps to goal</div></div>`,
 ()=>{const d=S.cond==='diabetes',L=d?[['food','High-fibre dinner: ragi roti, dal, palak.'],['walk','Walk 8,000 steps today.'],['cup','Water: 8 glasses. Skip sweets.']]:[['food','Low-salt lunch: veg khichdi, curd.'],['walk','Brisk walk for 30 minutes.'],['cup','Cut salt, pickles and extra tea.']];
  return `<div class="pg"><div class="ttl">COACH</div>${chips(['Sugar','BP'],d?0:1,'cond')}<div class="lines">${L.map(l=>`<div>${ic(l[0])}<span>${l[1]}</span></div>`).join('')}</div></div>`},
 ()=>`<div class="pg"><div class="ttl">PERSONALISE</div><div class="dim">Font</div>${chips(['Aa','Aa','Aa'].map((x,i)=>`<span style="font-family:${FONTS[i]}">${x}</span>`),S.font,'font')}<div class="dim">Layout</div>${chips(['Classic','Stats top'],S.swap?1:0,'swap')}<div class="dim">Colour</div>${chips(['Auto'],S.accent?-1:0,'auto')}</div>`,
 ()=>`<div class="pg"><div class="ttl">THEMES</div><div class="list">${THEMES.map((t,i)=>`<button class="th ${S.accent===t[1]?'on':''}" data-act="theme:${i}"><s style="background:${t[1]}"></s>${t[0]}</button>`).join('')}</div></div>`,
 ()=>{const c=S.sos>=0;return `<div class="pg c"><div class="ttl" style="margin:0">SOS</div><button class="sosbtn ${c?'cancel':''}" data-act="${c?'cancel':'sos'}">${c?(S.sos>0?'Cancel':'Sent'):'SOS'}</button><div class="txt" style="margin-top:6px">${!c?'Tap to call help':S.sos>0?`Calling in ${S.sos}s`:'Contact notified'}</div></div>`},
 ()=>`<div class="pg" style="padding-top:0"><div class="amb-time">${timeHTML()}</div><div class="dt" style="margin-top:18px;color:#bbb"><span>${DATE}</span><span class="acc">${ic('sun')}26°C</span></div></div>`
];
function arc2(f,r,col){const a=C(f,0,.999)*2*Math.PI,x=100+r*Math.sin(a),y=100-r*Math.cos(a);return `<path d="M100 ${100-r} A${r} ${r} 0 ${a>Math.PI?1:0} 1 ${x} ${y}" fill="none" stroke="${col}" stroke-width="14" stroke-linecap="round"/>`}
function render(){const face=$('#face'),amb=S.amb||S.page===9,c=CTX[ctxNow()],r=document.documentElement.style;
  r.setProperty('--accent',accent());r.setProperty('--bg',c.bg);r.setProperty('--wx',WX[S.wx][1]);r.setProperty('--tf',`"${FONTS[S.font]}",system-ui,sans-serif`);
  face.classList.toggle('amb-on',amb);
  face.innerHTML=dial(amb&&S.page!==0)+(amb?VIEW[9]():VIEW[S.page]())+`<div class="dots">${PAGES.map((_,i)=>`<i class="${i===S.page?'on':''}"></i>`).join('')}</div>`;
  $('#mScreen').textContent=PAGES[S.page];$('#mScore').textContent=score();$('#mCtx').textContent=c.n+' · '+WX[S.wx][0];$('#mBat').textContent=batMode();
  $('#amb').setAttribute('aria-pressed',S.amb)}
const go=n=>{S.page=(n+PAGES.length)%PAGES.length;render()};
function sosStart(){S.sos=5;render();clearInterval(sosStart.t);sosStart.t=setInterval(()=>{S.sos--;if(S.sos<=0){clearInterval(sosStart.t);S.sos=0}render()},1000)}
function sosCancel(){clearInterval(sosStart.t);S.sos=-1;render()}
// events
$('#face').addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b)return;const[a,v]=b.dataset.act.split(':');
  if(a==='cond')S.cond=v==='0'?'diabetes':'bp';else if(a==='font')S.font=+v;else if(a==='swap')S.swap=v==='1';else if(a==='auto'){S.accent=null;S.ctx='auto';$('#ctx').value='auto'}
  else if(a==='theme')S.accent=THEMES[+v][1];else if(a==='sos')sosStart();else if(a==='cancel')sosCancel();render()});
let x0=null;const fc=$('#face');fc.addEventListener('pointerdown',e=>x0=e.clientX);
fc.addEventListener('pointerup',e=>{if(x0===null)return;const d=e.clientX-x0;x0=null;if(Math.abs(d)>45)go(S.page+(d<0?1:-1))});
fc.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(S.page+1);if(e.key==='ArrowLeft')go(S.page-1)});
$('#prev').onclick=()=>go(S.page-1);$('#next').onclick=()=>go(S.page+1);
$('#amb').onclick=()=>{S.amb=!S.amb;render()};$('#auto').onclick=()=>{S.accent=null;S.ctx='auto';$('#ctx').value='auto';render()};
$('#ctx').onchange=e=>{S.ctx=e.target.value;S.accent=null;render()};$('#wx').onchange=e=>{S.wx=e.target.value;render()};
function fit(){const w=Math.min(466,innerWidth*.92);$('#watch').style.transform=`scale(${w/466})`;$('#scale').style.height=w+'px'}addEventListener('resize',fit);fit();
// guided tour
const TOUR=[[0,'Welcome','AetherWatch AI: Design Time Your Way.'],[1,'Live main face','Live clock, steps arc, heart rate and battery in one glance.'],
 [1,'Evening mode','AI personalisation: evening turns the face warm ember.',()=>{S.ctx='evening';S.wx='cloudy'}],[1,'Sleep time','At night the face dims and the sun becomes a moon.',()=>{S.ctx='sleep'}],
 [2,'Health hub','Heart rate, SpO2, BP, stress, sleep and temperature.',()=>{S.ctx='auto';S.wx='sunny'}],[3,'Activity rings','Steps, move and stand rings with distance.'],
 [4,'AI insights','A health score from sleep, heart, oxygen, stress and steps.'],[5,'Sugar coach','Indian diet and activity guidance for sugar patients.',()=>{S.cond='diabetes'}],
 [5,'BP coach','Low-salt meals and brisk walking for BP patients.',()=>{S.cond='bp'}],[6,'Personalise','Change font, layout and colour.',()=>{S.font=1;S.swap=true}],
 [7,'Theme gallery','Five luxury themes, one tap each.',()=>{S.font=0;S.swap=false;S.accent=THEMES[1][1]}],[8,'One-tap SOS','Five second countdown, then your contact is notified.',()=>{S.accent=null}],
 [9,'Ambient mode','Outline digits, no colour, 1 fps. Minimum energy.']];
function showTour(i){const t=TOUR[i];if(t[3])t[3]();S.page=t[0];if(t[0]===8)sosCancel();render();$('#caption').innerHTML=`<b>${t[1]}</b>${t[2]}`}
function startTour(){stopTour(true);let i=0;showTour(0);S.tour=setInterval(()=>{i++;if(i>=TOUR.length)return stopTour();showTour(i)},4200)}
function stopTour(q){if(S.tour){clearInterval(S.tour);S.tour=null}S.ctx='auto';S.accent=null;S.font=0;S.swap=false;S.wx='sunny';$('#ctx').value='auto';$('#wx').value='sunny';sosCancel();if(!q)$('#caption').innerHTML='<b>Tour stopped</b>Press START TOUR to begin again.';render()}
$('#startTour').onclick=startTour;$('#stopTour').onclick=()=>stopTour();
// live simulation
setInterval(()=>{if(!S.amb)S.steps=Math.min(S.steps+Math.random()*3,9990);S.bpm=C(S.bpm+(72-S.bpm)*.2+(Math.random()*3-1.5),58,95);
  S.stress=C(S.stress+(Math.random()*4-2),10,45);S.bat=Math.max(5,S.bat-(S.amb?.0004:.0025));if(S.sos<0)render()},1000);
render();
})();
