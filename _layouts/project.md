{% include head.md %}
{% include nav.md %}
<div id="hero" style="background-image: url({{ page.thumbnail }});"></div>
{{ content }}
<div class="more-projects">
  <div class="container">
    <h1>Interested in more?</h1>
    <hr>
    <div id="projects">
      {% for project in site.projects %}
      {% if page.title != project.title %}
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
      {% endif %}
      {% endfor %}
    </div>
  </div>
</div>

{% include footer.md %}
