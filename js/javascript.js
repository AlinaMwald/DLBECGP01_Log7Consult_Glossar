/* Suchfunktion Glossar Übericht nach Buchstaben */

function myFunction() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();

  const cards = document.querySelectorAll(".card");
  const letters = document.querySelectorAll(".letter");

  // Cards filtern
  cards.forEach(card => {
    const text = card.textContent.toUpperCase();
    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  // Buchstaben ein- & ausblenden
  letters.forEach(letter => {
    const letterValue = letter.textContent;
    const relatedCards = document.querySelectorAll(
      `.card[data-letter="${letterValue}"]:not([style*="display: none"])`
    );
  // wichtig dass ausgeblendet & richtig gefiltert wird!
    const letterWrapper = letter.parentElement;
    const divider = letterWrapper.previousElementSibling;

    if (relatedCards.length === 0) {
      letterWrapper.style.display = "none";
      divider.style.display = "none";
    } else {
      letterWrapper.style.display = "";
      divider.style.display = "";
    }
  });
}




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