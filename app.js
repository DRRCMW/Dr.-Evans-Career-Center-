/* DR. NATALIE C. EVANS — CAREER SUITE v6
   60 curated roles · 6-week rotation · nonprofit + consulting + PM + federal + public health
   All applyUrl fields go directly to the company's own careers page
*/

var WEEK_MS = 7*24*60*60*1000;
var SK_JOBS = 'nce_v6_jobs';
var SK_TS   = 'nce_v6_ts';
var SK_APPS = 'nce_v6_apps';

var TITLES = {
  home:'Dashboard', jobs:'Opportunities', tracker:'Application Tracker',
  prep:'Interview Prep', growth:'Career Growth', linkedin:'LinkedIn'
};

/* ══════════════════════════════════════════════════════════
   JOB DATA  —  6 weeks × 10 roles = 60 total
   cat values: consulting | pm | ph | nonprofit | fed
   applyUrl   → direct company careers / application page
   liSearch   → LinkedIn recruiter/hiring manager search
══════════════════════════════════════════════════════════ */
var JOB_WEEKS = [

  /* ── WEEK 1 ── Consulting + Federal ── */
  [
    { id:'w1j1', cat:'consulting', title:'Senior Program Manager, Federal Health', org:'Guidehouse', loc:'Remote / Dallas, TX', type:'Full-time', sal:'$95K–$120K', match:'high',
      desc:'Lead CDC and HRSA-funded program portfolios for a top federal health consulting firm. Own deliverable tracking, client relationships, and cross-functional implementation.',
      reqs:['Federal grant management','CDC/HRSA experience','DHA or MPH required','Data systems proficiency'], days:3,
      applyUrl:'https://guidehouse.com/careers/open-positions',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Guidehouse' },

    { id:'w1j2', cat:'consulting', title:'Healthcare Consultant, Health Equity Practice', org:'Deloitte Government & Public Services', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$110K–$140K', match:'high',
      desc:'Advise state and federal clients on health disparity elimination strategies and program implementation. Doctoral-level candidates strongly preferred.',
      reqs:['Public health background','State/federal health experience','Implementation science','Graduate degree required'], days:5,
      applyUrl:'https://apply.deloitte.com/careers/SearchJobs/?3_8_3=30730',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition+government&company=Deloitte' },

    { id:'w1j3', cat:'fed', title:'Director of Programs, HIV/STI Prevention', org:'CDC Foundation', loc:'Remote', type:'Full-time', sal:'$85K–$105K', match:'high',
      desc:'Oversee a national portfolio of CDC-funded HIV prevention programs and coordinate technical assistance to grantees across multiple jurisdictions.',
      reqs:['HIV prevention expertise','Federal grant management','EHE initiative knowledge','MPH or DHA required'], days:7,
      applyUrl:'https://cdcfoundation.org/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+hiring+manager&company=CDC+Foundation' },

    { id:'w1j4', cat:'consulting', title:'Program Management Consultant, HHS', org:'Booz Allen Hamilton', loc:'Remote', type:'Full-time', sal:'$100K–$130K', match:'high',
      desc:'Support HHS operating divisions with program performance management, data governance, and strategic planning consulting.',
      reqs:['HHS/federal health experience','Performance management','Data governance','Security clearance preferred'], days:2,
      applyUrl:'https://careers.boozallen.com/jobs?keywords=program+manager+health',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Booz+Allen+Hamilton' },

    { id:'w1j5', cat:'nonprofit', title:'Senior Health Program Manager', org:'Susan G. Komen', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$75K–$95K', match:'high',
      desc:'Manage Komen\'s community health and grant programs focused on breast health equity across the South Central region. Oversee grantees and community partnerships.',
      reqs:['Nonprofit program management','Health equity focus','Grant oversight','MPH preferred'], days:4,
      applyUrl:'https://www.komen.org/about-komen/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+hiring+manager&company=Susan+G.+Komen' },

    { id:'w1j6', cat:'nonprofit', title:'Director of Community Health Programs', org:'United Way of Metropolitan Dallas', loc:'Dallas, TX', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Lead the design, implementation, and evaluation of community health initiatives. Manage federal and foundation grant portfolios and drive cross-sector partnerships.',
      reqs:['Nonprofit program leadership','Community health','Grant management','Graduate degree preferred'], days:6,
      applyUrl:'https://unitedwaydallas.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=HR+hiring+manager&company=United+Way+of+Metropolitan+Dallas' },

    { id:'w1j7', cat:'consulting', title:'Associate Principal, Healthcare Strategy', org:'ICF International', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$105K–$135K', match:'medium',
      desc:'Lead healthcare strategy engagements for federal and state health clients, blending quantitative analysis with deep program expertise.',
      reqs:['Healthcare consulting','Federal health programs','Analytical skills','Graduate degree'], days:10,
      applyUrl:'https://www.icf.com/careers/open-positions?search=health',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=ICF' },

    { id:'w1j8', cat:'ph', title:'Senior Health Program Specialist', org:'NASTAD', loc:'Remote', type:'Full-time', sal:'$75K–$92K', match:'high',
      desc:'Provide technical assistance and capacity building to state and territorial HIV/STI programs and develop national training resources.',
      reqs:['State health dept experience','HIV program expertise','Training facilitation','MPH required'], days:8,
      applyUrl:'https://nastad.org/about/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=NASTAD' },

    { id:'w1j9', cat:'nonprofit', title:'Program Director, HIV Services', org:'AIDS Services of Dallas', loc:'Dallas, TX', type:'Full-time', sal:'$65K–$85K', match:'high',
      desc:'Direct all HIV prevention, care coordination, and housing programs. Oversee federal Ryan White and HOPWA grant compliance and grantee reporting.',
      reqs:['HIV program management','Ryan White grant experience','Team leadership','Public health degree'], days:5,
      applyUrl:'https://asdallas.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+director&company=AIDS+Services+of+Dallas' },

    { id:'w1j10', cat:'fed', title:'Program Management Consultant, Behavioral Health', org:'Leidos (SAMHSA Support)', loc:'Remote', type:'Contract', sal:'$95K–$125K', match:'high',
      desc:'Support SAMHSA programmatic operations including grant portfolio management, performance monitoring, and grantee communications. Federal contractor role.',
      reqs:['SAMHSA/federal behavioral health','Grant management','Program monitoring','MPH or advanced degree'], days:3,
      applyUrl:'https://careers.leidos.com/jobs?q=program+manager+health',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Leidos' }
  ],

  /* ── WEEK 2 ── Nonprofit Heavy + Dallas Area ── */
  [
    { id:'w2j1', cat:'nonprofit', title:'Vice President of Programs', org:'Metrocare Services', loc:'Dallas, TX', type:'Full-time', sal:'$90K–$115K', match:'high',
      desc:'Provide executive leadership for all behavioral health and community programs across North Texas. Oversee federal, state, and foundation grant portfolios and QI frameworks.',
      reqs:['Senior program leadership','Behavioral/public health background','Federal grants','Graduate degree required'], days:2,
      applyUrl:'https://www.metrocareservices.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+HR&company=Metrocare+Services' },

    { id:'w2j2', cat:'nonprofit', title:'Director of Health Programs', org:'CitySquare', loc:'Dallas, TX', type:'Full-time', sal:'$75K–$95K', match:'high',
      desc:'Lead community health and social determinants programs for one of Dallas\'s largest poverty-focused nonprofits. Manage HHS, HRSA, and foundation-funded initiatives.',
      reqs:['Nonprofit program management','Social determinants/health equity','Grant management','MPH or related'], days:4,
      applyUrl:'https://citysquare.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=CitySquare' },

    { id:'w2j3', cat:'consulting', title:'Health Systems Transformation Consultant', org:'Accenture Federal Services', loc:'Remote / Dallas, TX', type:'Full-time', sal:'$105K–$135K', match:'high',
      desc:'Drive health systems transformation for HHS, HRSA, and CDC. Lead complex program implementations with measurable public health outcomes.',
      reqs:['Federal health agency experience','Change management','Program implementation','MPH or DHA preferred'], days:1,
      applyUrl:'https://www.accenture.com/us-en/careers/jobsearch?jk=health+program',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition+federal&company=Accenture+Federal+Services' },

    { id:'w2j4', cat:'nonprofit', title:'Program Manager, Maternal & Child Health', org:'Parkland Foundation', loc:'Dallas, TX', type:'Full-time', sal:'$72K–$92K', match:'high',
      desc:'Manage Parkland Foundation\'s maternal and child health grant programs, coordinate with Parkland Health clinicians, and drive community health outcomes for underserved populations.',
      reqs:['MCH program management','Nonprofit or health system experience','Grant reporting','MPH preferred'], days:6,
      applyUrl:'https://careers.parklandhealth.org/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Parkland+Health' },

    { id:'w2j5', cat:'nonprofit', title:'Senior Program Officer, Health Equity', org:'Communities Foundation of Texas', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Design and manage health equity grantmaking and programs. Provide technical assistance to nonprofit grantees and lead health-focused collaborative initiatives.',
      reqs:['Health equity grantmaking or PM','Nonprofit sector knowledge','Community partnerships','Graduate degree'], days:3,
      applyUrl:'https://www.cftexas.org/about/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=program+officer+hiring&company=Communities+Foundation+of+Texas' },

    { id:'w2j6', cat:'ph', title:'Senior Public Health Advisor, HIV Programs', org:'Palladium Group', loc:'Remote', type:'Full-time', sal:'$90K–$115K', match:'high',
      desc:'Provide advisory services for CDC and USAID-funded HIV prevention and treatment programs. Support implementation science and program evaluation.',
      reqs:['HIV program expertise','CDC/PEPFAR experience','Implementation science','MPH/DHA required'], days:3,
      applyUrl:'https://thepalladiumgroup.com/jobs',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Palladium+Group' },

    { id:'w2j7', cat:'nonprofit', title:'Director of Community Impact', org:'North Texas Food Bank', loc:'Dallas, TX', type:'Full-time', sal:'$80K–$100K', match:'medium',
      desc:'Lead NTFB\'s health-focused community impact programs including nutrition access and chronic disease prevention. Oversee federal and foundation grants and evaluate program outcomes.',
      reqs:['Nonprofit program leadership','Social determinants/food security','Grant management','Graduate degree preferred'], days:7,
      applyUrl:'https://www.ntfb.org/about-us/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+HR&company=North+Texas+Food+Bank' },

    { id:'w2j8', cat:'pm', title:'Program Director, Community Health Initiatives', org:'Episcopal Health Foundation', loc:'Houston, TX (Hybrid)', type:'Full-time', sal:'$85K–$105K', match:'high',
      desc:'Oversee a portfolio of community health programs focused on health equity and social determinants. Manage grant reporting and stakeholder engagement across Texas.',
      reqs:['Program management','Community health experience','Grant oversight','Masters degree required'], days:4,
      applyUrl:'https://episcopalhealth.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=Episcopal+Health+Foundation' },

    { id:'w2j9', cat:'nonprofit', title:'Health Program Manager', org:'Mental Health America of Greater Dallas', loc:'Dallas, TX', type:'Full-time', sal:'$62K–$80K', match:'high',
      desc:'Manage mental health promotion and prevention programs including school-based initiatives, workplace wellness, and community education. Oversee program staff and grant deliverables.',
      reqs:['Mental/public health program management','Community programming','Grant reporting','Bachelor\'s required, MPH preferred'], days:9,
      applyUrl:'https://www.mhadallas.org/about-us/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Mental+Health+America+of+Greater+Dallas' },

    { id:'w2j10', cat:'fed', title:'Federal Program Manager, STI Prevention', org:'JSI Research & Training', loc:'Remote', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Manage CDC-funded STI prevention programs across multiple states, coordinate with local health departments, and drive data-informed program improvement.',
      reqs:['STI/HIV program management','Federal grant oversight','Multi-site coordination','Public health degree'], days:6,
      applyUrl:'https://www.jsi.com/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+hiring&company=JSI+Research+%26+Training' }
  ],

  /* ── WEEK 3 ── Consulting + Nonprofit Mix ── */
  [
    { id:'w3j1', cat:'consulting', title:'Senior Consultant, Health Equity & Disparities', org:'NORC at the University of Chicago', loc:'Remote', type:'Full-time', sal:'$95K–$120K', match:'high',
      desc:'Lead health equity consulting projects for federal and foundation clients. Provide expertise in disparities elimination and implementation science.',
      reqs:['Health equity expertise','Federal health programs','Implementation science','Doctoral preferred'], days:1,
      applyUrl:'https://www.norc.org/jobs',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=NORC+at+the+University+of+Chicago' },

    { id:'w3j2', cat:'nonprofit', title:'Director, HIV Programs & Quality Improvement', org:'Dallas County Health & Human Services', loc:'Dallas, TX', type:'Full-time', sal:'$85K–$105K', match:'high',
      desc:'Lead Dallas County HIV prevention and care continuum programs. Manage federal Ryan White and CDC grants and drive countywide QI initiatives.',
      reqs:['HIV program leadership','Ryan White/CDC grants','Quality improvement','MPH or DHA'], days:5,
      applyUrl:'https://www.governmentjobs.com/careers/dallasco',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=HR+hiring+health&company=Dallas+County' },

    { id:'w3j3', cat:'nonprofit', title:'Vice President of Programs & Evaluation', org:'Genesis Women\'s Shelter', loc:'Dallas, TX', type:'Full-time', sal:'$85K–$105K', match:'high',
      desc:'Provide executive leadership for all shelter, counseling, and community education programs. Oversee federal HHS, DOJ, and foundation grants and lead program evaluation efforts.',
      reqs:['Senior nonprofit program leadership','Trauma-informed program management','Federal grants','Graduate degree'], days:3,
      applyUrl:'https://www.genesis.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+HR&company=Genesis+Women%27s+Shelter' },

    { id:'w3j4', cat:'consulting', title:'Healthcare Management Consultant', org:'Chartis Group', loc:'Dallas, TX (Remote Flex)', type:'Full-time', sal:'$100K–$125K', match:'high',
      desc:'Advise healthcare clients on strategy, operations, and performance improvement. Health equity and federally-funded program background highly valued.',
      reqs:['Healthcare consulting','Strategic planning','Performance improvement','Advanced degree'], days:2,
      applyUrl:'https://www.chartis.com/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Chartis+Group' },

    { id:'w3j5', cat:'nonprofit', title:'Program Director, Sexual & Reproductive Health', org:'Planned Parenthood of Greater Texas', loc:'Dallas, TX', type:'Full-time', sal:'$85K–$108K', match:'high',
      desc:'Provide strategic leadership for all clinical and education programs across the Dallas region. Align program delivery with Title X and federal compliance standards.',
      reqs:['Senior program leadership','Sexual/reproductive health','Federal compliance','Masters required'], days:7,
      applyUrl:'https://www.plannedparenthood.org/planned-parenthood-greater-texas/work-with-us',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+HR&company=Planned+Parenthood+of+Greater+Texas' },

    { id:'w3j6', cat:'pm', title:'Senior Program Manager, HIV/STI Services', org:'AIDS Foundation Houston', loc:'Houston, TX', type:'Full-time', sal:'$75K–$95K', match:'high',
      desc:'Lead all programmatic operations and evaluation for a comprehensive HIV services organization. Oversee federal Ryan White, HRSA, and local grant portfolios.',
      reqs:['HIV program management','Program evaluation','Federal grants','MPH or related'], days:9,
      applyUrl:'https://www.aidshelp.org/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+director&company=AIDS+Foundation+Houston' },

    { id:'w3j7', cat:'fed', title:'Associate Director, Federal Health Portfolio', org:'Maximus Federal', loc:'Remote', type:'Full-time', sal:'$95K–$120K', match:'high',
      desc:'Oversee multiple federally-contracted health programs and ensure compliance with HHS/CDC performance metrics.',
      reqs:['Federal health contracting','Portfolio management','Team leadership','MPH/DHA preferred'], days:2,
      applyUrl:'https://careers.maximus.com/search-jobs',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Maximus' },

    { id:'w3j8', cat:'nonprofit', title:'Program Manager, Community Health', org:'Mosaic Family Services', loc:'Dallas, TX', type:'Full-time', sal:'$60K–$78K', match:'high',
      desc:'Manage health and wellness programs for refugee and immigrant populations including health navigation, education, and screening services. Oversee federal and foundation grants.',
      reqs:['Community health program management','Culturally-competent services','Grant management','Bachelor\'s required, MPH preferred'], days:8,
      applyUrl:'https://mosaicfamilyservices.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Mosaic+Family+Services' },

    { id:'w3j9', cat:'ph', title:'Public Health Program Manager', org:'American Public Health Association', loc:'Washington, DC (Remote Flex)', type:'Full-time', sal:'$75K–$92K', match:'high',
      desc:'Manage APHA national programs and coordinate with federal partners and health departments on priority public health issues.',
      reqs:['Program management','Federal partnerships','Stakeholder engagement','MPH required'], days:4,
      applyUrl:'https://apha.org/about-apha/governance-and-staff/job-postings',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=American+Public+Health+Association' },

    { id:'w3j10', cat:'consulting', title:'Senior Manager, Public Health Programs', org:'Abt Associates', loc:'Remote', type:'Full-time', sal:'$100K–$130K', match:'high',
      desc:'Manage multiple federal public health program projects. Lead teams, client relationships, and technical deliverables for HHS and CDC-funded work.',
      reqs:['Public health PM','Federal contracts','Team leadership','MPH/DHA required'], days:4,
      applyUrl:'https://www.abtassociates.com/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Abt+Associates' }
  ],

  /* ── WEEK 4 ── Federal + Large Consulting ── */
  [
    { id:'w4j1', cat:'consulting', title:'Principal Consultant, Public Health Strategy', org:'Deloitte Government & Public Services', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$120K–$155K', match:'high',
      desc:'Lead public health strategy engagements for CDC and HHS clients. Manage project delivery, client relationships, and junior consultant development.',
      reqs:['Public health consulting','Federal health strategy','Client management','DHA or MPH'], days:2,
      applyUrl:'https://apply.deloitte.com/careers/SearchJobs/?3_8_3=30730',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+government+health&company=Deloitte' },

    { id:'w4j2', cat:'ph', title:'Program Officer, HIV & Sexual Health', org:'Ford Foundation', loc:'Remote / New York', type:'Full-time', sal:'$100K–$125K', match:'high',
      desc:'Develop and manage grantmaking focused on HIV prevention, sexual health equity, and health systems strengthening in the United States.',
      reqs:['HIV/sexual health expertise','Grantmaking or PM','Health equity frameworks','Advanced degree'], days:3,
      applyUrl:'https://www.fordfoundation.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Ford+Foundation' },

    { id:'w4j3', cat:'fed', title:'Director, Federal Programs & Compliance', org:'Legacy Community Health (FQHC)', loc:'Houston, TX', type:'Full-time', sal:'$90K–$115K', match:'high',
      desc:'Direct all federal grant programs including HRSA 330, Ryan White Parts A-D, and CDC prevention grants. Ensure regulatory compliance and performance excellence.',
      reqs:['HRSA/Ryan White management','FQHC or CHC experience','Compliance oversight','MPH or DHA'], days:1,
      applyUrl:'https://legacycommunityhealth.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+HR+hiring&company=Legacy+Community+Health' },

    { id:'w4j4', cat:'consulting', title:'Healthcare Program Manager, Disparities Reduction', org:'RAND Corporation', loc:'Remote', type:'Full-time', sal:'$95K–$120K', match:'high',
      desc:'Lead applied research and program support focused on health disparities reduction for federal and foundation clients.',
      reqs:['Health disparities research or PM','Federal health programs','Mixed methods','Doctoral preferred'], days:5,
      applyUrl:'https://www.rand.org/jobs.html',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=RAND+Corporation' },

    { id:'w4j5', cat:'nonprofit', title:'VP, Community Health & Social Impact', org:'United Way of Metropolitan Dallas', loc:'Dallas, TX', type:'Full-time', sal:'$95K–$120K', match:'high',
      desc:'Lead United Way\'s community health portfolio and social impact strategy. Manage grant programs, federal partnerships, and cross-sector health equity initiatives.',
      reqs:['Senior nonprofit leadership','Community health','Grant portfolio management','Graduate degree'], days:6,
      applyUrl:'https://unitedwaydallas.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=HR+hiring+manager&company=United+Way+of+Metropolitan+Dallas' },

    { id:'w4j6', cat:'nonprofit', title:'Program Officer, Health Equity', org:'The Kresge Foundation', loc:'Remote', type:'Full-time', sal:'$85K–$110K', match:'high',
      desc:'Manage a portfolio of health equity grants and provide technical assistance to grantees focused on social determinants and health disparities.',
      reqs:['Health equity grantmaking','Technical assistance','Community health experience','MPH or related'], days:10,
      applyUrl:'https://kresge.org/about-us/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+hiring+manager&company=Kresge+Foundation' },

    { id:'w4j7', cat:'consulting', title:'Health Program Consultant', org:'Optum / UnitedHealth Group', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$100K–$125K', match:'medium',
      desc:'Advise on health program design for Medicaid and government health clients with a focus on equity and data-driven improvement.',
      reqs:['Healthcare consulting or PM','Government health programs','Data analysis','Graduate degree'], days:9,
      applyUrl:'https://careers.unitedhealthgroup.com/job-search-results/?keyword=program+manager',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition+health&company=UnitedHealth+Group' },

    { id:'w4j8', cat:'nonprofit', title:'Senior Program Manager, Health Initiatives', org:'Texas Health Resources Foundation', loc:'Arlington, TX (Hybrid)', type:'Full-time', sal:'$75K–$95K', match:'high',
      desc:'Manage community health and wellness programs across Texas Health Resources\' system. Oversee federal and foundation grants and coordinate with clinical leadership.',
      reqs:['Health system or nonprofit PM','Community health','Grant reporting','Graduate degree preferred'], days:7,
      applyUrl:'https://texashealthcareers.org/search/?q=program',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Texas+Health+Resources' },

    { id:'w4j9', cat:'fed', title:'Senior Program Manager, Maternal & Child Health', org:'Texas DSHS / UT Health', loc:'Austin, TX (Hybrid)', type:'Full-time', sal:'$80K–$100K', match:'medium',
      desc:'Manage state and federally-funded MCH programs, coordinate with community partners, oversee data reporting, and drive QI initiatives statewide.',
      reqs:['MCH program management','Federal grant oversight','Community partnerships','MPH required'], days:7,
      applyUrl:'https://www.governmentjobs.com/careers/TXHHS',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+HR&company=Texas+Department+of+State+Health+Services' },

    { id:'w4j10', cat:'ph', title:'Program Officer, Sexual & Reproductive Health', org:'NACCHO', loc:'Remote', type:'Full-time', sal:'$70K–$88K', match:'high',
      desc:'Manage sexual and reproductive health program grants and coordinate technical assistance to local health departments nationally.',
      reqs:['Sexual health expertise','Grant management','National partnerships','MPH required'], days:12,
      applyUrl:'https://www.naccho.org/about/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=NACCHO' }
  ],

  /* ── WEEK 5 ── Nonprofit Focus + DFW Area ── */
  [
    { id:'w5j1', cat:'nonprofit', title:'Director of Programs, Community Health', org:'Baylor Scott & White Health Foundation', loc:'Dallas, TX', type:'Full-time', sal:'$85K–$110K', match:'high',
      desc:'Lead community benefit and health equity programs across Baylor Scott & White\'s North Texas footprint. Manage federal, state, and foundation grant portfolios.',
      reqs:['Health system or nonprofit PM','Community health equity','Grant management','Graduate degree required'], days:2,
      applyUrl:'https://jobs.bswhealth.com/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Baylor+Scott+%26+White+Health' },

    { id:'w5j2', cat:'nonprofit', title:'Senior Program Manager, Women\'s Health', org:'Texas Women\'s Foundation', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$72K–$92K', match:'high',
      desc:'Manage women\'s health and economic security programs and grantmaking. Build community partnerships and oversee data collection and program evaluation.',
      reqs:['Nonprofit program management','Women\'s health or gender equity','Grant reporting','Bachelor\'s required, graduate preferred'], days:5,
      applyUrl:'https://txwf.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=Texas+Women%27s+Foundation' },

    { id:'w5j3', cat:'nonprofit', title:'Program Director, Health & Human Services', org:'Family Gateway', loc:'Dallas, TX', type:'Full-time', sal:'$65K–$85K', match:'high',
      desc:'Lead health, childcare, and family support programs for families experiencing homelessness. Oversee HUD, HHS, and city grant portfolios and ensure federal compliance.',
      reqs:['Nonprofit program management','HHS federal grants','Case management/social services background','Bachelor\'s required'], days:4,
      applyUrl:'https://www.familygateway.org/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Family+Gateway' },

    { id:'w5j4', cat:'consulting', title:'Health Equity Consultant', org:'Guidehouse', loc:'Remote / Dallas, TX', type:'Full-time', sal:'$90K–$115K', match:'high',
      desc:'Advise state and federal health agency clients on health equity strategy, program design, and performance improvement. Strong public health background required.',
      reqs:['Health equity expertise','Federal health agencies','Program design','MPH or DHA preferred'], days:3,
      applyUrl:'https://guidehouse.com/careers/open-positions',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Guidehouse' },

    { id:'w5j5', cat:'nonprofit', title:'VP of Programs', org:'Nexus Recovery Center', loc:'Dallas, TX', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Provide executive oversight of all substance use treatment and co-occurring mental health programs. Manage SAMHSA, DSHS, and foundation grants and lead program evaluation.',
      reqs:['Behavioral health program leadership','SAMHSA/federal grants','QI and compliance','Graduate degree'], days:6,
      applyUrl:'https://www.nexusrecovery.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+HR&company=Nexus+Recovery+Center' },

    { id:'w5j6', cat:'fed', title:'Health Program Strategy Manager', org:'Elevance Health', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$90K–$115K', match:'medium',
      desc:'Lead strategic program development for Medicaid and community health initiatives. Drive health equity outcomes with state and federal stakeholders.',
      reqs:['Managed care or public health PM','Medicaid/community health','Strategic planning','Graduate degree'], days:8,
      applyUrl:'https://careers.elevancehealth.com/jobs?q=program+manager',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Elevance+Health' },

    { id:'w5j7', cat:'nonprofit', title:'Program Manager, Health Justice', org:'North Texas LGBTQ Community Center (Resource Center)', loc:'Dallas, TX', type:'Full-time', sal:'$60K–$78K', match:'high',
      desc:'Manage health justice and HIV/STI programs including testing, navigation, and education. Oversee CDC, DSHS, and foundation grants and lead program data collection.',
      reqs:['LGBTQ-affirming public health','HIV/STI program experience','Community outreach','MPH preferred'], days:7,
      applyUrl:'https://www.myresourcecenter.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Resource+Center+Dallas' },

    { id:'w5j8', cat:'ph', title:'Senior Analyst, Health Policy & Programs', org:'Mathematica', loc:'Remote', type:'Full-time', sal:'$85K–$110K', match:'medium',
      desc:'Support federal health policy research and program evaluation for HHS, CDC, and SAMHSA.',
      reqs:['Health policy or evaluation','Federal health programs','Research methods','Masters required'], days:5,
      applyUrl:'https://www.mathematica.org/career-opportunities',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Mathematica' },

    { id:'w5j9', cat:'nonprofit', title:'Program Director, Community Health', org:'Commit Partnership', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$75K–$95K', match:'medium',
      desc:'Lead Commit Partnership\'s community health programs focused on health as a social determinant of education. Manage foundation grants and coordinate with school and health system partners.',
      reqs:['Nonprofit program management','Social determinants/education/health nexus','Community partnerships','Graduate degree preferred'], days:9,
      applyUrl:'https://commitpartnership.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Commit+Partnership' },

    { id:'w5j10', cat:'consulting', title:'Senior Manager, Health Equity Practice', org:'ICF International', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$100K–$130K', match:'high',
      desc:'Manage a portfolio of health equity consulting engagements for federal and state clients. Lead team, client, and practice development in the health equity space.',
      reqs:['Health equity consulting or PM','Federal health agencies','Team leadership','Graduate degree'], days:6,
      applyUrl:'https://www.icf.com/careers/open-positions?search=health+equity',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=ICF' }
  ],

  /* ── WEEK 6 ── Mixed + Remote Opportunities ── */
  [
    { id:'w6j1', cat:'consulting', title:'Senior Public Health Program Manager', org:'Palladium Group', loc:'Remote', type:'Full-time', sal:'$90K–$115K', match:'high',
      desc:'Manage CDC and PEPFAR-funded public health programs. Lead technical teams, provide implementation science expertise, and support federal reporting.',
      reqs:['Federal public health PM','CDC/PEPFAR experience','Implementation science','MPH/DHA required'], days:2,
      applyUrl:'https://thepalladiumgroup.com/jobs',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Palladium+Group' },

    { id:'w6j2', cat:'nonprofit', title:'Director of Programs & Evaluation', org:'Child Poverty Action Lab (CPAL)', loc:'Dallas, TX (Hybrid)', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Lead program design, implementation, and evaluation for CPAL\'s health and opportunity initiatives. Oversee data systems, manage program staff, and direct federal and foundation grant deliverables.',
      reqs:['Nonprofit program leadership','Program evaluation/data systems','Health or social determinants focus','Graduate degree'], days:4,
      applyUrl:'https://childpovertyactionlab.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager&company=Child+Poverty+Action+Lab' },

    { id:'w6j3', cat:'fed', title:'Program Management Consultant, Federal Health', org:'Booz Allen Hamilton', loc:'Remote', type:'Full-time', sal:'$105K–$130K', match:'high',
      desc:'Lead federal health program management engagements for HHS, CDC, and HRSA clients. Drive performance improvement and data governance.',
      reqs:['HHS/federal health experience','Performance management','Program delivery','MPH/DHA preferred'], days:1,
      applyUrl:'https://careers.boozallen.com/jobs?keywords=program+manager+health',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Booz+Allen+Hamilton' },

    { id:'w6j4', cat:'nonprofit', title:'Program Director, HIV Prevention', org:'Legacy Community Health (FQHC)', loc:'Houston, TX', type:'Full-time', sal:'$80K–$100K', match:'high',
      desc:'Direct HIV prevention, testing, and care coordination programs at one of Texas\'s largest FQHCs. Oversee CDC and HRSA prevention grants and QI activities.',
      reqs:['HIV program management','FQHC or CHC experience','Federal grants (CDC/HRSA)','MPH or DHA preferred'], days:5,
      applyUrl:'https://legacycommunityhealth.org/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+HR&company=Legacy+Community+Health' },

    { id:'w6j5', cat:'consulting', title:'Public Health Consultant, Maternal & Child Health', org:'JSI Research & Training', loc:'Remote', type:'Full-time', sal:'$85K–$108K', match:'high',
      desc:'Provide technical consulting for HRSA and state MCH program clients. Support program evaluation, capacity building, and federal reporting.',
      reqs:['MCH program experience','Federal consulting or PM','Technical assistance','MPH required'], days:3,
      applyUrl:'https://www.jsi.com/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+hiring&company=JSI+Research+%26+Training' },

    { id:'w6j6', cat:'nonprofit', title:'Senior Program Officer, Health', org:'Meadows Foundation', loc:'Dallas, TX', type:'Full-time', sal:'$85K–$108K', match:'high',
      desc:'Manage health grantmaking focused on access, behavioral health, and social determinants for Texas communities. Provide technical assistance to grantees and lead health strategy.',
      reqs:['Health grantmaking or PM','Texas nonprofit landscape','Technical assistance','Graduate degree required'], days:6,
      applyUrl:'https://www.mfi.org/about/careers/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=program+officer+hiring&company=Meadows+Foundation' },

    { id:'w6j7', cat:'ph', title:'Senior Health Program Specialist', org:'NASTAD', loc:'Remote', type:'Full-time', sal:'$78K–$95K', match:'high',
      desc:'Provide technical assistance and capacity building to state and territorial HIV/STI programs. Develop national training resources and support program quality improvement.',
      reqs:['State health dept experience','HIV program expertise','Training facilitation','MPH required'], days:5,
      applyUrl:'https://nastad.org/about/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=hiring+manager+programs&company=NASTAD' },

    { id:'w6j8', cat:'nonprofit', title:'Manager, Public Health Programs', org:'American Cancer Society', loc:'Dallas, TX (Remote Flex)', type:'Full-time', sal:'$65K–$85K', match:'medium',
      desc:'Manage ACS\'s North Texas community health and cancer prevention programs. Oversee grant reporting, community partnerships, and program evaluation.',
      reqs:['Nonprofit program management','Community health','Grant reporting','Bachelor\'s required, MPH preferred'], days:8,
      applyUrl:'https://cancer.org/careers',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=American+Cancer+Society' },

    { id:'w6j9', cat:'consulting', title:'Associate Principal, Public Health Consulting', org:'Guidehouse', loc:'Remote / Dallas, TX', type:'Full-time', sal:'$105K–$135K', match:'high',
      desc:'Lead complex public health consulting engagements for CDC, HRSA, and HHS clients. Drive client strategy, manage delivery teams, and develop junior consultants.',
      reqs:['Public health consulting','Federal health agencies','People management','DHA or MPH required'], days:4,
      applyUrl:'https://guidehouse.com/careers/open-positions',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Guidehouse' },

    { id:'w6j10', cat:'nonprofit', title:'Director of Community Programs', org:'CareFlite / Baylor Scott & White', loc:'Dallas, TX', type:'Full-time', sal:'$78K–$98K', match:'medium',
      desc:'Lead community health education, outreach, and prevention programs. Oversee grant-funded initiatives, manage community partnerships, and drive health equity outcomes across DFW.',
      reqs:['Community health program leadership','Grant management','Community partnerships','Graduate degree preferred'], days:11,
      applyUrl:'https://jobs.bswhealth.com/',
      liSearch:'https://www.linkedin.com/search/results/people/?keywords=recruiter+talent+acquisition&company=Baylor+Scott+%26+White+Health' }
  ]
];

var apps = [];
var saved = [];
var curJobs = [];
var curFilter = 'all';
var pendingMsgId = null;

function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function lsSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }

/* ══ INIT ══ */
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
  setEl('week-chip','Week of '+fd.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}));
  setEl('nxt-note','Next refresh: '+fmt(nd));
  setEl('refresh-note','↻ Next refresh: '+fmt(nd));
  setEl('jobs-pill', curJobs.length);

  updateStats();
  renderTracker();
  renderJobs(curJobs);
  render90Day();
}

/* ══ NAVIGATION ══ */
function navTo(id){
  var vs=document.querySelectorAll('.view');
  for(var i=0;i<vs.length;i++) vs[i].classList.remove('active');
  var nbs=document.querySelectorAll('.nav-btn');
  for(var j=0;j<nbs.length;j++) nbs[j].classList.remove('active');
  var bns=document.querySelectorAll('.bn');
  for(var k=0;k<bns.length;k++) bns[k].classList.remove('active');
  var v=document.getElementById('v-'+id); if(v) v.classList.add('active');
  var sb=document.getElementById('nb-'+id); if(sb) sb.classList.add('active');
  var bn=document.getElementById('bnav-'+id); if(bn) bn.classList.add('active');
  var pt=document.getElementById('page-title'); if(pt) pt.textContent=TITLES[id]||id;
  var c=document.querySelector('.content'); if(c) c.scrollTop=0;
  closeSidebar();
}

function showPrep(id){
  var ps=document.querySelectorAll('.prep-panel');
  for(var i=0;i<ps.length;i++) ps[i].classList.remove('active');
  var ts=document.querySelectorAll('.tab');
  for(var j=0;j<ts.length;j++) ts[j].classList.remove('active');
  var p=document.getElementById('prep-'+id); if(p) p.classList.add('active');
  var t=document.getElementById('tab-'+id);  if(t) t.classList.add('active');
}

function toggleSidebar(){
  var sb=document.getElementById('sidebar');
  var ov=document.getElementById('sb-overlay');
  if(!sb) return;
  if(sb.classList.contains('open')){ sb.classList.remove('open'); if(ov) ov.classList.remove('show'); }
  else{ sb.classList.add('open'); if(ov) ov.classList.add('show'); }
}
function closeSidebar(){
  var sb=document.getElementById('sidebar');
  var ov=document.getElementById('sb-overlay');
  if(sb) sb.classList.remove('open');
  if(ov) ov.classList.remove('show');
}

/* ══ FILTER ══ */
function filterJobs(cat,btn){
  curFilter=cat;
  var cs=document.querySelectorAll('.fchip');
  for(var i=0;i<cs.length;i++) cs[i].classList.remove('active');
  if(btn) btn.classList.add('active');
  renderJobs(cat==='all'?curJobs:curJobs.filter(function(j){return j.cat===cat;}));
}

/* ══ RENDER JOBS ══ */
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
    var ia=false, is=false;
    for(var x=0;x<apps.length;x++){ if(apps[x].id===j.id&&apps[x].status==='applied'){ia=true;break;} }
    for(var y=0;y<saved.length;y++){ if(saved[y]===j.id){is=true;break;} }

    /* category badge */
    var catLabel={consulting:'Consulting',pm:'Program Mgmt',ph:'Public Health',nonprofit:'Nonprofit',fed:'Federal'}[j.cat]||j.cat;
    var catClass={consulting:'cat-consulting',pm:'cat-pm',ph:'cat-ph',nonprofit:'cat-nonprofit',fed:'cat-fed'}[j.cat]||'cat-ph';

    html+='<div class="job-card" id="jc-'+j.id+'">';
    html+='<div class="jc-top">';
    html+='<div style="flex:1;min-width:0">';
    html+='<div class="jc-title">'+j.title+'</div>';
    html+='<div class="jc-org">'+j.org+'</div>';
    html+='</div>';
    html+='<div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex-shrink:0">';
    html+='<span class="jmatch '+(j.match==='high'?'mhi':'mmd')+'">'+(j.match==='high'?'✦ Strong match':'◆ Good match')+'</span>';
    html+='<span class="cat-badge '+catClass+'">'+catLabel+'</span>';
    html+='</div>';
    html+='</div>';

    html+='<div class="jc-pills">';
    html+='<span class="pill p-loc">'+j.loc+'</span>';
    html+='<span class="pill p-type">'+j.type+'</span>';
    html+='<span class="pill p-sal">'+j.sal+'</span>';
    html+='<span class="pill p-day">'+j.days+'d ago</span>';
    html+='</div>';
    html+='<p class="jc-desc">'+j.desc+'</p>';
    html+='<p class="jc-reqs"><strong>Key requirements:</strong> '+j.reqs.join(' · ')+'</p>';

    html+='<div class="jc-acts">';

    /* Apply Directly — direct link to company careers page */
    if(ia){
      html+='<span class="btn-applied-tag">✓ Applied</span>';
    }else{
      html+='<a class="btn-apply-direct" href="'+j.applyUrl+'" target="_blank" rel="noopener" onclick="trackApply(\''+j.id+'\')">';
      html+='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
      html+=' Apply on Company Site ↗';
      html+='</a>';
    }

    /* Message Hiring Manager */
    html+='<button class="btn-msg" onclick="showMsgModal(\''+j.id+'\')">';
    html+='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';
    html+=' Message Hiring Manager';
    html+='</button>';

    /* Save */
    html+='<button class="btn-save'+(is?' saved':'')+'" onclick="saveClick(\''+j.id+'\')">'+(is?'✓ Saved':'Save')+'</button>';

    html+='</div>';
    html+='</div>';
  }
  out.innerHTML=html;
}

/* ══ TRACK APPLY ══ */
function trackApply(id){
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id&&apps[x].status==='applied') return; }
  var j=findJob(id); if(!j) return;
  var found=false;
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id){apps[x].status='applied';found=true;break;} }
  if(!found) apps.push({id:j.id,title:j.title,org:j.org,status:'applied',date:new Date().toLocaleDateString()});
  lsSet(SK_APPS,JSON.stringify(apps));
  /* swap button to applied tag */
  var card=document.getElementById('jc-'+id);
  if(card){
    var ab=card.querySelector('.btn-apply-direct');
    if(ab){
      var tag=document.createElement('span');
      tag.className='btn-applied-tag';
      tag.textContent='✓ Applied';
      ab.parentNode.replaceChild(tag,ab);
    }
  }
  updateStats(); renderTracker();
  dlResume();
}

/* ══ SAVE ══ */
function saveClick(id){
  for(var y=0;y<saved.length;y++){ if(saved[y]===id) return; }
  var j=findJob(id); if(!j) return;
  saved.push(id);
  var found=false;
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id){found=true;break;} }
  if(!found) apps.push({id:j.id,title:j.title,org:j.org,status:'saved',date:new Date().toLocaleDateString()});
  lsSet(SK_APPS,JSON.stringify(apps));
  var btn=document.querySelector('#jc-'+id+' .btn-save');
  if(btn){ btn.textContent='✓ Saved'; btn.classList.add('saved'); }
  updateStats(); renderTracker();
}

/* ══ MESSAGE HIRING MANAGER MODAL ══ */
function showMsgModal(id){
  var j=findJob(id); if(!j) return;
  pendingMsgId=id;

  var msg =
    'Hi [Name],\n\n'+
    'I came across the '+j.title+' opportunity at '+j.org+' and wanted to reach out directly — '+
    'your team\'s work is a strong match for the direction I\'m heading.\n\n'+
    'I\'ve spent 16+ years in federal public health program management, most recently directing $2M+ in CDC, HRSA, '+
    'SAMHSA, and Gilead Sciences-funded programs — overseeing 10 concurrent grants, building agency-wide data '+
    'infrastructure across 8 databases, and leading Louisiana\'s statewide Ending the HIV Epidemic initiative. '+
    'I recently completed my Doctor of Healthcare Administration (DHA) and am actively pursuing program management '+
    'and consulting roles.\n\n'+
    'I\'ve already applied through your careers portal and would love to connect to learn more about the team and '+
    'this opportunity. Would you be open to a brief 15-minute conversation?\n\n'+
    'Thank you so much for your time — I look forward to connecting.\n\n'+
    'Warm regards,\n'+
    'Dr. Natalie Cooley Evans, DHA, MPH\n'+
    'NCEvans22@outlook.com  |  601-985-7462\n'+
    'linkedin.com/in/dr-natalie-cooley-evans-dha';

  setEl('msg-modal-title','Message Hiring Manager — '+j.org);
  setEl('msg-modal-role',j.title+' at '+j.org);
  var ta=document.getElementById('msg-textarea'); if(ta) ta.value=msg;
  var liBtn=document.getElementById('msg-li-btn'); if(liBtn) liBtn.href=j.liSearch;
  var m=document.getElementById('msg-modal'); if(m) m.classList.add('open');
  resetCopyBtn();
}

function closeMsgModal(){
  var m=document.getElementById('msg-modal'); if(m) m.classList.remove('open');
  pendingMsgId=null; resetCopyBtn();
}

function copyMsg(){
  var ta=document.getElementById('msg-textarea'); if(!ta) return;
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(ta.value).then(showCopied).catch(function(){ fallbackCopy(ta); });
    }else{ fallbackCopy(ta); }
  }catch(e){ fallbackCopy(ta); }
}
function fallbackCopy(ta){
  ta.select(); ta.setSelectionRange(0,99999);
  try{ document.execCommand('copy'); showCopied(); }catch(e){}
}
function showCopied(){
  var btn=document.getElementById('copy-btn'); if(!btn) return;
  btn.textContent='✓ Copied to clipboard!';
  btn.classList.add('copied');
  setTimeout(resetCopyBtn,2500);
}
function resetCopyBtn(){
  var btn=document.getElementById('copy-btn'); if(!btn) return;
  btn.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Message';
  btn.classList.remove('copied');
}

/* ══ TRACKER ══ */
function renderTracker(){
  var sv=0,ap=0,iv=0,of=0;
  for(var x=0;x<apps.length;x++){
    if(apps[x].status==='saved') sv++;
    else if(apps[x].status==='applied') ap++;
    else if(apps[x].status==='interview') iv++;
    else if(apps[x].status==='offer') of++;
  }
  setEl('tk-s',sv); setEl('tk-a',ap); setEl('tk-i',iv); setEl('tk-o',of);
  var body=document.getElementById('tracker-body'); if(!body) return;
  if(!apps.length){
    body.innerHTML='<div class="empty-state"><div class="es-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c0526a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="es-title">No applications yet</div><div class="es-sub">Apply to roles in Opportunities to start tracking.</div><button class="es-btn" onclick="navTo(\'jobs\')">Browse Opportunities \u2192</button></div>';
    return;
  }
  var rows='';
  for(var i=0;i<apps.length;i++){
    var a=apps[i];
    var sc={saved:'sp-sv',applied:'sp-ap',interview:'sp-iv',offer:'sp-of',closed:'sp-cl'}[a.status]||'sp-cl';
    var cap=a.status.charAt(0).toUpperCase()+a.status.slice(1);
    rows+='<tr>';
    rows+='<td style="font-weight:600;color:var(--ink)">'+a.title+'</td>';
    rows+='<td style="color:var(--rose)">'+a.org+'</td>';
    rows+='<td style="color:var(--muted2)">'+a.date+'</td>';
    rows+='<td><span class="sp '+sc+'">'+cap+'</span></td>';
    rows+='<td><select onchange="updStatus(\''+a.id+'\',this.value)">';
    ['saved','applied','interview','offer','closed'].forEach(function(s){
      rows+='<option value="'+s+'"'+(a.status===s?' selected':'')+'>'+s.charAt(0).toUpperCase()+s.slice(1)+'</option>';
    });
    rows+='</select></td></tr>';
  }
  body.innerHTML='<table class="tracker-tbl"><thead><tr><th style="width:33%">Role</th><th style="width:26%">Organization</th><th style="width:14%">Date</th><th style="width:13%">Status</th><th style="width:14%">Update</th></tr></thead><tbody>'+rows+'</tbody></table>';
}

function updStatus(id,status){
  for(var x=0;x<apps.length;x++){ if(apps[x].id===id){apps[x].status=status;break;} }
  lsSet(SK_APPS,JSON.stringify(apps));
  updateStats(); renderTracker();
}

/* ══ STATS ══ */
function updateStats(){
  var ap=0,iv=0,tot=apps.length;
  for(var x=0;x<apps.length;x++){
    if(apps[x].status==='applied') ap++;
    if(apps[x].status==='interview') iv++;
  }
  setEl('ts-applied',ap); setEl('ts-interviews',iv);
  setEl('kpi-a',ap); setEl('kpi-i',iv);
  var p=document.getElementById('apps-pill');
  if(p){ p.textContent=tot; p.style.display=tot?'':'none'; }
}

/* ══ LINKEDIN CHECKLIST ══ */
function updateProgress(){
  var boxes=document.querySelectorAll('.chk-item input[type="checkbox"]');
  var n=0; for(var i=0;i<boxes.length;i++) if(boxes[i].checked) n++;
  var f=document.getElementById('prog-fill'); if(f) f.style.width=Math.round((n/boxes.length)*100)+'%';
  var c=document.getElementById('prog-count'); if(c) c.textContent=n;
}

/* ══ RESUME DOWNLOAD ══ */
function dlResume(){
  var a=document.createElement('a');
  a.href='NCEvans_PM_Consulting_Resume.docx';
  a.download='NCEvans_PM_Consulting_Resume.docx';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

/* ══ HELPERS ══ */
function findJob(id){
  for(var w=0;w<JOB_WEEKS.length;w++){
    for(var j=0;j<JOB_WEEKS[w].length;j++){
      if(JOB_WEEKS[w][j].id===id) return JOB_WEEKS[w][j];
    }
  }
  return null;
}
function setEl(id,val){
  var el=document.getElementById(id); if(el) el.textContent=val;
}

/* ══ BOOT ══ */
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

/* ══════════════════════════════════════════════════════
   90-DAY SEARCH TRACKER
══════════════════════════════════════════════════════ */
var SK_START = 'nce_v6_start';

function startSearch() {
  lsSet(SK_START, String(Date.now()));
  render90Day();
}

function render90Day() {
  var startTs = parseInt(lsGet(SK_START) || '0');
  var startEl = document.getElementById('day90-start');
  var activeEl = document.getElementById('day90-active');
  if (!startTs) {
    if (startEl) startEl.style.display = '';
    if (activeEl) activeEl.style.display = 'none';
    return;
  }
  if (startEl) startEl.style.display = 'none';
  if (activeEl) activeEl.style.display = '';

  var elapsed = Math.floor((Date.now() - startTs) / (24 * 60 * 60 * 1000));
  var day = Math.min(90, Math.max(1, elapsed + 1));
  var pct = Math.min(100, Math.round((day / 90) * 100));
  var remaining = Math.max(0, 90 - day);

  var phase, phaseName;
  if (day <= 30)      { phase = 1; phaseName = 'Phase 1 — Foundation'; }
  else if (day <= 60) { phase = 2; phaseName = 'Phase 2 — Momentum'; }
  else                { phase = 3; phaseName = 'Phase 3 — Accelerate'; }

  setEl('d90-day', 'Day ' + day + ' of 90');
  setEl('d90-phase', phaseName);
  setEl('d90-remaining', remaining > 0 ? remaining + ' days remaining' : '🎉 You made it to Day 90!');

  var startDate = new Date(startTs);
  setEl('d90-started', 'Started ' + startDate.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'}));

  var fill = document.getElementById('d90-fill');
  if (fill) fill.style.width = pct + '%';

  /* phase dots */
  ['p1','p2','p3'].forEach(function(p, i) {
    var dot = document.getElementById('d90-' + p + '-dot');
    var block = document.getElementById('d90-' + p);
    if (!dot || !block) return;
    var phaseNum = i + 1;
    dot.className = 'd90-phase-dot ' + (phase > phaseNum ? 'done' : phase === phaseNum ? 'active' : 'upcoming');
    block.className = 'day90-phase-block ' + (phase === phaseNum ? 'current' : phase > phaseNum ? 'completed' : '');
  });
}

/* ══════════════════════════════════════════════════════
   LINKEDIN POST GENERATOR  (Claude API)
══════════════════════════════════════════════════════ */
var selectedTopic = '';
var selectedTone = 'thought-leader';

var TOPIC_PROMPTS = {
  'implementation-science': 'how implementation science from your DHA changed how you approach program design and evaluation in practice',
  'federal-grants': 'a key lesson learned from managing $2M+ across CDC, HRSA, SAMHSA, and Gilead Sciences grants simultaneously',
  'health-equity': 'why health equity is not a buzzword — what it actually looks like in day-to-day program management and federal grant work',
  'career-pivot': 'your decision to move from program management into healthcare consulting after 16+ years in public health',
  'data-systems': 'building data infrastructure for a multi-grant health organization — what you learned about data governance, quality, and systems design',
  'ehe-lessons': 'a specific lesson from leading Louisiana\'s statewide Ending the HIV Epidemic initiative across two CDC Phase One jurisdictions',
  'dha-journey': 'what it was like to pursue a Doctor of Healthcare Administration while working full-time — and why you did it',
  'contractor-management': 'how to manage a portfolio of 7 contractors with $200K in federal budgets — corrective action, compliance, and trust-building'
};

var TONE_INSTRUCTIONS = {
  'thought-leader': 'Write as a respected industry expert sharing insight. Authoritative, confident, and forward-looking. Opens with a bold statement or surprising truth.',
  'storytelling': 'Write as a practitioner sharing a real personal story. Warm, specific, and vulnerable. Opens with a scene or moment from actual experience.',
  'practical-tips': 'Write as a mentor sharing actionable advice. Numbered or bulleted structure. Practical, specific, and immediately useful to the reader.'
};

function selectTopic(btn, topicId) {
  document.querySelectorAll('.li-topic-chip').forEach(function(c) { c.classList.remove('active'); });
  btn.classList.add('active');
  selectedTopic = topicId;
  var customInput = document.getElementById('li-custom-prompt');
  if (customInput) customInput.value = '';
}

function selectTone(btn, toneId) {
  document.querySelectorAll('.li-tone-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  selectedTone = toneId;
}

async function generatePost() {
  var customPrompt = (document.getElementById('li-custom-prompt') || {}).value || '';
  var topicText = customPrompt.trim()
    ? customPrompt.trim()
    : (selectedTopic ? TOPIC_PROMPTS[selectedTopic] : null);

  if (!topicText) {
    alert('Please choose a topic chip or type your own topic first.');
    return;
  }

  var genBtn = document.getElementById('li-generate-btn');
  var genLabel = document.getElementById('li-gen-label');
  if (genBtn) genBtn.disabled = true;
  if (genLabel) genLabel.textContent = 'Generating…';

  var toneInstr = TONE_INSTRUCTIONS[selectedTone] || TONE_INSTRUCTIONS['thought-leader'];

  var systemPrompt =
    'You are a ghostwriter for Dr. Natalie Cooley Evans, DHA, MPH — a public health leader based in Dallas, TX. ' +
    'Her background: 16+ years in federal public health program management; directed $2M+ in CDC, HRSA, SAMHSA, and Gilead Sciences grants; ' +
    'built data infrastructure across 10 concurrent grants and 8 databases with zero audit findings; ' +
    'led Louisiana\'s statewide Ending the HIV Epidemic initiative across two CDC Phase One jurisdictions; ' +
    'completed DHA at Oklahoma State University in December 2025; CIRA Yale affiliate; ' +
    'now transitioning into healthcare consulting and program management consulting roles. ' +
    'Write ONLY the finished post text. No preamble, no explanation, no quotes around the post. ' +
    'LinkedIn character limit is 3000 — stay well under that. Aim for 180–260 words.';

  var userPrompt =
    'Write a LinkedIn post for Dr. Natalie Cooley Evans about: ' + topicText + '.\n\n' +
    'Tone instruction: ' + toneInstr + '\n\n' +
    'Requirements:\n' +
    '- Do NOT start with "Excited to share" or "I am thrilled" or similar clichés\n' +
    '- Use short paragraphs (1–3 sentences each) for LinkedIn readability\n' +
    '- Ground it in a real, specific detail from her career — not generic statements\n' +
    '- End with one engaging question OR a clear call to connect/comment\n' +
    '- Add 3–5 relevant hashtags on the final line (no hashtags mid-post)\n' +
    '- Sound like a real human being, not a press release\n' +
    '- Do not use hollow phrases like "game-changing", "incredible journey", or "passionate about"\n' +
    '- Use first person ("I", "my", "we")\n' +
    'Write only the post. No intro sentence from you.';

  try {
    var response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });

    var data = await response.json();
    var postText = '';
    if (data.content && data.content.length) {
      for (var i = 0; i < data.content.length; i++) {
        if (data.content[i].type === 'text') { postText += data.content[i].text; }
      }
    }
    postText = postText.trim();

    if (postText) {
      var ta = document.getElementById('li-post-text');
      if (ta) { ta.value = postText; updateCharCount(); }
      var out = document.getElementById('li-post-output');
      if (out) out.style.display = '';
      /* scroll to output */
      setTimeout(function() {
        if (out) out.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      alert('Something went wrong generating the post. Please try again.');
    }
  } catch (err) {
    alert('Could not connect to the AI. Please check your connection and try again.');
  }

  if (genBtn) genBtn.disabled = false;
  if (genLabel) genLabel.textContent = 'Generate LinkedIn Post';
}

function updateCharCount() {
  var ta = document.getElementById('li-post-text');
  var counter = document.getElementById('li-char-num');
  if (ta && counter) {
    var n = ta.value.length;
    counter.textContent = n;
    counter.style.color = n > 2800 ? '#c0526a' : n > 2400 ? '#c98a5a' : '#3a7a78';
  }
}

function copyPost() {
  var ta = document.getElementById('li-post-text');
  if (!ta) return;
  var btn = document.getElementById('li-copy-btn');
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ta.value).then(function() { showPostCopied(btn); }).catch(function() { fallbackPostCopy(ta, btn); });
    } else { fallbackPostCopy(ta, btn); }
  } catch(e) { fallbackPostCopy(ta, btn); }
}

function fallbackPostCopy(ta, btn) {
  ta.select(); ta.setSelectionRange(0, 99999);
  try { document.execCommand('copy'); showPostCopied(btn); } catch(e) {}
}

function showPostCopied(btn) {
  if (!btn) return;
  var orig = btn.innerHTML;
  btn.textContent = '✓ Copied!';
  btn.classList.add('copied');
  setTimeout(function() {
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Post';
    btn.classList.remove('copied');
  }, 2500);
}

function openLinkedIn() {
  /* Copy first, then open LinkedIn post creation page */
  var ta = document.getElementById('li-post-text');
  if (ta && ta.value) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(function() {
          window.open('https://www.linkedin.com/posts/?source=newpost', '_blank', 'noopener');
        }).catch(function() {
          ta.select(); document.execCommand('copy');
          window.open('https://www.linkedin.com/posts/?source=newpost', '_blank', 'noopener');
        });
      } else {
        ta.select(); document.execCommand('copy');
        window.open('https://www.linkedin.com/posts/?source=newpost', '_blank', 'noopener');
      }
    } catch(e) {
      window.open('https://www.linkedin.com/posts/?source=newpost', '_blank', 'noopener');
    }
  } else {
    window.open('https://www.linkedin.com/posts/?source=newpost', '_blank', 'noopener');
  }
}
