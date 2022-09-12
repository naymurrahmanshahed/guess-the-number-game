"use strict";

// elements
const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const correctAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

// Variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
console.log(SECRET_NUMBER);
let SCORE = 20;
let HIGH_SCORE = 0;

//  display texts
function displayGuessingText(text) {
  guessingText.textContent = text;
}
//checking

check.addEventListener("click", function () {
  const inputNumber = Number(input.value);
  // input.value = "";

  // when there is no input
  if (!inputNumber) displayGuessingText("Input a valid number!");
  // when player wins
  else if (inputNumber === SECRET_NUMBER) {
    displayGuessingText("Correct Ans!");
    correctAns.textContent = SECRET_NUMBER;
    correctAns.style.backgroundImage = "#222";
    document.body.style.backgroundColor = "teal";

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }
  // when guess number wrong
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessingText(
        inputNumber > SECRET_NUMBER ? "Too High!!" : "Too Low!!!"
      );
      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGuessingText("Game Over");
      score.textContent = 0;
    }
  }
});

//play Again

playAgain.addEventListener("click", function () {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  displayGuessingText("Start guessing...");

  document.body.style.backgroundColor = "#222";
  correctAns.style.backgroundColor = "teal";
  correctAns.textContent = "?";
  score.textContent = SCORE;
  input.value = "";
});
