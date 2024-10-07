"use strict";

// array over dårlige og gode ord
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// henter vores HTML-elementerne
const textElement = document.getElementById("text");
const filterBtn = document.getElementById("filterBtn");
const dialog = document.getElementById("dialog");

// funktionen til at erstatte dårlige ord med gode
function replaceBadWords() {
  let text = textElement.textContent; // henter nuværende tekst
  let updated = false; // flag for den opdaterede

  curseWords.forEach((word) => {
    // tjekker om det dårlige ord findes i teksten
    if (text.includes(word.bad)) {
      // erstatter det dårlige ord med det gode og sætter en gul baggrund
      text = text.replace(word.bad, `<span class="good-word">${word.good}</span>`);
      updated = true;
    }
  });

  if (updated) {
    // hvis teksten blev opdateret, opdaterer vi indholdet
    textElement.innerHTML = text;
  } else {
    // hvis der ikke er flere dårlige ord, viser vi dialogen
    dialog.showModal();
  }
}

// eventlistener til knappen
filterBtn.addEventListener("click", replaceBadWords);

// lukker dialogen når brugeren klikker udenfor dialogen
dialog.addEventListener("click", () => dialog.close());
