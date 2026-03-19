---
layout: page
title: Blog
permalink: /blog.html/
---

<style>
  /* Full width like your other pages */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }


  .blog-wrap{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; color:var(--ink); }
  .blog-head{ display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:18px; }
  .blog-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .sub{ color:var(--muted); margin-top:6px; }

  /* Grid */
  .blog-grid{
    display:grid; gap:16px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px){ .blog-grid{ grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px){ .blog-grid{ grid-template-columns: 1fr; } }

  /* Card */
  .blog-card{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:16px;
    overflow:hidden;
    box-shadow:var(--shadow);
    display:flex; flex-direction:column;
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .blog-card:hover{ transform:translateY(-2px); border-color:var(--ring); box-shadow:0 12px 26px rgba(0,0,0,.18); }

  /* Image */
  .thumb{
    position:relative; width:100%; aspect-ratio: 16/9;
    background: linear-gradient(180deg, rgba(77,184,255,.2), rgba(138,125,255,.2));
  }
  .thumb img{
    position:absolute; inset:0; width:100%; height:100%;
    object-fit:cover; display:block;
  }

  /* Body */
  .card-body{ padding:14px; display:flex; flex-direction:column; gap:8px; }
  .meta{ color:var(--muted); font-size:.92rem; }
  .title{ margin:0; font-size:1.05rem; line-height:1.35; }
  .title a{ color:var(--ink); text-decoration:none; }
  .title a:hover{ text-decoration:underline; }
  .excerpt{ margin:0; color:var(--muted); line-height:1.5; font-size:.95rem; }

  /* Tags */
  .tags{ display:flex; gap:6px; flex-wrap:wrap; margin-top:4px; }
  .tag{
    padding:.25rem .5rem; font-size:.85rem; border-radius:999px;
    border:1px solid rgba(255,255,255,.18); color:var(--muted);
    background:rgba(255,255,255,.06);
  }

  /* Make the whole card clickable without nesting <a> incorrectly */
  .stretched{ position:relative; }
  .stretched::after{
    content:""; position:absolute; inset:0; z-index:1;
  }
</style>

<div class="blog-wrap">
  <header class="blog-head">
    <div>
      <h1>Blog</h1>
      <div class="sub">Notes from the road, methods, and small experiments</div>
    </div>
  </header>

  <section class="blog-grid">
    {% assign tat_categories = "cosmology,resources,life" | split: "," %}
    {% for post in site.posts %}
    {% unless tat_categories contains post.category %}
      <article class="blog-card">
        {% if post.image %}
          <div class="thumb">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}">
          </div>
        {% else %}
          <div class="thumb"><!-- gradient fallback --></div>
        {% endif %}

        <div class="card-body">
          <div class="meta">
            {{ post.date | date: "%-d %b %Y" }}
            {% if post.read_time %} • {{ post.read_time }} min read{% endif %}
          </div>

          <h2 class="title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>

          {% if post.excerpt %}
            <p class="excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% endif %}

          {% if post.tags and post.tags.size > 0 %}
            <div class="tags">
              {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>

        <!-- Make the whole card clickable while keeping semantic links -->
        <a class="stretched" href="{{ post.url | relative_url }}" aria-label="Open {{ post.title | escape }}"></a>
      </article>
    {% endunless %}
    {% endfor %}
  </section>
</div>
