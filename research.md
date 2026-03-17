---
layout: page
title: Research
permalink: /research.html/
---

<!-- MathJax (unchanged) -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      packages: {'[+]': ['ams','boldsymbol','bm']}
    },
    loader: { load: ['[tex]/ams','[tex]/boldsymbol','[tex]/bm'] },
    chtml: { font: 'TeX' }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

<style>
  /* Full width like home */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }


  /* Main container */
  .rs-container{
    width:min(1100px,92vw);
    margin-inline:auto;
    padding:40px 0 70px;
    color:var(--ink);
  }

  .rs-head{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:16px;
    margin-bottom:20px;
  }
  .rs-head h1{
    margin:0;
    font-size: clamp(1.8rem,3.2vw,2.3rem);
  }
  .sub{ color:var(--muted); margin-top:6px; }

  /* ==== Layout: sidebar + content ==== */
  .rs-layout{
    display:grid;
    grid-template-columns: 230px minmax(0,1fr);
    gap:26px;
    align-items:flex-start;
  }

  @media (max-width: 900px){
    .rs-layout{
      grid-template-columns:1fr;
    }
    .rs-sidebar{
      position:static !important;
      margin-bottom:10px;
      order:-1;
      border-radius:14px;
      padding:12px;
    }
    /* Horizontal scrollable TOC on mobile */
    .toc{
      flex-direction:row !important;
      overflow-x:auto;
      gap:6px !important;
      padding-bottom:4px;
      -webkit-overflow-scrolling:touch;
    }
    .toc a{
      white-space:nowrap;
      font-size:0.85rem;
      padding:6px 12px;
    }
    .rs-sidebar-sub{ display:none; }
  }
  /* Fix text overflowing the card */
  .media {
    align-items: start;
    overflow: hidden;      /* ensures children don't escape the rounded card */
  }

  .rs-card {
    overflow: hidden;      /* prevents inner content from spilling past border-radius */
  }

  /* Make image behave properly inside the grid */
  .media img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }


  /* ==== Sidebar: modern glass card ==== */
  .rs-sidebar{
    position:sticky;
    top:90px;
    align-self:flex-start;

    background: var(--card);
    border-radius:22px;
    padding:16px 16px 20px;

    border:1px solid var(--divider);
    box-shadow:var(--shadow);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    font-size:0.95rem;
    z-index:1; /* keep below mobile menu */
  }

  .rs-sidebar-title{
    font-weight:600;
    letter-spacing:.03em;
    font-size:0.82rem;
    text-transform:uppercase;
    color:var(--muted);
    margin-bottom:4px;
  }

  .rs-sidebar-sub{
    color:var(--muted);
    font-size:0.8rem;
    margin-bottom:10px;
  }

  /* ==== TOC list ==== */
  .toc{
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;
    gap:8px;
  }

  /* Pill links */
  .toc a{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:8px;

    padding:8px 12px;
    border-radius:999px;
    text-decoration:none;

    font-size:0.9rem;
    color:var(--ink);

    background:var(--bg);
    border:1px solid var(--divider);

    box-shadow:none;
    transition:
      background .16s ease,
      border-color .16s ease,
      transform .12s ease,
      box-shadow .16s ease;
  }

  /* Subtle chevron */
  .toc a::after{
    content:"›";
    font-size:0.9rem;
    opacity:.55;
  }

  /* Hover / focus */
  .toc a:hover{
    background:var(--ring);
    border-color:var(--brand);
    transform:translateX(3px);
    box-shadow:none;
  }

  .toc a.is-active{
    background:var(--ring);
    border-color:var(--brand);
  }


  .rs-main{
    display:flex;
    flex-direction:column;
    gap:18px;
  }

  /* Section card */
  .rs-card{
    background:var(--card); border:1px solid var(--divider);
    border-radius:18px; padding:22px; box-shadow:var(--shadow);
  }
  .rs-card h2{
    margin:0 0 10px 0; font-size:1.25rem; border-left:3px solid var(--brand); padding-left:10px;
  }
  .rs-card p{ margin:0 0 12px 0; line-height:1.75; text-align:justify; }

  /* Media block (image + body) */
  .media{
    display:grid; grid-template-columns: 280px 1fr; gap:16px; align-items:start; margin:10px 0 6px;
  }
  @media (max-width: 880px){ .media{ grid-template-columns: 1fr; } }

  .media img{
    width:100%; height:auto; display:block; border-radius:14px;
    border:1px solid var(--divider); box-shadow:var(--shadow);
  }

  /* Inline figures if you still want float-like behavior */
  .figure-left{ float:left; margin: 0 14px 10px 0; max-width: 300px; border-radius:10px; }
  .figure-right{ float:right; margin: 0 0 10px 14px; max-width: 300px; border-radius:10px; }
  .rs-card::after{ content:""; display:block; clear:both; }

  /* Links */
  a.link{ color:var(--brand); text-decoration:none; font-weight:600; }
  a.link:hover{ text-decoration:underline; }
</style>

