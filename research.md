---
layout: page
title: My Research
permalink: /research.html/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script>
  window.MathJax = {
    tex: {
      packages: {'[+]': ['base', 'ams']}, // load additional packages if needed
    },
    loader: {
      load: ['[tex]/ams']
    },
    chtml: {
      // Choose your math font:
      // Options include: "TeX", "STIX", "STIXGeneral", "Asana Math", "Neo-Euler", 
      // "Gyre Pagella", "Gyre Schola", "Gyre Termes", etc.
      font: 'TeX'
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>


<!-- ====== WEAK LENSING SECTION ====== -->
<div class="content-container">
  <h2>Weak-lensing</h2>
  <p>
    Weak gravitational lensing is a phenomenon in astrophysics and cosmology that occurs when the path of light 
    from distant objects, such as galaxies, is subtly curved by the gravitational influence of intervening matter, 
    including dark matter and galaxy clusters. This effect results in the distortion and shearing of the images 
    of these background objects. Unlike strong lensing, where the bending of light is so significant that it creates 
    multiple distinct images, weak lensing induces subtle, coherent distortions in the shapes of background galaxies.
  </p>

  <img src="/assets/images/weaklensing.jpeg" class="float-image-left" alt="Weak Lensing Image">

  <p>
    Weak lensing convergence maps play a crucial role in our understanding of the cosmos. These maps are generated 
    by studying the distortion of light from distant galaxies as it passes through the gravitational influence of 
    massive structures, such as galaxy clusters and dark matter concentrations. By measuring the apparent deformation 
    of background galaxies, researchers construct weak lensing convergence maps that provide a unique window into 
    the distribution of matter in the universe.
  </p>

  <p>
    Higher-order statistics, like the wavelet l1-norm, are essential tools in the analysis 
    of these maps. While traditional statistics focus on averages and two-point correlations, higher-order statistics 
    capture more complex and nuanced information. In the case of weak lensing convergence maps, they enable us to 
    explore non-Gaussian features and rare cosmic structures that might be overlooked by simpler statistics. These 
    higher-order measures help uncover subtle yet significant deviations from theoretical expectations, shedding light 
    on the intricate interplay between dark matter, dark energy, and the large-scale structure of the universe. In 
    essence, they offer a deeper and more comprehensive understanding of the cosmic web and the fundamental forces 
    shaping our universe.
  </p>

  <p>
    In my research on weak lensing convergence maps, I focus on analyzing higher-order statistics, particularly 
    the wavelet l1-norm. This statistical measure allows me to study the distribution of weak lensing convergence 
    values across the observed map. To facilitate this analysis, I employ a theoretical model that describes the 
    expected behavior of the convergence map, helping me draw meaningful conclusions and insights about the cosmic 
    structures and gravitational lensing effects that influence these maps. By comparing the theoretical model to 
    observed data, I aim to uncover valuable information about the large-scale structure of the universe and the 
    nature of dark matter and dark energy.
  </p>
</div>

<!-- ====== TOPOLOGICAL DEFECTS SECTION ====== -->
<div class="content-container">
  <h2>Topological Defects</h2>
  <p>
    Topological defects are fascinating cosmic phenomena that emerge during phase transitions in the early universe. 
    They arise as a result of field configurations that cannot be continuously deformed into a trivial state, leading 
    to the formation of topologically stable structures. One notable characteristic of topological defects is their 
    persistence throughout cosmic history, effectively acting as active perturbation seeds that can influence the 
    evolution of the universe.
  </p>

  <p>
    In a typical cosmological scenario, vector modes, which represent the direction of physical quantities, tend to 
    decay rapidly and have minimal impact on the overall structure formation process. However, what sets topological 
    defects apart is their ability to generate vector and tensor modes with magnitudes comparable to scalar modes 
    during their formation. This unique feature has far-reaching implications for the large-scale structure of the 
    universe.
  </p>

  <img src="/assets/images/defectnetwork.png" class="float-image-right" alt="Defect Network Image">

  <p>
    The generation of vector and tensor modes by topological defects introduces anisotropic terms into the equations 
    governing the evolution of the universe. These anisotropic terms can manifest as distinctive signatures in the 
    cosmic structure. To understand and study the specific impact of topological defects on structure formation, it 
    becomes essential to employ advanced tools such as relativistic N-body simulations. These simulations provide a 
    comprehensive framework for modeling the complex interplay between topological defects and the evolving universe, 
    allowing scientists to explore the consequences of these defects on the cosmic web and gain valuable insights 
    into the fundamental forces shaping our cosmos. In essence, the study of topological defects adds a unique and 
    intriguing dimension to our understanding of the universe's large-scale structure and its origins.
  </p>
</div>

<!-- ====== SOFTWARE SECTION ====== -->
<div class="content-container">
  <h2>Software</h2>
  
  <div class="cards-wrapper">    
    <div class="card">
      <h3>LDT l1-norm Prediction</h3>
      <p>Repo to get the prediction of the wavelet l1-norm of weak lensing convergence for a given cosmology.</p>
      <a href="https://github.com/vilasinits/LDT_2cell_l1_norm" target="_blank">View on GitHub</a>
    </div>
    
    <div class="card">
      <h3>Global Defects</h3>
      <p>Repo to simulate global topological defects.</p>
      <a href="https://github.com/vilasinits/GlobalDefect" target="_blank">View on GitHub</a>
    </div>
    
    <div class="card">
      <h3>GOLCONDA</h3>
      <p>Repo to emulate weak lensing convergence maps for a given input power spectrum and the wavelet l1-norm, 
      based on a generalized forward-backwards method.</p>
      <a href="https://github.com/vilasinits/GOLCONDA" target="_blank">View on GitHub</a>
    </div>

    <div class="card">
      <h3>TALKS</h3>
      <p>A repository of my talks.</p>
      <a href="https://github.com/vilasinits/Talks" target="_blank">View on GitHub</a>
    </div>
  </div>
</div>

<!-- ====== STYLES ====== -->
<style>

    /* Use a more modern, professional font (Google Fonts, for example) */
    body {
    font-family: "Open Sans", Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    }

    /* Container styling to give sections a subtle, professional card-like look */
    .content-container {
    background-color: #f8f8f8;       /* light neutral background */
    border-radius: 8px;              /* slightly rounded corners */
    padding: 2rem;                   /* spacing inside */
    margin: 2rem auto;               /* spacing between sections */
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 900px;                /* limit width for better readability */
    }

    /* Heading styles */
    .content-container h2 {
    margin-top: 0;
    font-size: 1.8rem;
    color: #2c3e50;                  /* deeper shade for contrast */
    border-bottom: 2px solid #ccc;   /* subtle underline */
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    }

    /* Paragraph text styling */
    .content-container p {
    text-align: justify;
    margin-bottom: 1rem;
    }

    /* Floated images with consistent margins */
    .float-image-left {
    float: left;
    margin: 0 1rem 1rem 0;
    max-width: 300px;
    border-radius: 6px;
    }

    .float-image-right {
    float: right;
    margin: 0 0 1rem 1rem;
    max-width: 300px;
    border-radius: 6px;
    }

    /* Clear float for containers (in case content extends below images) */
    .content-container::after {
    content: "";
    display: block;
    clear: both;
    }

    /* ======== Software Cards Section ======== */
    .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;               /* increased gap for a more spacious look */
    margin-top: 2rem;          /* spacing above the cards */
    justify-content: center;   
    }

    /* Individual card styling */
    .card {
    width: 270px;              /* slightly narrower for a refined look */
    min-height: 170px;
    padding: 1.5rem;
    background: #ffffff;       /* white background for contrast */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;    /* so the button stays at the bottom if text grows */
    justify-content: space-between;
    }

    /* Card hover effect */
    .card:hover {
    transform: translateY(-5px);         /* slight lift on hover */
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    /* Card heading */
    .card h3 {
    margin-top: 0;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: #2c3e50;            /* consistent with section headings */
    }

    /* Card text */
    .card p {
    flex-grow: 1;              /* let the paragraph expand in the middle */
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
    color: #555;
    }

    /* Card link */
    .card a {
    text-decoration: none;
    color: #007acc;
    font-weight: 600;
    align-self: flex-start;
    margin-top: auto;
    }

    .card a:hover {
    text-decoration: underline;
    }
</style>
