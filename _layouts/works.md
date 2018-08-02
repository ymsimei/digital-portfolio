{% include head.md %}
<body>
  {% include nav.md %}
  <div class="header wrap">
    <div class="container">
      <h1 class="swing">🖖🏻</h1><h1>Hello world.</h1>
      <h3>My name is Antonio Mistretta.</h3>
      <h3>I like to imagine with <strong>design</strong> and make it real with <strong>code</strong>.</h3>
    </div>
  </div>
  <div class="projects wrap">
    <div class="container">
      <div class="projects-grid">
        {% for project in site.works %}
          <a class="project" href="{{ project.permalink }}">
            <div class="project-card">
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
    </div>
  </div>
  <!-- <div>
    <h1>Contact Me</h1>
  </div> -->
  {% include footer.md %}
</body>
