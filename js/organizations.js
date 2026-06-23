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
   STUBS — structure present, facts pending next research batch.
   These render in the directory as "Research in progress" so the platform is
   complete-feeling while remaining honest. Append verified data later.
   ========================================================================== */

{ id:"act-now",      name:"ACT Now Education",                 verified:false, categories:["education","it"],          url:"https://www.actnowedu.org/",            status:"active", tagline:"Free certification training and test vouchers.", cost:{tags:["free"]} },
{ id:"warrior-scholar", name:"Warrior-Scholar Project",        verified:false, categories:["education"],               url:"https://www.warrior-scholar.org/",      status:"active", tagline:"Academic boot camps easing the transition to college.", cost:{tags:["free"]} },
{ id:"boots-to-books", name:"Boots to Books",                  verified:false, categories:["education"],               url:"",                                       status:"active", tagline:"Transition education course.", cost:{tags:["free"]} },
{ id:"vets2pm",      name:"Vets2PM",                           verified:false, categories:["education","transition"],  url:"https://vets2pm.com/",                  status:"active", tagline:"Project-management training and certification for veterans.", cost:{tags:["self-pay","gi-bill"]} },
{ id:"grow-google",  name:"Grow with Google for Military",     verified:false, categories:["education","it"],          url:"https://grow.google/programs/veterans/", status:"active", tagline:"Google career certificates and tools for the military community.", cost:{tags:["free","partially-funded"]} },
{ id:"npower",       name:"NPower",                            verified:false, categories:["it","education"],          url:"https://www.npower.org/",               status:"active", tagline:"Free tech training for veterans and young adults.", cost:{tags:["free"]} },
{ id:"fedvte",       name:"FedVTE",                            verified:false, categories:["it","education"],          url:"https://fedvte.usalearning.gov/",       status:"active", tagline:"Free federal cybersecurity online training.", cost:{tags:["free"]} },
{ id:"trio-vub",     name:"Veterans Upward Bound (TRIO/VUB)",  verified:false, categories:["education"],               url:"",                                       status:"active", tagline:"Free college-prep for veterans (TRIO program).", cost:{tags:["free"]} },
{ id:"service-to-school", name:"Service to School",            verified:false, categories:["education"],               url:"https://service2school.org/",           status:"active", tagline:"Free admissions counseling for veterans.", cost:{tags:["free"]} },

