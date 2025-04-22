function getComputerChoice(){
    let choice = Math.random();
    if(choice >= 0 && choice < 0.3){
        return 'rock';
    } else if(choice >= 0.3 && choice < 0.6){
        return 'paper';
    } else if(choice >= 0.6 && choice < 1){
        return 'scissors';
    }
}
let score = 0;
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: ').toLowerCase();
    return humanChoice;
}

function playRound(){
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if(humanChoice == computerChoice){
        console.log(`It's a draw, Score line is \n ${humanChoice} \n ${computerChoice}`)
    }
}