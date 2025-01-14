let ua = prompt('rock, paper, or scissor?');
function getAiRPS() {
     let arr = ["rock", "paper", "scissor"]
     return arr[Math.floor(Math.random() * 3)];

}
let ca = getAiRPS();
console.log(ca);
if (ca == "rock" && ua == "rock") {
     console.log("draw!");
}else if (ca == "rock" && ua == "paper") {
     console.log("You Win!");
}else if (ca == "rock" && ua == "scissor") {
     console.log("You Lose!");
}else if (ca == "paper" && ua == "paper") {
     console.log("draw!");
}else if (ca == "paper" && ua == "rock") {
     console.log("You Lose!");
}else if (ca == "paper" && ua == "scissor") {
     console.log("You Win!");
}else if (ca == "scissor" && ua == "scissor") {
     console.log("draw!");
}else if (ca == "scissor" && ua == "rock") {
     console.log("You Win!");

}else if (ca == "scissor" && ua == "paper") {
     console.log("You Lose!");
}