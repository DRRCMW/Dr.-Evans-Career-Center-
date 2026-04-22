/* DR. NATALIE C. EVANS — CAREER SUITE v4 */

var WEEK_MS = 7*24*60*60*1000;
var SK_JOBS = 'nce_v4_jobs';
var SK_TS   = 'nce_v4_ts';
var SK_APPS = 'nce_v4_apps';

var TITLES = { home:'Dashboard', jobs:'Opportunities', tracker:'Application Tracker', prep:'Interview Prep', growth:'Career Growth', linkedin:'LinkedIn' };

var JOB_WEEKS = [
  [
    {id:'w1j1',cat:'consulting',title:'Senior Program Manager, Federal Health',org:'Guidehouse',loc:'Remote / Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead CDC and HRSA-funded program portfolios for a top federal health consulting firm. Own deliverable tracking, client relationships, and cross-functional implementation.',reqs:['Federal grant management','CDC/HRSA experience','DHA or MPH required','Data systems proficiency'],days:3,url:'https://www.guidehouse.com/careers'},
    {id:'w1j2',cat:'consulting',title:'Healthcare Consultant, Health Equity Practice',org:'Deloitte Government & Public Services',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$110K–$140K',match:'high',desc:'Advise state and federal clients on health disparity elimination strategies. Doctoral-level candidates strongly preferred.',reqs:['Public health background','State/federal health experience','Implementation science','Graduate degree required'],days:5,url:'https://www2.deloitte.com/us/en/careers.html'},
    {id:'w1j3',cat:'ph',title:'Director of Programs, HIV/STI Prevention',org:'CDC Foundation',loc:'Remote',type:'Full-time',sal:'$85K–$105K',match:'high',desc:'Oversee a national portfolio of CDC-funded HIV prevention programs and coordinate technical assistance to grantees across multiple jurisdictions.',reqs:['HIV prevention expertise','Federal grant management','EHE initiative knowledge','MPH or DHA required'],days:7,url:'https://cdcfoundation.org/careers'},
    {id:'w1j4',cat:'fed',title:'Program Management Consultant, HHS',org:'Booz Allen Hamilton',loc:'Remote',type:'Full-time',sal:'$100K–$130K',match:'high',desc:'Support HHS operating divisions with program performance management, data governance, and strategic planning consulting.',reqs:['HHS/federal health experience','Performance management','Data governance','Security clearance preferred'],days:2,url:'https://careers.boozallen.com'},
    {id:'w1j5',cat:'ph',title:'Senior Health Program Specialist',org:'NASTAD',loc:'Remote',type:'Full-time',sal:'$75K–$95K',match:'high',desc:'Provide technical assistance and capacity building to state and territorial HIV/STI programs and develop national training resources.',reqs:['State health dept experience','HIV program expertise','Training facilitation','MPH required'],days:8,url:'https://nastad.org/about/careers'},
    {id:'w1j6',cat:'consulting',title:'Associate Principal, Healthcare Strategy',org:'ICF International',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$105K–$135K',match:'medium',desc:'Lead healthcare strategy engagements for federal and state health clients, blending quantitative analysis with deep program expertise.',reqs:['Healthcare consulting','Federal health programs','Analytical skills','Graduate degree'],days:10,url:'https://www.icf.com/careers'},
    {id:'w1j7',cat:'pm',title:'Director, Quality Improvement & Compliance',org:'Parkland Health System',loc:'Dallas, TX',type:'Full-time',sal:'$90K–$115K',match:'medium',desc:'Lead organization-wide QI initiatives and federal compliance programs for one of Texas\'s largest safety net health systems.',reqs:['QI methodology','Healthcare compliance','Team leadership','DHA/MPH preferred'],days:6,url:'https://www.parklandhealth.org/careers'},
    {id:'w1j8',cat:'ph',title:'Program Officer, Sexual & Reproductive Health',org:'NACCHO',loc:'Remote',type:'Full-time',sal:'$70K–$88K',match:'medium',desc:'Manage sexual and reproductive health program grants and coordinate technical assistance to local health departments nationally.',reqs:['Sexual health expertise','Grant management','National partnerships','MPH required'],days:12,url:'https://www.naccho.org/about/careers'}
  ],
  [
    {id:'w2j1',cat:'consulting',title:'Health Systems Transformation Consultant',org:'Accenture Federal Services',loc:'Remote / Dallas, TX',type:'Full-time',sal:'$105K–$135K',match:'high',desc:'Drive health systems transformation for HHS, HRSA, and CDC. Lead complex program implementations with measurable public health outcomes.',reqs:['Federal health agency experience','Change management','Program implementation','MPH or DHA preferred'],days:1,url:'https://www.accenture.com/us-en/careers'},
    {id:'w2j2',cat:'pm',title:'Program Director, Community Health Initiatives',org:'Episcopal Health Foundation',loc:'Houston, TX (Hybrid)',type:'Full-time',sal:'$85K–$100K',match:'high',desc:'Oversee a portfolio of community health programs focused on health equity and social determinants. Manage grant reporting and stakeholder engagement.',reqs:['Program management','Community health experience','Grant oversight','Masters degree required'],days:4,url:'https://episcopalhealth.org/about/careers/'},
    {id:'w2j3',cat:'consulting',title:'Senior Public Health Advisor, HIV Programs',org:'Palladium Group',loc:'Remote',type:'Full-time',sal:'$90K–$115K',match:'high',desc:'Provide advisory services for CDC and USAID-funded HIV programs. Support implementation science and program evaluation.',reqs:['HIV program expertise','CDC/PEPFAR experience','Implementation science','MPH/DHA required'],days:3,url:'https://www.thepalladiumgroup.com/careers'},
    {id:'w2j4',cat:'fed',title:'Federal Program Manager, STI Prevention',org:'JSI Research & Training',loc:'Remote',type:'Full-time',sal:'$80K–$100K',match:'high',desc:'Manage CDC-funded STI prevention programs across multiple states, coordinate with local health departments, and drive data-informed improvement.',reqs:['STI/HIV program management','Federal grant oversight','Multi-site coordination','Public health degree'],days:6,url:'https://www.jsi.com/careers/'},
    {id:'w2j5',cat:'consulting',title:'Healthcare Management Consultant',org:'Chartis Group',loc:'Dallas, TX (Remote Flex)',type:'Full-time',sal:'$100K–$125K',match:'high',desc:'Advise healthcare clients on strategy, operations, and performance improvement. Health equity background highly valued.',reqs:['Healthcare consulting','Strategic planning','Performance improvement','Advanced degree'],days:2,url:'https://www.chartis.com/careers'},
    {id:'w2j6',cat:'pm',title:'Director of Programs & Evaluation',org:'AIDS Foundation Houston',loc:'Houston, TX',type:'Full-time',sal:'$75K–$95K',match:'high',desc:'Lead all programmatic operations and evaluation for a comprehensive HIV services organization. Oversee federal and local grant portfolios.',reqs:['HIV program management','Program evaluation','Federal grants','MPH or related'],days:9,url:'https://www.aidshelp.org/careers'},
    {id:'w2j7',cat:'consulting',title:'Senior Analyst, Health Policy & Programs',org:'Mathematica',loc:'Remote',type:'Full-time',sal:'$85K–$110K',match:'medium',desc:'Support federal health policy research and program evaluation for HHS, CDC, and SAMHSA.',reqs:['Health policy or evaluation','Federal health programs','Research methods','Masters required'],days:5,url:'https://www.mathematica.org/career-opportunities'},
    {id:'w2j8',cat:'pm',title:'VP of Programs, Sexual Health Services',org:'Planned Parenthood of Greater Texas',loc:'Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'medium',desc:'Provide executive leadership for all clinical and education programs across multiple sites.',reqs:['Senior program leadership','Sexual/reproductive health','Compliance and QI','Masters required'],days:11,url:'https://www.plannedparenthood.org/get-involved/jobs'}
  ],
  [
    {id:'w3j1',cat:'fed',title:'Associate Director, Federal Health Portfolio',org:'Maximus Federal',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Oversee multiple federally-contracted health programs and ensure compliance with HHS/CDC performance metrics.',reqs:['Federal health contracting','Portfolio management','Team leadership','MPH/DHA preferred'],days:2,url:'https://www.maximus.com/careers'},
    {id:'w3j2',cat:'ph',title:'Public Health Program Manager',org:'American Public Health Association',loc:'Washington, DC (Remote Flex)',type:'Full-time',sal:'$75K–$92K',match:'high',desc:'Manage APHA national programs and coordinate with federal partners and health departments on priority public health issues.',reqs:['Program management','Federal partnerships','Stakeholder engagement','MPH required'],days:4,url:'https://apha.org/about-apha/governance-and-staff/job-postings'},
    {id:'w3j3',cat:'consulting',title:'Senior Consultant, Health Equity & Disparities',org:'NORC at the University of Chicago',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead health equity consulting projects for federal and foundation clients. Provide expertise in disparities elimination and implementation science.',reqs:['Health equity expertise','Federal health programs','Implementation science','Doctoral preferred'],days:1,url:'https://www.norc.org'},
    {id:'w3j4',cat:'pm',title:'Director, HIV Programs & Quality Improvement',org:'Dallas County Health & Human Services',loc:'Dallas, TX',type:'Full-time',sal:'$85K–$105K',match:'high',desc:'Lead Dallas County HIV prevention and care continuum programs. Manage federal Ryan White and CDC grants and drive countywide QI.',reqs:['HIV program leadership','Ryan White/CDC grants','Quality improvement','MPH or DHA'],days:5,url:'https://www.dallascounty.org/departments/humanresources/job-openings.php'},
    {id:'w3j5',cat:'pm',title:"Program Consultant, Women's Health Initiative",org:'Texas Health Resources',loc:'Arlington, TX (Hybrid)',type:'Full-time',sal:'$80K–$100K',match:'high',desc:"Consult on design and implementation of women's health programs across a large integrated health system.",reqs:["Women's health experience",'Healthcare consulting or PM','Community health','Graduate degree'],days:7,url:'https://texashealthcareers.org'},
    {id:'w3j6',cat:'fed',title:'Senior Advisor, Behavioral Health Programs',org:'SAMHSA (via Leidos)',loc:'Remote',type:'Contract',sal:'$95K–$125K',match:'high',desc:'Support SAMHSA programmatic operations including grant portfolio management, performance monitoring, and grantee communications.',reqs:['SAMHSA/federal behavioral health','Grant management','Program monitoring','MPH or advanced degree'],days:3,url:'https://www.leidos.com/careers'},
    {id:'w3j7',cat:'pm',title:'Health Program Strategy Manager',org:'Elevance Health',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$90K–$115K',match:'medium',desc:'Lead strategic program development for Medicaid and community health initiatives. Drive health equity with state and federal stakeholders.',reqs:['Managed care or public health PM','Medicaid/community health','Strategic planning','Graduate degree'],days:8,url:'https://careers.elevancehealth.com'},
    {id:'w3j8',cat:'ph',title:'Grants Management Specialist, Health Programs',org:'The Kresge Foundation',loc:'Remote',type:'Full-time',sal:'$80K–$100K',match:'medium',desc:'Manage a portfolio of health equity grants and provide TA to grantees on social determinants and health disparities.',reqs:['Grants management','Health equity focus','Technical assistance','MPH or related'],days:10,url:'https://kresge.org/about-us/careers/'}
  ],
  [
    {id:'w4j1',cat:'consulting',title:'Principal Consultant, Public Health Strategy',org:'Deloitte Government & Public Services',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$120K–$155K',match:'high',desc:'Lead public health strategy engagements for CDC and HHS clients. Manage project delivery, client relationships, and junior consultant development.',reqs:['Public health consulting','Federal health strategy','Client management','DHA or MPH'],days:2,url:'https://www2.deloitte.com/us/en/careers.html'},
    {id:'w4j2',cat:'ph',title:'Program Officer, HIV & Sexual Health',org:'Ford Foundation',loc:'Remote / New York',type:'Full-time',sal:'$100K–$125K',match:'high',desc:'Develop and manage grantmaking focused on HIV prevention, sexual health equity, and health systems strengthening.',reqs:['HIV/sexual health expertise','Grantmaking or PM','Health equity frameworks','Advanced degree'],days:3,url:'https://www.fordfoundation.org/about/careers/'},
    {id:'w4j3',cat:'fed',title:'Director, Federal Programs & Compliance',org:'Legacy Community Health',loc:'Houston, TX',type:'Full-time',sal:'$90K–$115K',match:'high',desc:'Direct all federal grant programs including HRSA 330, Ryan White Parts A-D, and CDC prevention grants.',reqs:['HRSA/Ryan White management','FQHC or CHC experience','Compliance oversight','MPH or DHA'],days:1,url:'https://legacycommunityhealth.org/careers/'},
    {id:'w4j4',cat:'consulting',title:'Healthcare Program Manager, Disparities Reduction',org:'RAND Corporation',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead applied research and program support focused on health disparities reduction for federal and foundation clients.',reqs:['Health disparities research or PM','Federal health programs','Mixed methods','Doctoral preferred'],days:5,url:'https://www.rand.org/jobs.html'},
    {id:'w4j5',cat:'consulting',title:'Senior Manager, Public Health Programs',org:'Abt Associates',loc:'Remote',type:'Full-time',sal:'$100K–$130K',match:'high',desc:'Manage multiple federal public health program projects. Lead teams, client relationships, and technical deliverables.',reqs:['Public health PM','Federal contracts','Team leadership','MPH/DHA required'],days:4,url:'https://www.abtassociates.com/careers'},
    {id:'w4j6',cat:'pm',title:'VP, Community Health & Social Impact',org:'United Way of Metropolitan Dallas',loc:'Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'high',desc:"Lead United Way's community health portfolio and social impact strategy. Manage grant programs, federal partnerships, and cross-sector health equity.",reqs:['Senior nonprofit leadership','Community health','Grant portfolio management','Graduate degree'],days:6,url:'https://unitedwaydallas.org/careers/'},
    {id:'w4j7',cat:'consulting',title:'Health Program Consultant, Digital Health',org:'Optum / UnitedHealth Group',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$100K–$125K',match:'medium',desc:'Advise on health program design for Medicaid and government health clients with a focus on equity and data-driven improvement.',reqs:['Healthcare consulting or PM','Government health programs','Data analysis','Graduate degree'],days:9,url:'https://careers.unitedhealthgroup.com'},
    {id:'w4j8',cat:'fed',title:'Program Manager, Maternal & Child Health',org:'Texas DSHS / UT Health',loc:'Austin, TX (Hybrid)',type:'Full-time',sal:'$80K–$100K',match:'medium',desc:'Manage state and federally-funded MCH programs, coordinate with community partners, oversee data reporting, and drive QI.',reqs:['MCH program management','Federal grant oversight','Community partnerships','MPH required'],days:7,url:'https://www.dshs.texas.gov/jobs'}
  ]
];

var apps = [];
var saved = [];
var curJobs = [];
var curFilter = 'all';
var pendingId = null;

function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function lsSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }

function init(){
  var now = Date.now();
  var ts = parseInt(lsGet(SK_TS)||'0');
  var cached = null;
  try{ cached = JSON.parse(lsGet(SK_JOBS)||'null'); }catch(e){}
  try{ apps = JSON.parse(lsGet(SK_APPS)||'[]'); }catch(e){ apps=[]; }

  if(!ts||!cached||(now-ts)>=WEEK_MS){
    var wi = Math.floor(now/WEEK_MS)%JOB_WEEKS.length;
    curJobs = JOB_WEEKS[wi];
    lsSet(SK_JOBS,JSON.stringify(curJobs));
    lsSet(SK_TS,String(now));
    ts = now;
  }else{
    curJobs = cached;
  }

  saved = [];
  for(var x=0;x<apps.length;x++){ if(apps[x].status==='saved') saved.push(apps[x].id); }

  var fd=new Date(ts), nd=new Date(ts+WEEK_MS);
  var fmt=function(d){ return d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); };
  var wc=document.getElementById('week-chip');
  var nn=document.getElementById('nxt-note');
  var rn=document.getElementById('refresh-note');
  var jp=document.getElementById('jobs-pill');
  if(wc) wc.textContent='Week of '+fd.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  if(nn) nn.textContent='Next refresh: '+fmt(nd);
  if(rn) rn.textContent='↻ Next refresh: '+fmt(nd);
  if(jp) jp.textContent=curJobs.length;

  updateStats();
  renderTracker();
  renderJobs(curJobs);
}

/* ── NAVIGATION — guaranteed to work ── */
function navTo(id){
  /* hide all views */
  var vs=document.querySelectorAll('.view');
  for(var i=0;i<vs.length;i++) vs[i].classList.remove('active');

  /* deactivate all nav buttons */
  var nbs=document.querySelectorAll('.nav-btn');
  for(var j=0;j<nbs.length;j++) nbs[j].classList.remove('active');

  /* deactivate bottom nav */
  var bns=document.querySelectorAll('.bn');
  for(var k=0;k<bns.length;k++) bns[k].classList.remove('active');

  /* show target view */
  var v=document.getElementById('v-'+id);
  if(v) v.classList.add('active');

  /* activate sidebar button */
  var sb=document.getElementById('nb-'+id);
  if(sb) sb.classList.add('active');

  /* activate bottom nav button */
  var bn=document.getElementById('bnav-'+id);
  if(bn) bn.classList.add('active');

  /* update title */
  var pt=document.getElementById('page-title');
  if(pt) pt.textContent=TITLES[id]||id;

  /* scroll content to top */
  var c=document.querySelector('.content');
  if(c) c.scrollTop=0;

  /* close mobile sidebar */
  closeSidebar();
}

function showPrep(id){
  var ps=document.querySelectorAll('.prep-panel');
  for(var i=0;i<ps.length;i++) ps[i].classList.remove('active');
  var ts=document.querySelectorAll('.tab');
  for(var j=0;j<ts.length;j++) ts[j].classList.remove('active');
  var p=document.getElementById('prep-'+id);
  if(p) p.classList.add('active');
  var t=document.getElementById('tab-'+id);
  if(t) t.classList.add('active');
}

function toggleSidebar(){
  var sb=document.getElementById('sidebar');
  var ov=document.getElementById('sb-overlay');
  if(!sb) return;
  if(sb.classList.contains('open')){
    sb.classList.remove('open');
    if(ov) ov.classList.remove('show');
  }else{
    sb.classList.add('open');
    if(ov) ov.classList.add('show');
  }
}

function closeSidebar(){
  var sb=document.getElementById('sidebar');
  var ov=document.getElementById('sb-overlay');
  if(sb) sb.classList.remove('open');
  if(ov) ov.classList.remove('show');
}

function filterJobs(cat,btn){
  curFilter=cat;
  var cs=document.querySelectorAll('.fchip');
  for(var i=0;i<cs.length;i++) cs[i].classList.remove('active');
  if(btn) btn.classList.add('active');
  var filtered=cat==='all'?curJobs:curJobs.filter(function(j){return j.cat===cat;});
  renderJobs(filtered);
}

function renderJobs(jobs){
  var out=document.getElementById('jobs-out');
  if(!out) return;
  if(!jobs||!jobs.length){
    out.innerHTML='<div style="text-align:center;padding:40px;color:#9b7080;font-style:italic">No roles in this category this week.</div>';
    return;
  }
  var html='';
  for(var i=0;i<jobs.length;i++){
    var j=jobs[i];
    var ia=false,is=false;
    for(var x=0;x<apps.length;x++){ if(apps[x].id===j.id&&apps[x].status==='applied'){ia=true;break;} }
    for(var y=0;y<saved.length;y++){ if(saved[y]===j.id){is=true;break;} }
    html+='<div class="job-card" id="jc-'+j.id+'">';
    html+='<div class="jc-top"><div><div class="jc-title">'+j.title+'</div><div class="jc-org">'+j.org+'</div></div>';
    html+='<span class="jmatch '+(j.match==='high'?'mhi':'mmd')+'">'+(j.match==='high'?'✦ Strong match':'◆ Good match')+'</span></div>';
    html+='<div class="jc-pills"><span class="pill p-loc">'+j.loc+'</span><span class="pill p-type">'+j.type+'</span><span class="pill p-sal">'+j.sal+'</span><span class="pill p-day">'+j.days+'d ago</span></div>';
    html+='<p class="jc-desc">'+j.desc+'</p>';
    html+='<p class="jc-reqs"><strong>Key requirements:</strong> '+j.reqs.join(' · ')+'</p>';
    html+='<div class="jc-acts">';
    html+='<button class="btn-apply'+(ia?' done':'')+(ia?' disabled':'')+'" onclick="applyClick(\''+j.id+'\')">'+(ia?'✓ Applied':'Apply Now')+'</button>';
    html+='<button class="btn-save'+(is?' saved':'')+'" onclick="saveClick(\''+j.id+'\')">'+(is?'✓ Saved':'Save')+'</button>';
    html+='<a class="btn-view" href="'+j.url+'" target="_blank" rel="noopener">View Listing ↗</a>';
    html+='</div></div>';
  }
  out.innerHTML=html;
}

function applyClick(id){
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id&&apps[x].status==='applied') return; }
  var j=findJob(id);
  if(!j) return;
  pendingId=id;
  var mt=document.getElementById('modal-title');
  var md=document.getElementById('modal-desc');
  if(mt) mt.textContent='Apply to '+j.title;
  if(md) md.textContent='Ready to apply to '+j.title+' at '+j.org+'? Download your updated resume to attach.';
  var m=document.getElementById('apply-modal');
  if(m) m.classList.add('open');
}

function closeApplyModal(){
  var m=document.getElementById('apply-modal');
  if(m) m.classList.remove('open');
  pendingId=null;
}

function confirmApply(){
  if(!pendingId) return;
  var j=findJob(pendingId);
  if(!j) return;
  var found=false;
  for(var x=0;x<apps.length;x++){ if(apps[x].id===j.id){apps[x].status='applied';found=true;break;} }
  if(!found) apps.push({id:j.id,title:j.title,org:j.org,status:'applied',date:new Date().toLocaleDateString()});
  lsSet(SK_APPS,JSON.stringify(apps));
  var btn=document.querySelector('#jc-'+j.id+' .btn-apply');
  if(btn){btn.textContent='✓ Applied';btn.classList.add('done');}
  updateStats();renderTracker();closeApplyModal();dlResume();
}

function saveClick(id){
  for(var y=0;y<saved.length;y++){ if(saved[y]===id) return; }
  var j=findJob(id);
  if(!j) return;
  saved.push(id);
  var found=false;
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id){found=true;break;} }
  if(!found) apps.push({id:j.id,title:j.title,org:j.org,status:'saved',date:new Date().toLocaleDateString()});
  lsSet(SK_APPS,JSON.stringify(apps));
  var btn=document.querySelector('#jc-'+id+' .btn-save');
  if(btn){btn.textContent='✓ Saved';btn.classList.add('saved');}
  updateStats();renderTracker();
}

function renderTracker(){
  var sv=0,ap=0,iv=0,of=0;
  for(var x=0;x<apps.length;x++){
    if(apps[x].status==='saved') sv++;
    else if(apps[x].status==='applied') ap++;
    else if(apps[x].status==='interview') iv++;
    else if(apps[x].status==='offer') of++;
  }
  setEl('tk-s',sv);setEl('tk-a',ap);setEl('tk-i',iv);setEl('tk-o',of);
  var body=document.getElementById('tracker-body');
  if(!body) return;
  if(!apps.length){
    body.innerHTML='<div class="empty-state"><div class="es-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c0526a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="es-title">No applications yet</div><div class="es-sub">Save or apply to roles in Opportunities to start tracking.</div><button class="es-btn" onclick="navTo(\'jobs\')">Browse Opportunities \u2192</button></div>';
    return;
  }
  var rows='';
  for(var i=0;i<apps.length;i++){
    var a=apps[i];
    var sc={saved:'sp-sv',applied:'sp-ap',interview:'sp-iv',offer:'sp-of',closed:'sp-cl'}[a.status]||'sp-cl';
    var cap=a.status.charAt(0).toUpperCase()+a.status.slice(1);
    rows+='<tr><td style="font-weight:600;color:var(--ink)">'+a.title+'</td><td style="color:var(--rose)">'+a.org+'</td><td style="color:var(--muted2)">'+a.date+'</td>';
    rows+='<td><span class="sp '+sc+'">'+cap+'</span></td>';
    rows+='<td><select onchange="updStatus(\''+a.id+'\',this.value)">';
    var opts=['saved','applied','interview','offer','closed'];
    for(var o=0;o<opts.length;o++) rows+='<option value="'+opts[o]+'"'+(a.status===opts[o]?' selected':'')+'>'+opts[o].charAt(0).toUpperCase()+opts[o].slice(1)+'</option>';
    rows+='</select></td></tr>';
  }
  body.innerHTML='<table class="tracker-tbl"><thead><tr><th style="width:33%">Role</th><th style="width:26%">Organization</th><th style="width:14%">Date</th><th style="width:13%">Status</th><th style="width:14%">Update</th></tr></thead><tbody>'+rows+'</tbody></table>';
}

function updStatus(id,status){
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id){apps[x].status=status;break;} }
  lsSet(SK_APPS,JSON.stringify(apps));
  updateStats();renderTracker();
}

function updateStats(){
  var ap=0,iv=0,tot=apps.length;
  for(var x=0;x<apps.length;x++){
    if(apps[x].status==='applied') ap++;
    if(apps[x].status==='interview') iv++;
  }
  setEl('ts-applied',ap);setEl('ts-interviews',iv);
  setEl('kpi-a',ap);setEl('kpi-i',iv);
  var p=document.getElementById('apps-pill');
  if(p){p.textContent=tot;p.style.display=tot?'':'none';}
}

function updateProgress(){
  var boxes=document.querySelectorAll('.chk-item input[type="checkbox"]');
  var n=0;
  for(var i=0;i<boxes.length;i++) if(boxes[i].checked) n++;
  var f=document.getElementById('prog-fill');
  var c=document.getElementById('prog-count');
  if(f) f.style.width=Math.round((n/boxes.length)*100)+'%';
  if(c) c.textContent=n;
}

function dlResume(){
  var a=document.createElement('a');
  a.href='NCEvans_PM_Consulting_Resume.docx';
  a.download='NCEvans_PM_Consulting_Resume.docx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function findJob(id){
  for(var w=0;w<JOB_WEEKS.length;w++){
    for(var j=0;j<JOB_WEEKS[w].length;j++){
      if(JOB_WEEKS[w][j].id===id) return JOB_WEEKS[w][j];
    }
  }
  return null;
}

function setEl(id,val){
  var el=document.getElementById(id);
  if(el) el.textContent=val;
}

/* boot */
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}
