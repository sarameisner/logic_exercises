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
  startBtn.disabled = true;
  tooLowBtn.disabled = false;
  tooHighBtn.disabled = false;
  correctBtn.disabled = false;
  makeGuess();
}

function makeGuess() {
  computerGuessDisplay.style.opacity = 0; // Skjuler gættet for effekten
  setTimeout(() => {
    guess = Math.floor((min + max) / 2);
    computerGuessDisplay.textContent = guess;
    computerGuessDisplay.style.opacity = 1; // Viser gættet med fade-in
    computerGuessDisplay.classList.add("pop"); // Tilføjer en animationseffekt
    guesses++;
  }, 500); // Forsinkelsen på 500ms giver en "tænke"-effekt
}

function tooLow() {
  min = guess + 1;
  makeGuess();
}

function tooHigh() {
  max = guess - 1;
  makeGuess();
}

function correct() {
  resultDisplay.textContent = `Computeren gættede rigtigt! Det tog ${guesses} forsøg.`;
  resultDisplay.style.display = "block";
  tooLowBtn.disabled = true;
  tooHighBtn.disabled = true;
  correctBtn.disabled = true;
  startBtn.disabled = false;
}
