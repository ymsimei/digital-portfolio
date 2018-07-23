{% include head.md %}
<body id="body">
  {% include nav.md %}
  <div class="container">
    {% for perspective in site.perspectives %}
      <div class="project">
        <div class="description">
          <span>
            <h1>{{ perspective.title }}</h1>
            <p>{{ perspective.description }}</p>
            {% for tag in perspective.tags %}
              <p class="tag">{{ tag }}</p>
            {% endfor %}
          </span>
          <span>
            <a class="btn" href="{{ perspective.url }}">See Project</a>
          </span>
        </div>
        <div class="thumbnail">
          <img src="{{ perspective.thumbnail }}"/>
        </div>
      </div>
    {% endfor %}
  </div>
  {% include footer.md %}
</body>
