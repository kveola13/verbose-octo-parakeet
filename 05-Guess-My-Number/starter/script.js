"use strict";
//Random stuff from earlier
/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Wrong!";
document.querySelector(".number").textContent = 42;
document.querySelector(".score").textContent = 70;
document.querySelector(".guess").value = 20;
 */
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
function decreaseAndUpdateScore() {
  score--;
  document.querySelector(".score").textContent = score;
}
function changeStyleForGameWin() {
  displayMessage("Correct!");
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").textContent = randomNumber;
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
}
function gameOver() {
  displayMessage("You lose.");
  document.querySelector(".check").disabled = true;
  document.querySelector(".number").textContent = randomNumber;
}

document.querySelector(".check").addEventListener("click", function playGame() {
  const checkGuess = Number(document.querySelector(".guess").value);
  if (!checkGuess || checkGuess == 0) {
    displayMessage("Error!");
  } else if (checkGuess === randomNumber) {
    document.querySelector(".check").disabled = true;
    changeStyleForGameWin();
  } else if (score > 1) {
    displayMessage(checkGuess > randomNumber ? "Too high!" : "Too low!");
    decreaseAndUpdateScore();
  } else {
    decreaseAndUpdateScore();
    gameOver();
  }
});

document
  .querySelector(".again")
  .addEventListener("click", function resetGame() {
    document.querySelector(".check").disabled = false;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = `?`;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  });
