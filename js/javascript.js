/* Suchfunktion Glossar Übericht nach Buchstaben */
function myFunction() {
  const filter = document.getElementById("searchInput").value.toUpperCase();
  const cards = document.querySelectorAll(".card");
  const letters = document.querySelectorAll(".letter");

  // Card-Reset
  cards.forEach((card) => {
    const title = card.querySelector("h2").innerText.toUpperCase();
    card.style.display = title.includes(filter) ? "" : "none";
  });

  // Buchstaben + HR anzeigen & ausblenden
  letters.forEach((letter) => {
    const letterValue = letter.innerText;
    const relatedCards = document.querySelectorAll(
      `.card[data-letter="${letterValue}"]`,
    );
    const hasVisibleCard = Array.from(relatedCards).some(
      (card) => card.style.display !== "none",
    );

    const letterWrapper = letter.parentElement; // div.col-12
    const hr = letterWrapper.previousElementSibling; // hr

    letterWrapper.style.display = hasVisibleCard ? "" : "none";
    if (hr) hr.style.display = hasVisibleCard ? "" : "none";
  });
}

/* Last Modified - Datum des letzten Updates auf den Glossar-Seiten */
function showLastModified() {
  const mod = document.getElementById("lastModified"); 
  if (!mod) return;
  const lastModified = new Date(document.lastModified);

  mod.textContent = lastModified.toLocaleString("de-DE", { // Deutsches Zeitformat
    dateStyle: "medium",
    timeStyle: "short"
  });
}

window.addEventListener("load", showLastModified);

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
