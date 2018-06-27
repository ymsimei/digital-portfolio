{% include head.md %}
<div id="overlay">
  <div class="container">
    <h1 class="animate-1">Hello world.</h1>
    <h1 class="animate-2">My name is Antonio Mistretta.</h1>
    <h1 class="animate-3">But you can call me Tony.</h1>
  </div>
</div>
<nav>
  <h2>Antonio Mistretta</h2>
  <a class="active" href="{{ site.url }}">Projects</a>
  <a href="projects">Process</a>
  <a href="projects">Persepective</a>
</nav>
<div class="container">
  {% for project in site.projects %}
    <div class="project" style="background: url({{ site.url }}/{{ project.background }})" onclick="window.location = '{{ site.url }}/{{ project.permalink }}';">
      <img class="text" src="{{ site.url }}/{{ project.text }}" />
      <img class="screen" src="{{ site.url }}/{{ project.screen }}" />
    </div>
  {% endfor %}
</div>
