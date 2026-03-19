---
layout: post
title: "An Introduction to Cosmology"
date: 2026-03-19
category: cosmology
tags: [cosmology, explainer]
excerpt: "What is the universe made of, how did it begin, and how did structure emerge from near perfect smoothness? A visual, interactive introduction to the biggest questions in science."
---

<style>
  .post-content { max-width: 100% !important; padding: 0 !important; }
  .post-header   { width: min(820px, 92vw); margin-inline: auto; }
  .post-meta     { display: none; }

  :root {
    --cosmo-accent: #a78bfa;
    --cosmo-blue:   #38bdf8;
    --cosmo-green:  #34d399;
    --cosmo-orange: #fb923c;
  }

  .cw { font-family: inherit; color: var(--ink); }

  .cs {
    width: min(820px, 92vw);
    margin-inline: auto;
    padding: 52px 0 20px;
  }

  .cs h2 {
    font-size: clamp(1.35rem, 2.2vw, 1.75rem);
    margin: 0 0 4px 0;
    color: var(--ink);
    border-left: 4px solid var(--brand);
    padding-left: 12px;
  }
  .cs .lede {
    color: var(--brand);
    font-size: .95rem;
    font-style: italic;
    margin: 0 0 20px 0;
    letter-spacing: .01em;
  }
  .cs p { line-height: 1.9; margin: 0 0 18px 0; }

  hr.div {
    width: min(820px, 92vw);
    margin-inline: auto;
    border: none;
    border-top: 1px solid var(--divider);
  }

  /* Callout */
  .note {
    background: var(--card);
    border-left: 3px solid var(--cosmo-accent);
    border-radius: 0 10px 10px 0;
    padding: 14px 18px;
    margin: 18px 0;
    color: var(--ink);
    font-size: .96rem;
    line-height: 1.75;
  }

  /* Demo container */
  .demo {
    background: var(--card);
    border: 1px solid var(--divider);
    border-radius: 16px;
    padding: 20px;
    margin: 24px 0;
  }
  .demo canvas { display: block; width: 100%; border-radius: 10px; }
  .demo-cap {
    text-align: center;
    color: var(--muted);
    font-size: .86rem;
    margin-top: 10px;
  }
  .demo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
  .demo-row label { color: var(--muted); font-size: .9rem; flex-shrink: 0; }
  .demo-row input[type=range] { flex: 1; min-width: 120px; accent-color: var(--cosmo-accent); }
  .demo-row strong { color: var(--ink); font-size: .9rem; min-width: 36px; }

  /* Composition grid */
  .comp-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 24px;
    align-items: center;
    margin: 20px 0;
  }
  @media (max-width: 600px) { .comp-grid { grid-template-columns: 1fr; } }
  #donut-canvas { display: block; width: 100%; aspect-ratio: 1; }

  .comp-items { display: flex; flex-direction: column; gap: 16px; }
  .comp-item { display: flex; align-items: flex-start; gap: 12px; }
  .comp-dot {
    width: 12px; height: 12px; border-radius: 3px;
    flex-shrink: 0; margin-top: 4px;
  }
  .comp-text strong { display: block; font-size: .98rem; }
  .comp-text span { color: var(--muted); font-size: .88rem; line-height: 1.55; }

  /* CMB narrative animation */
  .cmb-wrap {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  #cmb-canvas {
    display: block; width: 100%;
    aspect-ratio: 2/1;
    border-radius: 10px;
  }
  /* Planck CMB map overlay (phase 4) */
  .cmb-ov-group {
    position: absolute;
    left: 71%; top: 9%;
    width: 26%;
    display: none;
    pointer-events: none;
    flex-direction: column;
    align-items: center;
  }
  .cmb-ov-group.active { display: flex; }
  .cmb-ov {
    width: 100%;
    aspect-ratio: 2/1;
    clip-path: ellipse(50% 50% at 50% 50%);
    overflow: hidden;
    box-shadow: 0 0 0 1.5px rgba(255,255,255,.40), 0 0 12px rgba(167,139,250,.35);
  }
  .cmb-ov img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .cmb-ov-cap {
    color: rgba(255,255,255,.40);
    font-size: .68rem;
    margin-top: 5px;
    text-align: center;
    white-space: nowrap;
  }
  .cmb-phases {
    display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap;
  }
  .cmb-tab {
    flex: 1; min-width: 100px;
    padding: 7px 6px; text-align: center; font-size: .8rem;
    border-radius: 8px; cursor: pointer; font-family: inherit;
    border: 1px solid var(--divider); background: var(--card);
    color: var(--muted); transition: border-color .2s, color .2s, background .2s;
  }
  .cmb-tab.on {
    border-color: var(--cosmo-accent);
    color: var(--cosmo-accent);
    background: rgba(167,139,250,.12);
  }

  /* Structure formation video */
  .video-wrap {
    position: relative; width: 100%; aspect-ratio: 16/9;
    border-radius: 12px; overflow: hidden;
    background: #000;
  }
  .video-wrap iframe {
    position: absolute; inset: 0; width: 100%; height: 100%;
    border: none;
  }
  .video-credit {
    margin-top: 10px; font-size: .85rem; color: var(--muted); text-align: right;
  }
  .video-credit a { color: var(--cosmo-accent); }
  .sbtn:hover, .sbtn.on {
    border-color: var(--cosmo-accent);
    background: rgba(167,139,250,.12);
    color: var(--cosmo-accent);
  }

  /* Timeline */
  .tl { margin: 24px 0; position: relative; padding-left: 26px; }
  .tl::before {
    content: '';
    position: absolute; left: 7px; top: 6px; bottom: 6px; width: 2px;
    background: linear-gradient(to bottom, var(--cosmo-accent), transparent);
  }
  .tl-row {
    position: relative; margin-bottom: 26px;
    opacity: 0; transform: translateY(10px);
    transition: opacity .5s, transform .5s;
  }
  .tl-row.vis { opacity: 1; transform: none; }
  .tl-dot {
    position: absolute; left: -22px; top: 5px;
    width: 9px; height: 9px; border-radius: 50%;
    background: var(--cosmo-accent);
    box-shadow: 0 0 7px var(--cosmo-accent);
  }
  .tl-t { font-size: .8rem; font-weight: 700; color: var(--cosmo-accent); margin-bottom: 2px; }
  .tl-h { font-weight: 700; margin-bottom: 3px; font-size: .98rem; }
  .tl-b { color: var(--muted); font-size: .9rem; line-height: 1.6; }

  /* Universe history canvas section */
  .history-wrap {
    margin: 24px 0;
  }
  #history-canvas {
    display: block; width: 100%;
    height: 200px;
    border-radius: 10px;
  }
  .history-labels {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }
  .history-labels span {
    font-size: 10px;
    color: var(--muted);
    text-align: center;
    flex: 1;
    min-width: 60px;
  }

  /* Inflation horizon canvas */
  #inflation-canvas {
    display: block; width: 100%;
    border-radius: 10px;
  }

  /* Open questions */
  .oq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px; margin: 20px 0;
  }
  @media (max-width: 600px) { .oq-grid { grid-template-columns: 1fr; } }
  .oq {
    background: var(--card); border: 1px solid var(--divider);
    border-radius: 12px; padding: 16px;
  }
  .oq h4 { margin: 0 0 6px 0; font-size: .95rem; }
  .oq p  { margin: 0; color: var(--muted); font-size: .88rem; line-height: 1.6; }

  /* References */
  .refs {
    background: var(--card); border: 1px solid var(--divider);
    border-radius: 14px; padding: 22px 26px; margin: 20px 0;
  }
  .refs h3 {
    margin: 0 0 14px 0; font-size: .85rem;
    text-transform: uppercase; letter-spacing: .07em; color: var(--muted);
  }
  .refs ol { margin: 0; padding-left: 18px; }
  .refs li { font-size: .9rem; line-height: 1.8; margin-bottom: 4px; color: var(--muted); }
  .refs a { color: var(--cosmo-accent); }
  .refs a:hover { text-decoration: underline; }
</style>

<div class="cw">

<!-- ═══ 1. HOOK ═══ -->
<div class="cs">
  <h2>What is Cosmology?</h2>
  <p class="lede">The science of asking the most unreasonable questions imaginable, and actually getting answers.</p>
  <p>Go outside on a clear night and look up. Every point of light you see is a star inside our own galaxy, the Milky Way. But beyond those stars, if your eyes were powerful enough, you would see something staggering: roughly <strong>two trillion galaxies</strong>, each containing hundreds of billions of stars, spread across a universe about <strong>93 billion light years</strong> wide.</p>
  <p>Cosmology is the science of all of that: how it began, what it is made of, and where it is going. What makes it unusual is that we can actually answer these questions, with remarkable precision, by combining theory, observation, and increasingly clever data analysis. This page is an attempt to build up that understanding from scratch.</p>
  <div class="note">
    One warning upfront: cosmology is full of things that are deeply counterintuitive. Space expands. Most of the universe is invisible. The oldest light we can see comes from everywhere at once. Try to resist the urge to map these ideas onto everyday intuition; they require new ones.
  </div>
</div>

<hr class="div">

