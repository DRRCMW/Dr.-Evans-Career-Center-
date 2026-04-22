/* ═══════════════════════════════════════════
   DR. NATALIE C. EVANS — CAREER SUITE v3
   app.js — All application logic
   ═══════════════════════════════════════════ */

/* ── CONSTANTS ── */
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const SK_JOBS = 'nce_v3_jobs';
const SK_TS   = 'nce_v3_ts';
const SK_APPS = 'nce_v3_apps';

const TITLES = {
  home: 'Dashboard', jobs: 'Opportunities', tracker: 'Application Tracker',
  prep: 'Interview Prep', growth: 'Career Growth', linkedin: 'LinkedIn'
};

/* ── JOB DATA ── */
const JOB_WEEKS = [
  [
    { id:'w1j1',cat:'consulting',title:'Senior Program Manager, Federal Health',org:'Guidehouse',loc:'Remote / Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead CDC and HRSA-funded program portfolios for a top federal health consulting firm. Own deliverable tracking, client relationships, and cross-functional implementation.',reqs:['Federal grant management','CDC/HRSA experience','DHA or MPH required','Data systems proficiency'],days:3,url:'https://www.guidehouse.com/careers'},
    { id:'w1j2',cat:'consulting',title:'Healthcare Consultant, Health Equity Practice',org:'Deloitte Government & Public Services',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$110K–$140K',match:'high',desc:'Advise state and federal clients on health disparity elimination strategies and program implementation. Doctoral-level candidates strongly preferred.',reqs:['Public health background','State/federal health experience','Implementation science','Graduate degree required'],days:5,url:'https://www2.deloitte.com/us/en/careers.html'},
    { id:'w1j3',cat:'ph',title:'Director of Programs, HIV/STI Prevention',org:'CDC Foundation',loc:'Remote',type:'Full-time',sal:'$85K–$105K',match:'high',desc:'Oversee a national portfolio of CDC-funded HIV prevention programs and coordinate technical assistance to grantees across multiple jurisdictions.',reqs:['HIV prevention expertise','Federal grant management','EHE initiative knowledge','MPH or DHA required'],days:7,url:'https://cdcfoundation.org/careers'},
    { id:'w1j4',cat:'fed',title:'Program Management Consultant, HHS',org:'Booz Allen Hamilton',loc:'Remote',type:'Full-time',sal:'$100K–$130K',match:'high',desc:'Support HHS operating divisions with program performance management, data governance, and strategic planning consulting.',reqs:['HHS/federal health experience','Performance management','Data governance','Security clearance preferred'],days:2,url:'https://careers.boozallen.com'},
    { id:'w1j5',cat:'ph',title:'Senior Health Program Specialist',org:'NASTAD',loc:'Remote',type:'Full-time',sal:'$75K–$95K',match:'high',desc:'Provide technical assistance and capacity building to state and territorial HIV/STI programs and develop national training resources.',reqs:['State health dept experience','HIV program expertise','Training facilitation','MPH required'],days:8,url:'https://nastad.org/about/careers'},
    { id:'w1j6',cat:'consulting',title:'Associate Principal, Healthcare Strategy',org:'ICF International',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$105K–$135K',match:'medium',desc:'Lead healthcare strategy engagements for federal and state health clients, blending quantitative analysis with deep program expertise.',reqs:['Healthcare consulting or management','Federal health programs','Analytical skills','Graduate degree'],days:10,url:'https://www.icf.com/careers'},
    { id:'w1j7',cat:'pm',title:'Director, Quality Improvement & Compliance',org:'Parkland Health System',loc:'Dallas, TX',type:'Full-time',sal:'$90K–$115K',match:'medium',desc:'Lead organization-wide QI initiatives and federal compliance programs for one of Texas\'s largest safety net health systems.',reqs:['QI methodology (Lean/Six Sigma)','Healthcare compliance','Team leadership','DHA/MHA/MPH preferred'],days:6,url:'https://www.parklandhealth.org/careers'},
    { id:'w1j8',cat:'ph',title:'Program Officer, Sexual & Reproductive Health',org:'NACCHO',loc:'Remote',type:'Full-time',sal:'$70K–$88K',match:'medium',desc:'Manage sexual and reproductive health program grants and coordinate technical assistance to local health departments nationally.',reqs:['Sexual health expertise','Grant management','National partnerships','MPH required'],days:12,url:'https://www.naccho.org/about/careers'}
  ],
  [
    { id:'w2j1',cat:'consulting',title:'Health Systems Transformation Consultant',org:'Accenture Federal Services',loc:'Remote / Dallas, TX',type:'Full-time',sal:'$105K–$135K',match:'high',desc:'Drive health systems transformation for HHS, HRSA, and CDC. Lead complex program implementations with measurable public health outcomes.',reqs:['Federal health agency experience','Change management','Program implementation','MPH or DHA preferred'],days:1,url:'https://www.accenture.com/us-en/careers'},
    { id:'w2j2',cat:'pm',title:'Program Director, Community Health Initiatives',org:'Episcopal Health Foundation',loc:'Houston, TX (Hybrid)',type:'Full-time',sal:'$85K–$100K',match:'high',desc:'Oversee a portfolio of community health programs focused on health equity and social determinants. Manage grant reporting and stakeholder engagement.',reqs:['Program management','Community health experience','Grant oversight','Masters degree required'],days:4,url:'https://episcopalhealth.org/about/careers/'},
    { id:'w2j3',cat:'consulting',title:'Senior Public Health Advisor, HIV Programs',org:'Palladium Group',loc:'Remote',type:'Full-time',sal:'$90K–$115K',match:'high',desc:'Provide advisory services for CDC and USAID-funded HIV programs. Support implementation science and program evaluation.',reqs:['HIV program expertise','CDC/PEPFAR experience','Implementation science','MPH/DHA required'],days:3,url:'https://www.thepalladiumgroup.com/careers'},
    { id:'w2j4',cat:'fed',title:'Federal Program Manager, STI Prevention',org:'JSI Research & Training',loc:'Remote',type:'Full-time',sal:'$80K–$100K',match:'high',desc:'Manage CDC-funded STI prevention programs across multiple states, coordinate with local health departments, and drive data-informed improvement.',reqs:['STI/HIV program management','Federal grant oversight','Multi-site coordination','Public health degree'],days:6,url:'https://www.jsi.com/careers/'},
    { id:'w2j5',cat:'consulting',title:'Healthcare Management Consultant',org:'Chartis Group',loc:'Dallas, TX (Remote Flex)',type:'Full-time',sal:'$100K–$125K',match:'high',desc:'Advise healthcare clients on strategy, operations, and performance improvement. Health equity background highly valued.',reqs:['Healthcare consulting','Strategic planning','Performance improvement','Advanced degree'],days:2,url:'https://www.chartis.com/careers'},
    { id:'w2j6',cat:'pm',title:'Director of Programs & Evaluation',org:'AIDS Foundation Houston',loc:'Houston, TX',type:'Full-time',sal:'$75K–$95K',match:'high',desc:'Lead all programmatic operations and evaluation for a comprehensive HIV services organization. Oversee federal and local grant portfolios.',reqs:['HIV program management','Program evaluation','Federal grants','MPH or related'],days:9,url:'https://www.aidshelp.org/careers'},
    { id:'w2j7',cat:'consulting',title:'Senior Analyst, Health Policy & Programs',org:'Mathematica',loc:'Remote',type:'Full-time',sal:'$85K–$110K',match:'medium',desc:'Support federal health policy research and program evaluation for HHS, CDC, and SAMHSA. Strong quantitative and qualitative skills needed.',reqs:['Health policy or evaluation','Federal health programs','Research methods','Masters required'],days:5,url:'https://www.mathematica.org/career-opportunities'},
    { id:'w2j8',cat:'pm',title:'VP of Programs, Sexual Health Services',org:'Planned Parenthood of Greater Texas',loc:'Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'medium',desc:'Provide executive leadership for all clinical and education programs across multiple sites, aligned with federal compliance standards.',reqs:['Senior program leadership','Sexual/reproductive health','Compliance and QI','Masters required'],days:11,url:'https://www.plannedparenthood.org/get-involved/jobs'}
  ],
  [
    { id:'w3j1',cat:'fed',title:'Associate Director, Federal Health Portfolio',org:'Maximus Federal',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Oversee multiple federally-contracted health programs and ensure compliance with HHS/CDC performance metrics.',reqs:['Federal health contracting','Portfolio management','Team leadership','MPH/DHA preferred'],days:2,url:'https://www.maximus.com/careers'},
    { id:'w3j2',cat:'ph',title:'Public Health Program Manager, National',org:'American Public Health Association',loc:'Washington, DC (Remote Flex)',type:'Full-time',sal:'$75K–$92K',match:'high',desc:'Manage APHA national programs and coordinate with federal partners and health departments on priority public health issues.',reqs:['Program management','Federal partnerships','Stakeholder engagement','MPH required'],days:4,url:'https://apha.org/about-apha/governance-and-staff/job-postings'},
    { id:'w3j3',cat:'consulting',title:'Senior Consultant, Health Equity & Disparities',org:'NORC at the University of Chicago',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead health equity consulting projects for federal and foundation clients. Provide expertise in disparities elimination and implementation science.',reqs:['Health equity expertise','Federal health programs','Implementation science','Doctoral preferred'],days:1,url:'https://www.norc.org'},
    { id:'w3j4',cat:'pm',title:'Director, HIV Programs & Quality Improvement',org:'Dallas County Health & Human Services',loc:'Dallas, TX',type:'Full-time',sal:'$85K–$105K',match:'high',desc:"Lead Dallas County's HIV prevention and care continuum programs. Manage federal Ryan White and CDC grants and drive countywide QI.",reqs:['HIV program leadership','Ryan White/CDC grants','Quality improvement','MPH or DHA'],days:5,url:'https://www.dallascounty.org/departments/humanresources/job-openings.php'},
    { id:'w3j5',cat:'pm',title:"Program Consultant, Women's Health Initiative",org:'Texas Health Resources',loc:'Arlington, TX (Hybrid)',type:'Full-time',sal:'$80K–$100K',match:'high',desc:"Consult on design and implementation of women's health programs across a large integrated health system.",reqs:["Women's health experience",'Healthcare consulting or PM','Community health','Graduate degree'],days:7,url:'https://texashealthcareers.org'},
    { id:'w3j6',cat:'fed',title:'Senior Advisor, Behavioral Health Programs',org:'SAMHSA (via Leidos)',loc:'Remote',type:'Contract',sal:'$95K–$125K',match:'high',desc:'Support SAMHSA programmatic operations including grant portfolio management, performance monitoring, and grantee communications.',reqs:['SAMHSA/federal behavioral health','Grant management','Program monitoring','MPH or advanced degree'],days:3,url:'https://www.leidos.com/careers'},
    { id:'w3j7',cat:'pm',title:'Health Program Strategy Manager',org:'Elevance Health',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$90K–$115K',match:'medium',desc:'Lead strategic program development for Medicaid and community health initiatives. Drive health equity outcomes with state and federal stakeholders.',reqs:['Managed care or public health PM','Medicaid/community health','Strategic planning','Graduate degree'],days:8,url:'https://careers.elevancehealth.com'},
    { id:'w3j8',cat:'ph',title:'Grants Management Specialist, Health Programs',org:'The Kresge Foundation',loc:'Remote',type:'Full-time',sal:'$80K–$100K',match:'medium',desc:'Manage a portfolio of health equity grants and provide technical assistance to grantees on social determinants and health disparities.',reqs:['Grants management','Health equity focus','Technical assistance','MPH or related'],days:10,url:'https://kresge.org/about-us/careers/'}
  ],
  [
    { id:'w4j1',cat:'consulting',title:'Principal Consultant, Public Health Strategy',org:'Deloitte Government & Public Services',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$120K–$155K',match:'high',desc:'Lead public health strategy engagements for CDC and HHS clients. Manage project delivery, client relationships, and junior consultant development.',reqs:['Public health consulting','Federal health strategy','Client management','DHA or MPH'],days:2,url:'https://www2.deloitte.com/us/en/careers.html'},
    { id:'w4j2',cat:'ph',title:'Program Officer, HIV & Sexual Health',org:'Ford Foundation',loc:'Remote / New York',type:'Full-time',sal:'$100K–$125K',match:'high',desc:'Develop and manage grantmaking focused on HIV prevention, sexual health equity, and health systems strengthening in the United States.',reqs:['HIV/sexual health expertise','Grantmaking or PM','Health equity frameworks','Advanced degree'],days:3,url:'https://www.fordfoundation.org/about/careers/'},
    { id:'w4j3',cat:'fed',title:'Director, Federal Programs & Compliance',org:'Legacy Community Health',loc:'Houston, TX',type:'Full-time',sal:'$90K–$115K',match:'high',desc:'Direct all federal grant programs including HRSA 330, Ryan White Parts A-D, and CDC prevention grants. Ensure regulatory compliance and performance excellence.',reqs:['HRSA/Ryan White management','FQHC or CHC experience','Compliance oversight','MPH or DHA'],days:1,url:'https://legacycommunityhealth.org/careers/'},
    { id:'w4j4',cat:'consulting',title:'Healthcare Program Manager, Disparities Reduction',org:'RAND Corporation',loc:'Remote',type:'Full-time',sal:'$95K–$120K',match:'high',desc:'Lead applied research and program support focused on health disparities reduction for federal and foundation clients.',reqs:['Health disparities research or PM','Federal health programs','Mixed methods','Doctoral preferred'],days:5,url:'https://www.rand.org/jobs.html'},
    { id:'w4j5',cat:'consulting',title:'Senior Manager, Public Health Programs',org:'Abt Associates',loc:'Remote',type:'Full-time',sal:'$100K–$130K',match:'high',desc:'Manage multiple federal public health program projects. Lead teams, client relationships, and technical deliverables.',reqs:['Public health PM','Federal contracts','Team leadership','MPH/DHA required'],days:4,url:'https://www.abtassociates.com/careers'},
    { id:'w4j6',cat:'pm',title:'VP, Community Health & Social Impact',org:'United Way of Metropolitan Dallas',loc:'Dallas, TX',type:'Full-time',sal:'$95K–$120K',match:'high',desc:"Lead United Way's community health portfolio and social impact strategy. Manage grant programs, federal partnerships, and cross-sector health equity.",reqs:['Senior nonprofit leadership','Community health','Grant portfolio management','Graduate degree'],days:6,url:'https://unitedwaydallas.org/careers/'},
    { id:'w4j7',cat:'consulting',title:'Health Program Consultant, Digital Health',org:'Optum / UnitedHealth Group',loc:'Dallas, TX (Hybrid)',type:'Full-time',sal:'$100K–$125K',match:'medium',desc:'Advise on health program design for Medicaid and government health clients with a focus on equity and data-driven improvement.',reqs:['Healthcare consulting or PM','Government health programs','Data analysis','Graduate degree'],days:9,url:'https://careers.unitedhealthgroup.com'},
    { id:'w4j8',cat:'fed',title:'Program Manager, Maternal & Child Health',org:'Texas DSHS / UT Health',loc:'Austin, TX (Hybrid)',type:'Full-time',sal:'$80K–$100K',match:'medium',desc:'Manage state and federally-funded MCH programs, coordinate with community partners, oversee data reporting, and drive QI initiatives.',reqs:['MCH program management','Federal grant oversight','Community partnerships','MPH required'],days:7,url:'https://www.dshs.texas.gov/jobs'}
  ]
];

/* ── STATE ── */
let apps = [];
let saved = [];
let curJobs = [];
let curFilter = 'all';
let pendingJobId = null;

/* ── STORAGE ── */
function lsGet(k) { try { return localStorage.getItem(k); } catch(e) { return null; } }
function lsSet(k,v) { try { localStorage.setItem(k,v); } catch(e) {} }

/* ── INIT ── */
function init() {
  const now = Date.now();
  let ts = parseInt(lsGet(SK_TS) || '0');
  let cached = null;
  try { cached = JSON.parse(lsGet(SK_JOBS) || 'null'); } catch(e) {}
  try { apps = JSON.parse(lsGet(SK_APPS) || '[]'); } catch(e) { apps = []; }

  if (!ts || !cached || (now - ts) >= WEEK_MS) {
    const wkIdx = Math.floor(now / WEEK_MS) % JOB_WEEKS.length;
    curJobs = JOB_WEEKS[wkIdx];
    lsSet(SK_JOBS, JSON.stringify(curJobs));
    lsSet(SK_TS, String(now));
    ts = now;
  } else {
    curJobs = cached;
  }

  saved = apps.filter(a => a.status === 'saved').map(a => a.id);

  /* refresh UI */
  const fd = new Date(ts), nd = new Date(ts + WEEK_MS);
  const fmt = d => d.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  const wc = document.getElementById('week-chip');
  const nn = document.getElementById('nxt-note');
  const rn = document.getElementById('refresh-note');
  const jp = document.getElementById('jobs-pill');
  if (wc) wc.textContent = 'Week of ' + fd.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  if (nn) nn.textContent = 'Next refresh: ' + fmt(nd);
  if (rn) rn.textContent = '↻ Next refresh: ' + fmt(nd);
  if (jp) jp.textContent = curJobs.length;

  updateStats();
  renderTracker();
  renderJobs(curJobs);
}

/* ══ NAVIGATION ══════════════════════════════ */
function navTo(viewId) {
  /* Hide all views */
  var views = document.querySelectorAll('.view');
  for (var i = 0; i < views.length; i++) { views[i].classList.remove('active'); }

  /* Deactivate all sidebar buttons */
  var navBtns = document.querySelectorAll('.nav-btn');
  for (var j = 0; j < navBtns.length; j++) { navBtns[j].classList.remove('active'); }

  /* Deactivate bottom nav */
  var bnavBtns = document.querySelectorAll('.bn');
  for (var k = 0; k < bnavBtns.length; k++) { bnavBtns[k].classList.remove('active'); }

  /* Show target view */
  var target = document.getElementById('v-' + viewId);
  if (target) { target.classList.add('active'); }

  /* Activate correct nav buttons */
  var sideBtn = document.getElementById('nb-' + viewId);
  if (sideBtn) { sideBtn.classList.add('active'); }

  var bnavBtn = document.getElementById('bnav-' + viewId);
  if (bnavBtn) { bnavBtn.classList.add('active'); }

  /* Update page title */
  var ptEl = document.getElementById('page-title');
  if (ptEl) { ptEl.textContent = TITLES[viewId] || viewId; }

  /* Scroll to top */
  var content = document.querySelector('.content');
  if (content) { content.scrollTop = 0; }

  /* Close sidebar on mobile */
  var sb = document.getElementById('sidebar');
  var ov = document.getElementById('sb-overlay');
  if (sb) { sb.classList.remove('open'); }
  if (ov) { ov.classList.remove('show'); }
}

/* ══ PREP TABS ═══════════════════════════════ */
function showPrep(panelId) {
  /* Hide all panels */
  var panels = document.querySelectorAll('.prep-panel');
  for (var i = 0; i < panels.length; i++) { panels[i].classList.remove('active'); }

  /* Deactivate all tabs */
  var tabs = document.querySelectorAll('.tab');
  for (var j = 0; j < tabs.length; j++) { tabs[j].classList.remove('active'); }

  /* Show target */
  var panel = document.getElementById('prep-' + panelId);
  if (panel) { panel.classList.add('active'); }

  var tab = document.getElementById('tab-' + panelId);
  if (tab) { tab.classList.add('active'); }
}

/* ══ SIDEBAR TOGGLE ══════════════════════════ */
function toggleSidebar() {
  var sb = document.getElementById('sidebar');
  var ov = document.getElementById('sb-overlay');
  if (!sb) return;
  var isOpen = sb.classList.contains('open');
  if (isOpen) {
    sb.classList.remove('open');
    if (ov) ov.classList.remove('show');
  } else {
    sb.classList.add('open');
    if (ov) ov.classList.add('show');
  }
}

/* ══ FILTER JOBS ═════════════════════════════ */
function filterJobs(cat, btn) {
  curFilter = cat;

  /* Update chips */
  var chips = document.querySelectorAll('.fchip');
  for (var i = 0; i < chips.length; i++) { chips[i].classList.remove('active'); }
  if (btn) { btn.classList.add('active'); }

  var filtered = cat === 'all' ? curJobs : curJobs.filter(function(j) { return j.cat === cat; });
  renderJobs(filtered);
}

/* ══ RENDER JOBS ═════════════════════════════ */
function renderJobs(jobs) {
  var out = document.getElementById('jobs-out');
  if (!out) return;

  if (!jobs || !jobs.length) {
    out.innerHTML = '<div style="text-align:center;padding:40px;color:#9b7080;font-style:italic">No roles in this category this week.</div>';
    return;
  }

  out.innerHTML = jobs.map(function(j) {
    var isApp = apps.some(function(a) { return a.id === j.id && a.status === 'applied'; });
    var isSv  = saved.indexOf(j.id) !== -1;
    return '<div class="job-card" id="jc-' + j.id + '">' +
      '<div class="jc-top">' +
        '<div>' +
          '<div class="jc-title">' + j.title + '</div>' +
          '<div class="jc-org">' + j.org + '</div>' +
        '</div>' +
        '<span class="jmatch ' + (j.match === 'high' ? 'match-hi' : 'match-md') + '">' + (j.match === 'high' ? '✦ Strong match' : '◆ Good match') + '</span>' +
      '</div>' +
      '<div class="jc-pills">' +
        '<span class="pill pill-loc">' + j.loc + '</span>' +
        '<span class="pill pill-type">' + j.type + '</span>' +
        '<span class="pill pill-sal">' + j.sal + '</span>' +
        '<span class="pill pill-day">' + j.days + 'd ago</span>' +
      '</div>' +
      '<p class="jc-desc">' + j.desc + '</p>' +
      '<p class="jc-reqs"><strong>Key requirements:</strong> ' + j.reqs.join(' · ') + '</p>' +
      '<div class="jc-actions">' +
        '<button class="btn-apply' + (isApp ? ' done' : '') + '" id="apply-btn-' + j.id + '" onclick="openApplyModal(\'' + j.id + '\')">' + (isApp ? '✓ Applied' : 'Apply Now') + '</button>' +
        '<button class="btn-save' + (isSv ? ' saved' : '') + '" id="save-btn-' + j.id + '" onclick="saveJob(\'' + j.id + '\')">' + (isSv ? '✓ Saved' : 'Save') + '</button>' +
        '<a class="btn-view" href="' + j.url + '" target="_blank" rel="noopener">View Listing ↗</a>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ══ MODAL ═══════════════════════════════════ */
function openApplyModal(jobId) {
  if (apps.some(function(a) { return a.id === jobId && a.status === 'applied'; })) return;
  var j = findJob(jobId);
  if (!j) return;
  pendingJobId = jobId;
  var titleEl = document.getElementById('modal-title');
  var descEl  = document.getElementById('modal-desc');
  if (titleEl) titleEl.textContent = 'Apply to ' + j.title;
  if (descEl)  descEl.textContent  = 'Ready to apply to ' + j.title + ' at ' + j.org + '? Download your updated resume to attach, then visit their careers page.';
  var modal = document.getElementById('apply-modal');
  if (modal) modal.classList.add('open');
}

function closeApplyModal() {
  var modal = document.getElementById('apply-modal');
  if (modal) modal.classList.remove('open');
  pendingJobId = null;
}

function confirmApply() {
  if (!pendingJobId) return;
  var j = findJob(pendingJobId);
  if (!j) return;

  var existing = apps.find(function(a) { return a.id === j.id; });
  if (existing) {
    existing.status = 'applied';
  } else {
    apps.push({ id: j.id, title: j.title, org: j.org, status: 'applied', date: new Date().toLocaleDateString() });
  }
  persistApps();

  var btn = document.getElementById('apply-btn-' + j.id);
  if (btn) { btn.textContent = '✓ Applied'; btn.classList.add('done'); }

  updateStats();
  renderTracker();
  closeApplyModal();
  dlResume();
}

/* ══ SAVE JOB ════════════════════════════════ */
function saveJob(jobId) {
  var j = findJob(jobId);
  if (!j || saved.indexOf(jobId) !== -1) return;
  saved.push(jobId);

  if (!apps.find(function(a) { return a.id === jobId; })) {
    apps.push({ id: j.id, title: j.title, org: j.org, status: 'saved', date: new Date().toLocaleDateString() });
  }
  persistApps();

  var btn = document.getElementById('save-btn-' + jobId);
  if (btn) { btn.textContent = '✓ Saved'; btn.classList.add('saved'); }

  updateStats();
  renderTracker();
}

/* ══ TRACKER ═════════════════════════════════ */
function renderTracker() {
  var sv = apps.filter(function(a) { return a.status === 'saved'; }).length;
  var ap = apps.filter(function(a) { return a.status === 'applied'; }).length;
  var iv = apps.filter(function(a) { return a.status === 'interview'; }).length;
  var of = apps.filter(function(a) { return a.status === 'offer'; }).length;

  setEl('tk-s', sv); setEl('tk-a', ap); setEl('tk-i', iv); setEl('tk-o', of);

  var body = document.getElementById('tracker-body');
  if (!body) return;

  if (!apps.length) {
    body.innerHTML = '<div class="empty-state"><div class="es-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="es-title">No applications yet</div><div class="es-sub">Save or apply to roles in Opportunities to start tracking.</div><button class="es-btn" onclick="navTo(\'jobs\')">Browse Opportunities →</button></div>';
    return;
  }

  var rows = apps.map(function(a) {
    var sc = { saved:'sp-saved', applied:'sp-applied', interview:'sp-interview', offer:'sp-offer', closed:'sp-closed' }[a.status] || 'sp-closed';
    var cap = a.status.charAt(0).toUpperCase() + a.status.slice(1);
    return '<tr>' +
      '<td style="font-weight:600;color:var(--ink)">' + a.title + '</td>' +
      '<td style="color:var(--rose)">' + a.org + '</td>' +
      '<td style="color:var(--muted2)">' + a.date + '</td>' +
      '<td><span class="status-pill ' + sc + '">' + cap + '</span></td>' +
      '<td><select onchange="updateAppStatus(\'' + a.id + '\',this.value)">' +
        ['saved','applied','interview','offer','closed'].map(function(s) {
          return '<option value="' + s + '"' + (a.status === s ? ' selected' : '') + '>' + s.charAt(0).toUpperCase() + s.slice(1) + '</option>';
        }).join('') +
      '</select></td>' +
    '</tr>';
  }).join('');

  body.innerHTML = '<table class="tracker-table">' +
    '<thead><tr>' +
      '<th style="width:34%">Role</th><th style="width:26%">Organization</th>' +
      '<th style="width:13%">Date</th><th style="width:13%">Status</th><th style="width:14%">Update</th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table>';
}

function updateAppStatus(appId, newStatus) {
  var a = apps.find(function(x) { return x.id === appId; });
  if (a) { a.status = newStatus; persistApps(); updateStats(); renderTracker(); }
}

/* ══ STATS ═══════════════════════════════════ */
function updateStats() {
  var ap = apps.filter(function(x) { return x.status === 'applied'; }).length;
  var iv = apps.filter(function(x) { return x.status === 'interview'; }).length;
  var tot = apps.length;

  setEl('ts-applied',    ap);
  setEl('ts-interviews', iv);
  setEl('kpi-a',         ap);
  setEl('kpi-i',         iv);

  var apPill = document.getElementById('apps-pill');
  if (apPill) { apPill.textContent = tot; apPill.style.display = tot ? '' : 'none'; }
}

/* ══ LINKEDIN CHECKLIST ══════════════════════ */
function updateCheckProgress() {
  var checkboxes = document.querySelectorAll('.chk-item input[type="checkbox"]');
  var checked = 0;
  for (var i = 0; i < checkboxes.length; i++) { if (checkboxes[i].checked) checked++; }
  var fill  = document.getElementById('prog-fill');
  var count = document.getElementById('prog-count');
  if (fill)  fill.style.width  = Math.round((checked / checkboxes.length) * 100) + '%';
  if (count) count.textContent = checked;
}

/* ══ RESUME DOWNLOAD ═════════════════════════ */
function dlResume() {
  var a = document.createElement('a');
  a.href = 'NCEvans_PM_Consulting_Resume.docx';
  a.download = 'NCEvans_PM_Consulting_Resume.docx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ══ HELPERS ═════════════════════════════════ */
function findJob(id) {
  for (var i = 0; i < JOB_WEEKS.length; i++) {
    for (var j = 0; j < JOB_WEEKS[i].length; j++) {
      if (JOB_WEEKS[i][j].id === id) return JOB_WEEKS[i][j];
    }
  }
  return null;
}

function setEl(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}

function persistApps() {
  lsSet(SK_APPS, JSON.stringify(apps));
}

/* ══ BOOT ════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', init);
