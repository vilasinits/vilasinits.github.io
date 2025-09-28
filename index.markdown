---
layout: home
---

<style>
  /* Home full width */
  .home .page-content, .home .page-content .wrapper { max-width:100% !important; margin:0 !important; padding:0 !important; }

  :root{
    --bg:#0e1525; --ink:#e9eef5; --muted:#a7b3c5; --card:#0f1b2e; --brand:#4db8ff; --ring:rgba(77,184,255,.28);
    --shadow:0 10px 30px rgba(0,0,0,.25); --gap:28px;
  }
  @media (prefers-color-scheme: light){
    :root{ --bg:#f7fbff; --ink:#0f172a; --muted:#475569; --card:#ffffff; --shadow:0 8px 24px rgba(2,8,23,.06); }
  }
  body{ background: linear-gradient(180deg,#111827,var(--bg)); }

  .container{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; }
  .about-grid{ display:grid; grid-template-columns: 320px 1fr; gap: var(--gap); align-items:start; }
  @media (max-width: 900px){ .about-grid{ grid-template-columns:1fr; } }

  /* Left sidebar */
  .sidebar{ position:sticky; top:24px; display:flex; flex-direction:column; gap:18px; }
  .avatar{ width:100%; aspect-ratio:1/1; border-radius:16px; object-fit:cover; border:3px solid rgba(255,255,255,.12); box-shadow:var(--shadow); }
  .avatar { width: min(42vw, 280px); }          /* never larger than 280px, ~40% of viewport on mobile */

  .card{
    background:var(--card); color:var(--ink); border:1px solid rgba(255,255,255,.10);
    border-radius:16px; padding:16px; box-shadow:var(--shadow);
  }
  .affil h3{ margin:.2rem 0 .25rem 0; font-size:1.05rem; }
  .affil p{ margin:0; color:var(--muted); font-size:.95rem; }

  .links a{
    display:flex; align-items:center; gap:10px;
    padding:10px 12px; border-radius:12px; text-decoration:none; color:var(--ink);
    border:1px solid rgba(255,255,255,.10);
  }
  .links a:hover{ border-color:var(--ring); background:rgba(255,255,255,.05); }
  .links small{ color:var(--muted); }

  /* Right content */
  .content h1{ margin:0 0 12px 0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .content p{ margin:0 0 14px 0; line-height:1.75; color:var(--ink); text-align:justify; }
  .meta{ margin-top:8px; color:var(--muted); }

  .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; }
  .chip{ padding:.38rem .6rem; font-size:.9rem; border-radius:999px; border:1px solid rgba(255,255,255,.18); color:var(--muted); background:rgba(255,255,255,.06); }

  .section{ margin-top:32px; }
  .section h2{ margin:0 0 10px 0; font-size:1.2rem; color:var(--ink); }
  .bullets{ margin:0; padding-left:18px; color:var(--muted); }
  .bullets li{ margin:6px 0; }
  a.link{ color:var(--brand); text-decoration:none; font-weight:600; }
  a.link:hover{ text-decoration:underline; }

  /* Responsive avatar sizing */
  @media (max-width: 900px) {
    .sidebar { position: static; }              /* no sticky on stacked layout */
    .avatar {
      width: 160px;                             /* shrink on tablets */
      margin: 0 auto 12px auto;                 /* center above the cards */
      border-radius: 14px;
    }
  }

  @media (max-width: 600px) {
    .avatar { width: 130px; }                   /* phones */
  }

  @media (max-width: 420px) {
    .avatar { width: 110px; }                   /* small phones */
  }

  /* Icon styling */
  .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    flex: 0 0 20px;
    color: currentColor;             /* lets the icon inherit text color */
    opacity: .9;
  }
  .links a:hover .icon { opacity: 1; }

  /* Optional: larger icons */
  .links .icon-lg { width: 22px; height: 22px; }
</style>
<div class="container">
  <div class="about-grid">
    <!-- LEFT: photo, affiliation, links -->
    <aside class="sidebar">
      <img class="avatar" src="/assets/images/Profile_new.jpg" alt="T S Vilasini profile photo">
      <div class="card affil">
        <h3>Current Affiliation</h3>
        <p>PhD student, <a class="link" href="https://www.cosmostat.org/" target="_blank" rel="noopener">CosmoStat</a></p>
        <p class="meta">CEA Paris Saclay • Université Paris Saclay</p>
      </div>
      <div class="card links" style="display:flex; flex-direction:column; gap:10px;">
      <a href="https://github.com/vilasinits" target="_blank" rel="noopener" aria-label="GitHub">
        <!-- GitHub mark -->
        <svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor"
            d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2
              c-3.26.7-3.95-1.4-3.95-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.72.08-.7.08-.7
              1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58
              -2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.18
              0 0 .98-.31 3.22 1.2a11.1 11.1 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2
              .64 1.65.24 2.87.12 3.18.74.82 1.2 1.86 1.2 3.14 0 4.49-2.73 5.47-5.34 5.77
              .42.36.8 1.07.8 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
        </svg>
        <div><strong>GitHub</strong><br><small>vilasinits</small></div>
      </a>
      <a href="https://www.linkedin.com/in/vilasini-ts/" target="_blank" rel="noopener" aria-label="LinkedIn">
      <!-- LinkedIn mark -->
      <svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor"
          d="M20.45 20.45h-3.56v-5.62c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.98v5.71H9.3V9.75h3.42v1.46h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v5.67ZM5.34 8.29a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9.75H3.56v10.7ZM22.23 0H1.77C.8 0 0 .78 0 1.73v20.54C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0Z"/>
      </svg>
      <div><strong>LinkedIn</strong><br><small>tsvilasini</small></div>
      </a>
      </div>
    </aside>
    <!-- RIGHT: about text -->
    <main class="content">
      <h1>About Me</h1>
      <p>
        I study how dark matter shapes the universe. My work sits at the meeting point of theory, large scale simulations, and weak lensing. I build simple and reliable tools that learn as much as possible from the data before asking for heavy computation.
      </p>
      <p>
        I focus on higher order statistics and wavelet methods. These ideas let me do parameter inference in a way that is light on simulations and heavy on understanding. Lately I have been developing a theory driven path for likelihood free inference so that results stay transparent and robust while storage and compute stay reasonable.
      </p>
      <p>
        I am part of the Euclid collaboration, where I care about turning careful theory into useful practice. At CosmoStat I co organize the Journal Club and enjoy meeting people who bring new ideas and even better questions.
      </p>
      <p>
        When I am not thinking about statistics and lensing, I am usually out with my camera, reading, or planning the next trip. I love to travel, learn from new cultures, and when I can, wander through old ruins and museums. If you are curious, head to my <a class="link" href="/blog.html">blog</a> to read a few of these experiences I have penned down.
      </p>
      <p>
        I enjoy learning by doing. I pick up new tools, run small experiments with real data, and build little projects for everyday use. It keeps me curious and close to what works.
      </p>
      <div class="chips">
        <span class="chip">Higher order statistics</span>
        <span class="chip">Wavelets</span>
        <span class="chip">Simulations</span>
        <span class="chip">Euclid</span>
      </div>
      <div class="section">
        <h2>What I am working on</h2>
        <ul class="bullets">
          <li>Theory for the wavelet ℓ₁ norm and its use in inference.</li>
          <li>Generating synthetic map using optimisation scheme with the correct HOS, that is both fast and accurate and robust.</li>
          <li>Validation on synthetic maps and preparation for real data.</li>
        </ul>
      </div>
      <div class="section">
        <h2>Contact</h2>
        <p>
          The best way to reach me is through <a class="link" href="https://www.linkedin.com/in/vilasini-ts/" target="_blank" rel="noopener">LinkedIn</a>.
          You can also explore my code on <a class="link" href="https://github.com/vilasinits" target="_blank" rel="noopener">GitHub</a>.
        </p>
      </div>
    </main>
  </div>
</div>
