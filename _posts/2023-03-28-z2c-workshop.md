---
layout: z2c
title: "z2C:Workshop"
categories: misc
permalink: /z2c-workshop/
---

<header class="z2csite-header">
  <div class="z2cdynamic-title">
    <h1 class="z2cmain-title">z2C: Workshop</h1>
    <!-- <div class="z2cscroll-arrow-container">
      <a href="#about" class="z2cscroll-down-arrow">
        &#x2193; 
      </a>
    </div> -->
  </div>
</header>

<main>
  <section id="about" class="z2ccontent-section">
  <h1>About</h1>
  <br>
  <br>
    <!-- About content here -->
        Welcome to the "z2C: Zero to Cosmology" workshop, hosted by the PhD and PostDocs of <a href="https://www.cosmostat.org/"><strong>CosmoStat</strong></a> and its collaborators on the April 9th and 10th. People in CosmoStat and its collaborators, come from diverse backgrounds—some steeped in theory, others grounded in observations, and still others bridging the gap between cosmology and computer science. Our collaborative efforts converge on unraveling the mysteries of the cosmos, each of us approaching similar questions from unique perspectives. Our regular meetings, journal clubs, and learning sessions are a testament to this multifaceted approach, enriching our collective understanding and sparking innovative ideas.
        <br>
        Recognizing the value of our diverse expertise, we propose a "back-to-uni" style workshop: "z2C: Zero to Cosmology," scheduled for April 9th and 10th. This initiative is not about exhaustive coverage of cosmology or computer science. Instead, it's about offering a concise, comprehensive introduction to the key topics that frequently surface in our day-to-day work and discussions. By doing so, we aim to make it easier for everyone—regardless of their background—to follow along, participate more actively in discussions, and grasp the broader picture along with the specific advantages and limitations inherent to various approaches.
        <br>
        Tailored for master's students, PhD candidates, and postdoctoral researchers within CosmoStat and beyond, this workshop will blend lectures with hands-on sessions. Our goal is to ensure that participants not only understand the foundational theories but also how these theories are applied in practice, thereby fostering a deeper comprehension of our work's impact. Join us for an enlightening journey that promises to broaden your horizons and deepen your understanding of the cosmos as we explore it from every angle.
  </section>

<section id="program" class="z2ccontent-section">
  <h1>Program</h1>
  <br>
  <br>
  <h3>Day 1</h3>
  <ol>
    <li>GR introduction 
        <div class="description">
            Contact Person: <a href="https://www.cosmostat.org/people/sacha-guerrini"><strong>Sacha</strong></a>, <a href="https://www.cosmostat.org/people/andreas-tersenov"><strong>Andreas</strong></a>
            <br>
            This will be a 45min lecture and ...
        </div>
    </li>
    <li>Introduction to Cosmology 
        <div class="description">
            Contact person: <a href="https://www.cosmostat.org/people/vilasini-tinnaneri-sreekanth"><strong>Vilasini</strong></a>
            <br>
            This will be a 90 min lecture and...
        </div>
    </li>
    <li>Bayes Theorem 
        <div class="description">
        Contact Person: <a href="https://www.cosmostat.org/people/lisa-goh"><strong>Lisa Goh</strong></a>, <a href="https://www.cosmostat.org/people/andreas-tersenov"><strong>Andreas</strong></a>, <a href="link-to-hugo-profile"><strong>Hugo</strong></a>
        <br>
        This will be a 45min lecture and...
        </div>
    </li>
    <li>Summary Statistics 
      <div class="description">
        Contact Person: <a href="https://www.cosmostat.org/people/vilasini-tinnaneri-sreekanth"><strong>Vilasini</strong></a> 
        <br>
        This will be a 45min lecture and on day 1...
      </div>
    </li>
  </ol>

  
  <h3>Day 2</h3>
  <ol>
    <li>Summary Statistics 
      <div class="description">
        Contact Person: <a href="https://www.cosmostat.org/people/vilasini-tinnaneri-sreekanth"><strong>Vilasini</strong></a> 
        <br>
        This will be a 45min lecture and on day2...
      </div>
    </li>
    <li>Observables 
        <div class="description">
          Contact Person: <a href="https://www.cosmostat.org/people/lucie-baumont"><strong>Lucie</strong></a>, <a href="https://www.linkedin.com/in/romain-paviot-68853b260/?trk=people-guest_people_search-card&originalSubdomain=fr"><strong>Romain</strong></a>, <a href="https://www.linkedin.com/in/nicolas-cerardi/?originalSubdomain=fr"><strong>Nicolas</strong></a>, <a href="https://www.cosmostat.org/people/fabian-hervas-peters"><strong>Fabian</strong></a>, <a href="https://www.cosmostat.org/people/sacha-guerrini"><strong>Sacha</strong></a>, <a href="https://www.cosmostat.org/people/lisa-goh"><strong>Lisa</strong></a>, <a href="https://www.linkedin.com/in/hsimonfroy/?locale=fr_FR"><strong>Hugo</strong></a>
          <br>
          This will be a 90min lecture and...(WL, GC, CMB, SL, Clusters, SNe1a, GW, Voids)
        </div>
    </li>
    <li>ML, Inverse problem 
      <div class="description">
        Contact Person: <a href="https://www.cosmostat.org/people/hubert-leterme"><strong>Hubert</strong></a>, <a href="https://www.cosmostat.org/people/ezequiel-centofanti"><strong>Ezequeil</strong></a>
        <br>
        This will be a 90min lecture and...
      </div>
    </li>
    <li>Surveys
      <div class="description">
        Contact Person: <a href="https://www.cosmostat.org/people/fabian-hervas-peters"><strong>Fabian</strong></a>
        <br>
        This will be a 45min lecture and...
      </div>
    </li>
  </ol>

</section>

<section id="resources" class="z2ccontent-section">
  <h1>Resources</h1>
  <br>
  <br>
  We will put the links to the github repo, codes, slides or any other relevant materials here!
</section>

</main>

<script>
    $(document).ready(function() {
  var header = $('.site-header'); // cache header selector for performance
  var dynamicTitle = $('.dynamic-title'); // cache title selector for performance
  var originalTitleSize = $('.main-title').css('font-size');

  $(window).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();

    // Adjust the point of change as per your layout and preferences
    if (scrollDistance > 100) {
      if (!header.hasClass('small-title')) {
        header.addClass('small-title');
        dynamicTitle.animate({ 'font-size': '1em' }, 300);
      }
    } else {
      if (header.hasClass('small-title')) {
        header.removeClass('small-title');
        dynamicTitle.animate({ 'font-size': originalTitleSize }, 300);
      }
    }
  });
});
</script>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.z2ccontent-section ol li').forEach((item) => {
    item.addEventListener('click', function() {
      this.querySelector('.description').style.display = this.querySelector('.description').style.display === 'block' ? 'none' : 'block';
    });
  });
});
</script>