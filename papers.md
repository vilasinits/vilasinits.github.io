---
layout: page
title: My Papers
permalink: /papers.html/
---

<style>
  /* Full width like your other pages */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }


  .papers-wrap{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; color:var(--ink); }
  .papers-head{ display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:18px; }
  .papers-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .sub{ color:var(--muted); margin-top:6px; }

  /* Paper cards */
  .paper{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:18px;
    padding:18px;
    box-shadow:var(--shadow);
    display:flex; flex-direction:column; gap:10px;
    margin-top:16px;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }
  .paper:hover{ transform:translateY(-2px); border-color:var(--ring); box-shadow:0 12px 26px rgba(0,0,0,.18); }

  .row-top{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
  .status{
    padding:.22rem .55rem; border-radius:999px; font-size:.85rem; font-weight:700;
    border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.06); color:var(--ink);
  }
  .title{
    margin:0; font-size:1.05rem; line-height:1.4;
  }
  .title a{ color:var(--ink); text-decoration:none; }
  .title a:hover{ text-decoration:underline; }

  .meta{ color:var(--muted); font-size:.95rem; }
  .actions{ display:flex; gap:10px; flex-wrap:wrap; margin-top:4px; }

  .btn{
    display:inline-flex; align-items:center; gap:8px;
    padding:8px 12px; border-radius:12px; text-decoration:none; font-weight:600;
    border:1px solid rgba(255,255,255,.12); color:var(--ink);
    background: rgba(255,255,255,.05);
  }
  .btn:hover{ border-color:var(--ring); background: rgba(255,255,255,.08); }
  .btn.primary{ background: linear-gradient(180deg, var(--brand), var(--brand-2)); color:#fff; border-color:transparent; }

  .icon{ width:18px; height:18px; flex:0 0 18px; color:currentColor; }

  /* Abstract toggle */
  details{
    border:1px solid rgba(255,255,255,.10);
    border-radius:14px;
    padding:12px 14px;
    background:rgba(255,255,255,.04);
  }
  details summary{
    cursor:pointer; list-style:none; user-select:none; color:var(--ink); font-weight:600;
  }
  details[open]{ background:rgba(255,255,255,.06); }
  details p{ margin:10px 0 0 0; color:var(--muted); line-height:1.6; }

  /* List reset (reuse your class name if you want) */
  .publication-list{ list-style:none; padding:0; margin:0; }
</style>
<div class="papers-wrap">
  <header class="papers-head">
    <div>
      <h1>My Papers</h1>
      <div class="sub">Peer reviewed and in preparation</div>
    </div>
  </header>

  <ul class="publication-list">
    <!-- Paper 1 -->
    <li class="paper">
      <div class="row-top">
        <span class="status">Accepted</span>
        <h3 class="title">
          <a href="https://arxiv.org/abs/2507.01707" target="_blank" rel="noopener">
            Generative modeling of convergence maps based on predicted one point statistics
          </a>
        </h3>
      </div>
      <div class="meta">
        Vilasini Tinnaneri Sreekanth, Jean-Luc Starck, Sandrine Codis • A&amp;A
      </div>
      <div class="actions">
        <a class="btn primary" href="https://arxiv.org/abs/2507.01707" target="_blank" rel="noopener">
          <!-- arXiv -->
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"/></svg>
          <span>arXiv</span>
        </a>
        <a class="btn" href="https://vilasinits.github.io/GOLCONDA/" target="_blank" rel="noopener">
          <!-- External -->
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
          <span>Project page</span>
        </a>
      </div>
      <details>
        <summary>Show abstract</summary>
        <p>
          Weak gravitational lensing is a key probe, but classic power spectrum analyses miss non Gaussian features. We introduce an emulator that generates convergence maps directly from an input power spectrum and a target wavelet l1 norm. By tuning wavelet coefficients to match target marginal distributions and interscale correlations, the method reproduces the input spectrum and captures higher order structure with far less simulation cost.
        </p>
      </details>
    </li>
    <!-- Paper 2 -->
    <li class="paper">
      <div class="row-top">
        <span class="status">Accepted</span>
        <h3 class="title">
          <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202450061" target="_blank" rel="noopener">
            Theoretical wavelet ℓ1 norm from one point probability density function prediction
          </a>
        </h3>
      </div>
      <div class="meta">
        Vilasini Tinnaneri Sreekanth, Sandrine Codis, Alexandre Barthelemy, Jean-Luc Starck • A&amp;A, 691 (2024) A80
      </div>
      <div class="actions">
        <a class="btn primary" href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202450061" target="_blank" rel="noopener">
          <!-- Journal -->
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 2v4h4l-4-4Z"/></svg>
          <span>Journal</span>
        </a>
        <a class="btn" href="https://doi.org/10.1051/0004-6361/202450061" target="_blank" rel="noopener">
          <!-- DOI -->
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m14 3 7 7-9 9H5v-7l9-9Zm-7 9v3h3l8-8-3-3-8 8Z"/></svg>
          <span>DOI</span>
        </a>
      </div>
      <details>
        <summary>Show abstract</summary>
        <p>
          We derive a theoretical prediction for the wavelet l1 norm of convergence maps from a theoretical prediction of the one point distribution using Large Deviation Theory. The result agrees with simulations in the weakly nonlinear regime and tracks cosmological dependence, enabling an efficient path for parameter inference.
        </p>
      </details>
    </li>
    <!-- Paper 3 -->
    <li class="paper">
      <div class="row-top">
        <span class="status">In preparation</span>
        <h3 class="title">
          Cosmological N body simulations with topological defects
        </h3>
      </div>
      <div class="meta">
        Tinnaneri S Vilasini, Maulik Bhatt, Disrael Cunha, Martin Kunz, Asier Lopez-Eiguren • JCAP (in prep)
      </div>
      <details>
        <summary>Show abstract</summary>
        <p>
          We couple the evolution of global defects to a relativistic N body code through the stress energy source in the metric sector and study its impact on structure formation. The framework is general, validated with controlled tests, and shows measurable signatures in density and velocity fields.
        </p>
      </details>
    </li>

  </ul>
</div>
