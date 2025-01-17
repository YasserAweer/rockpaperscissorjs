function getAiRPS() {
  let arr = ["rock", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
}
let userScore = 0;
let computerScore = 0;
function round(userAnswer, computerAnswer) {
  console.log(computerAnswer);
  if (computerAnswer == "rock" && userAnswer == "rock") {
    console.log("draw!");
  } else if (computerAnswer == "rock" && userAnswer == "paper") {
    console.log("You Win!");
    userScore += 1;
  } else if (computerAnswer == "rock" && userAnswer == "scissors") {
    console.log("You Lose!");
    computerScore += 1;
  } else if (computerAnswer == "paper" && userAnswer == "paper") {
    console.log("draw!");
  } else if (computerAnswer == "paper" && userAnswer == "rock") {
    console.log("You Lose!");
    computerScore += 1;
  } else if (computerAnswer == "paper" && userAnswer == "scissors") {
    console.log("You Win!");
    userScore += 1;
  } else if (computerAnswer == "scissors" && userAnswer == "scissors") {
    console.log("draw!");
  } else if (computerAnswer == "scissors" && userAnswer == "rock") {
    console.log("You Win!");
    userScore += 1;
  } else if (computerAnswer == "scissors" && userAnswer == "paper") {
    console.log("You Lose!");
    computerScore += 1;
  }
}

// let computerAnswer = getAiRPS();

const paperButton = document.getElementById("paperBtn");
paperButton.addEventListener("click", () => {
  round("paper", getAiRPS());
});

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => {
  round("rock", getAiRPS());
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => {
  round("scissors", getAiRPS());
});
