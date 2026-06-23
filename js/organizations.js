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
   STUBS — structure present, facts pending next research batch.
   These render in the directory as "Research in progress" so the platform is
   complete-feeling while remaining honest. Append verified data later.
   ========================================================================== */

{ id:"act-now",      name:"ACT Now Education",                 verified:false, categories:["education","it"],          url:"https://www.actnowedu.org/",            status:"active", tagline:"Free certification training and test vouchers.", cost:{tags:["free"]} },
{ id:"boots-to-books", name:"Boots to Books",                  verified:false, categories:["education"],               url:"",                                       status:"active", tagline:"Transition education course.", cost:{tags:["free"]} },
{ id:"trio-vub",     name:"Veterans Upward Bound (TRIO/VUB)",  verified:false, categories:["education"],               url:"",                                       status:"active", tagline:"Free college-prep for veterans (TRIO program).", cost:{tags:["free"]} },

{ id:"sitreps2steercos", name:"Sitreps 2 Steercos",           verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Transition support program.", cost:{tags:["free"]} },
{ id:"vts",          name:"Veteran Transition Support (VTS)",  verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Transition assistance.", cost:{tags:["free"]} },
{ id:"7-eagle",      name:"7 Eagle Group",                     verified:false, categories:["transition","remote"],     url:"https://7eagle.com/",                   status:"active", tagline:"Veteran recruiting and placement.", cost:{tags:["free"]} },
{ id:"invets",       name:"iN Recruit Military (INvets)",      verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Veteran recruiting and hiring events.", cost:{tags:["free"]} },
{ id:"operation-warfighter", name:"Operation Warfighter",      verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Federal internship program for wounded/ill/injured service members.", cost:{tags:["free"]} },
{ id:"e2i",          name:"Education & Employment Initiative (E2I)", verified:false, categories:["transition","education"], url:"", status:"active", tagline:"DoD program connecting wounded warriors to education/employment.", cost:{tags:["free"]} },
{ id:"recruit-military", name:"RecruitMilitary",               verified:false, categories:["transition"],              url:"https://recruitmilitary.com/",          status:"active", tagline:"Veteran job board and hiring events.", cost:{tags:["free"]} },

{ id:"operation-homefront", name:"Operation Homefront",       verified:false, categories:["health","financial"],      url:"https://www.operationhomefront.org/",   status:"active", tagline:"Financial and family support for military families.", cost:{tags:["free"]} },
{ id:"my-steady-mind", name:"My Steady Mind",                 verified:false, categories:["health"],                  url:"",                                       status:"active", tagline:"Mental performance and wellness.", cost:{tags:["free"]} },
{ id:"movement-rx",  name:"Movement Rx",                       verified:false, categories:["health"],                  url:"",                                       status:"active", tagline:"Physical wellness and mobility.", cost:{tags:["self-pay"]} },

{ id:"veterans-in-tech", name:"Veterans in Tech (ViT)",       verified:false, categories:["it","leadership"],         url:"",                                       status:"active", tagline:"Community and training for veterans entering tech.", cost:{tags:["free"]} },
{ id:"cisco-vets",   name:"Cisco Veterans Program",            verified:false, categories:["it","education"],          url:"https://www.netacad.com/",              status:"active", tagline:"Networking and cybersecurity training (Networking Academy).", cost:{tags:["free","partially-funded"]} },
{ id:"vet-tec-listing", name:"VET TEC (see VET TEC 2.0)",      verified:false, crossref:"vettec2", categories:["it","financial"],          url:"https://www.va.gov/education/other-va-education-benefits/vet-tec-2/", status:"active", tagline:"This is now VET TEC 2.0 — see the full verified profile.", cost:{tags:["gi-bill"]} },

{ id:"map",          name:"Military Apprenticeship Program (MAP)", verified:false, categories:["trades"],              url:"",                                       status:"active", tagline:"Registered apprenticeship pathways.", cost:{tags:["free"]} },
{ id:"troops-into-transportation", name:"Troops Into Transportation", verified:false, categories:["trades","transition"], url:"", status:"active", tagline:"CDL and transportation careers.", cost:{tags:["free"]} },
{ id:"umap",         name:"Utility Workers Military Assistance Program (UMAP)", verified:false, categories:["trades"], url:"", status:"active", tagline:"Utility-industry apprenticeships.", cost:{tags:["free"]} },
{ id:"union-apprenticeships", name:"Union Apprenticeship Programs", verified:false, categories:["trades"],          url:"",                                       status:"active", tagline:"Registered union apprenticeships.", cost:{tags:["free"]} },
{ id:"nextop",       name:"NextOp Veterans",                   verified:false, categories:["trades","transition"],     url:"https://nextopvets.org/",               status:"active", tagline:"Industry placement for enlisted veterans.", cost:{tags:["free"]} },

{ id:"venture-vets", name:"Venture Vets",                      verified:false, categories:["business"],                url:"",                                       status:"active", tagline:"Entrepreneurship support for veterans.", cost:{tags:["free"]} },
{ id:"vet-to-drones", name:"Vet to Drones",                    verified:false, categories:["business","trades"],       url:"",                                       status:"active", tagline:"Drone/UAS business and certification training.", cost:{tags:["self-pay"]} },

{ id:"hoh-spouse",   name:"Hiring Our Heroes — Spouse Programs", verified:false, categories:["spouse","transition"],   url:"https://www.hiringourheroes.org/",      status:"active", tagline:"Military Spouse Fellowship and accelerator tracks.", cost:{tags:["free"]} },

{ id:"milmentor",    name:"MilMentor",                         verified:false, categories:["leadership"],              url:"https://www.milmentor.com/",            status:"active", tagline:"Mentor-matching platform for veterans and spouses.", cost:{tags:["free"]} },

{ id:"outvets",      name:"OutVets",                           verified:false, categories:["remote","leadership"],     url:"",                                       status:"active", tagline:"LGBTQ veteran community and advocacy.", cost:{tags:["free"]} },
{ id:"remote-veterans", name:"Remote Veterans",                verified:false, categories:["remote"],                  url:"",                                       status:"active", tagline:"Remote-work job board for veterans.", cost:{tags:["free"]} },
{ id:"virtual-vocations", name:"Virtual Vocations",            verified:false, categories:["remote"],                  url:"https://www.virtualvocations.com/",     status:"active", tagline:"Curated remote job listings.", cost:{tags:["free","self-pay"]} },
{ id:"work-for-warriors", name:"Work for Warriors (WFW)",      verified:false, categories:["remote","transition"],     url:"",                                       status:"active", tagline:"Job placement for Guard/Reserve and veterans.", cost:{tags:["free"]} },
{ id:"10000-vets",   name:"10,000 Vets",                       verified:false, categories:["remote","transition"],     url:"",                                       status:"active", tagline:"Veteran employment initiative.", cost:{tags:["free"]} },

{ id:"vre-reboot",   name:"Veteran Readiness & Employment (VR&E)", verified:false, crossref:"va", categories:["financial","education"], url:"https://www.va.gov/careers-employment/vocational-rehabilitation/", status:"active", tagline:"Chapter 31 — covered inside the verified VA profile.", cost:{tags:["vre","free"]} },
{ id:"gi-bill",      name:"GI Bill",                           verified:false, crossref:"va", categories:["financial","education"],   url:"https://www.va.gov/education/about-gi-bill-benefits/", status:"active", tagline:"Post-9/11 GI Bill — covered inside the verified VA profile.", cost:{tags:["gi-bill"]} }

];

/* Convenience: counts for the homepage */
window.ORG_STATS = (function () {
  var total = window.ORGS.length;
  var verified = window.ORGS.filter(function (o) { return o.verified; }).length;
  return { total: total, verified: verified, pending: total - verified };
})();
