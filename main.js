"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  return userChoice;
}

function showResult(userChoice, computerChoice, result) {
  alert(
    `You picked '${userChoice}' and the computer '${computerChoice}'. ${result}'`
  );
}

let userScore = 0;
let computerScore = 0;

while (true) {
  const computerChoice = getComputerChoice();
  const userChoice = prompt(
    `Welcome to Rock Paper Scissors game.\n\nCurrent score ~ You: ${userScore}\nComputer: ${computerScore}  \n\nSelect your weapon. Type 'Rock' 'Paper' 'Scissors' or 'Stop' to stop the game loop: `
  ).toLowerCase();

  if (userChoice == "stop") {
    break;
  }

  if (userChoice === computerChoice) {
    showResult(userChoice, computerChoice, "A tie.");
  } else if (
    (userChoice === "paper" && computerChoice == "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissors")
  ) {
    showResult(userChoice, computerChoice, "You win.");
    userScore++;
  } else {
    showResult(userChoice, computerChoice, "You lose.");
    computerScore++;
  }
}
