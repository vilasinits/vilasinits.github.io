---
layout: page
title: CV
permalink: /cv.html/
---

<style>
  /* Use the same full-bleed look as home */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }

  /* Design tokens (aligned with landing page) */
  :root{
    --bg:#0e1525; --ink:#e9eef5; --muted:#a7b3c5; --brand:#4db8ff; --brand-2:#8a7dff;
    --card:#0f1b2e; --ring:rgba(77,184,255,.28);
    --shadow:0 10px 30px rgba(0,0,0,.25);
  }
  @media (prefers-color-scheme: light){
    :root{ --bg:#f7fbff; --ink:#0f172a; --muted:#475569; --card:#ffffff; --shadow:0 8px 24px rgba(2,8,23,.06); }
  }

  body{ background: linear-gradient(180deg,#111827,var(--bg)); }

  .cv-wrap{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; color:var(--ink); }

  /* Page header */
  .cv-head{
    display:grid; grid-template-columns: 1fr auto; gap: 22px; align-items:end;
    margin-bottom: 22px;
  }
  .cv-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .tagline{ color:var(--muted); margin-top:6px; }

  .contact{
    display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;
  }
  .pill{
    display:flex; align-items:center; gap:8px;
    padding:8px 12px; border-radius:999px;
    background: rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.10);
    text-decoration:none; color:var(--ink);
  }
  .pill:hover{ border-color:var(--ring); background: rgba(255,255,255,.08); }
  .icon{ width:18px; height:18px; flex:0 0 18px; color:currentColor; }

  /* Section cards */
  .cv-section{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:18px;
    padding:22px;
    box-shadow:var(--shadow);
    margin-top:16px;
  }
  .cv-section h2{
    margin:0 0 12px 0; font-size:1.2rem; border-left: 3px solid var(--ring);
    padding-left:10px;
  }

  /* Two-column rows when helpful */
  .row{ display:grid; grid-template-columns: 1fr 1fr; gap:18px; }
  @media (max-width: 900px){ .row{ grid-template-columns: 1fr; } }

  /* Lists */
  .list{ list-style:none; padding:0; margin:0; }
  .list li{ margin: 8px 0; }
  .sub{ color:var(--muted); font-size:.95rem; }
  .degree h3{ margin:0 0 6px 0; font-size:1.05rem; }
  .degree .meta{ color:var(--muted); font-size:.95rem; }

  a.link{ color:var(--brand); text-decoration:none; font-weight:600; }
  a.link:hover{ text-decoration:underline; }

  /* Skills */
  .skills-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
  @media (max-width: 900px){ .skills-grid{ grid-template-columns: 1fr; } }
  .skill-card{
    background: rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);
    border-radius:14px; padding:14px;
  }
  .skill-card h3{ margin:0 0 8px 0; font-size:1rem; }
  .chips{ display:flex; flex-wrap:wrap; gap:8px; }
  .chip{
    padding:.35rem .6rem; font-size:.9rem; border-radius:999px;
    border:1px solid rgba(255,255,255,.18); color:var(--muted);
    background: rgba(255,255,255,.06);
  }

  /* Publication style */
  .pub-title{ font-style:italic; }
  .venue{ font-weight:700; }

  /* Subtle rule between items when needed */
  .rule{ height:1px; background: rgba(255,255,255,.08); margin:14px 0; }

  /* Make Education a responsive row of cards */
  .row.education{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 18px;
  }

  /* Optional: give each degree a light card look to match the theme */
  .cv-section .degree{
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 14px;
    padding: 16px;
  }

  .cv-section .degree h3{ margin: 0 0 6px 0; font-size: 1.05rem; }
  .cv-section .degree .meta{ color: var(--muted); font-size: .95rem; margin-bottom: 8px; }

</style>

<div class="cv-wrap">

  <!-- Header -->
  <header class="cv-head">
    <div>
      <h1>Vilasini Tinnaneri Sreekanth</h1>
      <!-- <div class="tagline">Cosmology • Weak Lensing • Higher Order Statistics • Theory to Practice</div> -->
    </div>
    <nav class="contact">
      <a class="pill" href="mailto:vilasini.tinnanerisreekanth@cea.fr">
        <!-- mail -->
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2V18H4V7.2l8 5.3 8-5.3ZM4.8 6h14.4L12 10.9 4.8 6Z"/></svg>
        <span>vilasini.tinnanerisreekanth@gmail.com</span>
      </a>
      <a class="pill" href="https://github.com/vilasinits" target="_blank" rel="noopener" aria-label="GitHub">
        <!-- GitHub -->
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.18 0 0 .98-.31 3.22 1.2a11.1 11.1 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.18.74.82 1.2 1.86 1.2 3.14 0 4.49-2.73 5.47-5.34 5.77.42.36.8 1.07.8 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
        <span>vilasinits</span>
      </a>
      <a class="pill" href="https://www.linkedin.com/in/vilasini-ts/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <!-- LinkedIn -->
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.62c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.98v5.71H9.3V9.75h3.42v1.46h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v5.67ZM5.34 8.29a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9.75H3.56v10.7ZM22.23 0H1.77C.8 0 0 .78 0 1.73v20.54C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0Z"/></svg>
        <span>vilasini-ts</span>
      </a>
    </nav>
  </header>

    <!-- Education -->
  <section class="cv-section">
    <h2>Education</h2>
    <div class="row education">
      <div class="degree">
        <h3>PhD, University of Paris-Saclay, France</h3>
        <div class="meta">Expected 2025</div>
        <ul class="list">
          <li><strong>Dissertation:</strong> Likelihood free inference using higher order statistics</li>
          <li><strong>Supervisors:</strong> <a class="link" href="https://www.cosmostat.org/people/jeanluc-starck" target="_blank" rel="noopener">Jean Luc Starck</a> and <a class="link" href="https://sandrinecodis.wixsite.com/sandrinewebsite" target="_blank" rel="noopener">Sandrine Codis</a></li>
        </ul>
      </div>
      <div class="degree">
        <h3>MS in Astrophysics, University of Geneva, Switzerland</h3>
        <div class="meta">2021</div>
        <ul class="list">
          <li><strong>Thesis:</strong> Simulations of global cosmic strings with N body simulations to study their impact on large scale structure</li>
          <li><strong>Supervisors:</strong> <a class="link" href="https://cosmology.unige.ch/users/martin-kunz" target="_blank" rel="noopener">Martin Kunz</a> and David Daverio</li>
        </ul>
      </div>
      <div class="degree">
        <h3>Integrated Masters in Physics, S V National Institute of Technology, Surat, India</h3>
        <div class="meta">2019</div>
      </div>
    </div>
  </section>
  <!-- Skills -->
<section class="cv-section">
  <h2>Skills</h2>
  <div class="skills-grid">
    <div class="skill-card">
      <h3>Modeling and Inference</h3>
      <div class="chips">
        <span class="chip">Statistical modeling</span>
        <span class="chip">Probabilistic inference</span>
        <span class="chip">Simulation based inference</span>
        <span class="chip">Generative modeling</span>
        <span class="chip">Uncertainty quantification</span>
        <span class="chip">Evaluation and cross validation</span>
        <span class="chip">Feature extraction with wavelets</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Data and Experimentation</h3>
      <div class="chips">
        <span class="chip">Exploratory data analysis</span>
        <span class="chip">Experiment design and benchmarking</span>
        <span class="chip">Reproducible notebooks</span>
        <span class="chip">Result tracking and reports</span>
        <span class="chip">Large scale simulation data</span>
        <span class="chip">Spatial and image like data</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Programming and Tools</h3>
      <div class="chips">
        <span class="chip">Python</span>
        <span class="chip">NumPy and SciPy</span>
        <span class="chip">pandas</span>
        <span class="chip">scikit learn</span>
        <span class="chip">PyTorch</span>
        <span class="chip">JAX</span>
        <span class="chip">Matplotlib</span>
        <span class="chip">Git and GitHub</span>
        <span class="chip">Linux</span>
        <span class="chip">SLURM and HPC</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Communication</h3>
      <div class="chips">
        <span class="chip">Clear documentation</span>
        <span class="chip">Talks and posters</span>
        <span class="chip">Mentoring and journal club</span>
        <span class="chip">Collaboration in research teams</span>
      </div>
    </div>
  </div>
</section>


  <!-- Publications -->
  <section class="cv-section">
    <h2>Publications</h2>
    <ul class="list">
      <li>
        Accepted: <span class="pub-title"><a class="link" href="https://arxiv.org/abs/2507.01707" target="_blank" rel="noopener">Generative Modeling of Convergence Maps Based on Predicted One Point Statistics</a></span>, <span class="venue">Astronomy and Astrophysics</span>
      </li>
      <li>
        Accepted: <a class="link" href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202450061" target="_blank" rel="noopener"><span class="pub-title">Theoretical wavelet ℓ1 norm from one point PDF prediction</span></a>, <span class="venue">Astronomy and Astrophysics</span>
      </li>
      <li>
        In preparation: <span class="pub-title">Cosmological N body simulations with topological defects</span>, <span class="venue">JCAP</span>
      </li>
    </ul>
  </section>

  <!-- Conferences, Schools, and Talks -->
  <section class="cv-section">
    <h2>Conferences, Schools, and Talks</h2>
    <ul class="list">
      <li><a class="link" href="https://indico.in2p3.fr/event/27965/" target="_blank" rel="noopener">Euclid France Theory and Likelihood Workshop</a>, 28 Nov 2022, IAP Paris</li>
      <li><a class="link" href="https://euclid-fr2022.sciencesconf.org/" target="_blank" rel="noopener">Euclid France Meeting 2022</a>, 30 Nov–2 Dec 2022, IAP Paris</li>
      <li><a class="link" href="https://indico.physi.uni-heidelberg.de/event/728/" target="_blank" rel="noopener">XV Tonale Cosmology Winter School</a>, 4–10 Dec 2022, Passo del Tonale, Italy</li>
      <li><a class="link" href="https://www.cpt.univ-mrs.fr/~cosmo/EC2023/index.php" target="_blank" rel="noopener">Future Cosmology</a>, 23–29 Apr 2023, IESC Cargese, France (Poster)</li>
      <li><a class="link" href="https://ada10.cosmostat.org/" target="_blank" rel="noopener">ADA X Summer School</a>, 18–22 Sep 2023, Crete, Greece</li>
      <li>Colloque national Action Dark Energy, 6–7 Nov 2023, Annecy, France (Talk)</li>
      <li>TOSCA Reunion Meeting, 16–17 Nov 2023, Nice, France (Talk)</li>
      <li>Euclid France Symposium 12, 24–26 Feb 2024, Lyon, France (Talk)</li>
      <li>Cosmology and Statistics Days, 1–2 Feb 2024, CosmoStat, CEA Paris Saclay, France (Talk)</li>
      <li>Euclid SWG WL Meeting, 19–21 Feb 2024, Innsbruck, Austria (Talk)</li>
      <li>COSMO21, 21–24 Dec 2024, Chania, Greece (Talk)</li>
      <li>Euclid Consortium Meeting, 17–21 Jun 2024, Rome, Italy</li>
    </ul>
  </section>

  <!-- Awards -->
  <section class="cv-section">
    <h2>Awards and Scholarships</h2>
    <ul class="list">
      <li>Excellence Master Fellowship, University of Geneva</li>
    </ul>
  </section>

</div>
