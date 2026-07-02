/* ══════════════════════════════════════════════════════════
   IDOT Dashboard — idot_dashboard.html
   Angstrom360 · 95th Street Rail Mass Transit Station
   ══════════════════════════════════════════════════════════ */

const DASH = {

  ticker: [
    "✔  GRPC Property Review PRV-0241 completed — A572 Gr50 wide flange — PASS — 142ms",
    "⚠  NCR-0031 opened on Lot L-1187 — Dimensional deviation on HSS 8×8×½ — Assigned R. Okafor",
    "✔  CI/CD Build #88 deployed to production — coverage 91% — all 6 stages passed",
    "✔  Bentley MicroStation iTwin API sync complete — 12 drawings updated — 2m 34s",
    "⚠  GRPC Review PRV-0238 — A36 plate yield strength 33 ksi below 36 ksi minimum — FAIL",
    "✔  AutoCAD 2024 integration synced — 847 docs indexed — last sync 08:14 AM",
    "✔  Lot L-1192 closed — A992 wide flange — Mill cert verified — EOR sign-off received",
    "ℹ  Terraform plan applied — infrastructure drift: 0 resources out of state",
    "✔  GRPC Property Review PRV-0239 completed — A992 W-Shape — PASS — 119ms",
    "ℹ  Monthly trend: Avg turnaround improved from 4.2d → 3.8d over last 90 days"
  ],

  kpis: [
    { label:"Active Inspections",   value:"247",    delta:"+14",    dir:"up",   sub:"vs last week",          color:"org" },
    { label:"Closed YTD",           value:"834",    delta:"+58",    dir:"up",   sub:"since Jan 1 2025",      color:"grn" },
    { label:"Avg Turnaround",       value:"3.8d",   delta:"-0.4d",  dir:"up",   sub:"improved vs 4.2d prior",color:"blu" },
    { label:"GRPC API Calls",       value:"14,820", delta:"+1,204", dir:"up",   sub:"rolling 30 days",       color:"pur" },
    { label:"System Uptime",        value:"99.8%",  delta:"0.0%",   dir:"flat", sub:"last 90 days",          color:"grn" },
    { label:"Engineers Trained",    value:"52 / 54",delta:"+3",     dir:"up",   sub:"on Inspection OS v3.2", color:"yel" }
  ],

  integrations: [
    {
      name:"AutoCAD 2024",
      vendor:"Autodesk",
      note:"Drawing reference sync — shop drawings, as-builts, revision tracking",
      last_sync:"Today 08:14 AM",
      docs_indexed:847,
      version:"AutoCAD 2024.2",
      color:"org"
    },
    {
      name:"Bentley MicroStation",
      vendor:"Bentley Systems",
      note:"iTwin API — structural model sync, IFC export, clash detection reports",
      last_sync:"Today 07:52 AM",
      docs_indexed:312,
      version:"iTwin API v2.1",
      color:"blu"
    },
    {
      name:"GRPC Property API",
      vendor:"Angstrom360 Internal",
      note:"Spring Boot microservice — material property lookups, mill cert validation, NCR triggers",
      last_sync:"Today 09:01 AM",
      docs_indexed:0,
      version:"Spring Boot 3.2.4",
      color:"pur"
    },
    {
      name:"Terraform CI/CD",
      vendor:"HashiCorp",
      note:"Infrastructure-as-Code pipeline — AWS ECS, RDS Aurora, S3, CloudFront provisioning",
      last_sync:"Today 06:30 AM",
      docs_indexed:0,
      version:"Terraform 1.7.2",
      color:"grn"
    }
  ],

  pipeline: [
    { stage:"Submitted / Queued",       count:48,  pct:20, color:"t3"  },
    { stage:"GRPC Property Review",     count:62,  pct:26, color:"pur" },
    { stage:"Manual QA Review",         count:41,  pct:17, color:"blu" },
    { stage:"Awaiting EOR Sign-off",    count:28,  pct:12, color:"yel" },
    { stage:"Pending Close",            count:35,  pct:15, color:"org" },
    { stage:"On Hold / NCR Open",       count:18,  pct:8,  color:"red" },
    { stage:"Closed Today",             count:15,  pct:6,  color:"grn" }
  ],

  material_breakdown: [
    { type:"Wide Flange W-Shapes",  pass:184, fail:3,  flagged:6,  total:193, color:"grn" },
    { type:"HSS Tube Steel",        pass:97,  fail:4,  flagged:8,  total:109, color:"blu" },
    { type:"Plate Steel",           pass:142, fail:7,  flagged:11, total:160, color:"org" },
    { type:"Rebar A615",            pass:218, fail:2,  flagged:4,  total:224, color:"pur" },
    { type:"Anchor Bolts F1554",    pass:88,  fail:1,  flagged:3,  total:92,  color:"yel" },
    { type:"Weld Wire",             pass:63,  fail:0,  flagged:2,  total:65,  color:"grn" }
  ],

  recent_lots: [
    { id:"L-1192", material:"Wide Flange W-Shape", grade:"A992",       qty:"24 pcs",  date:"Jun 7 2025",  inspector:"D. Kim",      stage:"Closed",               result:"Pass",    ncr:null       },
    { id:"L-1191", material:"HSS Tube 8×8×½",      grade:"A500 Gr C",  qty:"18 pcs",  date:"Jun 7 2025",  inspector:"R. Okafor",   stage:"On Hold / NCR Open",   result:"Flagged", ncr:"NCR-0031" },
    { id:"L-1190", material:"Plate Steel ½\"",      grade:"A36",        qty:"6 pcs",   date:"Jun 6 2025",  inspector:"L. Patel",    stage:"GRPC Property Review", result:"Pending", ncr:null       },
    { id:"L-1189", material:"Rebar #8",             grade:"A615 Gr60",  qty:"200 ea",  date:"Jun 6 2025",  inspector:"M. Torres",   stage:"Closed",               result:"Pass",    ncr:null       },
    { id:"L-1188", material:"Anchor Bolt 1¼\"",     grade:"F1554 Gr55", qty:"48 ea",   date:"Jun 5 2025",  inspector:"D. Kim",      stage:"Manual QA Review",     result:"Pending", ncr:null       },
    { id:"L-1187", material:"Wide Flange W14×90",   grade:"A572 Gr50",  qty:"12 pcs",  date:"Jun 5 2025",  inspector:"R. Okafor",   stage:"Awaiting EOR Sign-off","result":"Pass",  ncr:null       },
    { id:"L-1186", material:"Weld Wire ER70S-6",    grade:"AWS A5.18",  qty:"30 spools",date:"Jun 4 2025", inspector:"S. Reynolds", stage:"Closed",               result:"Pass",    ncr:null       },
    { id:"L-1185", material:"Plate Steel 1\"",      grade:"A36",        qty:"4 pcs",   date:"Jun 4 2025",  inspector:"L. Patel",    stage:"On Hold / NCR Open",   result:"Flagged", ncr:"NCR-0029" }
  ],

  ncrs: {
    items: [
      { id:"NCR-0031", lot:"L-1191", type:"Dimensional",  desc:"HSS 8×8×½ wall thickness 0.468\" vs 0.500\" min — 6.4% under tolerance",                             opened:"Jun 7 2025", assigned:"R. Okafor"   },
      { id:"NCR-0030", lot:"L-1188", type:"Chemical",     desc:"Anchor bolt F1554 Gr55 carbon equivalent 0.48 exceeds 0.45 max per AWS D1.1 Table 3.1",              opened:"Jun 5 2025", assigned:"D. Kim"      },
      { id:"NCR-0029", lot:"L-1185", type:"Mechanical",   desc:"A36 plate yield strength 33 ksi; minimum 36 ksi per ASTM A36 — mill cert resubmittal required",      opened:"Jun 4 2025", assigned:"L. Patel"    },
      { id:"NCR-0028", lot:"L-1183", type:"Chemical",     desc:"Rebar A615 Gr60 sulfur content 0.062% exceeds 0.060% maximum per ASTM A615 Section 7.2",             opened:"Jun 2 2025", assigned:"M. Torres"   }
    ]
  },

  grpc_reviews: [
    {
      id:"PRV-0241",
      lot:"L-1187",
      grade:"A572 Gr50",
      spec:"ASTM A572",
      chem:[
        { p:"Carbon (C)",       v:"0.21%",  lim:"≤ 0.23%", ok:true  },
        { p:"Manganese (Mn)",   v:"1.31%",  lim:"≤ 1.35%", ok:true  },
        { p:"Phosphorus (P)",   v:"0.018%", lim:"≤ 0.040%",ok:true  },
        { p:"Sulfur (S)",       v:"0.024%", lim:"≤ 0.050%",ok:true  },
        { p:"Silicon (Si)",     v:"0.28%",  lim:"≤ 0.40%", ok:true  },
        { p:"Copper (Cu)",      v:"0.14%",  lim:"≤ 0.20%", ok:true  }
      ],
      mech:[
        { p:"Yield Strength",   v:"58 ksi", lim:"≥ 50 ksi", ok:true },
        { p:"Tensile Strength", v:"78 ksi", lim:"≥ 65 ksi", ok:true },
        { p:"Elongation (8\")", v:"22%",    lim:"≥ 18%",    ok:true },
        { p:"CVN @ -20°F",      v:"38 ft·lb",lim:"≥ 25 ft·lb",ok:true}
      ],
      verdict:"Pass",
      ms:142,
      eng:"D. Kim",
      date:"Jun 5 2025"
    },
    {
      id:"PRV-0238",
      lot:"L-1185",
      grade:"A36",
      spec:"ASTM A36",
      chem:[
        { p:"Carbon (C)",       v:"0.24%",  lim:"≤ 0.26%", ok:true  },
        { p:"Manganese (Mn)",   v:"0.88%",  lim:"≤ 1.03%", ok:true  },
        { p:"Phosphorus (P)",   v:"0.022%", lim:"≤ 0.040%",ok:true  },
        { p:"Sulfur (S)",       v:"0.031%", lim:"≤ 0.050%",ok:true  }
      ],
      mech:[
        { p:"Yield Strength",   v:"33 ksi", lim:"≥ 36 ksi", ok:false },
        { p:"Tensile Strength", v:"61 ksi", lim:"≥ 58 ksi", ok:true  },
        { p:"Elongation (8\")", v:"21%",    lim:"≥ 20%",    ok:true  }
      ],
      verdict:"Fail",
      ms:138,
      eng:"L. Patel",
      date:"Jun 4 2025"
    },
    {
      id:"PRV-0239",
      lot:"L-1192",
      grade:"A992",
      spec:"ASTM A992",
      chem:[
        { p:"Carbon (C)",       v:"0.18%",  lim:"≤ 0.23%", ok:true  },
        { p:"Manganese (Mn)",   v:"1.08%",  lim:"≤ 1.60%", ok:true  },
        { p:"Phosphorus (P)",   v:"0.014%", lim:"≤ 0.035%",ok:true  },
        { p:"Sulfur (S)",       v:"0.019%", lim:"≤ 0.045%",ok:true  },
        { p:"Silicon (Si)",     v:"0.22%",  lim:"≤ 0.35%", ok:true  },
        { p:"Vanadium (V)",     v:"0.04%",  lim:"≤ 0.11%", ok:true  }
      ],
      mech:[
        { p:"Yield Strength",   v:"57 ksi", lim:"≥ 50 ksi", ok:true },
        { p:"Tensile Strength", v:"76 ksi", lim:"≥ 65 ksi", ok:true },
        { p:"Fy/Fu Ratio",      v:"0.75",   lim:"≤ 0.85",   ok:true },
        { p:"Elongation (8\")", v:"24%",    lim:"≥ 18%",    ok:true }
      ],
      verdict:"Pass",
      ms:119,
      eng:"D. Kim",
      date:"Jun 7 2025"
    }
  ],

  security: {
    oauth2_status:   "Active",
    oauth2_version:  "OAuth 2.0 PKCE",
    oauth2_check:    "Today 06:00 AM",
    jpa_status:      "Complete",
    jpa_date:        "Sep 15 2024",
    jpa_tables:      47,
    pentest_status:  "0 Open",
    pentest_date:    "Oct 22 2024",
    pentest_critical:0,
    pentest_high:    1,
    pentest_resolved:true,
    spring_version:  "Spring Security 6.1.5",
    spring_updated:  "Nov 4 2024",
    active_sessions: 12,
    failed_logins:   0,
    last_incident:   "None"
  },

  compliance: [
    { std:"ASTM A572",  scope:"High-strength low-alloy steel",   score:100, status:"Compliant",        last_audit:"May 2025" },
    { std:"ASTM A992",  scope:"Wide flange structural shapes",   score:98,  status:"Compliant",        last_audit:"May 2025" },
    { std:"ASTM A36",   scope:"Carbon structural steel",         score:94,  status:"Minor Deviation",  last_audit:"Apr 2025" },
    { std:"AISC 360",   scope:"Structural steel design spec",    score:100, status:"Compliant",        last_audit:"Mar 2025" },
    { std:"AWS D1.1",   scope:"Structural welding code — steel", score:97,  status:"Compliant",        last_audit:"Apr 2025" },
    { std:"OSHA 1926",  scope:"Construction safety — subpart R", score:100, status:"Compliant",        last_audit:"Jun 2025" }
  ],

  issues: {
    open_now: [
      { id:"ISS-0044", summary:"GRPC timeout spikes >500ms during peak batch review windows (08:00–10:00 AM)",severity:"High",   assigned:"D. Kim",      days_open:3  },
      { id:"ISS-0041", summary:"iTwin API auth token refresh fails silently after 8-hour session expiry",     severity:"Medium", assigned:"R. Okafor",   days_open:9  },
      { id:"ISS-0038", summary:"PDF mill cert OCR misreads elongation value for lots with handwritten certs", severity:"Low",    assigned:"S. Reynolds", days_open:18 }
    ],
    by_type: [
      { type:"API / Integration", count:8,  color:"pur" },
      { type:"Data Quality",      count:6,  color:"org" },
      { type:"UI / UX",           count:4,  color:"blu" },
      { type:"Performance",       count:5,  color:"yel" },
      { type:"Security",          count:2,  color:"red" }
    ]
  },

  team_activity: {
    inspectors: [
      { name:"D. Kim",      role:"CWI",      ytd:212, pass_rate:98.1, open:47, active:true  },
      { name:"R. Okafor",   role:"NICET III", ytd:188, pass_rate:96.3, open:51, active:true  },
      { name:"L. Patel",    role:"CWI",      ytd:174, pass_rate:97.7, open:44, active:true  },
      { name:"M. Torres",   role:"NICET II", ytd:141, pass_rate:95.0, open:62, active:true  },
      { name:"S. Reynolds", role:"NICET I",  ytd:119, pass_rate:93.4, open:43, active:false }
    ]
  },

  cicd: {
    build:"#88",
    status:"Passed",
    duration:"4m 12s",
    coverage:91,
    deploys_ytd:18,
    stages:[
      { name:"Checkout & Init",      dur:"0m 18s", ok:true  },
      { name:"Dependency Install",   dur:"0m 44s", ok:true  },
      { name:"Unit & Integration",   dur:"1m 22s", ok:true  },
      { name:"OWASP Dependency Scan",dur:"0m 31s", ok:true  },
      { name:"Docker Build & Push",  dur:"0m 52s", ok:true  },
      { name:"Terraform Apply",      dur:"0m 25s", ok:true  }
    ],
    recent:[
      { build:"#88", version:"3.2.1", date:"Jun 7 2025",  note:"GRPC batch review perf patch",     status:"Passed"  },
      { build:"#87", version:"3.2.0", date:"Jun 4 2025",  note:"iTwin API token refresh fix",      status:"Passed"  },
      { build:"#86", version:"3.1.9", date:"May 28 2025", note:"PDF OCR elongation parser update", status:"Passed"  },
      { build:"#85", version:"3.1.8", date:"May 20 2025", note:"Security headers hardening",       status:"Passed"  },
      { build:"#84", version:"3.1.7", date:"May 12 2025", note:"AWS RDS read replica added",       status:"Failed"  }
    ]
  },

  trend: {
    months:                ["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"],
    inspections_completed: [62,   71,   58,   44,   79,   88,   94,   102,  118,  127],
    avg_turnaround_days:   [5.1,  4.8,  5.2,  4.9,  4.6,  4.3,  4.1,  4.0,  3.9,  3.8],
    grpc_calls:            [820,  940,  870,  610,  1100, 1280, 1420, 1540, 1660, 1820]
  },

  api_docs: {
    total:47,
    documented:47,
    pages:12,
    updated:"Jun 5 2025",
    groups:[
      { name:"Material Properties",  count:10, doc:10, color:"org" },
      { name:"NCR Management",       count:8,  doc:8,  color:"red" },
      { name:"Lot Lifecycle",        count:9,  doc:9,  color:"grn" },
      { name:"GRPC Review Engine",   count:7,  doc:7,  color:"pur" },
      { name:"User & Auth",          count:6,  doc:6,  color:"blu" },
      { name:"Reporting & Export",   count:7,  doc:7,  color:"yel" }
    ]
  }

}; /* end DASH */

