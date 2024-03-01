const computerChoices = ["Rock", "Paper", "Scissor"];

let roundCount = 0,
    playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex]; 
};

function playRound(playerSelection, computerSelection) {
    
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore = computerScore + 1;
            console.log("You chose rock and the computer chose paper. You lose!!");
        } else if (computerChoice === "rock") {
            console.log("You chose rock and the computer chose rock. It's a draw!!!");
        } else {
            playerScore = playerScore + 1;
            console.log("You chose rock and the computer chose scissor. You win!!");
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissor") {
            computerScore = computerScore + 1;
            console.log("You chose paper and the computer chose scissor. You lose!!");
        } else if (computerChoice === "paper") {
            console.log("You chose paper and the computer chose paper. It's a draw!!!");
        } else {
            playerScore = playerScore + 1;
            console.log("You chose paper and the computer chose rock. You win!!");
        }
    } else if (playerChoice === "scissor") {
        if (computerChoice === "rock") {
            computerScore = computerScore + 1;
            console.log("You chose scissor and the computer chose rock. You lose!!");
        } else if (computerChoice === "scissor") {
            console.log("You chose scissor and the computer chose scissor. It's a draw!!!");
        } else {
            playerScore = playerScore + 1;
            console.log("You chose scissor and the computer chose paper. You win!!");
        }
    }
}





function playGame() {
    while (roundCount <= 4) {
        roundCount = roundCount + 1;
        console.log(roundCount)
        playRound(prompt("Enter Rock, Paper or Scissor: "), getComputerChoice()
        )
    };
    {
        if (playerScore > computerScore){
            console.log("You won!! Your score is " + playerScore +" and the computers score is " +computerScore) 
        }
        else if (playerScore < computerScore){
            console.log("You lost!! Your score is " + playerScore +" and the computers score is " +computerScore) 
        }
        
        else  {
            console.log("It's a draw!! Your score is " + playerScore +" and the computers score is " +computerScore) 
        }
    }
};

playGame();