---
layout: page
title: My Talks
permalink: /talks.html/
---

<style>
  /* Full width like your other pages */
  .page .page-content, .page .page-content .wrapper {
    max-width: 100% !important; margin: 0 !important; padding: 0 !important;
  }


  .talks-wrap{ width:min(1100px,92vw); margin-inline:auto; padding:40px 0 70px; color:var(--ink); }

  .talks-head{
    display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:18px;
  }
  .talks-head h1{ margin:0; font-size: clamp(1.8rem,3.2vw,2.3rem); }
  .sub{ color:var(--muted); margin-top:6px; }

  /* Search */
  .search{
    display:flex; gap:10px; align-items:center; margin-top:8px;
  }
  .input{
    flex:1; padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12);
    background:rgba(255,255,255,.05); color:var(--ink);
  }
  .input::placeholder{ color:var(--muted); }
  .input:focus{ outline:none; border-color:var(--ring); box-shadow:0 0 0 3px rgba(77,184,255,.12); }

  /* Grid of talks */
  .talk-grid{
    display:grid; gap:16px; margin-top:18px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px){ .talk-grid{ grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px){ .talk-grid{ grid-template-columns: 1fr; } }

  .talk-card{
    background:var(--card);
    border:1px solid rgba(255,255,255,.10);
    border-radius:16px;
    padding:16px;
    box-shadow:var(--shadow);
    display:flex; gap:12px; align-items:flex-start;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }
  .talk-card:hover{ transform:translateY(-2px); border-color:var(--ring); box-shadow:0 12px 26px rgba(0,0,0,.18); }

  .icon{
    width:28px; height:28px; flex:0 0 28px; color:currentColor;
  }
  .talk-body{ display:flex; flex-direction:column; gap:4px; }
  .talk-title{ margin:0; font-size:1.05rem; line-height:1.3; }
  .talk-link{
    display:inline-flex; align-items:center; gap:8px;
    color:var(--brand); text-decoration:none; font-weight:600; width:fit-content;
  }
  .talk-link:hover{ text-decoration:underline; }

  /* Status/empty messages */
  .status{
    margin-top:18px; padding:14px 16px; border-radius:14px;
    background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.10);
    color:var(--muted);
  }
</style>

<div class="talks-wrap">
  <header class="talks-head">
    <div>
      <h1>My Talks</h1>
      <div class="sub">A few recent talks and slides</div>
      <div class="search">
        <input id="search" class="input" type="search" placeholder="Filter by title…" aria-label="Filter talks">
      </div>
    </div>
  </header>

  <div id="status" class="status" style="display:none;"></div>
  <section id="grid" class="talk-grid" aria-live="polite"></section>
</div>

<script>
  // Settings
  const owner = 'vilasinits';
  const repo  = 'Talks';
  const api   = `https://api.github.com/repos/${owner}/${repo}/contents/`;
  const exclude = new Set(['assets','template','test','_site','.github']);

  const grid = document.getElementById('grid');
  const status = document.getElementById('status');
  const searchInput = document.getElementById('search');

  function titleCase(s){
    return s
      .replace(/[-_]+/g, ' ')     // dashes/underscores → spaces
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  function showStatus(msg){
    status.textContent = msg;
    status.style.display = msg ? 'block' : 'none';
  }

  function cardTemplate(name){
    const nice = titleCase(name);
    const url  = `https://${owner}.github.io/${repo}/${name}`;
    return `
      <article class="talk-card" data-title="${nice.toLowerCase()}">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H13l-3.2 2.4a1 1 0 0 1-1.6-.8V17H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v8h6a1 1 0 0 1 1 1v1.3l2.4-1.8a1 1 0 0 1 .6-.2H20V7H4Z"/>
        </svg>
        <div class="talk-body">
          <h3 class="talk-title">${nice}</h3>
          <a class="talk-link" href="${url}" target="_blank" rel="noopener" aria-label="Open ${nice}">
            Open slides
          </a>
        </div>
      </article>
    `;
  }

  function render(items){
    if (!items.length){
      grid.innerHTML = '';
      showStatus('No talks found yet.');
      return;
    }
    showStatus('');
    grid.innerHTML = items.map(cardTemplate).join('');
  }

  function filterCards(q){
    const query = q.trim().toLowerCase();
    const cards = Array.from(grid.children);
    let shown = 0;
    cards.forEach(c => {
      const match = c.getAttribute('data-title').includes(query);
      c.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    showStatus(shown ? '' : 'No talks match your filter.');
  }

  // Fetch and render
  (async function init(){
    try{
      showStatus('Loading talks…');
      const res = await fetch(api, { headers: { 'Accept': 'application/vnd.github+json' } });
      if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
      const data = await res.json();
      const dirs = data
        .filter(item => item.type === 'dir' && !exclude.has(item.name))
        .map(item => item.name)
        .sort((a,b) => a.localeCompare(b, undefined, { sensitivity:'base' }));
      render(dirs);
    }catch(err){
      console.error(err);
      showStatus('Could not load talks right now. You can still browse them on GitHub.');
      grid.innerHTML = `
        <article class="talk-card">
          <div class="talk-body">
            <h3 class="talk-title">Talks repository</h3>
            <a class="talk-link" href="https://github.com/${owner}/${repo}" target="_blank" rel="noopener">Open on GitHub</a>
          </div>
        </article>
      `;
    }
  })();

  // Live filter
  searchInput.addEventListener('input', (e) => filterCards(e.target.value));
</script>
