<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sharifarm — Bio & AgriTech for Resilient Farming</title>
  <meta name="description" content="Sharifarm blends biology and technology to deliver water-saving devices, algae-integrated cooling, PFAS sensing & remediation, and climate-resilient planning." />
  <meta name="theme-color" content="#0f766e" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="icon" href="assets/favicon.png" />
  <meta property="og:title" content="Sharifarm — Bio & AgriTech for Resilient Farming" />
  <meta property="og:description" content="Smart, sustainable solutions for water, food, and climate resilience." />
  <meta property="og:image" content="assets/og-image.jpg" />
  <meta property="og:type" content="website" />
  <style>
    :root{
      --bg:#0b1110;
      --ink:#0f172a;
      --muted:#475569;
      --paper:#ffffff;
      --brand:#0f766e;     /* teal */
      --brand-2:#22c55e;   /* green */
      --accent:#94a3b8;    /* slate */
      --ring:rgba(34,197,94,.35);
      --shadow:0 10px 30px rgba(15,118,110,.15);
      --radius:18px;
      --max:1200px;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0b1a1a;background:#f7fbfa}
    a{color:var(--brand);text-decoration:none}
    img{max-width:100%;height:auto}
    .container{max-width:var(--max);margin-inline:auto;padding:24px}
    /* Header */
    .skip{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
    .skip:focus{left:16px;top:16px;width:auto;height:auto;background:#fff;padding:8px 12px;border-radius:8px;box-shadow:var(--shadow)}
    header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.8);backdrop-filter:saturate(180%) blur(10px);border-bottom:1px solid #e2e8f0}
    .nav{display:flex;align-items:center;justify-content:space-between;gap:12px}
    .brand{display:flex;align-items:center;gap:12px}
    .brand img{width:40px;height:40px;border-radius:10px;object-fit:contain;background:#fff;border:1px solid #e2e8f0}
    .brand .title{font-weight:800;letter-spacing:.2px}
    .nav a{font-weight:600;color:#0f172a}
    .menu{display:flex;gap:18px;align-items:center}
    .cta{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(90deg,var(--brand),var(--brand-2));color:#fff;padding:10px 16px;border-radius:999px;box-shadow:var(--shadow)}
    .burger{display:none;background:none;border:0;padding:10px;border-radius:10px}
    .burger:focus{outline:2px solid var(--ring)}
    @media (max-width:840px){
      .menu{display:none}
      .menu.open{display:flex;flex-direction:column;position:absolute;left:0;right:0;top:64px;background:#ffffff;border-bottom:1px solid #e2e8f0;padding:16px}
      .burger{display:block}
    }
    /* Hero */
    .hero{position:relative;isolation:isolate}
    .hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center}
    .badge{display:inline-flex;gap:8px;align-items:center;background:#ecfeff;border:1px solid #a7f3d0;color:#065f46;padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px}
    .headline{font-size:clamp(32px,5vw,52px);line-height:1.05;margin:14px 0 10px}
    .sub{font-size:18px;color:#334155;max-width:60ch}
    .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
    .btn{display:inline-flex;align-items:center;gap:10px;border-radius:999px;padding:12px 16px;border:1px solid #0ea5a0;color:#065f46;background:#ffffff}
    .btn:hover{background:#f0fdfa}
    .card-hero{background:#ffffff;border:1px solid #e2e8f0;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}
    .stat{background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:12px;text-align:center}
    .stat h3{margin:4px 0;font-size:24px}
    .stat p{margin:0;color:#64748b;font-size:12px}
    @media (max-width:940px){
      .hero .wrap{grid-template-columns:1fr}
      .stats{grid-template-columns:repeat(2,1fr)}
    }
    /* Sections */
    section{padding:64px 0;border-top:1px solid #e2e8f0;background:#fff}
    section:nth-of-type(even){background:#f8fafc}
    .section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
    .section-title h2{margin:0;font-size:28px}
    .grid{display:grid;gap:18px}
    .grid.cols-3{grid-template-columns:repeat(3,1fr)}
    .grid.cols-2{grid-template-columns:repeat(2,1fr)}
    @media (max-width:900px){.grid.cols-3,.grid.cols-2{grid-template-columns:1fr}}
    .card{background:#ffffff;border:1px solid #e2e8f0;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}
    .icon{width:26px;height:26px}
    .pill{display:inline-block;font-size:12px;background:#ecfeff;border:1px solid #a7f3d0;color:#065f46;border-radius:999px;padding:4px 10px;margin-right:6px}
    ul.clean{margin:10px 0 0 18px;color:#475569}
    /* Contact */
    form{display:grid;gap:12px}
    input,textarea{width:100%;padding:12px;border-radius:12px;border:1px solid #cbd5e1;font:inherit}
    input:focus,textarea:focus{outline:2px solid var(--ring);border-color:#94a3b8}
    textarea{min-height:120px;resize:vertical}
    /* Footer */
    footer{background:#071412;color:#cbd5e1}
    .foot{display:grid;gap:18px;grid-template-columns:2fr 1fr 1fr 1fr}
    .foot a{color:#cbd5e1}
    .copyright{border-top:1px solid rgba(203,213,225,.2);margin-top:18px;padding-top:18px;color:#94a3b8}
    @media (max-width:900px){.foot{grid-template-columns:1fr 1fr}}
  </style>

  <!-- Structured data -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Sharifarm",
    "url":"https://www.sharifarm.com",
    "logo":"https://www.sharifarm.com/assets/logo.png",
    "sameAs":["https://www.linkedin.com/company/sharifarm"]
  }
  </script>
</head>
<body>
  <a href="#main" class="skip">Skip to content</a>

  <!-- Header -->
  <header>
    <div class="container nav" role="navigation" aria-label="Primary">
      <div class="brand">
        <img src="assets/logo.png" alt="Sharifarm logo" />
        <span class="title">Sharifarm</span>
      </div>
      <nav class="menu" id="menu">
        <a href="#solutions">Solutions</a>
        <a href="#research">Research</a>
        <a href="#about">About</a>
        <a href="#contact" class="cta">Contact</a>
      </nav>
      <button class="burger" aria-label="Toggle menu" aria-controls="menu" aria-expanded="false" id="burger">
        <!-- hamburger icon -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </header>

  <main id="main">
    <!-- Hero -->
    <section class="hero" aria-label="Intro">
      <div class="container wrap">
        <div>
          <span class="badge">
            <!-- leaf icon -->
            <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 20c10-1 14-5 16-16-11 2-15 6-16 16Z" stroke="#0f766e" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Bio + AgriTech
          </span>
          <h1 class="headline">Smart, sustainable solutions for water, food, and climate resilience.</h1>
          <p class="sub">Sharifarm blends biology and engineering to reduce water use, cool facilities, and detect & remediate contaminants—helping farms and coastal operations thrive under climate stress.</p>
          <div class="actions">
            <a class="cta" href="#contact">Get in touch</a>
            <a class="btn" href="#solutions">Explore solutions</a>
          </div>
          <div class="stats" aria-label="Impact metrics">
            <div class="stat"><h3>30%+</h3><p>Cooling water saved*</p></div>
            <div class="stat"><h3>15%+</h3><p>Energy reduction*</p></div>
            <div class="stat"><h3>&lt; ppb</h3><p>PFAS sensing targets</p></div>
            <div class="stat"><h3>4</h3><p>Active pilot lines</p></div>
          </div>
          <p style="color:#64748b;font-size:12px;margin-top:4px">*Early pilot estimates; results vary by site.</p>
        </div>
        <div class="card-hero">
          <img src="assets/hero-image.jpg" alt="Modern greenhouse and aquaculture tanks with integrated algae panels (illustrative)" />
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section id="solutions" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-title">
          <h2 id="solutions-title">Solutions</h2>
          <span class="pill">R&D + Deployment</span>
        </div>

        <div class="grid cols-3">
          <article class="card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="vertical-align:-4px;margin-right:6px">
                <circle cx="12" cy="12" r="9" stroke="#22c55e" stroke-width="2"/>
                <path d="M8 12h8M12 8v8" stroke="#0f766e" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Water-Saving Device
            </h3>
            <p>Portable pre-shower capture device for homes, gyms, and field housing—simple install, fast ROI.</p>
            <ul class="clean">
              <li>Elastic mount + food-grade bag</li>
              <li>5–10 L captured per use</li>
              <li>Reuse for plants/cleanup</li>
            </ul>
          </article>

          <article class="card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="vertical-align:-4px;margin-right:6px">
                <path d="M3 12c6-10 12-10 18 0-6 10-12 10-18 0Z" stroke="#0f766e" stroke-width="2"/>
                <path d="M8 12a4 4 0 1 0 8 0" stroke="#22c55e" stroke-width="2"/>
              </svg>
              Algae-Integrated Cooling
            </h3>
            <p>Photobioreactor roofing/panels for aquaculture & greenhouses that provide shading, cooling, and biomass.</p>
            <ul class="clean">
              <li>Thermal + light management</li>
              <li>Biomass for feed/bioproducts</li>
              <li>Retrofit-friendly kits</li>
            </ul>
          </article>

          <article class="card">
            <h3>
              <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="vertical-align:-4px;margin-right:6px">
                <rect x="3" y="4" width="18" height="14" rx="3" stroke="#0f766e" stroke-width="2"/>
                <path d="M7 9h10M7 13h6" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
              </svg>
              PFAS Sensing & Remediation
            </h3>
            <p>Chip-size fluorescence sensors and nano-enabled sorbents for rapid screening and treatment.</p>
            <ul class="clean">
              <li>Field-ready cartridges</li>
              <li>&lt; minutes analysis</li>
              <li>Modular remediation skids</li>
            </ul>
          </article>
        </div>

        <div class="card" style="margin-top:18px">
          <strong>Also:</strong> Climate risk analytics & planning (IN-CORE / ClimRR), nature-based solutions design, and training for agencies & operators.
        </div>
      </div>
    </section>

    <!-- Research & News -->
    <section id="research" aria-labelledby="research-title">
      <div class="container">
        <div class="section-title">
          <h2 id="research-title">Research & News</h2>
          <a class="btn" href="#">View publications</a>
        </div>
        <div class="grid cols-3">
          <article class="card">
            <p class="pill">2025</p>
            <h3>Triadic Interaction of Nanoparticles, PFAS & Root Exudates</h3>
            <p>Surface-chemistry approach for water quality innovation using hydroponic testbeds.</p>
          </article>
          <article class="card">
            <p class="pill">Pilot</p>
            <h3>Algae PBR Roofing for Coastal Facilities</h3>
            <p>Thermal/light management with measurable water savings and productivity gains.</p>
          </article>
          <article class="card">
            <p class="pill">Toolkit</p>
            <h3>Community Resilience Planning</h3>
            <p>Open workflows that integrate climate scenarios, infrastructure risk, and NbS portfolios.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" aria-labelledby="about-title">
      <div class="container grid cols-2">
        <div>
          <div class="section-title"><h2 id="about-title">About Sharifarm</h2></div>
          <p>We are a science-driven team translating lab innovations into practical tools for farms, aquaculture, and cities. Our approach combines co-production with stakeholders, rigorous testing, and design for maintainability.</p>
          <ul class="clean">
            <li><strong>Mission:</strong> Enable resilient, low-footprint food and water systems.</li>
            <li><strong>Values:</strong> Evidence, openness, and community partnership.</li>
            <li><strong>HQ:</strong> El Paso, TX · Projects across the US & abroad.</li>
          </ul>
        </div>
        <div class="card">
          <img src="assets/about.jpg" alt="Team testing sensors and algae panels in a greenhouse (illustrative)" />
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" aria-labelledby="contact-title">
      <div class="container">
        <div class="section-title">
          <h2 id="contact-title">Contact</h2>
          <p style="margin:0;color:#475569">Tell us about your site or pilot idea.</p>
        </div>
        <!-- Use your Formspree/Netlify endpoint or a mailto: fallback -->
        <form action="mailto:hello@sharifarm.com" method="post" enctype="text/plain">
          <div class="grid cols-2">
            <div>
              <label for="name">Name</label>
              <input id="name" name="name" placeholder="Your name" required>
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" type="email" name="email" placeholder="you@company.com" required>
            </div>
          </div>
          <div>
            <label for="msg">Message</label>
            <textarea id="msg" name="message" placeholder="What challenge are you tackling?"></textarea>
          </div>
          <button class="cta" type="submit">Send message</button>
        </form>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="foot">
        <div>
          <div class="brand">
            <img src="assets/logo.png" alt="" />
            <span class="title" style="color:#e2e8f0">Sharifarm</span>
          </div>
          <p style="margin-top:10px;color:#9fb3b7">Bio & AgriTech for resilient farming and water quality.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#about">About</a><br/>
          <a href="#research">Research</a><br/>
          <a href="#solutions">Solutions</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Publications</a><br/>
          <a href="#">One-pager (PDF)</a><br/>
          <a href="#">Press kit</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@sharifarm.com">hello@sharifarm.com</a><br/>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div class="copyright">© <span id="year"></span> Sharifarm. All rights reserved.</div>
    </div>
  </footer>

  <script>
    // Mobile nav toggle
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
