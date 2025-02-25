---
layout: travel
title: Through my lens
permalink: /travel.html/
---

<section class="gallery">
  {% comment %} Define your photo groups {% endcomment %}
  {% assign groups = "uncategorised,rajasthan,southfrance,crete,chicago,smokeys,baltic,romania,ny" | split: "," %}
  {% comment %} Loop through each group {% endcomment %}
  {% for group in groups %}
    {% comment %} First loop for 400px thumbnails {% endcomment %}
    {% for image in site.static_files %}
      {% if image.path contains '/thumbs/' and image.path contains group and image.path contains '-400.webp' %}
        {% assign full_size = image.path | replace: '/thumbs/', '/full/' | replace: '-400.webp', '.webp' %}
        {% assign image_name = image.path | split: '/' | last | replace: '-400.webp', '' %}
        
        <figure class="portfolio-item" data-group="{{ group }}">
          <div class="image-link"
              data-fullsize="{{ full_size }}">
            <img 
              src="{{ image.path }}"
              data-srcset="{{ image.path }} 400w,
                          {{ image.path | replace: '-400.webp', '-800.webp' }} 800w"
              sizes="(max-width: 100px) 400px, 800px"
              loading="lazy"
              alt="{{ group | capitalize }} - {{ image_name }}"
              class="lazy"
            >
          </div>
        </figure>
      {% endif %}
    {% endfor %}
  {% endfor %}

</section>