<!-- ═══ 2. EXPANDING UNIVERSE ═══ -->
<div class="cs">
  <h2>The Universe is Expanding, and Light Tells Us This</h2>
  <p class="lede">When space stretches, light stretches with it. That shift in colour is our speedometer for the cosmos.</p>
  <p>In 1929, Edwin Hubble noticed something strange: almost every distant galaxy has its light shifted toward the red end of the spectrum. Not because galaxies are all rushing away from us specifically, but because the space between us and them is stretching. And as space stretches, any light wave travelling through it gets stretched too, its wavelength grows longer, shifting toward red. We call this <strong>cosmological redshift</strong>.</p>
  <p>The animation below shows exactly this. A galaxy emits light at a specific wavelength (its colour). As the universe expands (drag the slider), that wave is stretched. The same physical process tells us the universe had a beginning: run the expansion backward and everything converges.</p>

  <div class="demo">
    <canvas id="redshift-canvas" height="150"></canvas>
    <div class="demo-row">
      <label>Redshift z =</label>
      <input type="range" id="z-slider" min="0" max="30" value="0" step="1">
      <strong id="z-label">0.0</strong>
    </div>
    <div class="demo-row" style="margin-top:6px;">
      <span id="z-desc" style="color:var(--muted);font-size:.88rem;"></span>
    </div>
    <div class="demo-cap">Drag right to increase redshift and watch the wave stretch and the colour shift toward red.</div>
  </div>

  <p>The rate of expansion is parameterised by the <strong>Hubble constant H₀</strong>. It tells you how fast two points in space are moving apart per unit of distance between them. Measuring it precisely turns out to be one of the hardest problems in observational cosmology, and there is currently a serious disagreement between different measurement methods.</p>
</div>

<hr class="div">

<!-- ═══ 3. HISTORY OF THE UNIVERSE ═══ -->
<div class="cs">
  <h2>A Brief History of Everything</h2>
  <p class="lede">Run the expansion backward and you get a universe that was once unimaginably hot and dense.</p>
  <p>If the universe is expanding now, it was smaller and denser in the past. And smaller means hotter, just like compressing a gas heats it up. Wind the clock back 13.8 billion years and you reach a state so extreme that ordinary matter could not exist: no atoms, no nuclei, just a soup of fundamental particles and radiation.</p>
  <p>As the universe cooled through its expansion, it passed through a series of transitions, each one leaving observable signatures we can still measure today. The wedge below shows the universe growing from a point at the Big Bang (left) to its present size (right). The dot of light travelling from the moment of recombination to today represents the CMB photons reaching us right now.</p>

  <div class="demo" style="padding:16px 16px 8px;">
    <canvas id="history-canvas"></canvas>
    <div class="history-labels">
      <span>Inflation</span>
      <span>Nucleosynthesis</span>
      <span>Radiation era</span>
      <span>CMB released</span>
      <span>Dark ages</span>
      <span>First stars</span>
      <span>Dark energy era</span>
    </div>
    <div class="demo-cap">Time runs left to right. The wedge width shows the relative size of the universe at each epoch. A CMB photon travels from recombination (teal band) to us today.</div>
  </div>

  <div class="tl" id="tl">
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 10⁻³⁶ s &nbsp;|&nbsp; E ~ 10¹⁵ GeV</div>
      <div class="tl-h">Inflation</div>
      <div class="tl-b">The universe underwent an extraordinary burst of exponential expansion, growing by a factor of at least 10²⁶ in a fraction of a second. Quantum fluctuations were stretched to cosmic scales. These became the seeds of all structure.</div>
    </div>
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 1 s &nbsp;|&nbsp; T ~ 10¹⁰ K</div>
      <div class="tl-h">Neutrino Decoupling and Electron Positron Annihilation</div>
      <div class="tl-b">The universe cooled enough for neutrinos to stop interacting. Electrons and positrons annihilated, heating the photons. Both processes leave imprints in the CMB and in the light element abundances.</div>
    </div>
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 3 min &nbsp;|&nbsp; T ~ 10⁹ K</div>
      <div class="tl-h">Big Bang Nucleosynthesis</div>
      <div class="tl-b">Protons and neutrons fused into light nuclei: ~75% hydrogen, ~25% helium by mass, with traces of deuterium and lithium. These predictions match observations. One of the great successes of the model.</div>
    </div>
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 380,000 yr &nbsp;|&nbsp; T ~ 3,000 K</div>
      <div class="tl-h">Recombination: the universe becomes transparent</div>
      <div class="tl-b">Electrons and nuclei combined into neutral atoms. Photons, which had been scattering off free electrons continuously, suddenly could travel freely. They still reach us today as the Cosmic Microwave Background.</div>
    </div>
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 200 Myr</div>
      <div class="tl-h">Cosmic Dawn: the first stars ignite</div>
      <div class="tl-b">Dark matter concentrated into halos, pulling in gas. The first stars formed, massive, hot and short lived. Their ultraviolet light began reionising the neutral hydrogen that filled the universe.</div>
    </div>
    <div class="tl-row">
      <div class="tl-dot"></div>
      <div class="tl-t">t ~ 13.8 Gyr &nbsp;|&nbsp; Today</div>
      <div class="tl-h">The universe you see tonight</div>
      <div class="tl-b">Galaxies have assembled into the cosmic web. The expansion is accelerating. Dark energy dominates. And a small fraction of the matter, us, has become curious enough to wonder about all of it.</div>
    </div>
  </div>
</div>

<hr class="div">

<!-- ═══ 4. CMB ═══ -->
<div class="cs">
  <h2>The CMB: the First Light of the Universe</h2>
  <p class="lede">The universe was once so hot that light could not travel. What changed, and what can that ancient light tell us?</p>

  <div class="demo">
    <div class="cmb-phases">
      <button class="cmb-tab on" data-phase="0">① Hot Plasma</button>
      <button class="cmb-tab"    data-phase="1">② Recombination</button>
      <button class="cmb-tab"    data-phase="2">③ Transparency</button>
      <button class="cmb-tab"    data-phase="3">④ CMB Today</button>
    </div>
    <div class="cmb-wrap">
      <canvas id="cmb-canvas"></canvas>
      <div class="cmb-ov-group" id="cmb-ov-group">
        <div class="cmb-ov">
          <img src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/03/planck_cmb/12583930-4-eng-GB/Planck_CMB.jpg"
               alt="Planck CMB all-sky map" loading="lazy">
        </div>
        <div class="cmb-ov-cap">CMB all-sky map · ESA / Planck 2013</div>
      </div>
    </div>
    <div class="sim-btns" style="margin-top:10px;">
      <button class="sbtn on" id="cmb-play">⏸ Pause</button>
      <button class="sbtn" id="cmb-prev">← Prev</button>
      <button class="sbtn" id="cmb-next">Next →</button>
    </div>
    <div class="demo-cap">Click a phase tab or use Prev/Next to explore. Each phase auto-advances after 6 seconds.</div>
  </div>

  <p>From the pattern of temperature fluctuations in the CMB, with their angular scales and amplitudes, we can extract six numbers that completely specify the universe: its age, geometry, and the densities of ordinary matter, dark matter, and dark energy. This is what the Planck and WMAP satellites were built to measure.</p>
</div>

<hr class="div">

<!-- ═══ 5. INFLATION — HORIZON PROBLEM ═══ -->
<div class="cs">
  <h2>Inflation: Solving the Horizon Problem</h2>
  <p class="lede">Why does the CMB look the same in every direction, even from regions that should never have communicated?</p>
  <p>The CMB temperature is uniform across the entire sky to one part in 100,000. But here is the puzzle: in standard Big Bang cosmology (without inflation), two points on opposite sides of the CMB sky have never been in causal contact. Light simply did not have enough time to travel between them before the CMB was released. So how do they know to be the same temperature?</p>
  <p>Inflation solves this by proposing that the entire observable universe originated from a tiny patch that <em>was</em> in causal contact, and then that patch was stretched by a factor of at least 10²⁶ during a brief burst of exponential expansion. The animation below illustrates the difference.</p>

  <div class="demo">
    <canvas id="inflation-canvas" height="220"></canvas>
    <div class="demo-cap">Left: without inflation, the light cones of A and B never overlap, they were never in contact. Right: with inflation, a tiny causally connected patch expands to cover the whole sky.</div>
  </div>
</div>

<hr class="div">

<!-- ═══ 6. COMPOSITION ═══ -->
<div class="cs">
  <h2>What the Universe is Made Of</h2>
  <p class="lede">Everything you have ever seen, stars, planets, people, is about 5% of the universe.</p>

  <div class="comp-grid">
    <canvas id="donut-canvas"></canvas>
    <div class="comp-items">
      <div class="comp-item">
        <div class="comp-dot" style="background:#a78bfa;"></div>
        <div class="comp-text">
          <strong>Dark Energy: 68%</strong>
          <span>A uniform energy filling all of space, causing the expansion to accelerate. It acts like a repulsive gravity. Its physical origin is completely unknown. The leading candidate is the energy of the vacuum itself, but quantum field theory predicts the wrong value by 120 orders of magnitude.</span>
        </div>
      </div>
      <div class="comp-item">
        <div class="comp-dot" style="background:#38bdf8;"></div>
        <div class="comp-text">
          <strong>Dark Matter: 27%</strong>
          <span>Matter that interacts gravitationally but not electromagnetically. It neither emits nor absorbs light. We infer it from galaxy rotation curves, gravitational lensing, and the CMB. It seeded structure formation. Its particle identity is unknown despite decades of direct detection experiments.</span>
        </div>
      </div>
      <div class="comp-item">
        <div class="comp-dot" style="background:#34d399;"></div>
        <div class="comp-text">
          <strong>Ordinary Matter: 5%</strong>
          <span>Protons, neutrons, electrons: everything in the periodic table, every planet, every star, every living thing. A thin layer of familiarity on top of a deeply unknown universe.</span>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="div">

