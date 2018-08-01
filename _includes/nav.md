<nav>
  <div class="container {% if page.layout == 'project' %}light{% endif %}">
    <span>
      <a class="logo" href="/">Antonio Mistretta</a>
    </span>
    <span class="links">
      <a href="/" {% if page.url == '/' %}class="active"{% endif %}>Projects</a>
      <a href="/process/" {% if page.url == '/process/' %}class="active"{% endif %}>Process</a>
      <a href="/perspectives/" {% if page.url == '/perspectives/' %}class="active"{% endif %}>Persepectives</a>
    </span>
  </div>
</nav>
