let rockButton = document.querySelector("#rock");
let scissorsButton = document.querySelector("#scissors");
let paperButton = document.querySelector("#paper");
let scoreDiv = document.querySelector("#score-div");
rockButton.addEventListener("click",playGame);
scissorsButton.addEventListener("click", playGame);
paperButton.addEventListener("click",playGame);
let humanScore = 0;
  let computerScore = 0;
function getComputerChoice() {
  let choice = Math.random();
  if (choice >= 0 && choice < 0.3) {
    return "rock";
  } else if (choice >= 0.3 && choice < 0.6) {
    return "paper";
  } else if (choice >= 0.6 && choice < 1) {
    return "scissors";
  }
}

function playGame(e) {
  
  function getHumanChoice(e) {
    e.target.getAttribute("id");
    let humanChoice = e.target.getAttribute("id");
    playRound(humanChoice);
  }

  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log(
        `It's a draw, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`
      );
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(
        `You win!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`
      );
    }
    if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "rock")
    ) {
      computerScore++;
      console.log(
        `Computer wins!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`
      );
    }
  }

  getHumanChoice(e);

  if(humanScore >= 5 || computerScore >= 5){
    if (humanScore > computerScore) {
        console.log("Game Over, You Win");
        scoreDiv.textContent = `You win!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`;
      } else {
        scoreDiv.textContent = `Computer wins!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`;
        console.log("Game Over, You Win");
      }
  }
  
}
