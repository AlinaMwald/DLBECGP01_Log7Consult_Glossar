// GLOSSAR-EINTRÄGE AUTOMATISIERT AUS JSON LADEN FÜR GLOSSAR-STARTSEITE TEST
/*
fetch("json/data.json")
  .then(res => res.json())
  .then(entries => {
    entries.forEach(entry => {
      const group = document.querySelector(
        `.letter-group[data-letter="${entry.letter}"]`
      );

      if (!group) return;

      group.insertAdjacentHTML("beforeend", `
        <div class="card col-4">
          <span class="category category-${entry.categoryKey}">
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
  })
  .catch(err => console.error("JSON Fehler:", err));
*/