---
layout: page
title: My Talks
permalink: /talks.html/
---

<div class="talks-container">
  <!-- <h1>My Talks</h1> -->
  <p>Below is a list of a few of my talks. Click on a talk to view its content:</p>

  <ul id="talks-list"></ul>
</div>

<style>
  .talks-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  #talks-list {
    list-style: none;
    padding: 0;
  }
  
  #talks-list li {
    margin: 10px 0;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  #talks-list li:hover {
    background-color: #f0f0f0;
  }
  
  #talks-list li a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.1em;
    display: block;
  }
</style>

<script>
  // List of folder names to exclude
  const excludeFolders = ['assets', 'template', 'test'];

  fetch('https://api.github.com/repos/vilasinits/Talks/contents/')
    .then(response => response.json())
    .then(data => {
      const talksContainer = document.getElementById('talks-list');
      data.forEach(item => {
        // Only add directories that are not in the exclusion list
        if (item.type === 'dir' && !excludeFolders.includes(item.name)) {
          const li = document.createElement('li');
          const link = document.createElement('a');
          link.href = 'https://vilasinits.github.io/Talks/' + item.name;
          link.textContent = item.name;
          li.appendChild(link);
          talksContainer.appendChild(li);
        }
      });
    })
    .catch(error => console.error('Error fetching talks:', error));
</script>