{ id:"sitreps2steercos", name:"Sitreps 2 Steercos",           verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Transition support program.", cost:{tags:["free"]} },
{ id:"vts",          name:"Veteran Transition Support (VTS)",  verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Transition assistance.", cost:{tags:["free"]} },
{ id:"hire-heroes-usa", name:"Hire Heroes USA",                verified:false, categories:["transition"],              url:"https://www.hireheroesusa.org/",        status:"active", tagline:"Free job-search assistance and coaching for veterans and spouses.", cost:{tags:["free"]} },
{ id:"7-eagle",      name:"7 Eagle Group",                     verified:false, categories:["transition","remote"],     url:"https://7eagle.com/",                   status:"active", tagline:"Veteran recruiting and placement.", cost:{tags:["free"]} },
{ id:"invets",       name:"iN Recruit Military (INvets)",      verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Veteran recruiting and hiring events.", cost:{tags:["free"]} },
{ id:"operation-warfighter", name:"Operation Warfighter",      verified:false, categories:["transition"],              url:"",                                       status:"active", tagline:"Federal internship program for wounded/ill/injured service members.", cost:{tags:["free"]} },
{ id:"e2i",          name:"Education & Employment Initiative (E2I)", verified:false, categories:["transition","education"], url:"", status:"active", tagline:"DoD program connecting wounded warriors to education/employment.", cost:{tags:["free"]} },
{ id:"recruit-military", name:"RecruitMilitary",               verified:false, categories:["transition"],              url:"https://recruitmilitary.com/",          status:"active", tagline:"Veteran job board and hiring events.", cost:{tags:["free"]} },

{ id:"wwp",          name:"Wounded Warrior Project",           verified:false, categories:["health"],                  url:"https://www.woundedwarriorproject.org/", status:"active", tagline:"Programs for wounded post-9/11 veterans.", cost:{tags:["free"]} },
{ id:"team-rwb",     name:"Team RWB",                          verified:false, categories:["health","leadership"],     url:"https://www.teamrwb.org/",              status:"active", tagline:"Veteran health through physical and social activity.", cost:{tags:["free"]} },
{ id:"mission-continues", name:"The Mission Continues",        verified:false, categories:["health","leadership"],     url:"https://www.missioncontinues.org/",     status:"active", tagline:"Veteran community-service platoons.", cost:{tags:["free"]} },
{ id:"travis-manion", name:"Travis Manion Foundation",        verified:false, categories:["health","leadership"],     url:"https://www.travismanion.org/",         status:"active", tagline:"Character and leadership development for veterans.", cost:{tags:["free"]} },
{ id:"operation-homefront", name:"Operation Homefront",       verified:false, categories:["health","financial"],      url:"https://www.operationhomefront.org/",   status:"active", tagline:"Financial and family support for military families.", cost:{tags:["free"]} },
{ id:"my-steady-mind", name:"My Steady Mind",                 verified:false, categories:["health"],                  url:"",                                       status:"active", tagline:"Mental performance and wellness.", cost:{tags:["free"]} },
{ id:"movement-rx",  name:"Movement Rx",                       verified:false, categories:["health"],                  url:"",                                       status:"active", tagline:"Physical wellness and mobility.", cost:{tags:["self-pay"]} },

{ id:"veterans-in-tech", name:"Veterans in Tech (ViT)",       verified:false, categories:["it","leadership"],         url:"",                                       status:"active", tagline:"Community and training for veterans entering tech.", cost:{tags:["free"]} },
{ id:"cisco-vets",   name:"Cisco Veterans Program",            verified:false, categories:["it","education"],          url:"https://www.netacad.com/",              status:"active", tagline:"Networking and cybersecurity training (Networking Academy).", cost:{tags:["free","partially-funded"]} },
{ id:"code-platoon", name:"Code Platoon",                      verified:false, categories:["it","education"],          url:"https://www.codeplatoon.org/",          status:"active", tagline:"Software-engineering bootcamp for veterans and spouses.", cost:{tags:["scholarship","vet-tec","self-pay"]} },
{ id:"vet-tec-listing", name:"VET TEC (see VET TEC 2.0)",      verified:false, categories:["it","financial"],          url:"https://www.va.gov/education/other-va-education-benefits/vet-tec-2/", status:"active", tagline:"See the verified VET TEC 2.0 profile.", cost:{tags:["gi-bill"]} },

{ id:"helmets-to-hardhats", name:"Helmets to Hardhats",       verified:false, categories:["trades"],                  url:"https://helmetstohardhats.org/",        status:"active", tagline:"Connects veterans to building-trades apprenticeships.", cost:{tags:["free"]} },
{ id:"map",          name:"Military Apprenticeship Program (MAP)", verified:false, categories:["trades"],              url:"",                                       status:"active", tagline:"Registered apprenticeship pathways.", cost:{tags:["free"]} },
{ id:"workshops-for-warriors", name:"Workshops for Warriors",  verified:false, categories:["trades","education"],      url:"https://wfw.org/",                      status:"active", tagline:"Advanced manufacturing and CNC training/certification.", cost:{tags:["free","scholarship"]} },
{ id:"troops-into-transportation", name:"Troops Into Transportation", verified:false, categories:["trades","transition"], url:"", status:"active", tagline:"CDL and transportation careers.", cost:{tags:["free"]} },
{ id:"umap",         name:"Utility Workers Military Assistance Program (UMAP)", verified:false, categories:["trades"], url:"", status:"active", tagline:"Utility-industry apprenticeships.", cost:{tags:["free"]} },
{ id:"union-apprenticeships", name:"Union Apprenticeship Programs", verified:false, categories:["trades"],          url:"",                                       status:"active", tagline:"Registered union apprenticeships.", cost:{tags:["free"]} },
{ id:"nextop",       name:"NextOp Veterans",                   verified:false, categories:["trades","transition"],     url:"https://nextopvets.org/",               status:"active", tagline:"Industry placement for enlisted veterans.", cost:{tags:["free"]} },

{ id:"vetfran",      name:"VetFran",                           verified:false, categories:["business"],                url:"https://www.vetfran.org/",              status:"active", tagline:"Franchise opportunities and discounts for veterans.", cost:{tags:["free","self-pay"]} },
{ id:"venture-vets", name:"Venture Vets",                      verified:false, categories:["business"],                url:"",                                       status:"active", tagline:"Entrepreneurship support for veterans.", cost:{tags:["free"]} },
{ id:"score",        name:"SCORE Mentorship",                  verified:false, categories:["business","leadership"],   url:"https://www.score.org/",                status:"active", tagline:"Free small-business mentoring (SBA resource partner).", cost:{tags:["free"]} },
{ id:"v-wise",       name:"V-WISE",                            verified:false, categories:["business","spouse"],       url:"https://ivmf.syracuse.edu/programs/entrepreneurship/", status:"active", tagline:"Women veteran/spouse entrepreneurship training (IVMF).", cost:{tags:["free"]} },
{ id:"vet-to-drones", name:"Vet to Drones",                    verified:false, categories:["business","trades"],       url:"",                                       status:"active", tagline:"Drone/UAS business and certification training.", cost:{tags:["self-pay"]} },

{ id:"msep",         name:"Military Spouse Employment Partnership (MSEP)", verified:false, categories:["spouse","transition"], url:"https://msepjobs.militaryonesource.mil/", status:"active", tagline:"Employer partners committed to hiring military spouses.", cost:{tags:["free"]} },
{ id:"seco",         name:"SECO / SpouseWorks",                verified:false, categories:["spouse"],                  url:"https://myseco.militaryonesource.mil/", status:"active", tagline:"Spouse education and career coaching.", cost:{tags:["free"]} },
{ id:"hoh-spouse",   name:"Hiring Our Heroes — Spouse Programs", verified:false, categories:["spouse","transition"],   url:"https://www.hiringourheroes.org/",      status:"active", tagline:"Military Spouse Fellowship and accelerator tracks.", cost:{tags:["free"]} },

{ id:"milmentor",    name:"MilMentor",                         verified:false, categories:["leadership"],              url:"https://www.milmentor.com/",            status:"active", tagline:"Mentor-matching platform for veterans and spouses.", cost:{tags:["free"]} },

{ id:"outvets",      name:"OutVets",                           verified:false, categories:["remote","leadership"],     url:"",                                       status:"active", tagline:"LGBTQ veteran community and advocacy.", cost:{tags:["free"]} },
{ id:"remote-veterans", name:"Remote Veterans",                verified:false, categories:["remote"],                  url:"",                                       status:"active", tagline:"Remote-work job board for veterans.", cost:{tags:["free"]} },
{ id:"virtual-vocations", name:"Virtual Vocations",            verified:false, categories:["remote"],                  url:"https://www.virtualvocations.com/",     status:"active", tagline:"Curated remote job listings.", cost:{tags:["free","self-pay"]} },
{ id:"work-for-warriors", name:"Work for Warriors (WFW)",      verified:false, categories:["remote","transition"],     url:"",                                       status:"active", tagline:"Job placement for Guard/Reserve and veterans.", cost:{tags:["free"]} },
{ id:"10000-vets",   name:"10,000 Vets",                       verified:false, categories:["remote","transition"],     url:"",                                       status:"active", tagline:"Veteran employment initiative.", cost:{tags:["free"]} },

{ id:"vre-reboot",   name:"Veteran Readiness & Employment (VR&E)", verified:false, categories:["financial","education"], url:"https://www.va.gov/careers-employment/vocational-rehabilitation/", status:"active", tagline:"Chapter 31 — funds training without using GI Bill (see VA profile).", cost:{tags:["vre","free"]} },
{ id:"gi-bill",      name:"GI Bill",                           verified:false, categories:["financial","education"],   url:"https://www.va.gov/education/about-gi-bill-benefits/", status:"active", tagline:"Education benefit (see VA profile for detail).", cost:{tags:["gi-bill"]} },
{ id:"military-onesource", name:"Military OneSource",          verified:false, categories:["financial","health","spouse"], url:"https://www.militaryonesource.mil/", status:"active", tagline:"DoD's central hub for military-family support.", cost:{tags:["free"]} },
{ id:"nmfa",         name:"National Military Family Association (NMFA)", verified:false, categories:["financial","spouse"], url:"https://www.militaryfamily.org/", status:"active", tagline:"Advocacy and resources for military families.", cost:{tags:["free"]} }

];

/* Convenience: counts for the homepage */
window.ORG_STATS = (function () {
  var total = window.ORGS.length;
  var verified = window.ORGS.filter(function (o) { return o.verified; }).length;
  return { total: total, verified: verified, pending: total - verified };
})();
