"use strict";
const MAX_MOVES = 5;

let movesLeft = MAX_MOVES;
const movesLeftScore = document.querySelector(".moves-left-score");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const roundMessage = document.querySelector(".round-msg");

const resetGameBtn = document.querySelector(".reset-game");

resetGameBtn.addEventListener("click", reset);

const gameAction = document.querySelectorAll(".game-move");
gameAction.forEach((action) => {
  action.addEventListener("click", handleUserPick);
});

function handleUserPick(e) {
  if (movesLeft <= 0) {
    return;
  }
  const userMove = e.currentTarget.dataset.moveName;
  const computerMove = getComputerMove();

  playRound(userMove, computerMove);

  if (movesLeft === 0) {
    endGame();
    return;
  }
}

function incrementScore(scoreElement) {
  scoreElement.textContent = +scoreElement.textContent + 1;
}

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

function playRound(userMove, computerMove) {
  if (userMove === computerMove) {
    showRoundMessage(userMove, computerMove, "A tie!");
  } else if (
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper") ||
    (userMove === "rock" && computerMove === "scissors")
  ) {
    showRoundMessage(userMove, computerMove, "You win!");
    incrementScore(userScore);
  } else {
    showRoundMessage(userMove, computerMove, "You lose!");
    incrementScore(computerScore);
  }
  updateMovesLeft();
}

function endGame() {
  const playerScore = +userScore.textContent;
  const compScore = +computerScore.textContent;

  if (playerScore > compScore) {
    showEndGameMessage(playerScore, compScore, "You win");
  } else if (playerScore < compScore) {
    showEndGameMessage(playerScore, compScore, "You lose");
  } else {
    showEndGameMessage(playerScore, compScore, "A tie");
  }

  setGameActionsEnabled(false);
}

function setGameActionsEnabled(enabled) {
  gameAction.forEach((btn) => (btn.disabled = !enabled));
}

function updateMovesLeft() {
  movesLeft--;
  movesLeftScore.textContent = movesLeft;
}

function showEndGameMessage(playerScore, compScore, message) {
  roundMessage.textContent = `Game over! Your final score is ${playerScore} | Computer score is ${compScore}. ${message}!`;
}

function showRoundMessage(userMove, computerMove, message) {
  roundMessage.textContent = `You picked ${userMove}, computer picked ${computerMove}. ${message}`;
}

function reset() {
  setGameActionsEnabled(true);

  movesLeft = MAX_MOVES;
  movesLeftScore.textContent = movesLeft;

  userScore.textContent = 0;
  computerScore.textContent = 0;

  roundMessage.textContent = "Make your move!";
}
