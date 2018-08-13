<nav {% if page.layout == 'project' %}class="nav-light"{% endif %}>
  <div class="container">
    <span>
      <a class="logo" href="/">Antonio Mistretta</a>
    </span>
    <span class="links">
      <a href="/" {% if page.url == '/' %}class="active"{% endif %}>Work</a>
      <a href="/about/" {% if page.url == '/about/' %}class="active"{% endif %}>About</a>
      <a href="/assets/resume.pdf" target="_blank">Resume</a>
    </span>
  </div>
</nav>
