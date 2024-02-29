const computerChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex]; // This will return 'Rock', 'Paper', or 'Scissor'
};

function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You chose rock and the computer chose paper. You lose!!");
        } else if (computerChoice === "rock") {
            console.log("You chose rock and the computer chose rock. It's a draw!!!");
        } else {
            console.log("You chose rock and the computer chose scissor. You win!!");
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissor") {
            console.log("You chose paper and the computer chose scissor. You lose!!");
        } else if (computerChoice === "paper") {
            console.log("You chose paper and the computer chose paper. It's a draw!!!");
        } else {
            console.log("You chose paper and the computer chose rock. You win!!");
        }
    } else if (playerChoice === "scissor") {
        if (computerChoice === "rock") {
            console.log("You chose scissor and the computer chose rock. You lose!!");
        } else if (computerChoice === "scissor") {
            console.log("You chose scissor and the computer chose scissor. It's a draw!!!");
        } else {
            console.log("You chose scissor and the computer chose paper. You win!!");
        }
    }
}

// Now you can enter "rock", "Rock", "ROCK", etc.
playRound("SCIssor", getComputerChoice());