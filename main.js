const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const result = document.getElementById("win-loss");
const scorePlayer = document.getElementById("playerScore");
const scoreComputer = document.getElementById("compScore");
const restart = document.getElementById("Rest");
let playerScore = 0;
let computerScore = 0;
let computerChoice = "";
let playerChoice = "";

rock.addEventListener("click", () => {
  playerChoice = "rock";
  computerPlay();
  winner();
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  computerPlay();
  winner();
});
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  computerPlay();
  winner();
});
restart.addEventListener("click", () => {
  scorePlayer.innerHTML = `Player score = 0`;
  scoreComputer.innerHTML = `Computer score = 0`;
});
function game() {
  playerScore = 0;
  computerScore = 0;
  getScore();
}
function computerPlay() {
  const choiceNumber = Math.floor(Math.random() * 3);

  if (choiceNumber === 0) {
    computerChoice = "rock";
  } else if (choiceNumber === 1) {
    computerChoice = "paper";
  } else if (choiceNumber === 2) {
    computerChoice = "scissors";
  }
  console.log(choiceNumber);
}

function winner() {
  if (playerChoice === computerChoice) {
    result.textContent = "Tie";
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      result.textContent = "Computer Won";
      computerScore++;
    } else {
      result.textContent = "Player Won";
      playerScore++;
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      result.textContent = "Computer Won";
      computerScore++;
    } else {
      result.textContent = "Player Won";
      playerScore++;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      result.textContent = "Computer Won";
      computerScore++;
    } else {
      result.textContent = "Player Won";
    }
  }

  getScore();
}
function getScore() {
  if (result.textContent === "Player Won") {
    scorePlayer.innerHTML = `Player score = ${playerScore}`;
  } else if (result.textContent === "Computer Won")
    scoreComputer.innerHTML = `Computer score = ${computerScore}`;
}
