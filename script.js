//active strict mode
"use strict";

//Computer Choose The Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Variables
let score = 10;
let highScore = 0;
const checkBtn = document.querySelector(".check-btn");
const guessElement = document.querySelector(".guess");
const userChoose = document.querySelector(".number");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//EventListener For "Check" Button
checkBtn.addEventListener("click", function () {
  const guess = Number(guessElement.value);
  userChoose.textContent = guess;

  if (guess === secretNumber) {
    displayMessage("✅ It's Correct");
    document.querySelector("body").style.backgroundColor = "#60b347";
    userChoose.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    if (!guess) {
      displayMessage("⛔️ No Number");
    } else {
      if (score > 0) {
        displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💀 You Lose!");
        document.querySelector("body").style.backgroundColor = "rgb(216, 3, 3)";
      }
    }
  }
});

//EventListener For "Again" Button
document.querySelector(".again-btn").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  userChoose.textContent = "?";
  guessElement.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  userChoose.style.width = "15rem";
});