/* ── COLOR HELPERS ──────────────────────────────────────── */
const CV = {
  org:'#f97316', grn:'#16a34a', red:'#e63946', blu:'#2562ea',
  pur:'#7c3aed', yel:'#d4920a', t3:'#9aa3b8', t2:'#6b7a99', t1:'#0d1f3c'
};
function cv(k){ return CV[k] || CV.t2; }

/* ── TOAST ───────────────────────────────────────────────── */
function toast(msg, type='grn'){
  const icons={grn:'✔',red:'✖',org:'⚠',pur:'⬡',blu:'ℹ'};
  const z=document.getElementById('toast-zone');
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span class="toast-icon">${icons[type]||'ℹ'}</span><span>${msg}</span>`;
  z.appendChild(el);
  setTimeout(()=>{el.classList.add('toast-out');setTimeout(()=>el.remove(),300)},4200);
}



/* ── DISMISS HELP BANNER ─────────────────────────────────── */
function dismissHelp(id){
  const el=document.getElementById('hb-'+id);
  if(!el)return;
  el.style.maxHeight=el.scrollHeight+'px';
  requestAnimationFrame(()=>{
    el.style.transition='max-height .4s ease,opacity .4s ease,padding .4s ease,margin .4s ease';
    el.style.maxHeight='0';el.style.opacity='0';
    el.style.padding='0';el.style.margin='0';
    setTimeout(()=>el.remove(),420);
  });
}

/* ── HELP SECTION DEFINITIONS ────────────────────────────── */
const SECTION_HELP = {
  kpis:{
    title:'Key Performance Indicators',
    text:`These six metrics summarize the current health of the inspection program. <span class="tip" data-tip="Active Inspections: lots currently anywhere in the review pipeline — submitted through pending close.">Active Inspections</span> counts all lots in-flight. <span class="tip" data-tip="Closed YTD: total lots fully accepted by the EOR since January 1 of this calendar year.">Closed YTD</span> tracks accepted lots. <span class="tip" data-tip="Avg Turnaround: calendar days from lot submission to EOR close, averaged across all closed lots in the rolling 30-day window.">Avg Turnaround</span> measures efficiency. Green deltas are improvements; red deltas need attention.`
  },
  integrations:{
    title:'System Integrations',
    text:`Four external systems feed data into this dashboard. <span class="tip" data-tip="AutoCAD 2024: Autodesk drawing software. The integration syncs shop drawing revisions and as-built PDFs automatically.">AutoCAD</span> provides drawing references. <span class="tip" data-tip="MicroStation iTwin API: Bentley's cloud API for sharing 3D structural models and IFC files across disciplines.">Bentley MicroStation</span> provides structural model data. The <span class="tip" data-tip="GRPC Property API: Angstrom360's internal Spring Boot microservice that validates mill cert chemical and mechanical properties against ASTM spec limits.">GRPC Property API</span> validates mill certs. <span class="tip" data-tip="Terraform: HashiCorp's Infrastructure-as-Code tool — keeps all cloud resources (AWS ECS, RDS, S3) in a reproducible, version-controlled state.">Terraform</span> manages cloud infrastructure. Click Sync Now on any card to force a manual refresh.`
  },
  pipeline:{
    title:'Active Inspection Queue',
    text:`Each bar shows how many lots are currently at that stage. Lots flow left-to-right: Submitted → <span class="tip" data-tip="GRPC Property Review: automated step where the Spring Boot microservice checks each chemical and mechanical value on the mill cert against ASTM spec limits.">GRPC Review</span> → Manual QA → <span class="tip" data-tip="EOR Sign-off: the Engineer of Record reviews the QA package and digitally approves the lot for use in the structure.">EOR Sign-off</span> → Closed. Lots in the 'On Hold / NCR Open' stage are frozen until the non-conformance is resolved.`
  },
  material:{
    title:'Material Breakdown',
    text:`Stacked bars show Pass (green) / Fail (red) / Flagged (yellow) counts for each material type. <span class="tip" data-tip="Wide Flange W-Shapes: hot-rolled I-beams per ASTM A992, used for primary framing members at the station.">Wide Flange shapes</span> and <span class="tip" data-tip="HSS: Hollow Structural Section — square or rectangular steel tube per ASTM A500, used for columns and braces.">HSS tube steel</span> are the highest-volume types. Flagged lots have open review items but have not yet generated a formal NCR.`
  },
  grpc:{
    title:'GRPC Property Review Engine',
    text:`The <span class="tip" data-tip="GRPC: Google Remote Procedure Call — a high-performance binary protocol used to query the internal mill cert property database in under 200ms per lot.">GRPC</span> engine automatically checks every chemical element and mechanical property on a submitted mill cert against the applicable <span class="tip" data-tip="ASTM: American Society for Testing and Materials — the standards body that defines minimum property requirements for structural steels.">ASTM</span> spec limits. A single red row causes an automatic Fail verdict and triggers an <span class="tip" data-tip="NCR: Non-Conformance Report — formally documents that a specific property is out of spec and assigns a resolution owner.">NCR</span>. Response times are typically under 200ms.`
  },
  lots:{
    title:'Lot Activity Log',
    text:`Each row is one material lot submitted for inspection. A <span class="tip" data-tip="Lot: a discrete batch of material (e.g., 24 W14×90 beams from one heat) submitted together with a single mill cert.">lot</span> moves through stages as inspectors complete their work. Flagged lots (yellow) have an issue under investigation. Any lot with an NCR ID is formally on hold. Click View to see the full inspection record for that lot.`
  },
  ncrs:{
    title:'Non-Conformance Reports',
    text:`An <span class="tip" data-tip="NCR: Non-Conformance Report — a formal document that records a specific deviation from spec, the affected lot, and the assigned resolution engineer.">NCR</span> is opened whenever a material property or dimension is out of specification. The three types are: <span class="tip" data-tip="Mechanical NCR: a strength or toughness value (yield strength, tensile strength, CVN) below the ASTM minimum.">Mechanical</span> (strength/toughness fail), <span class="tip" data-tip="Dimensional NCR: a physical dimension (wall thickness, flange width, cross-section) outside tolerance.">Dimensional</span> (out-of-tolerance geometry), and <span class="tip" data-tip="Chemical NCR: a chemical element (carbon, sulfur, phosphorus) exceeding the ASTM maximum.">Chemical</span> (chemistry out of range). All open NCRs must be resolved before the lot can be accepted.`
  },
  issues:{
    title:'Platform Issues',
    text:`Platform issues track bugs and operational problems with the Inspection OS software itself — separate from material non-conformances. Severity levels: <span class="tip" data-tip="High severity: actively impacting inspection workflow — data may be incorrect or a key feature is unavailable.">High</span> (active impact), <span class="tip" data-tip="Medium severity: degraded function but workaround available — should be resolved within the sprint.">Medium</span> (workaround available), and <span class="tip" data-tip="Low severity: cosmetic or minor inconvenience — scheduled for next patch release.">Low</span> (minor). The by-type chart below shows the distribution across categories.`
  },
  security:{
    title:'Security Status',
    text:`This panel monitors the security posture of the Inspection OS platform. <span class="tip" data-tip="OAuth 2.0 PKCE: Proof Key for Code Exchange — a hardened variant of OAuth2 that prevents authorization code interception attacks, required for public/mobile clients.">OAuth2 PKCE</span> handles user authentication. <span class="tip" data-tip="JPA Migration: the Java Persistence API schema migration moved 47 database tables to the new Aurora PostgreSQL schema with zero data loss.">JPA Migration</span> tracks database schema status. The <span class="tip" data-tip="Pen Test: penetration test — a contracted security firm attempts to breach the application to find vulnerabilities before attackers do.">penetration test</span> was completed Oct 22 2024 with 0 critical findings. <span class="tip" data-tip="Spring Security 6.1.5: the authentication and authorization framework embedded in the Spring Boot application, kept patched to the latest stable release.">Spring Security</span> is kept up to date.`
  },
  compliance:{
    title:'Standards Compliance',
    text:`Each ring shows the compliance score for one standard based on the most recent audit. 100% means all checklist items passed. Scores below 100% indicate minor findings that have been documented and are being tracked to resolution. <span class="tip" data-tip="ASTM A36 at 94%: the Minor Deviation reflects NCR-0029 (yield strength below 36 ksi minimum) which is open and under corrective action.">ASTM A36 at 94%</span> reflects the open yield-strength NCR. All six standards must remain above 90% to maintain IDOT project approval.`
  },
  cicd:{
    title:'CI/CD Pipeline',
    text:`Every code change is automatically built, tested, scanned, and deployed through this <span class="tip" data-tip="CI/CD: Continuous Integration / Continuous Deployment — every commit triggers an automated pipeline that catches bugs before they reach production.">CI/CD</span> pipeline. The six stages run sequentially: checkout, dependencies, tests, <span class="tip" data-tip="OWASP Dependency Scan: checks every third-party library for known CVEs (Common Vulnerabilities and Exposures) published in the National Vulnerability Database.">OWASP security scan</span>, Docker build, and <span class="tip" data-tip="Terraform Apply: provisions or updates AWS infrastructure to match the current .tf configuration files — zero-downtime blue/green deployment to ECS.">Terraform apply</span>. Code coverage must stay above 85% or the pipeline fails. Click Trigger Build to start a new run.`
  },
  apidocs:{
    title:'API Documentation',
    text:`All 47 REST endpoints are documented in <span class="tip" data-tip="Swagger / OpenAPI: the industry standard for documenting REST APIs — provides an interactive browser where developers can read specs and execute live test calls.">Swagger / OpenAPI</span> format across 12 pages. 100% documentation coverage means every endpoint has a description, parameter list, and example response. The six groups cover the full application domain from material lookups to reporting exports.`
  },
  team:{
    title:'Inspector Activity',
    text:`The five inspectors on this project hold <span class="tip" data-tip="CWI: Certified Welding Inspector — AWS certification for inspectors who review weld procedures, weld quality, and welder qualification records.">CWI</span> and <span class="tip" data-tip="NICET: National Institute for Certification in Engineering Technologies — tiered certification (I–IV) for construction materials testing inspectors. Level III and above can lead inspection programs.">NICET</span> certifications. YTD counts all lots each inspector has reviewed this calendar year. Pass Rate is the percentage of reviewed lots that passed on first submission. Open counts the lots currently assigned to each inspector.`
  },
  trend:{
    title:'Monthly Trend',
    text:`Three metrics are plotted over time: inspections completed (bars), average turnaround in days (line), and <span class="tip" data-tip="GRPC Calls: the number of automated mill cert property queries made to the Spring Boot microservice. Volume grows as the inspection program ramps up.">GRPC API calls</span> (line). Use the 3M / 6M / YTD toggles to zoom the time axis. A falling turnaround line paired with rising inspection volume indicates the program is scaling efficiently.`
  },
  overview:{
    title:'Project Overview',
    text:`This section summarizes the complete Material Shop Inspection Software project delivered for IDOT's 95th Street Rail Mass Transit Station. It shows the technology stack, key project statistics, and the context behind each section of the dashboard. Use the sidebar to navigate to Challenges, Approach, Goals &amp; Outcomes, or jump directly to any of the live dashboard sections.`
  },
  challenges:{
    title:'20 Project Challenges',
    text:`These are the key challenges encountered and solved during the project lifecycle, grouped by category: Technical (implementation complexity), Security (OAuth2, penetration testing, JPA migration), Process (scope, CI/CD, deployment), Compliance (ASTM standards), and People (training, user acceptance). Each challenge shaped a specific decision in the architecture or delivery approach.`
  },
  approach:{
    title:'14-Phase Methodology',
    text:`The project followed a structured 14-phase lifecycle from Initiation through Closure. The left column shows phases 1–7 (kickoff through CI/CD setup). The right column shows phases 8–14 (training through handover). Each phase lists its key activities and a category badge indicating the primary domain: Planning, Security, DevOps, Compliance, Launch, or Governance.`
  },
  goalouts:{
    title:'Goals &amp; Outcomes',
    text:`The top card lists the 10 measurable goals defined at project initiation — each with a clear deliverable and success metric. The bottom card shows all 14 verified outcomes delivered at project completion. Every outcome has a checkmark ✓ confirming delivery. Green = quality control, Blue = integration, Red = security, Purple = process, Yellow = people &amp; enablement.`
  }
};

