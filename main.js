function getAiRPS() {
  let arr = ["rock", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
}
let userScore = 0;
let computerScore = 0;

const usrscore = document.getElementById("usrScore");
const compscore = document.getElementById("computerScore");

const resultDiv = document.getElementById("result");
//round logic
function round(userAnswer, computerAnswer) {
  console.log(computerAnswer);
  if (computerAnswer == "rock" && userAnswer == "rock") {
    console.log("draw!");
    resultDiv.textContent = "Draw!";
  } else if (computerAnswer == "rock" && userAnswer == "paper") {
    console.log("You Win!");
    userScore += 1;
    resultDiv.textContent = "You Win!";
  } else if (computerAnswer == "rock" && userAnswer == "scissors") {
    console.log("You Lose!");
    computerScore += 1;
    resultDiv.textContent = "You Lose!";
  } else if (computerAnswer == "paper" && userAnswer == "paper") {
    console.log("draw!");
    resultDiv.textContent = "Draw!";
  } else if (computerAnswer == "paper" && userAnswer == "rock") {
    console.log("You Lose!");
    computerScore += 1;
    resultDiv.textContent = "You Lose!";
  } else if (computerAnswer == "paper" && userAnswer == "scissors") {
    console.log("You Win!");
    userScore += 1;
    resultDiv.textContent = "You Win!";
  } else if (computerAnswer == "scissors" && userAnswer == "scissors") {
    console.log("draw!");
    resultDiv.textContent = "Draw!";
  } else if (computerAnswer == "scissors" && userAnswer == "rock") {
    console.log("You Win!");
    userScore += 1;
    resultDiv.textContent = "You Win!";
  } else if (computerAnswer == "scissors" && userAnswer == "paper") {
    console.log("You Lose!");
    computerScore += 1;
    resultDiv.textContent = "You Lose!";
  }
  usrscore.textContent = "Your Score: " + userScore;
  compscore.textContent = "Computer Score: " + computerScore;

  if (userScore == 5) {
    alert("YOU WIN");
    window.location.reload(); 
  }else if(computerScore == 5){
    alert("YOU LOSE");
    window.location.reload(); 
  }
}

//buttons functionality

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


