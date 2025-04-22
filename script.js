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

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: ').toLowerCase();
    return humanChoice;
}


function playGame(){ 
    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        if(humanChoice === computerChoice){
            console.log(`It's a draw, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`)
        }
        if((humanChoice === 'rock' && computerChoice ==='scissors') || (humanChoice === 'scissors' && computerChoice ==='paper') || (humanChoice === 'paper' && computerChoice ==='rock')){
            humanScore++;
            console.log(`You win!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`)
        }
        if((computerChoice === 'rock' && humanChoice ==='scissors') || (computerChoice === 'scissors' && humanChoice ==='paper') || (computerChoice === 'paper' && humanChoice ==='rock')){
            computerScore++;
            console.log(`Computer wins!, Score line is \n Human: ${humanScore} \n Computer: ${computerScore}`)
        }
    }
    
    for(let i = 0;i<5;i++){
        playRound();
    }
    if(humanScore > computerScore){
        console.log('Game Over, You won!')
    } else {
        console.log('Game Over, You Lose')
    }
}

playGame();