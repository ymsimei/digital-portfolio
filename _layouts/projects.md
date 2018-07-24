{% include head.md %}
<body id="body">
  {% include nav.md %}
  <div class="container">
    <span id="projects">
    {% for project in site.projects %}
      <div class="project">
        <div class="description">
          <span>
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            {% for tag in project.tags %}
              <p class="tag">{{ tag }}</p>
            {% endfor %}
          </span>
          <span>
            <a class="btn" href="{{ project.url }}">See Project</a>
          </span>
        </div>
        <div class="thumbnail">
          <a href="{{ project.url }}">
            <img src="{{ project.thumbnail }}"/>
          </a>
        </div>
      </div>
    {% endfor %}
    </span>
    <span id="perspectives">
    {% for persepective in site.persepectives %}
      <div class="project">
        <div class="description">
          <span>
            <h1>{{ persepective.title }}</h1>
            <p>{{ persepective.description }}</p>
            {% for tag in persepective.tags %}
              <p class="tag">{{ tag }}</p>
            {% endfor %}
          </span>
          <span>
            <a class="btn" href="{{ persepective.url }}">See Project</a>
          </span>
        </div>
        <div class="thumbnail">
          <img src="{{ persepective.thumbnail }}"/>
        </div>
      </div>
    {% endfor %}
    </span>
  </div>
  {% include footer.md %}
  <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
  <script src="./assets/scripts/cookie.js"></script>
</body>