<div class="rs-container">
  <header class="rs-head">
    <div>
      <h1>Research</h1>
      <div class="sub">Weak Lensing • Topological Defects • Large Deviation Theory</div>
    </div>
  </header>

  <div class="rs-layout">
    <!-- LEFT SIDEBAR MENU -->
    <aside class="rs-sidebar" aria-label="On this page">
      <div class="rs-sidebar-title">On this page</div>
      <div class="rs-sidebar-sub">Jump to a topic</div>
      <nav>
        <ul class="toc">
          <li><a href="#weak-lensing">Weak Lensing</a></li>
          <li><a href="#topological-defects">Topological Defects</a></li>
          <li><a href="#large-deviation-theory">Large Deviation Theory</a></li>
        </ul>
      </nav>
    </aside>
    <main class="rs-main">
      <section id="weak-lensing" class="rs-card">
        <h2>Weak Lensing</h2>
          <img src="/assets/images/weaklensing.webp" alt="Illustration of weak lensing and background galaxy distortions" class="figure-left">
            <p>
              Weak gravitational lensing is the small and coherent change in galaxy shapes caused by matter along the line of sight. From many galaxies we estimate the reduced shear \( g = \gamma/(1-\kappa) \) and reconstruct a convergence map \( \kappa(\theta) \), a projected view of the matter field. The convergence is a weighted line of sight integral of the density contrast \( \delta \):
            </p>
            \[
              \kappa(\theta) \;=\; \int_0^{\chi_s} \! \mathrm{d}\chi\; W(\chi)\,
              \delta\!\big(f_K(\chi)\,\theta,\,\chi\big),
            \]
            <p>
              where \( \chi \) is comoving distance, \( f_K \) is the comoving angular diameter distance, and \( W(\chi) \) is the lensing efficiency.
            </p>
            <p>
              Two point statistics capture part of the signal, but structure growth makes the field non Gaussian. I summarize extra information with the \( \ell_1 \) norm: at a chosen scale or transform, bin the pixel values and sum absolute values in each bin,
            </p>
            \[
              L_1[b] \;=\; \sum_{p:\,x(p)\in b} \lvert x(p)\rvert ,
            \]
            <p>
              where \( x(p) \) is the map value used at that step (for example a wavelet coefficient or a smoothed map value). The prediction comes from theory. Using Large Deviation Theory, I build the one point density \( p(x) \) for the same smoothing or transform. The expected content of a bin is then
            </p>
            \[
              \mathbb{E}[L_1[b]] \;=\; N_{\mathrm{eff}} \!\int_{x\in b} \lvert x\rvert\, p(x)\,\mathrm{d}x ,
            \]
            <p>
              with \( N_{\mathrm{eff}} \) the effective number of pixels after masking and resolution effects.
            </p>
            <p>
              In practice: reconstruct \( \kappa \) from shear catalogs, choose the analysis scale or wavelet, measure \( L_1[b] \), build \( p(x) \) from Large Deviation Theory, and compare data to theory with an uncertainty model for noise and finite area. This keeps inference close to first principles and light on simulations.
            </p>
      </section>
      <section id="topological-defects" class="rs-card">
        <h2>Topological Defects</h2>
          <img src="/assets/images/defectnetwork.webp" alt="Network of cosmic strings in a simulation" class="figure-left">
            <p>
              Phase transitions in the early universe can create field configurations that cannot relax away. These are topological defects such as strings, walls, and monopoles. They act as <em>active</em> sources of perturbations: their stress energy keeps sourcing the metric at late times, so the resulting density and velocity fields do not follow the passive evolution of simple initial conditions.
            </p>
            <p>
              In linear language, defects source scalar, vector, and tensor modes through their stress energy tensor \(T_{\mu\nu}\). Unlike the standard case where vector modes decay, the anisotropic stress of a defect network can maintain vector and tensor contributions with amplitudes that matter for observables. A simple Poisson like statement illustrates the sourcing,
            </p>
            \[
              \nabla^2 \Phi \;=\; 4\pi G\,a^2\,\delta\rho_{\mathrm{m}} \;+\; 4\pi G\,a^2\,\delta\rho_{\mathrm{defect}},
            \]
            <p>
              with additional equations for the divergence free part of the velocity and the tensor modes that include defect anisotropic stress. For strings, a key parameter is the tension \( \mu \) and the dimensionless combination \( G\mu \). Moving strings generate wakes, that is, planar overdensities behind the string, and a web of line like features that bias the late time density field.
            </p>
            <p>
              The statistics of an evolving network are often described by unequal time correlators of \(T_{\mu\nu}\). In a scaling regime these correlators depend only on ratios of times, which lets us predict how the sourced power moves across scales. The main signatures in large scale structure are additional small scale power, excess vorticity, and non Gaussian features that are not captured by two point summaries alone.
            </p>
            <p>
              My workflow uses relativistic N body simulations to evolve matter in the presence of a defect source. I implement the source term on the grid, evolve the metric and the particles, and track both scalar and vector contributions. On the analysis side I separate isotropic and anisotropic pieces, measure map based statistics that respond to line like and planar structures, and compare to theory templates that come from the scaling picture and from analytic wake models.
            </p>
            <p>
              Validation includes controlled tests where I switch off the source to recover the standard case, resolution and volume checks, and sensitivity to the network parameters such as the correlation length, the typical velocity, and \( G\mu \). The goal is a clear link from measurable features in the density and velocity fields back to a small set of physical parameters that describe the network.
            </p>
      </section>

      <!-- Large Deviation Theory -->
      <section id="large-deviation-theory" class="rs-card">
        <h2>Large Deviation Theory</h2>
        <p>
          Large Deviation Theory gives a direct way to predict one point statistics in the non linear regime. It starts from simple initial conditions and a spherical collapse mapping, and returns a closed form description of the late time distribution without a large simulation suite.
        </p>
        <p>
          In practice the inputs are the source redshift distribution, the smoothing or transform that defines the field value, and the variance at that scale. The output is the predicted one point density for that field. From this we obtain the expected content of each value bin for the \( \ell_1 \) norm, which is then compared to measurements with an uncertainty model for noise and finite area.
        </p>
        <p>
          LDT is fast and transparent, which makes it useful for scans and sensitivity checks. It agrees with perturbation theory in the small variance limit and remains stable deeper into the mildly non linear regime. The main caveats are very small scales where shell crossing, baryons, and intrinsic alignment can matter, and survey systematics that must be tested with mocks.
        </p>
      </section>
    </main>
  </div>
</div>
