"use strict";
// variabler
let userGuess;
let computerGuess;
let result;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const buttons = document.querySelector("#buttons");

const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

function rockClicked() {
  startGame("rock"); // når brugeren klikker på rock, starter vi spillet med "rock" som valg
}

function paperClicked() {
  startGame("paper"); // når brugeren klikker på paper, starter vi spillet med "paper" som valg
}

function scissorsClicked() {
  startGame("scissors"); // når brugeren klikker på scissors, starter vi spillet med "scissors" som valg
}

// start spillet
function startGame(userChoice) {
  // deaktiver knapper midlertidigt
  buttons.classList.add("disabled");

  // sætter / gemmer brugerens valg
  userGuess = userChoice;

  // starter animering af shake for begge spillere
  player1.classList.add("shake");
  player2.classList.add("shake");

  // slutter animationen af shake igen
  player1.addEventListener("animationend", endShake);
  player2.addEventListener("animationend", endShake);

  // får computeren til at gætte
  computerGuesses();
}

// computeren vælger tilfældigt rock, paper, eller scissors - ved at vælge et tilfældigt tal 0, 1, eller 2 og koble det til choices
function computerGuesses() {
  const choices = ["rock", "paper", "scissors"];
  computerGuess = choices[Math.floor(Math.random() * 3)];
  console.log("computer guesses:", computerGuess);
}

// når animationen slutter
function endShake() {
  // fjern animation
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.removeEventListener("animationend", endShake);
  player2.removeEventListener("animationend", endShake);

  //  resultatet af spillet
  showResult();
}

// bestem vinderen
function determinWinner() {
  // hvis begge vælger det samme, er det uafgjort
  if (userGuess === computerGuess) {
    return "draw";
  }

  // brugeren vinder
  else if ((userGuess === "rock" && computerGuess === "scissors") || (userGuess === "paper" && computerGuess === "rock") || (userGuess === "scissors" && computerGuess === "paper")) {
    return "user";
  }

  // computeren vinder
  else {
    return "computer";
  }
}

// find ud af hvem der har vundet
function showResult() {
  const result = determinWinner();

  // skjuler alle resultater først
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  // vis det rigtige resultat
  if (result === "user") {
    winText.classList.remove("hidden");
  } else if (result === "computer") {
    loseText.classList.remove("hidden");
  } else {
    drawText.classList.remove("hidden");
  }

  // fjerner de gamle klasser før man tilføjer de nye
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  // opdater spillerens valg
  player1.classList.add(userGuess);
  player2.classList.add(computerGuess);

  // aktivérer knapperne igen
  buttons.classList.remove("disabled");
}