<!-- ═══ 7. STRUCTURE FORMATION ═══ -->
<div class="cs">
  <h2>How Structure Formed: Gravity Amplifying Whispers</h2>
  <p class="lede">The early universe was almost perfectly smooth. Almost.</p>
  <p>The CMB is uniform to one part in 100,000. But that tiny nonuniformity is everything. Regions that were even slightly denser than average pulled in surrounding matter through gravity, becoming denser still. Regions that were slightly emptier became emptier still. Over 13.8 billion years, these whisper quiet fluctuations were amplified by gravity into the spectacular web of galaxies and voids we observe today.</p>
  <p>Dark matter was essential to this. Because it does not interact with radiation, it started clustering before ordinary matter could, building gravitational wells that baryons later fell into. Without dark matter, there would not have been enough time to grow the structures we see.</p>
  <p>The video below shows a cosmological N body simulation, hundreds of thousands of dark matter particles evolving under gravity from a nearly uniform start. Watch the cosmic web assemble itself: thin filaments connecting dense nodes, with vast empty voids in between. This is exactly what we observe when we map the large scale structure of the real universe.</p>

  <div class="demo">
    <div class="video-wrap">
      <iframe
        src="https://www.youtube-nocookie.com/embed/s43lkwCsPPg"
        title="How The Universe Was Formed — Deep Astronomy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
    <div class="video-credit">
      Video: <a href="https://www.youtube.com/watch?v=s43lkwCsPPg&list=PLGzFc3VIbGnncS16AOSG_3n_UdZwP3wbk&index=2" target="_blank" rel="noopener">"How The Universe Was Formed"</a> by <a href="https://www.youtube.com/@deepastronomy" target="_blank" rel="noopener">Deep Astronomy</a>, via YouTube. Embedded under YouTube's standard embed terms.
    </div>
  </div>
</div>

<hr class="div">

<!-- ═══ 8. OPEN QUESTIONS ═══ -->
<div class="cs">
  <h2>What We Do Not Know</h2>
  <p class="lede">Cosmology is not a finished subject. It is in productive crisis.</p>
  <div class="oq-grid">
    <div class="oq">
      <h4>The Hubble Tension</h4>
      <p>The expansion rate H₀ measured from the CMB (early universe) disagrees with measurements from Cepheid stars and supernovae (local universe) at around 5σ. This is either a systematic error in one or both methods, or a crack in the standard model.</p>
    </div>
    <div class="oq">
      <h4>What is Dark Matter?</h4>
      <p>We have overwhelming indirect evidence for dark matter. Dozens of direct detection experiments have found nothing. The original WIMP candidate is increasingly constrained. Axions, sterile neutrinos, and primordial black holes remain active targets.</p>
    </div>
    <div class="oq">
      <h4>What is Dark Energy?</h4>
      <p>The cosmological constant fits all data, but its predicted magnitude from quantum field theory is wrong by 120 orders of magnitude. Whether it is truly constant or slowly evolving (dynamical dark energy) is one of the central questions for Euclid and future surveys.</p>
    </div>
    <div class="oq">
      <h4>The σ₈ Tension</h4>
      <p>Weak gravitational lensing surveys consistently find slightly less clustering than the CMB predicts under ΛCDM. The discrepancy is at 2 to 3σ. It could point to new physics in the growth of structure, or to systematic effects not yet fully understood.</p>
    </div>
    <div class="oq">
      <h4>What Drove Inflation?</h4>
      <p>Inflation solves real problems elegantly. But the inflaton field has no confirmed particle physics realisation. Detecting a primordial gravitational wave signal in the CMB polarisation (the B-mode signal) would be the clearest evidence for inflation.</p>
    </div>
    <div class="oq">
      <h4>Why is There Something?</h4>
      <p>The Big Bang should have created equal amounts of matter and antimatter. They would have annihilated, leaving nothing. Yet here we are. The observed matter antimatter asymmetry is unexplained within the Standard Model, one of the deepest puzzles in all of physics.</p>
    </div>
  </div>
</div>

<hr class="div">

<!-- ═══ 9. REFERENCES ═══ -->
<div class="cs">
  <div class="refs">
    <h3>References &amp; Further Reading</h3>
    <ol>
      <li>Planck Collaboration (2020). <em>Planck 2018 results VI: Cosmological parameters.</em> A&amp;A 641, A6. <a href="https://arxiv.org/abs/1807.06209" target="_blank" rel="noopener">arXiv:1807.06209</a></li>
      <li>Verde, L., Treu, T., &amp; Riess, A. G. (2019). <em>Tensions between the early and late universe.</em> Nature Astronomy 3, 891. <a href="https://arxiv.org/abs/1907.10625" target="_blank" rel="noopener">arXiv:1907.10625</a></li>
      <li>Riess, A. G. et al. (2022). <em>A comprehensive measurement of the local value of the Hubble constant.</em> ApJL 934 L7. <a href="https://arxiv.org/abs/2112.04510" target="_blank" rel="noopener">arXiv:2112.04510</a></li>
      <li>Di Valentino, E. et al. (2021). <em>In the realm of the Hubble tension: a review of solutions.</em> CQG 38, 153001. <a href="https://arxiv.org/abs/2103.01183" target="_blank" rel="noopener">arXiv:2103.01183</a></li>
      <li>Weinberg, S. (2008). <em>Cosmology.</em> Oxford University Press. A comprehensive graduate level reference.</li>
      <li>Dodelson, S. &amp; Schmidt, F. (2020). <em>Modern Cosmology,</em> 2nd ed. Academic Press. Clear and up to date.</li>
      <li>Baumann, D. <em>Cosmology lecture notes.</em> University of Cambridge. <a href="http://cosmology.amsterdam/education/cosmology/" target="_blank" rel="noopener">cosmology.amsterdam</a>. Freely available and an excellent introduction.</li>
      <li>Peebles, P. J. E. (1993). <em>Principles of Physical Cosmology.</em> Princeton University Press.</li>
      <li>Aghanim, N. et al. / Planck Collaboration (2020). <em>Planck 2018 results I: Overview.</em> A&amp;A 641, A1. <a href="https://arxiv.org/abs/1807.06205" target="_blank" rel="noopener">arXiv:1807.06205</a></li>
      <li>Euclid Collaboration (2024). <em>Euclid. I. Mission overview.</em> A&amp;A 697, A1. <a href="https://arxiv.org/abs/2405.13491" target="_blank" rel="noopener">arXiv:2405.13491</a></li>
      <li>NASA / WMAP Science Team. <em>What is the universe made of?</em> <a href="https://map.gsfc.nasa.gov/universe/uni_matter.html" target="_blank" rel="noopener">map.gsfc.nasa.gov</a></li>
      <li>ESA / Planck Collaboration (2013). <em>Planck CMB all-sky map.</em> <a href="https://www.esa.int/ESA_Multimedia/Images/2013/03/Planck_CMB" target="_blank" rel="noopener">esa.int</a>. CMB temperature anisotropy map used in this page under ESA standard image use policy.</li>
      <li>Deep Astronomy. <em>How The Universe Was Formed</em> [video]. YouTube, 2014. <a href="https://www.youtube.com/watch?v=s43lkwCsPPg" target="_blank" rel="noopener">youtube.com/watch?v=s43lkwCsPPg</a>. Used via YouTube standard embed.</li>
    </ol>
  </div>
</div>

</div><!-- .cw -->