function injectHelpBanners(){
  Object.entries(SECTION_HELP).forEach(([id,{title,text}])=>{
    const sec=document.getElementById(id);
    if(!sec)return;
    const div=document.createElement('div');
    div.className='hb';div.id='hb-'+id;
    div.innerHTML=`<span class="hb-icon">ℹ</span><div class="hb-body"><div class="hb-title">${title}</div><div class="hb-text">${text}</div></div><button class="hb-close" onclick="dismissHelp('${id}')" title="Dismiss">✕</button>`;
    sec.insertBefore(div,sec.firstChild);
  });
}

/* ── TICKER ──────────────────────────────────────────────── */
function buildTicker(){
  const items=[...DASH.ticker,...DASH.ticker];
  const el=document.getElementById('tickerInner');
  el.innerHTML=items.map(t=>`<span class="ticker-item">${t}</span>`).join('');
}

/* ── KPI ─────────────────────────────────────────────────── */
function renderKpis(){
  const g=document.getElementById('kpiGrid');
  g.innerHTML=DASH.kpis.map(k=>`
    <div class="kpi-card ${k.color}">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-bottom">
        <span class="kpi-delta ${k.dir}">${k.dir==='up'?'▲':k.dir==='down'?'▼':'—'} ${k.delta}</span>
        <span class="kpi-sub">${k.sub}</span>
      </div>
    </div>`).join('');
}

