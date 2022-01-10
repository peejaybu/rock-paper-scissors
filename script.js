let pick = ["rock", "paper", "scissors"];

function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  return pick[i];
};

let playerScore = 0;
let computerScore = 0;
let ties = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    
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

    let roundPicks = playRound(playerSelection, computerSelection);
    document.getElementById("picks").innerHTML = `${roundPicks}`;
    document.getElementById("round").innerHTML = `You: ${playerSelection} vs Computer: ${computerSelection}`;

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

    document.getElementById("scores").innerHTML = `You: ${playerScore} Computer: ${computerScore} Draw: ${ties}`;
    
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        if(!alert("You Win! Try Again?")){window.location.reload();}
      } else if (playerScore < computerScore) {
        if(!alert("You Lose! Try Again?")){window.location.reload();}
      } else {
        if(!alert("It's a Draw! Try Again?")){window.location.reload();}
      }
    }  

  });
});








