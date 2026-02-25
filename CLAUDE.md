# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic/portfolio website for Vilasini Tinnaneri Sreekanth, built with Jekyll and the Minima theme (v3.0.0.dev, vendored locally). Deployed via GitHub Pages (branch: `gh-pages`) with Netlify functions for S3 photo uploads.

## Build & Serve Commands

```bash
bundle exec jekyll serve          # Local dev server at http://localhost:4000 (auto-reloads on changes, except _config.yml)
bundle exec jekyll build          # Build static site to _site/
bundle install                    # Install Ruby dependencies
```

Note: Changes to `_config.yml` require restarting `jekyll serve`.

## Architecture

### Theme & Layout System

The Minima theme is **vendored in-repo** (not installed as a gem) — `_layouts/`, `_includes/`, and `_sass/minima/` contain the actual theme files. Edit these directly.

**Layout hierarchy:**
- `base.html` — root layout; includes MathJax config, Statcounter analytics, and an image overlay lightbox script
- `home.html`, `page.html`, `post.html` — extend `base.html`
- `custompost.html` → `basecustompost.html` — separate layout chain (used for z2C workshop)
- `travel.html`, `talks.html` — specialized layouts for those content types

**Special layout behavior:** `base.html` conditionally applies a `z2c` body class when `page.title == 'z2C:Workshop'`, which triggers alternate header/footer includes (`headerz2c.html`, `footerz2c.html`).

### Content Pages

Top-level markdown files map to site sections (configured in `_config.yml` under `header_pages`):
`index.markdown`, `cv.markdown`, `research.md`, `thoughts.md`, `travel_portfolio.md`, `softwares.md`, `talks.md`, `papers.md`

### Blog Posts

`_posts/` contains markdown posts for travel blogs, paper summaries, and the defence write-up. Posts use front matter to select layouts (`post`, `custompost`, `travel`).

### Netlify Functions

`netlify/functions/` contains two serverless functions for photo uploads to S3:
- `generate-presigned-url.js` — generates AWS S3 presigned URLs
- `upload.js` — handles upload logic

Client-side upload scripts live in `assets/js/`.

### Styling

SCSS in `_sass/minima/`: `custom-styles.scss` and `custom-variables.scss` are the main files for site-specific styling on top of the base Minima styles.

### Key Plugins

Configured in `_config.yml`: `jekyll-feed`, `jekyll-seo-tag`, `jekyll-target-blank`, `jekyll-gallery-generator`, `jekyll-npm`.

### Math Support

MathJax v3 is loaded in `base.html` with support for inline (`$...$`) and display (`$$...$$`) math via the `tex-chtml` renderer.