<script>
(function(){
'use strict';

/* ═══════════════════════════════════════════════════════
   1. REDSHIFT — wave stretching animation
═══════════════════════════════════════════════════════ */
var rsCanvas = document.getElementById('redshift-canvas');
var rsCtx    = rsCanvas.getContext('2d');
var zSlider  = document.getElementById('z-slider');
var zLabel   = document.getElementById('z-label');
var zDesc    = document.getElementById('z-desc');

function wlToRGB(wl) {
  var r, g, b, a = 1;
  if (wl >= 380 && wl < 440)      { r = (440 - wl) / 60; g = 0;              b = 1; }
  else if (wl < 490)              { r = 0;              g = (wl - 440) / 50; b = 1; }
  else if (wl < 510)              { r = 0;              g = 1;               b = (510 - wl) / 20; }
  else if (wl < 580)              { r = (wl - 510) / 70; g = 1;             b = 0; }
  else if (wl < 645)              { r = 1;              g = (645 - wl) / 65; b = 0; }
  else if (wl <= 780)             { r = 1;              g = 0;               b = 0; }
  else                            { r = 0.55;           g = 0;               b = 0; }
  if (wl < 420) a = 0.3 + (wl - 380) / 40 * 0.7;
  if (wl > 700) a = 0.3 + (780 - wl) / 80 * 0.7;
  if (a < 0) a = 0; if (a > 1) a = 1;
  return 'rgba(' + Math.round(r*255) + ',' + Math.round(g*255) + ',' + Math.round(b*255) + ',' + a.toFixed(2) + ')';
}

function drawRedshift() {
  var W = rsCanvas.offsetWidth;
  if (!W) { setTimeout(drawRedshift, 30); return; }
  rsCanvas.width  = W;
  rsCanvas.height = 150;
  var H = 150;

  var z         = zSlider.value / 10;
  zLabel.textContent = z.toFixed(1);

  var lambda0   = 486;                         /* H-beta: blue-green */
  var lambdaObs = lambda0 * (1 + z);
  var emitCol   = wlToRGB(lambda0);
  var obsCol    = wlToRGB(Math.min(lambdaObs, 820));

  /* Background */
  rsCtx.fillStyle = '#06060e';
  rsCtx.fillRect(0, 0, W, H);

  var midY      = 75;
  var amplitude = 28;
  var PAD       = 44;           /* room for galaxy/eye icons */
  var divX      = Math.round(W / 2);
  var leftW     = divX - PAD - 6;
  var rightW    = W - divX - PAD - 6;

  /*
   * Key design: left panel always shows exactly N complete cycles.
   * Right panel shows the same N cycles but with period scaled by (1+z).
   * This makes the stretching immediately visible.
   */
  var N_CYCLES  = 2.5;
  var emitPx    = leftW / N_CYCLES;            /* pixels per emitted cycle */
  var obsPx     = emitPx * (1 + z);           /* pixels per observed cycle */

  /* ── Galaxy source (left icon) ── */
  var galX = PAD / 2 + 2;
  var gG = rsCtx.createRadialGradient(galX, midY, 0, galX, midY, 18);
  gG.addColorStop(0, 'rgba(255,230,120,0.95)');
  gG.addColorStop(0.5, 'rgba(255,160,30,0.5)');
  gG.addColorStop(1, 'rgba(255,100,0,0)');
  rsCtx.beginPath(); rsCtx.arc(galX, midY, 18, 0, Math.PI * 2);
  rsCtx.fillStyle = gG; rsCtx.fill();
  rsCtx.beginPath(); rsCtx.arc(galX, midY, 3, 0, Math.PI * 2);
  rsCtx.fillStyle = 'rgba(255,245,200,1)'; rsCtx.fill();

  /* ── Emitted wave ── */
  var lx0 = PAD, lx1 = divX - 6;
  rsCtx.beginPath();
  rsCtx.strokeStyle = emitCol;
  rsCtx.lineWidth   = 2.5;
  for (var px = lx0; px <= lx1; px++) {
    var y = midY - amplitude * Math.sin((px - lx0) / emitPx * Math.PI * 2);
    if (px === lx0) rsCtx.moveTo(px, y); else rsCtx.lineTo(px, y);
  }
  rsCtx.stroke();

  /* ── Divider ── */
  rsCtx.save();
  rsCtx.strokeStyle = 'rgba(255,255,255,.18)';
  rsCtx.lineWidth   = 1;
  rsCtx.setLineDash([4, 4]);
  rsCtx.beginPath(); rsCtx.moveTo(divX, 18); rsCtx.lineTo(divX, H - 18); rsCtx.stroke();
  rsCtx.setLineDash([]);
  rsCtx.fillStyle   = 'rgba(255,255,255,.30)';
  rsCtx.font        = '9px sans-serif';
  rsCtx.textAlign   = 'center';
  rsCtx.fillText('space expands', divX, midY - 6);
  rsCtx.fillText(z > 0 ? '\u00d7 (1 + ' + z.toFixed(1) + ')' : 'z = 0', divX, midY + 10);
  rsCtx.restore();

  /* ── Observed wave ── */
  var rx0 = divX + 6, rx1 = W - PAD;
  rsCtx.beginPath();
  rsCtx.strokeStyle = obsCol;
  rsCtx.lineWidth   = 2.5;
  for (var px2 = rx0; px2 <= rx1; px2++) {
    var y2 = midY - amplitude * Math.sin((px2 - rx0) / obsPx * Math.PI * 2);
    if (px2 === rx0) rsCtx.moveTo(px2, y2); else rsCtx.lineTo(px2, y2);
  }
  rsCtx.stroke();

  /* ── Observer (eye) icon ── */
  var eyeX = W - PAD / 2 - 2;
  rsCtx.strokeStyle = 'rgba(130,210,255,0.75)';
  rsCtx.lineWidth   = 1.5;
  rsCtx.beginPath(); rsCtx.ellipse(eyeX, midY, 13, 8, 0, 0, Math.PI * 2); rsCtx.stroke();
  rsCtx.beginPath(); rsCtx.arc(eyeX, midY, 4.5, 0, Math.PI * 2);
  rsCtx.fillStyle = 'rgba(90,195,255,0.9)'; rsCtx.fill();
  rsCtx.beginPath(); rsCtx.arc(eyeX, midY, 2, 0, Math.PI * 2);
  rsCtx.fillStyle = '#000'; rsCtx.fill();

  /* ── Labels ── */
  rsCtx.fillStyle = 'rgba(255,255,255,.50)';
  rsCtx.font      = '10px sans-serif';
  rsCtx.textAlign = 'left';
  rsCtx.fillText('emitted  \u03bb\u2080 = ' + lambda0 + ' nm', PAD, 14);
  rsCtx.textAlign = 'right';
  var obsDisplay = Math.round(lambdaObs);
  rsCtx.fillText('observed  \u03bb = ' + obsDisplay + ' nm' + (lambdaObs > 780 ? '  (infrared)' : ''), W - PAD, 14);

  /* ── Description ── */
  var descs = [
    [0,  'No redshift. This is how the light left the galaxy.'],
    [5,  'z = 0.5: light from about 5 billion light years away. Visibly redder.'],
    [10, 'z = 1.0: the universe was half its current age when this was emitted.'],
    [20, 'z = 2.0: most of the universe\'s star formation was happening around this time.'],
    [30, 'z = 3.0: deep into the epoch of reionisation. Almost infrared.']
  ];
  var d = descs[0][1];
  for (var di = 0; di < descs.length; di++) {
    if (zSlider.value >= descs[di][0]) d = descs[di][1];
  }
  zDesc.textContent = d;
}

drawRedshift();
zSlider.addEventListener('input', drawRedshift);
window.addEventListener('resize', drawRedshift);


/* ═══════════════════════════════════════════════════════
   2. HISTORY OF THE UNIVERSE — animated cone
═══════════════════════════════════════════════════════ */
var histCanvas = document.getElementById('history-canvas');
var histCtx    = histCanvas.getContext('2d');
var histRaf    = null;
var histVisible = false;

/* Scale factor piecewise: returns value 0..1 for x in 0..1 */
function scaleFactor(x) {
  if (x <= 0) return 0;
  if (x < 0.08) {
    /* inflation: rapid rise 0 → 0.06 */
    return (x / 0.08) * 0.06;
  } else if (x < 0.55) {
    /* radiation+matter power law: 0.06 → 0.65 */
    var t = (x - 0.08) / (0.55 - 0.08);
    return 0.06 + t * t * (0.65 - 0.06);
  } else {
    /* dark energy acceleration: 0.65 → 1.0 */
    var t2 = (x - 0.55) / (1.0 - 0.55);
    return 0.65 + t2 * t2 * (1.0 - 0.65);
  }
}

/* Epoch colour at fractional x position */
function epochColor(x) {
  if (x < 0.08)  return '#fff8e1'; /* inflation */
  if (x < 0.20)  return '#ff8a50'; /* quark/nucleosynthesis */
  if (x < 0.55)  return '#ffd54f'; /* radiation dominated */
  if (x < 0.57)  return '#4dd0e1'; /* recombination — CMB */
  if (x < 0.70)  return '#0d0d1a'; /* dark ages */
  if (x < 0.85)  return '#7c4dff'; /* first stars + reionization */
  return                '#4a148c'; /* dark energy era */
}

/* key event tick marks: [xFrac, label] */
var histTicks = [
  [0.08,  'inflation end'],
  [0.20,  'nucleosynthesis\n3 min'],
  [0.555, 'CMB\n380k yr'],
  [0.72,  'first stars\n200 Myr'],
  [1.0,   'today']
];

/* CMB photon trail */
var cmbDotTrail = [];

function drawHistory(now) {
  var W = histCanvas.offsetWidth || 820;
  var H = 200;
  histCanvas.width  = W;
  histCanvas.height = H;

  /* bg */
  histCtx.fillStyle = '#06060e';
  histCtx.fillRect(0, 0, W, H);

  /* draw cone column by column */
  for (var col = 0; col < W; col++) {
    var xf = col / W;
    var sf = scaleFactor(xf);
    var halfH = (H / 2) * sf;
    var yTop  = H / 2 - halfH;
    var yBot  = H / 2 + halfH;
    histCtx.strokeStyle = epochColor(xf);
    histCtx.lineWidth   = 1;
    histCtx.beginPath();
    histCtx.moveTo(col, yTop);
    histCtx.lineTo(col, yBot);
    histCtx.stroke();
  }

  /* cone outline */
  histCtx.beginPath();
  histCtx.strokeStyle = 'rgba(255,255,255,0.3)';
  histCtx.lineWidth   = 1.5;
  /* top curve */
  histCtx.moveTo(0, H / 2);
  for (var ci = 1; ci <= W; ci++) {
    var xfc = ci / W;
    var sfc = scaleFactor(xfc);
    histCtx.lineTo(ci, H / 2 - (H / 2) * sfc);
  }
  histCtx.stroke();
  /* bottom curve */
  histCtx.beginPath();
  histCtx.moveTo(0, H / 2);
  for (var ci2 = 1; ci2 <= W; ci2++) {
    var xfc2 = ci2 / W;
    var sfc2 = scaleFactor(xfc2);
    histCtx.lineTo(ci2, H / 2 + (H / 2) * sfc2);
  }
  histCtx.stroke();

  /* vertical tick marks + labels */
  histCtx.font      = '9px sans-serif';
  histCtx.textAlign = 'center';
  for (var ti = 0; ti < histTicks.length; ti++) {
    var tx   = histTicks[ti][0] * W;
    var tlbl = histTicks[ti][1];
    histCtx.strokeStyle = 'rgba(255,255,255,0.45)';
    histCtx.lineWidth   = 1;
    histCtx.beginPath();
    histCtx.moveTo(tx, 0);
    histCtx.lineTo(tx, H - 16);
    histCtx.stroke();
    var lines = tlbl.split('\n');
    histCtx.fillStyle = 'rgba(255,255,255,0.55)';
    for (var li = 0; li < lines.length; li++) {
      histCtx.fillText(lines[li], tx, H - 4 - (lines.length - 1 - li) * 11);
    }
  }

  /* CMB photon dot: travels from x=0.555 to x=1.0, 4s loop */
  var period   = 4000;
  var t        = (now % period) / period; /* 0..1 */
  var xStart   = 0.555;
  var xEnd     = 1.0;
  var dotXf    = xStart + t * (xEnd - xStart);
  var dotX     = dotXf * W;
  var dotY     = H / 2;

  /* trail */
  cmbDotTrail.push({ x: dotX, y: dotY, age: 0 });
  for (var tri = 0; tri < cmbDotTrail.length; tri++) {
    cmbDotTrail[tri].age += 1;
  }
  /* remove old trail points */
  cmbDotTrail = cmbDotTrail.filter(function(p) { return p.age < 30; });

  for (var tri2 = 0; tri2 < cmbDotTrail.length; tri2++) {
    var tp = cmbDotTrail[tri2];
    var alpha = (1 - tp.age / 30) * 0.5;
    histCtx.beginPath();
    histCtx.arc(tp.x, tp.y, 2, 0, Math.PI * 2);
    histCtx.fillStyle = 'rgba(255,255,220,' + alpha.toFixed(2) + ')';
    histCtx.fill();
  }

  /* bright dot */
  var grad = histCtx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 7);
  grad.addColorStop(0, 'rgba(255,255,200,1)');
  grad.addColorStop(1, 'rgba(255,255,200,0)');
  histCtx.beginPath();
  histCtx.arc(dotX, dotY, 7, 0, Math.PI * 2);
  histCtx.fillStyle = grad;
  histCtx.fill();

  if (histVisible) {
    histRaf = requestAnimationFrame(drawHistory);
  }
}

new IntersectionObserver(function(ents) {
  if (ents[0].isIntersecting && !histVisible) {
    histVisible = true;
    histRaf = requestAnimationFrame(drawHistory);
  } else if (!ents[0].isIntersecting && histVisible) {
    histVisible = false;
    if (histRaf) cancelAnimationFrame(histRaf);
  }
}, { threshold: 0.3 }).observe(histCanvas);

/* initial static draw */
(function() {
  var W = histCanvas.offsetWidth || 820;
  var H = 200;
  histCanvas.width = W; histCanvas.height = H;
  histCtx.fillStyle = '#06060e';
  histCtx.fillRect(0, 0, W, H);
})();


/* ═══════════════════════════════════════════════════════
   3. CMB — Narrative animation: hot plasma → recombination → CMB
   4 phases, auto-advance every 6s, manual tab/button control
═══════════════════════════════════════════════════════ */
(function () {

var canvas  = document.getElementById('cmb-canvas');
var ctx     = canvas.getContext('2d');
var W = 600, H = 300;

var running    = false;
var raf        = null;
var lastTs     = null;
var cmbVisible = false;

var phase     = 0;
var phaseT    = 0;       /* time within current phase, seconds */
var PHASE_DUR = 6.0;     /* seconds per phase */
var N_PHASES  = 4;

/* ── Particle pools ── */
var N_PROT = 24, N_ELEC = 24, N_PHOT = 32;
var protons = [], electrons = [], photons = [], atoms = [];
/* recombination schedule: pair[i].startT = time within phase 1 to begin pairing */
var pairs = [];
var cmbOvEl = document.getElementById('cmb-ov-group');

function rnd(a, b) { return a + Math.random() * (b - a); }

function resize() {
  var newW = canvas.offsetWidth || 600;
  W = newW;
  H = Math.round(W / 2);
  canvas.width  = W;
  canvas.height = H;
}

function initParticles() {
  resize();
  protons   = [];
  electrons = [];
  photons   = [];
  atoms     = [];
  pairs     = [];

  for (var i = 0; i < N_PROT; i++) {
    protons.push({ x: rnd(20,W-20), y: rnd(20,H-20),
      vx: rnd(-0.4,0.4), vy: rnd(-0.4,0.4),
      r: 6, alive: true });
  }
  for (var i = 0; i < N_ELEC; i++) {
    electrons.push({ x: rnd(20,W-20), y: rnd(20,H-20),
      vx: rnd(-0.9,0.9), vy: rnd(-0.9,0.9),
      r: 3, alive: true });
  }
  for (var i = 0; i < N_PHOT; i++) {
    var a = Math.random() * Math.PI * 2;
    var s = rnd(2.8, 4.2);
    photons.push({ x: rnd(0,W), y: rnd(0,H),
      vx: Math.cos(a)*s, vy: Math.sin(a)*s,
      trail: [], cd: 0, flash: 0 });
  }
  /* pair each proton i with electron i, spread across phase 1 duration */
  for (var i = 0; i < N_PROT; i++) {
    pairs.push({ pi: i, ei: i, startT: i * (PHASE_DUR / N_PROT), done: false });
  }
}

/* wrap position */
function wrap(p) {
  if (p.x < 0) p.x += W; if (p.x > W) p.x -= W;
  if (p.y < 0) p.y += H; if (p.y > H) p.y -= H;
}

/* ── UPDATE ── */
function update(dt) {
  var i, p, e, ph, pair, dx, dy, dist;

  if (phase === 0) {
    /* protons + electrons drift */
    for (i = 0; i < protons.length;   i++) { p = protons[i];   if (p.alive)  { p.x+=p.vx*dt*60; p.y+=p.vy*dt*60; wrap(p); } }
    for (i = 0; i < electrons.length; i++) { e = electrons[i]; if (e.alive)  { e.x+=e.vx*dt*60; e.y+=e.vy*dt*60; wrap(e); } }
    /* photons scatter off free particles */
    for (i = 0; i < photons.length; i++) {
      ph = photons[i];
      ph.trail.push({x:ph.x,y:ph.y});
      if (ph.trail.length > 5) ph.trail.shift();
      if (ph.cd > 0) { ph.cd -= dt; } else {
        for (var j = 0; j < protons.length; j++) {
          p = protons[j]; if (!p.alive) continue;
          dx = ph.x-p.x; dy = ph.y-p.y;
          if (dx*dx+dy*dy < 22*22) {
            var ang = Math.random()*Math.PI*2, spd=Math.sqrt(ph.vx*ph.vx+ph.vy*ph.vy);
            ph.vx=Math.cos(ang)*spd; ph.vy=Math.sin(ang)*spd; ph.cd=0.07; ph.flash=1.0; break;
          }
        }
      }
      ph.x+=ph.vx*dt*60; ph.y+=ph.vy*dt*60; wrap(ph);
      if (ph.flash>0) ph.flash=Math.max(0,ph.flash-dt*5);
    }
  }

  if (phase === 1) {
    /* process recombination pairs */
    for (i = 0; i < pairs.length; i++) {
      pair = pairs[i]; if (pair.done || phaseT < pair.startT) continue;
      p = protons[pair.pi]; e = electrons[pair.ei];
      if (!p.alive || !e.alive) { pair.done=true; continue; }
      dx = p.x-e.x; dy = p.y-e.y; dist = Math.sqrt(dx*dx+dy*dy)||1;
      var spd = Math.min(dist*0.08+1, 5);
      e.x += (dx/dist)*spd; e.y += (dy/dist)*spd;
      if (dist < 9) {
        atoms.push({ x:p.x, y:p.y, vx:rnd(-0.2,0.2), vy:rnd(-0.2,0.2),
          r:7, opacity:1, glow:1.0 });
        p.alive=false; e.alive=false; pair.done=true;
      }
    }
    /* protons + remaining electrons drift */
    for (i=0;i<protons.length;i++)   { p=protons[i];   if(p.alive){p.x+=p.vx*dt*60;p.y+=p.vy*dt*60;wrap(p);} }
    for (i=0;i<electrons.length;i++) { e=electrons[i]; if(e.alive){e.x+=e.vx*dt*60;e.y+=e.vy*dt*60;wrap(e);} }
    /* atoms drift */
    for (i=0;i<atoms.length;i++) { var a=atoms[i]; a.x+=a.vx*dt*60; a.y+=a.vy*dt*60; wrap(a); if(a.glow>0) a.glow-=dt*1.2; }
    /* photons scatter less as free count drops */
    var freeCount = protons.filter(function(q){return q.alive;}).length;
    var scatterScale = freeCount / N_PROT;
    for (i=0;i<photons.length;i++) {
      ph=photons[i];
      ph.trail.push({x:ph.x,y:ph.y}); if(ph.trail.length>7) ph.trail.shift();
      if (scatterScale>0 && ph.cd<=0) {
        for (var j=0;j<protons.length;j++) {
          p=protons[j]; if(!p.alive) continue;
          dx=ph.x-p.x; dy=ph.y-p.y;
          if(dx*dx+dy*dy<22*22) {
            var ang=Math.random()*Math.PI*2,spd=Math.sqrt(ph.vx*ph.vx+ph.vy*ph.vy);
            ph.vx=Math.cos(ang)*spd; ph.vy=Math.sin(ang)*spd; ph.cd=0.1/scatterScale; break;
          }
        }
      }
      ph.cd-=dt; ph.x+=ph.vx*dt*60; ph.y+=ph.vy*dt*60; wrap(ph);
    }
  }

  if (phase === 2) {
    /* atoms fade */
    for (i=0;i<atoms.length;i++) { atoms[i].opacity=Math.max(0,atoms[i].opacity-dt*0.6); }
    /* photons travel straight */
    for (i=0;i<photons.length;i++) {
      ph=photons[i];
      ph.trail.push({x:ph.x,y:ph.y}); if(ph.trail.length>14) ph.trail.shift();
      ph.x+=ph.vx*dt*60; ph.y+=ph.vy*dt*60; wrap(ph);
    }
  }

  if (phase === 3) {
    /* photons stream inward toward observer */
    var cx=W/2, cy=H*0.42;
    for (i=0;i<photons.length;i++) {
      ph=photons[i];
      ph.trail.push({x:ph.x,y:ph.y}); if(ph.trail.length>18) ph.trail.shift();
      dx=cx-ph.x; dy=cy-ph.y; dist=Math.sqrt(dx*dx+dy*dy)||1;
      ph.vx=(dx/dist)*3.0; ph.vy=(dy/dist)*3.0;
      ph.x+=ph.vx*dt*60; ph.y+=ph.vy*dt*60;
      if (dist<12) { /* reset to edge */
        var ang=Math.random()*Math.PI*2, r=Math.min(W,H)*0.44;
        ph.x=cx+Math.cos(ang)*r*(0.8+Math.random()*0.2);
        ph.y=cy+Math.sin(ang)*r*(0.8+Math.random()*0.2);
        ph.trail=[];
      }
    }
  }
}

/* ── DRAW ── */
function draw() {
  ctx.clearRect(0,0,W,H);
  var i, p, e, ph, a;

  /* Background per phase */
  var bg;
  if (phase === 0) {
    bg = ctx.createRadialGradient(W/2,H*0.4,0, W/2,H/2,Math.max(W,H)*0.75);
    bg.addColorStop(0,'#ff6d00'); bg.addColorStop(0.5,'#c62828'); bg.addColorStop(1,'#4a0000');
  } else if (phase === 1) {
    var tf = Math.min(phaseT/PHASE_DUR,1);
    var r0=Math.round(255-229*tf), g0=Math.round(109-80*tf), b0=Math.round(0+62*tf);
    var r1=Math.round(198-172*tf), g1=Math.round(40-28*tf), b1=Math.round(0+40*tf);
    bg = ctx.createRadialGradient(W/2,H*0.4,0, W/2,H/2,Math.max(W,H)*0.75);
    bg.addColorStop(0,'rgb('+r0+','+g0+','+b0+')');
    bg.addColorStop(1,'rgb('+r1+','+g1+','+b1+')');
  } else if (phase === 2) {
    bg = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2,Math.max(W,H)*0.75);
    bg.addColorStop(0,'#0d1b3e'); bg.addColorStop(1,'#020408');
  } else {
    bg = '#020408';
  }
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);

  /* Stars in phase 3 */
  if (phase === 3) {
    ctx.fillStyle='rgba(255,255,255,0.55)';
    for (i=0;i<50;i++) {
      var sx=((i*137.5+13)%W), sy=((i*97.3+29)%H);
      ctx.beginPath(); ctx.arc(sx,sy,i%4===0?1.2:0.7,0,Math.PI*2); ctx.fill();
    }
  }

  /* Phase 0+1: draw protons */
  if (phase <= 1) {
    for (i=0;i<protons.length;i++) {
      p=protons[i]; if(!p.alive) continue;
      var gp=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*2.8);
      gp.addColorStop(0,'rgba(255,100,80,0.9)'); gp.addColorStop(1,'rgba(255,60,40,0)');
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r*2.8,0,Math.PI*2); ctx.fillStyle=gp; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='#ff7961'; ctx.fill();
    }
    /* electrons */
    for (i=0;i<electrons.length;i++) {
      e=electrons[i]; if(!e.alive) continue;
      var ge=ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*2.8);
      ge.addColorStop(0,'rgba(0,229,255,0.9)'); ge.addColorStop(1,'rgba(0,180,255,0)');
      ctx.beginPath(); ctx.arc(e.x,e.y,e.r*2.8,0,Math.PI*2); ctx.fillStyle=ge; ctx.fill();
      ctx.beginPath(); ctx.arc(e.x,e.y,e.r,0,Math.PI*2); ctx.fillStyle='#00e5ff'; ctx.fill();
    }
  }

  /* Hydrogen atoms (phase 1+) */
  if (phase >= 1) {
    for (i=0;i<atoms.length;i++) {
      a=atoms[i]; if(a.opacity<=0) continue;
      if (a.glow>0) {
        var gg=ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,a.r*5);
        gg.addColorStop(0,'rgba(180,200,255,'+a.glow*0.5+')');
        gg.addColorStop(1,'rgba(100,140,255,0)');
        ctx.beginPath(); ctx.arc(a.x,a.y,a.r*5,0,Math.PI*2); ctx.fillStyle=gg; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
      ctx.fillStyle='rgba(160,170,200,'+a.opacity+')'; ctx.fill();
    }
  }

  /* Photons */
  for (i=0;i<photons.length;i++) {
    ph=photons[i];
    /* Trail */
    if (ph.trail.length>1) {
      ctx.beginPath();
      ctx.moveTo(ph.trail[0].x,ph.trail[0].y);
      for (var ti=1;ti<ph.trail.length;ti++) ctx.lineTo(ph.trail[ti].x,ph.trail[ti].y);
      ctx.lineTo(ph.x,ph.y);
      var trailCol, trailW;
      if (phase===3) {
        trailCol='rgba(255,130,40,0.55)'; trailW=2.0;
      } else if (phase===2) {
        trailCol='rgba(255,252,200,0.70)'; trailW=2.4;
      } else {
        trailCol='rgba(255,240,100,0.22)'; trailW=1.0;
      }
      ctx.strokeStyle=trailCol; ctx.lineWidth=trailW; ctx.stroke();
    }
    /* Scatter flash (phase 0 only) */
    if (phase===0 && ph.flash>0) {
      var fl=ph.flash;
      var gfl=ctx.createRadialGradient(ph.x,ph.y,0,ph.x,ph.y,16);
      gfl.addColorStop(0,'rgba(255,255,180,'+fl.toFixed(2)+')');
      gfl.addColorStop(0.5,'rgba(255,200,60,'+(fl*0.5).toFixed(2)+')');
      gfl.addColorStop(1,'rgba(255,160,0,0)');
      ctx.beginPath(); ctx.arc(ph.x,ph.y,16,0,Math.PI*2); ctx.fillStyle=gfl; ctx.fill();
    }
    /* Photon dot */
    var phR = phase===2 ? 6.5 : phase===3 ? 5 : 4.5;
    var phC0 = phase===3 ? 'rgba(255,150,50,1)' : phase===2 ? 'rgba(255,255,230,1)' : 'rgba(255,255,200,1)';
    var phCE = phase===3 ? 'rgba(200,60,0,0)'   : phase===2 ? 'rgba(255,230,80,0)'  : 'rgba(255,220,50,0)';
    var gph=ctx.createRadialGradient(ph.x,ph.y,0,ph.x,ph.y,phR);
    gph.addColorStop(0,phC0); gph.addColorStop(1,phCE);
    ctx.beginPath(); ctx.arc(ph.x,ph.y,phR,0,Math.PI*2); ctx.fillStyle=gph; ctx.fill();
  }

  /* Phase 2: initial burst glow */
  if (phase===2 && phaseT<1.8) {
    var bAlpha=(1.8-phaseT)/1.8*0.7;
    var gb=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*0.7);
    gb.addColorStop(0,'rgba(255,250,200,'+bAlpha+')');
    gb.addColorStop(0.3,'rgba(200,180,80,'+bAlpha*0.35+')');
    gb.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=gb; ctx.fillRect(0,0,W,H);
  }

  /* Phase 3: observer + CMB oval */
  if (phase===3) {
    var cx=W/2, cy=H*0.42;
    /* Observer */
    var go=ctx.createRadialGradient(cx,cy,0,cx,cy,18);
    go.addColorStop(0,'rgba(255,255,255,0.95)'); go.addColorStop(0.4,'rgba(100,200,255,0.5)'); go.addColorStop(1,'rgba(0,80,200,0)');
    ctx.beginPath(); ctx.arc(cx,cy,18,0,Math.PI*2); ctx.fillStyle=go; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,3.5,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.45)'; ctx.font=Math.round(W*0.022)+'px sans-serif'; ctx.textAlign='center';
    ctx.fillText('You (observer)',cx,cy+H*0.13);

    /* CMB oval is the HTML overlay — canvas draws nothing here */
  }

  /* Text overlay */
  var phases = [
    { title:'Hot Dense Plasma',
      body:'The early universe was a sea of free electrons, protons, and photons. Photons scattered constantly off the free electrons, like light in dense fog. The universe was completely opaque.' },
    { title:'Recombination: 380,000 years later',
      body:'As the universe cooled below 3,000 K, electrons and protons combined into neutral hydrogen atoms. Fewer free electrons meant photons scattered less and less.' },
    { title:'The Universe Becomes Transparent',
      body:'With no free electrons left, photons streamed freely in straight lines, for the first time ever. A burst of light filled the universe. This is the moment the CMB was born.' },
    { title:'Ancient Light Reaches Us Today',
      body:'13.8 billion years later, these photons arrive from every direction. Stretched by cosmic expansion into microwaves at 2.725 K, they form the Cosmic Microwave Background, a snapshot of the infant universe.' }
  ];
  var txt=phases[phase];
  var boxH=H*0.34;
  var grad=ctx.createLinearGradient(0,H-boxH,0,H);
  grad.addColorStop(0,'rgba(0,0,0,0)'); grad.addColorStop(0.25,'rgba(0,0,0,0.78)'); grad.addColorStop(1,'rgba(0,0,0,0.88)');
  ctx.fillStyle=grad; ctx.fillRect(0,H-boxH,W,boxH);

  var tSz=Math.max(11,Math.round(W*0.026)), bSz=Math.max(9,Math.round(W*0.019)), pad=W*0.04;
  ctx.fillStyle='rgba(167,139,250,1)'; ctx.font='bold '+tSz+'px sans-serif'; ctx.textAlign='left';
  ctx.fillText(txt.title,pad,H-boxH+tSz*2.2);
  ctx.fillStyle='rgba(255,255,255,0.82)'; ctx.font=bSz+'px sans-serif';
  var words=txt.body.split(' '), line='', lines2=[], mxW=W-pad*2;
  words.forEach(function(w){ var t=line+(line?' ':'')+w; if(ctx.measureText(t).width>mxW){lines2.push(line);line=w;}else line=t;});
  if(line) lines2.push(line);
  lines2.forEach(function(l,i){ ctx.fillText(l,pad,H-boxH+tSz*2.2+bSz*(i+1)*1.45+10); });

  /* Progress bar */
  var prog = phaseT / PHASE_DUR;
  ctx.fillStyle='rgba(255,255,255,0.12)'; ctx.fillRect(0,H-2,W,2);
  ctx.fillStyle='rgba(167,139,250,0.7)';  ctx.fillRect(0,H-2,W*prog,2);
}

