function computerPlay() {
  let pick = Math.floor(Math.random() * 3);
  if (pick == 0) {
    return "rock";
  } else if (pick == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;

function game() {
  let round = parseInt(prompt("How many rounds would you like to play?", "5"));
  while (playerScore + computerScore + ties < round) {
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
      } else {
        return "It's a Draw!";
      }
    }

    let computerSelection = computerPlay();
    let playerSelection = prompt("What is your hand?", "Rock, Paper, or Scissors").toLowerCase();

    console.log(`You: ${playerSelection} vs Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    switch (playRound(playerSelection, computerSelection)) {
      case "You Lose! Paper beats Rock":
        computerScore++;
        break;
      case "You Lose! Scissors beats Paper":
        computerScore++;
        break;
      case "You Lose! Rock beats Scissors":
        computerScore++;
        break;
      case "It's a Draw!":
        ties++;
        break;
      default:
        playerScore++;
    }

    console.log(`You: ${playerScore} Computer: ${computerScore}`);
    
    if (playerScore + computerScore + ties == round) {
      if (playerScore > computerScore) {
        console.log("Result: You Win!");
        alert("Result:\nYou Win!");
      } else if (playerScore < computerScore) {
        console.log("Result: You Lose!");
        alert("Result:\nYou Lose!");
      } else {
        console.log("Result: It's a Draw!");
        alert("Result:\nIt's a Draw!");

      }
    }  
  }
}

game();