---
layout: page
title: My Talks
permalink: /talks.html/
---

<div class="talks-container">
  <h1 class="talks-title">My Talks</h1>
  <p class="talks-intro">Below is a list of a few of my talks. Click on a talk to view its content:</p>
  <ul id="talks-list" class="talks-list"></ul>
</div>

<style>
  .talks-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f5f5f5;
  }

  .talks-title {
    font-size: 2em;
    margin-bottom: 10px;
    color: #ffffff;
    border-bottom: 1px solid #555;
    padding-bottom: 5px;
  }

  .talks-intro {
    font-size: 1em;
    color: #ccc;
    margin-bottom: 30px;
  }

  .talks-list {
    list-style: none;
    padding: 0;
  }

  .talks-list li {
    margin: 12px 0;
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 10px;
    transition: transform 0.2s ease, background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.4);
  }

  .talks-list li:hover {
    background-color: #2a2a2a;
    transform: translateY(-2px);
  }

  .talks-list li a {
    display: block;
    padding: 14px 20px;
    color: #4db8ff;
    text-decoration: none;
    font-size: 1.05em;
    font-weight: 500;
  }

  .talks-list li a:hover {
    text-decoration: underline;
  }
</style>

<script>
  const excludeFolders = ['assets', 'template', 'test'];

  fetch('https://api.github.com/repos/vilasinits/Talks/contents/')
    .then(response => response.json())
    .then(data => {
      const talksContainer = document.getElementById('talks-list');
      data.forEach(item => {
        if (item.type === 'dir' && !excludeFolders.includes(item.name)) {
          const li = document.createElement('li');
          const link = document.createElement('a');
          link.href = 'https://vilasinits.github.io/Talks/' + item.name;
          link.textContent = item.name.replace(/-/g, ' ');
          li.appendChild(link);
          talksContainer.appendChild(li);
        }
      });
    })
    .catch(error => console.error('Error fetching talks:', error));
</script>