/* ── PHASE TRANSITION ── */
function setPhase(p) {
  phase  = p % N_PHASES;
  phaseT = 0;
  if (phase === 2) {
    /* Photons go straight: clear trails */
    photons.forEach(function(ph){ ph.trail=[]; ph.cd=0; });
  }
  if (phase === 3) {
    /* Scatter photons around edge facing inward */
    var cx=W/2, cy=H*0.42;
    photons.forEach(function(ph,i){
      var ang=(i/N_PHOT)*Math.PI*2, r=Math.min(W,H)*0.44;
      ph.x=cx+Math.cos(ang)*r*(0.85+Math.random()*0.15);
      ph.y=cy+Math.sin(ang)*r*(0.85+Math.random()*0.15);
      ph.trail=[];
    });
  }
  /* Update tab UI */
  document.querySelectorAll('.cmb-tab').forEach(function(tab){
    tab.classList.toggle('on', parseInt(tab.getAttribute('data-phase'))===phase);
  });
  /* Show/hide real Planck CMB image overlay */
  cmbOvEl.classList.toggle('active', phase===3);
}

/* ── LOOP ── */
function loop(ts) {
  if (!running) return;
  if (lastTs===null) lastTs=ts;
  var dt=Math.min((ts-lastTs)/1000,0.05); lastTs=ts;
  phaseT+=dt;
  if (phaseT>=PHASE_DUR) setPhase(phase+1);
  resize(); update(dt); draw();
  raf=requestAnimationFrame(loop);
}

