<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SEO + AI Strategy — HomeFurnitureandPatio.com</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #0f1117; color: #e2e8f0; padding: 24px; min-height: 100vh; }
  h1 { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 4px; }
  .subtitle { font-size: 0.82rem; color: #94a3b8; margin-bottom: 24px; }

  .tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
  .tab { padding: 8px 16px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; cursor: pointer; border: 1.5px solid transparent; transition: all .2s; user-select: none; }
  .tab.active { background: #6366f1; color: #fff; border-color: #6366f1; }
  .tab:not(.active) { background: #1e2130; color: #94a3b8; border-color: #2d3148; }
  .tab:hover:not(.active) { border-color: #6366f1; color: #c7d2fe; }

  .panel { display: none; }
  .panel.active { display: block; }

  /* Overview */
  .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }
  .summary-card { background: #1e2130; border-radius: 12px; padding: 18px; text-align: center; }
  .summary-card .num { font-size: 2.4rem; font-weight: 800; color: #a5b4fc; }
  .summary-card .lbl { font-size: 0.74rem; color: #64748b; margin-top: 4px; }

  .progress-box { background: #1e2130; border-radius: 12px; padding: 18px; margin-bottom: 16px; }
  .progress-box h3 { font-size: 0.85rem; font-weight: 700; color: #a5b4fc; margin-bottom: 14px; }
  .progress-row { margin-bottom: 12px; }
  .progress-label { display: flex; justify-content: space-between; font-size: 0.76rem; color: #94a3b8; margin-bottom: 5px; }
  .progress-bar { height: 6px; background: #0f1117; border-radius: 4px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 4px; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .info-card { background: #1e2130; border-radius: 12px; padding: 16px; }
  .info-card h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; }
  .info-card h4.red { color: #f87171; }
  .info-card h4.green { color: #4ade80; }
  .list-item { font-size: 0.76rem; color: #94a3b8; padding: 4px 0; border-bottom: 1px solid #2d3148; display: flex; align-items: flex-start; gap: 7px; }
  .list-item:last-child { border: none; }
  .list-item::before { content: '→'; color: #6366f1; font-weight: bold; flex-shrink: 0; margin-top: 1px; }

  /* Phases */
  .phase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
  .phase-card { background: #1e2130; border-radius: 12px; padding: 18px; border-top: 4px solid; }
  .phase-card.p1 { border-color: #ef4444; }
  .phase-card.p2 { border-color: #f59e0b; }
  .phase-card.p3 { border-color: #22c55e; }
  .phase-card h3 { font-size: 0.9rem; font-weight: 700; margin-bottom: 4px; }
  .phase-card .days { font-size: 0.72rem; color: #94a3b8; margin-bottom: 6px; }
  .phase-card .goal { font-size: 0.76rem; color: #cbd5e1; margin-bottom: 12px; font-style: italic; padding-bottom: 10px; border-bottom: 1px solid #2d3148; }

  .deliverables-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .del-card { background: #0f1117; border-radius: 8px; padding: 14px; text-align: center; }
  .del-card .big { font-size: 1.8rem; font-weight: 800; }
  .del-card .sm { font-size: 0.7rem; color: #64748b; margin-top: 3px; }

  /* Tiers */
  .tier-section { margin-bottom: 20px; }
  .tier-header { padding: 10px 16px; border-radius: 8px 8px 0 0; font-size: 0.82rem; font-weight: 700; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #1a1d2e; color: #94a3b8; font-size: 0.72rem; font-weight: 600; padding: 8px 12px; text-align: left; border-bottom: 1px solid #2d3148; }
  td { padding: 9px 12px; font-size: 0.76rem; border-bottom: 1px solid #1e2130; vertical-align: top; color: #cbd5e1; }
  tr:hover td { background: #1e2130; }
  .badge-owner { background: #1e2130; color: #818cf8; padding: 2px 8px; border-radius: 8px; font-size: 0.69rem; font-weight: 700; white-space: nowrap; }
  .badge-verify { background: #0f1117; color: #64748b; padding: 2px 8px; border-radius: 8px; font-size: 0.69rem; }

  /* KPIs */
  .kpi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .kpi-card { background: #1e2130; border-radius: 12px; padding: 16px; border-left: 3px solid #6366f1; }
  .kpi-card h4 { font-size: 0.82rem; font-weight: 700; color: #a5b4fc; margin-bottom: 10px; }
  .kpi-item { font-size: 0.76rem; color: #94a3b8; padding: 4px 0; border-bottom: 1px solid #1a1d2e; display: flex; gap: 7px; }
  .kpi-item:last-child { border: none; }
  .kpi-item::before { content: '▸'; color: #6366f1; flex-shrink: 0; }

  @media (max-width: 700px) {
    .phase-grid, .summary-grid, .two-col, .kpi-grid { grid-template-columns: 1fr; }
    .deliverables-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
</head>
<body>

<h1>🏡 HomeFurnitureandPatio.com</h1>
<p class="subtitle">SEO + AI Optimization Strategy &nbsp;·&nbsp; 90-Day Execution Plan &nbsp;·&nbsp; 6 Priority Tiers</p>

<div class="tabs">
  <div class="tab active" onclick="show('overview', this)">📊 Overview</div>
  <div class="tab" onclick="show('phases', this)">🗓 90-Day Plan</div>
  <div class="tab" onclick="show('tiers', this)">⚙️ Task Tiers</div>
  <div class="tab" onclick="show('kpis', this)">📈 KPIs</div>
</div>

<!-- ===== OVERVIEW ===== -->
<div class="panel active" id="overview">
  <div class="summary-grid">
    <div class="summary-card"><div class="num">90</div><div class="lbl">Day Rollout</div></div>
    <div class="summary-card"><div class="num">6</div><div class="lbl">Priority Tiers</div></div>
    <div class="summary-card"><div class="num">10</div><div class="lbl">Core Strategies</div></div>
  </div>

  <div class="progress-box">
    <h3>Strategy Priority Weighting</h3>
    <div class="progress-row">
      <div class="progress-label"><span>Technical SEO Foundation</span><span style="color:#ef4444">Critical / Immediate</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:100%;background:#ef4444"></div></div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>Category Architecture</span><span style="color:#f59e0b">Biggest Lever</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:88%;background:#f59e0b"></div></div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>Product Page Optimization</span><span style="color:#f59e0b">High ROI</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:80%;background:#f59e0b"></div></div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>Content Strategy (Guides + Collections)</span><span style="color:#22c55e">Growth</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:70%;background:#22c55e"></div></div>
    </div>
    <div class="progress-row">
      <div class="progress-label"><span>AI Optimization Layer</span><span style="color:#818cf8">Competitive Edge</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:65%;background:#818cf8"></div></div>
    </div>
    <div class="progress-row" style="margin-bottom:0">
      <div class="progress-label"><span>Off-Page Authority Building</span><span style="color:#64748b">Supporting</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:40%;background:#475569"></div></div>
    </div>
  </div>

  <div class="two-col">
    <div class="info-card">
      <h4 class="red">⚠️ Critical Issues to Fix</h4>
      <div class="list-item">Heavy homepage — no lazy loading or WebP images</div>
      <div class="list-item">Magento 1 outputs no modern schema markup</div>
      <div class="list-item">Duplicate URLs from layered navigation/filters</div>
      <div class="list-item">Render-blocking JS/CSS degrading Core Web Vitals</div>
      <div class="list-item">Category pages lack AI-readable structured content</div>
      <div class="list-item">Thin or missing product descriptions for top SKUs</div>
    </div>
    <div class="info-card">
      <h4 class="green">✅ Goals Achieved by Day 90</h4>
      <div class="list-item">Fast, technically clean Magento 1 site</div>
      <div class="list-item">AI-optimized category + product pages</div>
      <div class="list-item">Full buying guide + style guide library</div>
      <div class="list-item">Collections pages that rank and convert</div>
      <div class="list-item">Site architecture AI engines can cite</div>
      <div class="list-item">Measurable organic traffic + revenue lift</div>
    </div>
  </div>
</div>

<!-- ===== PHASES ===== -->
<div class="panel" id="phases">
  <div class="phase-grid">
    <div class="phase-card p1">
      <h3>🔴 Phase 1</h3>
      <div class="days">Days 1–30</div>
      <div class="goal">Technical Foundation + Index Cleanup</div>
      <div class="list-item">Convert all images → WebP</div>
      <div class="list-item">Implement lazy loading on product grids</div>
      <div class="list-item">Defer/minify JS &amp; CSS</div>
      <div class="list-item">Confirm HTTP/2 enabled</div>
      <div class="list-item">Canonical tags on all pages</div>
      <div class="list-item">Noindex layered nav / filter URLs</div>
      <div class="list-item">Deploy Product + Breadcrumb schema</div>
      <div class="list-item">Fix sitemap (remove 404s, dupes)</div>
    </div>
    <div class="phase-card p2">
      <h3>🟠 Phase 2</h3>
      <div class="days">Days 31–60</div>
      <div class="goal">Category &amp; Product Optimization</div>
      <div class="list-item">Rewrite top 50 category pages</div>
      <div class="list-item">300–600 words + FAQ per category</div>
      <div class="list-item">Add brand + materials blocks</div>
      <div class="list-item">Add comparison tables (top 3–5 products)</div>
      <div class="list-item">Rewrite top 300 product pages</div>
      <div class="list-item">Lifestyle images + alt text on all</div>
      <div class="list-item">Internal linking framework</div>
    </div>
    <div class="phase-card p3">
      <h3>🟢 Phase 3</h3>
      <div class="days">Days 61–90</div>
      <div class="goal">Content Expansion + AI Optimization</div>
      <div class="list-item">10 Buying Guides (800–1,500 words)</div>
      <div class="list-item">5 Style Guides (Scandinavian, Mid-Century…)</div>
      <div class="list-item">10 Collections Pages (curated product sets)</div>
      <div class="list-item">AI-friendly XML sitemap</div>
      <div class="list-item">Attribute enrichment (material, dimensions…)</div>
      <div class="list-item">Auto-generated metadata + FAQs</div>
    </div>
  </div>

  <div class="progress-box">
    <h3>Content Deliverables by End of Day 90</h3>
    <div class="deliverables-grid">
      <div class="del-card"><div class="big" style="color:#ef4444">50</div><div class="sm">Category Pages Rewritten</div></div>
      <div class="del-card"><div class="big" style="color:#f59e0b">300</div><div class="sm">Product Pages Rewritten</div></div>
      <div class="del-card"><div class="big" style="color:#22c55e">10</div><div class="sm">Buying Guides Created</div></div>
      <div class="del-card"><div class="big" style="color:#818cf8">25</div><div class="sm">Total New Content Assets</div></div>
    </div>
  </div>
</div>

<!-- ===== TIERS ===== -->
<div class="panel" id="tiers">

  <div class="tier-section">
    <div class="tier-header" style="background:#450a0a;color:#fca5a5;">🔴 Tier 1 — Critical Technical SEO (Immediate)</div>
    <table>
      <tr><th>Task</th><th>Owner</th><th>Verification Tool</th></tr>
      <tr><td>Convert all images → WebP (homepage, category, product)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Lighthouse / GTmetrix</span></td></tr>
      <tr><td>Implement lazy loading on product grids &amp; testimonial blocks</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Chrome DevTools</span></td></tr>
      <tr><td>Enable HTTP/2 on server</td><td><span class="badge-owner">Hosting</span></td><td><span class="badge-verify">GTmetrix</span></td></tr>
      <tr><td>Canonical tags on all product and category pages</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Screaming Frog</span></td></tr>
      <tr><td>Noindex layered navigation / filter URLs</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Robots.txt + Meta</span></td></tr>
      <tr><td>Fix sitemap — remove redirects, 404s, and duplicates</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">GSC Sitemap Report</span></td></tr>
      <tr><td>Minify + defer JS/CSS (Magento render-blocking)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Lighthouse</span></td></tr>
    </table>
  </div>

  <div class="tier-section">
    <div class="tier-header" style="background:#431407;color:#fdba74;">🟠 Tier 2 — Structured Data + Crawl Optimization</div>
    <table>
      <tr><th>Task</th><th>Owner</th><th>Verification Tool</th></tr>
      <tr><td>Add Product Schema (price, availability, brand, SKU)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Rich Results Test</span></td></tr>
      <tr><td>Add Breadcrumb Schema</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">GSC Enhancements</span></td></tr>
      <tr><td>Add Organization Schema (logo, contact, social)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Schema Validator</span></td></tr>
      <tr><td>Add FAQ Schema for category and buying guide pages</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">Rich Results Test</span></td></tr>
      <tr><td>Add Review Schema (if reviews exist)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">GSC Enhancements</span></td></tr>
    </table>
  </div>

  <div class="tier-section">
    <div class="tier-header" style="background:#172554;color:#93c5fd;">🔵 Tier 3 — Category &amp; Product Content Optimization</div>
    <table>
      <tr><th>Task</th><th>Owner</th><th>Verification Tool</th></tr>
      <tr><td>Rewrite top 50 category pages (300–600 words + FAQs + comparison tables)</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">GSC Performance</span></td></tr>
      <tr><td>Rewrite top 300 product pages (material, dimensions, use cases, care)</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">GSC Performance</span></td></tr>
      <tr><td>Add internal links (category → subcategory, product → guide)</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">Screaming Frog</span></td></tr>
      <tr><td>Add lifestyle imagery (contextual, AI-preferred)</td><td><span class="badge-owner">Design</span></td><td><span class="badge-verify">Visual QA</span></td></tr>
      <tr><td>Add descriptive, keyword-rich alt text to all images</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Screaming Frog</span></td></tr>
    </table>
  </div>

  <div class="tier-section">
    <div class="tier-header" style="background:#1e1b4b;color:#c4b5fd;">🧠 Tier 4 — AI Optimization Layer</div>
    <table>
      <tr><th>Task</th><th>Owner</th><th>Verification Tool</th></tr>
      <tr><td>Build AI-friendly sitemap (categories, guides, collections, FAQs)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">XML Validation</span></td></tr>
      <tr><td>Attribute enrichment (material, finish, dimensions, indoor/outdoor)</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">Magento Attribute Export</span></td></tr>
      <tr><td>Auto-generate meta titles and descriptions for all pages</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">GSC CTR Improvement</span></td></tr>
      <tr><td>Auto-generate FAQs for all major categories and guides</td><td><span class="badge-owner">Content</span></td><td><span class="badge-verify">Schema Validation</span></td></tr>
    </table>
  </div>

  <div class="tier-section">
    <div class="tier-header" style="background:#052e16;color:#86efac;">💡 Tier 5 — Content Expansion (Authority Building)</div>
    <table>
      <tr><th>Task</th><th>Content Examples</th><th>Verification</th></tr>
      <tr><td>10 Buying Guides (800–1,500 words, schema, FAQs, internal links)</td><td style="color:#64748b;font-size:0.72rem">Outdoor Dining Size Guide, Best Materials for Coastal Homes, Patio Heater Guide…</td><td><span class="badge-verify">GSC Long-tail Queries</span></td></tr>
      <tr><td>5 Style Guides (600–1,200 words, mood boards, product links)</td><td style="color:#64748b;font-size:0.72rem">Scandinavian, Mid-Century, Industrial, Coastal Modern, Urban Loft</td><td><span class="badge-verify">Organic Traffic Lift</span></td></tr>
      <tr><td>10 Collections Pages (400–600 words, curated sets, comparison tables)</td><td style="color:#64748b;font-size:0.72rem">Small Space Outdoor, Commercial-Grade Patio Sets, Fire Pit Seating…</td><td><span class="badge-verify">Conversion Rate</span></td></tr>
    </table>
  </div>

  <div class="tier-section">
    <div class="tier-header" style="background:#1e2130;color:#e2e8f0;">🧩 Tier 6 — Conversion &amp; UX Enhancements</div>
    <table>
      <tr><th>Task</th><th>Owner</th><th>Verification Tool</th></tr>
      <tr><td>Add trust blocks (shipping timelines, returns, price guarantee, testimonials)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">UX Audit</span></td></tr>
      <tr><td>Add filters (material, color, price, dimensions, brand)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">Magento QA</span></td></tr>
      <tr><td>Add "Shop by Room" navigation (Living, Dining, Office, Outdoor)</td><td><span class="badge-owner">Dev</span></td><td><span class="badge-verify">UX Audit</span></td></tr>
    </table>
  </div>
</div>

<!-- ===== KPIs ===== -->
<div class="panel" id="kpis">
  <div class="kpi-grid">
    <div class="kpi-card" style="border-color:#ef4444;">
      <h4>🔴 Phase 1 KPIs — Technical</h4>
      <div class="kpi-item">Homepage load time &lt; 2.5 seconds</div>
      <div class="kpi-item">LCP &lt; 2.5s, CLS &lt; 0.1 (Core Web Vitals)</div>
      <div class="kpi-item">0 structured data errors in Google Search Console</div>
      <div class="kpi-item">Rich results appearing for product pages</div>
      <div class="kpi-item">20–40% reduction in duplicate / unindexed URLs (GSC)</div>
    </div>
    <div class="kpi-card" style="border-color:#f59e0b;">
      <h4>🟠 Phase 2 KPIs — Category &amp; Product</h4>
      <div class="kpi-item">+20–40% increase in category page impressions</div>
      <div class="kpi-item">+10–20% increase in category page conversions</div>
      <div class="kpi-item">+15–25% increase in product organic traffic</div>
      <div class="kpi-item">+10–15% increase in add-to-cart rate</div>
      <div class="kpi-item">+20% increase in average pages per session</div>
    </div>
    <div class="kpi-card" style="border-color:#22c55e;">
      <h4>🟢 Phase 3 KPIs — Content &amp; AI</h4>
      <div class="kpi-item">Buying guides rank for long-tail keyword queries</div>
      <div class="kpi-item">AI engines cite your content (Perplexity, Gemini, Bing)</div>
      <div class="kpi-item">+15–25% traffic to style-related queries</div>
      <div class="kpi-item">+20–40% long-tail conversions from collections pages</div>
      <div class="kpi-item">+20–30% traffic increase from AI-driven sources</div>
    </div>
    <div class="kpi-card" style="border-color:#a855f7;">
      <h4>📅 Ongoing Tracking Cadence</h4>
      <div class="kpi-item"><strong style="color:#e2e8f0">Weekly:</strong>&nbsp; PageSpeed score, indexed URL count</div>
      <div class="kpi-item"><strong style="color:#e2e8f0">Weekly:</strong>&nbsp; GSC impressions + CTR per category</div>
      <div class="kpi-item"><strong style="color:#e2e8f0">Weekly:</strong>&nbsp; Conversion rate per product type</div>
      <div class="kpi-item"><strong style="color:#e2e8f0">Monthly:</strong>&nbsp; Overall organic traffic growth</div>
      <div class="kpi-item"><strong style="color:#e2e8f0">Monthly:</strong>&nbsp; AI search citations (Perplexity, Gemini, Bing)</div>
      <div class="kpi-item"><strong style="color:#e2e8f0">Monthly:</strong>&nbsp; Revenue attributed to organic sessions</div>
    </div>
  </div>
</div>

<script>
  function show(id, el) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
  }
</script>
</body>
</html>
