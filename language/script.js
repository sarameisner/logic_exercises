"use strict";

// tekster til de to forskellige sprog
// de og da er overobjects med texts i som er et array af objekter ..
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// funktion der opdaterer teksterne på siden baseret på det valgte sprog
// locale er enten de eller da
function updateLanguage(locale) {
  const languageData = texts[locale]; // henter teksterne for det valgte sprog

  languageData.texts.forEach((item) => {
    const element = document.querySelector(item.location); // Finder elementet på siden
    if (element) {
      element.textContent = item.text; // opdaterer tekstindholdet i elementet
    }
  });
}

// henter dropdown-menu fra html til at vælge sprog
const languageSelector = document.querySelector("#languageSelector");

// lytter til ændringer i dropdown-menuen
languageSelector.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value; // henter den valgte værdi (da eller de)
  updateLanguage(selectedLanguage); // opdaterer sproget
});

// indlæser siden med dansk som standard
const locale = "da";
updateLanguage(locale);