/* ── INTEGRATIONS ────────────────────────────────────────── */
function renderIntegrations(){
  const g=document.getElementById('intgGrid');
  g.innerHTML=DASH.integrations.map(i=>`
    <div class="intg-card ${i.color}">
      <div class="intg-head">
        <div><div class="intg-name">${i.name}</div><div class="intg-vendor">${i.vendor}</div></div>
      </div>
      <div class="intg-note">${i.note}</div>
      <div class="intg-meta">
        <span><b>Last Sync</b> ${i.last_sync}</span>
        ${i.docs_indexed?`<span><b>Docs Indexed</b> ${i.docs_indexed}</span>`:''}
        <span><b>Version</b> ${i.version}</span>
      </div>
      <button class="intg-btn" onclick="toast('Syncing ${i.name}... connection established. Refreshing ${i.docs_indexed||'config'} records.','org')">&#8635; Sync Now</button>
    </div>`).join('');
}

/* ── PIPELINE ────────────────────────────────────────────── */
function renderPipeline(){
  const el=document.getElementById('pipelineCard');
  const max=Math.max(...DASH.pipeline.map(p=>p.count));
  el.innerHTML=DASH.pipeline.map(p=>`
    <div class="pipe-row">
      <div class="pipe-label"><span>${p.stage}</span><span class="cnt">${p.count}</span></div>
      <div class="pipe-track"><div class="pipe-fill" style="width:0%;background:var(--${p.color})" data-pct="${Math.round(p.count/max*100)}"></div></div>
    </div>`).join('');
  setTimeout(()=>el.querySelectorAll('.pipe-fill').forEach(f=>{f.style.width=f.dataset.pct+'%'}),80);
}

