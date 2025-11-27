---
layout: page
title: CV
permalink: /cv.html/
---

<style>
/* ============================================================
   DARK/LIGHT THEME + MODERN RESPONSIVE CV LAYOUT
============================================================ */

:root{
  --bg:#0e1525;
  --ink:#e9eef5;
  --muted:#a7b3c5;
  --accent:#4db8ff;
  --divider:rgba(255,255,255,.18);
}

@media (prefers-color-scheme: light){
  :root{
    --bg:#f8fafc;
    --ink:#0f172a;
    --muted:#475569;
    --divider:rgba(0,0,0,.15);
  }
}

body{
  background:var(--bg);
  color:var(--ink);
}

/* Main CV wrapper */
.cv-wrap{
  width:min(1100px,92vw);
  margin:auto;
  padding:40px 0 70px;
  font-size:1rem;
  line-height:1.55;
}

/* Header */
.cv-head h1{
  margin:0;
  font-size:clamp(2rem,3.2vw,2.7rem);
  font-weight:700;
}
.contact{
  margin-top:10px;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
}
.contact a{
  color:var(--accent);
  text-decoration:none;
}
.contact a:hover{ text-decoration:underline; }

/* Header actions (download button) */
.cv-actions{
  margin-top:16px;
}
.cv-download-btn{
  display:inline-block;
  padding:8px 16px;
  border-radius:999px;
  border:1px solid var(--accent);
  color:var(--accent);
  font-size:0.95rem;
  text-decoration:none;
  transition:background 0.2s ease,color 0.2s ease,transform 0.15s ease;
}
.cv-download-btn:hover{
  background:var(--accent);
  color:#020617;
  transform:translateY(-1px);
}

/* Section titles */
.cv-section{
  margin-top:40px;
}
.cv-section h2{
  margin:0 0 12px;
  font-size:1.35rem;
  font-weight:600;
  padding-bottom:5px;
  border-bottom:1px solid var(--divider);
}

/* ================================
   CARD GRIDS (Education + Research)
=================================== */

.edu-grid,
.exp-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:28px;
  margin-top:24px;
}

/* 2 columns for medium screens */
@media (max-width: 1100px) {
  .edu-grid,
  .exp-grid{
    grid-template-columns:repeat(2, 1fr);
  }
}

/* 1 column for mobile */
@media (max-width: 750px) {
  .edu-grid,
  .exp-grid{
    grid-template-columns:1fr;
  }
}

/* Generic card (used for education + research) */
.edu-card{
  width:100%;
  border-radius:18px;
  overflow:hidden;
  background:#111827;
  box-shadow:0 6px 20px rgba(0,0,0,0.40);
  border:1px solid rgba(255,255,255,0.07);
  display:flex;
  flex-direction:column;
}

@media (prefers-color-scheme: light) {
  .edu-card{
    background:#ffffff;
    border-color:rgba(0,0,0,0.1);
    box-shadow:0 6px 16px rgba(0,0,0,0.12);
  }
}

/* Banner */
.edu-banner{
  position:relative;
  height:150px;
  overflow:hidden;
}
.edu-banner img.bg{
  width:100%;
  height:100%;
  object-fit:cover;
  filter:brightness(45%) blur(0.4px);
}

@media (max-width:750px){
  .edu-banner{ height:120px; }
}

/* ================================
   LOGOS ON TOP OF BANNER
=================================== */

.banner-logos{
  position:absolute;
  bottom:18px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  gap:22px;
  align-items:center;
  justify-content:center;
  padding:8px 18px;
  background:linear-gradient(
    to top,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.40),
    rgba(0,0,0,0.20),
    transparent
  );
  border-radius:18px;
}

/* Base size */
.banner-logos img{
  height:80px;
  width:auto;
  filter:drop-shadow(0 0 7px rgba(0,0,0,.9));
  transition:transform 0.2s ease, filter 0.2s ease;
}

/* Hover effect */
.banner-logos a:hover img{
  transform:scale(1.05);
  filter:drop-shadow(0 0 10px rgba(255,255,255,.6));
}

/* Per-logo tweaks */

/* Education logos */
.logo-ups{
  max-height:95px;
  max-width:180px;
}
.logo-cea{
  max-height:90px;
  max-width:140px;
}
.logo-unige{
  max-height:100px;
  max-width:260px;
}
.logo-svnit{
  max-height:95px;
  max-width:180px;
}

