// "use strict";

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

const gameAction = document.querySelectorAll(".game-action");
gameAction.forEach((action) => {
  action.addEventListener("click", (e) => {
    const userMove = e.currentTarget.dataset.moveName;
    const computerMove = getComputerMove();

    playRound(userMove, computerMove);
  });
});

function playRound(userMove, computerMove) {
  const userScore = document.querySelector(".user-score");
  const computerScore = document.querySelector(".computer-score");
  const roundMessage = document.querySelector(".round-msg");
  roundMessage.style.display = "block";
  if (userMove === computerMove) {
    roundMessage.textContent = `A tie`;
  } else if (
    (userMove === "paper" && computerMove == "rock") ||
    (userMove === "scissors" && computerMove === "paper") ||
    (userMove === "rock" && computerMove === "scissors")
  ) {
    roundMessage.textContent = `You picked ${userMove} and the computer ${computerMove}. You win`;
    userScore.textContent = parseInt(userScore.textContent) + 1;
  } else {
    roundMessage.textContent = `You picked ${userMove} and the computer ${computerMove}. You lose`;
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
}
