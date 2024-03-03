function getComputerCoice(){
    let num = Math.random() * 100;
    if(num <= 33) return 'Rock';
    else if(num <= 66) return 'Paper';
    return 'Scissors';
}

function getPlayerChoice(){
    let playerChoice = prompt('Choose either rock, paper or scissors.');
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log(`player: ${playerSelection}`, `computer: ${computerSelection}`);
    //Returns 0 if the winner is player or 1 if the winner is computer or -1 if it's a tie
    if(playerSelection == computerSelection) return -1;
    if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper"){
        return 0;
    }
    return 1;
}

function playGame(){
    let playerScore = 0, computerScore = 0;
    for(i = 0; i < 5; i++){
        let roundWinner = playRound(getPlayerChoice(),getComputerCoice());
        if(roundWinner == 0) playerScore++;
        else if(roundWinner == 1) computerScore++;
        console.log(`Round ${i+1}\n (Player) ${playerScore} : (Computer) ${computerScore}`);
    }

    if(playerScore > computerScore) console.log("You win!");
    else if (playerScore < computerScore) console.log("You lose!");
    else console.log("It's a tie1!")
}

playGame();