/* Research logos */
.logo-cosmostat{
  max-height:90px;
  max-width:260px;
}
.logo-integral{
  max-height:90px;
  max-width:220px;
}
.logo-inaf{
  max-height:80px;
  max-width:160px;
}
.logo-pinocchio{
  max-height:90px;
  max-width:160px;
}
.logo-trieste{
  max-height:90px;
  max-width:260px;
}

/* Responsive scaling */
@media (max-width: 1100px) {
  .banner-logos img          { height:70px; }
  .banner-logos img.logo-ups   { height:80px; }
  .banner-logos img.logo-cea   { height:65px; }
  .banner-logos img.logo-unige { height:80px; }
  .banner-logos img.logo-svnit { height:80px; }
  .banner-logos img.logo-cosmostat { height:80px; }
  .banner-logos img.logo-integral  { height:75px; }
  .banner-logos img.logo-inaf      { height:65px; }
  .banner-logos img.logo-pinocchio { height:70px; }
  .banner-logos img.logo-trieste   { height:80px; }
}

@media (max-width: 750px) {
  .banner-logos{
    bottom:12px;
    gap:16px;
  }
  .banner-logos img          { height:55px; }
  .banner-logos img.logo-ups   { height:65px; }
  .banner-logos img.logo-cea   { height:50px; }
  .banner-logos img.logo-unige { height:65px; }
  .banner-logos img.logo-svnit { height:70px; }
  .banner-logos img.logo-cosmostat { height:60px; }
  .banner-logos img.logo-integral  { height:60px; }
  .banner-logos img.logo-inaf      { height:52px; }
  .banner-logos img.logo-pinocchio { height:58px; }
  .banner-logos img.logo-trieste   { height:65px; }
}

/* Card content */
.edu-content{
  padding:18px 22px 30px;
  flex:1;
}
.edu-content h3{
  margin:0 0 8px;
  font-size:1.15rem;
  font-weight:600;
}
.edu-content .meta{
  font-size:0.9rem;
  color:#9ca3af;
  margin-bottom:10px;
}
.edu-content p{
  margin-top:8px;
  font-size:0.98rem;
  line-height:1.50;
}

/* Skills */
.skills-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
}
@media(max-width:900px){
  .skills-grid{ grid-template-columns:1fr; }
}
.skill-card h3{
  font-size:1.05rem;
  margin-bottom:6px;
}
.chip{
  display:inline-block;
  margin-right:10px;
  color:var(--muted);
  font-size:.95rem;
}

/* Publications */
.pub-title{ font-style:italic; }
.venue{ font-weight:600; }
</style>


<div class="cv-wrap">

<!-- =======================
        HEADER
======================= -->
<header class="cv-head">
  <h1>Vilasini Tinnaneri Sreekanth</h1>
  <div class="intro-card">
  <p>
    I am a data scientist and research engineer with a strong background in 
    <strong>machine learning, probabilistic modelling, scientific computing, and high-performance Python</strong>.
    I enjoy turning complex problems into clean, well-engineered solutions whether it involves building data pipelines, designing modelling frameworks, or developing scalable inference systems.
    <br><br>
    I thrive in roles where I can combine analytical thinking with hands-on engineering, 
    and I am motivated by opportunities that blend 
    <strong>ML, simulation-free modelling, numerical optimisation, and real-world data</strong>.
    I’m particularly excited about teams that value clarity, reproducibility, and 
    technically rigorous product development.
  </p>
</div>


  <div class="cv-actions">
    <a class="cv-download-btn" href="/assets/Curriculum_Vitae_Vilasini.pdf" target="_blank">
      Download CV (PDF)
    </a>
  </div>
</header>


<!-- =======================
        EDUCATION