function start() {
  if (running) return;
  running=true; lastTs=null; raf=requestAnimationFrame(loop);
}
function stop() {
  running=false;
  if(raf){cancelAnimationFrame(raf);raf=null;} lastTs=null;
}

/* ── CONTROLS ── */
document.getElementById('cmb-play').addEventListener('click',function(){
  if(running){ stop(); this.textContent='▶ Play'; this.classList.remove('on'); }
  else { start(); this.textContent='⏸ Pause'; this.classList.add('on'); }
});
document.getElementById('cmb-prev').addEventListener('click',function(){
  setPhase((phase-1+N_PHASES)%N_PHASES);
  if(!running){resize();draw();}
});
document.getElementById('cmb-next').addEventListener('click',function(){
  setPhase(phase+1);
  if(!running){resize();draw();}
});
document.querySelectorAll('.cmb-tab').forEach(function(tab){
  tab.addEventListener('click',function(){
    setPhase(parseInt(tab.getAttribute('data-phase')));
    if(!running){resize();draw();}
  });
});

/* ── INTERSECTION ── */
new IntersectionObserver(function(ents){
  if(ents[0].isIntersecting && !cmbVisible){
    cmbVisible=true; initParticles(); start();
    document.getElementById('cmb-play').textContent='⏸ Pause';
    document.getElementById('cmb-play').classList.add('on');
  } else if(!ents[0].isIntersecting){
    cmbVisible=false; stop();
    cmbOvEl.classList.remove('active');
    document.getElementById('cmb-play').textContent='▶ Play';
    document.getElementById('cmb-play').classList.remove('on');
  }
},{threshold:0.25}).observe(canvas);

