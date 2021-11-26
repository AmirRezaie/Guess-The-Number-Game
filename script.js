// let computerNumber = 0;
// let myGuess = 0;
// const chooseTheNumber = function () {
//   computerNumber = Math.trunc(Math.random() * 19) + 1;
//   console.log(computerNumber);
// };
// chooseTheNumber();
// const guessTheNumber = function () {
//   myGuess = document.getElementById("guessField").value;
//   if (myGuess == computerNumber) {
//     console.log("win");
//   } else if (myGuess > computerNumber) {
//     console.log("Your Guess is Higher than my number");
//   } else if (myGuess < computerNumber) {
//     console.log("Your Guess is Lower than my number");
//   }
// };
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = guess;
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✅ It's Correct";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  if (score > 0) {
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💀 You Lose!";
    document.querySelector("body").style.backgroundColor = "rgb(216, 3, 3)";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});