======================= -->
<section class="cv-section">
  <h2>Education</h2>

  <div class="edu-grid">

    <!-- PARIS-SACLAY + CEA -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/ups-image.jpg" alt="UPS Campus">
        <div class="banner-logos">
          <a href="https://www.universite-paris-saclay.fr" target="_blank">
            <img class="logo-ups" src="/assets/ups_white_bg.png" alt="Université Paris-Saclay Logo">
          </a>
          <a href="https://www.cosmostat.org" target="_blank">
            <img class="logo-cea" src="/assets/CEA_logo_nouveau.svg.png" alt="CEA / CosmoStat Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Doctorate of Philosophy - Physics</h3>
        <div class="meta">Université Paris-Saclay &middot; 2022 – 2025 [Expected]</div>
        <p>
          PhD at Université Paris-Saclay with the CosmoStat Laboratory, CEA.
          Working on <strong>simulation-free cosmological inference</strong> using
          wavelet-based higher-order statistics, PDF modelling, and generative models for weak lensing.
        </p>
      </div>
    </div>

    <!-- UNIVERSITY OF GENEVA -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/unige_astro.jpeg" alt="University of Geneva Astronomy">
        <div class="banner-logos">
          <a href="https://www.unige.ch" target="_blank">
            <img class="logo-unige" src="/assets/Uni_GE_logo.svg.png" alt="UNIGE Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Master of Science - Astrophysics</h3>
        <div class="meta">University of Geneva &middot; 2019 – 2021</div>
        <p>
          MSc in Astrophysics with a thesis on <strong>relativistic N-body simulations</strong> of global
          cosmic strings using <strong>Gevolution</strong>, focusing on defect signatures in large-scale structure.
        </p>
      </div>
    </div>

    <!-- SVNIT SURAT -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/svnitfront.jpg" alt="SVNIT Surat Campus">
        <div class="banner-logos">
          <a href="https://svnit.ac.in" target="_blank">
            <img class="logo-svnit" src="/assets/nitlogo.png" alt="SVNIT Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Integrated MSc - Physics</h3>
        <div class="meta">SVNIT Surat &middot; 2014 – 2019</div>
        <p>
          Five-year integrated MSc in Physics with coursework in
          <strong>mathematics, computing, astrophysics, and data analysis</strong>.
          Final master thesis on the <strong>formation of dark matter halos in quintessence models</strong>.
        </p>
      </div>
    </div>

  </div>
</section>


<!-- =======================
        RESEARCH EXPERIENCE
