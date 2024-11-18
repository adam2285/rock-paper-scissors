console.log('HI')

// array with strings for options.
const options = ["rock", "paper", "scissors"];

// logic for random computer choice using math.floor and math.random
function getComputerChoice() {                                                    
    const choice = options[Math.floor(Math.random() * options.length)];          
    return choice;
}

// call the function
getComputerChoice(); 

// logic for get human choice.
function getUserChoice() {
    let userChoice = prompt('rock, paper or scissors?')
}

// logic for playing a round.
function playRound()