window.addEventListener('resize',function(){ if(!running){resize();draw();} });
resize(); draw();

})();


/* ═══════════════════════════════════════════════════════
   4. INFLATION — HORIZON PROBLEM animation, 5s loop
═══════════════════════════════════════════════════════ */
var inflCanvas  = document.getElementById('inflation-canvas');
var inflCtx     = inflCanvas.getContext('2d');
var inflRaf     = null;
var inflVisible = false;

function drawInflation(now) {
  var W = inflCanvas.offsetWidth || 500;
  var H = 220;
  inflCanvas.width  = W;
  inflCanvas.height = H;

  inflCtx.fillStyle = '#06060e';
  inflCtx.fillRect(0, 0, W, H);

  var period   = 5000;
  var t        = (now % period) / period; /* 0..1 */
  var halfW    = W / 2;
  var panW     = halfW - 10;

  inflCtx.font      = '11px sans-serif';
  inflCtx.textAlign = 'center';

  /* ── LEFT PANEL: Without inflation ── */
  var lcx  = halfW / 2;
  var lbot = H - 30;
  var cmbR = 48;

  /* CMB circle at bottom */
  inflCtx.beginPath();
  inflCtx.arc(lcx, lbot, cmbR, 0, Math.PI * 2);
  inflCtx.strokeStyle = 'rgba(77,208,225,0.7)';
  inflCtx.lineWidth   = 1.5;
  inflCtx.stroke();

  /* Points A and B on opposite sides */
  var ptAx = lcx - cmbR;
  var ptBx = lcx + cmbR;
  var ptY  = lbot;

  inflCtx.fillStyle = '#fb923c';
  inflCtx.beginPath(); inflCtx.arc(ptAx, ptY, 4, 0, Math.PI * 2); inflCtx.fill();
  inflCtx.fillStyle = '#38bdf8';
  inflCtx.beginPath(); inflCtx.arc(ptBx, ptY, 4, 0, Math.PI * 2); inflCtx.fill();
  inflCtx.fillStyle = 'rgba(255,255,255,0.7)';
  inflCtx.fillText('A', ptAx - 10, ptY + 1);
  inflCtx.fillText('B', ptBx + 10, ptY + 1);

  /* Light cones from A and B going backward in time (upward) */
  /* Cone radius at height h above base: r = h (speed of light) */
  /* Animate: cones pulse with a breathing scale factor */
  var breathe = 0.85 + 0.15 * Math.sin(t * Math.PI * 2 * 2);
  var maxH    = lbot - 24; /* available vertical space */

  /* Cone A */
  inflCtx.save();
  inflCtx.beginPath();
  /* cone fills upward: tip at (ptAx, ptY-maxH), base width 2*maxH at y=ptY */
  for (var ch = 0; ch <= maxH; ch++) {
    var r2 = (maxH - ch) * breathe;
    if (ch === 0) inflCtx.moveTo(ptAx - r2, ptY - ch);
    else          inflCtx.lineTo(ptAx - r2, ptY - ch);
  }
  for (var ch2 = maxH; ch2 >= 0; ch2--) {
    var r3 = (maxH - ch2) * breathe;
    inflCtx.lineTo(ptAx + r3, ptY - ch2);
  }
  inflCtx.closePath();
  inflCtx.fillStyle   = 'rgba(251,146,60,0.08)';
  inflCtx.fill();
  inflCtx.strokeStyle = 'rgba(251,146,60,0.45)';
  inflCtx.lineWidth   = 1;
  inflCtx.stroke();
  inflCtx.restore();

  /* Cone B */
  inflCtx.save();
  inflCtx.beginPath();
  for (var ch3 = 0; ch3 <= maxH; ch3++) {
    var r4 = (maxH - ch3) * breathe;
    if (ch3 === 0) inflCtx.moveTo(ptBx - r4, ptY - ch3);
    else           inflCtx.lineTo(ptBx - r4, ptY - ch3);
  }
  for (var ch4 = maxH; ch4 >= 0; ch4--) {
    var r5 = (maxH - ch4) * breathe;
    inflCtx.lineTo(ptBx + r5, ptY - ch4);
  }
  inflCtx.closePath();
  inflCtx.fillStyle   = 'rgba(56,189,248,0.08)';
  inflCtx.fill();
  inflCtx.strokeStyle = 'rgba(56,189,248,0.45)';
  inflCtx.lineWidth   = 1;
  inflCtx.stroke();
  inflCtx.restore();

  /* "never in contact" label */
  inflCtx.fillStyle = 'rgba(255,80,80,0.85)';
  inflCtx.font      = '10px sans-serif';
  inflCtx.textAlign = 'center';
  inflCtx.fillText('never in contact \u2717', lcx, 18);

  /* Panel title */
  inflCtx.fillStyle = 'rgba(255,255,255,0.55)';
  inflCtx.font      = 'bold 11px sans-serif';
  inflCtx.fillText('Without inflation', lcx, H - 8);

  /* ── RIGHT PANEL: With inflation ── */
  var rcx  = halfW + halfW / 2;
  var rcxP = halfW + 10; /* panel left edge */

  /* Phase 0..0.35: tiny dot expands rapidly (inflation) */
  /* Phase 0.35..0.7: large circle with A,B shown */
  /* Phase 0.7..1.0: arrow down to CMB circle */

  var inflatT = Math.min(t / 0.35, 1); /* 0..1 during inflation phase */

  /* Pre-inflation dot */
  var dotR = 4 + inflatT * (panW * 0.38 - 4);
  var dotY = H / 2 - 20;

  /* Draw the expanding circle */
  var fillA = t < 0.35 ? 0.15 + inflatT * 0.1 : 0.12;
  inflCtx.beginPath();
  inflCtx.arc(rcx, dotY, dotR, 0, Math.PI * 2);
  inflCtx.strokeStyle = 'rgba(167,139,250,0.7)';
  inflCtx.lineWidth   = 1.5;
  inflCtx.stroke();
  inflCtx.fillStyle   = 'rgba(167,139,250,' + fillA + ')';
  inflCtx.fill();

  /* Label: "all in causal contact" */
  if (inflatT > 0.5 || t > 0.35) {
    inflCtx.fillStyle = 'rgba(52,211,153,0.9)';
    inflCtx.font      = '10px sans-serif';
    inflCtx.textAlign = 'center';
    inflCtx.fillText('all in causal contact \u2713', rcx, dotY - dotR - 6);
  }

  /* Show A and B on circle after expansion */
  if (t > 0.35) {
    var abShowFrac = Math.min((t - 0.35) / 0.2, 1);
    var abAlpha    = abShowFrac;
    inflCtx.fillStyle = 'rgba(251,146,60,' + abAlpha + ')';
    inflCtx.beginPath();
    inflCtx.arc(rcx - dotR, dotY, 4, 0, Math.PI * 2);
    inflCtx.fill();
    inflCtx.fillStyle = 'rgba(56,189,248,' + abAlpha + ')';
    inflCtx.beginPath();
    inflCtx.arc(rcx + dotR, dotY, 4, 0, Math.PI * 2);
    inflCtx.fill();
    inflCtx.fillStyle = 'rgba(255,255,255,' + (abAlpha * 0.7) + ')';
    inflCtx.font      = '10px sans-serif';
    inflCtx.textAlign = 'center';
    inflCtx.fillText('A', rcx - dotR - 10, dotY + 1);
    inflCtx.fillText('B', rcx + dotR + 10, dotY + 1);
  }

  /* Arrow down and CMB circle */
  if (t > 0.55) {
    var arrFrac = Math.min((t - 0.55) / 0.25, 1);
    var cmbBotY = H - 30;
    var arrowEndY = dotY + dotR + 6 + arrFrac * (cmbBotY - cmbR - dotY - dotR - 12);

    inflCtx.strokeStyle = 'rgba(167,139,250,0.5)';
    inflCtx.lineWidth   = 1.5;
    inflCtx.setLineDash([4, 3]);
    inflCtx.beginPath();
    inflCtx.moveTo(rcx, dotY + dotR + 4);
    inflCtx.lineTo(rcx, arrowEndY);
    inflCtx.stroke();
    inflCtx.setLineDash([]);

    if (arrFrac > 0.85) {
      inflCtx.beginPath();
      inflCtx.arc(rcx, cmbBotY, cmbR, 0, Math.PI * 2);
      inflCtx.strokeStyle = 'rgba(77,208,225,0.7)';
      inflCtx.lineWidth   = 1.5;
      inflCtx.stroke();

      inflCtx.fillStyle = 'rgba(255,255,255,0.5)';
      inflCtx.font      = '9px sans-serif';
      inflCtx.textAlign = 'center';
      inflCtx.fillText('inflation stretches one tiny patch', rcx, cmbBotY + cmbR + 11);
      inflCtx.fillText('\u2192 what we see as the whole sky', rcx, cmbBotY + cmbR + 22);
    }
  }

  /* Panel title */
  inflCtx.fillStyle = 'rgba(255,255,255,0.55)';
  inflCtx.font      = 'bold 11px sans-serif';
  inflCtx.textAlign = 'center';
  inflCtx.fillText('With inflation', rcx, H - 8);

  /* Divider line */
  inflCtx.strokeStyle = 'rgba(255,255,255,0.12)';
  inflCtx.lineWidth   = 1;
  inflCtx.beginPath();
  inflCtx.moveTo(halfW, 0);
  inflCtx.lineTo(halfW, H);
  inflCtx.stroke();

  if (inflVisible) {
    inflRaf = requestAnimationFrame(drawInflation);
  }
}