======================= -->
<section class="cv-section">
  <h2>Research Experience</h2>

  <div class="exp-grid">

    <!-- PhD research: CosmoStat / Euclid -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/euclidbanner.jpg" alt="Euclid & Large-Scale Structure">
        <div class="banner-logos">
          <a href="https://www.cosmostat.org" target="_blank">
            <img class="logo-cosmostat" src="/assets/CosmoStatDarkBK.png" alt="CosmoStat Logo">
          </a>
          <a href="https://www.esa.int/Science_Exploration/Space_Science/Euclid" target="_blank">
            <img class="logo-cosmostat" src="/assets/euclid_logo.png" alt="CosmoStat Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Likelihood-free Inference with Higher-Order Statistics</h3>
        <div class="meta">PhD Research &middot; CosmoStat, CEA Paris-Saclay &middot; 2022–2025</div>
        <p>
          Developed a <strong>Large Deviation Theory</strong>-based framework predicting the
          wavelet ℓ₁-norm for weak-lensing convergence maps, providing an analytical alternative
          to heavy simulations. Built a <strong>likelihood-free cosmological inference</strong> pipeline
          combining theoretical predictions, generative models, and HPC-scale map generation.
        </p>
      </div>
    </div>

    <!-- Master thesis: UNIGE, cosmic strings -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/defectsbanner.jpg" alt="Cosmic strings simulations">
        <div class="banner-logos">
          <a href="https://www.unige.ch" target="_blank">
            <img class="logo-unige" src="/assets/unige_shortlogo.webp" alt="UNIGE Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Simulations of Global Cosmic Strings</h3>
        <div class="meta">Master Thesis &middot; University of Geneva &middot; 2020–2021</div>
        <p>
          Simulated the evolution of <strong>global topological defects</strong> and studied their impact
          on large-scale structure. Combined <strong>LATField2</strong> and <strong>Gevolution</strong> in an
          automated HPC workflow with batch submission, monitoring tools, and parallel
          post-processing of scalar modes.
        </p>
      </div>
    </div>

    <!-- Hubble / optimal extraction -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/hstbanner.webp" alt="Hubble Space Telescope">
        <div class="banner-logos">
          <a href="https://www.unige.ch" target="_blank">
            <img class="logo-unige" src="/assets/unige_shortlogo.webp" alt="UNIGE Logo">
          </a>
          <a href="https://science.nasa.gov/mission/hubble/" target="_blank">
            <img class="logo-unige" src="/assets/hstlogo.gif" alt="UNIGE Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Optimal Extraction of HST Spectra</h3>
        <div class="meta">Astrophysics Lab II &middot; University of Geneva &middot; 2020</div>
        <p>
          Implemented the <strong>Horne (1986) optimal extraction algorithm</strong> in Python for HST
          spectra, optimising vectorised operations. Built automated quality checks comparing
          optimal vs. box-extracted spectra for robust pipeline validation.
        </p>
      </div>
    </div>

    <!-- INTEGRAL / GRB time series -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/integralbanner.jpg" alt="INTEGRAL satellite">
        <div class="banner-logos">
          <a href="https://www.unige.ch" target="_blank">
            <img class="logo-unige" src="/assets/unige_shortlogo.webp" alt="UNIGE Logo">
          </a>
          <a href="https://www.cosmos.esa.int/web/integral" target="_blank">
            <img class="logo-integral" src="/assets/integral.png" alt="INTEGRAL Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>GRB Search in INTEGRAL Time Series</h3>
        <div class="meta">Astrophysics Lab I &middot; University of Geneva &middot; 2019</div>
        <p>
          Scripted data ingestion and pre-processing for <strong>SPI-ACS</strong> light curves from INTEGRAL.
          Designed peak-detection algorithms to identify <strong>GRB candidates</strong>, using custom
          Python analysis scripts for large time-series datasets.
        </p>
      </div>
    </div>

    <!-- Trieste / PINOCCHIO + INAF -->
    <div class="edu-card">
      <div class="edu-banner">
        <img class="bg" src="/assets/lss.jpg" alt="Large-scale structure">
        <div class="banner-logos">
          <a href="https://www.units.it/" target="_blank">
            <img class="logo-trieste" src="/assets/unitrieste_shortlogo.jpg" alt="University of Trieste Logo">
          </a>
          <a href="https://www.inaf.it/" target="_blank">
            <img class="logo-inaf" src="/assets/inaflogo.png" alt="INAF Logo">
          </a>
          <a href="https://adlibitum.oats.inaf.it/monaco/HomePage/Pinocchio.html" target="_blank">
            <img class="logo-pinocchio" src="/assets/triestebanner.png" alt="PINOCCHIO Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Dark-Matter Halos in Quintessence Models</h3>
        <div class="meta">Master Thesis-1 &middot; University of Trieste &middot; 2019</div>
        <p>
          Modified the <strong>PINOCCHIO</strong> code to explore dark-matter halo formation in
          <strong>quintessence cosmologies</strong> with varying $w_0$ and $w_a$. Generated halo catalogues
          and performed cluster cosmology validation using statistical analysis and
          visualisation tools.
        </p>
      </div>
    </div>

    <!-- IISER MOHALI - RESEARCH INTERNSHIP -->
    <div class="edu-card">
      <div class="edu-banner">
        <!-- Banner background -->
        <img class="bg" src="/assets/iiserbanner.jpeg" alt="IISER Mohali Campus">

        <!-- Logos on banner -->
        <div class="banner-logos">
          <a href="https://www.iisermohali.ac.in" target="_blank">
            <img class="logo-iiser" src="/assets/iiserlogo.png" alt="IISER Mohali Logo">
          </a>
        </div>
      </div>

      <div class="edu-content">
        <h3>Research Internship - IISER Mohali</h3>
        <div class="meta">May 2017 - Supervisor: Prof. Jasjeet Singh Bagla</div>
        <p>
          Worked on <strong>cosmological simulations of Quintessence dark energy models</strong>, exploring 
          how the scalar-field dynamics alter the <strong>expansion history</strong> and 
          <strong>composition evolution</strong> of the Universe.  
          Gained early exposure to <strong>cosmology, numerical methods, and large-scale structure</strong>.
        </p>
      </div>
    </div>


  </div>
</section>


<!-- =======================
        SKILLS