/* ── MATERIAL ────────────────────────────────────────────── */
function renderMaterial(){
  const el=document.getElementById('materialCard');
  el.innerHTML=DASH.material_breakdown.map(m=>`
    <div class="mat-row">
      <div class="mat-label"><span>${m.type}</span><span style="color:var(--t3);font-family:var(--fm);font-size:10px">Total: ${m.total}</span></div>
      <div class="mat-bars">
        <div class="mat-seg" style="width:0%;background:var(--grn)" data-w="${Math.round(m.pass/m.total*100)}"></div>
        <div class="mat-seg" style="width:0%;background:var(--red)" data-w="${Math.round(m.fail/m.total*100)}"></div>
        <div class="mat-seg" style="width:0%;background:var(--yel)" data-w="${Math.round(m.flagged/m.total*100)}"></div>
      </div>
    </div>`).join('')+`
    <div class="mat-legend">
      <span class="l-pass">Pass</span>
      <span class="l-fail">Fail</span>
      <span class="l-flag">Flagged</span>
    </div>`;
  setTimeout(()=>el.querySelectorAll('.mat-seg').forEach(s=>{s.style.width=s.dataset.w+'%'}),80);
}

/* ── GRPC ────────────────────────────────────────────────── */
function renderGrpc(){
  const r=DASH.grpc_reviews[0];
  const chemRows=r.chem.map(c=>`
    <tr class="${c.ok?'pass-row':'fail-row'}">
      <td>${c.p}</td><td style="font-family:var(--fm)">${c.v}</td>
      <td style="font-family:var(--fm);color:var(--t3)">${c.lim}</td>
      <td class="${c.ok?'grpc-status-pass':'grpc-status-fail'}">${c.ok?'✓':'✗'}</td>
    </tr>`).join('');
  const mechRows=r.mech.map(c=>`
    <tr class="${c.ok?'pass-row':'fail-row'}">
      <td>${c.p}</td><td style="font-family:var(--fm)">${c.v}</td>
      <td style="font-family:var(--fm);color:var(--t3)">${c.lim}</td>
      <td class="${c.ok?'grpc-status-pass':'grpc-status-fail'}">${c.ok?'✓':'✗'}</td>
    </tr>`).join('');
  document.getElementById('grpcLatest').innerHTML=`
    <div class="card-header">
      <div><div class="card-title">Latest Review</div><div class="card-sub">Lot ${r.lot} · ${r.spec}</div></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="grpc-verdict ${r.verdict.toLowerCase()}">${r.verdict==='Pass'?'✓':'✗'} ${r.verdict}</span>
        <span class="grpc-ms">${r.ms}ms</span>
      </div>
    </div>
    <div style="font-family:var(--fm);font-size:11px;color:var(--t3);margin-bottom:4px">
      ID: <span style="color:var(--org)">${r.id}</span> &nbsp;·&nbsp; Grade: <span style="color:var(--t2)">${r.grade}</span> &nbsp;·&nbsp; Engineer: ${r.eng} &nbsp;·&nbsp; ${r.date}
    </div>
    <div class="grpc-section-title">CHEMICAL PROPERTIES</div>
    <table class="grpc-table"><thead><tr><th>Property</th><th>Value</th><th>Limit</th><th>Status</th></tr></thead><tbody>${chemRows}</tbody></table>
    <div class="grpc-section-title">MECHANICAL PROPERTIES</div>
    <table class="grpc-table"><thead><tr><th>Property</th><th>Value</th><th>Limit</th><th>Status</th></tr></thead><tbody>${mechRows}</tbody></table>`;

  document.getElementById('grpcHistory').innerHTML=`
    <div class="card-header"><div class="card-title">Review History</div><div class="card-sub">${DASH.grpc_reviews.length} reviews shown</div></div>
    ${DASH.grpc_reviews.map(rv=>`
      <div class="grpc-hist-row" onclick="toast('${rv.id} — Lot ${rv.lot} — ${rv.grade} — ${rv.spec} — Verdict: ${rv.verdict} — ${rv.ms}ms — ${rv.eng} — ${rv.date}','${rv.verdict==='Pass'?'grn':'red'}')">
        <span class="grpc-hist-id">${rv.id}</span>
        <span class="grpc-hist-grade">${rv.grade}</span>
        <span class="badge ${rv.verdict==='Pass'?'grn':'red'}">${rv.verdict}</span>
        <span class="grpc-hist-ms">${rv.ms}ms</span>
        <span class="grpc-hist-eng">${rv.eng}</span>
        <span class="grpc-hist-date">${rv.date}</span>
        <button class="view-btn" onclick="event.stopPropagation();toast('${rv.id}: ${rv.grade} (${rv.spec}) — Verdict: ${rv.verdict} — ${rv.ms}ms — Eng: ${rv.eng}','${rv.verdict==='Pass'?'grn':'red'}')">View</button>
      </div>`).join('')}`;
}

