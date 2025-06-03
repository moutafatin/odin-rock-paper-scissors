"use strict";

let movesLeft = 5;
const movesLeftScore = document.querySelector(".moves-left-score");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const roundMessage = document.querySelector(".round-msg");

const gameAction = document.querySelectorAll(".game-move");
gameAction.forEach((action) => {
  action.addEventListener("click", (e) => {
    const userMove = e.currentTarget.dataset.moveName;
    const computerMove = getComputerMove();

    playRound(userMove, computerMove);
    movesLeft--;
    movesLeftScore.textContent = movesLeft;
    if (movesLeft === 0) {
      roundMessage.textContent = `Your total score is ${userScore.textContent}. You win/lose!`;
      return;
    }
  });
});

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

function playRound(userMove, computerMove) {
  if (userMove === computerMove) {
    showMessage(userMove, computerMove, "A tie!");
  } else if (
    (userMove === "paper" && computerMove == "rock") ||
    (userMove === "scissors" && computerMove === "paper") ||
    (userMove === "rock" && computerMove === "scissors")
  ) {
    showMessage(userMove, computerMove, "You win!");
    userScore.textContent = parseInt(userScore.textContent) + 1;
  } else {
    showMessage(userMove, computerMove, "You lose!");
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
}

function showMessage(userMove, computerMove, message) {
  roundMessage.textContent = `You picked ${userMove} and the computer ${computerMove}. ${message}`;
}
