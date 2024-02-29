


//:create a function that gives the randomized outcome of either "rock,paper or scissor"


const computerChoice = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * computerChoice.length),
        randomElement = computerChoice[randomIndex];
    return randomElement;    
};



//: create a function that lets me Enter Rock paper or scissors


function playRound (playerSelection, computerSelection) {

    
    
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return console.log("You chose rock and the computer chose paper. You Loose!!");
        }
        else if (computerSelection == "Rock") {
            return console.log("You chose rock and the computer chose rock. It's a draw!!!");
        }
        else 
            return console.log("You chose rock and the computer chose scissor. You win!!");
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissor") {
            return console.log("You chose paper and the computer chose scissor. You Loose!!");
        }
        else if (computerSelection == "Paper") {
            return console.log("You chose paper and the computer chose paper. It's a draw!!!");
        }
        else 
            return console.log("You chose paper and the computer chose rock. You win!!");
    }

    else if (playerSelection == "Scissor") {
        if (computerSelection == "Rock") {
            return console.log("You chose scissor and the computer chose rock. You Loose!!");
        }
        else if (computerSelection == "Scissor") {
            return console.log("You chose scissor and the computer chose scissor. It's a draw!!!");
        }
        else 
            return console.log("You chose scissor and the computer chose paper. You win!!");
    }
        
    

}


playRound("Rock", getComputerChoice())