/* ── LOTS ────────────────────────────────────────────────── */
function renderLots(){
  const resultColor={Pass:'grn',Flagged:'yel',Pending:'t3'};
  document.getElementById('lotsTable').innerHTML=`
    <table>
      <thead><tr>
        <th>Lot ID</th><th>Material / Grade</th><th>Qty</th><th>Date</th>
        <th>Inspector</th><th>Stage</th><th>Result</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${DASH.recent_lots.map(l=>`<tr>
          <td style="font-family:var(--fm);color:var(--org)">${l.id}</td>
          <td><span style="color:var(--t1)">${l.material}</span><br><span style="font-family:var(--fm);font-size:10px;color:var(--t3)">${l.grade}</span></td>
          <td style="font-family:var(--fm);font-size:11px">${l.qty}</td>
          <td style="font-family:var(--fm);font-size:11px;color:var(--t3)">${l.date}</td>
          <td>${l.inspector}</td>
          <td><span style="font-size:12px;color:var(--t2)">${l.stage}</span></td>
          <td>
            <span class="badge ${resultColor[l.result]||'t3'}">${l.result}</span>
            ${l.ncr?`<span style="font-family:var(--fm);font-size:10px;color:var(--red);margin-left:4px">${l.ncr}</span>`:''}
          </td>
          <td><button class="act-btn" onclick="toast('Lot ${l.id}: ${l.material} (${l.grade}) — ${l.qty} — Inspector: ${l.inspector} — Stage: ${l.stage} — Result: ${l.result}${l.ncr?' — NCR: '+l.ncr:''}','${l.result==='Pass'?'grn':l.result==='Flagged'?'yel':'org'}')">View</button></td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

/* ── NCRs ────────────────────────────────────────────────── */
function renderNcrs(){
  const typeClass={Mechanical:'',Dimensional:'dim',Chemical:'chem'};
  document.getElementById('ncrContent').innerHTML=`
    <div class="ncr-stat-row">
      <div class="ncr-stat red"><div class="v">4</div><div class="l">Open</div></div>
      <div class="ncr-stat"><div class="v">28</div><div class="l">Closed</div></div>
      <div class="ncr-stat"><div class="v">32</div><div class="l">Total YTD</div></div>
    </div>
    ${DASH.ncrs.items.map(n=>`
      <div class="ncr-item">
        <div class="ncr-head">
          <span class="ncr-id">${n.id}</span>
          <span class="ncr-type-badge ${typeClass[n.type]||''}">${n.type}</span>
          <span style="font-family:var(--fm);font-size:10px;color:var(--t3);margin-left:auto">Lot: ${n.lot}</span>
        </div>
        <div class="ncr-desc">${n.desc}</div>
        <div class="ncr-meta">Opened: ${n.opened} &nbsp;·&nbsp; Assigned: <span style="color:var(--t2)">${n.assigned}</span></div>
      </div>`).join('')}`;
}

/* ── ISSUES ──────────────────────────────────────────────── */
function renderIssues(){
  const max=Math.max(...DASH.issues.by_type.map(b=>b.count));
  document.getElementById('issuesContent').innerHTML=`
    <div class="card">
      <div class="card-header"><div class="card-title" style="font-size:13px">Open Issues</div></div>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>ID</th><th>Summary</th><th>Severity</th><th>Assigned</th><th>Days</th></tr></thead>
          <tbody>
            ${DASH.issues.open_now.map(i=>`<tr>
              <td style="font-family:var(--fm);color:var(--org);font-size:11px">${i.id}</td>
              <td style="font-size:11px;max-width:200px">${i.summary}</td>
              <td><span class="sev-badge ${i.severity}">${i.severity}</span></td>
              <td style="font-size:11px">${i.assigned}</td>
              <td style="font-family:var(--fm);font-size:11px;color:var(--t3)">${i.days_open}d</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card" style="margin-top:10px">
      <div class="card-header"><div class="card-title" style="font-size:13px">By Type</div></div>
      ${DASH.issues.by_type.map(b=>`
        <div class="issue-type-row">
          <span class="issue-type-name">${b.type}</span>
          <div class="issue-type-track"><div class="issue-type-fill" style="width:0%;background:var(--${b.color})" data-w="${Math.round(b.count/max*100)}"></div></div>
          <span class="issue-type-cnt">${b.count}</span>
        </div>`).join('')}
    </div>`;
  setTimeout(()=>document.querySelectorAll('.issue-type-fill').forEach(f=>{f.style.width=f.dataset.w+'%'}),100);
}

/* ── SECURITY ────────────────────────────────────────────── */
function renderSecurity(){
  const s=DASH.security;
  document.getElementById('secGrid').innerHTML=`
    <div class="sec-stat-card grn">
      <div class="sec-card-label">OAuth2 Authentication</div>
      <div class="sec-card-row"><span class="sec-badge badge grn">${s.oauth2_status}</span></div>
      <div class="sec-card-note" style="margin-top:6px">${s.oauth2_version}</div>
      <div class="sec-card-note">Last check: ${s.oauth2_check}</div>
    </div>
    <div class="sec-stat-card blu">
      <div class="sec-card-label">JPA Migration</div>
      <div class="sec-card-row"><span class="sec-badge badge grn">${s.jpa_status}</span></div>
      <div class="sec-card-note" style="margin-top:6px">${s.jpa_tables} tables migrated</div>
      <div class="sec-card-note">Completed: ${s.jpa_date}</div>
    </div>
    <div class="sec-stat-card pur">
      <div class="sec-card-label">Penetration Test</div>
      <div class="sec-card-row"><span class="sec-badge badge grn">${s.pentest_status}</span></div>
      <div class="sec-card-note" style="margin-top:6px">${s.pentest_critical} Critical &nbsp;·&nbsp; ${s.pentest_high} High <span class="badge grn" style="font-size:9px">Resolved</span></div>
      <div class="sec-card-note">Date: ${s.pentest_date}</div>
    </div>
    <div class="sec-stat-card org">
      <div class="sec-card-label">Spring Security</div>
      <div class="sec-card-big" style="font-size:14px;font-family:var(--fm);color:var(--org);margin:8px 0">${s.spring_version}</div>
      <div class="sec-card-note">Last updated: ${s.spring_updated}</div>
    </div>
    <div class="sec-stat-card grn">
      <div class="sec-card-label">Active Sessions</div>
      <div class="sec-card-big grn">${s.active_sessions}</div>
      <div class="sec-card-note">0 anomalies detected</div>
    </div>
    <div class="sec-stat-card grn">
      <div class="sec-card-label">Failed Logins (24h)</div>
      <div class="sec-card-big grn">${s.failed_logins}</div>
      <div class="sec-card-note">Last incident: ${s.last_incident}</div>
    </div>`;
}

/* ── COMPLIANCE ──────────────────────────────────────────── */
function renderCompliance(){
  const g=document.getElementById('complianceGrid');
  const colors={100:CV.grn,98:CV.grn,97:CV.grn,94:CV.yel};
  const statusColor=s=>s==='Compliant'?'grn':s==='Minor Deviation'?'yel':'red';
  g.innerHTML=DASH.compliance.map(c=>{
    const r=40,circ=2*Math.PI*r,pct=c.score/100,stroke=colors[c.score]||CV.yel;
    const offset=circ*(1-pct);
    return `<div class="comp-card">
      <div class="ring-wrap">
        <svg width="88" height="88" viewBox="0 0 88 88">
          <circle class="ring-bg" cx="44" cy="44" r="${r}"/>
          <circle class="ring-fg" cx="44" cy="44" r="${r}"
            stroke="${stroke}" stroke-dasharray="${circ}" stroke-dashoffset="${circ}"
            data-offset="${offset}"/>
        </svg>
        <div class="ring-text"><div class="ring-pct">${c.score}</div><div class="ring-status">${c.status==='Compliant'?'✓':c.status==='Minor Deviation'?'△':'✗'}</div></div>
      </div>
      <div class="comp-std">${c.std}</div>
      <div class="comp-scope">${c.scope}</div>
      <div><span class="badge ${statusColor(c.status)}" style="font-size:10px">${c.status}</span></div>
      <div class="comp-audit" style="margin-top:6px">Last audit: ${c.last_audit}</div>
    </div>`;
  }).join('');
  setTimeout(()=>document.querySelectorAll('.ring-fg').forEach(el=>{
    el.style.transition='stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)';
    el.style.strokeDashoffset=el.dataset.offset;
  }),80);
}

/* ── CI/CD ───────────────────────────────────────────────── */
function renderCicd(){
  const c=DASH.cicd;
  const maxDurSec=s=>{const[m,rest]=s.split('m ');return parseInt(m)*60+parseInt(rest);};
  const allSecs=c.stages.map(s=>maxDurSec(s.dur));
  const maxSec=Math.max(...allSecs);
  document.getElementById('cicdContent').innerHTML=`
    <div class="two-col">
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">Build ${c.build}</div>
            <div class="card-sub">Total duration: ${c.duration}</div>
          </div>
          <span class="badge grn">${c.status}</span>
        </div>
        ${c.stages.map((s,i)=>`
          <div class="stage-row">
            <span class="stage-name">${s.name}</span>
            <div class="stage-bar-track"><div class="stage-bar-fill" style="--w:${Math.round(allSecs[i]/maxSec*100)}%;width:0%;background:${s.ok?CV.grn:CV.red}" data-w="${Math.round(allSecs[i]/maxSec*100)}"></div></div>
            <span class="stage-dur">${s.dur}</span>
            <div class="stage-dot ${s.ok?'ok':'fail'}"></div>
          </div>`).join('')}
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Deployment History</div></div>
        ${c.recent.map(b=>`
          <div class="deploy-row">
            <span class="deploy-build">${b.build}</span>
            <span class="deploy-ver">${b.version}</span>
            <span class="deploy-date">${b.date}</span>
            <span class="deploy-note">${b.note}</span>
            <span class="badge ${b.status==='Passed'?'grn':'red'}">${b.status}</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="cicd-bottom">
      <span class="cov-label">Coverage</span>
      <div class="cov-bar-track"><div class="cov-bar-fill" id="covBar"></div></div>
      <span class="cov-pct">${c.coverage}%</span>
      <span class="cov-label" style="margin-left:24px">Deploys YTD:</span>
      <span style="font-family:var(--fd);font-size:22px;color:var(--blu);margin-left:4px">${c.deploys_ytd}</span>
    </div>`;
  setTimeout(()=>{
    document.getElementById('covBar').style.width=c.coverage+'%';
    document.querySelectorAll('.stage-bar-fill').forEach(f=>{f.style.width=f.dataset.w+'%'});
  },100);
}

/* ── API DOCS ────────────────────────────────────────────── */
function renderApidocs(){
  const a=DASH.api_docs;
  document.getElementById('apidocsContent').innerHTML=`
    <div class="two-col">
      <div class="card">
        <div class="card-header"><div class="card-title">Coverage Summary</div></div>
        <div class="apidoc-stat-row">
          <div class="apidoc-stat"><div class="v">${a.total}</div><div class="l">Endpoints</div></div>
          <div class="apidoc-stat"><div class="v">${a.documented}</div><div class="l">Documented</div></div>
          <div class="apidoc-stat"><div class="v">${a.pages}</div><div class="l">Swagger Pages</div></div>
        </div>
        <div style="font-family:var(--fm);font-size:11px;color:var(--t3);margin-bottom:14px">Last updated: ${a.updated}</div>
        ${a.groups.map(g=>`
          <div class="api-group-bar">
            <div class="api-group-label"><span>${g.name}</span><span style="color:var(--t3);font-size:10px">${g.count} endpoints</span></div>
            <div class="api-group-track"><div class="api-group-fill" style="width:0%;background:var(--${g.color})" data-w="100"></div></div>
          </div>`).join('')}
      </div>
      <div class="card">
        <div class="card-header"><div class="card-title">Swagger Endpoint Groups</div></div>
        <table>
          <thead><tr><th>Group</th><th>Endpoints</th><th>Status</th></tr></thead>
          <tbody>
            ${a.groups.map(g=>`<tr>
              <td style="color:var(--t1)">${g.name}</td>
              <td style="font-family:var(--fm);color:var(--${g.color})">${g.count}</td>
              <td><span class="api-doc-badge">✓ 100% Documented</span></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
  setTimeout(()=>document.querySelectorAll('.api-group-fill').forEach(f=>{f.style.width='100%'}),100);
}

/* ── TEAM ────────────────────────────────────────────────── */
function renderTeam(){
  const insp=DASH.team_activity.inspectors;
  document.getElementById('teamContent').innerHTML=insp.map(i=>`
    <div class="team-card">
      <div class="team-head">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="${i.active?'team-active-dot':'team-inactive-dot'}"></div>
          <span class="team-name">${i.name}</span>
        </div>
        <span class="team-role">${i.role}</span>
      </div>
      <div class="team-stats">
        <span><b>${i.ytd}</b> YTD</span>
        <span><b>${i.pass_rate}%</b> Pass</span>
        <span><b>${i.open}</b> Open</span>
        <span style="color:${i.active?'var(--grn)':'var(--t3)'}">${i.active?'Active':'Off shift'}</span>
      </div>
    </div>`).join('');
}

/* ── CHARTS ──────────────────────────────────────────────── */
let inspectorChart=null, trendChart=null, trendRange=6;

function renderInspectorChart(){
  const ctx=document.getElementById('inspectorChart').getContext('2d');
  const insp=DASH.team_activity.inspectors;
  if(inspectorChart)inspectorChart.destroy();
  inspectorChart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:insp.map(i=>i.name),
      datasets:[{
        label:'YTD Inspections',
        data:insp.map(i=>i.ytd),
        backgroundColor:insp.map(i=>i.active?'rgba(249,115,22,.7)':'rgba(90,80,72,.5)'),
        borderColor:insp.map(i=>i.active?CV.org:CV.t3),
        borderWidth:1,borderRadius:4
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`YTD: ${c.parsed.y}`}}},
      scales:{
        x:{ticks:{color:CV.t2,font:{family:"'JetBrains Mono'",size:11}},grid:{color:'rgba(13,31,60,.06)'}},
        y:{ticks:{color:CV.t3,font:{family:"'JetBrains Mono'",size:10}},grid:{color:'rgba(13,31,60,.06)'}}
      }
    }
  });
}

