---
layout: page
title: Travel
permalink: /travel.html/
---

<style>
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .portfolio-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.1s ease;
  }

  .portfolio-item:hover img {
    transform: scale(1.15); /* Slight zoom on hover */
  }

  .portfolio-item figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 0.9em;
    display: none; /* Hidden by default, can be used later for captions */
  }

  .portfolio-item:hover figcaption {
    display: block;
  }

    /* Overlay styles */
  .image-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* Image container in overlay */
  .image-container {
    max-width: 90%;
    max-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Ensure the large image maintains its aspect ratio and is centered */
  .image-container img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain; /* Maintain aspect ratio */
    border-radius: 10px;
    margin: auto;
  }

  /* Close button */
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
    color: white;
    cursor: pointer;
    background: none;
    border: none;
  }

  /* Ensure everything works responsively */
  @media (max-width: 768px) {
    .portfolio-item img {
      height: 150px;
    }
}
</style>

<h3>Athens, Greece
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/greece/pic7.webp" class="image-link">
      <img src="/photos/greece/pic7.webp" alt="Place 1">
    </a>
    <figcaption> Athens, greece
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/greece/pic2.webp" class="image-link">
      <img src="/photos/greece/pic2.webp" alt="Place 1">
    </a>
    <figcaption> Acropolic in Athens
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/greece/pic3.webp" class="image-link">
      <img src="/photos/greece/pic3.webp" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/greece/pic4.webp" class="image-link">
      <img src="/photos/greece/pic4.webp" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/greece/pic5.webp" class="image-link">
      <img src="/photos/greece/pic5.webp" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/greece/pic6.webp" class="image-link">
      <img src="/photos/greece/pic6.webp" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>The Great Smokey Mountains, USA
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/smokeys/pic1.jpg" class="image-link">
      <img src="/photos/smokeys/pic1.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/smokeys/pic2.jpg" class="image-link">
      <img src="/photos/smokeys/pic2.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/smokeys/pic3.jpg" class="image-link">
      <img src="/photos/smokeys/pic3.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>Chicago, USA
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/chicago/pic1.jpg" class="image-link">
      <img src="/photos/chicago/pic1.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/chicago/pic2.jpg" class="image-link">
      <img src="/photos/chicago/pic2.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/chicago/pic3.jpg" class="image-link">
      <img src="/photos/chicago/pic3.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>Crete, Greece
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/crete/pic1.jpg" class="image-link">
      <img src="/photos/crete/pic1.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/crete/pic2.jpg" class="image-link">
      <img src="/photos/crete/pic2.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/crete/pic3.jpg" class="image-link">
      <img src="/photos/crete/pic3.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>South France
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic18.JPG" class="image-link">
      <img src="/photos/southfrance/pic18.JPG" alt="SF">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic2.JPG" class="image-link">
      <img src="/photos/southfrance/pic2.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic21.JPG" class="image-link">
      <img src="/photos/southfrance/pic21.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic12.JPG" class="image-link">
      <img src="/photos/southfrance/pic12.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic19.JPG" class="image-link">
      <img src="/photos/southfrance/pic19.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/southfrance/pic6.JPG" class="image-link">
      <img src="/photos/southfrance/pic6.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>Rajasthan, India
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic1.jpg" class="image-link">
      <img src="/photos/rajasthan/pic1.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic2.jpg" class="image-link">
      <img src="/photos/rajasthan/pic2.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic3.jpg" class="image-link">
      <img src="/photos/rajasthan/pic3.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic4.jpg" class="image-link">
      <img src="/photos/rajasthan/pic4.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic5.jpg" class="image-link">
      <img src="/photos/rajasthan/pic5.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic6.jpg" class="image-link">
      <img src="/photos/rajasthan/pic6.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/rajasthan/pic7.jpg" class="image-link">
      <img src="/photos/rajasthan/pic7.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<h3>Uncategorised
<div class="portfolio-grid">
  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic1.JPG" class="image-link">
      <img src="/photos/uncategorised/pic1.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic3.JPG" class="image-link">
      <img src="/photos/uncategorised/pic3.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic5.JPEG" class="image-link">
      <img src="/photos/uncategorised/pic5.JPEG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic2.JPG" class="image-link">
      <img src="/photos/uncategorised/pic2.JPG" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic9.jpg" class="image-link">
      <img src="/photos/uncategorised/pic9.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>

  <figure class="portfolio-item">
    <a href="/photos/uncategorised/pic7.jpg" class="image-link">
      <img src="/photos/uncategorised/pic7.jpg" alt="Place 1">
    </a>
    <figcaption>
    </figcaption>
  </figure>
</div>

<div id="image-overlay" class="image-overlay">
  <div class="image-container">
    <img src="" alt="" id="large-image">
    <span id="close-button" class="close-button">&times;</span>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.image-link');
  const overlay = document.getElementById('image-overlay');
  const largeImage = document.getElementById('large-image');
  const closeButton = document.getElementById('close-button');

  images.forEach(image => {
    image.addEventListener('click', function(e) {
      e.preventDefault();
      largeImage.src = this.href;
      overlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function(e) {
    if (e.target !== largeImage) {
      overlay.style.display = 'none';
    }
  });
});
</script>