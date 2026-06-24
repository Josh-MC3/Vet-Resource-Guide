/* ============================================================================
   VETERAN & MILITARY SPOUSE RESOURCE PORTAL — DATA LAYER
   ----------------------------------------------------------------------------
   This file is the single source of truth. Every page reads from window.ORGS.
   To add an organization later, append one object to the array below — no code
   changes required.

   DATA INTEGRITY CONVENTION
   -------------------------
   Each field carries an implicit trust level:
     • VERIFIED  — confirmed against official / .gov / .mil sources (this pass)
     • ESTIMATE  — analytical judgement (entry barrier, ROI, salary). Shown in
                   the UI with an "Estimate" tag and a methodology note.
     • PENDING   — not yet researched. status:"stub" marks these orgs so the UI
                   can label them "Research in progress."

   verified:true   → core facts confirmed this session
   verified:false  → stub; structure present, facts pending next batch
   ========================================================================== */

window.ORG_CATEGORIES = [
  { id: "education",      n: 1,  label: "Education & Certifications",   color: "#1d4e89", blurb: "Degrees, certs, and skill-building pathways." },
  { id: "transition",    n: 2,  label: "Transition & Employment",     color: "#c0392b", blurb: "Fellowships and programs that bridge to civilian jobs." },
  { id: "health",        n: 3,  label: "Health & Wellness",           color: "#2e7d4f", blurb: "Mental, physical, and community wellbeing." },
  { id: "it",            n: 4,  label: "IT & Data",                   color: "#6c3fa4", blurb: "Cloud, cyber, software, and data training." },
  { id: "trades",        n: 5,  label: "Trades & Skilled Careers",    color: "#e07b1c", blurb: "Apprenticeships and skilled-trade onramps." },
  { id: "business",      n: 6,  label: "Business & Entrepreneurship", color: "#16858a", blurb: "Start, fund, and grow a venture." },
  { id: "spouse",        n: 7,  label: "Military Spouse Resources",   color: "#b8860b", blurb: "Portable careers and spouse-specific support." },
  { id: "leadership",    n: 8,  label: "Leadership & Mentorship",     color: "#34495e", blurb: "1:1 mentors, networks, and leadership growth." },
  { id: "remote",        n: 9,  label: "Remote Work Pathways",        color: "#7d2e46", blurb: "Distributed and location-independent work." },
  { id: "financial",     n: 10, label: "Financial & Benefits",       color: "#13315c", blurb: "VA benefits, GI Bill, and financial readiness." }
];

/* Cost model tags (used for filtering) */
// free | partially-funded | scholarship | gi-bill | vre | self-pay

window.ORGS = [

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 1 — 12)
   ========================================================================== */

{
  id: "fourblock",
  name: "FourBlock",
  verified: true,
  categories: ["transition", "leadership"],
  url: "https://www.fourblock.org/",
  tagline: "Cohort-based career readiness built with Columbia University.",
  overview: "FourBlock runs a structured, relationship-driven Veteran Career Readiness Program (VCRP) that pairs transitioning service members, veterans, and military spouses with corporate mentors and employers. Curriculum was developed in partnership with Columbia University.",
  mission: "To support military veterans in building meaningful careers, with a vision of every veteran transitioning with purpose and opportunity.",
  founded: "2010",
  hq: "New York, NY",
  funding: "501(c)(3) nonprofit; corporate and foundation funded.",
  audience: ["Transitioning service members", "Veterans", "Military spouses"],
  geographic: "40+ U.S. markets plus virtual cohorts; some seats reserved for overseas/remote participants.",
  eligibility: "Open to transitioning service members, veterans, and military spouses. Cohort timing aligns with fall and spring academic semesters.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to participants. Indirect cost is the time commitment across a multi-week cohort." },
  programs: [{
    name: "Veteran Career Readiness Program (VCRP)",
    description: "Multi-week cohort blending coaching, employer engagement, and a Columbia-built curriculum. Each cohort averages ~30 participants with a 2:1 participant-to-coach ratio.",
    serves: "Veterans and spouses actively investing in a deliberate career transition (not a quick-placement service).",
    apply: ["Apply online for an upcoming spring/fall cohort", "Choose in-person, virtual, or self-paced track", "Cohort placement by location and time zone"],
    timeline: "Runs twice yearly (spring/fall), multi-week.",
    capacity: "~30 per cohort"
  }],
  barrier: { level: "Low-Medium", reasons: "Open application with no test, but requires sustained weekly commitment across a full cohort. People who treat it as a passive webinar get little out of it." },
  outcomes: {
    note: "ESTIMATE / org-reported. FourBlock publicizes alumni outcomes; treat as self-reported.",
    orgReported: "Org reports ~84–92% of alumni securing full-time roles and average starting salaries around $93K–$100K+ in recent materials."
  },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Strong for officers and senior enlisted aiming at corporate roles; network value is the core asset." },
  nobodyTells: [
    "It is a network and storytelling program, not a job-placement guarantee.",
    "The value compounds with how much you put in — passive attendance wastes the seat.",
    "Best results come when you start 6–12 months before separation, not the week you get out."
  ],
  fitByRank: {
    junior_enlisted: "Useful but you may benefit more from skills training first.",
    nco: "Good — translates leadership into corporate language.",
    senior_enlisted: "Strong fit for management-track roles.",
    junior_officer: "Excellent — core target audience.",
    senior_officer: "Excellent — network access matches seniority."
  },
  careers: ["Project Management", "Operations Management", "Consulting", "Program Management", "Finance"],
  pathways: ["Navy Officer → FourBlock → Corporate Fellowship → Fortune 500 PM role"],
  community: {
    praise: ["Strong cohort camaraderie", "Real employer access", "Columbia-built curriculum respected"],
    complaints: ["Not a placement service — some expect a job handed to them", "Time commitment surprises people"],
    tips: ["Show up to every huddle", "Use coaches aggressively", "Treat immersion trips as interviews"]
  },
  sources: ["fourblock.org", "news.va.gov", "studentveterans.org"]
},

{
  id: "mssa",
  name: "Microsoft Software & Systems Academy (MSSA)",
  verified: true,
  categories: ["it", "education"],
  url: "https://military.microsoft.com/mssa/",
  tagline: "17-week, fully-funded tech training into cloud and cyber roles.",
  overview: "MSSA is a full-time, 17-week technical training program that prepares transitioning service members and veterans for cloud development, cloud administration, and cybersecurity operations roles, with industry certifications and an interview pipeline to Microsoft and 1,000+ partner companies.",
  mission: "Connect underemployed military talent with the technical-skills shortage in the IT industry.",
  founded: "2013 (10+ years of operation; ~3.6k–4k graduates)",
  hq: "Redmond, WA (Microsoft)",
  funding: "Fully funded by Microsoft (since January 2021 Microsoft covers all program costs).",
  audience: ["Transitioning service members", "Veterans", "Reservists", "Retirees", "Military spouses (separate MSSA–Military Spouse track)"],
  geographic: "Virtual; cohorts run in Pacific or Central time zones (plus MSSA-Europe in CET). Must commit to the cohort time zone.",
  eligibility: "Veterans/retirees/reservists from US and UK-MoD branches; active-duty within 180 days of separation. Honorable or General (Under Honorable) discharge. DoD SkillBridge-approved; active duty need command approval.",
  status: "active",
  cost: { tags: ["free"], detail: "Microsoft fully funds tuition. Keep your GI Bill — not required. Not a paid internship; no stipend. MSSA itself is not currently VA-approved but is SkillBridge-approved." },
  programs: [{
    name: "MSSA (SCA / CSO / CAD learning paths)",
    description: "Live virtual instruction, hands-on labs, and industry certifications across Server & Cloud Administration, Cybersecurity Operations, and Cloud Application Development. Full-time, 0800–1700 M–F.",
    serves: "Career-changers into IT; no prior technical experience required.",
    apply: ["Submit basic info during the ~2-week application window", "Eligibility verification", "Complete a LinkedIn Learning prerequisite path", "Submit documents by materials cutoff", "Admissions interview", "Decision 3–4 weeks before cohort start"],
    timeline: "~20 weeks from application open to decision; 17-week program.",
    capacity: "Cohort-based; competitive."
  }],
  barrier: { level: "Medium-High", reasons: "Competitive admissions with an interview and a prerequisite cert path. The bigger barrier is the full-time 17-week commitment — you effectively cannot work or attend school alongside it." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Microsoft reports ~4,000 graduates placed across 1,000+ companies over the program's life."
  },
  roi: { score: 9, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. One of the strongest free tech onramps; pairs ideally with SkillBridge during terminal leave." },
  nobodyTells: [
    "It is genuinely full-time — plan your terminal leave/SkillBridge around it.",
    "MSSA is not itself VA-approved, but it's SkillBridge-approved and free, so GI Bill stays intact.",
    "Graduating does not guarantee a Microsoft job; it guarantees an interview pipeline."
  ],
  fitByRank: {
    junior_enlisted: "Strong — designed for entry-level career changers.",
    nco: "Strong.",
    senior_enlisted: "Good if you want a hands-on technical role vs. management.",
    junior_officer: "Good — but consider whether you want IC tech work vs. PM track.",
    senior_officer: "Mixed — may be over-leveled for entry IC roles; consider PM/leadership routes."
  },
  careers: ["Cloud Administrator", "Cloud Developer", "Cybersecurity Operations", "Systems Administrator", "Technical Support"],
  pathways: ["Service member → MSSA (SkillBridge) → Microsoft/partner interview → Cloud role"],
  community: {
    praise: ["Genuinely free", "Strong brand on a résumé", "Real cert attainment"],
    complaints: ["Intense full-time load", "Time-zone lock", "No guaranteed job"],
    tips: ["Start the LinkedIn Learning prereqs early", "Get command/SkillBridge paperwork moving months ahead", "Pick the learning path by target role, not by schedule"]
  },
  sources: ["military.microsoft.com", "news.microsoft.com", "collegerecon.com"]
},

{
  id: "hoh-cfp",
  name: "Hiring Our Heroes — Corporate Fellowship Program (CFP)",
  verified: true,
  categories: ["transition"],
  url: "https://www.hiringourheroes.org/career-services/fellowships/",
  tagline: "12-week SkillBridge fellowship embedding you inside a host company.",
  overview: "A U.S. Chamber of Commerce Foundation initiative, HOH's Corporate Fellowship Program is a DoD SkillBridge fellowship placing transitioning service members into 12-week, hands-on roles with host companies (small businesses to Fortune 500), with weekly professional-development 'huddles.'",
  mission: "Connect the military community with meaningful employment opportunities.",
  founded: "Hiring Our Heroes launched 2011 (U.S. Chamber of Commerce Foundation).",
  hq: "Washington, DC",
  funding: "Nonprofit; U.S. Chamber of Commerce Foundation and corporate partners.",
  audience: ["Transitioning service members", "Veterans", "Military spouses (spouse fellowship tracks)"],
  geographic: "Select military installations and host cities nationwide; some virtual placements.",
  eligibility: "Active duty or transition leave, within 180 days of transition at program time; must meet education/leadership requirements; command approval via SkillBridge.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to job seekers or employers. You remain on military pay/benefits during SkillBridge." },
  programs: [{
    name: "Corporate Fellowship Program (CFP)",
    description: "12-week, cohort-based fellowship: 2-day HOH orientation, four-to-five days/week on-the-job training with a matched host company, and Friday professional-development huddles.",
    serves: "Degreed/experienced transitioning members targeting corporate roles.",
    apply: ["Apply online", "Program manager contacts you (within ~3 business days)", "Matching with host company by skills/preferences", "Command/SkillBridge approval"],
    timeline: "12 weeks; runs three times per year.",
    capacity: "Hundreds of participating host companies; varies by location."
  }],
  barrier: { level: "Medium", reasons: "Matching is competitive and host slots vary by city. A job offer is not guaranteed — fellows interview for open roles after proving fit." },
  outcomes: { note: "ESTIMATE / org-reported. Strong reputation as a 'test drive' into corporate roles; outcomes vary by host." },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Excellent ROI because you keep military pay during the fellowship and gain real corporate experience." },
  nobodyTells: [
    "It is a 12-week try-out, not a guaranteed hire.",
    "Your host-company match is everything — be proactive about direction.",
    "Friday huddles teach the soft skills (negotiation, corporate comms) that actually move the needle."
  ],
  fitByRank: {
    junior_enlisted: "Use the Skills-Based Fellowship track (non-degreed) instead.",
    nco: "Good.",
    senior_enlisted: "Strong.",
    junior_officer: "Excellent fit.",
    senior_officer: "Excellent — corporate roles match seniority."
  },
  careers: ["Project Management", "Operations", "Program Management", "Finance", "HR", "Sales"],
  pathways: ["Officer → HOH CFP (SkillBridge) → host-company hire"],
  community: {
    praise: ["Keep military pay while training", "Real corporate exposure", "Strong host network"],
    complaints: ["No guaranteed offer", "Quality depends heavily on host match"],
    tips: ["Direct-match a target company if you can (e.g., Microsoft via HOH)", "Treat the fellowship as a 12-week interview"]
  },
  sources: ["hiringourheroes.org", "military.microsoft.com"]
},

{
  id: "acp",
  name: "American Corporate Partners (ACP)",
  verified: true,
  categories: ["leadership", "transition"],
  url: "https://www.acp-usa.org/",
  tagline: "Free year-long 1:1 mentorship with corporate professionals.",
  overview: "ACP is a national nonprofit offering a free, year-long, one-on-one mentorship pairing post-9/11 veterans and eligible spouses with corporate professionals (many from Fortune 500 companies). Pairs meet monthly; an ACP staff member supports each mentorship.",
  mission: "Help veterans transition from the military to meaningful civilian careers.",
  founded: "2010",
  hq: "New York, NY",
  funding: "Nonprofit; grant-funded (grants are specific to post-9/11 service, which drives eligibility limits).",
  audience: ["Post-9/11 veterans", "Reserve/Guard", "Eligible military spouses"],
  geographic: "Nationwide; ~70% of mentorships are long-distance (phone/video).",
  eligibility: "Veterans (incl. Reserve/Guard) with 180+ days active duty since 9/11; some injured-in-service exceptions; active-duty spouses, surviving spouses, and spouses of severely wounded post-9/11 veterans. Pre-9/11 veterans use the free AdvisorNet platform instead.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free for veterans and eligible spouses." },
  programs: [{
    name: "Veteran Mentoring Program",
    description: "Hand-matched 1:1 mentorship for one year (12 monthly sessions). Mentors guide professional development; they are explicitly not required to find you a job.",
    serves: "Veterans job-searching, newly employed, considering education, or starting a business.",
    apply: ["Submit a ~10-minute online application", "Orientation call with ACP staff (within ~1 business day)", "Staff hand-picks a mentor by career interest/experience", "Begin year-long mentorship"],
    timeline: "1 year; recommended to start 12–18 months before ETS.",
    capacity: "Thousands enrolled at a time."
  }],
  barrier: { level: "Low", reasons: "Open application; the only gate is post-9/11 eligibility. Main 'failure' mode is treating it passively — protégés must drive the relationship." },
  outcomes: { note: "ESTIMATE / org-reported. ACP cites tens of thousands of completions and average starting salaries around $80K–$93K in various years." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Extremely high return on time (≈1 hr/month) for the network and guidance gained." },
  nobodyTells: [
    "Mentors guide — they are not recruiters and won't hand you a job.",
    "Pre-9/11 veterans are not eligible for 1:1 mentorship (grant-driven), but AdvisorNet is open to all.",
    "You set the agenda; passive protégés get little value."
  ],
  fitByRank: {
    junior_enlisted: "Great low-cost guidance.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Excellent — mentor seniority can match ambition.",
    senior_officer: "Excellent — can request executive-level mentors."
  },
  careers: ["Any — mentor matched to your target field", "Entrepreneurship", "Consulting", "Finance", "Operations"],
  pathways: ["Officer → ACP mentor (exec) → targeted networking → role"],
  community: {
    praise: ["Genuinely free", "Tiny time cost", "Real corporate mentors"],
    complaints: ["Post-9/11 gate frustrates older vets", "Mentor quality varies", "Not a job pipeline"],
    tips: ["Come to each session with a goal", "Ask your mentor for warm introductions", "Pair it with a structured program like FourBlock"]
  },
  sources: ["acp-usa.org", "news.va.gov"]
},

{
  id: "vettec2",
  name: "VET TEC 2.0 (VA High-Tech Program)",
  verified: true,
  categories: ["it", "education", "financial"],
  url: "https://www.va.gov/education/other-va-education-benefits/vet-tec-2/",
  tagline: "VA-funded tech bootcamps — relaunched June 2026, with new rules.",
  overview: "Veteran Employment Through Technology Education Courses 2.0 is a VA program that pays approved training providers directly for short, intensive tech programs (software, data, cybersecurity, cloud, IT, UX), plus a books stipend and Post-9/11-equivalent monthly housing allowance. Reauthorized under the Dole Act; applications opened June 15, 2026.",
  mission: "Help eligible veterans and active-duty members build skills for high-tech careers.",
  founded: "Pilot 2019–2024; relaunched as VET TEC 2.0 (applications opened June 15, 2026).",
  hq: "U.S. Department of Veterans Affairs",
  funding: "Federal (VA); authorized/funded through September 30, 2027.",
  audience: ["Veterans", "Active-duty within 180 days of separation (per provider listings)"],
  geographic: "Nationwide via VA-approved training providers (in-person and virtual).",
  eligibility: "Designed for veterans seeking high-tech careers. Notable 2.0 changes: ~36 months of service referenced by providers, under age 62, honorable discharge; you do NOT need prior GI Bill eligibility. Confirm specifics on VA.gov.",
  status: "active",
  cost: { tags: ["gi-bill", "free"], detail: "VA pays tuition to the provider plus housing/books. KEY 2.0 CHANGE: if you have remaining GI Bill entitlement, it's charged 1 month per month of full-time training (the pilot did not do this). If your GI Bill is exhausted, you can still participate with no entitlement charge. Capped at 4,000 paid participants per fiscal year." },
  programs: [{
    name: "VET TEC 2.0 high-tech training",
    description: "Short, intensive (~6–28 week) non-degree programs at approved providers in computer programming, software, data processing, information sciences, and media applications. Providers face a 70% employment-rate performance standard or tuition-refund guarantee.",
    serves: "Veterans pursuing software, data, cyber, cloud, IT, or UX careers.",
    apply: ["Confirm program approval via the GI Bill Comparison Tool", "Apply through VA (portal opened June 15, 2026)", "Enroll with an approved provider", "Verify enrollment monthly to keep housing allowance"],
    timeline: "Program length 6–28 weeks; benefit authorized through FY2027.",
    capacity: "4,000 paid participants per fiscal year (first-come pressure likely)."
  }],
  barrier: { level: "Medium", reasons: "The 4,000/year cap and first-come dynamics are the real barrier, plus the new entitlement-charge rule changes the math for anyone with GI Bill left." },
  outcomes: { note: "ESTIMATE. The pilot put 14,000+ veterans through bootcamps; outcomes vary heavily by provider and local hiring market." },
  roi: { score: 7, salaryImpact: "High", timeReturn: "Medium-High", note: "ESTIMATE. Strong if your GI Bill is already spent; weigh the entitlement charge carefully if it isn't. Compare against VR&E (Chapter 31), which doesn't draw down GI Bill." },
  nobodyTells: [
    "The big 2.0 change: it now charges your GI Bill 1-for-1 if you have entitlement left — the pilot didn't.",
    "If you've exhausted your GI Bill, this is essentially free additional training — a genuine advantage.",
    "If you have a VA disability rating, check VR&E (Chapter 31) first; it can fund tech training without touching your GI Bill.",
    "Only 4,000 funded seats per fiscal year — apply early."
  ],
  fitByRank: {
    junior_enlisted: "Good onramp to tech.",
    nco: "Good.",
    senior_enlisted: "Good if targeting a hands-on tech role.",
    junior_officer: "Consider whether a bootcamp or a PM route fits better.",
    senior_officer: "Often better served by leadership/PM routes; still viable for a deliberate tech pivot."
  },
  careers: ["Software Engineering", "Data Analytics", "Cybersecurity", "Cloud Computing", "UX"],
  pathways: ["Veteran (GI Bill exhausted) → VET TEC 2.0 bootcamp → entry tech role"],
  community: {
    praise: ["Funds training even with no GI Bill left", "Housing allowance during training", "Provider accountability standards"],
    complaints: ["Entitlement now charged for those with GI Bill", "4,000-seat cap", "Provider quality varies"],
    tips: ["Run the numbers against VR&E and standard GI Bill first", "Verify the exact provider/program is approved", "Apply the moment your window opens"]
  },
  sources: ["va.gov", "benefits.va.gov", "codeplatoon.org", "collegerecon.com"]
},

{
  id: "salesforce-military",
  name: "Salesforce Military (Trailhead Military)",
  verified: true,
  categories: ["it", "education", "spouse"],
  url: "https://veterans.my.site.com/s/",
  tagline: "Free, self-paced Salesforce training, certs, and exam vouchers.",
  overview: "Formerly Vetforce, Salesforce Military offers free, self-paced learning on the Trailhead platform, free certification exam vouchers, expert-led Trailhead Academy classes, and a hiring pipeline (Talent Alliance) to Salesforce partners. Relaunched in 2025 with an added AI/Agentblazer focus.",
  mission: "Equip the military community for careers in the Salesforce ecosystem and the AI economy.",
  founded: "2014 (as Vetforce)",
  hq: "Salesforce, San Francisco, CA",
  funding: "Corporate (Salesforce). Training package valued at $4,000+ offered at no cost.",
  audience: ["Active duty", "Reserve/Guard", "Veterans", "Military spouses"],
  geographic: "U.S., U.K., Canada, Australia, New Zealand.",
  eligibility: "Active, reserve, or National Guard duty; military veterans; or military spouses. Status verified via TroopID / ID.me.",
  status: "active",
  cost: { tags: ["free"], detail: "Free training, free certification exam vouchers, and free Academy classes. Self-paced; many finish in ~4 months." },
  programs: [{
    name: "Trailhead Military learning paths",
    description: "Gamified, self-paced 'trails' toward Salesforce certifications (e.g., Administrator), with exam-fee vouchers and access to live Academy classes. Talent Alliance offers interviews with certified-candidate partners.",
    serves: "Career-changers into the Salesforce/CRM/AI ecosystem; no tech background required.",
    apply: ["Register and verify military status via TroopID/ID.me", "Choose a career path / trail", "Complete trails, then request a free exam voucher", "Sit certification exam"],
    timeline: "Self-paced; commonly ~4 months at a few hours/week.",
    capacity: "Open enrollment."
  }],
  barrier: { level: "Low", reasons: "Open enrollment, self-paced. The barrier is self-discipline — no cohort structure means many start and never finish." },
  outcomes: { note: "ESTIMATE / org-reported. ~40,000 community members since 2014; 1,200+ placed into tech jobs; average reported salary around $70K (older Military.com figure)." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Excellent return for the time/cost (free, self-paced) if you finish and certify." },
  nobodyTells: [
    "It's self-paced with no cohort — accountability is on you.",
    "Certification alone doesn't get hired; the Talent Alliance interview pipeline is the real lever.",
    "The Salesforce admin/ecosystem job market is competitive at entry level — pair certs with projects."
  ],
  fitByRank: {
    junior_enlisted: "Great free starting point.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Good — admin/PM and consulting roles in the ecosystem.",
    senior_officer: "Good for consulting/ecosystem-leadership angles."
  },
  careers: ["Salesforce Administrator", "Salesforce Developer", "CRM Consultant", "Business Analyst"],
  pathways: ["Service member → Trailhead Military certs → Talent Alliance interview → Salesforce partner role"],
  community: {
    praise: ["Completely free incl. exam vouchers", "Gamified, approachable", "Active veteran community"],
    complaints: ["No structure → low completion", "Entry market competitive"],
    tips: ["Aim for 'Ranger' status before the exam", "Build a portfolio org", "Lean on the Vetforce community"]
  },
  sources: ["trailhead.salesforce.com", "salesforce.com", "news.va.gov", "military.com"]
},

{
  id: "aws-restart",
  name: "AWS re/Start",
  verified: true,
  categories: ["it", "education"],
  url: "https://aws.amazon.com/training/restart/",
  tagline: "Free, cohort-based cloud training for entry-level cloud roles.",
  overview: "AWS re/Start is a free, full-time, cohort-based workforce program (delivered via collaborating organizations like Per Scholas) that builds Linux, Python, networking, security, database, and core AWS skills for entry-to-mid-level cloud roles, including AWS Cloud Practitioner exam prep and employer connections. Open to veterans and families among other groups.",
  mission: "Prepare individuals — including veterans and military families — for cloud careers and connect them to employers.",
  founded: "AWS re/Start launched ~2017; Amazon's veteran cloud commitments expanded 2020–2021.",
  hq: "Amazon Web Services (Seattle, WA) and global delivery partners.",
  funding: "Corporate (AWS); free to the learner.",
  audience: ["Veterans and military families", "Unemployed/underemployed career-changers"],
  geographic: "Delivered through collaborating organizations; many require commutable distance to a campus, with some national/virtual options. Availability varies by partner/country.",
  eligibility: "No technology background required. Specific qualifications vary by collaborating organization and location; open to military veterans and their families.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to learners, including a complimentary AWS Cloud Practitioner exam attempt. Separately, the VA reimburses AWS certification exam fees (VA Form 22-803) for GI Bill-covered veterans, up to $2,000." },
  programs: [{
    name: "AWS re/Start cohort",
    description: "Scenario-based, instructor-led training covering Linux, Python, networking, security, databases, automation, and core AWS, plus résumé/interview coaching and Cloud Practitioner prep.",
    serves: "Career-changers into cloud, including veterans with no prior IT experience.",
    apply: ["Apply via a collaborating-organization site (e.g., Per Scholas)", "Complete required Tech Prep Work", "Assessment + interview", "Competitive seat offer + enrollment docs"],
    timeline: "Multi-week, full-time, cohort-based.",
    capacity: "Limited, competitive seats per cohort."
  }],
  barrier: { level: "Medium", reasons: "Application is competitive with limited slots; many partners require commutable distance and mandatory prep work. Full-time pace is bootcamp-intensive." },
  outcomes: { note: "ESTIMATE / org-reported. Strong brand value for cloud entry; outcomes vary by delivery partner and market." },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Cloud certs carry real weight day one; pairs well with an active clearance for GovCloud roles at defense contractors." },
  nobodyTells: [
    "Delivery is through partners (e.g., Per Scholas) — eligibility and location rules vary by partner.",
    "An active clearance + AWS cert is a powerful combo for GovCloud roles at Booz Allen, Leidos, SAIC, etc.",
    "Separately from re/Start, the VA reimburses AWS exam fees — don't pay out of pocket if you qualify."
  ],
  fitByRank: {
    junior_enlisted: "Strong entry path.",
    nco: "Strong.",
    senior_enlisted: "Good for hands-on cloud roles.",
    junior_officer: "Good — cloud + clearance is highly marketable.",
    senior_officer: "Consider cloud architect/PM tracks; re/Start is entry-level IC."
  },
  careers: ["Cloud Support", "Systems Administrator", "Cloud Automation", "Infrastructure Engineer", "Technical Support"],
  pathways: ["Cleared veteran → AWS re/Start → AWS cert → GovCloud engineer at a defense contractor"],
  community: {
    praise: ["Free, real cloud skills", "Cert-aligned", "Employer connections"],
    complaints: ["Location constraints", "Competitive seats", "Intense pace"],
    tips: ["Do the optional prep work too", "Prioritize cleared roles before your clearance lapses", "Use VA exam reimbursement"]
  },
  sources: ["aws.amazon.com", "perscholas.org", "usveteransmagazine.com"]
},

