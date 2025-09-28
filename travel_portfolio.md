---
layout: travel
title: Through my lens
permalink: /travel.html/
---

<style>
  /* Full width + site tokens */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }
  :root{
    --bg:#0e1525; --ink:#e9eef5; --muted:#a7b3c5; --brand:#4db8ff; --brand-2:#8a7dff;
    --card:#0f1b2e; --ring:rgba(77,184,255,.28); --shadow:0 10px 30px rgba(0,0,0,.25);
  }
  @media (prefers-color-scheme: light){
    :root{ --bg:#f7fbff; --ink:#0f172a; --muted:#475569; --card:#ffffff; --shadow:0 8px 24px rgba(2,8,23,.06); }
  }
  body{ background: linear-gradient(180deg,#111827,var(--bg)); }

  .trav-wrap{ width:min(1200px,92vw); margin-inline:auto; padding:40px 0 80px; color:var(--ink); }

  /* Header */
  .trav-head{ display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:16px; }
  .trav-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .sub{ color:var(--muted); margin-top:6px; }

  /* Filters */
  .filters{ display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
  .filter-btn{
    padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12);
    background:rgba(255,255,255,.05); color:var(--ink); font-weight:600; cursor:pointer;
  }
  .filter-btn:hover{ border-color:var(--ring); background:rgba(255,255,255,.08); }
  .filter-btn.active{ background: linear-gradient(180deg, var(--brand), var(--brand-2)); border-color:transparent; color:#fff; }

  /* Gallery grid */
  .gallery{
    display:grid; gap:12px; margin-top:18px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px){ .gallery{ grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 800px){ .gallery{ grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px){ .gallery{ grid-template-columns: 1fr; } }

  .portfolio-item{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:14px;
    overflow:hidden; box-shadow:var(--shadow);
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
    position:relative;
  }
  .portfolio-item:hover{ transform:translateY(-2px); border-color:var(--ring); box-shadow:0 12px 26px rgba(0,0,0,.18); }

  .image-link{ display:block; }
  .image-link img{
    width:100%; height:100%; display:block; object-fit:cover;
    aspect-ratio: 4/3; /* consistent tile look while thumbs load */
  }

  /* Caption/overlay on hover */
  .cap{
    position:absolute; inset:auto 0 0 0; padding:10px 12px;
    background:linear-gradient(180deg, transparent, rgba(0,0,0,.55));
    color:#fff; font-size:.9rem; display:flex; justify-content:flex-start; align-items:flex-end;
  }
  .cap span:last-child { display: none; } /* hide the right-side filename */


  /* Lightbox */
  .lightbox{
    position:fixed; inset:0; background:rgba(0,0,0,.88); display:none;
    align-items:center; justify-content:center; z-index: 9999;
  }
  .lightbox.open{ display:flex; }
  .lb-img{
    max-width: min(92vw, 1400px); max-height: 86vh; border-radius:12px;
    border:1px solid rgba(255,255,255,.2); box-shadow:0 30px 80px rgba(0,0,0,.6);
  }
  .lb-ui{
    position:absolute; inset:0; display:flex; align-items:center; justify-content:space-between; pointer-events:none;
  }
  .lb-btn{
    pointer-events:auto; cursor:pointer; border:1px solid rgba(255,255,255,.18);
    background:rgba(255,255,255,.06); color:#fff; border-radius:999px; width:42px; height:42px;
    display:grid; place-items:center; margin:0 10px;
  }
  .lb-btn:hover{ background:rgba(255,255,255,.14); }
  .lb-close{
    position:absolute; top:18px; right:18px;
  }
  /* .lb-close { display: none; } */

  .lb-caption{
    position:absolute; left:18px; bottom:16px; right:18px; color:#ddd;
    text-shadow:0 1px 2px rgba(0,0,0,.8); font-size:.95rem;
  }
  /* Hide the old lightbox UI completely */
  .lightbox,
  .lb-ui,
  .lb-btn,
  .lb-close,
  .lb-caption { display: none !important; }

  /* Keep the header always on top */
  .site-header { z-index: 1000; }

  /* Gallery tiles should not stack above the header */
  .portfolio-item { z-index: 1; }          /* or simply remove the z-index rule */

  /* (optional) ensure the gallery grid itself sits below normal stacking */
  .gallery { z-index: 0; position: relative; }

</style>

<div class="trav-wrap">
  <header class="trav-head">
    <div>
      <h1>Through my lens</h1>
      <div class="sub">Places, light, and details that caught my eye</div>
      <div id="filters" class="filters" aria-label="Filter photos by group">
        <!-- Buttons injected by JS from groups list -->
      </div>
    </div>
  </header>

  <!-- Gallery -->
  <section id="gallery" class="gallery">
    {% assign groups = "uncategorised,rajasthan,southfrance,crete,chicago,smokeys,baltic,romania,ny" | split: "," %}
    {% for group in groups %}
      {% for image in site.static_files %}
        {% if image.path contains '/thumbs/' and image.path contains group and image.path contains '-400.webp' %}
          {% assign full_size = image.path | replace: '/thumbs/', '/full/' | replace: '-400.webp', '.webp' %}
          {% assign image_name = image.path | split: '/' | last | replace: '-400.webp', '' %}
          <figure class="portfolio-item" data-group="{{ group }}">
            <a class="image-link" href="{{ full_size }}" data-fullsize="{{ full_size }}" data-name="{{ image_name }}" data-group="{{ group }}">
              <img
                src="{{ image.path }}"
                srcset="{{ image.path }} 400w, {{ image.path | replace: '-400.webp', '-800.webp' }} 800w"
                sizes="(max-width: 520px) 100vw, (max-width: 1100px) 33vw, 25vw"
                loading="lazy"
                alt="{{ group | capitalize }} — {{ image_name }}"
              >
              <div class="cap"><span>{{ group | replace: 'southfrance','South France' | replace: 'smokeys','Smokeys' | replace: 'ny','New York' | capitalize }}</span><span>{{ image_name }}</span></div>
            </a>
          </figure>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </section>
</div>

<!-- Lightbox -->
<div id="lightbox" class="lightbox" aria-modal="true" role="dialog" aria-label="Image viewer">
  <img id="lb-img" class="lb-img" alt="">
  <div class="lb-ui">
    <button id="lb-prev" class="lb-btn" aria-label="Previous image">‹</button>
    <button id="lb-next" class="lb-btn" aria-label="Next image">›</button>
  </div>
  <div id="lb-caption" class="lb-caption"></div>
  <button id="lb-close" class="lb-btn lb-close" aria-label="Close">✕</button>
</div>

<script>
  // Build filter buttons from the Liquid list in the DOM
  (function initFilters(){
    const filters = document.getElementById('filters');
    const items = Array.from(document.querySelectorAll('.portfolio-item'));
    const groups = Array.from(new Set(items.map(i => i.dataset.group)));

    function pretty(name){
      return name
        .replace(/southfrance/i,'South France')
        .replace(/^ny$/i,'New York')
        .replace(/uncategorised/i,'Uncategorised')
        .replace(/-/g,' ')
        .replace(/_/g,' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    }

    function setActive(group){
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.group === group));
      items.forEach(el => {
        el.style.display = (group === 'all' || el.dataset.group === group) ? '' : 'none';
      });
    }

    // "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.dataset.group = 'all';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => setActive('all'));
    filters.appendChild(allBtn);

    // Group buttons
    groups.forEach(g => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.group = g;
      btn.textContent = pretty(g);
      btn.addEventListener('click', () => setActive(g));
      filters.appendChild(btn);
    });
  })();

  // Lightbox with keyboard nav
  (function initLightbox(){
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lb-img');
    const cap = document.getElementById('lb-caption');
    const prev = document.getElementById('lb-prev');
    const next = document.getElementById('lb-next');
    const closeBtn = document.getElementById('lb-close');

    let currentIndex = -1;
    let currentList = [];

    function updateList(){
      currentList = Array.from(document.querySelectorAll('.portfolio-item'))
        .filter(el => el.style.display !== 'none')  // respect filter
        .map(el => el.querySelector('.image-link'));
    }

    function openAt(i){
      if (!currentList.length) updateList();
      currentIndex = (i + currentList.length) % currentList.length;
      const a = currentList[currentIndex];
      const url = a.dataset.fullsize || a.getAttribute('href');
      const name = a.dataset.name || '';
      const group = a.dataset.group || '';
      img.src = url;
      img.alt = name ? name : 'photo';
      cap.textContent = (group ? group.replace(/southfrance/i,'South France').replace(/^ny$/i,'New York') : '') + (name ? ' — ' + name : '');
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close(){
      lb.classList.remove('open');
      img.src = '';
      document.body.style.overflow = '';
    }

    function go(delta){
      if (!currentList.length) return;
      openAt(currentIndex + delta);
    }

    // Click handlers
    document.getElementById('gallery').addEventListener('click', (e) => {
      const a = e.target.closest('.image-link');
      if (!a) return;
      e.preventDefault();
      updateList();
      const index = currentList.indexOf(a);
      openAt(index);
    });

    closeBtn.addEventListener('click', close);
    // lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));

    // Keyboard
    window.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    });
  })();
</script>