function setRange(n){
  trendRange=n;
  document.querySelectorAll('.trend-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.trend-btn').forEach(b=>{if(b.textContent.includes(n===10?'YTD':n+'M'))b.classList.add('active')});
  renderTrendChart();
}

function renderTrendChart(){
  const ctx=document.getElementById('trendChart').getContext('2d');
  const t=DASH.trend;
  const slice=n=>t.months.slice(-n);
  const months=slice(trendRange);
  const insp=t.inspections_completed.slice(-trendRange);
  const turn=t.avg_turnaround_days.slice(-trendRange);
  const grpc=t.grpc_calls.slice(-trendRange);
  if(trendChart)trendChart.destroy();
  trendChart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:months,
      datasets:[
        {type:'bar',label:'Inspections',data:insp,backgroundColor:'rgba(249,115,22,.45)',borderColor:CV.org,borderWidth:1,borderRadius:3,yAxisID:'y',order:2},
        {type:'line',label:'Avg Turnaround (d)',data:turn,borderColor:CV.grn,backgroundColor:'rgba(58,158,114,.15)',pointRadius:3,pointBackgroundColor:CV.grn,tension:.35,yAxisID:'y1',order:1},
        {type:'line',label:'GRPC Calls',data:grpc,borderColor:CV.pur,backgroundColor:'rgba(128,96,184,.1)',pointRadius:3,pointBackgroundColor:CV.pur,tension:.35,yAxisID:'y2',order:1}
      ]
    },
    options:{
      responsive:true,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:CV.t2,font:{family:"'JetBrains Mono'",size:10},boxWidth:12,padding:16}}},
      scales:{
        x:{ticks:{color:CV.t2,font:{family:"'JetBrains Mono'",size:11}},grid:{color:'rgba(13,31,60,.06)'}},
        y:{ticks:{color:CV.t3,font:{size:10}},grid:{color:'rgba(13,31,60,.06)'},title:{display:true,text:'Inspections',color:CV.t3,font:{size:10}}},
        y1:{position:'right',ticks:{color:CV.grn,font:{size:10}},grid:{display:false},title:{display:true,text:'Days',color:CV.grn,font:{size:10}}},
        y2:{display:false}
      }
    }
  });
}

