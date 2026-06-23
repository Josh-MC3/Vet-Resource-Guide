/* ============================================================================
   VET PORTAL — APP LOGIC
   Reads window.ORGS + window.ORG_CATEGORIES. No build step, no frameworks.
   ========================================================================== */
(function () {
  "use strict";

  var ORGS = window.ORGS || [];
  var CATS = window.ORG_CATEGORIES || [];
  var catById = {};
  CATS.forEach(function (c) { catById[c.id] = c; });

  /* ---------- shared helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
    return ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" })[c]; }); }
  function costTags(o) { return (o.cost && o.cost.tags) || []; }
  function isFree(o) { return costTags(o).indexOf("free") > -1; }
  function isGI(o) { return costTags(o).indexOf("gi-bill") > -1 || costTags(o).indexOf("vre") > -1; }
  function catLabel(id) { return catById[id] ? catById[id].label : id; }
  function catColor(id) { return catById[id] ? catById[id].color : "var(--amber)"; }

  /* ====================================================================
     HOMEPAGE — category cards + stats
     ==================================================================== */
  function renderHome() {
    var grid = document.getElementById("cat-grid");
    if (grid) {
      CATS.forEach(function (c) {
        var n = ORGS.filter(function (o) { return o.categories && o.categories.indexOf(c.id) > -1; }).length;
        var a = el("a", "cat-card");
        a.href = "directory.html?cat=" + c.id;
        a.style.setProperty("--cat", c.color);
        a.innerHTML =
          '<span class="idx">CAT ' + String(c.n).padStart(2, "0") + '</span>' +
          '<span class="count">' + n + '</span>' +
          '<div class="bar"></div>' +
          '<h3>' + esc(c.label) + '</h3>' +
          '<p>' + esc(c.blurb) + '</p>';
        grid.appendChild(a);
      });
    }
    var s = window.ORG_STATS || { total: ORGS.length, verified: 0 };
    setText("stat-total", s.total);
    setText("stat-verified", s.verified);
    setText("stat-cats", CATS.length);
  }
  function setText(id, v) { var n = document.getElementById(id); if (n) n.textContent = v; }

  /* ====================================================================
     DIRECTORY — search, filter, card/table views, detail modal
     ==================================================================== */
  var state = { q: "", view: "card", filters: {} };

  var FILTER_DEFS = [
    { key: "free",        test: function (o) { return isFree(o); }, label: "Free" },
    { key: "gi",          test: function (o) { return isGI(o); }, label: "GI Bill / VR&E" },
    { key: "spouse",      test: function (o) { return hasCat(o, "spouse"); }, label: "Military Spouse" },
    { key: "it",          test: function (o) { return hasCat(o, "it"); }, label: "Cyber / IT" },
    { key: "transition",  test: function (o) { return hasCat(o, "transition"); }, label: "Transition" },
    { key: "business",    test: function (o) { return hasCat(o, "business"); }, label: "Entrepreneurship" },
    { key: "remote",      test: function (o) { return hasCat(o, "remote"); }, label: "Remote Work" },
    { key: "education",   test: function (o) { return hasCat(o, "education"); }, label: "Certifications" },
    { key: "verified",    test: function (o) { return o.verified; }, label: "Verified profiles" }
  ];
  function hasCat(o, id) { return o.categories && o.categories.indexOf(id) > -1; }

  function renderDirectory() {
    var root = document.getElementById("directory");
    if (!root) return;

    // preselect category from ?cat=
    var params = new URLSearchParams(location.search);
    var preCat = params.get("cat");
    if (preCat && catById[preCat]) state.filters[preCat] = true;

    // filter chips
    var chipWrap = document.getElementById("filters");
    FILTER_DEFS.forEach(function (f) {
      var c = el("button", "chip", f.label);
      c.type = "button";
      c.setAttribute("aria-pressed", "false");
      c.addEventListener("click", function () {
        state.filters[f.key] = !state.filters[f.key];
        c.classList.toggle("on", state.filters[f.key]);
        c.setAttribute("aria-pressed", state.filters[f.key] ? "true" : "false");
        draw();
      });
      chipWrap.appendChild(c);
    });
    // category chips (the 10)
    CATS.forEach(function (cat) {
      if (FILTER_DEFS.some(function (f) { return f.key === cat.id; })) return; // skip dupes
      var c = el("button", "chip", cat.label);
      c.type = "button";
      if (state.filters[cat.id]) c.classList.add("on");
      c.addEventListener("click", function () {
        state.filters[cat.id] = !state.filters[cat.id];
        c.classList.toggle("on", state.filters[cat.id]);
        draw();
      });
      chipWrap.appendChild(c);
    });

    // search
    var inp = document.getElementById("search");
    inp.addEventListener("input", function () { state.q = inp.value.toLowerCase().trim(); draw(); });

    // view switch
    document.querySelectorAll(".view-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.view = b.dataset.view;
        document.querySelectorAll(".view-switch button").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        draw();
      });
    });

    draw();
  }

  function applyFilters() {
    return ORGS.filter(function (o) {
      // text
      if (state.q) {
        var hay = (o.name + " " + (o.tagline || "") + " " + (o.overview || "") + " " +
          (o.categories || []).map(catLabel).join(" ")).toLowerCase();
        if (hay.indexOf(state.q) === -1) return false;
      }
      // active filters (AND across keys)
      for (var k in state.filters) {
        if (!state.filters[k]) continue;
        var def = FILTER_DEFS.filter(function (f) { return f.key === k; })[0];
        if (def) { if (!def.test(o)) return false; }
        else { if (!hasCat(o, k)) return false; } // category key
      }
      return true;
    });
  }

  function draw() {
    var list = applyFilters();
    var meta = document.getElementById("result-meta");
    if (meta) meta.textContent = "DISPLAYING " + list.length + " OF " + ORGS.length + " RESOURCES" +
      (state.q ? ' · QUERY "' + state.q + '"' : "");

    var host = document.getElementById("results");
    host.innerHTML = "";
    if (!list.length) {
      host.appendChild(el("div", "empty", "<h3>No resources match.</h3><p class='muted'>Try removing a filter or broadening your search.</p>"));
      return;
    }
    // verified first, then alpha
    list.sort(function (a, b) {
      if (a.verified !== b.verified) return a.verified ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    if (state.view === "table") drawTable(host, list); else drawCards(host, list);
  }

  function badgeRow(o) {
    var b = "";
    if (o.verified) b += '<span class="badge verified">Verified</span>';
    else b += '<span class="badge stub">Profile pending</span>';
    if (isFree(o)) b += '<span class="badge free">Free</span>';
    if (isGI(o)) b += '<span class="badge gi">GI Bill</span>';
    return b;
  }

  function drawCards(host, list) {
    var grid = el("div", "org-grid");
    list.forEach(function (o) {
      var card = el("div", "org-card");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "View details for " + o.name);
      var primaryCat = (o.categories && o.categories[0]) || "";
      var score = o.roi && o.roi.score;
      card.innerHTML =
        '<div class="head">' +
          '<h3>' + esc(o.name) + '</h3>' +
          (score ? '<span class="score-pill est" title="Estimated Career Impact (1–10)">' + score + '</span>' : '') +
        '</div>' +
        '<p class="tagline">' + esc(o.tagline || "") + '</p>' +
        '<div class="foot">' +
          (primaryCat ? '<span class="badge cat" style="border-color:' + catColor(primaryCat) + '55;color:' + catColor(primaryCat) + '">' + esc(catLabel(primaryCat)) + '</span>' : '') +
          badgeRow(o) +
        '</div>';
      card.addEventListener("click", function () { openModal(o); });
      card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(o); } });
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }

  function drawTable(host, list) {
    var t = el("table", "org-table");
    t.innerHTML =
      '<thead><tr>' +
        '<th>Resource</th>' +
        '<th class="hide-sm">Category</th>' +
        '<th class="hide-sm">Cost</th>' +
        '<th>Impact</th>' +
        '<th class="hide-sm">Status</th>' +
      '</tr></thead>';
    var tb = el("tbody");
    list.forEach(function (o) {
      var tr = el("tr");
      tr.tabIndex = 0;
      var score = (o.roi && o.roi.score) ? o.roi.score : "—";
      tr.innerHTML =
        '<td><span class="name">' + esc(o.name) + '</span><br><span class="muted" style="font-size:.82rem">' + esc(o.tagline || "") + '</span></td>' +
        '<td class="hide-sm">' + (o.categories || []).map(catLabel).join(", ") + '</td>' +
        '<td class="hide-sm">' + (isFree(o) ? "Free" : (isGI(o) ? "GI Bill" : "Varies")) + '</td>' +
        '<td>' + (score === "—" ? '<span class="muted">—</span>' : '<span class="score-pill est">' + score + '</span>') + '</td>' +
        '<td class="hide-sm">' + (o.verified ? '<span class="badge verified">Verified</span>' : '<span class="badge stub">Pending</span>') + '</td>';
      tr.addEventListener("click", function () { openModal(o); });
      tr.addEventListener("keydown", function (e) { if (e.key === "Enter") openModal(o); });
      tb.appendChild(tr);
    });
    t.appendChild(tb);
    host.appendChild(t);
  }

  /* ---------- DETAIL MODAL ---------- */
  function openModal(o) {
    var back = document.getElementById("modal-back");
    var body = document.getElementById("modal-body");
    var head = document.getElementById("modal-head");
    if (!back) return;

    head.innerHTML =
      '<div>' +
        '<h2>' + esc(o.name) + '</h2>' +
        '<div class="sub">' + esc(o.tagline || "") + '</div>' +
        '<div class="badges">' + badgeRow(o) +
          (o.url ? '<a class="badge" style="color:var(--signal);border-color:rgba(91,155,213,.4)" href="' + esc(o.url) + '" target="_blank" rel="noopener">Official site ↗</a>' : '') +
        '</div>' +
      '</div>' +
      '<button class="x" aria-label="Close">×</button>';
    head.querySelector(".x").addEventListener("click", closeModal);

    body.innerHTML = o.verified ? detailFull(o) : (o.crossref ? detailCrossref(o) : detailStub(o));

    // wire any compare buttons inside modal
    var cmpBtn = body.querySelector("[data-cmp]");
    if (cmpBtn) cmpBtn.addEventListener("click", function () { toggleCompare(o.id); closeModal(); });

    // wire cross-reference "open target profile" button
    var gotoBtn = body.querySelector("[data-goto]");
    if (gotoBtn) gotoBtn.addEventListener("click", function () {
      var t = ORGS.filter(function (x) { return x.id === gotoBtn.dataset.goto; })[0];
      if (t) openModal(t);
    });

    back.classList.add("open");
    document.body.style.overflow = "hidden";
    back.querySelector(".x").focus();
  }
  function closeModal() {
    var back = document.getElementById("modal-back");
    back.classList.remove("open");
    document.body.style.overflow = "";
  }

  function estTag() { return '<span class="est-tag" title="Analytical estimate, not a verified figure">Estimate</span>'; }

  function detailFull(o) {
    var h = "";

    // Overview + key facts
    h += '<div class="detail-block"><h4>Overview</h4><p>' + esc(o.overview || "") + '</p>';
    h += '<dl class="kv">';
    if (o.mission)    h += kv("Mission", o.mission);
    if (o.founded)    h += kv("Founded", o.founded);
    if (o.hq)         h += kv("Headquarters", o.hq);
    if (o.funding)    h += kv("Funding model", o.funding);
    if (o.geographic) h += kv("Geographic reach", o.geographic);
    if (o.status)     h += kv("Status", o.status === "active" ? "Active" : o.status);
    h += '</dl></div>';

    // Eligibility & cost
    h += '<div class="detail-block"><h4>Eligibility & Cost</h4>';
    if (o.eligibility) h += '<p>' + esc(o.eligibility) + '</p>';
    if (o.cost && o.cost.detail) h += '<div class="note-card">' + esc(o.cost.detail) + '</div>';
    h += '</div>';

    // Programs
    if (o.programs && o.programs.length) {
      h += '<div class="detail-block"><h4>Program Deep Dive</h4>';
      o.programs.forEach(function (p) {
        h += '<div style="margin-bottom:16px">';
        h += '<h3 style="text-transform:none;letter-spacing:0;color:var(--bone)">' + esc(p.name) + '</h3>';
        if (p.description) h += '<p>' + esc(p.description) + '</p>';
        if (p.serves) h += '<p class="muted" style="font-size:.9rem"><strong>Who it serves:</strong> ' + esc(p.serves) + '</p>';
        if (p.apply && p.apply.length) {
          h += '<p class="muted" style="font-size:.82rem;font-family:var(--f-mono);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">Application process</p>';
          h += '<ol style="margin:0 0 8px;padding-left:20px;font-size:.9rem">';
          p.apply.forEach(function (s) { h += '<li>' + esc(s) + '</li>'; });
          h += '</ol>';
        }
        var meta = [];
        if (p.timeline) meta.push("Timeline: " + p.timeline);
        if (p.capacity) meta.push("Capacity: " + p.capacity);
        if (meta.length) h += '<p class="muted" style="font-size:.84rem">' + esc(meta.join("  ·  ")) + '</p>';
        h += '</div>';
      });
      h += '</div>';
    }

    // Entry barrier
    if (o.barrier) {
      h += '<div class="detail-block"><h4>Entry Barrier Analysis ' + estTag() + '</h4>';
      h += '<p><strong>Level:</strong> ' + esc(o.barrier.level) + '</p>';
      if (o.barrier.reasons) h += '<p class="muted">' + esc(o.barrier.reasons) + '</p>';
      h += '</div>';
    }

    // ROI
    if (o.roi) {
      h += '<div class="detail-block"><h4>ROI Analysis ' + estTag() + '</h4>';
      h += '<dl class="kv">';
      if (o.roi.score)        h += kv("Career impact (1–10)", String(o.roi.score));
      if (o.roi.salaryImpact) h += kv("Salary impact", o.roi.salaryImpact);
      if (o.roi.timeReturn)   h += kv("Return on time", o.roi.timeReturn);
      h += '</dl>';
      if (o.roi.note) h += '<p class="muted" style="font-size:.86rem;margin-top:8px">' + esc(o.roi.note) + '</p>';
      h += '</div>';
    }

    // What nobody tells you
    if (o.nobodyTells && o.nobodyTells.length) {
      h += '<div class="detail-block"><h4>What Nobody Tells You</h4><ul class="tell-list">';
      o.nobodyTells.forEach(function (t) { h += '<li>' + esc(t) + '</li>'; });
      h += '</ul></div>';
    }

    // Fit by rank
    if (o.fitByRank && !o.fitByRank.note) {
      h += '<div class="detail-block"><h4>Officer vs. Enlisted Fit ' + estTag() + '</h4><div class="rank-fit">';
      var roles = [["junior_enlisted","Jr. Enlisted"],["nco","NCO"],["senior_enlisted","Sr. Enlisted"],["junior_officer","Jr. Officer"],["senior_officer","Sr. Officer"]];
      roles.forEach(function (r) {
        if (o.fitByRank[r[0]]) h += '<div class="rf"><div class="role">' + r[1] + '</div><div class="val">' + esc(o.fitByRank[r[0]]) + '</div></div>';
      });
      h += '</div></div>';
    } else if (o.fitByRank && o.fitByRank.note) {
      h += '<div class="detail-block"><h4>Rank Fit</h4><p class="muted">' + esc(o.fitByRank.note) + '</p></div>';
    }

    // Careers
    if (o.careers && o.careers.length) {
      h += '<div class="detail-block"><h4>Career Mapping</h4><div class="taglist">';
      o.careers.forEach(function (c) { h += '<span>' + esc(c) + '</span>'; });
      h += '</div></div>';
    }

    // Community intel
    if (o.community) {
      h += '<div class="detail-block"><h4>Community Intelligence ' + estTag() + '</h4><div class="two-col">';
      h += '<div class="col-praise"><h5>Common praise</h5><ul>';
      (o.community.praise || []).forEach(function (x) { h += '<li>' + esc(x) + '</li>'; });
      h += '</ul></div><div class="col-gripe"><h5>Common complaints</h5><ul>';
      (o.community.complaints || []).forEach(function (x) { h += '<li>' + esc(x) + '</li>'; });
      h += '</ul></div></div>';
      if (o.community.tips && o.community.tips.length) {
        h += '<div style="margin-top:14px"><h5 style="font-family:var(--f-mono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--amber);margin:0 0 8px">Insider tips</h5><ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--muted)">';
        o.community.tips.forEach(function (x) { h += '<li>' + esc(x) + '</li>'; });
        h += '</ul></div>';
      }
      h += '</div>';
    }

    // Sources
    if (o.sources && o.sources.length) {
      h += '<div class="detail-block"><h4>Sources</h4><p class="muted" style="font-size:.82rem">Verified against: ' + o.sources.map(esc).join(" · ") + '</p></div>';
    }

    // compare CTA
    h += '<div class="detail-block" style="text-align:center"><button class="btn btn-ghost" data-cmp>＋ Add to comparison</button></div>';

    return h;
  }

  function detailCrossref(o) {
    var target = ORGS.filter(function (x) { return x.id === o.crossref; })[0];
    var h = '<div class="stub-notice"><div class="big">See the full profile</div>' +
      '<p>' + esc(o.name) + ' is documented in detail inside the verified ' +
      (target ? esc(target.name) : "related") + ' profile — including eligibility, cost, and the analysis you came for.</p></div>';
    h += '<div class="detail-block"><dl class="kv">';
    h += kv("Category", (o.categories || []).map(catLabel).join(", "));
    if (o.url) h += kv("Official site", '<a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.url) + ' ↗</a>');
    h += '</dl></div>';
    if (target) {
      h += '<div class="detail-block" style="text-align:center"><button class="btn btn-primary" data-goto="' + esc(target.id) + '">Open the ' + esc(target.name) + ' profile →</button></div>';
    }
    return h;
  }

  function detailStub(o) {
    var h = '<div class="stub-notice"><div class="big">Research in progress</div>' +
      '<p>This resource has a confirmed listing but its full investigative profile — eligibility specifics, cost breakdown, ROI analysis, and community intelligence — is scheduled for an upcoming research batch.</p></div>';
    h += '<div class="detail-block"><dl class="kv">';
    h += kv("Category", (o.categories || []).map(catLabel).join(", "));
    h += kv("Cost (preliminary)", isFree(o) ? "Free" : (isGI(o) ? "GI Bill eligible" : "Varies"));
    if (o.url) h += kv("Official site", '<a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.url) + ' ↗</a>');
    h += '</dl></div>';
    return h;
  }

  function kv(k, v) { return '<dt>' + esc(k) + '</dt><dd>' + v + '</dd>'; }

  /* ====================================================================
     COMPARE  (session-only, no storage)
     ==================================================================== */
  var compareIds = [];
  function toggleCompare(id) {
    var i = compareIds.indexOf(id);
    if (i > -1) compareIds.splice(i, 1);
    else { if (compareIds.length >= 4) { alert("Compare up to 4 at a time."); return; } compareIds.push(id); }
    renderCompareBar();
  }
  function renderCompareBar() {
    var bar = document.getElementById("compare-bar");
    if (!bar) return;
    var slots = bar.querySelector(".slots");
    slots.innerHTML = "";
    compareIds.forEach(function (id) {
      var o = ORGS.filter(function (x) { return x.id === id; })[0];
      if (!o) return;
      var s = el("span", "slot", esc(o.name) + ' <button aria-label="Remove">×</button>');
      s.querySelector("button").addEventListener("click", function () { toggleCompare(id); });
      slots.appendChild(s);
    });
    bar.classList.toggle("show", compareIds.length > 0);
  }

  function renderComparePage() {
    var host = document.getElementById("compare-out");
    if (!host) return;
    var params = new URLSearchParams(location.search);
    var ids = (params.get("ids") || "").split(",").filter(Boolean);
    var picker = document.getElementById("compare-picker");

    if (picker) {
      ORGS.filter(function (o) { return o.verified; }).forEach(function (o) {
        var c = el("button", "chip", esc(o.name));
        c.type = "button";
        if (ids.indexOf(o.id) > -1) c.classList.add("on");
        c.addEventListener("click", function () {
          var i = ids.indexOf(o.id);
          if (i > -1) ids.splice(i, 1);
          else { if (ids.length >= 4) { alert("Compare up to 4."); return; } ids.push(o.id); }
          c.classList.toggle("on");
          drawCompare(ids, host);
          history.replaceState(null, "", "compare.html?ids=" + ids.join(","));
        });
        picker.appendChild(c);
      });
    }
    drawCompare(ids, host);
  }

  function drawCompare(ids, host) {
    var picks = ids.map(function (id) { return ORGS.filter(function (o) { return o.id === id; })[0]; }).filter(Boolean);
    if (picks.length < 2) {
      host.innerHTML = '<div class="empty"><h3>Pick at least two programs.</h3><p class="muted">Select verified resources above to compare them side by side.</p></div>';
      return;
    }
    var rows = [
      ["Tagline", function (o) { return esc(o.tagline || "—"); }],
      ["Cost", function (o) { return isFree(o) ? "Free" : (isGI(o) ? "GI Bill" : "Varies"); }],
      ["Duration", function (o) { return o.programs && o.programs[0] && o.programs[0].timeline ? esc(o.programs[0].timeline) : "—"; }],
      ["Entry barrier", function (o) { return o.barrier ? esc(o.barrier.level) : "—"; }],
      ["Career impact (1–10)", function (o) { return o.roi && o.roi.score ? o.roi.score : "—"; }],
      ["Salary impact", function (o) { return o.roi && o.roi.salaryImpact ? esc(o.roi.salaryImpact) : "—"; }],
      ["Return on time", function (o) { return o.roi && o.roi.timeReturn ? esc(o.roi.timeReturn) : "—"; }],
      ["Best for", function (o) { return o.fitByRank && o.fitByRank.junior_officer ? esc(o.fitByRank.junior_officer) : "—"; }],
      ["Category", function (o) { return (o.categories || []).map(catLabel).join(", "); }]
    ];
    var h = '<div class="cmp-scroll"><table class="cmp-table"><thead><tr><th>Attribute</th>';
    picks.forEach(function (o) { h += '<th>' + esc(o.name) + '</th>'; });
    h += '</tr></thead><tbody>';
    rows.forEach(function (r) {
      h += '<tr><td>' + r[0] + '</td>';
      picks.forEach(function (o) { h += '<td>' + r[1](o) + '</td>'; });
      h += '</tr>';
    });
    h += '</tbody></table></div>';
    h += '<p class="muted" style="font-size:.82rem;margin-top:14px">' + estTag() + ' Impact, salary, barrier, and "best for" rows are analytical estimates, not verified figures.</p>';
    host.innerHTML = h;
  }

  /* ====================================================================
     RANKINGS
     ==================================================================== */
  var RANKINGS = {
    overall:     { label: "Best Overall",          filter: function () { return true; } },
    tech:        { label: "Best Technology",        filter: function (o) { return hasCat(o, "it"); } },
    transition:  { label: "Best Transition",        filter: function (o) { return hasCat(o, "transition"); } },
    business:    { label: "Best Entrepreneurship",  filter: function (o) { return hasCat(o, "business"); } },
    spouse:      { label: "Best for Spouses",       filter: function (o) { return hasCat(o, "spouse"); } },
    roi:         { label: "Best ROI",               filter: function () { return true; }, sortBy: "roi" }
  };

  function renderRankings() {
    var tabs = document.getElementById("rank-tabs");
    var out = document.getElementById("rank-out");
    if (!tabs || !out) return;

    Object.keys(RANKINGS).forEach(function (k, i) {
      var b = el("button", i === 0 ? "active" : "", RANKINGS[k].label);
      b.addEventListener("click", function () {
        tabs.querySelectorAll("button").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        drawRanking(k, out);
      });
      tabs.appendChild(b);
    });
    drawRanking("overall", out);
  }

  function drawRanking(key, out) {
    var def = RANKINGS[key];
    var list = ORGS.filter(function (o) { return o.verified && o.roi && o.roi.score && def.filter(o); });
    list.sort(function (a, b) { return b.roi.score - a.roi.score; });
    out.innerHTML = "";
    if (!list.length) { out.appendChild(el("div", "empty", "<p class='muted'>No verified programs in this category yet — coming in the next research batch.</p>")); return; }
    var wrap = el("div", "rank-list");
    list.forEach(function (o, i) {
      var row = el("div", "rank-row");
      row.tabIndex = 0;
      row.innerHTML =
        '<div class="pos">' + (i + 1) + '</div>' +
        '<div class="meat"><div class="nm">' + esc(o.name) + '</div><div class="tg">' + esc(o.tagline || "") + '</div></div>' +
        '<div class="sc">' + o.roi.score + '<span class="muted" style="font-size:.7rem">/10</span></div>';
      row.addEventListener("click", function () { openModal(o); });
      row.addEventListener("keydown", function (e) { if (e.key === "Enter") openModal(o); });
      wrap.appendChild(row);
    });
    out.appendChild(wrap);
    var note = el("p", "muted center", estTag() + " Rankings use estimated career-impact scores and will refine as more profiles are verified.");
    note.style.fontSize = ".82rem"; note.style.marginTop = "18px";
    out.appendChild(note);
  }

  /* ====================================================================
     PATHWAYS
     ==================================================================== */
  function renderPathways() {
    var host = document.getElementById("pathways");
    if (!host) return;
    var paths = [
      { title: "Officer → Corporate Program Management", nodes: ["Navy Officer", "FourBlock VCRP", "HOH Corporate Fellowship", "Fortune 500 PM role"], why: "Leverages leadership credibility; the fellowship doubles as a 12-week interview while you keep military pay." },
      { title: "Tech Pivot (no experience) → Cloud", nodes: ["Service member", "MSSA (SkillBridge)", "AWS cert", "Cloud Administrator"], why: "Fully-funded, full-time training during terminal leave; cloud certs carry weight on day one." },
      { title: "Cleared Veteran → GovCloud Engineering", nodes: ["Cleared veteran", "AWS re/Start", "AWS cert (VA-reimbursed)", "Defense-contractor cloud role"], why: "An active clearance plus an AWS cert beats more-experienced uncleared candidates for GovCloud work." },
      { title: "GI Bill Exhausted → Funded Bootcamp", nodes: ["Veteran (GI Bill spent)", "VET TEC 2.0", "Cyber/SWE bootcamp", "Entry tech role"], why: "VET TEC 2.0 funds training with no entitlement charge once your GI Bill is gone — and pays a housing allowance." },
      { title: "Military Spouse → Portable Career", nodes: ["Spouse (eligible pay grade)", "MyCAA $4k", "Certification/license", "PCS-proof job"], why: "Targets credentials that survive a move; use it before the sponsor promotes out of the window." },
      { title: "Free Credentialing → Project Management", nodes: ["Officer (180 days out)", "IVMF Onward to Opportunity", "PMP certification", "Program Manager"], why: "O2O covers the exam fee during transition and makes you a Syracuse alum; PMP formalizes officer experience." },
      { title: "Founder → Scaling Company", nodes: ["Veteran with an idea", "Boots to Business (TAP)", "IVMF Military Founders Lab", "CEOcircle as you scale"], why: "Layers SBA training, a structured incubator, and a peer mastermind — without giving up equity or taking on a program fee." }
    ];
    paths.forEach(function (p) {
      var div = el("div", "pathway");
      var flow = '<div class="flow">';
      p.nodes.forEach(function (n, i) {
        var cls = i === 0 ? "node start" : (i === p.nodes.length - 1 ? "node end" : "node");
        flow += '<span class="' + cls + '">' + esc(n) + '</span>';
        if (i < p.nodes.length - 1) flow += '<span class="arrow">→</span>';
      });
      flow += '</div>';
      div.innerHTML = '<h3>' + esc(p.title) + '</h3>' + flow +
        '<p class="muted" style="margin-top:14px;font-size:.9rem"><strong style="color:var(--bone)">Why it works:</strong> ' + esc(p.why) + '</p>';
      host.appendChild(div);
    });
  }

  /* ====================================================================
     BOOT
     ==================================================================== */
  function boot() {
    // nav toggle
    var tog = document.querySelector(".nav-toggle");
    if (tog) tog.addEventListener("click", function () { document.querySelector(".nav").classList.toggle("open"); });
    // close modal on backdrop / Esc
    var back = document.getElementById("modal-back");
    if (back) {
      back.addEventListener("click", function (e) { if (e.target === back) closeModal(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
    }

    renderHome();
    renderDirectory();
    renderComparePage();
    renderRankings();
    renderPathways();
    renderCompareBar();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  // expose for inline handlers if needed
  window.VetPortal = { openModal: openModal, toggleCompare: toggleCompare };
  window.__cmpIds = function () { return compareIds.slice(); };
})();