======================= -->
<section class="cv-section">
  <h2>Skills</h2>

  <div class="skills-grid">

    <div class="skill-card">
      <h3>Modeling & Inference</h3>
      <span class="chip">Statistical modelling</span>
      <span class="chip">Probabilistic inference</span>
      <span class="chip">Simulation-based inference</span>
      <span class="chip">Generative modelling</span>
      <span class="chip">Uncertainty quantification</span>
      <span class="chip">Wavelet-based features</span>
    </div>

    <div class="skill-card">
      <h3>Data & Experimentation</h3>
      <span class="chip">Exploratory analysis</span>
      <span class="chip">Benchmarking</span>
      <span class="chip">Reproducibility</span>
      <span class="chip">Large simulations</span>
      <span class="chip">Image-like data</span>
    </div>

    <div class="skill-card">
      <h3>Programming</h3>
      <span class="chip">Python</span>
      <span class="chip">NumPy / SciPy</span>
      <span class="chip">pandas</span>
      <span class="chip">scikit-learn</span>
      <span class="chip">JAX</span>
      <span class="chip">PyTorch</span>
      <span class="chip">Git / GitHub</span>
      <span class="chip">Linux</span>
      <span class="chip">SLURM / HPC</span>
    </div>

    <div class="skill-card">
      <h3>Communication</h3>
      <span class="chip">Documentation</span>
      <span class="chip">Talks & posters</span>
      <span class="chip">Mentoring</span>
      <span class="chip">Collaboration</span>
    </div>

  </div>
</section>


<!-- =======================
        PUBLICATIONS
======================= -->
<section class="cv-section">
  <h2>Publications</h2>
  <ul>
    <li>
      <a class="pub-title" href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202450061" target="_blank">
        Theoretical wavelet ℓ₁-norm from one-point probability density function prediction
      </a>,
      Vilasini Tinnaneri Sreekanth, A. Barthelemy, S. Codis, J.-L. Starck,
      <span class="venue">Astronomy &amp; Astrophysics</span>, 2024.
    </li>
    <li>
      <a class="pub-title" href="https://arxiv.org/abs/2507.01707" target="_blank">
        Generative modeling of convergence maps based on predicted one-point statistics
      </a>,
      Vilasini Tinnaneri Sreekanth, J.-L. Starck, S. Codis,
      <span class="venue">Astronomy &amp; Astrophysics</span>, accepted (2025).
    </li>
    <li>
      <a class="pub-title" href="https://arxiv.org/abs/2510.04953" target="_blank">
        Euclid preparation: Towards a DR1 application of higher-order weak lensing statistics
      </a>,
      Euclid Collaboration, S. Vinciguerra, F. Bouché, N. Martinet,
      <em>et al.</em>, incl. Vilasini Tinnaneri Sreekanth,
      <span class="venue">arXiv:2510.04953</span>, 2025.
    </li>
    <li>
      <span class="pub-title">
        Benchmarking Theoretical Wavelet ℓ₁-Norm Predictions Against Cosmological Simulations
      </span>,
      A. Tersenov, T. S. Vilasini, J.-L. Starck, S. Codis, M. Kilbinger,
      <span class="venue">in preparation</span> for <span class="venue">Astronomy &amp; Astrophysics</span>.
    </li>
  </ul>
</section>


<!-- =======================
        CONFERENCES
======================= -->
<section class="cv-section">
  <h2>Conferences, Schools, and Talks</h2>
  <ul>
    <li>Euclid France Theory and Likelihood Workshop (IAP Paris, 2022)</li>
    <li>Euclid France Meeting 2022 (IAP Paris)</li>
    <li>XV Tonale Cosmology Winter School (Italy, 2022)</li>
    <li>Future Cosmology - IESC Cargese (Poster, 2023)</li>
    <li>ADA X Summer School (Crete, 2023)</li>
    <li>Action Dark Energy Colloque (Talk, 2023)</li>
    <li>TOSCA Reunion Meeting (Talk, 2023)</li>
    <li>Euclid Symposium 12 (Talk, 2024)</li>
    <li>Cosmology & Statistics Days (Talk, 2024)</li>
    <li>Euclid SWG WL Meeting (Talk, 2024)</li>
    <li>COSMO21 (Talk, 2024)</li>
    <li>Euclid Consortium Meeting (Rome, 2024)</li>
  </ul>
</section>


<!-- =======================
        AWARDS
======================= -->
<section class="cv-section">
  <h2>Awards &amp; Scholarships</h2>
  <ul>
    <li>Excellence Master Fellowship - University of Geneva</li>
  </ul>
</section>

</div>
