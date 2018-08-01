{% include head.md %}
<body id="body">
  {% include nav.md %}
  <header>
    <div class="container">
      <h1 class="swing">🖖</h1><h1>Hello world.</h1>
      <h3>My name is Antonio Mistretta.</h3>
    </div>
  </header>
  <div id="projects" class="container">
  {% for project in site.projects %}
    <a href="{{ project.permalink }}">
    <div class="project">
      <div class="thumbnail" style="background-image: url({{ project.thumbnail }})"></div>
      <span class="project-flex">
        <span>
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </span>
        <span class="tags">
          {% for tag in project.tags %}
          <p>{{ tag }}</p>
          {% endfor %}
        </span>
      </span>
    </div>
    </a>
  {% endfor %}
  </div>
  {% include footer.md %}
</body>
