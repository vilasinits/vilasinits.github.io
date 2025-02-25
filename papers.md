---
layout: page
title: My Papers
permalink: /papers.html/
---

<!-- PUBLICATIONS -->
<div class="cv-section">
  <h2>Publications</h2>
  <ul class="publication-list">
    <li>
      <div class="pub-info">
        <span class="pub-status">Submitted:</span>
        <div class="pub-details">
            <a>
            "Generative modeling of convergence maps based on predicted one-point statistics"
            </a>
            <p class="pub-authors">
            Vilasini Tinnaneri Sreekanth, Jean-Luc Starck and Sandrine Codis
            </p>
            <p class="pub-journal">
            A&A
            </p>
            <!-- <p class="pub-doi">
            DOI: <a href="https://doi.org/10.1051/0004-6361/202450061" target="_blank">10.1051/0004-6361/202450061</a>
            </p> -->
        </div>
        <p class="pub-abstract">
        Abstract: 
        Weak gravitational lensing is a crucial probe for cosmology, yet conventional power spectrum analyses overlook the non-Gaussian features arising from nonlinear structure formation. We introduce an emulator that directly generates convergence kappa maps from an input power spectrum and wavelet ℓ1-norm, eliminating the need for resource-intensive simulations. By iteratively tuning wavelet coefficients to match target marginal distributions and inter-scale correlations, our method incorporates higher-order statistics, resulting in kappa maps that accurately reproduce the input power spectrum and capture the necessary statistical complexities for weak lensing studies.
      </p>
      </div>
    </li>
    <li>
      <div class="pub-info">
        <span class="pub-status">Accepted:</span>
        <div class="pub-details">
            <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202450061" target="_blank" class="pub-title">
            "Theoretical wavelet ℓ1-norm from one-point probability density function prediction"
            </a>
            <p class="pub-authors">
            Vilasini Tinnaneri Sreekanth, Sandrine Codis, Alexandre Barthelemy, and Jean-Luc Starck
            </p>
            <p class="pub-journal">
            A&A, 691 (2024) A80
            </p>
            <p class="pub-doi">
            DOI: <a href="https://doi.org/10.1051/0004-6361/202450061" target="_blank">10.1051/0004-6361/202450061</a>
            </p>
        </div>
        <p class="pub-abstract">
        Abstract:
        Context. Weak gravitational lensing, which results from the bending of light by matter along the line of sight, is a potent tool for exploring large-scale structures, particularly in quantifying non-Gaussianities. It is a pivotal objective for upcoming surveys. In the realm of current and forthcoming full-sky weak-lensing surveys, convergence maps, which represent a line-of-sight integration of the matter density field up to the source redshift, facilitate field-level inference. This provides an advantageous avenue for cosmological exploration. Traditional two-point statistics fall short of capturing non-Gaussianities, necessitating the use of higher-order statistics to extract this crucial information. Among the various available higher-order statistics, the wavelet ℓ1 -norm has proven its efficiency in inferring cosmology. However, the lack of a robust theoretical framework mandates reliance on simulations, which demand substantial resources and time.
        Aims. Our novel approach introduces a theoretical prediction of the wavelet ℓ1-norm for weak-lensing convergence maps that is grounded in the principles of large-deviation theory. This method builds upon recent work and offers a theoretical prescription for an aperture mass one-point probability density function.
        Methods. We present for the first time a theoretical prediction of the wavelet ℓ1-norm for convergence maps that is derived from the theoretical prediction of their one-point probability distribution. Additionally, we explored the cosmological dependence of this prediction and validated the results on simulations.
        Results. A comparison of our predicted wavelet ℓ1 -norm with simulations demonstrates a high level of accuracy in the weakly nonlinear regime. Moreover, we show its ability to capture cosmological dependence. This paves the way for a more robust and efficient parameter-inference process.
      </p>
      </div> 
    </li>
    <li>
      <div class="pub-info">
        <span class="pub-status">In Prep:</span>
        <div class="pub-details">
            <a>
            "Cosmological N-body simulations with topological defects"
            </a>
            <p class="pub-authors">
            Tinnaneri S Vilasini, Maulik Bhatt, Disrael Cunha, Martin Kunz and Asier Lopez-Eiguren
            </p>
            <p class="pub-journal">
            JCAP
            </p>
        </div>
        <p class="pub-abstract">
        Abstract:
        This paper explores the impact of topological defects on cosmic structure formation through a novel integration of global defect evolution within N-body simulations. Topological defects, which form during phase transitions in the early universe through spontaneous symmetry breaking, serve as potential fossil relics of high-energy physics and could provide direct probes of early universe conditions. We implement a methodology where global defects evolve independently while their stress-energy tensor contributes to metric solutions in the relativistic N-body code Gevolution. Our approach offers a general framework applicable to various cosmological scenarios. We present tests validating the accuracy and consistency of our implementation, followed by results demonstrating how these defects influence structure formation. This work provides new insights into the observable consequences of topological defects, and offers a computational tool for studying defect-influenced cosmological evolution.
      </p>
      </div> 
    </li>
  </ul>
</div>



<style>
    /* Overall page styling (if not already in a global stylesheet) */
    body {
        font-family: "Open Sans", Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
    }

    .cv-section {
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .publication-list {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .publication-list li {
    border-bottom: 1px solid #ddd;
    padding: 1.5rem 0;
    }

    .publication-list li:last-child {
    border-bottom: none;
    }

    .pub-info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: baseline;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    }

    .pub-status {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    }

    .pub-title {
    font-style: italic;
    color: #333;
    }

    .pub-details .pub-title {
    font-size: 1.1em;
    color: #007BFF;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    }

    .pub-details .pub-authors,
    .pub-details .pub-journal,
    .pub-details .pub-doi {
    margin: 0.3rem 0;
    color: #555;
    font-size: 0.95em;
    }

    .pub-details .pub-doi a {
    color: #007BFF;
    text-decoration: none;
    }

    .pub-journal {
    color: #007BFF;
    }

    .pub-abstract {
    margin: 0.8rem 0 0;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
    max-width: 800px;
    }

    /* Optional: Add a hover effect to publication items */
    .publication-list li:hover {
    background-color: #efefef;
    transition: background-color 0.3s ease;
    }
</style>