new IntersectionObserver(function(ents) {
  if (ents[0].isIntersecting && !inflVisible) {
    inflVisible = true;
    inflRaf = requestAnimationFrame(drawInflation);
  } else if (!ents[0].isIntersecting && inflVisible) {
    inflVisible = false;
    if (inflRaf) cancelAnimationFrame(inflRaf);
  }
}, { threshold: 0.3 }).observe(inflCanvas);


/* ═══════════════════════════════════════════════════════
   5. DONUT — composition, animated on scroll
═══════════════════════════════════════════════════════ */
var dnCanvas = document.getElementById('donut-canvas');
var dnCtx    = dnCanvas.getContext('2d');
var dnProg   = 0;
var dnActive = false;
var dnRaf    = null;
var segs     = [
  { f: 0.68, c: '#a78bfa' },
  { f: 0.27, c: '#38bdf8' },
  { f: 0.05, c: '#34d399' }
];

function drawDonut(p) {
  var S = dnCanvas.offsetWidth || 220;
  dnCanvas.width  = S;
  dnCanvas.height = S;
  var cx = S / 2, cy = S / 2, R = S * 0.43, ri = S * 0.26;
  dnCtx.clearRect(0, 0, S, S);
  var ang = -Math.PI / 2;
  for (var si = 0; si < segs.length; si++) {
    var span = segs[si].f * Math.PI * 2 * p;
    dnCtx.beginPath();
    dnCtx.arc(cx, cy, R, ang, ang + span);
    dnCtx.arc(cx, cy, ri, ang + span, ang, true);
    dnCtx.closePath();
    dnCtx.fillStyle = segs[si].c;
    dnCtx.fill();
    ang += span;
  }
  if (p > 0.98) {
    dnCtx.fillStyle  = 'rgba(255,255,255,.8)';
    dnCtx.font       = 'bold ' + Math.round(S * 0.11) + 'px sans-serif';
    dnCtx.textAlign  = 'center';
    dnCtx.textBaseline = 'middle';
    dnCtx.fillText('\u039BCDM', cx, cy - S * 0.04);
    dnCtx.font       = Math.round(S * 0.075) + 'px sans-serif';
    dnCtx.fillStyle  = 'rgba(255,255,255,.45)';
    dnCtx.fillText('model', cx, cy + S * 0.08);
  }
}

function animDonut() {
  dnProg += 0.022;
  if (dnProg > 1) dnProg = 1;
  drawDonut(dnProg);
  if (dnProg < 1) dnRaf = requestAnimationFrame(animDonut);
}

new IntersectionObserver(function(ents) {
  if (ents[0].isIntersecting && !dnActive) {
    dnActive = true;
    animDonut();
  }
}, { threshold: 0.3 }).observe(dnCanvas);
drawDonut(0);


/* ═══════════════════════════════════════════════════════
   6. TIMELINE — scroll reveal
═══════════════════════════════════════════════════════ */
var tlObs = new IntersectionObserver(function(ents) {
  ents.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.tl-row').forEach(function(el) { tlObs.observe(el); });


/* ═══════════════════════════════════════════════════════
   8. RESIZE HANDLERS
═══════════════════════════════════════════════════════ */
window.addEventListener('resize', function() {
  drawRedshift();
  drawDonut(dnProg);
  /* history and inflation redraw on their next animation frame */
});

})();
</script>
