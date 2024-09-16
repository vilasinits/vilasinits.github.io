---
layout: page
title: Potpourri of Thoughts
permalink: /potpourri.html/
---

<div class="cards-container">
  {% for post in site.posts %}
    <div class="card">
      {% if post.image %}
        <div class="card-image-container">
          <img src="{{ post.image }}" alt="{{ post.title }}" class="card-image">
          <div class="card-title-overlay">
            <h2 class="card-title"><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></h2>
          </div>
        </div>
      {% else %}
        <div class="card-no-image-content">
          <h2 class="card-title-no-image"><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></h2>
        </div>
      {% endif %}
      <!-- <div class="card-content"> -->
        <!-- <p class="card-excerpt">{{ post.excerpt | truncate: 150 }}</p> -->
      <!-- </div> -->
    </div>
  {% endfor %}
</div>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.card:hover {
  transform: scale(1.05);
}

/* Styles for cards with images */
.card-image-container {
  position: relative;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.card:hover .card-image {
  opacity: 0.5;
}

.card-title-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.card-title {
  font-size: 0.8em;
  margin: 0;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.card-title a {
  color: #fff;
  text-decoration: none;
}

.card-title a:hover {
  color: #007BFF;
}

/* Styles for posts without images */
.card-no-image-content {
  background-color: #f5f5f5;
  padding: 30px 15px;
  text-align: center;
}

.card-title-no-image {
  font-size: 1.2em;
  color: #333;
  margin: 0;
}

.card-title-no-image a {
  color: #333;
  text-decoration: none;
}

.card-title-no-image a:hover {
  color: #007BFF;
}

/* General card content */
.card-content {
  padding: 15px;
}

.card-excerpt {
  font-size: 0.95em;
  color: #555;
  margin: 0;
  line-height: 1.4;
}
</style>