{
  id: "bunker-labs",
  name: "Bunker Labs (now IVMF Military Founders Lab)",
  verified: true,
  categories: ["business"],
  url: "https://ivmf.syracuse.edu/programs/entrepreneurship/",
  tagline: "Veteran entrepreneurship community — now part of Syracuse's IVMF.",
  overview: "Bunker Labs, founded in 2014, became a national veteran-entrepreneur network. It is now operated under Syracuse University's D'Aniello Institute for Veterans and Military Families (IVMF). Its flagship incubator (formerly Veterans in Residence) has been consolidated into the Military Founders Lab, alongside the CEOcircle peer group and the Ambassador community-builder program.",
  mission: "Empower the veteran and military-spouse community to become leaders in entrepreneurship and innovation.",
  founded: "2014 (Chicago); transitioned under IVMF; flagship incubator rebranded to Military Founders Lab (2025).",
  hq: "Now operated by IVMF, Syracuse University, NY.",
  funding: "Nonprofit; foundation/corporate funded (e.g., MetLife Foundation historically).",
  audience: ["Veteran entrepreneurs", "Military-spouse entrepreneurs"],
  geographic: "Nationwide; programming is largely virtual with local ambassador chapters.",
  eligibility: "Veterans and/or military spouses. CEOcircle requires established companies ($1M+ revenue or $5M+ raised); Military Founders Lab serves earlier-stage founders.",
  status: "active",
  cost: { tags: ["free"], detail: "Core programs are free to participants. No program provides direct funding/capital." },
  programs: [
    {
      name: "Military Founders Lab (formerly Veterans in Residence / BBiE / Bunker Build Up)",
      description: "10-week virtual incubator with business tools, mentorship, peer cohorts, and industry/experience-aligned tracks. Runs three cohorts a year (winter, spring, fall).",
      serves: "Early-stage and growing veteran/spouse-owned businesses.",
      apply: ["Apply online and select the track that fits", "Cohort placement by IVMF team"],
      timeline: "10 weeks; 3 cohorts/year.",
      capacity: "Cohort-based."
    },
    {
      name: "CEOcircle",
      description: "Peer mastermind for established veteran/spouse CEOs (company grosses $1M+ or has raised $5M+).",
      serves: "Scaling founders/executives.",
      apply: ["Apply; vetted by revenue/industry metrics"],
      timeline: "Cohort-based with fly-in events.",
      capacity: "Selective."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Early-stage programs are open to apply; CEOcircle is gated by serious revenue/raise thresholds. The work is on you — no capital is provided." },
  outcomes: { note: "ESTIMATE. Value is network, structure, and accountability rather than funding." },
  roi: { score: 6, salaryImpact: "Variable", timeReturn: "Medium", note: "ESTIMATE. ROI depends entirely on your venture; strongest as community + structure, not capital." },
  nobodyTells: [
    "The 'Bunker Labs' brand now lives under Syracuse's IVMF — names and program structures changed recently.",
    "No program hands you money — it's mentorship, peers, and tools.",
    "CEOcircle is for real, revenue-generating companies, not idea-stage founders."
  ],
  fitByRank: {
    junior_enlisted: "Fine if you have a venture idea.",
    nco: "Good for early founders.",
    senior_enlisted: "Good.",
    junior_officer: "Good for early-stage founders.",
    senior_officer: "CEOcircle if you already run a substantial company."
  },
  careers: ["Entrepreneurship", "Small Business Ownership", "Franchising"],
  pathways: ["Veteran with an idea → Military Founders Lab → CEOcircle as you scale"],
  community: {
    praise: ["Strong peer community", "Free", "Veteran-specific context"],
    complaints: ["No capital provided", "Recent rebrands cause confusion"],
    tips: ["Pick the track that matches your stage", "Combine with SBA VBOC and SCORE for the full toolkit"]
  },
  sources: ["ivmf.syracuse.edu", "mymilitarybenefits.com"]
},

{
  id: "mycaa",
  name: "MyCAA / SpouseWorks Scholarship",
  verified: true,
  categories: ["spouse", "education", "financial"],
  url: "https://mycaa.militaryonesource.mil/mycaa/",
  tagline: "Up to $4,000 for military spouses toward portable credentials.",
  overview: "The My Career Advancement Account (MyCAA) Scholarship — recently presented as the SpouseWorks Scholarship under Military OneSource — provides up to $4,000 in tuition assistance (capped at $2,000 per fiscal year) for eligible military spouses pursuing licenses, certifications, national testing, or associate degrees in portable career fields.",
  mission: "Help military spouses build portable careers that survive frequent PCS moves.",
  founded: "DoD program (current $4,000 structure in place for years); rebranded under SpouseWorks (2026).",
  hq: "U.S. Department of Defense / Military OneSource.",
  funding: "Federal (DoD).",
  audience: ["Spouses of active-duty service members in eligible pay grades"],
  geographic: "Usable at any MyCAA-approved school/program (incl. overseas installations' programs).",
  eligibility: "Spouses of active-duty members (and Title 10 Guard/Reserve) in junior pay grades. NOTE: the exact eligible pay grades have changed over time — recent sources cite E-1–E-9, W-1–W-3, O-1–O-3 in some materials and a narrower E-1–E-5/W-1–W-2/O-1–O-2 in others. Confirm current eligibility on the official portal. Cannot use simultaneously with transferred GI Bill benefits.",
  status: "active",
  cost: { tags: ["free", "scholarship"], detail: "Up to $4,000 lifetime, $2,000/fiscal-year cap (waiver possible if upfront costs exceed $2,000). Covers tuition/exam costs for approved portable-career programs; does not cover general fees, study-abroad, or private (recreational) licenses." },
  programs: [{
    name: "MyCAA / SpouseWorks Scholarship",
    description: "Funds licenses, certifications, national testing, certain continuing-ed credits, and associate degrees in approved portable career fields. Requires a SECO/SpouseWorks-coached Education & Training Plan (ETP).",
    serves: "Spouses building stackable, portable credentials (IT support, medical coding, PM/CAPM, skilled trades, etc.).",
    apply: ["Create account via DS Logon on the portal", "Work with a SECO/SpouseWorks coach to build an ETP (mandatory)", "Enroll within 30 days of course start", "Request financial assistance"],
    timeline: "Per-course; tied to ETP and fiscal-year caps.",
    capacity: "Open to all eligible spouses."
  }],
  barrier: { level: "Low", reasons: "Open to eligible spouses, but the pay-grade window is the catch — promotion past the eligible grade ends eligibility, and the mandatory ETP can't be edited once approved." },
  outcomes: { note: "ESTIMATE. Best ROI when used for a high-demand, truly portable credential before the sponsor promotes out of the eligible window." },
  roi: { score: 8, salaryImpact: "Medium", timeReturn: "High", note: "ESTIMATE. $4,000 of free, targeted credentialing is high-leverage for the right certification." },
  nobodyTells: [
    "It's pay-grade gated — if your sponsor is about to promote out of the window, use it NOW.",
    "The eligible-grade list has shifted over the years; verify on the official portal before planning.",
    "The Education & Training Plan can't be edited once approved — load it with elective options up front.",
    "For a bachelor's/master's, a GI Bill transfer is usually the better tool; MyCAA is for certs/licenses/associate degrees."
  ],
  fitByRank: { note: "Spouse benefit — keyed to the SPONSOR's pay grade, not the spouse." },
  careers: ["IT Support", "Medical Coding", "Bookkeeping", "Project Management (CAPM)", "Skilled Trades", "Nursing prerequisites"],
  pathways: ["Spouse → MyCAA-funded cert → portable role → employer tuition assistance for advanced credential"],
  community: {
    praise: ["Real, free money", "Portability focus fits military life", "Coaching included"],
    complaints: ["Confusing/shifting eligibility", "Pay-grade gate", "ETP rigidity"],
    tips: ["Confirm eligibility before your sponsor promotes", "Use a SECO coach", "Stack with state spouse-licensure programs"]
  },
  sources: ["mycaa.militaryonesource.mil", "militaryonesource.mil", "military.com", "militarytoolkit.com"]
},

{
  id: "ivmf-o2o",
  name: "IVMF — Onward to Opportunity (O2O)",
  verified: true,
  categories: ["education", "transition", "spouse"],
  url: "https://ivmf.syracuse.edu/programs/career-training/",
  tagline: "Free certification training across 40+ professional pathways.",
  overview: "Onward to Opportunity (O2O), run by Syracuse University's D'Aniello Institute for Veterans and Military Families (IVMF), is a free career-training program offering 40+ industry-standard certification pathways in business management, IT, and customer-service fields, with career coaching and an employer network. Completing an IVMF program also makes you a Syracuse University alum.",
  mission: "Prepare and match the military-connected community with in-demand civilian careers.",
  founded: "Launched with the Schultz Family Foundation; part of IVMF (founded 2011 at Syracuse).",
  hq: "Syracuse University, Syracuse, NY (National Veterans Resource Center).",
  funding: "Nonprofit/university; Schultz Family Foundation and corporate partners.",
  audience: ["Transitioning service members (within 180 days)", "Veterans", "Reserve/Guard", "Military spouses"],
  geographic: "In-person at participating installations plus a nationwide online-only model.",
  eligibility: "Active duty within 180 days of separation; veterans with 180+ days service and honorable discharge; part-time Guard/Reserve; military spouses. Employed members can still enroll for training but exam-fee coverage is limited to those transitioning or currently unemployed.",
  status: "active",
  cost: { tags: ["free"], detail: "Free training, coaching, and materials. One certification exam fee is covered for those enrolling during transition or who are currently unemployed; employed enrollees get training but not exam-fee coverage." },
  programs: [{
    name: "O2O career-training pathways",
    description: "40+ certification pathways (e.g., PMP/CAPM, IT, Six Sigma, HR, cybersecurity prep) with an intro 'Onward to Your Career!' course, coaching, and employer matching.",
    serves: "Members targeting business management, IT, and customer-service careers.",
    apply: ["Submit an online interest form (in-person or online-only)", "Complete an interest assessment (not a test)", "IVMF Enrollment Services registers you for a cohort", "Begin training (note: 2–3 month waiting period is common)"],
    timeline: "Varies by pathway; expect a 2–3 month wait to start.",
    capacity: "High volume; cohort-based."
  }],
  barrier: { level: "Low", reasons: "Open enrollment with no test; the main friction is the 2–3 month waitlist and self-paced completion discipline." },
  outcomes: { note: "ESTIMATE / independently evaluated. A Penn State Clearinghouse quasi-experimental study found statistically significant positive effects on post-service employment, starting salary, and 6-month retention." },
  roi: { score: 8, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Among the best free credentialing programs; the PMP pathway alone can move salary materially." },
  nobodyTells: [
    "Expect a 2–3 month waitlist — start the interest form early.",
    "Exam-fee coverage is only for those transitioning or unemployed; employed enrollees train but self-fund the exam.",
    "Finishing makes you a Syracuse University alum — a real network."
  ],
  fitByRank: {
    junior_enlisted: "Strong free credentialing.",
    nco: "Strong.",
    senior_enlisted: "Strong (PMP, Six Sigma).",
    junior_officer: "Excellent — PMP/PM pathways align with officer experience.",
    senior_officer: "Excellent — advanced certs to formalize leadership experience."
  },
  careers: ["Project Management", "IT", "Six Sigma / Operations", "HR", "Customer Success"],
  pathways: ["Officer (180 days out) → O2O PMP pathway → PM role"],
  community: {
    praise: ["Genuinely free incl. one exam", "Independently validated outcomes", "Syracuse alumni network"],
    complaints: ["Waitlist", "Employed members lose exam coverage"],
    tips: ["Submit the interest form ~3 months before you want to start", "Target PMP/CAPM if you're PM-bound", "Use the career coaching"]
  },
  sources: ["ivmf.syracuse.edu", "news.va.gov"]
},

{
  id: "va",
  name: "U.S. Department of Veterans Affairs (VA)",
  verified: true,
  categories: ["financial", "health", "education"],
  url: "https://www.va.gov/",
  tagline: "The federal hub for benefits: healthcare, disability, education, home loans.",
  overview: "The VA is the cabinet-level federal department administering veterans' benefits and services, including healthcare, disability compensation, the GI Bill and other education benefits, VR&E (Chapter 31), home loan guaranty, and more. It is the backbone benefit system every transitioning member should engage before separation.",
  mission: "To fulfill President Lincoln's promise to care for those who have served.",
  founded: "Veterans Administration 1930; elevated to cabinet-level Department of Veterans Affairs 1989.",
  hq: "810 Vermont Ave NW, Washington, DC 20420.",
  funding: "Federal government.",
  audience: ["Veterans", "Service members", "Eligible family members and survivors"],
  geographic: "Nationwide (VA medical centers, regional offices) plus online at VA.gov.",
  eligibility: "Varies by benefit; generally tied to service history, discharge characterization, and (for some benefits) disability rating.",
  status: "active",
  cost: { tags: ["free", "gi-bill", "vre"], detail: "Benefits are earned, not purchased. Education benefits (GI Bill, VET TEC 2.0) and VR&E (Chapter 31) fund training; disability compensation is tax-free monthly income tied to a rating." },
  programs: [
    {
      name: "Post-9/11 GI Bill (Chapter 33)",
      description: "Tuition/fees, housing allowance, and book stipend for degree and approved non-degree programs; transferable to dependents in some cases.",
      serves: "Veterans and eligible dependents.",
      apply: ["Apply on VA.gov (Form 22-1990)", "Receive Certificate of Eligibility", "Enroll at an approved school"],
      timeline: "Up to 36 months of benefits (15-year or no expiration window depending on service dates).",
      capacity: "Entitlement-based."
    },
    {
      name: "Veteran Readiness & Employment (VR&E, Chapter 31)",
      description: "Funds training, education, and employment services for veterans with a service-connected disability and an employment handicap. Crucially, it does NOT draw down GI Bill entitlement.",
      serves: "Veterans with a qualifying disability rating.",
      apply: ["Apply on VA.gov", "Meet with a Vocational Rehabilitation Counselor", "Build a rehabilitation plan"],
      timeline: "Plan-dependent.",
      capacity: "Eligibility-based."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Benefits are earned, but the claims and enrollment processes are bureaucratic. The 'failure mode' is not the gate — it's people leaving benefits unclaimed or filing disability claims late/poorly." },
  outcomes: { note: "VERIFIED program facts; individual outcomes vary widely by benefit and use." },
  roi: { score: 10, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Engaging VA benefits fully (disability + education + home loan) is the single highest-leverage action in any transition." },
  nobodyTells: [
    "Start your disability claim BEFORE you separate (BDD program) — filing late costs months of compensation.",
    "VR&E (Chapter 31) can fund training without touching your GI Bill — underused by those with a rating.",
    "The GI Bill, VET TEC 2.0, and VR&E interact — sequence them deliberately rather than burning one by default."
  ],
  fitByRank: {
    junior_enlisted: "Essential for everyone.",
    nco: "Essential.",
    senior_enlisted: "Essential.",
    junior_officer: "Essential.",
    senior_officer: "Essential — and review retirement-vs-disability offset rules."
  },
  careers: ["N/A — funds and underpins all pathways"],
  pathways: ["Every pathway starts here: file disability pre-separation → choose education funding (GI Bill / VR&E / VET TEC) → use the home loan"],
  community: {
    praise: ["Life-changing benefits when used", "VR&E especially powerful for the rated"],
    complaints: ["Bureaucracy", "Claims backlogs", "Confusing benefit interactions"],
    tips: ["File BDD disability 90–180 days pre-separation", "Talk to a VSO (free) for claims help", "Map GI Bill vs VR&E vs VET TEC before spending any"]
  },
  sources: ["va.gov", "benefits.va.gov", "news.va.gov"]
},

{
  id: "sba-vboc",
  name: "SBA Veterans Business Outreach Centers (VBOC)",
  verified: true,
  categories: ["business", "financial"],
  url: "https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-center-vboc-program",
  tagline: "Free SBA-funded business counseling and training for veterans.",
  overview: "Veterans Business Outreach Centers are a Small Business Administration resource-partner network providing free business counseling, training, mentoring, and access-to-capital guidance to transitioning service members, veterans, and military spouses. VBOCs also deliver the SBA's Boots to Business entrepreneurship course on installations.",
  mission: "Help the military community start, grow, and sustain small businesses.",
  founded: "SBA Office of Veterans Business Development program (VBOC network expanded over the 2010s–2020s).",
  hq: "U.S. Small Business Administration, Washington, DC (regional VBOCs nationwide).",
  funding: "Federal (SBA).",
  audience: ["Transitioning service members", "Veterans", "Military spouses", "Reserve/Guard"],
  geographic: "Regional VBOCs cover all U.S. states/territories; many services virtual.",
  eligibility: "Open to the military-connected community; no fee.",
  status: "active",
  cost: { tags: ["free"], detail: "Free counseling, training, and mentoring. (Note: SBA loan programs themselves are financing, not grants; the Patriot Express loan program is discontinued though some lenders honor legacy terms.)" },
  programs: [{
    name: "VBOC counseling + Boots to Business",
    description: "1:1 business counseling, business-plan and access-to-capital guidance, and the Boots to Business (B2B) entrepreneurship training delivered through TAP on installations, plus B2B Reboot for veterans off-base.",
    serves: "Aspiring and existing veteran/spouse business owners at any stage.",
    apply: ["Find your regional VBOC via SBA.gov", "Request counseling or register for Boots to Business"],
    timeline: "Ongoing counseling; B2B is a short course.",
    capacity: "Open."
  }],
  barrier: { level: "Low", reasons: "Free and open. The barrier is purely initiative — and understanding that counseling ≠ capital." },
  outcomes: { note: "ESTIMATE. Value is structured guidance and access-to-capital navigation, not direct funding." },
  roi: { score: 6, salaryImpact: "Variable", timeReturn: "Medium", note: "ESTIMATE. High value as a free first stop for any veteran considering a business; ROI depends on the venture." },
  nobodyTells: [
    "VBOC counsels and connects — it does not give you money.",
    "Boots to Business (via TAP) is the easiest on-ramp while still in uniform.",
    "Pair VBOC with SCORE mentoring and your local SBDC for fuller coverage."
  ],
  fitByRank: {
    junior_enlisted: "Good free starting point for would-be founders.",
    nco: "Good.",
    senior_enlisted: "Good.",
    junior_officer: "Good.",
    senior_officer: "Good — combine with CEOcircle if you already operate a company."
  },
  careers: ["Entrepreneurship", "Small Business Ownership", "Government Contracting"],
  pathways: ["Service member → Boots to Business (TAP) → VBOC counseling → SBA-backed financing"],
  community: {
    praise: ["Free and federal", "Boots to Business on-base access", "Access-to-capital guidance"],
    complaints: ["No direct grants", "Quality varies by region"],
    tips: ["Take Boots to Business before you separate", "Layer SCORE + SBDC + VBOC", "Look into SBA 7(a)/504 loans, not the discontinued Patriot Express"]
  },
  sources: ["sba.gov", "valoannetwork.com"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 2 — 8)
   ========================================================================== */

{
  id: "hire-heroes-usa",
  name: "Hire Heroes USA",
  verified: true,
  categories: ["transition"],
  url: "https://www.hireheroesusa.org/",
  tagline: "Free personalized career coaching, resume help, and mock interviews.",
  overview: "Hire Heroes USA is a national nonprofit (founded 2005) providing free, individualized job-search assistance — one-on-one career coaching, military-to-civilian resume translation, mock interviews, and mentoring — to service members, veterans, and military spouses. It is consistently top-rated among veteran employment nonprofits. Note: it is a distinct organization from Hiring Our Heroes (the U.S. Chamber of Commerce program).",
  mission: "Empower U.S. military members, veterans, and military spouses to succeed in the civilian workforce.",
  founded: "2005",
  hq: "Alpharetta, GA (services delivered nationwide/virtually).",
  funding: "501(c)(3) nonprofit; donor, corporate, and foundation funded.",
  audience: ["Transitioning service members", "Veterans", "Military spouses", "National Guard/Reserve", "Gold Star spouses"],
  geographic: "Nationwide; services delivered virtually.",
  eligibility: "U.S. service members, veterans (discharge status above dishonorable), and military spouses (including active-duty, Guard/Reserve, and Gold Star spouses). Not available to children of service members or non-service-member supporters (e.g., interpreters). Register no more than ~18 months before earliest availability to work.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free. Hire Heroes USA is not a staffing agency — it does not place you in jobs, but provides coaching, tools, a job board, and shares leads through its Direct Placement program." },
  programs: [{
    name: "Personalized career coaching",
    description: "One-on-one work with a Career Advisor (formerly 'Transition Specialist'), professional resume revision, mock interviews, mentoring, job-search strategy, networking, and salary-negotiation guidance. Specialized tracks include Junior Enlisted, Serving Spouses, Federal, Women Veterans, and Alumni.",
    serves: "Anyone in the military community managing a civilian job search.",
    apply: ["Register online", "Verify service/connection with documentation", "Get matched with a Career Advisor", "Work through coaching, resume, and interview prep"],
    timeline: "Self-paced; ongoing support including alumni services.",
    capacity: "Thousands of confirmed hires annually."
  }],
  barrier: { level: "Low", reasons: "Open registration with simple eligibility verification. The only 'barrier' is that it's coaching, not placement — you still run your own search." },
  outcomes: { note: "ESTIMATE / org-reported. Reports tens of thousands of confirmed hires and is the highest-rated veteran employment nonprofit on Charity Navigator (4-star, 100% score) per its own materials." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Very high return on time for a free service; a strong complement to structured programs like FourBlock or a SkillBridge fellowship." },
  nobodyTells: [
    "It coaches and equips — it does not place you in a job; you still drive the search.",
    "It's a different organization from Hiring Our Heroes (Chamber of Commerce); people constantly confuse the two.",
    "The resume rewrite alone (military-to-civilian translation) is worth the registration for most people."
  ],
  fitByRank: {
    junior_enlisted: "Strong — dedicated Junior Enlisted track.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Good — coaching and resume translation still valuable.",
    senior_officer: "Good — useful for resume translation and interview prep, though you may also want exec-level networking elsewhere."
  },
  careers: ["Any — coaching is field-agnostic", "Federal roles (dedicated track)"],
  pathways: ["Veteran → Hire Heroes USA coaching + resume → targeted job search → hire"],
  community: {
    praise: ["Genuinely free", "Excellent resume translation", "Responsive coaches"],
    complaints: ["Not a staffing agency — no direct placement", "Quality can vary by advisor"],
    tips: ["Come prepared to each coaching session", "Use the mock interviews", "Pair with a structured fellowship for employer access"]
  },
  sources: ["hireheroesusa.org", "learnworkecosystemlibrary.com"]
},

{
  id: "code-platoon",
  name: "Code Platoon",
  verified: true,
  categories: ["it", "education"],
  url: "https://www.codeplatoon.org/",
  tagline: "Veteran-exclusive coding bootcamp; GI Bill / VR&E approved.",
  overview: "Code Platoon is a nonprofit, veteran-and-military-spouse-exclusive coding bootcamp teaching full-stack software engineering and (newer) AI Cloud & DevOps engineering. Programs run in-person (immersive, Chicago) and remote/part-time. All programs are VA-approved for the GI Bill and VR&E, with pay-what-you-can scholarships to close any gap.",
  mission: "Train veterans, service members, and military spouses for careers in software development.",
  founded: "2015 (Chicago).",
  hq: "Chicago, IL (plus remote programs).",
  funding: "501(c)(3) nonprofit; tuition, donations, and grants.",
  audience: ["Veterans", "Active-duty service members (incl. SkillBridge)", "Military spouses", "Adult military dependents"],
  geographic: "In-person in Chicago; remote and evening/weekend programs available nationwide.",
  eligibility: "Veterans, service members, and military families. The in-person Immersive is a Resident training program for GI Bill purposes; Remote and Evening & Weekend programs are approved as Certificate Preparation courses.",
  status: "active",
  cost: { tags: ["gi-bill", "vre", "scholarship", "self-pay"], detail: "Tuition is ~$20,000. Most students fund it with the Post-9/11 GI Bill or VR&E (Chapter 31) — both fully approved. In-person GI Bill students get tuition covered plus a monthly housing allowance (E-5 w/ dependents). Remote GI Bill students get tuition reimbursement but no GI Bill housing allowance — Code Platoon provides its own stipend. Pay-what-you-can scholarships fill remaining gaps; you can also use VET TEC." },
  programs: [
    {
      name: "AI + Fullstack Engineering: Immersive (in-person)",
      description: "15-week, full-time bootcamp in Python, JavaScript, React, Django, and AI-powered coding, taught in the Chicago classroom.",
      serves: "Career-changers who can train full-time in person.",
      apply: ["Apply online", "Technical/aptitude assessment", "Confirm VA benefit or scholarship funding", "Enroll in a cohort"],
      timeline: "15 weeks, full-time.",
      capacity: "Cohort-based."
    },
    {
      name: "Fullstack Engineering: Evening & Weekend (remote)",
      description: "28-week, part-time version of the same curriculum delivered live online four days/week, designed for those who keep a job or are still serving.",
      serves: "Veterans/spouses/active-duty who need a part-time schedule.",
      apply: ["Apply online", "Assessment", "Confirm funding", "Enroll"],
      timeline: "28 weeks, part-time.",
      capacity: "Two cohorts/year."
    },
    {
      name: "AI Cloud and DevOps Engineering (remote)",
      description: "28-week, part-time program in cloud infrastructure, CI/CD, automation, and applied AI — for cloud/DevOps roles rather than app development.",
      serves: "Those targeting cloud/DevOps engineering.",
      apply: ["Apply online", "Assessment", "Confirm funding", "Enroll"],
      timeline: "28 weeks, part-time.",
      capacity: "Two cohorts/year."
    }
  ],
  barrier: { level: "Medium-High", reasons: "Selective admissions with a technical assessment, plus a demanding full-time (or long part-time) commitment. Funding is rarely the barrier given GI Bill/VR&E approval and scholarships; the workload is." },
  outcomes: { note: "ESTIMATE / org-reported. Veteran-exclusive cohorts and an employer network; outcomes vary by student and market. Coding-bootcamp placement broadly runs ~60–85% within six months for stronger programs." },
  roi: { score: 8, salaryImpact: "High", timeReturn: "Medium-High", note: "ESTIMATE. Strong if you commit fully; VR&E funding (if you have a rating) makes it especially efficient since it doesn't touch your GI Bill." },
  nobodyTells: [
    "VR&E (Chapter 31) fully funds it without touching your GI Bill — the best option if you have a disability rating.",
    "Remote GI Bill students don't get the GI Bill housing allowance (certificate-prep rules), but Code Platoon offers its own stipend.",
    "It's veteran-exclusive, so the cohort is built-in network and shared context — a real differentiator vs. civilian bootcamps."
  ],
  fitByRank: {
    junior_enlisted: "Strong onramp to software.",
    nco: "Strong.",
    senior_enlisted: "Good for a hands-on engineering pivot.",
    junior_officer: "Good — weigh IC software work vs. a PM/leadership route.",
    senior_officer: "Mixed — strong if you genuinely want to build software; otherwise consider PM/cloud-architect routes."
  },
  careers: ["Software Engineer", "Full-Stack Developer", "Cloud Engineer", "DevOps Engineer"],
  pathways: ["Veteran → Code Platoon (GI Bill/VR&E) → junior software/cloud role"],
  community: {
    praise: ["Veteran-only cohort", "GI Bill & VR&E approved", "Pay-what-you-can scholarships"],
    complaints: ["Demanding workload", "Remote certificate-prep has no GI Bill housing allowance"],
    tips: ["Use VR&E first if you have a rating", "Do prep work before day one", "Treat the job search as a second full-time job"]
  },
  sources: ["codeplatoon.org", "coursereport.com", "computerscience.org"]
},

{
  id: "service-to-school",
  name: "Service to School (S2S)",
  verified: true,
  categories: ["education"],
  url: "https://service2school.org/",
  tagline: "Free college & grad-school admissions counseling for veterans.",
  overview: "Service to School is a nonprofit providing free undergraduate and graduate (MBA, JD, medical, and other) application counseling to veterans and service members, staffed by former admissions officers and veteran mentors ('Ambassadors'). Its VetLink network partners with selective colleges to expand veteran access.",
  mission: "Help veterans gain admission to the best college or graduate school possible.",
  founded: "Nonprofit 501(c)(3); veteran-founded.",
  hq: "Operates nationally (virtual).",
  funding: "501(c)(3) nonprofit; donor and partner funded.",
  audience: ["Veterans", "Transitioning service members", "Those applying to undergrad or graduate programs"],
  geographic: "Nationwide; virtual mentorship.",
  eligibility: "U.S. military veterans and service members applying to undergraduate or graduate programs. Pre-admissions advising; peer-to-peer veteran mentorship.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free, including undergraduate and graduate (MBA/JD/medical/other) application counseling." },
  programs: [{
    name: "Application counseling + Ambassador mentorship",
    description: "One-on-one guidance from a trained veteran Ambassador and/or former admissions officers on school selection, essays, portal responses, and timelines. VetLink connects enlisted veterans to selective partner colleges.",
    serves: "Veterans applying to undergrad or competitive graduate programs.",
    apply: ["Submit an application/interest form on the S2S site", "Get matched with an Ambassador", "Work through school list, essays, and applications"],
    timeline: "Aligned to the applicant's admissions cycle.",
    capacity: "Mentor-based; broad reach."
  }],
  barrier: { level: "Low", reasons: "Open to veterans/service members applying to school; the only effort gate is engaging with your Ambassador and doing the application work." },
  outcomes: { note: "ESTIMATE / org-reported. Strong reputation for helping veterans reach selective schools; recommended by U.S. News among college-application resources for veterans." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. For officers eyeing a top MBA/JD, the admissions guidance is high-leverage and free — a strong pairing with your GI Bill." },
  nobodyTells: [
    "It's not just for undergrad — the MBA/JD/medical grad-school counseling is some of its highest-value work.",
    "Your Ambassador is a fellow veteran who's been through it; lean on them for school-list realism.",
    "Start early — competitive grad cycles reward a long runway on essays and test prep."
  ],
  fitByRank: {
    junior_enlisted: "Excellent — VetLink targets enlisted veterans for selective undergrad.",
    nco: "Excellent for undergrad.",
    senior_enlisted: "Strong for undergrad or grad.",
    junior_officer: "Excellent — top-MBA/JD admissions guidance fits officer goals.",
    senior_officer: "Excellent for competitive graduate/professional programs."
  },
  careers: ["Any degree-gated path", "MBA-track roles", "Law", "Medicine", "Public policy"],
  pathways: ["Officer → Service to School (MBA counseling) → top MBA → post-MBA role"],
  community: {
    praise: ["Free incl. grad school", "Veteran mentors who get it", "Access to selective schools via VetLink"],
    complaints: ["You still do the work", "Outcomes depend on your profile"],
    tips: ["Engage early for grad cycles", "Be honest with your Ambassador about goals", "Use it alongside GI Bill/Yellow Ribbon planning"]
  },
  sources: ["service2school.org", "studentveterans.org", "usnews.com"]
},

{
  id: "vets2pm",
  name: "Vets2PM",
  verified: true,
  categories: ["education", "transition"],
  url: "https://vets2pm.com/",
  tagline: "Military-grounded PMP/CAPM/Agile training, with a SkillBridge track.",
  overview: "Vets2PM is a PMI Authorized Training Partner that prepares veterans, service members, and spouses for project-management credentials (PMP, CAPM, PMI-ACP, Scrum) using a military-grounded curriculum and AI-assisted tools to translate military experience into PMI-acceptable application content. It also runs a DoD SkillBridge full-time training-and-mentoring program.",
  mission: "Help veterans translate military leadership into meaningful, lucrative project-management careers.",
  founded: "Veteran-founded PMI Authorized Training Partner.",
  hq: "Operates nationally (live online and onsite).",
  funding: "For-profit training provider (veteran-owned).",
  audience: ["Veterans", "Active-duty (incl. SkillBridge)", "Military spouses", "Working professionals"],
  geographic: "Nationwide; live-online and onsite delivery.",
  eligibility: "Open to service members, veterans, spouses, and civilians. The SkillBridge program is for transitioning active-duty members with command approval.",
  status: "active",
  cost: { tags: ["self-pay", "gi-bill", "vre"], detail: "Course pricing is roughly $1,247 (live online) to $1,647 (onsite). Fundable many ways: GI Bill exam-fee reimbursement, VR&E (Chapter 31), MyCAA (spouses), AF/CG COOL, Army Credentialing Assistance, or Government Purchase Card (SF-182). Note: the VA reimburses the certification EXAM fee, not prep-course tuition." },
  programs: [
    {
      name: "PMP / CAPM / PMI-ACP / Scrum certification prep",
      description: "Instructor-led credential prep delivered by veteran instructors, plus AI-driven tools to convert military leadership experience into PMI application content, lifetime LMS access, and a study plan.",
      serves: "Veterans/spouses/professionals pursuing PM credentials.",
      apply: ["Choose a course and date", "Arrange funding (GI Bill exam reimbursement, COOL, MyCAA, GPC, or self-pay)", "Complete training and sit the exam"],
      timeline: "Short bootcamp-style courses; many certify within ~2 months.",
      capacity: "Open enrollment."
    },
    {
      name: "Vets2PM SkillBridge program",
      description: "An 8–10 week, full-time DoD SkillBridge training-and-mentoring program to launch a PM career, earning up to three credentials (PMP/CAPM, PMI-ACP, Scrum).",
      serves: "Transitioning active-duty members within their SkillBridge window.",
      apply: ["Confirm SkillBridge eligibility and command approval", "Apply to the Vets2PM SkillBridge cohort"],
      timeline: "8–10 weeks, full-time.",
      capacity: "Cohort-based."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Open enrollment, but PMP itself requires documented project experience and a 35-hour education requirement, and there's tuition (though widely fundable). The SkillBridge track needs command approval." },
  outcomes: { note: "ESTIMATE / org-reported. PMP is a well-established salary mover; Vets2PM's differentiator is military-to-PMI translation, not a job guarantee." },
  roi: { score: 7, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. PMP formalizes officer/NCO leadership into a globally recognized credential; strong salary leverage. Note O2O offers PMP prep free if you can wait for a cohort." },
  nobodyTells: [
    "The VA reimburses the PMP EXAM fee, not the prep-course tuition — budget for that distinction.",
    "If you can wait, IVMF's O2O often covers PMP prep AND the exam free; Vets2PM's edge is speed, structure, and a SkillBridge option.",
    "PMP requires real project experience and 35 contact hours to even apply — the credential isn't instant."
  ],
  fitByRank: {
    junior_enlisted: "Consider CAPM first if you lack the PMP experience hours.",
    nco: "Strong — leadership translates well to PM.",
    senior_enlisted: "Strong — PMP formalizes operational experience.",
    junior_officer: "Excellent — officer project experience maps directly to PMP.",
    senior_officer: "Excellent — PMP credentials senior leadership for PM/program roles."
  },
  careers: ["Project Manager", "Program Manager", "Operations Manager", "Scrum Master", "Project Coordinator"],
  pathways: ["Officer → Vets2PM (SkillBridge or exam reimbursement) → PMP → Program Manager"],
  community: {
    praise: ["Military-to-PMI translation tools", "Veteran instructors", "SkillBridge option"],
    complaints: ["Tuition not VA-funded (exam is)", "Free alternatives exist (O2O)"],
    tips: ["Check O2O for a free PMP route first if you can wait", "Use GI Bill exam reimbursement for the test", "Spouses: fund prep with MyCAA"]
  },
  sources: ["vets2pm.com", "4pmti.com", "bestmilitaryresume.com"]
},

{
  id: "npower",
  name: "NPower",
  verified: true,
  categories: ["it", "education"],
  url: "https://www.npower.org/",
  tagline: "Free IT training + paid internship — but location-gated.",
  overview: "NPower is a national nonprofit offering free tech training (Tech Fundamentals, then advanced cybersecurity and cloud tracks) plus paid internships and job-placement support to veterans, military spouses, and young adults from underserved communities. The veteran track includes CompTIA and Google IT certifications and wraparound social support.",
  mission: "Create pathways to economic prosperity by launching digital careers for veterans, military spouses, and underserved young adults.",
  founded: "~2003 (serving veterans/spouses for over a decade).",
  hq: "New York, NY (regional sites nationwide).",
  funding: "501(c)(3) nonprofit; donors, foundations, corporations, and government.",
  audience: ["Veterans", "Military spouses", "Reservists/Guard", "Young adults from underserved communities (separate track)"],
  geographic: "Virtual instruction, but veteran applicants must live in or near specific cities (e.g., Baltimore, Dallas, San Antonio, Houston, Detroit, Newark/Jersey City, St. Louis, Los Angeles, San Francisco, and others) for in-person professional development and placement.",
  eligibility: "Military veterans, reservists, or spouses of veterans — currently serving or honorably discharged — legally authorized to work in the U.S., and located in/near a supported city. (The 18–26 young-adult eligibility applies to the separate non-veteran track.) Active-duty may enter via SkillBridge.",
  status: "active",
  cost: { tags: ["free"], detail: "100% free to selected participants — no tuition, no debt. Includes certifications, a paid internship or project-based learning, and social support (help navigating VA benefits, childcare, food/housing resources)." },
  programs: [{
    name: "Tech Fundamentals (+ advanced tracks)",
    description: "Up to ~16–23 weeks of instructor-led virtual training toward CompTIA A+/ITF+ and a Google IT Support Certificate, followed by a paid internship. Graduates can advance to Cybersecurity or Cloud Computing tracks.",
    serves: "Career-changers into IT, including those with no prior tech experience.",
    apply: ["Pre-screening questionnaire", "Full application", "Virtual open house", "Interview/selection process", "Enroll"],
    timeline: "~4–6 months including internship.",
    capacity: "Cohort-based; competitive selection."
  }],
  barrier: { level: "Medium", reasons: "The biggest gate is geographic — despite virtual classes, the veteran track requires living near a supported city. Admission is also selective with an interview." },
  outcomes: { note: "ESTIMATE / org-reported. NPower has cited an ~80% graduation rate and large average salary gains for graduates; outcomes vary by site and individual." },
  roi: { score: 7, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Free training PLUS a paid internship and certifications is an excellent package — if you're in an eligible location." },
  nobodyTells: [
    "Classes are virtual, but the veteran track is location-gated — you must be near a supported city for placement.",
    "The paid internship is the real differentiator vs. self-paced cert programs.",
    "Wraparound support (VA benefits navigation, childcare/food resources) is unusually robust for a free program."
  ],
  fitByRank: {
    junior_enlisted: "Strong entry path to IT.",
    nco: "Strong.",
    senior_enlisted: "Good for a hands-on IT pivot.",
    junior_officer: "Good — but weigh entry-level IC tech vs. a PM route.",
    senior_officer: "Often over-leveled for entry IT roles; consider PM/leadership routes."
  },
  careers: ["IT Support Specialist", "Help Desk Technician", "Cybersecurity Analyst", "Cloud Support"],
  pathways: ["Veteran (in eligible city) → NPower Tech Fundamentals → paid internship → entry IT role"],
  community: {
    praise: ["Free + paid internship", "Strong wraparound support", "Real certifications"],
    complaints: ["Location-gated for veterans", "Competitive admission"],
    tips: ["Confirm you're near a supported city before applying", "Apply early — cohorts fill", "Use the social-support services on offer"]
  },
  sources: ["npower.org", "news.va.gov", "tvc.texas.gov"]
},

{
  id: "grow-google",
  name: "Grow with Google for Military",
  verified: true,
  categories: ["education", "it"],
  url: "https://grow.google/certificates",
  tagline: "Free Google Career Certificates via military partners.",
  overview: "Google Career Certificates are self-paced, online credentials (Data Analytics, IT Support, Project Management, UX Design, Cybersecurity, and an AI certificate) hosted on Coursera. The military community can access them free through partner programs — notably Hiring Our Heroes' 'Career Forward,' Student Veterans of America's MySVA portal, and Veterans Transition Support — rather than directly from Google.",
  mission: "Expand economic opportunity for the military community through portable, industry-recognized credentials.",
  founded: "Grow with Google launched 2017; military partnerships (e.g., HOH Career Forward) launched 2021.",
  hq: "Google (Mountain View, CA), delivered on Coursera via partners.",
  funding: "Corporate (Google / Google.org grants to partner nonprofits).",
  audience: ["Veterans", "Transitioning service members", "Military spouses"],
  geographic: "Online; available broadly, including to members stationed overseas.",
  eligibility: "Free access is granted through partner programs (Hiring Our Heroes Career Forward, SVA, Veterans Transition Support, and others), each with its own enrollment. No degree or prior experience required. Anyone can also pay for the certificates directly on Coursera.",
  status: "active",
  cost: { tags: ["free", "partially-funded"], detail: "The certificates normally carry a Coursera subscription cost, but the military community can get them FREE via partner sponsorships (HOH Career Forward, SVA's MySVA, Veterans Transition Support's Coursera access). Some partners add wraparound support and fellowships." },
  programs: [{
    name: "Google Career Certificates (via military partners)",
    description: "Self-paced certificates designed for entry-level roles in 3–6 months: Data Analytics, IT Support, Project Management, UX Design, Cybersecurity, plus a Google AI certificate. Completion unlocks an employer consortium (150+ companies) and CareerCircle coaching.",
    serves: "Career-changers seeking portable, entry-level tech/analytics credentials.",
    apply: ["Pick a sponsoring partner (e.g., HOH Career Forward, SVA MySVA, or VTS Coursera)", "Enroll through that partner for free access", "Complete the certificate at your own pace"],
    timeline: "Self-paced; ~3–6 months at ~10 hrs/week.",
    capacity: "Broad; some partner programs have enrollment caps/cohorts."
  }],
  barrier: { level: "Low", reasons: "Self-paced and free via partners. The real barrier is self-discipline to finish, and locating the right sponsoring partner for free access." },
  outcomes: { note: "ESTIMATE / org-reported. Google reports a large majority of certificate graduates report a positive career outcome within six months; results vary by field and effort." },
  roi: { score: 6, salaryImpact: "Medium", timeReturn: "High", note: "ESTIMATE. Low time/cost and genuinely portable; best as a foundational credential or a stepping-stone, not a senior-role qualifier on its own." },
  nobodyTells: [
    "You rarely get it 'from Google' directly for free — go through a partner like HOH Career Forward or SVA for the no-cost route.",
    "It's a foundational, entry-level credential; pair it with projects or a second cert to stand out.",
    "Some partners (HOH) bolt on a 12-week fellowship and employer access, which is where the real leverage is."
  ],
  fitByRank: {
    junior_enlisted: "Strong free starting point.",
    nco: "Good foundational credential.",
    senior_enlisted: "Good as a stepping-stone; layer with more.",
    junior_officer: "Good for a quick credential; the PM certificate complements officer experience.",
    senior_officer: "Use as a fast on-ramp/credential; likely pair with higher-level routes."
  },
  careers: ["Data Analyst", "IT Support Specialist", "Project Coordinator", "UX Designer", "Cybersecurity Analyst"],
  pathways: ["Service member → Google Career Certificate (via HOH Career Forward) → 12-week fellowship → entry role"],
  community: {
    praise: ["Free via partners", "Self-paced and flexible", "Recognized by an employer consortium"],
    complaints: ["Entry-level only", "Must find the right partner for free access", "Completion takes discipline"],
    tips: ["Enroll through HOH Career Forward or SVA for free access + support", "Finish — completion rates are the weak point", "Stack with a portfolio project"]
  },
  sources: ["grow.google", "hiringourheroes.org", "studentveterans.org", "blog.google"]
},

{
  id: "fedvte",
  name: "CISA Learning (formerly FedVTE)",
  verified: true,
  categories: ["it", "education"],
  url: "https://niccs.cisa.gov/training/cisa-learning",
  tagline: "Free federal cybersecurity training — rebranded from FedVTE.",
  overview: "CISA Learning is the federal government's free, on-demand cybersecurity training platform, run by the Cybersecurity & Infrastructure Security Agency (CISA). It replaced the Federal Virtual Training Environment (FedVTE) in November 2024. It offers 800+ hours of courses (ethical hacking, risk management, malware analysis, cloud security) aligned to certifications like Network+, Security+, and CISSP, free to veterans and military personnel.",
  mission: "Build the nation's cybersecurity workforce by providing free, high-quality training.",
  founded: "FedVTE launched years ago; replaced by CISA Learning in November 2024.",
  hq: "CISA (Department of Homeland Security), Washington, DC.",
  funding: "Federal (CISA / DHS).",
  audience: ["Veterans and military personnel", "Federal/state/local/tribal/territorial government staff and contractors", "U.S. residents"],
  geographic: "Online, nationwide.",
  eligibility: "Open to veterans and military personnel, government employees/contractors at all levels, and U.S. residents. External users sign in via Login.gov.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free training. Note: it does NOT pay for the actual certification exam — it's self-paced prep/training only. The training itself covers all major cyber certification domains." },
  programs: [{
    name: "CISA Learning cybersecurity courses",
    description: "800+ hours of self-paced courses from beginner to advanced, aligned to the NICE Framework and to certs including Network+, Security+, and CISSP. Topics include cloud security, ethical hacking, risk management, and malware analysis.",
    serves: "Anyone building cybersecurity skills, especially veterans targeting DoD/federal/contractor roles.",
    apply: ["Go to CISA Learning via NICCS", "Sign in with Login.gov", "Enroll in courses and learn at your own pace"],
    timeline: "Self-paced; a single cert track may take ~4–6 months at ~10 hrs/week.",
    capacity: "Open; 100,000+ users historically."
  }],
  barrier: { level: "Low", reasons: "Free and open with a Login.gov account. The only effort gate is self-discipline, and you must pay for the actual certification exam separately." },
  outcomes: { note: "ESTIMATE. Excellent free prep for cyber certs; not a placement program, and it doesn't fund the exam itself." },
  roi: { score: 6, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Outstanding free prep — especially for Security+ (the DoD 8570/8140 baseline). Pair with O2O (which covers the exam fee) for a fully-funded path." },
  nobodyTells: [
    "It's no longer 'FedVTE' — that platform was retired in Nov 2024 and replaced by CISA Learning; old fedvte.usalearning.gov links are stale.",
    "It trains but doesn't pay for the exam — pair it with O2O (free exam) or GI Bill exam reimbursement.",
    "Security+ prep here is gold: Security+ is the DoD 8570/8140 baseline for most cyber/IT-security roles."
  ],
  fitByRank: {
    junior_enlisted: "Strong free cyber prep.",
    nco: "Strong.",
    senior_enlisted: "Strong, especially with prior comms/IT/intel experience.",
    junior_officer: "Good — useful prep if you're pivoting to cyber.",
    senior_officer: "Good for a deliberate cyber pivot; otherwise leadership routes may fit better."
  },
  careers: ["Cybersecurity Analyst", "SOC Analyst", "Information Assurance", "Security Engineer"],
  pathways: ["Veteran → CISA Learning (Security+ prep) → O2O exam voucher → cleared cyber role at a contractor"],
  community: {
    praise: ["Completely free", "800+ hours, cert-aligned", "Government-grade content"],
    complaints: ["Doesn't fund the exam", "Self-paced → requires discipline", "Recent rebrand causes link confusion"],
    tips: ["Pair with O2O to also cover the exam fee", "Prioritize Security+ for DoD/contractor roles", "Use Login.gov to access"]
  },
  sources: ["cisa.gov", "niccs.cisa.gov", "news.va.gov"]
},

{
  id: "warrior-scholar",
  name: "Warrior-Scholar Project (WSP)",
  verified: true,
  categories: ["education"],
  url: "https://www.warrior-scholar.org/",
  tagline: "Free academic boot camps for enlisted vets heading to college.",
  overview: "Warrior-Scholar Project runs free, immersive one- and two-week academic boot camps at top partner universities (Harvard, Princeton, Columbia, Yale, USC, Notre Dame, and others) to prepare enlisted service members and veterans for college success. Camps come in three tracks — College Readiness (humanities), STEM, and Business & Entrepreneurship.",
  mission: "Empower enlisted veterans and service members to succeed in higher education.",
  founded: "2012.",
  hq: "Operates at partner campuses nationwide (plus virtual options).",
  funding: "501(c)(3) nonprofit; donor and university-partner funded.",
  audience: ["Enlisted service members and veterans without a bachelor's degree", "Reservists/National Guard"],
  geographic: "On-site at partner universities nationwide, plus some virtual boot camps.",
  eligibility: "U.S. enlisted service members, veterans, reservists, or National Guard members who do NOT already hold a bachelor's degree. (Officers and those with a bachelor's are generally not the target audience.)",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free, including (for on-site camps) dorm housing and campus dining during the program. Travel/logistics handled with the program; check current specifics during admissions." },
  programs: [{
    name: "Academic boot camps (College Readiness / STEM / Business)",
    description: "Rigorous 1–2 week immersions where participants live in dorms, learn from campus faculty and veteran peer 'fellows,' and complete a capstone (argumentative essay, STEM research project, or entrepreneurial pitch). STEM includes Python; humanities focuses on college-level reading, writing, and discussion.",
    serves: "Enlisted veterans/service members preparing to enter or succeed in college.",
    apply: ["Submit an interest form", "Attend a required ~30-min info session", "One-on-one admissions call", "Complete the application (short essays, availability, travel)", "Receive a best-fit boot camp placement"],
    timeline: "1–2 weeks per boot camp; summer-heavy schedule.",
    capacity: "Small cohorts (~10–30 per camp)."
  }],
  barrier: { level: "Low", reasons: "Free and supportive, but it's intentionally for enlisted members without a bachelor's degree, and the camps are intense (long days). The application requires info-session attendance and short essays." },
  outcomes: { note: "ESTIMATE / org-reported. Strong reputation for boosting veteran confidence and college readiness; alumni attend selective institutions. Not a degree or credential itself." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. No direct salary effect, but a high-leverage confidence/skills bridge for enlisted veterans entering college — pairs naturally with Service to School for admissions." },
  nobodyTells: [
    "It's specifically for ENLISTED veterans without a bachelor's — officers and degree-holders aren't the target audience.",
    "It's college PREP, not a credential or admissions service — pair it with Service to School for applications.",
    "The days are long (7am–11pm) by design — it mirrors real college intensity."
  ],
  fitByRank: {
    junior_enlisted: "Excellent — core target audience.",
    nco: "Excellent if you don't yet have a bachelor's.",
    senior_enlisted: "Good if pursuing a first bachelor's degree.",
    junior_officer: "Not the target audience (officers typically hold a degree).",
    senior_officer: "Not applicable."
  },
  careers: ["N/A — prepares you for any college degree path"],
  pathways: ["Enlisted veteran → Warrior-Scholar boot camp → Service to School → selective college"],
  community: {
    praise: ["Free incl. room & board", "Top-university setting", "Veteran peer fellows"],
    complaints: ["Enlisted-only / no bachelor's", "Intense schedule", "Not a credential"],
    tips: ["Pair with Service to School for admissions", "Pick the track matching your intended major", "Apply early for summer camps"]
  },
  sources: ["warrior-scholar.org", "news.va.gov", "omva.nd.edu"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 3 — 8: health/wellness, trades, spouse)
   ========================================================================== */

{
  id: "wwp",
  name: "Wounded Warrior Project",
  verified: true,
  categories: ["health", "transition", "financial"],
  url: "https://www.woundedwarriorproject.org/",
  tagline: "Free mental/physical wellness, career, and VA-benefits help for post-9/11 warriors.",
  overview: "Wounded Warrior Project (WWP) is the nation's leading veterans service organization for post-9/11 wounded, ill, or injured veterans and their families. All programs are free and span mental health (PTSD/TBI care), physical wellness, career counseling, peer support, and VA benefits/claims assistance. Importantly, a disability rating is NOT required — any service-connected physical OR mental injury or illness qualifies.",
  mission: "Honor and empower post-9/11 wounded, ill, or injured veterans and their families to thrive.",
  founded: "2003 (Roanoke, VA), by John Melia.",
  hq: "Jacksonville, FL.",
  funding: "501(c)(3) nonprofit; donor-funded.",
  audience: ["Post-9/11 wounded/ill/injured veterans", "Active-duty service members", "Family members and caregivers"],
  geographic: "Nationwide; in-person and virtual support.",
  eligibility: "Veterans or active-duty service members who incurred a physical OR mental injury, illness, or wound during service on or after September 11, 2001. No disability rating required. Discharge must NOT be 'General Under Other Than Honorable' or 'Bad Conduct.' Family members/caregivers may also register (with the warrior's eligibility verified). Registration verifies service via the VA (or manual document upload).",
  status: "active",
  cost: { tags: ["free"], detail: "Every program and service is completely free — 'warriors never pay a penny.' Includes mental health treatment, wellness programs, career counseling, and benefits/claims help." },
  programs: [
    {
      name: "Warrior Care Network",
      description: "Intensive outpatient mental health treatment for PTSD, TBI, and related conditions, delivered through four partner academic medical centers (VA staff embedded).",
      serves: "Registered warriors needing clinical mental-health care.",
      apply: ["Register with WWP", "Connect with the Resource Center for a referral"],
      timeline: "Program-dependent; intensive multi-week formats.",
      capacity: "Via 4 academic medical centers."
    },
    {
      name: "Warriors to Work + Benefits Services",
      description: "Career counseling and employer connections (Warriors to Work), plus VA disability claims help from accredited National Service Officers — including free C&P exam preparation and military-records correction.",
      serves: "Warriors transitioning to civilian careers or pursuing VA benefits.",
      apply: ["Register with WWP", "Request the relevant program via the Resource Center"],
      timeline: "Ongoing.",
      capacity: "Nationwide."
    },
    {
      name: "Wellness & connection (Project Odyssey, Soldier Ride, WWP Talk, peer support, Independence Program)",
      description: "Adventure-based mental wellness (Project Odyssey), cycling (Soldier Ride), phone-based emotional support (WWP Talk), peer support groups, and the Independence Program for the most seriously injured.",
      serves: "Warriors and families building physical, mental, and social well-being.",
      apply: ["Register with WWP", "Browse programs/events via the MyWWP app/portal"],
      timeline: "Ongoing; event-based.",
      capacity: "Nationwide."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Free and broad, but specifically scoped to post-9/11 service-connected injury/illness (physical or mental). Registration requires VA verification or document upload. Not for pre-9/11 veterans." },
  outcomes: { note: "ESTIMATE / org-reported. WWP publishes an extensive annual warrior survey; its mental health and benefits services are well-regarded, though it has faced past scrutiny over fundraising overhead (since reformed)." },
  roi: { score: 7, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. Not a salary program — its value is wellness, stability, and benefits maximization. The VA claims/C&P prep alone can be financially significant for eligible warriors." },
  nobodyTells: [
    "You do NOT need a disability rating — any post-9/11 service-connected injury or illness, including purely mental health, qualifies.",
    "The free accredited VA claims help (and C&P exam prep) is one of its most underused, highest-value services.",
    "It's post-9/11 only — pre-9/11 veterans should look to other VSOs."
  ],
  fitByRank: {
    junior_enlisted: "Strong if post-9/11 with a service-connected condition.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Good — wellness, peer support, and benefits help apply to officers too.",
    senior_officer: "Good — especially benefits/claims navigation and mental wellness resources."
  },
  careers: ["N/A — wellness/benefits, plus career counseling via Warriors to Work"],
  pathways: ["Post-9/11 warrior → WWP registration → Warrior Care Network / Benefits Services / Warriors to Work"],
  community: {
    praise: ["Truly free", "Strong mental-health programs", "Accredited VA claims help"],
    complaints: ["Post-9/11 only", "Past fundraising-overhead controversy (since reformed)", "Registration verification step"],
    tips: ["Use the free benefits/claims and C&P prep", "Download MyWWP to find events", "Register family/caregivers too"]
  },
  sources: ["woundedwarriorproject.org", "militaryonesource.mil", "en.wikipedia.org"]
},

{
  id: "team-rwb",
  name: "Team RWB (Red, White & Blue)",
  verified: true,
  categories: ["health", "leadership"],
  url: "https://www.teamrwb.org/",
  tagline: "America's leading health-and-wellness community for veterans — open to all.",
  overview: "Team RWB is a national nonprofit that enriches veterans' lives through physical activity, social connection, and community service. Unlike injury-focused organizations, it's open to ALL veterans, service members, families, and supporters — built around local chapters, fitness events, and a member app. Its 'Enrichment Equation' (health, people, purpose) model has been described in peer-reviewed literature.",
  mission: "Enrich the lives of America's veterans by connecting them to community through physical and social activity.",
  founded: "2010 (Ann Arbor, MI), by Mike Erwin (Army officer, West Point).",
  hq: "Distributed; ~200+ communities nationwide.",
  funding: "501(c)(3) nonprofit; donor and corporate partners (e.g., Nike, Starbucks).",
  audience: ["All veterans and service members", "Military families", "Civilian supporters"],
  geographic: "200,000+ members across all 50 states and 200+ communities, plus virtual events.",
  eligibility: "Open to everyone — veterans, active-duty, families, and civilian supporters. No injury, rating, or era requirement.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to join and participate. New veteran members typically receive a Team RWB (Nike) shirt; events are free or low-cost." },
  programs: [
    {
      name: "Chapter & Community Program (CCP)",
      description: "Consistent local opportunities to connect through weekly fitness workouts (running, cycling, yoga, rucking, functional fitness), monthly social events, and community service projects.",
      serves: "Any member wanting local connection and fitness.",
      apply: ["Sign up free at teamrwb.org", "Download the Team RWB Member App", "Join local/virtual events"],
      timeline: "Ongoing; weekly/monthly cadence.",
      capacity: "200+ communities."
    },
    {
      name: "Eagle Leadership Development Program (ELDP)",
      description: "Refines the leadership skills veterans built in service through experience, education, and mentorship.",
      serves: "Members seeking leadership growth and volunteer-leader roles.",
      apply: ["Engage via your chapter / the member app"],
      timeline: "Program-based.",
      capacity: "National."
    }
  ],
  barrier: { level: "Low", reasons: "Free and open to all with no eligibility gate; the only thing required is signing up and showing up. Benefit depends on having an active chapter nearby (though virtual options exist)." },
  outcomes: { note: "ESTIMATE / org-reported + peer-reviewed. Charity Navigator 4-star; a 2024/25 six-month health study reported improved BMI and reduced risk biomarkers among participants. The VA has highlighted its role in reducing veteran loneliness." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. No direct career/salary effect; high value for well-being, connection, and combating post-service isolation. A natural complement to any career-focused program." },
  nobodyTells: [
    "It's open to everyone — you don't need to be wounded or even a veteran to participate.",
    "The real product is community and routine, not a single 'program' — consistency is the point.",
    "Its model is one of the few veteran-wellness approaches validated in peer-reviewed research."
  ],
  fitByRank: {
    junior_enlisted: "Strong for connection and routine.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Strong — plus leadership development via ELDP.",
    senior_officer: "Strong — leadership/mentorship roles and community."
  },
  careers: ["N/A — health, community, and leadership development"],
  pathways: ["Veteran → Team RWB chapter → fitness/community + ELDP leadership development"],
  community: {
    praise: ["Free and inclusive", "Strong local community", "Research-backed model", "4-star Charity Navigator"],
    complaints: ["Value depends on a nearby active chapter", "Not career-focused"],
    tips: ["Download the Member App to find events", "Show up consistently", "Pair with a career program for the job side"]
  },
  sources: ["teamrwb.org", "en.wikipedia.org", "pmc.ncbi.nlm.nih.gov"]
},

{
  id: "mission-continues",
  name: "The Mission Continues",
  verified: true,
  categories: ["health", "leadership"],
  url: "https://www.missioncontinues.org/",
  tagline: "Veteran-led community service — now part of Travis Manion Foundation.",
  overview: "The Mission Continues empowers veterans to find renewed purpose through community service in under-resourced neighborhoods. Its two pillars are local Service Platoons (team-based volunteer projects) and the Fellowship Program (a six-month, stipended placement with a host nonprofit). IMPORTANT: in 2025 The Mission Continues was acquired by Travis Manion Foundation and is integrating under the TMF name, operating in ~60 communities.",
  mission: "Connect veterans with opportunities to continue their service and leadership in their communities.",
  founded: "2007; acquired by Travis Manion Foundation in 2025.",
  hq: "St. Louis, MO (integrating with TMF).",
  funding: "501(c)(3) nonprofit (now under TMF).",
  audience: ["Veterans of all eras and branches", "Guard/Reserve (fellowship pilot)", "Civilian volunteers (platoons)"],
  geographic: "Service Platoons in 40+ cities; the merged org spans ~60 communities. Program eligibility may require living near an active platoon.",
  eligibility: "Veterans from all eras and branches. Service Platoons are open to everyone regardless of veteran status. The Fellowship Program is for veterans (and, via a newer pilot, Guard/Reserve members); it involves an application, background check, and DD214.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to participate. The Fellowship Program actually PAYS a monthly cost-of-living stipend during the six-month term." },
  programs: [
    {
      name: "Service Platoons",
      description: "Veteran-led local teams that partner with community organizations on hands-on projects (gardens, schools, parks, neighborhood revitalization), plus social events. Open to all, veteran or not.",
      serves: "Anyone with a passion for service; great for connection and purpose.",
      apply: ["Find a platoon near you on the site", "Register for an event and attend"],
      timeline: "Ongoing; at least monthly projects.",
      capacity: "40+ cities."
    },
    {
      name: "Fellowship Program",
      description: "A six-month commitment volunteering ~20 hrs/week with a host nonprofit, paired with a professional-development curriculum, one-on-one mentorship, a monthly stipend, and access to a national veteran-leader network.",
      serves: "Veterans (and Guard/Reserve via pilot) seeking purpose-driven experience and a bridge to civilian work.",
      apply: ["Apply online", "Work with a Fellowship Admissions Specialist (DD214 + background check)", "Select a host organization", "Complete the 6-month fellowship"],
      timeline: "6 months, ~20 hrs/week.",
      capacity: "Cohort-based; 2,000+ fellows historically."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Platoons are open and easy to join; the Fellowship is more selective (application, background check) and benefits from living near an active platoon/community. The 2025 TMF transition may shift branding and logistics." },
  outcomes: { note: "ESTIMATE / org-reported. 2,000+ fellows placed at 1,700+ nonprofits historically; strong reputation for restoring purpose and easing transition." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "Medium-High", note: "ESTIMATE. The Fellowship offers a stipend plus resume-building nonprofit experience and a leadership network — a meaningful bridge, though not a direct job pipeline." },
  nobodyTells: [
    "As of 2025 it's part of Travis Manion Foundation — expect the brand to converge under TMF.",
    "The Fellowship pays a monthly stipend — it's not just unpaid volunteering.",
    "Service Platoons are open to civilians too, so you can bring family/friends to serve alongside you."
  ],
  fitByRank: {
    junior_enlisted: "Strong for purpose and a resume-building bridge.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Good — leadership and network value; the fellowship suits a purpose-driven gap.",
    senior_officer: "Good for community leadership and mentorship roles."
  },
  careers: ["Nonprofit / community leadership", "Any — via fellowship experience + network"],
  pathways: ["Veteran → Mission Continues Fellowship (6 mo, stipended) → nonprofit/community role or onward career"],
  community: {
    praise: ["Renewed sense of purpose", "Stipended fellowship", "Strong veteran-leader network"],
    complaints: ["Fellowship is selective", "Location-dependent", "Mid-transition into TMF"],
    tips: ["Start with a Service Platoon to test fit", "For the fellowship, pick a host aligned to your career goals", "Confirm current branding/logistics post-merger"]
  },
  sources: ["missioncontinues.org", "travismanion.org", "focusmarines.org"]
},

{
  id: "travis-manion",
  name: "Travis Manion Foundation (TMF)",
  verified: true,
  categories: ["leadership", "health"],
  url: "https://www.travismanion.org/",
  tagline: "Character & leadership development — 'If Not Me, Then Who?'",
  overview: "Travis Manion Foundation empowers veterans and families of the fallen to develop character and leadership, and to mentor the next generation. Built on positive psychology and character-based education, its flagship programs are the Spartan Leadership Program (a 7-month personal-development cohort) and Character Does Matter (veteran-led youth mentorship). In 2025 TMF acquired The Mission Continues, expanding its service-and-community footprint to ~60 communities.",
  mission: "Empower veterans and families of the fallen to develop character in future generations.",
  founded: "Founded in honor of 1stLt Travis Manion, USMC (KIA April 29, 2007).",
  hq: "Doylestown, PA.",
  funding: "501(c)(3) nonprofit; Charity Navigator Platinum (per its materials).",
  audience: ["Veterans of all eras", "Families of the fallen (survivors)", "Active-duty (as mentors)", "Inspired civilians"],
  geographic: "~300,000 'Spartans' nationwide; ~60 communities after the TMC merger; many programs virtual.",
  eligibility: "Open to all veterans and families of the fallen regardless of era — and, for many programs and events, to inspired civilians. The Spartan Leadership Program is application-based (veterans and surviving family members).",
  status: "active",
  cost: { tags: ["free"], detail: "Free to participate in programs and events; funded by donations and corporate sponsors (e.g., Boeing, Under Armour)." },
  programs: [
    {
      name: "Spartan Leadership Program (SLP)",
      description: "A 7-month character-and-leadership development program blending virtual and in-person learning, rooted in positive psychology. ~3–4 hrs/week of instruction, group meetings, exercises, self-reflection, and a capstone project.",
      serves: "Veterans and surviving family members ready to invest in self-development and community leadership.",
      apply: ["Complete the detailed application", "If accepted, join a ~20-person cohort"],
      timeline: "7 months, ~3–4 hrs/week.",
      capacity: "Small cohorts (~20)."
    },
    {
      name: "Character Does Matter (CDM) + service/expeditions",
      description: "Veteran-and-survivor-led youth mentorship (grades ~4–12) grounded in 24 character strengths, plus Survivor Expeditions for families of the fallen and (post-merger) Mission Continues service platoons.",
      serves: "Veterans who want to mentor youth; survivors seeking community and healing.",
      apply: ["Volunteer as a CDM mentor (training + clearances)", "Or join a local chapter/event"],
      timeline: "Ongoing; volunteer-based.",
      capacity: "~17,000 volunteers annually."
    }
  ],
  barrier: { level: "Low", reasons: "Most programs/events are open and free; the Spartan Leadership Program is selective and a multi-month time commitment. Mentoring requires training and background clearances." },
  outcomes: { note: "ESTIMATE / org-reported. Reports strong personal-growth outcomes and broad youth-mentorship reach; Charity Navigator Platinum transparency seal per its materials." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "Medium-High", note: "ESTIMATE. Not a career program; high value for leadership growth, purpose, and especially for surviving families. SLP is a strong leadership-development experience for officers/NCOs." },
  nobodyTells: [
    "It acquired The Mission Continues in 2025 — the two are merging under the TMF name.",
    "It's not post-9/11-restricted — open to all eras and to families of the fallen specifically.",
    "The Spartan Leadership Program is genuine self-development, not a generic 'leadership class.'"
  ],
  fitByRank: {
    junior_enlisted: "Good for purpose, mentorship, and growth.",
    nco: "Strong — leadership development and youth mentoring.",
    senior_enlisted: "Strong.",
    junior_officer: "Strong — SLP complements officer leadership experience.",
    senior_officer: "Strong — leadership, mentorship, and legacy/community roles."
  },
  careers: ["N/A — leadership, character, and community development"],
  pathways: ["Veteran → TMF Spartan Leadership Program → community leadership / youth mentorship"],
  community: {
    praise: ["Deeply personal leadership growth", "Welcomes families of the fallen", "Strong youth-mentorship mission"],
    complaints: ["SLP is selective + time-intensive", "Not career/employment focused", "Mid-integration with TMC"],
    tips: ["Apply early for SLP cohorts", "Consider CDM mentoring locally", "Great pairing with a separate career program"]
  },
  sources: ["travismanion.org", "guidestar.org", "kars4kidsgrants.org"]
},

{
  id: "helmets-to-hardhats",
  name: "Helmets to Hardhats",
  verified: true,
  categories: ["trades"],
  url: "https://helmetstohardhats.org/",
  tagline: "Free pathway into paid union construction apprenticeships.",
  overview: "Helmets to Hardhats (H2H) is a national nonprofit that connects transitioning service members, veterans, Guard, and Reservists with registered apprenticeships and careers in the building and construction trades. It's backed by North America's Building Trades Unions (15 trades) and their employer associations. Apprenticeships are 'earn-while-you-learn' — you're paid from day one — and training is provided by the trades at little or no cost, with no prior experience needed.",
  mission: "Connect the military community with quality careers in the construction industry.",
  founded: "Administered by the nonprofit Center for Military Recruitment, Assessment and Veterans Employment.",
  hq: "Washington, DC (national; works through local unions nationwide).",
  funding: "501(c)(3) nonprofit; co-sponsored by the building/construction trades unions and employer associations.",
  audience: ["Transitioning active-duty", "Veterans", "National Guard", "Reservists", "(some local programs include active-duty spouses)"],
  geographic: "Nationwide via local union apprenticeship programs; online profile/matching from anywhere.",
  eligibility: "Transitioning active-duty members, veterans, National Guard, and Reservists. No prior trade experience needed — most successful placements start with none. Many states have 'direct entry' proclamations giving military applicants credit/priority.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to the veteran — apprenticeship training is provided by the trades, and apprentices EARN wages while they learn (3–5 year programs). Because the apprenticeships are federally/state-approved, you can OPTIONALLY use GI Bill benefits to supplement income, without it being required." },
  programs: [{
    name: "Apprenticeship matching (digital handshake)",
    description: "Create an online profile that translates your military skills, browse apprenticeship/career openings across 15 trades (electrician, pipefitter, ironworker, operating engineer, carpenter, sheet metal, etc.), and submit interest ('digital handshake'); an H2H rep then helps complete requirements. Includes a Wounded Warrior program for disabled veterans.",
    serves: "Service members/veterans wanting paid trade careers without student debt.",
    apply: ["Create a profile at helmetstohardhats.org", "Find an apprenticeship/career opportunity", "Submit a 'digital handshake'", "Work with an H2H rep to meet requirements"],
    timeline: "Apprenticeships run 3–5 years (earning throughout).",
    capacity: "36,000+ alumni; 100,000+ veterans on its construction roll."
  }],
  barrier: { level: "Low-Medium", reasons: "Free with no experience required, but you're entering a real 3–5 year apprenticeship — physically demanding, with classroom + on-the-job components. H2H matches you; it doesn't guarantee placement, and apprenticeship slots are union/employer-controlled." },
  outcomes: { note: "ESTIMATE / org-reported. 36,000+ alumni; skilled-trade wages commonly cited around $60k+ even at apprenticeship level, rising with journeyman status. Strong union benefits (healthcare, pension)." },
  roi: { score: 7, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Earn-while-you-learn with no debt and strong union benefits = excellent ROI for those drawn to the trades. You can save your GI Bill entirely." },
  nobodyTells: [
    "You get PAID from day one — apprenticeships are 'earn while you learn,' so you don't spend down the GI Bill (you can optionally use it to supplement).",
    "No experience needed — most placements start with zero construction background.",
    "It matches and connects; it doesn't 'place' you — the union apprenticeship still controls the slot."
  ],
  fitByRank: {
    junior_enlisted: "Excellent debt-free path to a skilled-trade career.",
    nco: "Excellent — leadership translates to foreman/supervisor tracks.",
    senior_enlisted: "Strong, especially with relevant technical backgrounds.",
    junior_officer: "Good if you want hands-on trade work; some officers prefer management/PM routes in construction.",
    senior_officer: "Mixed — consider construction management/ownership tracks rather than entry apprenticeship."
  },
  careers: ["Electrician", "Plumber/Pipefitter", "Ironworker", "Operating Engineer", "Carpenter", "Sheet Metal Worker", "Boilermaker"],
  pathways: ["Veteran → Helmets to Hardhats match → paid union apprenticeship (3–5 yrs) → journeyman → foreman"],
  community: {
    praise: ["Earn while you learn", "No debt; save the GI Bill", "Strong union wages/benefits"],
    complaints: ["Not a placement guarantee", "Physically demanding", "Apprenticeship slots union-controlled"],
    tips: ["Build a strong profile translating military skills", "Check your state's direct-entry proclamation", "Use the GI Bill only to supplement if needed"]
  },
  sources: ["helmetstohardhats.org", "military.com", "nabtu.org", "iuoe.org"]
},

{
  id: "workshops-for-warriors",
  name: "Workshops for Warriors",
  verified: true,
  categories: ["trades", "education"],
  url: "https://wfw.org/",
  tagline: "Free, accredited CNC machining & welding training with national credentials.",
  overview: "Workshops for Warriors (WFW) is a state-licensed, accredited nonprofit school in San Diego that trains and certifies veterans, transitioning service members, and wounded warriors for advanced-manufacturing careers (CNC machining and welding) in accelerated 16-week semesters. Graduates earn nationally recognized, portable, stackable credentials (AWS, NIMS, Mastercam, SolidWorks) and get job-placement help.",
  mission: "Train, certify, and place veterans into advanced manufacturing careers while rebuilding America's manufacturing workforce.",
  founded: "2008 (San Diego), by Hernán Luis y Prado, U.S. Navy veteran.",
  hq: "San Diego, CA (on-site training).",
  funding: "501(c)(3) nonprofit school; privately funded (notably uses no federal/state/municipal funding per its statements).",
  audience: ["Veterans", "Transitioning service members (incl. SkillBridge)", "Wounded warriors"],
  geographic: "On-site in San Diego, CA (graduates work in all 50 states). Requires relocating/being in San Diego for the 16-week program.",
  eligibility: "Veterans, transitioning service members, and wounded warriors. GI Bill and DoD SkillBridge approved. Scholarships and living stipends are offered to those who can't cover costs.",
  status: "active",
  cost: { tags: ["free", "scholarship", "gi-bill"], detail: "Effectively free for veterans in need: WFW offers tuition scholarships AND living stipends so students can focus on training. You can also use the Post-9/11 GI Bill (the school is GI-Bill-approved) or enter via SkillBridge while on active duty." },
  programs: [{
    name: "CNC Machining & Welding (16-week accelerated)",
    description: "Hands-on, full-time 16-week semesters in welding or CNC machining, with beginner through advanced/apprenticeship coursework across four areas: computer-aided manufacturing, computer-aided design, CNC machining/turning, and welding/fabrication. Culminates in stackable industry credentials (AWS, NIMS, Mastercam, SolidWorks, NC3).",
    serves: "Veterans/transitioning members wanting a fast, credentialed path into manufacturing.",
    apply: ["Apply online (welding or machining track)", "WFW contacts you", "Arrange GI Bill/SkillBridge or scholarship+stipend", "Attend the 16-week semester in San Diego"],
    timeline: "16 weeks per semester, full-time.",
    capacity: "Small classes (e.g., ~1:4 instructor ratio in advanced courses); ~94% graduation rate."
  }],
  barrier: { level: "Medium", reasons: "Free/funded and high-quality, but it's an intensive full-time program in San Diego — relocation and a 16-week full-time commitment are the real barriers, not cost." },
  outcomes: { note: "ESTIMATE / org-reported. Since 2008, ~1,300+ graduates with a ~94% graduation rate; graduates reportedly earn ~$50k–$75k and work at employers from small shops to Ford, Boeing, SpaceX, and General Dynamics." },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Free/funded training + stackable national credentials + strong placement in a fast 16 weeks = excellent ROI for those willing to relocate to San Diego." },
  nobodyTells: [
    "Scholarships AND living stipends mean it can be genuinely free even beyond the GI Bill — but you generally need to be in San Diego.",
    "Credentials are portable and stackable (AWS/NIMS/Mastercam/SolidWorks) — they travel to all 50 states.",
    "SkillBridge lets you train while still on active duty (and save your GI Bill)."
  ],
  fitByRank: {
    junior_enlisted: "Excellent fast path into skilled manufacturing.",
    nco: "Excellent.",
    senior_enlisted: "Strong for a hands-on manufacturing career.",
    junior_officer: "Good if you want a hands-on trade; otherwise weigh manufacturing-management routes.",
    senior_officer: "Mixed — likely over-leveled for entry machinist/welder roles; consider ops/management."
  },
  careers: ["CNC Machinist", "Welder/Fabricator", "CAD/CAM Programmer", "Manufacturing Technician"],
  pathways: ["Veteran (relocate to San Diego) → WFW 16-week program (GI Bill/SkillBridge/scholarship) → credentialed manufacturing role"],
  community: {
    praise: ["Free/funded incl. living stipends", "Accredited, stackable credentials", "~94% grad rate, strong placement"],
    complaints: ["San Diego location/relocation required", "Intensive full-time", "Limited class sizes"],
    tips: ["Use SkillBridge if still active-duty", "Ask about scholarship + living stipend early", "Pick welding vs. machining based on target employers"]
  },
  sources: ["wfw.org", "guidestar.org", "cnc-west.com", "nvf.org"]
},

{
  id: "msep",
  name: "Military Spouse Employment Partnership (MSEP)",
  verified: true,
  categories: ["spouse", "transition"],
  url: "https://msepjobs.militaryonesource.mil/msep/",
  tagline: "DoD job portal linking spouses to 360+ committed employers.",
  overview: "MSEP is a free Department of Defense recruitment-and-employment program that connects military spouses with hundreds of employers who have formally committed to recruit, hire, promote, and retain them in portable careers. It's one of the four components of the broader SECO initiative. Spouses use the MSEP Job Search portal to find roles and can opt into a candidate search so partner recruiters contact them directly.",
  mission: "Connect military spouses with employers committed to hiring and retaining them in portable careers.",
  founded: "Launched June 2011 (expanded from the Army Spouse Employment Partnership).",
  hq: "DoD / Military OneSource (online portal).",
  funding: "Federal (Department of Defense).",
  audience: ["Spouses of active-duty (all branches)", "Spouses of Guard/Reserve", "Surviving spouses", "DoD-civilian family members"],
  geographic: "Worldwide; online portal with employers hiring locally, nationally, and globally.",
  eligibility: "Military spouses from all branches (Army, Navy, Marine Corps, Air Force, Space Force, Coast Guard), including spouses of active-duty and Guard/Reserve members, plus surviving spouses. Free to use.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free for spouses. Partner employers are barred from charging any fees associated with MSEP employment opportunities." },
  programs: [{
    name: "MSEP Job Search + Candidate Search",
    description: "A portal of thousands of jobs posted by 360+ partner employers (who sign a Statement of Support to recruit/hire/retain spouses). Filter by title, location, industry, and company; opt into Candidate Search so recruiters can find and contact you. Industries span IT/cyber, healthcare, business/finance, and education.",
    serves: "Military spouses seeking portable, relocation-friendly careers.",
    apply: ["Create a MySECO account", "Build/update your profile", "Opt into MSEP Candidate Search", "Search and apply to partner jobs"],
    timeline: "Self-paced; ongoing.",
    capacity: "360+ partners; 112,000+ spouses hired historically."
  }],
  barrier: { level: "Low", reasons: "Free and open to eligible spouses; just requires a MySECO account and active use. It's a connector, so results depend on your profile and the roles partners post." },
  outcomes: { note: "ESTIMATE / org-reported. 360+ partner employers; 112,000+ spouse hires reported over the program's life. Partners commit to retention and advancement and must report hiring data." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Free, with direct access to employers who actively want to hire spouses — high leverage for relocation-friendly/portable careers (relevant given frequent PCS moves)." },
  nobodyTells: [
    "Opt into 'Candidate Search' — that's what lets partner recruiters find and contact you directly.",
    "Partners specifically commit to RETAINING spouses through moves, so portable/remote roles are common.",
    "It's one piece of SECO — pair it with free SECO career coaching and (if eligible) MyCAA funding."
  ],
  fitByRank: {
    junior_enlisted: "Strong for spouses regardless of sponsor rank.",
    nco: "Strong for spouses.",
    senior_enlisted: "Strong for spouses.",
    junior_officer: "Strong for spouses — portable/remote roles ease PCS moves.",
    senior_officer: "Strong for spouses."
  },
  careers: ["IT / Cybersecurity", "Healthcare", "Business / Finance", "Education", "Remote-friendly roles"],
  pathways: ["Military spouse → MySECO + MSEP Candidate Search → partner-employer role that survives PCS moves"],
  community: {
    praise: ["Free", "Employers genuinely want spouses", "Portable/remote-friendly roles"],
    complaints: ["Outcome depends on your profile/effort", "It's a connector, not placement"],
    tips: ["Opt into Candidate Search", "Use a functional resume to address career gaps", "Layer SECO coaching + MyCAA on top"]
  },
  sources: ["msepjobs.militaryonesource.mil", "militaryonesource.mil", "doi.gov"]
},

{
  id: "seco",
  name: "SECO / SpouseWorks",
  verified: true,
  categories: ["spouse", "education"],
  url: "https://myseco.militaryonesource.mil/portal/",
  tagline: "Free DoD career coaching, education planning, and the MyCAA scholarship.",
  overview: "Spouse Education and Career Opportunities (SECO) is the Department of Defense's umbrella program for military-spouse careers, delivered via the MySECO portal ('SpouseWorks'). It has four components: the MySECO website (tools/resources), free one-on-one career coaching from certified coaches, the MyCAA scholarship (up to $4,000 tuition assistance for portable credentials), and MSEP (the employer-partner job network). Coaching covers career exploration, education/licensing, employment readiness, and connections.",
  mission: "Strengthen the education and career opportunities of military spouses worldwide.",
  founded: "DoD initiative (MSEP, one of its pillars, launched 2011).",
  hq: "DoD / Military OneSource (MySECO online + phone coaching).",
  funding: "Federal (Department of Defense).",
  audience: ["Military spouses (all branches)", "Spouses of Guard/Reserve", "Surviving spouses"],
  geographic: "Worldwide; online portal plus phone coaching six days/week.",
  eligibility: "All eligible military spouses can use MySECO tools, career coaching, and MSEP for free. MyCAA scholarship eligibility is narrower — generally spouses of service members in pay grades E-1–E-6, W-1–W-2, and O-1–O-3 (and equivalent Guard/Reserve), tied to the sponsor's pay grade.",
  status: "active",
  cost: { tags: ["free", "scholarship"], detail: "Coaching, tools, and MSEP are free to all eligible spouses. MyCAA provides up to $4,000 in tuition assistance (annual cap $2,000) for a license, certification, certificate, or associate degree in a portable field — but only for pay-grade-eligible spouses." },
  programs: [
    {
      name: "SECO career coaching + MySECO tools",
      description: "Certified career coaches provide free counseling six days/week on career exploration, education/licensing requirements, resume writing, interviewing, networking, and employment connections (including how to leverage MSEP, Hiring Our Heroes, and USAJobs). The MySECO portal hosts self-service tools and resources.",
      serves: "All military spouses, at any career stage.",
      apply: ["Create a MySECO account", "Call Military OneSource (800-342-9647) to reach the SECO Career Center", "Schedule a coaching/specialty consultation"],
      timeline: "Self-paced; coaching available six days/week.",
      capacity: "Worldwide."
    },
    {
      name: "MyCAA scholarship",
      description: "Up to $4,000 (with a $2,000 annual cap) of tuition assistance for portable licenses, certifications, certificates, or associate degrees — for spouses in eligible pay grades.",
      serves: "Pay-grade-eligible spouses pursuing a portable credential.",
      apply: ["Confirm pay-grade eligibility", "Create a MyCAA account", "Build an approved education & training plan", "Apply funding to an approved program"],
      timeline: "Tied to your training plan.",
      capacity: "Funding-limited (e.g., capped numbers of new approvals at certain pay grades)."
    }
  ],
  barrier: { level: "Low", reasons: "Coaching and tools are free and open to all spouses with minimal setup. MyCAA funding is the gated piece — eligibility depends on the sponsor's pay grade and available funding." },
  outcomes: { note: "ESTIMATE / org-reported. Long-running DoD program; MyCAA is widely used to fund portable credentials, and SECO coaching is a common first stop for spouse career planning." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Free coaching plus up to $4,000 toward a portable credential is high-leverage for a spouse building a relocation-proof career. Pair MyCAA-funded training with MSEP for the job search." },
  nobodyTells: [
    "SECO is the umbrella — MSEP, MyCAA, and the coaching center are all parts of it (the portal is branded 'SpouseWorks').",
    "MyCAA is pay-grade-gated (roughly E-1–E-6, W-1–W-2, O-1–O-3) — many officer spouses above O-3 won't qualify for the scholarship but still get free coaching and MSEP.",
    "MyCAA only funds PORTABLE credentials (license/cert/associate) — not a four-year degree."
  ],
  fitByRank: {
    junior_enlisted: "Excellent for spouses — coaching + MyCAA funding likely available.",
    nco: "Excellent for spouses (MyCAA often available through E-6).",
    senior_enlisted: "Coaching/MSEP free; MyCAA likely not eligible above E-6.",
    junior_officer: "Strong for spouses — MyCAA available through O-3; coaching/MSEP always free.",
    senior_officer: "Spouses get free coaching + MSEP; MyCAA scholarship generally not eligible above O-3."
  },
  careers: ["Portable/licensed fields (healthcare, education, IT)", "Any — via coaching + MSEP"],
  pathways: ["Military spouse → SECO coaching → MyCAA-funded portable credential → MSEP job search"],
  community: {
    praise: ["Free coaching for all spouses", "Up to $4,000 via MyCAA", "Ties directly into MSEP jobs"],
    complaints: ["MyCAA pay-grade gated", "MyCAA only for portable credentials", "Funding caps on MyCAA"],
    tips: ["Use free coaching even if MyCAA-ineligible", "Check pay-grade eligibility before banking on MyCAA", "Chain MyCAA training into an MSEP job search"]
  },
  sources: ["myseco.militaryonesource.mil", "militaryonesource.mil", "myarmybenefits.us.army.mil"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 4 — 5: business + benefits hubs)
   ========================================================================== */

{
  id: "score",
  name: "SCORE Mentorship",
  verified: true,
  categories: ["business", "leadership"],
  url: "https://www.score.org/",
  tagline: "Free, lifelong 1:1 small-business mentoring (SBA resource partner).",
  overview: "SCORE is the nation's largest network of volunteer expert business mentors — roughly 10,000 mentors across 200+ chapters — offering free, confidential, ongoing mentorship plus workshops, webinars, and templates to anyone starting or running a U.S. business. It is a longstanding SBA resource partner (not veteran-specific, but heavily used by veteran founders alongside the SBA's VBOC network).",
  mission: "Foster vibrant small-business communities through free mentoring and education.",
  founded: "1964 (originally the Service Corps of Retired Executives).",
  hq: "Herndon, VA (chapters nationwide + virtual).",
  funding: "Nonprofit; historically funded largely by a federal SBA grant plus workshop fees and contributions.",
  audience: ["Aspiring and existing small-business owners (any U.S. business)", "Veteran and military-spouse entrepreneurs"],
  geographic: "200+ local chapters nationwide plus phone/email/video mentoring everywhere.",
  eligibility: "Open to any aspiring or established owner of a U.S.-based business or business idea. No fee, no veteran requirement.",
  status: "active",
  cost: { tags: ["free"], detail: "Mentoring is free and can continue for the life of your business. Most workshops/resources are free; some local events or advanced courses may carry a fee." },
  programs: [{
    name: "1:1 mentoring + workshops",
    description: "Ongoing one-on-one mentorship (phone, email, video, or in person) matched to your industry/need, plus a large library of free webinars, courses, templates (business plan, cash-flow), and local events.",
    serves: "Founders at any stage — idea, startup, growth, pivot, or exit.",
    apply: ["Enter your zip on score.org and submit a mentoring request", "Get matched with a local or subject-matter mentor", "Meet (often ~1 hour) and set next steps; request other mentors anytime"],
    timeline: "Ongoing; sessions typically ~1 hour, as often as you need.",
    capacity: "Open; ~10,000 volunteer mentors."
  }],
  barrier: { level: "Low", reasons: "Free and open to anyone — the only effort is requesting a mentor and showing up prepared with a real question or goal." },
  outcomes: { note: "ESTIMATE / org-reported. SCORE cites strong survival rates for mentored businesses and helps hundreds of thousands of clients yearly; figures are self-reported." },
  roi: { score: 6, salaryImpact: "Variable", timeReturn: "High", note: "ESTIMATE. Very high return on a tiny time cost; ROI depends entirely on your venture. Strongest paired with the SBA's VBOC/SBDC network." },
  nobodyTells: [
    "It's not veteran-specific — pair it with a Veterans Business Outreach Center (VBOC) for veteran-tailored help.",
    "Mentor quality varies; if your match isn't right, you can request a different expert at no cost.",
    "FUNDING NOTE: SCORE's federal SBA funding was not included in the FY26 budget request sent to Congress in 2025 — its long-term federal support is uncertain, so confirm current availability."
  ],
  fitByRank: {
    junior_enlisted: "Good free starting point for a would-be founder.",
    nco: "Good.",
    senior_enlisted: "Good.",
    junior_officer: "Good — a free sounding board for an early venture.",
    senior_officer: "Good — combine with IVMF/CEOcircle if you already run a company."
  },
  careers: ["Entrepreneurship", "Small Business Ownership"],
  pathways: ["Veteran with an idea → SCORE mentor + VBOC counseling → SBA-backed financing → launch"],
  community: {
    praise: ["Free and lifelong", "Huge mentor network", "Strong template/workshop library"],
    complaints: ["Not veteran-specific", "Mentor fit varies", "Federal funding uncertainty going forward"],
    tips: ["Come with a specific question or goal", "Swap mentors if the fit is off", "Layer SCORE + VBOC + SBDC for full coverage"]
  },
  sources: ["score.org", "sba.gov", "en.wikipedia.org"]
},

{
  id: "v-wise",
  name: "V-WISE (Veteran Women Igniting the Spirit of Entrepreneurship)",
  verified: true,
  categories: ["business", "spouse"],
  url: "https://ivmf.syracuse.edu/programs/entrepreneurship/start-up/v-wise/",
  tagline: "Near-free entrepreneurship training for women veterans & spouses.",
  overview: "V-WISE is a Syracuse University IVMF entrepreneurship program for women who are serving, have served, or are military spouses/partners. It pairs a four-week online business-fundamentals course (20+ modules) with an in-person three-day capstone conference, plus an alumni network of 2,000+ women veteran/spouse entrepreneurs.",
  mission: "Help women veterans and military spouses launch and grow successful businesses.",
  founded: "Part of IVMF (Syracuse, founded 2011); V-WISE has run for over a decade.",
  hq: "D'Aniello Institute for Veterans and Military Families, Syracuse University, NY.",
  funding: "Nonprofit/university; corporate and foundation philanthropy (plus SBA support).",
  audience: ["Women veterans (any era/branch, incl. Guard/Reserve)", "Active-duty women", "Women military spouses/partners (incl. widowed)"],
  geographic: "Online Phase I nationwide; in-person capstone conferences in rotating host cities. One to two cohorts per year.",
  eligibility: "Women with a business idea or recently started business who are honorably discharged veterans, active-duty, or military spouses/partners. Does not use GI Bill benefits.",
  status: "active",
  cost: { tags: ["partially-funded"], detail: "A $75 registration fee covers the 20+ module online course PLUS two nights of lodging and most meals at the in-person capstone conference. Does not draw down GI Bill. (High-demand cohorts can sell out.)" },
  programs: [{
    name: "V-WISE (Phase I online + Phase II conference)",
    description: "Phase I: a four-week online course in business fundamentals (opportunity recognition, planning, financing, marketing, law, access to capital) with weekly live office hours. Phase II: a three-day in-person capstone blending education with a business conference and networking.",
    serves: "Women exploring entrepreneurship for the first time or growing an early venture.",
    apply: ["Submit an application on the IVMF V-WISE page (active 1 year)", "Complete Phase I online (begins ~1 month before the conference)", "Attend the in-person capstone with your cohort"],
    timeline: "~4-week online course + 3-day conference; 1–2 cohorts/year.",
    capacity: "Cohort-based (often ~200 per location); can sell out."
  }],
  barrier: { level: "Low", reasons: "Nominal $75 fee and open application; the practical gates are cohort availability (sells out) and travel to the capstone." },
  outcomes: { note: "ESTIMATE / org-reported. A 2,000+ -strong alumni community; IVMF entrepreneurship programs are well-regarded, though individual business outcomes vary." },
  roi: { score: 7, salaryImpact: "Variable", timeReturn: "High", note: "ESTIMATE. Outstanding value — near-free training plus a conference and a durable women-founder network. ROI depends on the venture." },
  nobodyTells: [
    "The $75 fee covers lodging and most meals at the capstone — it's effectively subsidized, not 'cheap training.'",
    "It does NOT touch your GI Bill, unlike using GI Bill for a degree.",
    "Cohorts sell out — submit the interest form early; applications stay active for a year."
  ],
  fitByRank: {
    junior_enlisted: "Strong if you have a business idea.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Strong for women officers eyeing a venture.",
    senior_officer: "Strong — pairs well with IVMF's growth-stage programs.",
    note: "Women only — open to women veterans, active-duty women, and women military spouses/partners."
  },
  careers: ["Entrepreneurship", "Small Business Ownership"],
  pathways: ["Woman veteran/spouse with an idea → V-WISE → IVMF growth programs / SBA financing → launch & scale"],
  community: {
    praise: ["Near-free incl. lodging/meals", "Strong women-founder network", "Respected IVMF curriculum"],
    complaints: ["Sells out", "Requires travel to the capstone", "Women-only (by design)"],
    tips: ["Apply early — cohorts fill", "Have at least a rough business idea ready", "Use the alumni network after graduating"]
  },
  sources: ["ivmf.syracuse.edu", "news.va.gov", "nerdwallet.com"]
},

{
  id: "vetfran",
  name: "VetFran",
  verified: true,
  categories: ["business"],
  url: "https://www.vetfran.org/",
  tagline: "Franchise-fee discounts and education via 500+ brands (IFA program).",
  overview: "VetFran is a program of the International Franchise Association (IFA) Foundation that connects honorably discharged veterans with 500–650+ franchise brands offering veteran incentives, plus educational resources on the franchising model. Founded in 1991 after the Gulf War. It's a directory and education resource — it does not match veterans to brands or recommend specific opportunities.",
  mission: "Connect U.S. military veterans with opportunities in franchising.",
  founded: "1991 (Veterans Transition Franchise Initiative); relaunched/expanded several times since.",
  hq: "International Franchise Association, Washington, DC.",
  funding: "Industry-funded (IFA Foundation); free to veterans.",
  audience: ["Honorably discharged veterans", "(Some brands extend incentives to spouses)"],
  geographic: "Nationwide; online directory of participating brands.",
  eligibility: "Honorably discharged veterans qualify for member-brand incentives. Using VetFran resources/directory is free and open.",
  status: "active",
  cost: { tags: ["free", "self-pay"], detail: "VetFran's resources and directory are free. The franchise itself is a major investment: discounts are tiered (1-star ≈10%, 3-star ≈15%, 5-star ≈20%+ off the INITIAL FRANCHISE FEE) — which is only ~5–15% of total investment, so savings are real but modest against total cost. Always confirm the discount in the franchisor's FDD (Item 5)." },
  programs: [{
    name: "VetFran directory + education",
    description: "A searchable directory of 500–650+ participating franchisors offering veteran fee discounts and incentives, plus educational content on how franchising works, what to ask, and how to evaluate opportunities.",
    serves: "Veterans exploring or pursuing franchise ownership at any stage.",
    apply: ["Browse the VetFran directory at vetfran.org", "Contact a franchisor's development team and identify as a veteran", "Request the VetFran discount in writing and confirm it in the FDD before signing"],
    timeline: "Self-directed; varies by brand and your timeline.",
    capacity: "Open."
  }],
  barrier: { level: "Medium", reasons: "The directory is free, but franchise ownership requires significant capital (typically $50K–$500K+ total) and franchisor qualification. VetFran doesn't fund you or guarantee approval." },
  outcomes: { note: "ESTIMATE. Veterans are over-represented among franchise owners (~14% of franchises vs ~7% of population per IFA); outcomes depend on the brand, market, and operator." },
  roi: { score: 5, salaryImpact: "Variable", timeReturn: "Variable", note: "ESTIMATE. The discount is table stakes; fit between the business's day-to-day and the operator matters far more. Pair with SBA Veterans Advantage financing." },
  nobodyTells: [
    "The discount applies only to the initial franchise fee (a small slice of total cost) — not the full investment.",
    "VetFran doesn't recommend or match brands; confirm any discount directly with the franchisor and in the FDD before signing.",
    "The SBA Veterans Advantage loan-fee waiver can save more than the franchise-fee discount; ask any brand whether it has a veteran franchisee association too."
  ],
  fitByRank: {
    junior_enlisted: "Possible, but capital and qualification are real hurdles.",
    nco: "Good — operational discipline suits franchise systems.",
    senior_enlisted: "Strong — SOP execution and team leadership transfer well.",
    junior_officer: "Good — leadership maps to multi-unit ownership ambitions.",
    senior_officer: "Strong for those with capital targeting franchise ownership."
  },
  careers: ["Franchise Ownership", "Multi-unit Operator", "Entrepreneurship"],
  pathways: ["Veteran → VetFran directory → franchisor due diligence (FDD) → SBA-backed financing → franchise ownership"],
  community: {
    praise: ["Free directory + education", "Many brands actively recruit veterans", "Discipline/SOP skills fit franchising"],
    complaints: ["Discount is fee-only, not total cost", "No matching or funding", "Capital requirements are steep"],
    tips: ["Verify discounts in the FDD", "Weigh SBA Veterans Advantage financing", "Ask about a brand's veteran franchisee association"]
  },
  sources: ["franchise.org", "vetfran.org", "franchisevs.com"]
},

{
  id: "military-onesource",
  name: "Military OneSource",
  verified: true,
  categories: ["financial", "health", "spouse"],
  url: "https://www.militaryonesource.mil/",
  tagline: "Free 24/7 DoD hub: counseling, MilTax, finances, spouse careers.",
  overview: "Military OneSource is the Department of Defense's free, confidential, 24/7 support hub for the military community. It offers non-medical counseling (up to 12 sessions per issue), free tax prep via MilTax, financial counseling, spouse career help (SpouseWorks/SECO), relocation and deployment support, and specialty consultations — by phone, secure chat, video, or in person.",
  mission: "Provide comprehensive, confidential support across every aspect of military life.",
  founded: "DoD program (operating for ~two decades).",
  hq: "U.S. Department of Defense (the 'Department of War'/DOW in recent materials).",
  funding: "Federal (DoD).",
  audience: ["Active-duty, National Guard, and Reserve (regardless of activation) and their families", "Recently separated veterans (up to 365 days post-separation)", "Survivors", "Some DoD expeditionary civilians"],
  geographic: "Worldwide, 24/7, by phone (800-342-9647), secure chat, video, or local in-person referral.",
  eligibility: "Service members of all branches (incl. Coast Guard and Space Force) and immediate family; Guard/Reserve regardless of activation; survivors; and the recently separated up to 365 days after separation/retirement (after which the VA takes over).",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free and confidential. Non-medical counseling is short-term/solution-focused (it does not diagnose or treat clinical conditions — those route to TRICARE/MTF). Confidential and not reported to the chain of command or security clearance, with standard legal exceptions (abuse, duty-to-warn)." },
  programs: [{
    name: "Counseling, MilTax, financial & spouse-career support",
    description: "Free non-medical counseling (in person/phone/chat/video, up to 12 sessions per issue) by master's/doctoral-level licensed counselors; MilTax free filing software + tax consultations; financial counseling; SpouseWorks/SECO career coaching; relocation, deployment, EFMP, and specialty consultations.",
    serves: "The whole military family across life events and stressors.",
    apply: ["Call 800-342-9647 or start a secure live chat 24/7", "A consultant confirms eligibility and connects you to the right service", "Schedule counseling, tax help, financial or career coaching as needed"],
    timeline: "Immediate intake 24/7; counseling authorized in blocks of up to 12 sessions/issue.",
    capacity: "Open to all eligible members worldwide."
  }],
  barrier: { level: "Low", reasons: "Free, immediate, and confidential. The main caveat is scope — it's non-medical, short-term support; clinical diagnoses/treatment route to TRICARE or a military treatment facility." },
  outcomes: { note: "ESTIMATE. A RAND study found Military OneSource and MFLC counseling reduced stress and improved relationships/resilience; it's a front-door referral hub, not a clinical provider." },
  roi: { score: 7, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. Not a career program, but the MilTax and financial counseling alone have direct dollar value, and it's free." },
  nobodyTells: [
    "You keep access for up to 365 days after you separate — use MilTax and financial counseling during your transition year.",
    "Counseling is confidential and won't touch your security clearance or chain of command (standard legal exceptions aside).",
    "It's non-medical and short-term — for diagnosed conditions or long-term therapy, it refers you to TRICARE or an MTF."
  ],
  fitByRank: {
    junior_enlisted: "Essential free support.",
    nco: "Essential.",
    senior_enlisted: "Essential.",
    junior_officer: "Essential — especially MilTax and transition-year financial counseling.",
    senior_officer: "Essential — and a resource to point your people toward."
  },
  careers: ["N/A — supports the whole family across military life"],
  pathways: ["Service member → Military OneSource (counseling, MilTax, SpouseWorks) → smoother transition → VA after 365 days"],
  community: {
    praise: ["Free, 24/7, confidential", "MilTax is genuinely valuable", "Covers the whole family"],
    complaints: ["Non-medical/short-term only", "Doesn't handle pay/personnel issues", "Access ends 365 days post-separation"],
    tips: ["Use MilTax during your transition year", "Lean on SpouseWorks/SECO for spouse careers", "Call early — intake is 24/7"]
  },
  sources: ["militaryonesource.mil", "myarmybenefits.us.army.mil", "army.mil"]
},

{
  id: "nmfa",
  name: "National Military Family Association (NMFA)",
  verified: true,
  categories: ["financial", "spouse"],
  url: "https://www.militaryfamily.org/",
  tagline: "Spouse scholarships, free kids' camps, and family advocacy since 1969.",
  overview: "NMFA is a leading nonprofit serving military families since 1969. Its best-known offerings are the Joanne Holbrook Patton Military Spouse Scholarship (usable for degrees, certifications, licensure, and even business start-up costs), free Operation Purple summer camps for military kids, and national advocacy on pay, housing, health care, and survivor benefits.",
  mission: "Identify and resolve the unique challenges of military life through advocacy and programs.",
  founded: "1969.",
  hq: "Alexandria, VA.",
  funding: "501(c)(3) nonprofit; donor and partner funded.",
  audience: ["Military spouses (all uniformed services)", "Military children/teens", "Military families broadly"],
  geographic: "Nationwide; scholarships and advocacy national, camps at locations across the country (plus virtual).",
  eligibility: "Spouse scholarships: any spouse eligible to hold a valid military ID may apply. Operation Purple Camp: military-connected children. Some partner scholarships (e.g., UMGC, Webster) have their own criteria.",
  status: "active",
  cost: { tags: ["free", "scholarship"], detail: "Programs are free/funded. The Joanne Holbrook Patton Spouse Scholarship averages roughly $500–$2,500 (career funding ~ $500, degrees ~ $1,000, up to ~$2,500 for mental-health clinical-supervision hours, ~$1,000 for business start-up). Awarded on a rolling basis, multiple times per year. Operation Purple Camp is free." },
  programs: [
    {
      name: "Joanne Holbrook Patton Military Spouse Scholarship",
      description: "Flexible awards for tuition, certifications, licensure/re-licensure, CEUs, clinical-supervision hours toward mental-health licensure, and business start-up costs — designed around the PCS-mobile spouse life.",
      serves: "Military spouses (all services) pursuing education, a credential, or a business.",
      apply: ["Apply on the NMFA site once accepted/enrolled in your program", "Rolling application; awarded quarterly", "Reapply once per scholarship year"],
      timeline: "Rolling; awarded ~quarterly.",
      capacity: "Varies with donor funding."
    },
    {
      name: "Operation Purple Camp",
      description: "Free weeklong summer camps for military-connected kids, with curriculum focused on coping with deployment/relocation and connecting with peers who share the experience.",
      serves: "Military children and teens.",
      apply: ["Apply during the annual camp registration window on the NMFA site"],
      timeline: "Summer; weeklong sessions.",
      capacity: "Limited; competitive."
    }
  ],
  barrier: { level: "Low", reasons: "Open applications; the spouse scholarship asks you to be accepted/enrolled first, and camp slots are limited and competitive." },
  outcomes: { note: "ESTIMATE / org-reported. NMFA has funded spouse scholarships since 2004 (GEDs through PhDs, plus licensure and business costs) and runs free camps nationwide; figures are self-reported." },
  roi: { score: 6, salaryImpact: "Medium", timeReturn: "High", note: "ESTIMATE. The spouse scholarship's flexibility (licensure, re-licensure, business costs) makes it high-leverage for a PCS-disrupted career; camps are family wellbeing rather than career ROI." },
  nobodyTells: [
    "The spouse scholarship isn't just for tuition — it covers licensure, re-licensure, CEUs, clinical-supervision hours, and even business start-up costs.",
    "Apply only once you're accepted/enrolled, and reapply once per scholarship year; awards are quarterly.",
    "Operation Purple Camp is a free, often-overlooked benefit for kids navigating deployment or frequent moves."
  ],
  fitByRank: {
    junior_enlisted: "Strong for spouses/kids of junior families.",
    nco: "Strong.",
    senior_enlisted: "Strong.",
    junior_officer: "Strong for officer spouses re-credentialing after a PCS.",
    senior_officer: "Strong — useful for spouse re-licensure and kids' camps.",
    note: "Family-focused — keyed to spouses and children, not the service member's rank."
  },
  careers: ["Any (spouse credential/licensure funding)", "Mental-health licensure path", "Small business (start-up funding)"],
  pathways: ["Spouse → NMFA scholarship (licensure/re-licensure) → portable credential → MSEP job search"],
  community: {
    praise: ["Flexible scholarship uses", "Free kids' camps", "Long advocacy track record"],
    complaints: ["Award sizes are modest", "Camp slots limited", "Must be enrolled before applying"],
    tips: ["Use it for re-licensure after a PCS", "Stack with MyCAA and MSEP", "Apply for Operation Purple Camp early"]
  },
  sources: ["militaryfamily.org", "umgc.edu", "myseco.militaryonesource.mil"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 5 — 3: transition/employment + family)
   ========================================================================== */

{
  id: "nextop",
  name: "NextOp Veterans",
  verified: true,
  categories: ["trades", "transition"],
  url: "https://nextopvets.org/",
  tagline: "Free 1:1 placement for mid-enlisted vets into industry & trades.",
  overview: "NextOp is a Houston-based nonprofit that recruits, trains, and places high-performing military leaders into industry careers — with a deliberate, unusual focus on the mid-enlisted ranks (E-3 to E-7). Free, all-veteran staff, one-on-one Employment Coordinators, and SkillBridge-integrated. Industries span energy, manufacturing, industrial construction/skilled trades, logistics, healthcare, cybersecurity, and aerospace/defense.",
  mission: "Bridge the gap between transitioning enlisted talent and industry careers.",
  founded: "2014 (Houston, TX).",
  hq: "Houston, TX (expanding into North Texas, West Tennessee, North Alabama, and beyond).",
  funding: "Nonprofit; grants and corporate/industry partnerships (free to veterans).",
  audience: ["Mid-enlisted transitioning service members and veterans (focus E-3 to E-7)", "Broader enlisted community"],
  geographic: "Concentrated in Texas and expanding regions; events and virtual hiring sessions nationwide.",
  eligibility: "Transitioning service members and veterans without a dishonorable discharge. Free. (Built around the enlisted talent pool — less tailored to officers.)",
  status: "active",
  cost: { tags: ["free"], detail: "All services are free to military and veterans. SkillBridge internships occur in the last ~6 weeks to 3 months of service on the DoD's dime." },
  programs: [{
    name: "Employment Coordinator (1:1 placement) + SkillBridge",
    description: "A veteran Employment Coordinator works one-on-one with you to translate your MOS, refine your resume, prep interviews, and connect directly to pre-screened employers — through job offer and beyond. NextOp also coordinates DoD SkillBridge internships and runs hiring events.",
    serves: "Mid-enlisted (E-3 to E-7) transitioning into industry and skilled trades.",
    apply: ["Register at nextopvets.org/veterans", "Get matched with a veteran Employment Coordinator", "Work through resume, interviews, and direct employer connections to an offer"],
    timeline: "Places veterans in roughly under a month on average.",
    capacity: "Open; has placed 2,600+ veterans since 2015."
  }],
  barrier: { level: "Low", reasons: "Free and personal. The main limiter is geography (strongest in TX and expansion regions) and the enlisted focus." },
  outcomes: { note: "ESTIMATE / org-reported. ~80% retention and sub-one-month average placement per NextOp; 2,600+ placed since 2015." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. High value for enlisted veterans entering energy/manufacturing/trades; placement is fast and free. Less relevant for officers." },
  nobodyTells: [
    "Its niche is genuinely mid-enlisted (E-3 to E-7) — officers and senior enlisted are better served elsewhere (e.g., RecruitMilitary's MBA Veterans/ExecuVets).",
    "It partners with NCCER for trades credentials and the Navy submarine industrial base (BlueForge Alliance / ATDM, Lockheed Martin apprenticeships) — strong onramps to skilled-trade careers.",
    "Coverage is strongest in Texas and a handful of expansion regions, so location affects how hands-on the help feels."
  ],
  fitByRank: {
    junior_enlisted: "Strong — squarely the target demographic.",
    nco: "Strong — core focus (E-3 to E-7).",
    senior_enlisted: "Good for E-7; thins out above that.",
    junior_officer: "Limited — built around the enlisted pipeline.",
    senior_officer: "Not the intended audience.",
    note: "Deliberately focused on mid-enlisted (E-3 to E-7) — the demographic least served by officer/exec headhunters."
  },
  careers: ["Skilled Trades", "Energy", "Manufacturing", "Industrial Construction", "Logistics", "Aerospace/Defense"],
  pathways: ["Mid-enlisted veteran → NextOp coordinator + NCCER/ATDM credentialing → SkillBridge internship → industry placement"],
  community: {
    praise: ["Free, all-veteran staff", "Fast placement", "Real trades/industry pipelines (NCCER, submarine base)"],
    complaints: ["Enlisted-focused (not officers)", "Geographically concentrated", "Thin public job board"],
    tips: ["Register early in your transition", "Lean on the SkillBridge track", "Ask about NCCER/ATDM credentialing"]
  },
  sources: ["nextopvets.org", "military.com", "marinecorpstimes.com"]
},

{
  id: "recruit-military",
  name: "RecruitMilitary",
  verified: true,
  categories: ["transition", "remote"],
  url: "https://recruitmilitary.com/",
  tagline: "World's largest veteran job board + 100+ hiring events a year.",
  overview: "RecruitMilitary (founded 1998) is a subsidiary of Bradley-Morris, the largest military-focused recruiting firm in the U.S. Free for job seekers, it runs the largest veteran-only job board, 100+ in-person and virtual hiring events across 30+ cities a year, direct placement services, and the Search & Employ magazine. Sister brands MBA Veterans Network (top-75 MBA programs) and ExecuVets (executive track) make the group unusually strong for officers and degreed candidates.",
  mission: "Connect veterans, transitioning service members, and spouses with civilian employers.",
  founded: "1998 (RecruitMilitary); parent Bradley-Morris is the largest U.S. military-focused recruiter.",
  hq: "Metro-Atlanta, GA.",
  funding: "For-profit recruiting firm; employers pay, job seekers don't.",
  audience: ["Veterans", "Transitioning service members", "Military spouses", "Officers & degreed candidates (via MBA Veterans / ExecuVets)"],
  geographic: "Nationwide job board + events in 30+ cities; virtual fairs worldwide.",
  eligibility: "Open and free to veterans, transitioning service members, and military spouses. (Officers are well served via the MBA Veterans and ExecuVets sister brands.)",
  status: "active",
  cost: { tags: ["free"], detail: "Free for job seekers — the job board, hiring events, and resources cost nothing. Employers pay for access and recruiting services." },
  programs: [{
    name: "Job board + hiring events + direct placement",
    description: "Create a profile and resume on the largest veteran-only job board, attend in-person/virtual hiring events (100+/year across 30+ cities), and access transition resources, Search & Employ magazine, and direct placement help. The official Army SFL-TAP employment partner.",
    serves: "All transitioning military, veterans, and spouses; degreed/officer talent via sister brands.",
    apply: ["Create a free job-seeker profile at recruitmilitary.com", "Build/translate your resume and register for hiring events", "Connect with employers actively recruiting military talent"],
    timeline: "Self-paced; events run year-round.",
    capacity: "Serves 2M+ veterans and transitioning members; 60%+ of staff are veterans."
  }],
  barrier: { level: "Low", reasons: "Free, online, and open. The main effort is building a strong profile and showing up to events." },
  outcomes: { note: "ESTIMATE / org-reported. The largest veteran job board and event producer; outcomes depend on your field, profile, and follow-through." },
  roi: { score: 6, salaryImpact: "Variable", timeReturn: "High", note: "ESTIMATE. Free, broad reach; for officers/MBAs the MBA Veterans Network and ExecuVets tracks lift the ceiling considerably." },
  nobodyTells: [
    "For officers and degreed candidates, the real value is the sister brands — MBA Veterans Network (top-75 MBA programs) and ExecuVets (executive track) — not just the general job board.",
    "It's the official Army SFL-TAP employment partner, so it overlaps with the transition resources you're already entitled to.",
    "Employers pay for access, so expect recruiter outreach — treat events as networking, not just applications."
  ],
  fitByRank: {
    junior_enlisted: "Good — free job board and events.",
    nco: "Good.",
    senior_enlisted: "Good.",
    junior_officer: "Strong — use MBA Veterans / ExecuVets tracks.",
    senior_officer: "Strong — ExecuVets targets executive-track talent."
  },
  careers: ["Management", "Engineering", "Sales/Business Development", "Operations/Logistics", "Technical roles", "Executive track (ExecuVets)"],
  pathways: ["Transitioning officer → RecruitMilitary profile + MBA Veterans/ExecuVets events → corporate/management placement"],
  community: {
    praise: ["Largest veteran job board", "Frequent hiring events", "Strong officer/MBA tracks"],
    complaints: ["Recruiter-driven (employers pay)", "General board can feel broad", "Quality varies by field"],
    tips: ["Officers: prioritize MBA Veterans / ExecuVets", "Treat events as networking", "Keep your profile sharp and current"]
  },
  sources: ["recruitmilitary.com", "prweb.com", "linkedin.com"]
},

{
  id: "operation-homefront",
  name: "Operation Homefront",
  verified: true,
  categories: ["financial", "health"],
  url: "https://www.operationhomefront.org/",
  tagline: "Emergency grants (not loans) + housing for military families.",
  overview: "Operation Homefront is a national nonprofit that builds strong, stable military and veteran families through emergency financial assistance, transitional and permanent housing, and family-support programs. Aid is given as grants (not loans), paid directly to providers. Roughly 83–85% of its expenditures go directly to programs.",
  mission: "Build strong, stable, secure military and veteran families by improving their financial, emotional, and social well-being.",
  founded: "2002 (national nonprofit; HQ San Antonio, TX).",
  hq: "San Antonio, TX.",
  funding: "501(c)(3) nonprofit; donor- and corporate-funded (e.g., Dollar Tree since 2006).",
  audience: ["Post-9/11 wounded/ill/injured service members & families", "Active-duty junior enlisted families (E-1 to E-6)", "Deployed service members", "Veterans within 10 years of separation (for Critical Financial Assistance)"],
  geographic: "Nationwide; transitional housing villages in San Antonio TX, Gaithersburg MD, and San Diego CA.",
  eligibility: "Critical Financial Assistance: post-9/11 service members who sustained a line-of-duty wound/illness/injury (honorable or general discharge, within 10 years of separation), OR active-duty E-1 to E-6 with DEERS-eligible dependents, OR deployed members. Lifetime number of assists is limited.",
  status: "active",
  cost: { tags: ["free"], detail: "Assistance is free, given as grants (not loans), and paid directly to service providers (or a grocery card). It does NOT cover credit-card/personal-loan payments or down payments — it targets past-due essential bills, home repairs, and similar critical needs." },
  programs: [
    {
      name: "Critical Financial Assistance",
      description: "Short-term grants for past-due essential bills, home repairs, and critical family needs; caseworkers validate need and pay providers directly.",
      serves: "Eligible post-9/11 wounded/ill/injured, junior-enlisted (E-1 to E-6), and deployed families.",
      apply: ["Review eligibility and create an account at My Operation Homefront", "Submit an application with documentation", "A caseworker contacts you (typically within 24–48 business hours)"],
      timeline: "Caseworker outreach in ~24–48 business hours; assist counts are lifetime-limited.",
      capacity: "Cannot assist everyone who applies; need-based."
    },
    {
      name: "Housing programs",
      description: "Permanent Homes for Veterans (mortgage-free homes, 730+ families since 2012), Transitional Apartments (rent/utilities-free for a year with employment/financial counseling), and Transitional Villages bridging the gap between end of military pay and start of VA benefits.",
      serves: "Wounded/ill/injured warriors and veterans transitioning to stability.",
      apply: ["Apply via the relevant program page on operationhomefront.org"],
      timeline: "Program-dependent (e.g., transitional apartments ~1 year).",
      capacity: "Limited; need-based."
    }
  ],
  barrier: { level: "Medium", reasons: "Free, but eligibility is specific (post-9/11 wounded/ill/injured, junior enlisted, or deployed), documentation is required, and assists are lifetime-limited — it's emergency relief, not ongoing support." },
  outcomes: { note: "ESTIMATE / org-reported. Highly rated by charity watchdogs; ~83–85% of spending goes to programs serving tens of thousands of families yearly." },
  roi: { score: 6, salaryImpact: "N/A", timeReturn: "High", note: "ESTIMATE. Not a career resource — it's a financial safety net. Value is crisis-prevention (stopping eviction/utility loss), which is high when you qualify." },
  nobodyTells: [
    "It's grants, not loans — and paid straight to your landlord/utility/vendor, not to you.",
    "Critical Financial Assistance is tightly scoped: post-9/11 wounded/ill/injured, junior enlisted (E-1 to E-6), or deployed — and won't cover credit cards, personal loans, or down payments.",
    "The number of lifetime assists is limited, so it's a true emergency backstop, not recurring support."
  ],
  fitByRank: {
    junior_enlisted: "Strong — E-1 to E-6 with dependents are directly eligible for CFA.",
    nco: "Eligible if E-6 or below, or if post-9/11 wounded/ill/injured.",
    senior_enlisted: "Mainly via the wounded/ill/injured or deployed criteria.",
    junior_officer: "Generally via the wounded/ill/injured or deployed criteria, not rank.",
    senior_officer: "Generally via the wounded/ill/injured criteria; not an income-based program for officers.",
    note: "Eligibility is keyed to circumstance (junior enlisted, deployed, or post-9/11 wounded/ill/injured), not just rank."
  },
  careers: ["N/A — financial and family stability, not employment"],
  pathways: ["Family in crisis → Operation Homefront grant (bill/repair) → transitional housing if needed → stability while VA benefits start"],
  community: {
    praise: ["Grants not loans", "High program-spending ratio", "Housing + family programs beyond cash aid"],
    complaints: ["Specific eligibility", "Lifetime assist limits", "Won't cover cards/loans/down payments"],
    tips: ["Have documentation ready", "Use it for past-due essential bills", "Explore VFW Unmet Needs / SSVF / branch relief societies too"]
  },
  sources: ["operationhomefront.org", "prnewswire.com", "valoannetwork.com"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 6 — 2: education/credentialing)
   ========================================================================== */

{
  id: "act-now",
  name: "ACT Now Education",
  verified: true,
  categories: ["education", "it"],
  url: "https://actnoweducation.org/",
  tagline: "Free IT/cyber certs, exam vouchers, and a cohort with job prep.",
  overview: "ACT Now Education (ANE) is a nonprofit that provides the military community with free upskilling resources and certification pathways focused on IT and cybersecurity. Its flagship '3 CERT' cohort delivers instructor-led training toward three industry certifications with exam vouchers, plus resume help, mock interviews, and job-placement support. ANE also offers free Coursera and Splunk access and standalone exam vouchers.",
  mission: "Inspire and empower the military community through education — upskilling and reskilling for civilian careers.",
  founded: "Nonprofit (501(c)(3)) serving the military community; IT/cyber focus.",
  hq: "U.S.-based nonprofit (virtual programs).",
  funding: "Nonprofit; corporate/partner supported (e.g., CompTIA, Splunk, Coursera).",
  audience: ["Transitioning service members", "Veterans", "Military spouses", "Reservists/Guard", "Military dependents"],
  geographic: "Nationwide; programs are virtual (some in-person cohort options).",
  eligibility: "Open to the military community (active duty, veterans, spouses, reservists/Guard, dependents). The 3 CERT cohort is competitive — applications are manually reviewed and seats are limited.",
  status: "active",
  cost: { tags: ["free"], detail: "100% free, including certification exam vouchers. ANE values the 3 CERT package around $12,000. Free Coursera access (7,000+ courses) and Splunk training are also offered. 'Free' doesn't mean easy — the cohort expects serious time and participation." },
  programs: [
    {
      name: "3 CERT Cohort",
      description: "~8 weeks of instructor-led virtual training toward three industry certifications (e.g., CompTIA Security+ or Splunk, Professional Scrum Master, and PMP or CompTIA Project+), with exam vouchers, resume writing, a tailored business suit, headshots, mock interviews, and job-placement assistance.",
      serves: "Military-community members targeting IT, cybersecurity, and project-management roles.",
      apply: ["Join the ACT Now military community group and apply during an open window", "Submit resume + proof of service (with sensitive info redacted)", "Manual review and cohort selection"],
      timeline: "~8-week cohort; multiple cohorts per year.",
      capacity: "Competitive; limited seats."
    },
    {
      name: "CERT2SUCCESS + free course access",
      description: "A shorter (~3-week) certification cohort variant, plus free access to Coursera (26 certifications, 7,000+ courses) and Splunk training/certifications.",
      serves: "Self-paced learners and those wanting a faster single-cert track.",
      apply: ["Register on the ANE site for course access or a CERT2SUCCESS cohort"],
      timeline: "~3 weeks (CERT2SUCCESS) or self-paced (Coursera).",
      capacity: "Open (course access); cohort seats limited."
    }
  ],
  barrier: { level: "Low-Medium", reasons: "Free and open to join, but the flagship cohort is competitive (manual review) and demands real weekly commitment — it's positioned for serious candidates, not casual voucher-seekers." },
  outcomes: { note: "ESTIMATE / org-reported. ANE reports 40,000+ resources and a high-value cohort; outcomes depend on completion and the local IT/cyber hiring market." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Strong value if you finish — three stacked certs plus exam vouchers and job prep at no cost is high-leverage for an IT/cyber pivot." },
  nobodyTells: [
    "The 3 CERT cohort is competitive and manually reviewed — it's not just a free voucher; they screen for committed candidates.",
    "Even outside a cohort, the free Coursera (7,000+ courses) and Splunk access are underused perks.",
    "Certs alone don't get hired — use the included resume help, mock interviews, and placement support, and build projects."
  ],
  fitByRank: {
    junior_enlisted: "Strong — free onramp to IT/cyber certs.",
    nco: "Strong.",
    senior_enlisted: "Strong for a hands-on tech pivot.",
    junior_officer: "Good — PMP/Scrum tracks align with officer experience.",
    senior_officer: "Good for PM/leadership-flavored certs (PMP)."
  },
  careers: ["Cybersecurity", "IT Support", "Project Management", "Cloud/Splunk roles"],
  pathways: ["Service member → ACT Now 3 CERT (Sec+, Scrum, PMP) → IT/cyber/PM role"],
  community: {
    praise: ["Genuinely free incl. vouchers", "Three stacked certs + job prep", "Free Coursera/Splunk access"],
    complaints: ["Competitive cohort selection", "Real time commitment", "IT/cyber entry market is crowded"],
    tips: ["Apply during an open cohort window", "Use the Coursera access while you wait", "Pair certs with a portfolio project"]
  },
  sources: ["actnoweducation.org", "military.com", "guidestar.org"]
},

{
  id: "trio-vub",
  name: "Veterans Upward Bound (TRIO / VUB)",
  verified: true,
  categories: ["education"],
  url: "https://www.ed.gov/grants-and-programs/grants-higher-education/federal-trio-programs/veterans-upward-bound-program",
  tagline: "Free, federally funded college-prep & refresher courses for veterans.",
  overview: "Veterans Upward Bound is a federal TRIO program (U.S. Department of Education) that provides free college-preparation services to help eligible veterans enter and succeed in postsecondary education. Run locally at 65+ host campuses, it offers academic refresher courses (math through pre-calculus, composition, science, foreign language), tutoring, college and financial-aid advising, and an individual education plan.",
  mission: "Motivate and prepare veterans to enroll in and complete postsecondary education.",
  founded: "1972 (created for Vietnam-era veterans; part of the federal TRIO programs).",
  hq: "U.S. Department of Education, Office of Postsecondary Education (Federal TRIO Programs).",
  funding: "Federal (U.S. Department of Education); delivered via grants to host colleges/universities.",
  audience: ["Veterans who are low-income and/or potential first-generation college students"],
  geographic: "65+ local projects at host campuses nationwide; serves ~8,500 veterans/year.",
  eligibility: "Veterans with 180+ days active duty (or fewer if released for a service-connected disability; some Guard/Reserve criteria), other-than-dishonorable discharge, who are low-income AND/OR potential first-generation college students, and who demonstrate academic need. (Officers/degreed veterans typically won't meet the first-gen/low-income/academic-need gate.)",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free to eligible veterans, including books and materials. It does not pay tuition — it's college-readiness support; you fund the actual degree separately (e.g., GI Bill)." },
  programs: [{
    name: "College-prep & refresher coursework",
    description: "Individualized education plan plus academic instruction/refreshers (math through pre-calculus, composition/literature, lab science, foreign language, computer basics), tutoring, college-placement-test prep, admissions and financial-aid guidance, and workshops (time management, finances, resume).",
    serves: "Veterans returning to or starting college who need academic preparation.",
    apply: ["Find your nearest VUB project (host campus) and contact the office", "Complete an interview/needs assessment and placement test", "Enroll in tailored refresher courses (free)"],
    timeline: "Self-paced/term-based; varies by individual readiness and host campus cycles.",
    capacity: "Each project is funded to serve a set number of veterans (often ~120–130)."
  }],
  barrier: { level: "Low", reasons: "Free, but eligibility is need-based (low-income and/or first-generation, plus academic need) and availability depends on having a VUB host campus nearby." },
  outcomes: { note: "VERIFIED program facts (federal TRIO). Success is measured by the share of participants who enroll in and complete postsecondary education; individual results vary." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. Not a credential itself — it's a free on-ramp that raises the odds of starting and finishing a degree for veterans who need academic prep." },
  nobodyTells: [
    "It's college-prep, not a degree or a tuition benefit — it gets you ready for school, then you use the GI Bill for the actual program.",
    "Eligibility is need-based (low-income and/or potential first-generation college student, plus academic need), so it's aimed at veterans who face barriers to college — many officers won't qualify.",
    "It's run locally at 65+ host campuses, so availability and exact offerings depend on having a project near you."
  ],
  fitByRank: {
    junior_enlisted: "Strong if you're a first-gen/low-income veteran heading to college.",
    nco: "Good for those needing academic refreshers before enrolling.",
    senior_enlisted: "Useful for a college restart if you meet the need-based criteria.",
    junior_officer: "Usually not eligible (degree/first-gen/income gate).",
    senior_officer: "Not the target audience.",
    note: "Need-based and college-readiness focused — best for first-generation or low-income veterans, not degreed officers."
  },
  careers: ["N/A — prepares veterans to enter degree/vocational programs"],
  pathways: ["Veteran (needs academic prep) → Veterans Upward Bound refreshers → college enrollment → GI Bill-funded degree"],
  community: {
    praise: ["Completely free incl. materials", "Patient, individualized prep", "Helps with admissions and financial aid"],
    complaints: ["Need-based eligibility excludes many", "Location-dependent", "Doesn't pay tuition"],
    tips: ["Find your nearest host-campus project", "Use it to brush up before placement tests", "Pair it with GI Bill planning for the degree itself"]
  },
  sources: ["ed.gov", "owens.edu", "uta.edu"]
},

/* ==========================================================================
   FULLY VERIFIED ORGANIZATIONS (Batch 2 — trades, transition, health)
   ========================================================================== */

{
  id: "usmap",
  name: "United Services Military Apprenticeship Program (USMAP)",
  verified: true,
  categories: ["trades", "education"],
  url: "https://usmap.osd.mil/",
  tagline: "Turn your military job into a DOL-registered apprenticeship — free, while you serve.",
  overview: "USMAP is a formal Department of Defense program that lets active-duty Navy, Marine Corps, Coast Guard, and (via Full-Time Support/AGR) Army members document their on-the-job training and earn a nationally recognized U.S. Department of Labor Certificate of Completion of Apprenticeship — at no cost and without off-duty hours.",
  mission: "To give service members civilian-recognized credentials equal to their civilian counterparts for the skills they already use on the job.",
  founded: "1999 (Navy and Marine Corps programs, dating to 1977, formally merged; Coast Guard joined shortly after)",
  hq: "Pensacola, FL (Center for Information Warfare Training / OSD)",
  funding: "U.S. Department of Defense; DOL is the registering sponsor.",
  audience: ["Active-duty service members", "Full-Time Support / AGR / TAR reservists on year-plus active orders"],
  geographic: "Anywhere a service member is stationed; logging is done online via CAC.",
  eligibility: "Active duty (or FTS/AGR/TAR) Navy, Marine Corps, Coast Guard, or Army; must have completed the schooling required for your military occupation; trade must match your rating/MOS. Retirees and most drilling reservists are not eligible.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free. No off-duty hours required — you log the work you already do. Keep your GI Bill; this doesn't touch it." },
  programs: [{
    name: "Registered Apprenticeship (time-based or competency-based)",
    description: "Choose a DOL-registered trade tied to your occupation, then log hours (time-based) or demonstrate competencies (E-5 and above, competency-based). Each apprenticeship year equals 2,000 work hours plus 144 hours of related instruction, usually satisfied by your 'A' school / MOS training.",
    serves: "Service members who want a portable civilian credential for skills they're already using.",
    apply: ["Look up trades tied to your rating/MOS on the USMAP site", "Verify eligibility and pick a trade", "Enroll online and sign the apprenticeship agreement", "Log hours/competencies (minimum 12 months enrolled)", "Submit final report through your chain of command for the DOL certificate"],
    timeline: "Minimum 12 months; total length depends on the trade's required hours.",
    capacity: "Open enrollment; largest registered apprenticeship program in the U.S."
  }],
  barrier: { level: "Low", reasons: "Free and open, but it requires self-discipline: you must enroll, log consistently for at least a year, and route a final report up your chain. Deployments or a change of duties can stall a trade." },
  outcomes: { note: "VERIFIED program facts (DoD/DOL). DOL reports ~91% of apprenticeship completers (across all programs) are still employed nine months later; USMAP itself yields a portable federal credential rather than a job placement." },
  roi: { score: 7, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. Near-zero cost and effort relative to the payoff of a portable DOL credential, especially for trades-adjacent ratings; value depends on the trade and on you actually finishing." },
  nobodyTells: [
    "It credentials the job you already do — you're not learning a new trade, you're documenting an existing one.",
    "It's free and doesn't burn GI Bill or off-duty time, but nobody logs it for you; completion rates hinge on consistency.",
    "Finish before you separate — once you're out, you generally can't complete it, and the certificate is far easier to bank while still in."
  ],
  fitByRank: {
    junior_enlisted: "Strong — start logging early in your first rating.",
    nco: "Strong — competency-based path (E-5+) can be faster.",
    senior_enlisted: "Good — bank credentials before retirement.",
    junior_officer: "Generally not eligible (enlisted-focused).",
    senior_officer: "Generally not eligible."
  },
  careers: ["Electrician", "Machinist", "Welder", "HVAC", "Environmental analyst", "Many trades tied to ~100+ registered occupations"],
  pathways: ["Sailor/Marine → USMAP apprenticeship in-rating → DOL Certificate of Completion → civilian journeyworker / union credit"],
  community: {
    praise: ["Genuinely free and off-duty-hour-free", "Nationally portable DOL credential", "Often earns promotion points"],
    complaints: ["Easy to start and never finish", "Deployments/job changes can interrupt logging", "Not open to retirees or most reservists"],
    tips: ["Enroll the moment you finish your rating school", "Set a monthly logging reminder", "Pick a trade that maps to your civilian goal, not just your current billet"]
  },
  sources: ["usmap.osd.mil", "apprenticeship.gov", "dol.gov"]
},

{
  id: "troops-into-transportation",
  name: "Troops Into Transportation",
  verified: true,
  categories: ["trades", "transition"],
  url: "https://cdlschool.com/troops-into-transportation",
  tagline: "Earn a Class A CDL in about 30 days, with carrier job placement.",
  overview: "Run by The CDL School (a TransForce company), Troops Into Transportation is a DoD SkillBridge-approved CDL training-to-job program for transitioning service members, veterans, and their spouses, with a presence on 10+ military bases and a job-first model that connects graduates to carrier partners.",
  mission: "To launch service members, veterans, and spouses into professional driving and logistics careers.",
  founded: "2012",
  hq: "Operated by The CDL School / TransForce (multiple U.S. training locations)",
  funding: "Private (CDL school); accepts GI Bill and VR&E; some carrier and scholarship funding (e.g., Indeed's Drive for 500).",
  audience: ["Transitioning service members", "Veterans", "Military spouses", "Dependents", "Active duty (SkillBridge)"],
  geographic: "10+ military bases and training sites nationwide.",
  eligibility: "Service members, veterans, and spouses; must meet CDL age/medical/licensing requirements (DOT physical, drug test). Honorable or general-under-honorable discharge for benefit funding.",
  status: "active",
  cost: { tags: ["gi-bill", "free", "self-pay"], detail: "GI Bill (Ch. 33) and VR&E (Ch. 31) accepted; some carriers reimburse VA-funded training; scholarships occasionally cover the full cost. Otherwise self-pay." },
  programs: [{
    name: "Class A CDL Training + Job Placement",
    description: "Roughly 30-day Class A CDL course with hands-on manual-transmission training, pre-trip and road practice, then placement with carrier partners. Available as a SkillBridge program for active-duty members on terminal leave.",
    serves: "Career-changers wanting a fast, in-demand credential with near-term employment.",
    apply: ["Apply online or via a base SkillBridge office", "Confirm funding (GI Bill, VR&E, scholarship, or self-pay)", "Complete the ~30-day course and CDL exam", "Get matched to a carrier partner"],
    timeline: "~30 days to CDL; lifetime job-placement support advertised.",
    capacity: "2,500+ trainees per year."
  }],
  barrier: { level: "Low-Medium", reasons: "Short and accessible, but trucking is a lifestyle: long-haul over-the-road work means time away from home, and DOT medical/background standards screen some applicants out." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Program reports 2,500+ trainees/year and 11,000+ veterans and spouses placed; advertised graduate pay around $60K/year and up to ~$1,400/week."
  },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Among the fastest credential-to-paycheck paths; ROI is strongest if GI Bill/scholarship covers cost and you're open to OTR driving." },
  nobodyTells: [
    "Done as SkillBridge during terminal leave, you can train on military pay and keep your GI Bill for something else.",
    "Starting pay is solid but the first year is often over-the-road — home time improves once you have experience.",
    "Some carriers reimburse the cost if you used VA benefits, so ask before you self-pay."
  ],
  fitByRank: {
    junior_enlisted: "Strong — fast onramp to a stable paycheck.",
    nco: "Strong — leadership can route toward dispatch/fleet roles later.",
    senior_enlisted: "Good — driving now, logistics management later.",
    junior_officer: "Mixed — consider logistics/ops management instead of driving.",
    senior_officer: "Usually over-leveled for entry driving roles."
  },
  careers: ["CDL Class A Driver", "Owner-Operator", "Dispatcher", "Logistics/Fleet Operations"],
  pathways: ["Service member (SkillBridge) → 30-day CDL → carrier partner OTR role → regional/local or logistics management"],
  community: {
    praise: ["Fast, hands-on training", "Real job placement", "GI Bill/VR&E accepted; scholarships available"],
    complaints: ["OTR time away from home", "Quality varies by training site", "Trucking lifestyle isn't for everyone"],
    tips: ["Use SkillBridge to train on military pay", "Ask carriers about tuition reimbursement", "Train on manual transmission to keep job options open"]
  },
  sources: ["cdlschool.com", "transforce.com", "fmcsa.dot.gov"]
},

{
  id: "umap",
  name: "Utility Workers Military Assistance Program (UMAP)",
  verified: true,
  categories: ["trades"],
  url: "https://uwua.net/programs/utility-workers-military-assistance-program/",
  tagline: "A 6–7 month training-to-job pipeline into the gas/electric utility sector.",
  overview: "UMAP is a training-to-placement program from the Utility Workers Union of America (UWUA) and its Power for America (P4A) trust fund that prepares veterans for in-demand gas, electric, water, and renewable-energy utility jobs, with wraparound support and direct placement with employer partners like Peoples Gas and Consumers Energy.",
  mission: "To translate veterans' military skills into family-sustaining careers in the utility industry.",
  founded: "2012 (launched in Chicago)",
  hq: "Chicago, IL (UWUA / Power for America)",
  funding: "UWUA and Power for America trust fund; DOL and allied grants fund supportive services; public-private partnership.",
  audience: ["Honorably discharged post-9/11 veterans", "Reservists", "National Guard", "Active-duty via SkillBridge"],
  geographic: "Classroom training in Chicago (via City Colleges / Dawson Technical College); applicants come from across the country; employer partners in several states.",
  eligibility: "Honorably discharged post-9/11 veterans, reservists, and Guard members; SkillBridge available for active duty. Class size limited (~25 per cohort).",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to the veteran. Grants fund supportive services (bus passes, books, computers, childcare help, mentorship)." },
  programs: [{
    name: "UMAP Training-to-Placement Pipeline",
    description: "An intensive 6–7 month, for-credit program (taught through City Colleges of Chicago / Dawson Technical College) including a paid internship and mentorship with journey-level utility workers, plus veteran peer support and mental-health resources.",
    serves: "Veterans seeking a hands-on, unionized utility career with a job waiting at the end.",
    apply: ["Apply via the Power for America / UMAP website", "Union helps coordinate attendance and support services", "Complete the cohort and internship", "Placement with a UMAP employer partner"],
    timeline: "~6–7 months including a one-month paid internship.",
    capacity: "~25 per cohort; 700+ graduates to date."
  }],
  barrier: { level: "Low-Medium", reasons: "Free with near-100% placement, but seats are limited (~25/cohort) and classroom training is based in Chicago, so you generally relocate there for the program." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org reports 700–750+ graduates since 2011–2012, ~93% retention, ~96% graduation, and near-100% job placement with employer partners."
  },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Free training plus a near-guaranteed union utility job with strong wages and benefits is an excellent return; the catch is relocating to Chicago for the cohort." },
  nobodyTells: [
    "The selling point isn't the class — it's that an employer job is waiting at the end (near-100% placement).",
    "Classroom training is Chicago-based, so plan to relocate for the cohort even though grads come from everywhere.",
    "Active-duty members can do it via SkillBridge and start before they fully separate."
  ],
  fitByRank: {
    junior_enlisted: "Strong — entry into a unionized career with benefits.",
    nco: "Strong — utility crews value military leadership.",
    senior_enlisted: "Good — hands-on career or a path toward supervision.",
    junior_officer: "Mixed — consider whether you want a field utility role.",
    senior_officer: "Usually over-leveled for entry utility roles."
  },
  careers: ["Gas Utility Worker", "Electric/Line Worker", "Water Utility Technician", "Renewable Energy Technician"],
  pathways: ["Post-9/11 veteran → UMAP cohort + paid internship → Peoples Gas / Consumers Energy (or partner) → unionized utility career"],
  community: {
    praise: ["Near-100% job placement", "Strong wraparound + veteran peer support", "Free, with benefits-rich union jobs"],
    complaints: ["Small cohorts (~25)", "Chicago-based training requires relocation", "Competitive entry"],
    tips: ["Apply early — seats are scarce", "Ask about SkillBridge if still active duty", "Use the wraparound services (housing, childcare, mentorship)"]
  },
  sources: ["uwua.net", "power4america.org", "military.com"]
},

{
  id: "union-apprenticeships",
  name: "Helmets to Hardhats",
  verified: true,
  categories: ["trades"],
  url: "https://helmetstohardhats.org/",
  tagline: "The front door to registered, earn-while-you-learn building-trades apprenticeships.",
  overview: "Helmets to Hardhats (H2H) is a national nonprofit that connects transitioning service members, veterans, Guard, and Reservists with registered apprenticeships across North America's Building Trades Unions — paid, no-experience-needed training programs in construction crafts where you can also stack GI Bill income.",
  mission: "To connect the military community to quality careers in the building and construction industry.",
  founded: "2003 (Center for Military Recruitment, Assessment and Veterans Employment)",
  hq: "Washington, DC (affiliated with North America's Building Trades Unions)",
  funding: "Funded by building-trades unions and signatory contractors; nonprofit.",
  audience: ["Transitioning active-duty members", "Veterans", "National Guard", "Reservists"],
  geographic: "Nationwide (and Canada) through the 15+ international building-trades unions and ~2,000 apprenticeship training centers.",
  eligibility: "Active-duty, veterans, Guard, and Reserve. Most apprenticeships need no prior experience; honorable service and standard apprenticeship entry requirements apply.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to the veteran. Apprentices are paid employees from day one; GI Bill can supplement income during a registered apprenticeship (two checks: contractor + VA)." },
  programs: [{
    name: "Registered Apprenticeship Matching (incl. Wounded Warrior track)",
    description: "Create a profile, browse construction-trade career and apprenticeship postings, and submit a 'digital handshake'; an H2H rep then helps complete requirements. Apprenticeships are 3–5 year earn-while-you-learn programs run by the trades themselves. A Wounded Warrior program supports disabled veterans.",
    serves: "Veterans wanting a paid path into a skilled construction craft without student debt.",
    apply: ["Build a profile at helmetstohardhats.org", "Express interest in a trade/apprenticeship (digital handshake)", "H2H rep verifies fit and requirements", "Enter a union registered apprenticeship as a paid employee"],
    timeline: "Apprenticeships run 3–5 years; entry timing varies by trade and local.",
    capacity: "Tens of thousands placed (org cites 30,000–50,000+ transitions)."
  }],
  barrier: { level: "Low-Medium", reasons: "Free and open with no experience required, but it's a connector — you still have to apply to and be accepted by a local apprenticeship, and availability depends on the trade and region." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org cites tens of thousands of veterans transitioned into union construction careers over 20+ years (figures ranging from ~30,000 to 50,000+)."
  },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. Paid-from-day-one apprenticeships with strong union wages/benefits and stackable GI Bill income make this one of the best no-degree paths; ROI builds over the multi-year apprenticeship." },
  nobodyTells: [
    "It's a matchmaker, not a school — H2H gets you in the door; the union local runs the actual apprenticeship.",
    "You can collect GI Bill on top of your apprentice paycheck during a registered program (two income streams).",
    "No prior experience is needed — most placements start at zero in the trade."
  ],
  fitByRank: {
    junior_enlisted: "Excellent — paid path into a lifelong trade.",
    nco: "Excellent — leadership translates to foreman/GF tracks.",
    senior_enlisted: "Strong — second career with benefits and a pension.",
    junior_officer: "Good if you want hands-on work; otherwise consider construction management.",
    senior_officer: "Mixed — may prefer management/ownership routes."
  },
  careers: ["Electrician", "Plumber/Pipefitter", "Ironworker", "Operating Engineer", "Boilermaker", "Sheet Metal", "Many building-trades crafts"],
  pathways: ["Service member → Helmets to Hardhats match → union registered apprenticeship (paid + GI Bill) → journeyworker → foreman/contractor"],
  community: {
    praise: ["Paid from day one, no debt", "GI Bill stacks on top", "Pension and healthcare via the union"],
    complaints: ["It's a connector, not a guaranteed slot", "Apprenticeship availability varies by local", "Physically demanding"],
    tips: ["Complete the digital-handshake profile fully", "Apply to multiple locals/trades", "Ask about the Wounded Warrior track if you're disabled"]
  },
  sources: ["helmetstohardhats.org", "nabtu.org", "military.com"]
},

{
  id: "vet-to-drones",
  name: "Vets to Drones",
  verified: true,
  categories: ["business", "trades"],
  url: "https://news.va.gov/139892/launch-into-high-flying-career-drone-technology/",
  tagline: "FAA Part 107 drone-pilot training and a path into the UAS industry.",
  overview: "Vets to Drones is a veteran-focused program that trains participants toward the FAA Part 107 commercial drone-pilot certificate, with hands-on flying (including FPV and enterprise platforms), career-transition support, and community events aimed at placing veterans in the growing unmanned-aircraft-systems (UAS) industry.",
  mission: "To equip veterans to launch careers across the commercial drone/UAS sector.",
  founded: "Recent (active and promoted via VA outreach as of 2025)",
  hq: "U.S.-based (UAS-industry-led)",
  funding: "Industry/program funded; details limited.",
  audience: ["Veterans", "Transitioning service members"],
  geographic: "U.S.; training availability has been limited/waitlisted at times.",
  eligibility: "Veterans and transitioning members interested in commercial drone work; FAA Part 107 requires being 16+, English-proficient, and passing the aeronautical knowledge exam.",
  status: "active",
  cost: { tags: ["self-pay", "partially-funded"], detail: "Program provides training and support; exact cost/funding varies and isn't fully published. The FAA Part 107 knowledge exam itself carries a separate test fee." },
  programs: [{
    name: "Part 107 Certification + UAS Career Track",
    description: "Expert-led courses to prepare for the FAA Part 107 exam, hands-on training with FPV and enterprise drones, plus résumé/interview support, employer connections, and community 'fly days' and career fairs.",
    serves: "Veterans wanting a credential and entry into commercial drone operations.",
    apply: ["Check availability and register via Vets to Drones", "Complete Part 107 prep and hands-on training", "Pass the FAA Part 107 knowledge exam", "Use career support to connect with UAS employers"],
    timeline: "Short course-based; varies.",
    capacity: "Limited; sessions have filled/waitlisted."
  }],
  barrier: { level: "Low-Medium", reasons: "The Part 107 credential itself is attainable, but the drone job market is competitive and uneven, and program availability has been constrained (waitlists noted)." },
  outcomes: { note: "Limited public outcome data. The verifiable asset is the FAA Part 107 certificate; downstream employment depends heavily on local demand and the operator's hustle." },
  roi: { score: 5, salaryImpact: "Variable", timeReturn: "Medium", note: "ESTIMATE. The credential is cheap and fast, but UAS earnings vary widely — strong as a supplement or niche (inspection, mapping, public safety), weaker as a guaranteed full-time salary." },
  nobodyTells: [
    "Part 107 is a license to operate, not a job — the people who do well pair it with a niche (inspection, mapping, real estate, public safety).",
    "Availability has been spotty; check current cohorts rather than assuming open enrollment.",
    "You can sit the Part 107 exam independently too; the program's added value is hands-on training and employer connections."
  ],
  fitByRank: {
    junior_enlisted: "Good as a low-cost credential to test the field.",
    nco: "Good — pair with a technical niche.",
    senior_enlisted: "Mixed — better as a supplement than a sole income plan.",
    junior_officer: "Mixed — consider the business/ownership angle.",
    senior_officer: "Mixed — most useful if you'll build or lead a UAS operation."
  },
  careers: ["Commercial Drone Pilot", "UAS Inspection/Mapping", "Aerial Photography", "Public-Safety UAS Operator"],
  pathways: ["Veteran → Vets to Drones training → FAA Part 107 → niche UAS work (inspection/mapping/public safety) or own operation"],
  community: {
    praise: ["Concrete, fast FAA credential", "Hands-on flying + community events", "Veteran-focused career support"],
    complaints: ["Limited seats / waitlists", "Job market varies a lot by region", "Cost/funding not clearly published"],
    tips: ["Decide your niche before training", "Verify current availability", "Build a portfolio of real flights to land work"]
  },
  sources: ["news.va.gov"]
},

{
  id: "operation-warfighter",
  name: "Operation Warfighter (OWF)",
  verified: true,
  categories: ["transition"],
  url: "https://warriorcare.dodlive.mil/Care-Coordination/Operation-Warfighter/",
  tagline: "Federal-agency internships for recovering service members during rehab.",
  overview: "Operation Warfighter is a Department of Defense internship program that places wounded, ill, and injured (recovering) service members into temporary, non-paid internships with federal agencies during their recovery — building résumés, work skills, and a bridge back to the military or civilian workforce.",
  mission: "To place recovering service members in supportive work settings that positively impact recovery and prepare them for transition.",
  founded: "Established 2009 (per executive order); governed by DoDI 1300.25",
  hq: "DoD Office of Warrior Care Policy; Regional Coordinators across 10 U.S. regions",
  funding: "Department of Defense (members remain on military pay; internships are non-paid by the host agency).",
  audience: ["Wounded, ill, and injured active-duty service members (all branches/components)"],
  geographic: "Federal agencies nationwide, originally concentrated in the National Capital Region.",
  eligibility: "Active-duty service members enrolled in IDES and/or assigned to a service Wounded Warrior program; requires medical and chain-of-command approval. U.S. citizenship and any agency security requirements apply.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to the service member, who continues to receive military pay. Internship is non-paid by the host agency; DoD provides transportation and reasonable accommodations." },
  programs: [{
    name: "Federal Internship Placement",
    description: "A Regional Coordinator matches the recovering member to a federal-agency internship by interest and capability — typically ~20 hours/week for an average of 3–5 months — with mentoring and accommodations.",
    serves: "Recovering service members ready to re-engage in meaningful work during rehabilitation.",
    apply: ["Get medical + command approval to participate", "Work with your OWF Regional Coordinator", "Identify an internship matching your interests", "Complete onboarding/clearance with the host agency"],
    timeline: "~20 hrs/week; average assignment 3–5 months.",
    capacity: "5,700–6,000+ members placed program-wide."
  }],
  barrier: { level: "Low-Medium", reasons: "No cost and you stay on pay, but you must be medically and command approved and in the recovering-service-member population — it's not open to all transitioning members, and a job isn't guaranteed afterward." },
  outcomes: { note: "VERIFIED program facts (DoD). Over 5,700–6,000 recovering members have been placed; no guarantee of employment, though some agencies hire OWF interns after separation." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. For eligible recovering members it's a low-risk way to rebuild skills and federal résumé while on pay; value is rehabilitative and network-building rather than a paycheck or guaranteed hire." },
  nobodyTells: [
    "It's specifically for recovering (wounded/ill/injured) members — not a general transition internship.",
    "You stay on military pay; the agency role is unpaid, so there's no financial downside.",
    "No guaranteed job after, but federal agencies do hire some interns once they separate."
  ],
  fitByRank: {
    junior_enlisted: "Good — builds first civilian-style work experience.",
    nco: "Good — keeps skills active during recovery.",
    senior_enlisted: "Good — federal résumé and agency contacts.",
    junior_officer: "Good — explore federal career fields.",
    senior_officer: "Good — leverage experience into agency networks.",
    note: "Eligibility is driven by recovery status (IDES / Wounded Warrior program), not rank."
  },
  careers: ["Federal civil service (varies by agency placement)"],
  pathways: ["Recovering service member → medical/command approval → OWF federal internship → transition back to duty or federal/civilian employment"],
  community: {
    praise: ["Stay on pay while building skills", "Real federal work experience", "Accommodations provided"],
    complaints: ["Only for recovering members", "Unpaid by the agency", "No guaranteed hire"],
    tips: ["Start with your Wounded Warrior program / Regional Coordinator", "Pick an agency aligned to your post-service goal", "Treat it as a foot in the federal door"]
  },
  sources: ["warriorcare.dodlive.mil", "dhs.gov", "doi.gov"]
},

{
  id: "e2i",
  name: "Education & Employment Initiative (E2I)",
  verified: true,
  categories: ["transition", "education"],
  url: "https://warriorcare.dodlive.mil/Care-Coordination/Education-Employment-Initiative/",
  tagline: "DoD career-readiness coaching that pairs education and employment for recovering members.",
  overview: "E2I is a Department of Defense program (the education/employment counterpart to OWF, both under DoDI 1300.25) in which Regional Coordinators help wounded, ill, and injured service members build an individual career plan — identifying needed education, training, certifications, and employer connections — to posture them for transition.",
  mission: "To enhance the career readiness of recovering service members by coordinating education and employment resources during their transition.",
  founded: "Established under DoD warrior-care policy (NDAA FY2008); governed by DoDI 1300.25 (2013)",
  hq: "DoD Office of Warrior Care Policy; Regional Coordinators nationwide",
  funding: "Department of Defense; coordinates with VA, DOL, and community partners.",
  audience: ["Wounded, ill, and injured (recovering) service members, all branches and components"],
  geographic: "Nationwide via E2I Regional Coordinators.",
  eligibility: "Service members assigned to a Wounded Warrior program and/or enrolled in IDES; coordinated through the Recovery Coordination Program.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to the service member. E2I matches no-cost education/certification resources and connects members to VR&E and community partners." },
  programs: [{
    name: "Individual Career Plan + Resource Matching",
    description: "An E2I Regional Coordinator assesses goals, builds an individual career plan, and connects the member to education/training, certification/licensing, VR&E counselors, and regional employers. Often paired with an OWF internship.",
    serves: "Recovering members deciding between further education and employment (or both).",
    apply: ["Connect via your Wounded Warrior program / Recovery Care Coordinator", "Work with an E2I Regional Coordinator on a career plan", "Get matched to education, certification, or employer resources", "Coordinate with VR&E as needed"],
    timeline: "Ongoing through the recovery/transition period.",
    capacity: "Nationwide coordinator network."
  }],
  barrier: { level: "Low", reasons: "Free and supportive, but limited to the recovering-service-member population and dependent on coordinator availability in your region." },
  outcomes: { note: "VERIFIED program facts (DoD). E2I is a coordination/coaching service; outcomes are individual and typically measured by successful education/employment transition rather than published placement rates." },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "High", note: "ESTIMATE. High-value navigation for eligible members — it surfaces no-cost training and the right benefits (incl. VR&E) — but it's planning/coordination, not a credential or job itself." },
  nobodyTells: [
    "E2I and OWF are siblings: E2I plans your education/employment, OWF gives you the federal internship — many members use both.",
    "Coordinators can find no-cost certifications and route you to VR&E, so it's a navigation shortcut, not just advice.",
    "It's for the recovering-member population, coordinated through your Wounded Warrior program."
  ],
  fitByRank: {
    junior_enlisted: "Strong — map a first civilian career path.",
    nco: "Strong — align certifications to a target field.",
    senior_enlisted: "Good — plan education + employment together.",
    junior_officer: "Good — coordinate VR&E and grad-school options.",
    senior_officer: "Good — strategic transition planning.",
    note: "Eligibility is recovery-status driven, not rank-based."
  },
  careers: ["Varies — education and employment matched to the member's plan"],
  pathways: ["Recovering member → E2I career plan → matched training/certification + VR&E → employment (often alongside an OWF internship)"],
  community: {
    praise: ["Free navigation of confusing benefits", "Finds no-cost certifications", "Coordinates with VR&E and employers"],
    complaints: ["Only for recovering members", "Depends on coordinator availability", "Coaching, not a guaranteed outcome"],
    tips: ["Ask your Recovery Care Coordinator to connect you", "Use it to unlock VR&E", "Pair it with an OWF internship"]
  },
  sources: ["warriorcare.dodlive.mil", "esd.whs.mil (DoDI 1300.25)", "doi.gov"]
},

{
  id: "invets",
  name: "INvets",
  verified: true,
  categories: ["transition"],
  url: "https://www.invets.org/",
  tagline: "Recruits and relocates veterans into Indiana careers — with relocation help.",
  overview: "INvets is an Indiana nonprofit and public-private partnership that recruits transitioning service members, veterans, and spouses to fill Indiana jobs, providing résumé/interview help, employer matching across 500+ partner companies, and relocation/transition support to move to and stay in the state.",
  mission: "To recruit, employ, and retain veterans and their families in Indiana.",
  founded: "2020 (501(c)(3), with the Indiana Lieutenant Governor's office)",
  hq: "Indiana",
  funding: "Public-private partnership (state funding plus employer partners); no pay-to-play model.",
  audience: ["Transitioning service members", "Veterans", "Military spouses"],
  geographic: "Indiana-focused; recruits at ~40 military installations in the U.S. and abroad.",
  eligibility: "Veterans and spouses open to working in Indiana; create a profile and apply through INvets to partner employers.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to veterans and spouses. Indiana initiatives have offered relocation incentives; INvets adds résumé help and direct employer exposure." },
  programs: [{
    name: "Recruit–Employ–Retain",
    description: "A three-step model: recruit veterans (including at overseas bases), employ them by matching to 500+ Indiana partner companies with résumé/interview support and direct hiring-manager exposure, and retain them with relocation and community-integration help.",
    serves: "Veterans/spouses willing to relocate to Indiana for career opportunities.",
    apply: ["Create an account at invets.org and enter military + civilian experience", "INvets translates skills and submits you to partner employers", "Hiring managers get a direct heads-up on your application", "Use relocation and retention support after an offer"],
    timeline: "Varies by job search and relocation.",
    capacity: "550+ employer partners; recruits at ~40 installations."
  }],
  barrier: { level: "Low", reasons: "Free and high-touch, but the catch is geographic: the payoff requires relocating to (or already being open to) Indiana." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org/state figures cite ~2,500 new residents attracted and ~839 placed into Hoosier jobs (2020–25), generating tens of millions in state/local taxes."
  },
  roi: { score: 6, salaryImpact: "Medium", timeReturn: "Medium-High", note: "ESTIMATE. Strong, personalized placement and relocation support — excellent if Indiana fits your plans, irrelevant if it doesn't, since the whole model is state-specific." },
  nobodyTells: [
    "The entire value proposition is location — this is for veterans open to moving to Indiana.",
    "Your application gets a direct nudge to the hiring manager, which beats a cold apply.",
    "Spouses are explicitly included in the matching."
  ],
  fitByRank: {
    junior_enlisted: "Good — entry roles with advancement and a low cost of living.",
    nco: "Good — strong manufacturing/logistics/tech demand.",
    senior_enlisted: "Good — management-track roles available.",
    junior_officer: "Good — professional roles across Indiana industries.",
    senior_officer: "Mixed — depends on whether Indiana fits your goals."
  },
  careers: ["Manufacturing", "Logistics", "Tech", "Energy", "Banking/Finance", "Healthcare"],
  pathways: ["Veteran/spouse → INvets profile + skills translation → Indiana partner employer (with relocation support) → established in-state career"],
  community: {
    praise: ["Direct hiring-manager exposure", "Relocation/retention support", "Free, not pay-to-play"],
    complaints: ["Indiana-only", "Requires relocation for most", "Not useful if you're staying elsewhere"],
    tips: ["Fill your profile out completely (MOS, evals)", "Be candid about willingness to relocate", "Ask about relocation incentives"]
  },
  sources: ["invets.org", "in.gov", "military.com"]
},

{
  id: "vts",
  name: "Veterans Transition Support (VTS)",
  verified: true,
  categories: ["transition", "education"],
  url: "https://veteranstransitionsupport.org/",
  tagline: "No-cost OSHA and Lean Six Sigma certs plus transition coaching (San Diego area).",
  overview: "Veterans Transition Support is a nonprofit (active since 2014) offering no- and low-cost transition programs — free OSHA 10, OSHA 30, free Lean Six Sigma Yellow Belt and a 5-day Green Belt, career coaching, plus VA home-loan and disability-claim guidance — primarily serving the Southern California / San Diego military community.",
  mission: "To empower veterans, service members, and military spouses with practical credentials and guidance for a smooth transition.",
  founded: "2014",
  hq: "San Diego area, CA (Camp Pendleton, San Diego, San Marcos, Oceanside)",
  funding: "Nonprofit; donor- and partner-supported.",
  audience: ["Veterans", "Active-duty service members", "Reservists", "Military spouses", "Base staff"],
  geographic: "Southern California (in-person classes); some training delivered via Zoom.",
  eligibility: "Veterans, service members, reservists, and military spouses; programs are no-cost or low-cost.",
  status: "active",
  cost: { tags: ["free", "self-pay"], detail: "OSHA 10, Lean Six Sigma Yellow Belt, and the career program are free; OSHA 30 and the 5-day Green Belt are offered at low cost." },
  programs: [{
    name: "Safety & Process Certifications + Career Transition",
    description: "Weekend OSHA 10/30 safety training, free Lean Six Sigma Yellow Belt and a 5-day Green Belt (Zoom with live projects), one-on-one résumé/cover-letter/LinkedIn coaching, interview prep, plus VA home-loan and disability-claim workshops.",
    serves: "Members wanting concrete, employer-recognized credentials and transition coaching.",
    apply: ["Browse programs at veteranstransitionsupport.org", "Register for OSHA, Lean Six Sigma, or the career program", "Attend in-person (SoCal) or via Zoom", "Use 1:1 coaching and VA workshops as needed"],
    timeline: "Weekend/short courses; Green Belt is 5 days.",
    capacity: "Cohort/class based."
  }],
  barrier: { level: "Low", reasons: "Free or low-cost and open, but in-person offerings are concentrated in the San Diego area, so geography limits some classes (though several run on Zoom)." },
  outcomes: { note: "ESTIMATE / org-reported. VTS cites credential value, e.g., safety supervisor roles starting ~$50K and safety managers ~$60K–$80K, with no degree required." },
  roi: { score: 6, salaryImpact: "Medium", timeReturn: "High", note: "ESTIMATE. Cheap, fast, employer-recognized certs (OSHA, Lean Six Sigma) that pad a résumé quickly; best ROI for those near San Diego or able to take the Zoom classes." },
  nobodyTells: [
    "The Lean Six Sigma and OSHA certs are the draw — quick, recognized résumé-builders, several of them free.",
    "Much of the value is local to San Diego, though Green/Yellow Belt run on Zoom.",
    "They also walk you through VA disability claims and the VA home loan, which surprises people."
  ],
  fitByRank: {
    junior_enlisted: "Strong — fast certs with no degree required.",
    nco: "Strong — Lean Six Sigma complements leadership experience.",
    senior_enlisted: "Good — safety/process roles value the certs.",
    junior_officer: "Good — Green Belt signals process competency.",
    senior_officer: "Mixed — may already exceed these certs."
  },
  careers: ["Safety Supervisor/Manager (OSHA)", "Process Improvement / Operations (Lean Six Sigma)"],
  pathways: ["Service member (SoCal) → VTS OSHA + Lean Six Sigma certs + coaching → safety or operations role"],
  community: {
    praise: ["Free/low-cost recognized certs", "Hands-on Lean Six Sigma projects", "VA claim + home-loan guidance"],
    complaints: ["Mostly San Diego-area in person", "Smaller/regional org", "Limited national reach"],
    tips: ["Stack OSHA + Lean Six Sigma for a stronger résumé", "Take the Zoom Belt classes if you're out of area", "Use the VA disability workshop before you file"]
  },
  sources: ["veteranstransitionsupport.org"]
},

{
  id: "sitreps2steercos",
  name: "Sitreps 2 Steercos",
  verified: true,
  categories: ["transition", "business"],
  url: "https://www.sitreps.com/",
  tagline: "Community + AI tools for veterans targeting business, defense-tech, and PE roles.",
  overview: "Sitreps 2 Steercos is a community-driven platform founded by West Point grad and former Army aviator Kyle Eberly that helps veterans transition into business and professional careers — with a résumé builder, an AI advisor trained on real veteran transitions, an MBA/GI Bill decision calculator, a salary explorer, a 'Pathways' career-odds tool, curated job postings, and in-person meetups.",
  mission: "To help veterans navigate post-military business careers and higher education with realistic, data-grounded guidance.",
  founded: "Recent (active and growing as of 2024–2025)",
  hq: "U.S. (founder based in Carlsbad, CA; community meetups in multiple cities)",
  funding: "Private/community platform; also runs talent-placement/recruiting.",
  audience: ["Transitioning officers and senior enlisted", "Veterans targeting business, MBA, defense-tech, PE/finance", "Mid-career veterans"],
  geographic: "Online platform plus regional meetups (e.g., San Diego/Orange County, Anchorage).",
  eligibility: "Open to veterans and transitioning members exploring business/professional and higher-ed paths.",
  status: "active",
  cost: { tags: ["free"], detail: "Core community content and tools are free to use; the platform also offers coaching and recruiting/talent-placement services." },
  programs: [{
    name: "Pathways + AI Advisor + Community",
    description: "Self-serve tools — 'Pathways' estimates your real odds/timeline for a target career (defense tech, PE, product, IB, entrepreneurship), an AI advisor trained on millions of tokens of real veteran transition data, an MBA decision and GI Bill calculator, salary explorer, and a résumé builder — plus events, success stories, and curated veteran job postings.",
    serves: "Veterans deciding between MBA vs. direct entry and aiming at competitive business/defense-tech roles.",
    apply: ["Create an account at sitreps.com", "Run Pathways against a target career", "Use the AI advisor, MBA/GI Bill calculator, and salary explorer", "Join a regional meetup or browse curated jobs"],
    timeline: "Self-paced; tools give quick (minutes) feedback.",
    capacity: "Open community."
  }],
  barrier: { level: "Low", reasons: "Free and self-serve; the main limitation is that it's most useful for the business/MBA/defense-tech audience rather than trades or hands-on careers." },
  outcomes: { note: "Limited independent outcome data (relatively new). The verifiable value is decision-support and community/recruiting for business-track veterans." },
  roi: { score: 6, salaryImpact: "Variable", timeReturn: "High", note: "ESTIMATE. The MBA and career-odds tools can save a veteran from an expensive wrong turn (e.g., a needless MBA), which is high-leverage; outcomes depend on the individual's target field." },
  nobodyTells: [
    "The Pathways tool is blunt on purpose — it'll tell you a target (e.g., investment banking or PE) is a stretch given your actual background, logos aside.",
    "The MBA/GI Bill calculator is aimed at stopping veterans from spending a benefit on a degree they don't need.",
    "It skews toward officers/senior enlisted heading into business, defense-tech, and finance."
  ],
  fitByRank: {
    junior_enlisted: "Mixed — some tools help, but it's tilted toward business-track transitions.",
    nco: "Good — MBA decision and career-odds tools are useful.",
    senior_enlisted: "Good — business and management targeting.",
    junior_officer: "Strong — core audience for MBA/PE/defense-tech paths.",
    senior_officer: "Strong — strategic career and education decisions."
  },
  careers: ["Consulting", "Private Equity / Finance", "Defense Tech", "Product Management", "Investment Banking", "Entrepreneurship"],
  pathways: ["Officer/NCO → Sitreps Pathways + MBA calculator → targeted business/defense-tech role or MBA decision → corporate/PE/startup"],
  community: {
    praise: ["Honest, data-grounded career-odds tool", "MBA decision support", "Active in-person meetups + curated jobs"],
    complaints: ["Newer, limited independent track record", "Business/MBA-skewed (less for trades)", "Best for officers/senior enlisted"],
    tips: ["Run Pathways before committing to an MBA", "Attend a regional meetup to network", "Use the AI advisor to pressure-test your plan"]
  },
  sources: ["sitreps.com", "remoterocketship.com", "builtin.com"]
},

{
  id: "my-steady-mind",
  name: "My Steady Mind",
  verified: true,
  categories: ["health"],
  url: "https://mysteadymind.com/",
  tagline: "Veteran-built 'mental fitness' training — proactive skills, not therapy.",
  overview: "My Steady Mind is a veteran-owned mental-fitness training academy founded by multi-branch veteran Dr. Seth Hickerson that teaches proactive, skills-based techniques (self-awareness, self-regulation, situational awareness, performance under pressure) through an online course with live coaching — framed explicitly as training, not clinical treatment.",
  mission: "To help individuals and teams strengthen mental fitness and performance under pressure with practical, science-based tools.",
  founded: "2021",
  hq: "Melbourne, FL (Groundswell Startups)",
  funding: "Veteran-owned company; pitch-competition and client/organizational revenue.",
  audience: ["Veterans", "First responders", "High-pressure professions (public safety, healthcare, athletics, construction, business)"],
  geographic: "Online/nationwide.",
  eligibility: "Open to individuals and organizations; veterans and first responders have had free-access windows.",
  status: "active",
  cost: { tags: ["free", "self-pay"], detail: "Veterans and first responders have been offered free access to core courses (e.g., a window through May 31, 2026); organizations and individuals can also pay. A free mental-fitness assessment is offered." },
  programs: [{
    name: "Mental Fitness Training (Foundations / Xpress / multi-module)",
    description: "An online, multi-module 'mental gym' (with Foundations and a shorter Xpress course) supported by live coaching, teaching regulation and focus skills for high-pressure moments. DoD-approved and accredited by the National Academy of Sports Medicine per the company.",
    serves: "People who want proactive performance/resilience skills rather than clinical care.",
    apply: ["Take the free mental-fitness assessment at mysteadymind.com", "Request free access (veterans/first responders) or enroll", "Work through the online modules with coaching support"],
    timeline: "Self-paced courses; Xpress is the short version.",
    capacity: "Online; 6,000+ students reported."
  }],
  barrier: { level: "Low", reasons: "Online and frequently free for veterans; the main caveat is conceptual — it's performance training, so anyone needing clinical mental-health care should pair it with professional treatment." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Company cites outcomes such as a reported 50% reduction in suicidal ideation associated with its training at one state police department and a 25% reduction in recordable incident rates at one employer; independent verification is limited."
  },
  roi: { score: 6, salaryImpact: "Indirect", timeReturn: "Medium", note: "ESTIMATE. Low/no cost and genuinely useful as proactive resilience skill-building; it's a wellness/performance tool, not a credential or a substitute for clinical treatment." },
  nobodyTells: [
    "It's training, not therapy — explicitly proactive skills, so don't expect it to replace clinical care if you need it.",
    "Veterans and first responders have recurring free-access windows, so check before paying.",
    "Start with the free 30-second assessment and the short Xpress course before committing."
  ],
  fitByRank: {
    junior_enlisted: "Good — build regulation skills early.",
    nco: "Good — useful for leading under pressure.",
    senior_enlisted: "Good — team-level resilience tools.",
    junior_officer: "Good — performance-under-pressure framing.",
    senior_officer: "Good — applicable to high-stakes leadership.",
    note: "Broadly applicable; not rank-dependent."
  },
  careers: ["N/A — resilience/performance skills supporting any path"],
  pathways: ["Veteran → free mental-fitness assessment → Foundations/Xpress course + coaching → ongoing resilience practice"],
  community: {
    praise: ["Often free for veterans", "Practical, in-the-moment tools", "Veteran-built; performance-oriented"],
    complaints: ["Not a substitute for clinical care", "Outcome claims not independently verified", "Online-only"],
    tips: ["Use the free assessment first", "Pair with professional care if you need treatment", "Try the short Xpress course to start"]
  },
  sources: ["mysteadymind.com", "natlawreview.com", "swellstartups.com"]
},

{
  id: "movement-rx",
  name: "Movement Rx",
  verified: true,
  categories: ["health"],
  url: "https://movement-rx.com/",
  tagline: "Veteran-led physical therapy + human performance to fix pain at the root.",
  overview: "Founded in 2013 by Marine Corps veteran Dr. Theresa Larson (DPT), Movement Rx is a veteran-led physical therapy and human-performance company that blends rehab with strength/mobility coaching — in San Diego clinics and via digital programs — to address the root causes of pain rather than just symptoms, serving athletes, service members, and organizations.",
  mission: "To help people move well and lead well by integrating movement, rehab, and performance.",
  founded: "2013",
  hq: "San Diego, CA",
  funding: "Private (veteran-led company).",
  audience: ["Veterans", "Service members", "Athletes", "Organizations/teams", "General public with pain or performance goals"],
  geographic: "San Diego (in-person) plus digital/online programs nationwide.",
  eligibility: "Open to the public; cash-pay and digital options. Veteran-led with offerings relevant to the military community.",
  status: "active",
  cost: { tags: ["self-pay"], detail: "Primarily cash-pay physical therapy and paid digital programs (e.g., Low Back Fix, Shoulder Fix, Knee Fix). Not a free veteran benefit; check insurance/eligibility separately." },
  programs: [{
    name: "Performance Physical Therapy + Digital 'Fix' Programs",
    description: "One-on-one performance-focused physical therapy (root-cause movement assessment, mobility and strength work) in San Diego, plus self-guided online programs combining PT and strength training for the low back, shoulder, and knee. Also offers corporate wellness and leadership/well-being workshops.",
    serves: "People wanting to eliminate pain and return to active living/performance, not just 'manage' symptoms.",
    apply: ["Book an appointment (San Diego) or choose a digital program at movement-rx.com", "Complete a movement assessment", "Follow the rehab + strength plan (in-person or online)"],
    timeline: "Varies; digital programs are self-paced.",
    capacity: "Clinic + scalable digital."
  }],
  barrier: { level: "Medium", reasons: "High-quality but largely cash-pay, and in-person services are San Diego-based; the digital programs widen access but still cost money — this is a paid wellness service, not a free VA-style benefit." },
  outcomes: { note: "Reviews are strongly positive (pain elimination, return to activity); outcomes are individual and not published as aggregate metrics." },
  roi: { score: 5, salaryImpact: "Indirect", timeReturn: "Medium", note: "ESTIMATE. Strong for physical wellbeing/return-to-activity, but it's a paid service with limited geographic reach; value is health-and-performance, not career or income." },
  nobodyTells: [
    "It's cash-pay performance PT, not a free veteran benefit — budget for it or use the cheaper digital programs.",
    "The approach targets root-cause movement, so expect strength work, not just passive treatment.",
    "In-person is San Diego; the 'Fix' digital programs are how everyone else accesses it."
  ],
  fitByRank: {
    junior_enlisted: "Good if you can pay; digital programs are the affordable route.",
    nco: "Good — performance and injury-prevention focus.",
    senior_enlisted: "Good — address accumulated wear-and-tear.",
    junior_officer: "Good — return-to-activity and performance.",
    senior_officer: "Good — also offers leadership/well-being workshops.",
    note: "Health service; fit is about goals and budget, not rank."
  },
  careers: ["N/A — physical health/performance service"],
  pathways: ["Veteran with pain/performance goal → Movement Rx assessment (clinic or digital) → rehab + strength plan → return to active living"],
  community: {
    praise: ["Root-cause approach", "Veteran-led, performance-minded", "Digital programs extend access"],
    complaints: ["Cash-pay, not free", "In-person limited to San Diego", "Not a VA benefit"],
    tips: ["Try a digital 'Fix' program if you're out of area", "Come ready to do strength work", "Confirm any insurance/cash-pay details up front"]
  },
  sources: ["movement-rx.com", "linkedin.com/company/movement-rx"]
},


{
  id: "virtual-vocations",
  name: "Virtual Vocations",
  verified: true,
  categories: ["remote"],
  url: "https://www.virtualvocations.com/",
  tagline: "Hand-screened, scam-filtered remote job listings (free + paid tiers).",
  overview: "Virtual Vocations is a family-owned, all-remote job board (since 2007) whose researchers hand-screen remote and work-from-home listings to filter out scams. A free account gives partial access and resources; a paid membership unlocks the full database, alerts, and career tools. It's not veteran-specific but is widely used by military spouses for portable, location-independent work.",
  mission: "To help job seekers find legitimate telecommuting jobs without sifting through scams.",
  founded: "2007",
  hq: "Tucson, AZ (100% remote company)",
  funding: "Private, family-owned; revenue from memberships and employer services.",
  audience: ["Remote job seekers", "Military spouses (portable careers)", "Veterans", "Parents, students, retirees, people needing flexibility"],
  geographic: "U.S.-focused remote roles; usable from anywhere.",
  eligibility: "Open to anyone; free registration, with optional paid subscriptions.",
  status: "active",
  cost: { tags: ["free", "self-pay"], detail: "Free membership gives partial/rotating access and resources. Premium plans (roughly one-, three-, and six-month options) unlock the full vetted database, alerts, and tools; subscriptions auto-renew." },
  programs: [{
    name: "Curated Remote Job Database",
    description: "Researchers compile and vet remote listings across 45+ categories; members search/filter, set alerts, track applications, and access a Remote Career Center (guides, recorded coaching, courses). Applications are submitted on the employer's own site.",
    serves: "Anyone prioritizing legitimate remote work, especially those who value time saved over a free-but-noisy board.",
    apply: ["Register free at virtualvocations.com", "Browse partial listings and resources", "Optionally upgrade to premium for full access + alerts", "Apply directly on employer sites"],
    timeline: "Self-paced; listings updated daily.",
    capacity: "2–4M+ jobseekers served over time."
  }],
  barrier: { level: "Low", reasons: "Free to start; full value is behind a paid subscription. Reviews are mixed — some find it well worth the time saved, others resent paying to apply and report cancellation friction." },
  outcomes: { note: "ESTIMATE / org-reported. Company cites 2–4M+ jobseekers assisted and many testimonials; jobs are aggregated (also findable elsewhere), so the paid value is the scam-filtering and curation, not exclusivity." },
  roi: { score: 5, salaryImpact: "Variable", timeReturn: "Medium", note: "ESTIMATE. Useful time-saver for remote-only searches and a fit for spouses needing portability, but it's a paid aggregator — many listings exist on free boards too, so value depends on how much you value the curation." },
  nobodyTells: [
    "The product you're paying for is curation and scam-filtering, not exclusive jobs — many listings also appear on Indeed/LinkedIn.",
    "It's not veteran-specific, but it's a strong fit for military spouses who need work that moves with PCS orders.",
    "Subscriptions auto-renew — set a reminder to cancel if you land a job."
  ],
  fitByRank: {
    junior_enlisted: "Mixed — a free board may suffice; consider spouses.",
    nco: "Mixed — useful if you want remote-only and value curation.",
    senior_enlisted: "Mixed — same.",
    junior_officer: "Mixed — depends on remote preference.",
    senior_officer: "Mixed — depends on remote preference.",
    note: "Most valuable for military spouses needing portable, remote careers."
  },
  careers: ["Customer service", "Writing/editing", "Education/tutoring", "Healthcare admin", "Account management", "Many remote categories"],
  pathways: ["Military spouse / remote-seeker → Virtual Vocations (free or premium) → vetted remote role → portable career across PCS moves"],
  community: {
    praise: ["Scam-filtered listings", "Remote-only focus saves time", "Good for portable spouse careers"],
    complaints: ["Pay-to-apply for most jobs", "Jobs also on free boards", "Auto-renew/cancellation friction reported"],
    tips: ["Start with the free tier", "Compare against free boards before paying", "Turn off auto-renew once hired"]
  },
  sources: ["virtualvocations.com", "linkedin.com/company/virtual-vocations"]
},

{
  id: "work-for-warriors",
  name: "Work for Warriors (WFW)",
  verified: true,
  categories: ["transition", "remote"],
  url: "https://workforwarriors.org/",
  tagline: "Free direct job placement for California's Guard, Reserve, veterans, and families.",
  overview: "Work for Warriors is a free, state- and federally-funded direct-placement program created by the California National Guard (2012) that connects service members, veterans, military family members, and Youth Academy graduates to California employers — with veteran staffing consultants who actively put candidates in front of hiring managers.",
  mission: "To reduce unemployment and underemployment among California's military, veterans, and their families.",
  founded: "2012 (California Military Department / State Assembly)",
  hq: "California (California National Guard / California Military Department)",
  funding: "State and federally funded; free to participants and a low cost-per-placement model.",
  audience: ["California National Guard", "Reserve", "Active duty", "Veterans (all eras)", "Military spouses/dependents", "Gold Star families", "Youth Academy graduates"],
  geographic: "California-focused (the WFW model has been replicated by ~15 other states).",
  eligibility: "California's military community — Guard, Reserve, active duty, veterans, family members, and Youth Academy grads.",
  status: "active",
  cost: { tags: ["free"], detail: "Completely free to participants and employers; funded by the state and federal government." },
  programs: [{
    name: "Direct Placement + Career Services",
    description: "Veteran Staffing Consultants review your skills and interests, connect you to roles from 2,000+ California employer partners, build/strengthen your résumé, prep you for interviews, and proactively advocate to hiring managers on your behalf.",
    serves: "California's military community seeking full-time civilian employment.",
    apply: ["Contact Work for Warriors via workforwarriors.org", "Meet with a Veteran Staffing Consultant", "Get résumé + interview support", "Be matched and directly referred to employer partners"],
    timeline: "Varies by search.",
    capacity: "2,000+ employer partners; thousands placed (4,000+ within first three years)."
  }],
  barrier: { level: "Low", reasons: "Free, high-touch, and proactive; the constraint is geographic — it's built around California employers and the California military community." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Cal Guard reported 4,000+ placements within the program's first three years at roughly $750 per job — about a tenth the cost of comparable government veteran-jobs programs — and it became the National Guard Bureau's model program."
  },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Free, proactive direct placement with employer advocacy is high-value for California's military community; irrelevant outside CA unless your state copied the model." },
  nobodyTells: [
    "Consultants don't just email you jobs — they call hiring managers to vouch for you, which beats a cold application.",
    "It's California-centric, but ~15 other states adopted the model, so check whether yours has a version.",
    "Family members, dependents, and Youth Academy grads qualify too, not just the service member."
  ],
  fitByRank: {
    junior_enlisted: "Strong — proactive placement for first civilian roles.",
    nco: "Strong — leadership translates well to partner employers.",
    senior_enlisted: "Good — management-track placement.",
    junior_officer: "Good — professional roles across CA employers.",
    senior_officer: "Mixed — depends on whether CA employers fit your goals.",
    note: "Open to Guard/Reserve/active/veterans and families in California."
  },
  careers: ["Cross-industry across 2,000+ California employers"],
  pathways: ["CA Guard/Reserve/veteran/family → Work for Warriors consultant + résumé prep → direct referral to CA employer → full-time hire"],
  community: {
    praise: ["Free and proactive", "Consultants advocate directly to hiring managers", "Includes families and Youth Academy grads"],
    complaints: ["California-only", "Less useful if relocating out of state", "Employer mix is CA-centric"],
    tips: ["Be clear about target roles and locations in CA", "Lean on the consultant's employer relationships", "Check if your state copied the WFW model"]
  },
  sources: ["workforwarriors.org", "dvidshub.net", "nationalguard.com"]
},

{
  id: "7-eagle",
  name: "7 Eagle Group",
  verified: true,
  categories: ["transition", "remote"],
  url: "https://7eagle.com/",
  tagline: "Free veteran recruiting firm + SkillBridge program with a job-conversion focus.",
  overview: "7 Eagle Group is a nationwide, military-focused recruiting firm (founded 2014) that connects transitioning service members, veterans, and military spouses with employers — for free to the job seeker. It runs an authorized DoD SkillBridge program (7 Eagle Academy) and a Talent Network, placing candidates from entry-level to C-suite across remote, hybrid, and in-person roles.",
  mission: "To connect talented military veterans and transitioning service members with businesses that value their skills and grit.",
  founded: "2014",
  hq: "Amherst, MA (services nationwide)",
  funding: "Private recruiting firm; revenue from employer clients (free to job seekers).",
  audience: ["Transitioning service members", "Veterans", "Military spouses"],
  geographic: "Nationwide; many remote/hybrid placements.",
  eligibility: "Veterans, active-duty (within SkillBridge window for the Academy), and military spouses; join the free Talent Network.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to candidates — employers pay the recruiting firm. SkillBridge participants remain on military pay during the fellowship." },
  programs: [{
    name: "Talent Network + 7 Eagle Academy (SkillBridge)",
    description: "Join a free talent network to get matched with hundreds of employers, with a vetting process and one-minute video intros. 7 Eagle Academy is an authorized DoD SkillBridge program offering training, coaching, and an internship that's designed to convert to a permanent W-2 role.",
    serves: "Service members in their SkillBridge window and veterans/spouses wanting recruiter-driven placement.",
    apply: ["Join the free Talent Network at 7eagle.com", "Complete vetting / video intro", "Get matched to employer or SkillBridge internship", "Convert internship to permanent role (org cites ~93% conversion)"],
    timeline: "SkillBridge internships run 30–180 days.",
    capacity: "Hundreds of placements; ~2,000 openings cited at a time."
  }],
  barrier: { level: "Low", reasons: "Free and open to join, though best results come from being marketable (certs, clearances, SME depth). As a recruiter, it's employer-driven — your match depends on demand for your skill set." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org reports ~93% of SkillBridge interns convert to W-2 employees and placements at hundreds of companies (clients cited include Xerox, Meta, Lionsgate, and others)."
  },
  roi: { score: 6, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Free recruiter representation with a strong SkillBridge-to-hire conversion is high-leverage, especially for cleared or technical candidates; outcomes vary with employer demand for your background." },
  nobodyTells: [
    "It's a recruiting firm, so it works best when employers want your specific skill set — be marketable (certs, clearance, SME depth).",
    "The SkillBridge Academy is the standout: you intern on military pay with a high conversion-to-hire rate.",
    "It has a sister offering (FreelanceVets) and a cleared-talent network for security-clearance roles."
  ],
  fitByRank: {
    junior_enlisted: "Good — entry-level placements available.",
    nco: "Good — technical and leadership roles.",
    senior_enlisted: "Strong — management and cleared roles.",
    junior_officer: "Strong — SkillBridge-to-corporate conversion.",
    senior_officer: "Good — up to C-suite placements for the right fit."
  },
  careers: ["Cybersecurity / IT", "Project/Program Management", "Operations", "Sales", "Defense/Aerospace", "Cross-industry"],
  pathways: ["Service member → 7 Eagle Talent Network / SkillBridge Academy → host-company internship → permanent W-2 hire"],
  community: {
    praise: ["Free to candidates", "Strong SkillBridge-to-hire conversion", "Remote/hybrid options"],
    complaints: ["Employer-driven matching", "Best for marketable/cleared candidates", "Smaller than the big nonprofits"],
    tips: ["Sharpen your résumé and certs before joining", "Use SkillBridge during terminal leave", "Ask about the cleared-talent network if you hold a clearance"]
  },
  sources: ["7eagle.com", "careerpcs.com", "careerrecon.com"]
},

{
  id: "veterans-in-tech",
  name: "VetsinTech (VIT)",
  verified: true,
  categories: ["it", "leadership"],
  url: "https://vetsintech.co/",
  tagline: "National nonprofit bridging veterans and spouses into tech: the '3 E's.'",
  overview: "VetsinTech (VIT) is a national nonprofit dedicated 100% to springboarding veterans and military spouses into technology careers through its '3 E's' — Education (VIT Academy training in cyber, cloud, AI/ML, data), Employment (skill translation, résumé help, and an employer coalition of Google, Microsoft, Amazon, and more), and Entrepreneurship (the S.U.N. startup network, VetCap, and pitch competitions).",
  mission: "To support veterans and military spouses by connecting them to the technology ecosystem across education, employment, and entrepreneurship.",
  founded: "2011 (co-founded by Katherine Webster)",
  hq: "San Francisco, CA",
  funding: "Nonprofit; supported by tech-industry partners and philanthropy (e.g., Craig Newmark Philanthropies, JPMorgan Chase).",
  audience: ["Veterans", "Active-duty (transitioning)", "Military spouses"],
  geographic: "Nationwide; 100,000+ community members and 50+ chapter leaders across ~27 cities, plus virtual programs.",
  eligibility: "Veterans, transitioning service members, and military spouses interested in tech.",
  status: "active",
  cost: { tags: ["free", "partially-funded"], detail: "Most training and services are free (a refundable deposit may apply to select courses). Programs are funded by industry partners." },
  programs: [{
    name: "VIT Academy + Employer Coalition + S.U.N. (3 E's)",
    description: "Technical training (web dev, cybersecurity, cloud, AI/ML, data analytics) with a ~90% graduation rate; employment services including military-skill translation and direct connections to a coalition of top tech employers; and an entrepreneurship startup network (S.U.N.) with bootcamps, pitch events, and investor access.",
    serves: "Veterans/spouses entering or leveling up in tech, whether as employees or founders.",
    apply: ["Explore programs at vetsintech.co", "Enroll in a VIT Academy course or submit a résumé to the employer coalition", "Join a local chapter or the S.U.N. startup network", "Attend events like the annual VIT Invasion"],
    timeline: "Course-based; varies by track.",
    capacity: "Trains 1,000+ veterans annually."
  }],
  barrier: { level: "Low", reasons: "Mostly free and open, but tech training requires real effort and some baseline aptitude; the strongest outcomes go to those who complete the Academy and engage the employer coalition." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org reports ~90% graduation rate, ~91% of graduates hired or upskilled within 6 months, and a community of 100,000+ veterans/spouses."
  },
  roi: { score: 7, salaryImpact: "High", timeReturn: "Medium-High", note: "ESTIMATE. Free, employer-connected tech training with strong reported placement is high-value for those committed to a tech path; the three-pronged model also serves would-be founders." },
  nobodyTells: [
    "It's not just training — the employer coalition (Google, Microsoft, Amazon, etc.) is the real differentiator for getting hired.",
    "Spouses are a core focus, including a RAND-backed policy push for spouse tech employment.",
    "If you want to build a company, the S.U.N. startup network and pitch events are a distinct third track most people miss."
  ],
  fitByRank: {
    junior_enlisted: "Strong — entry to tech with training + employer access.",
    nco: "Strong — technical upskilling and placement.",
    senior_enlisted: "Good — tech management or IC roles.",
    junior_officer: "Good — IC tech or startup track.",
    senior_officer: "Mixed — best via the entrepreneurship/leadership track."
  },
  careers: ["Software Engineer", "Cybersecurity Specialist", "Cloud Engineer", "Data Scientist", "Product Manager", "Tech Founder"],
  pathways: ["Veteran/spouse → VIT Academy (cyber/cloud/AI) → employer coalition placement → tech role; or → S.U.N. → veteran-led startup"],
  community: {
    praise: ["Free training + real employer coalition", "Strong spouse focus", "Entrepreneurship track for founders"],
    complaints: ["Requires real effort/aptitude", "Self-driven engagement matters", "Outcome stats are org-reported"],
    tips: ["Finish the Academy, don't dabble", "Submit your résumé to the employer coalition", "Join a local chapter to network"]
  },
  sources: ["vetsintech.co", "rand.org", "careerrecon.com"]
},

{
  id: "cisco-vets",
  name: "Cisco Veterans Program (Networking Academy)",
  verified: true,
  categories: ["it", "education"],
  url: "https://www.netacad.com/",
  tagline: "Free Cisco networking & cybersecurity training and certification for the military community.",
  overview: "Cisco's veteran offerings combine free Cisco Networking Academy courses (networking, cybersecurity, Python, IoT) with the Cisco Veterans Cyber Scholarship (part of the CyberVetsUSA consortium) — providing no-cost training toward Cisco certifications (e.g., CCNA, CyberOps) plus Talent Bridge job-matching for veterans, transitioning members, Guard/Reserve, and military spouses.",
  mission: "To help the military community build IT skills and launch technology careers.",
  founded: "Cisco Networking Academy since 1997; CyberVetsUSA consortium launched 2017",
  hq: "San Jose, CA (Cisco)",
  funding: "Corporate (Cisco) and consortium partners (AWS, ISC2, Fortinet, Palo Alto Networks, NetApp, NDG).",
  audience: ["Veterans", "Transitioning service members", "National Guard / Reserve", "Military spouses"],
  geographic: "Online/nationwide; also delivered on 22+ military installations and via partners (USO, IVMF, NPower).",
  eligibility: "Open enrollment for self-paced NetAcad courses; the Cyber Scholarship targets veterans, transitioning members (often within 180 days), Guard/Reserve, and military spouses. No strict prerequisites, though foundational IT helps.",
  status: "active",
  cost: { tags: ["free", "partially-funded"], detail: "NetAcad military courses and the Veterans Cyber Scholarship are free. A separate Military Credentialing Assistance path can fund Cisco U. subscriptions and exam vouchers via military tuition assistance." },
  programs: [{
    name: "NetAcad Courses + Veterans Cyber Scholarship (CyberVetsUSA)",
    description: "Free self-paced Networking Academy courses plus a scholarship track to a Cisco certification (e.g., CCNA Security or CyberOps), typically 12–14 weeks self-paced, with career resources and Talent Bridge job-matching to 250+ technology employers.",
    serves: "Career-changers into IT/cyber, from beginners to those formalizing existing skills.",
    apply: ["Self-enroll in free NetAcad military courses, or", "Apply for the Veterans Cyber Scholarship (often via IVMF Onward to Opportunity)", "Complete the self-paced track and certification exam", "Use Talent Bridge to connect with employers"],
    timeline: "Self-paced; cyber scholarship ~12–14 weeks.",
    capacity: "Tens of thousands of military learners; 24,000+ veterans enrolled in a recent year."
  }],
  barrier: { level: "Low", reasons: "Free and self-paced with no hard prerequisites, but cybersecurity certs require sustained study; some scholarship tracks have application steps and a prerequisite intro course." },
  outcomes: { note: "ESTIMATE / org-reported. Cisco cites 73,000+ military personnel trained since 1997 and a large NetAcad alumni base; the verifiable asset is industry certification (e.g., CCNA), with employment via Talent Bridge varying by individual." },
  roi: { score: 7, salaryImpact: "High", timeReturn: "Medium-High", note: "ESTIMATE. Free training toward a highly marketable Cisco cert (CCNA is a strong résumé signal) is excellent value; ROI hinges on actually finishing the cert and using Talent Bridge." },
  nobodyTells: [
    "The free CCNA-track training plus a Cisco cert is one of the best no-cost IT résumé signals available.",
    "The Cyber Scholarship usually routes through IVMF's Onward to Opportunity — apply there, and expect a short prerequisite intro course.",
    "If you're still in, Military Credentialing Assistance can fund Cisco U. subscriptions and exam vouchers separately."
  ],
  fitByRank: {
    junior_enlisted: "Strong — free onramp to IT/networking.",
    nco: "Strong — formalize tech skills with a cert.",
    senior_enlisted: "Good — networking/cyber credentialing.",
    junior_officer: "Good — technical depth for IT roles.",
    senior_officer: "Mixed — may prefer management; cert still useful."
  },
  careers: ["Network Administrator", "Cybersecurity Analyst", "Security Operations", "Systems Administrator", "IT Support"],
  pathways: ["Service member → free Cisco NetAcad / Cyber Scholarship → CCNA or CyberOps cert → Talent Bridge → IT/cyber role"],
  community: {
    praise: ["Free and self-paced", "Globally recognized Cisco certs", "Talent Bridge employer connections"],
    complaints: ["Cyber certs require real study", "Scholarship has application steps", "Self-discipline needed for self-paced format"],
    tips: ["Target the CCNA as a résumé anchor", "Apply via IVMF O2O for the scholarship", "Pair NetAcad with hands-on labs"]
  },
  sources: ["netacad.com", "blogs.cisco.com", "ivmf.syracuse.edu"]
},

{
  id: "milmentor",
  name: "MilMentor",
  verified: true,
  categories: ["leadership"],
  url: "https://www.milmentor.com/",
  tagline: "Free, on-demand mentorship — book unlimited 1:1 calls with industry pros.",
  overview: "MilMentor is a free, on-demand mentorship platform built by an all-veteran and military-spouse team after Veterati shut down. It lets the military community book unlimited one-on-one calls (phone or Zoom) with ~1,000+ mentors — including Fortune 500 recruiters, executives, hiring managers, and successfully transitioned peers — for résumé help, interview prep, referrals, and career advice.",
  mission: "To make high-quality career mentorship instantly accessible to the military-connected community.",
  founded: "2024 (launched after Veterati's shutdown)",
  hq: "U.S. (virtual; veteran- and spouse-led)",
  funding: "Free platform; mentors volunteer their time.",
  audience: ["Veterans", "Transitioning service members", "Military spouses", "National Guard / Reserve"],
  geographic: "Online/nationwide.",
  eligibility: "Open to anyone military-connected: veterans, active duty, spouses, Guard, and Reserve. No application or waitlist.",
  status: "active",
  cost: { tags: ["free"], detail: "100% free, with no premium tiers or upsells. You can book unlimited mentor calls." },
  programs: [{
    name: "On-Demand Mentor Matching",
    description: "Search mentors by company, industry, job title, or keyword; book one-on-one calls on the mentor's open availability. Each call includes an interactive agenda. Users often build a small 'advisory board' by talking to several mentors across fields.",
    serves: "Anyone wanting fast, specific career guidance or insider referrals during a transition or job search.",
    apply: ["Create a free profile at milmentor.com", "Browse mentors by company/role/industry", "Request and book a call", "Repeat with as many mentors as you want"],
    timeline: "Sign up in <5 minutes; calls scheduled on demand.",
    capacity: "1,000+ mentors; 5,000+ mentees in its first months."
  }],
  barrier: { level: "Low", reasons: "No application, waitlist, or cost — the only effort is showing up prepared. Value scales with how proactively you use it." },
  outcomes: { note: "ESTIMATE / org-reported. Widely described as the leading post-Veterati platform; users report referrals and hires (sometimes at a mentor's own company). Outcomes depend on individual engagement." },
  roi: { score: 7, salaryImpact: "Medium-High", timeReturn: "High", note: "ESTIMATE. Free, unlimited access to senior professionals and referrals is high-leverage during a job search; pairs well with a structured program or long-term mentor (e.g., ACP)." },
  nobodyTells: [
    "Mentors can hand you referrals and insight into roles that aren't posted publicly — that's the real edge, not just advice.",
    "It's unlimited, so build a small 'board' of 3–5 mentors across your target fields rather than relying on one.",
    "It's the de facto Veterati successor; many of those mentors migrated here."
  ],
  fitByRank: {
    junior_enlisted: "Strong — talk to people who made the same jump.",
    nco: "Strong — translate leadership and get referrals.",
    senior_enlisted: "Strong — target management roles via insiders.",
    junior_officer: "Strong — access senior corporate mentors.",
    senior_officer: "Good — executive-level networking and referrals."
  },
  careers: ["Cross-industry — cyber, IT, PM, finance, federal contracting, logistics, and more"],
  pathways: ["Service member/spouse → MilMentor calls → referrals + insider insight → interviews → hire"],
  community: {
    praise: ["Free and unlimited", "Large, current mentor pool", "Fast — no waitlist or application"],
    complaints: ["You must drive it", "Mentor quality varies", "Newer platform"],
    tips: ["Come with specific questions", "Book several mentors, not one", "Ask directly about referrals"]
  },
  sources: ["milmentor.com", "usveteransmagazine.com"]
},

{
  id: "hoh-spouse",
  name: "Hiring Our Heroes — Military Spouse Programs",
  verified: true,
  categories: ["spouse", "transition"],
  url: "https://www.hiringourheroes.org/military-spouses/",
  tagline: "Paid spouse fellowships and a hiring network built for PCS-disrupted careers.",
  overview: "Hiring Our Heroes (a U.S. Chamber of Commerce Foundation program) runs spouse-specific career programs — the Military Spouse Fellowship Program (MSFP), the DoD-sponsored Military Spouse Career Accelerator (MSCAP/Career Accelerator) it facilitates, plus networking (MSPN), AMPLIFY career intensives, and symposia — to combat the high military-spouse unemployment/underemployment rate.",
  mission: "To connect military spouses with meaningful employment and help employers tap an overlooked talent pool.",
  founded: "Hiring Our Heroes launched 2011; spouse fellowship since 2015",
  hq: "Washington, DC (U.S. Chamber of Commerce Foundation)",
  funding: "Nonprofit; Chamber Foundation, corporate partners, and (for Career Accelerator) DoD funding.",
  audience: ["Military spouses (active, Guard, Reserve; current and previous)", "Caregivers of wounded/ill/injured veterans"],
  geographic: "Host cities nationwide and virtual; fellowships placeable anywhere in the U.S. and (for some tracks) abroad.",
  eligibility: "Career-ready military spouses with an associate degree and/or applicable work experience, able to work in the U.S. Career Accelerator eligibility is determined by DoD via MySECO.",
  status: "active",
  cost: { tags: ["free"], detail: "No cost to spouses or employers. Fellowships are paid: MSFP fellows earn an hourly rate (grant-funded); the DoD Career Accelerator is a paid 12-week fellowship." },
  programs: [{
    name: "Military Spouse Fellowship Program (MSFP) + Career Accelerator (MSCAP)",
    description: "MSFP is a paid 6–12 week fellowship matching spouses to host companies with weekly professional-development huddles. The DoD Military Spouse Career Accelerator (facilitated by HOH, applied via MySECO) is a paid 12-week fellowship. Both aim to convert to permanent roles; HOH also runs MSPN networking and AMPLIFY intensives.",
    serves: "Career-ready spouses needing hands-on experience, networking, and an employer foot-in-the-door.",
    apply: ["Complete the spouse pre-screening at hiringourheroes.org (MSFP) or apply via MySECO (Career Accelerator)", "Get matched/interview with host companies", "Complete the paid fellowship + weekly huddles", "Interview for a permanent role with the host or network"],
    timeline: "6–12 weeks depending on program; cohorts run multiple times per year.",
    capacity: "7,000+ across HOH programs; 1,200+ Career Accelerator fellows placed in its pilot."
  }],
  barrier: { level: "Low-Medium", reasons: "Free and paid, but selective — fellowships require an associate degree or relevant experience, an interview/match, and host-company availability that varies by location (more limited overseas)." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "HOH reports ~93% of spouse fellows receive a job offer within 90 days; the DoD Career Accelerator pilot reported an ~86% job-offer rate across 1,200+ fellows."
  },
  roi: { score: 8, salaryImpact: "High", timeReturn: "High", note: "ESTIMATE. A paid fellowship with a high offer rate, built specifically around the PCS/employment-gap problem, is excellent ROI for career-ready spouses." },
  nobodyTells: [
    "The fellowships are paid, and the offer rates are high — this is a 'try-out' that frequently converts to a job.",
    "There are two distinct tracks: HOH's own MSFP and the DoD Career Accelerator (apply via MySECO) that HOH helps run.",
    "It's a different organization from Hire Heroes USA — easy to confuse, but separate programs."
  ],
  fitByRank: {
    junior_enlisted: "Strong for their spouses — early-career placement.",
    nco: "Strong for spouses — paid experience + huddles.",
    senior_enlisted: "Strong for spouses — management-track roles.",
    junior_officer: "Strong for spouses — professional placements.",
    senior_officer: "Strong for spouses — established-career re-entry.",
    note: "This program serves military spouses, so fit is about the spouse's readiness, not the service member's rank."
  },
  careers: ["Cross-industry — PM, operations, HR, finance, tech, and more"],
  pathways: ["Military spouse → MSFP or DoD Career Accelerator (paid fellowship) → host-company role → portable, durable career"],
  community: {
    praise: ["Paid fellowships", "High offer-conversion rate", "Built around the PCS/employment-gap problem"],
    complaints: ["Requires degree or experience", "Host availability varies by city", "Limited overseas options"],
    tips: ["Apply to both MSFP and Career Accelerator (MySECO)", "Lean into the weekly huddles", "Target host cities with strong employer rosters"]
  },
  sources: ["hiringourheroes.org", "boozallen.com", "militaryonesource.mil"]
},

{
  id: "boots-to-books",
  name: "Boots to Books",
  verified: true,
  categories: ["education", "transition"],
  url: "https://boots2books.com/",
  tagline: "Free certifications, scholarships, and a transition video course for the military community.",
  overview: "Boots to Books (boots2books.com) is a national nonprofit (founded 2020 by Army veteran Peter Cline) providing no-cost help with education and employment — professional-certification and higher-education scholarships, a 24+ hour on-demand video transition course taught by recruiters and founders, entrance-exam prep (LSAT/GRE/GMAT/SAT/ACT), mentoring, and hiring events.",
  mission: "To assist veterans and military families through every facet of their educational and employment transition until hire.",
  founded: "2020",
  hq: "U.S. (nonprofit; volunteer-driven)",
  funding: "Nonprofit; donations and partnerships (e.g., Google, CompTIA) to discount certifications.",
  audience: ["Veterans", "Transitioning service members", "Military families/spouses", "Guard / Reserve"],
  geographic: "Nationwide; primarily virtual (video course + online events).",
  eligibility: "Veterans, transitioning members, and military families; services are free.",
  status: "active",
  cost: { tags: ["free"], detail: "All services are free. Scholarships cover certification costs and education expenses (e.g., textbooks, application fees) that exceed VA benefits." },
  programs: [{
    name: "Scholarships + Video Course + Hiring Events",
    description: "Periodic scholarships funding professional certifications (cyber, finance, Lean Six Sigma, etc.) and higher-education costs beyond benefits; a 24+ hour bite-sized video course covering résumés, benefits, and starting a business; entrance-exam prep; mentorship; and monthly networking/hiring events.",
    serves: "Members who want free upskilling, funding for certs/college gaps, and employer connections.",
    apply: ["Sign up at boots2books.com", "Access the free video course and events", "Apply for certification/education scholarships as offered", "Attend hiring events to connect with employers"],
    timeline: "Self-paced course; periodic scholarship and event cycles.",
    capacity: "2,000+ veterans and spouses served."
  }],
  barrier: { level: "Low", reasons: "Free and open, but scholarships are periodic/limited and much of the value is self-driven (you work the course and show up to events)." },
  outcomes: { note: "ESTIMATE / org-reported. Org reports 2,000+ veterans and spouses served with free training, scholarships, and hiring connections; outcomes are individual." },
  roi: { score: 6, salaryImpact: "Medium", timeReturn: "High", note: "ESTIMATE. Free certs (e.g., Lean Six Sigma, cyber) plus scholarships that cover the gaps GI Bill won't, at no cost — solid ROI for self-driven users; scholarship availability is the limiting factor." },
  nobodyTells: [
    "Name collision: this is the boots2books.com nonprofit (cert/scholarship/career), NOT the California Community Colleges 'Boots to Books' transition college course — different things.",
    "The scholarships specifically cover the costs GI Bill won't, like certification fees and textbooks beyond your benefit.",
    "Much of the value is the free 24-hour video course plus periodic hiring events, so engagement matters."
  ],
  fitByRank: {
    junior_enlisted: "Strong — free certs and exam prep.",
    nco: "Strong — upskilling plus hiring events.",
    senior_enlisted: "Good — certifications to bridge to civilian roles.",
    junior_officer: "Good — grad-exam prep and scholarships.",
    senior_officer: "Mixed — most useful for the cert/scholarship funding."
  },
  careers: ["Cybersecurity", "Finance", "Process Improvement (Lean Six Sigma)", "Cross-industry via certifications"],
  pathways: ["Veteran/spouse → Boots to Books video course + certification scholarship → hiring event → civilian role"],
  community: {
    praise: ["Genuinely free certs and scholarships", "Covers gaps GI Bill won't", "Helpful hiring events"],
    complaints: ["Scholarships are periodic/limited", "Self-driven", "Name confusion with the CA college course"],
    tips: ["Grab a certification scholarship when offered", "Work the free video course end to end", "Show up to the hiring events"]
  },
  sources: ["boots2books.com", "guidestar.org", "lodinews.com"]
},

{
  id: "warrior-rising",
  name: "Warrior Rising",
  verified: true,
  categories: ["business"],
  url: "https://www.warriorrising.org/",
  tagline: "Free veteran entrepreneurship training, mentorship, and grants — up to $20K+.",
  overview: "Warrior Rising is a veteran-founded 501(c)(3) nonprofit (2015) that turns veterans and their immediate family members into 'Vetrepreneurs' through a structured pipeline: a free self-paced Warrior Academy (military planning translated into business modeling), an advanced Warrior University accelerator, ongoing mentorship, and grant funding — capped by a Shark Tank-style 'Business Shower' pitch event.",
  mission: "To empower U.S. military veterans and their immediate family members to build sustainable businesses and achieve financial independence.",
  founded: "2015",
  hq: "U.S. (nationwide; virtual delivery)",
  funding: "501(c)(3) nonprofit; funded in part by an SBA grant agreement plus private donations and partners.",
  audience: ["Veterans", "Immediate family members of veterans", "Service-disabled veterans (priority track)"],
  geographic: "Nationwide; fully virtual/self-paced, no geographic restriction.",
  eligibility: "U.S. military veterans and their immediate family members. Must complete Warrior Academy before advancing to Warrior University or grant eligibility. A dedicated SDVET (Service-Disabled Veteran Entrepreneurs) track exists for service-disabled veterans.",
  status: "active",
  cost: { tags: ["free"], detail: "All training (Warrior Academy, Warrior University, SDVET track) is free. Grants are awarded, not loaned — no repayment required." },
  programs: [{
    name: "Warrior Academy → Warrior University → Grants/Business Shower",
    description: "Warrior Academy is a self-paced, ~40-module course translating military planning frameworks (e.g., the five-paragraph order) into a business plan. Graduates can advance to Warrior University, an 8-week virtual accelerator (the 'Veteran Business Accelerator'). Throughout, participants get 1:1 mentorship and weekly coaching calls. The signature 'Business Shower' event supplies a custom suit, laptop, website, headshots, and a pitch-competition shot at grant funding.",
    serves: "Veterans at any stage: idea on a napkin, buying a franchise/existing business, or accelerating a current business.",
    apply: ["Register for Warrior Academy at academy.warriorrising.org (rolling enrollment, no deadline)", "Complete the self-paced modules and business plan", "Advance to Warrior University (8-week accelerator)", "Pitch at a Business Shower for grant consideration"],
    timeline: "Warrior Academy is self-paced; Warrior University runs 8 weeks.",
    capacity: "36,000+ veterans served since inception; $12M+ total funding distributed ($4M in 2024 alone) and $2.3M+ in direct grants."
  }],
  barrier: { level: "Low", reasons: "Free and open to any veteran/family member, but success depends on real engagement — there are no shortcuts or guaranteed grants. Grant funding (not loans) is competitive and tied to completing the training and presenting a clear business plan." },
  outcomes: {
    note: "ESTIMATE / org-reported.",
    orgReported: "Org reports 36,000+ veterans served, $12M+ in funding distributed, $2.3M+ in direct grants, and $10.1M+ in business resources (legal/marketing support) over its first decade."
  },
  roi: { score: 7, salaryImpact: "Variable (entrepreneurial)", timeReturn: "Medium", note: "ESTIMATE. Free, well-resourced entrepreneurship pipeline with real grant money on the other end — strong ROI for veterans serious about starting or scaling a business; outcomes naturally vary more than W-2 employment programs." },
  nobodyTells: [
    "Grants aren't passive-investment money — they explicitly exclude things like house-flipping or buying/selling securities; you need a real operating business plan.",
    "You must finish Warrior Academy before you're eligible for Warrior University or grant consideration — there's no skipping the line.",
    "The 'Business Shower' is a real pitch event (Shark Tank-style) with tangible perks (suit, laptop, website, headshots) even before you compete for funding."
  ],
  fitByRank: {
    junior_enlisted: "Good — early business idea development.",
    nco: "Strong — leadership translates well to ownership.",
    senior_enlisted: "Strong — many bring resources to scale faster.",
    junior_officer: "Strong — planning skills map directly to the curriculum.",
    senior_officer: "Strong — best resourced to scale post-program."
  },
  careers: ["Small business owner", "Franchise owner", "Service-disabled veteran-owned business (SDVOSB)", "Cross-industry entrepreneurship"],
  pathways: ["Veteran/family member → Warrior Academy → Warrior University → mentorship + Business Shower pitch → grant-funded business launch/scale"],
  community: {
    praise: ["Genuinely free, well-funded pipeline", "Real grant money, not just advice", "Strong mentorship and coaching calls"],
    complaints: ["Grants are competitive, not guaranteed", "Requires real time investment to finish Academy/University", "Best suited to those ready to commit to a business plan"],
    tips: ["Don't skip modules — the sequence builds your plan", "Bring a real business plan to coaching calls", "If service-disabled, ask about the SDVET track specifically"]
  },
  sources: ["warriorrising.org", "news.va.gov", "stories.wf.com", "grantexec.com"]
},

{
  id: "outvets",
  name: "OutVets",
  verified: true,
  categories: ["community", "advocacy"],
  url: "https://www.outvets.org/",
  tagline: "Community, remembrance, and advocacy for LGBTQ veterans — not a career-placement org.",
  overview: "OutVets is a Boston-based nonprofit (founded September 2014) that celebrates and honors the service of America's LGBTQ veterans, active-duty members, and their families. It is a social and service-based organization focused on visibility, civic participation, and a living history of LGBTQ military service — most publicly known for marching in (and, in 2017, being briefly barred from) Boston's St. Patrick's Day and Veterans Day parades.",
  mission: "To promote awareness, civic engagement, and a living history of all LGBTQ veterans.",
  founded: "September 2014",
  hq: "Boston, MA",
  funding: "Nonprofit; community donations and sponsor support.",
  audience: ["LGBTQ veterans", "LGBTQ active-duty service members", "Their families and allies"],
  geographic: "Primarily Boston/New England, with broader national visibility through parade participation and media coverage.",
  eligibility: "Open to LGBTQ veterans, active-duty members, their families, and allies who want to support the mission.",
  status: "active",
  cost: { tags: ["free"], detail: "Free to join and participate; the organization runs on donations." },
  programs: [{
    name: "Community, Remembrance & Civic Advocacy",
    description: "OutVets organizes participation in civic events (parades, Veterans Day observances), builds community among LGBTQ veterans and families, and advocates for visibility and equal recognition of LGBTQ military service and history.",
    serves: "LGBTQ veterans and families seeking community, recognition, and a public voice.",
    apply: ["Connect via outvets.org or the OutVets Facebook/Meetup community", "Join local meetups and events", "Participate in parade/remembrance events"],
    timeline: "Ongoing; tied to annual civic calendar (e.g., St. Patrick's Day, Veterans Day).",
    capacity: "Community-scale; regional New England chapter with national visibility."
  }],
  barrier: { level: "Low", reasons: "Open and free to join; this is a community/advocacy organization, not a gated program — there's no application or eligibility screening beyond self-identifying with the mission." },
  outcomes: { note: "Not applicable — this organization's value is community, visibility, and advocacy rather than employment or career outcomes, so it is intentionally excluded from this portal's career-impact rankings." },
  roi: null,
  nobodyTells: [
    "This is a community and advocacy organization, not a job-placement or career-training program — don't expect résumé help or employer connections here.",
    "It made national news in 2017 when Boston St. Patrick's Day parade organizers briefly barred it over its rainbow flag/banner, then reversed under public and political pressure.",
    "If you're looking for LGBTQ-focused career or benefits support specifically, the Modern Military Association of America (MMAA) is the larger national organization to also look into."
  ],
  fitByRank: {
    junior_enlisted: "Open to all — community and visibility focus.",
    nco: "Open to all — community and visibility focus.",
    senior_enlisted: "Open to all — community and visibility focus.",
    junior_officer: "Open to all — community and visibility focus.",
    senior_officer: "Open to all — community and visibility focus."
  },
  careers: [],
  pathways: ["LGBTQ veteran/family → OutVets community → civic participation, remembrance, and advocacy"],
  community: {
    praise: ["Genuine community and visibility for LGBTQ veterans", "Strong civic presence in New England", "Meaningful remembrance and recognition work"],
    complaints: ["Not a career or benefits program", "Primarily regional (Boston/New England) in direct programming", "Smaller than national LGBTQ veteran orgs"],
    tips: ["Pair with MMAA if you need career/benefits-specific LGBTQ support", "Best fit if you want community and civic engagement, not job placement"]
  },
  sources: ["outvets.org", "bostonglobe.com", "meetup.com"]
},

/* ==========================================================================
   STUBS — structure present, facts pending next research batch.
   These render in the directory as "Research in progress" so the platform is
   complete-feeling while remaining honest. Append verified data later.
   ========================================================================== */




{ id:"vet-tec-listing", name:"VET TEC (see VET TEC 2.0)",      verified:false, crossref:"vettec2", categories:["it","financial"],          url:"https://www.va.gov/education/other-va-education-benefits/vet-tec-2/", status:"active", tagline:"This is now VET TEC 2.0 — see the full verified profile.", cost:{tags:["gi-bill"]} },


{ id:"vre-reboot",   name:"Veteran Readiness & Employment (VR&E)", verified:false, crossref:"va", categories:["financial","education"], url:"https://www.va.gov/careers-employment/vocational-rehabilitation/", status:"active", tagline:"Chapter 31 — covered inside the verified VA profile.", cost:{tags:["vre","free"]} },
{ id:"gi-bill",      name:"GI Bill",                           verified:false, crossref:"va", categories:["financial","education"],   url:"https://www.va.gov/education/about-gi-bill-benefits/", status:"active", tagline:"Post-9/11 GI Bill — covered inside the verified VA profile.", cost:{tags:["gi-bill"]} }

];

/* Convenience: counts for the homepage */
window.ORG_STATS = (function () {
  var total = window.ORGS.length;
  var verified = window.ORGS.filter(function (o) { return o.verified; }).length;
  return { total: total, verified: verified, pending: total - verified };
})();
