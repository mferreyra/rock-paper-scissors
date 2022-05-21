function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a TIE";
  }
  if (playerSelection === "ROCK")
    if (computerSelection === "PAPER") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  if (playerSelection === "PAPER") {
    if (computerSelection === "SCISSORS") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  }
  if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  }
}

function computerPlay() {
  const choiceArray = ["ROCK", "PAPER", "SCISSORS"];
  const choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return choice;
}

// alert("Let's play a game");
// alert(`Pick your choice and write it down:
//     Rock
//     Paper
//     Scissors`);
// const playerSelection = prompt("Please write your choice").toUpperCase();
const playerSelection = "PAPER";
// console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let x = 1; x <= 5; x++) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
