---
layout: default
title: Talks
---

{% for talk in site.talks %}
  - [{{ talk.title }}]({{ talk.url }})
{% endfor %}