


//:create a function that gives the randomized outcome of either "rock,paper or scissor"


const computerChoice = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * computerChoice.length),
        randomElement = computerChoice[randomIndex];
    return randomElement;    
};

console.log(getComputerChoice())