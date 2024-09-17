"use strict";
let userGuess;
let computerGuess;
let result;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

function rockClicked() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  // Fjern event listener, så den kun lytter én gang
  this.removeEventListener("mousedown", rockClicked);

  // Når animationen er færdig, fjern 'shake'-klassen
  player1.addEventListener("animationend", () => {
    player1.classList.remove("shake");
  });
  player2.addEventListener("animationend", () => {
    player2.classList.remove("shake");
  });

  console.log("rock clicked");
  userGuess = "rock";
  computerGuesses();
}

function paperClicked() {
  console.log("paper clicked");
  userGuess = "paper";
  computerGuesses();

  this.classList.add("shake");
}

function scissorsClicked() {
  console.log("scissors clicked");
  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  computerGuess = "rock";
  console.log("computer guesses");
  console.log("user guesses", userGuess);
  determinWinner();
}

function determinWinner() {
  if (userGuess === "rock" && computerGuess === "rock") {
    result = "draw";
  }

  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }

  if (userGuess === "rock" && computerGuess === "scissors") {
    result = "user";
  }

  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }

  if (userGuess === "paper" && computerGuess === "paper") {
    result = "draw";
  }

  if (userGuess === "paper" && computerGuess === "scissors") {
    result = "computer";
  }

  if (userGuess === "scissors" && computerGuess === "rock") {
    result = "computer";
  }

  if (userGuess === "scissors" && computerGuess === "paper") {
    result = "user";
  }

  if (userGuess === "scissors" && computerGuess === "scissors") {
    result = "draw";
  }

  console.log("result", result);
}