/* ── ACTION BUTTONS ──────────────────────────────────────── */
function syncAll(){
  toast('Initiating sync on all 4 integrations...','org');
  setTimeout(()=>toast('All integrations synced successfully — AutoCAD, MicroStation, GRPC API, Terraform.','grn'),2200);
}
function openSchedule(){
  toast('Inspection scheduler opened — select a material type, inspector, and lot window to create a new schedule entry.','blu');
}
function runGrpcReview(){
  toast('Running property review... connecting to Spring Boot microservice...','pur');
  setTimeout(()=>toast('PRV-0242 — A36 plate (Lot L-1193) passed — Yield 37 ksi ✓ · Tensile 62 ksi ✓ — 138ms','grn'),2000);
}
function runSecurityScan(){
  toast('Initiating security scan — checking OAuth2 tokens, session anomalies, and dependency CVEs...','blu');
  setTimeout(()=>toast('Security scan complete — 0 critical, 0 high vulnerabilities detected. All session tokens valid.','grn'),2600);
}
function triggerBuild(){
  toast('Build #89 triggered — GitHub Actions pipeline starting: Checkout → Tests → OWASP Scan → Docker → Terraform...','pur');
  setTimeout(()=>toast('Build #89 passed — all 6 stages complete — 4m 09s — deployed to ECS us-east-2.','grn'),3800);
}

/* -- INIT -- */
document.addEventListener('DOMContentLoaded',()=>{
  buildTicker();
  renderKpis();
  renderIntegrations();
  renderPipeline();
  renderMaterial();
  renderGrpc();
  renderLots();
  renderNcrs();
  renderIssues();
  renderSecurity();
  renderCompliance();
  renderCicd();
  renderApidocs();
  renderTeam();
  renderInspectorChart();
  renderTrendChart();
  injectHelpBanners();
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('on'));
      btn.classList.add('on');
      document.querySelectorAll('.tab-section').forEach(s=>s.classList.remove('on'));
      document.getElementById(btn.dataset.tab).classList.add('on');
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });
});