fetch("json/data.js")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("glossar");
    let currentLetter = "";

    data.forEach(entry => {
      if (entry.letter !== currentLetter) {
        currentLetter = entry.letter;
        container.insertAdjacentHTML("beforeend", `
          <hr class="col-12">
          <div class="col-12">
            <span class="letter">${currentLetter}</span>
          </div>
        `);
      }

      container.insertAdjacentHTML("beforeend", `
        <div class="card col-4">
          <span class="category ${entry.categoryKey}">
            ${entry.category}
          </span>
          <h2>${entry.title}</h2>
          <p>${entry.shortDescription}</p>
          <a class="btn-moreinfo" href="/glossar/${entry.slug}">
            Weiterlesen →
          </a>
        </div>
      `);
    });
  });
