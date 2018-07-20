{% include head.md %}
<body id="body">
  <div id="overlay">
    <div class="container">
      <h1 class="animate-1">Hello world.</h1>
      <h1 class="animate-2">My name is Antonio Mistretta.</h1>
      <h1 class="animate-3">But you can call me Tony.</h1>
    </div>
  </div>
  <nav>
    <h1>Antonio Mistretta</h1>
    <a class="active" href="{{ site.url }}">Projects</a>
    <a href="projects">Process</a>
    <a href="projects">Persepective</a>
  </nav>
  <div class="container">
    {% for project in site.projects %}
      <div class="project">
        <div class="description">
          <div class="text">
            <h3>{{ project.title }}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis porttitor augue, quis porttitor mauris euismod eget. Etiam volutpat sodales pharetra. Phasellus lacinia, nisl eget efficitur suscipit, est urna ultrices ante, a vestibulum massa nisl ac erat.</p>
          </div>
          <div class="links">
            <a>Show me a summary</a>
            <a>Show me everything</a>
          </div>
        </div>
        <div class="image">
          <img src="./assets/projects/classpass/background.jpg"></img>
        </div>
      </div>
    {% endfor %}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
  <script src="./assets/scripts/cookie.js"></script>
</body>
