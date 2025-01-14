function getAiRPS() {
  let arr = ["rock", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
}
let us = 0;
let cs = 0;
function round(ua, ca) {
  
  console.log(ca);
  if (ca == "rock" && ua == "rock") {
    console.log("draw!");
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "rock" && ua == "paper") {
    console.log("You Win!");
    us += 1;
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "rock" && ua == "scissor") {
    console.log("You Lose!");
    cs += 1;
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "paper" && ua == "paper") {
    console.log("draw!");
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "paper" && ua == "rock") {
    console.log("You Lose!");
    //   let ua = prompt("rock, paper, or scissor?");
    cs += 1;
  } else if (ca == "paper" && ua == "scissor") {
    console.log("You Win!");
    us += 1;
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "scissor" && ua == "scissor") {
    console.log("draw!");
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "scissor" && ua == "rock") {
    console.log("You Win!");
    us += 1;
    //   let ua = prompt("rock, paper, or scissor?");
  } else if (ca == "scissor" && ua == "paper") {
    console.log("You Lose!");
    cs += 1;
    //   let ua = prompt("rock, paper, or scissor?");
  }
  
}


let i = 0;
while (i < 10) {
     let uaa = prompt("rock, paper, or scissor?");
     let caa = getAiRPS();
     console.log(round(uaa, caa));
     console.log("computer score is ", cs, " and your score is ", us);
     i += 1;
}