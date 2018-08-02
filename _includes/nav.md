<nav {% if page.layout == 'project' %}class="nav-light"{% endif %}>
  <div class="container">
    <span>
      <a class="logo" href="/">Antonio Mistretta</a>
    </span>
    <span class="links">
      <a href="/" {% if page.url == '/' %}class="active"{% endif %}>Work</a>
      <a href="/perspectives/" {% if page.url == '/perspectives/' %}class="active"{% endif %}>Persepectives</a>
    </span>
  </div>
</nav>
