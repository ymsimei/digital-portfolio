{% include head.md %}
{% for project in site.projects %}
  <h1>Project</h1>
  <a href="{{ project.url }}">Link</a>
{% endfor %}
<script src="{{ project.url }}/assets/scripts/welcome.js"></script>
