let min = 0;
let max = 100;
let guess;
let guesses = 0;

const startBtn = document.getElementById("startBtn");
const gameDiv = document.getElementById("game");
const computerGuessDisplay = document.getElementById("computerGuess");
const tooLowBtn = document.getElementById("tooLow");
const tooHighBtn = document.getElementById("tooHigh");
const correctBtn = document.getElementById("correct");
const resultDisplay = document.getElementById("result");
startBtn.addEventListener("click", startGame);
tooLowBtn.addEventListener("click", tooLow);
tooHighBtn.addEventListener("click", tooHigh);
correctBtn.addEventListener("click", correct);

function startGame() {
  min = 0;
  max = 100;
  guesses = 0;
  gameDiv.style.display = "block";
  resultDisplay.style.display = "none";
  // deaktiverer startknappen
  startBtn.disabled = true;
  // aktiverer for lav og for højt knappen
  tooLowBtn.disabled = false;
  tooHighBtn.disabled = false;
  correctBtn.disabled = false;
  // funktionen der får computeren til at gætte
  makeGuess();
}

function makeGuess() {
  computerGuessDisplay.style.opacity = 0;
  setTimeout(() => {
    // beregner computerens gæt
    guess = Math.floor((min + max) / 2);
    // viser gættet på skærmen
    computerGuessDisplay.textContent = guess;
    // fade in
    computerGuessDisplay.style.opacity = 1;
    // animation
    computerGuessDisplay.classList.add("pop");
    // øger antallet af gæt
    guesses++;
    // forsinker med 500ms for at give en tænke effekt
  }, 500);
}

function tooLow() {
  min = guess + 1;
  makeGuess();
}

// justerer det højeste mulige gæt til et lavere end det forrige gæt
function tooHigh() {
  max = guess - 1;
  makeGuess();
}

function correct() {
  resultDisplay.textContent = `Computeren gættede rigtigt! Det tog ${guesses} forsøg.`;
  resultDisplay.style.display = "block";
  //   deaktiverer knapperne
  tooLowBtn.disabled = true;
  tooHighBtn.disabled = true;
  correctBtn.disabled = true;
  //   aktiverer start knappen så man kan spille igen
  startBtn.disabled = false;
}
