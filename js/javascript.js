/* Suchfunktion Glossar Übericht nach Buchstaben */

function myFunction() {
  // Benötigte Variablen deklarieren
  var input, filter, letters, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  letters = document.querySelectorAll('.letter');

  // Loop through all letter spans, and hide those who don't match the search query
  for (i = 0; i < letters.length; i++) {
    txtValue = letters[i].textContent || letters[i].innerText;
    var colDiv = letters[i].parentElement; // div.col-12
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      colDiv.style.display = "";
    } else {
      colDiv.style.display = "none";
    }
  }
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