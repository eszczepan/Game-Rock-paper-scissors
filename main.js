//For the future use
let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Computer choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

//CONVERT FUNCTION
function convertChoiceToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
//WIN FUNCTION
function win(user, computer) {
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.textContent = userScore;
  result_div.innerHTML = `${convertChoiceToWord(
    user
  )} beats ${convertChoiceToWord(computer)} . You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
}
//LOSE FUNCTION
function lose(user, computer) {
  const userChoice_div = document.getElementById(user);
  pcScore++;
  pcScore_span.textContent = pcScore;
  result_div.innerHTML = `${convertChoiceToWord(
    user
  )} loses to ${convertChoiceToWord(computer)}. You lose... ;(`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
}
//DRAW FUNCTION
function draw(user, computer) {
  const userChoice_div = document.getElementById(user);
  result_div.innerHTML = `${convertChoiceToWord(
    user
  )} equals ${convertChoiceToWord(computer)}. It's a draw.`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 400);
}

//Check result and show it
function game(userChoice) {
  const pcChoice = getComputerChoice();
  switch (userChoice + pcChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, pcChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, pcChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, pcChoice);
      break;
  }
}

//User choice + call function game(userStringChoice => userChoice)
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
