"use strict";
const firstPlayer = document.querySelector(".player--0");
const secondPlayer = document.querySelector(".player--1");
const firstScore = document.querySelector("#score--0");
const secondScore = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const newButton = document.querySelector(".btn--new");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const currentFirstScore = document.getElementById("current--0");
const currentSecondScore = document.getElementById("current--1");

let scores, currentPlayer, currentScore, playing;

function swapPlayer() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  firstPlayer.classList.toggle("player--active");
  secondPlayer.classList.toggle("player--active");
}

function gameOver() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--winner");
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  dice.classList.add("hidden");
}

const diceRoll = function () {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    if (dice.classList.contains("hidden")) {
      dice.classList.remove("hidden");
    }
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      swapPlayer();
    }
  }
};

const holdButtonFunctionality = function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 100) {
      gameOver();
      playing = false;
    } else {
      swapPlayer();
    }
  }
};

const restartGame = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  firstScore.textContent = 0;
  secondScore.textContent = 0;
  currentFirstScore.textContent = 0;
  currentSecondScore.textContent = 0;

  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--active");

  dice.classList.add("hidden");
};

restartGame();
rollButton.addEventListener("click", diceRoll);
holdButton.addEventListener("click", holdButtonFunctionality);
newButton.addEventListener("click", restartGame);
