---
layout: page
title: My Softwares
permalink: /softwares.html/
---

<style>
  /* Full width like the other pages */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }

  /* Design tokens aligned with your site */
  :root{
    --bg:#0e1525; --ink:#e9eef5; --muted:#a7b3c5; --brand:#4db8ff; --brand-2:#8a7dff;
    --card:#0f1b2e; --ring:rgba(77,184,255,.28); --shadow:0 10px 30px rgba(0,0,0,.25);
  }
  @media (prefers-color-scheme: light){
    :root{ --bg:#f7fbff; --ink:#0f172a; --muted:#475569; --card:#ffffff; --shadow:0 8px 24px rgba(2,8,23,.06); }
  }
  body{ background: linear-gradient(180deg,#111827,var(--bg)); }

  /* Page wrap */
  .sw-wrap{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; color:var(--ink); }
  .sw-head{ display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:18px; }
  .sw-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .sub{ color:var(--muted); margin-top:6px; }

  /* Grid of software cards */
  .sw-grid{
    display:grid; gap:16px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px){ .sw-grid{ grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px){ .sw-grid{ grid-template-columns: 1fr; } }

  /* Card with banner */
  .sw-card{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:16px;
    box-shadow:var(--shadow);
    display:flex;
    flex-direction:column;
    overflow:hidden;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }
  .sw-card:hover{
    transform:translateY(-2px);
    border-color:var(--ring);
    box-shadow:0 12px 26px rgba(0,0,0,.18);
  }

  .sw-banner{
    position:relative;
    height:260px;
    overflow:hidden;
  }
  .sw-banner img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    filter:brightness(0.80);
  }
  .sw-banner::after{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(to bottom,
      rgba(15,23,42,0.15),
      rgba(15,23,42,0.6));
    pointer-events:none;
  }

  .sw-body{
    padding:16px 18px 18px;
    display:flex;
    flex-direction:column;
    gap:10px;
    height:100%;
  }

  .sw-title{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
  .sw-title h3{ margin:0; font-size:1.05rem; }
  .sw-desc{ margin:0; color:var(--ink); line-height:1.6; }

  .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:4px; }
  .chip{
    padding:.32rem .6rem; font-size:.9rem; border-radius:999px;
    border:1px solid rgba(255,255,255,.18); color:var(--muted);
    background:rgba(255,255,255,.06);
  }

  .sw-actions{ display:flex; gap:10px; margin-top:auto; flex-wrap:wrap; }

  .btn{
    display:inline-flex; align-items:center; gap:8px;
    padding:8px 12px; border-radius:12px; text-decoration:none; font-weight:600;
    border:1px solid rgba(255,255,255,.12); color:var(--ink);
    background: rgba(255,255,255,.05);
  }
  .btn:hover{ border-color:var(--ring); background: rgba(255,255,255,.08); }
  .btn.primary{
    background: linear-gradient(180deg, var(--brand), var(--brand-2)); color:#fff; border-color:transparent;
  }

  .icon{ width:18px; height:18px; flex:0 0 18px; color:currentColor; }
</style>

<div class="sw-wrap">
  <header class="sw-head">
    <div>
      <h1>My Softwares</h1>
      <div class="sub">Small tools and libraries I maintain or contribute to</div>
    </div>
  </header>

  <section class="sw-grid">

    <!-- WALE -->
    <article class="sw-card">
      <div class="sw-banner">
        <!-- replace with your actual WALE banner -->
        <img src="/assets/wale.png" alt="WALE – Wavelet ℓ1-norm Estimator">
      </div>
      <div class="sw-body">
        <div class="sw-title">
          <h3>WALE</h3>
        </div>
        <p class="sw-desc">
          Theory-based prediction of the wavelet ℓ₁-norm for weak-lensing convergence under a given cosmology.
          Uses Large Deviation Theory with spherical collapse to produce fast one-point predictions that
          support simulation-light inference.
        </p>
        <div class="chips">
          <span class="chip">Python</span>
          <span class="chip">Large Deviation Theory</span>
          <span class="chip">Wavelets</span>
          <span class="chip">Weak lensing</span>
        </div>
        <div class="sw-actions">
          <a class="btn primary" href="https://github.com/vilasinits/WALE" target="_blank" rel="noopener">
            <!-- GitHub -->
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.18 0 0 .98-.31 3.22 1.2a11.1 11.1 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.18.74.82 1.2 1.86 1.2 3.14 0 4.49-2.73 5.47-5.34 5.77.42.36.8 1.07.8 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            <span>Repo</span>
          </a>
          <a class="btn" href="https://vilasinits.github.io/WALE/" target="_blank" rel="noopener">
            <!-- External link -->
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
            <span>Docs</span>
          </a>
        </div>
      </div>
    </article>

    <!-- GOLCONDA -->
    <article class="sw-card">
      <div class="sw-banner">
        <img src="/assets/golconda.png" alt="GOLCONDA emulator">
      </div>
      <div class="sw-body">
        <div class="sw-title">
          <h3>GOLCONDA</h3>
        </div>
        <p class="sw-desc">
          Emulator for weak-lensing convergence maps from an input power spectrum and a target ℓ₁-norm across scales.
          Uses a generalized forward–backward scheme to match one-point and two-point targets.
        </p>
        <div class="chips">
          <span class="chip">Python</span>
          <span class="chip">Emulation</span>
          <span class="chip">Optimization</span>
          <span class="chip">Weak lensing</span>
        </div>
        <div class="sw-actions">
          <a class="btn primary" href="https://github.com/vilasinits/GOLCONDA" target="_blank" rel="noopener">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.18 0 0 .98-.31 3.22 1.2a11.1 11.1 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.18.74.82 1.2 1.86 1.2 3.14 0 4.49-2.73 5.47-5.34 5.77.42.36.8 1.07.8 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            <span>Repo</span>
          </a>
          <a class="btn" href="https://vilasinits.github.io/GOLCONDA/" target="_blank" rel="noopener">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
            <span>Docs</span>
          </a>
        </div>
      </div>
    </article>

    <!-- Global Defects -->
    <article class="sw-card">
      <div class="sw-banner">
        <img src="/assets/globaldefects.png" alt="Global defects simulations">
      </div>
      <div class="sw-body">
        <div class="sw-title">
          <h3>Global Defects</h3>
        </div>
        <p class="sw-desc">
          Simulation toolkit for global topological defects and their impact on structure formation.
          Includes network evolution and map-based analysis utilities.
        </p>
        <div class="chips">
          <span class="chip">Python</span>
          <span class="chip">Relativistic dynamics</span>
          <span class="chip">Large-scale structure</span>
        </div>
        <div class="sw-actions">
          <a class="btn primary" href="https://github.com/vilasinits/GlobalDefect" target="_blank" rel="noopener">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.53.12-3.18 0 0 .98-.31 3.22 1.2a11.1 11.1 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.18.74.82 1.2 1.86 1.2 3.14 0 4.49-2.73 5.47-5.34 5.77.42.36.8 1.07.8 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            <span>Repo</span>
          </a>
        </div>
      </div>
    </article>

  </section>
</div>
