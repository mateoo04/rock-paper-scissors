function getComputerCoice(){
    let num = Math.random() * 100;
    if(num <= 33) return 'rock';
    else if(num <= 66) return 'paper';
    return 'scissors';
}

function getPlayerChoice(){
    let playerChoice = prompt('Choose either rock, paper or scissors.');
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection){
    roundNumber++;

    computerSelection = getComputerCoice()

    console.log(playerSelection)
    console.log(`player: ${playerSelection}`, `computer: ${computerSelection}`);
    //Returns 0 if the winner is player or 1 if the winner is computer or -1 if it's a tie
    //if(playerSelection == computerSelection) return -1;
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
    } else{
        computerScore++;
    }
    updateText(playerSelection, computerSelection)
}

function playGame(){
    let playerScore = 0, computerScore = 0;
    //for(i = 0; i < 5; i++){
        let roundWinner = playRound(getPlayerChoice(),getComputerCoice());
        if(roundWinner == 0) playerScore++;
        else if(roundWinner == 1) computerScore++;
        console.log(`Round ${i+1}\n (Player) ${playerScore} : (Computer) ${computerScore}`);
    //}

    if(playerScore > computerScore) console.log("You win!");
    else if (playerScore < computerScore) console.log("You lose!");
    else console.log("It's a tie1!")
}

function updateText(playerSelection, computerSelection){
    currentGame.textContent = `Round ${roundNumber}: You played ${playerSelection}, computer played ${computerSelection}`
    result.textContent = `Score: YOU: ${playerScore} - COMPUTER: ${computerScore}`
    if(roundNumber == 5) {
        if(playerScore > computerScore) result.textContent += ` Congratulations! You win!`
        else if(computerScore > playerScore) result.textContent += ` You lost :/`
        else result.textContent += ` It's a tie.`

        roundNumber = 0
        playerScore = 0
        computerScore = 0
    }
}

let roundNumber = 0, playerScore = 0, computerScore = 0;

const container = document.querySelector(".container")

const rockButton = document.createElement("button")
rockButton.textContent = "Rock"
const paperButton = document.createElement("button")
paperButton.textContent = "Paper"
const scissorsButton = document.createElement("button")
scissorsButton.textContent = "Scissors"

container.appendChild(rockButton)
container.appendChild(paperButton)
container.appendChild(scissorsButton)

rockButton.addEventListener("click", () => {
     playRound("rock")
})
paperButton.addEventListener("click", () => {
    playRound("paper")
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors")
})

const result = document.createElement("h1")
const currentGame = document.createElement("p")

container.appendChild(currentGame)
container.appendChild(result)