---
layout: page
title: My Softwares
permalink: /softwares.html/
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