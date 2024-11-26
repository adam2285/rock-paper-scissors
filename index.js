/* Two players (computer and human) who each have to pick either RP or S.
Choices then need to be compared when playing a round. 
The winner recieves a point, the loser doesn't and in case of a tie no points.
5 rounds will be plaued and at the end of the 5 rounds an overall winner is declared.
*/

// Counter variable
let computerScore = 0;
let humanScore = 0;
let computerRoundsWon = 0;
let humanRoundsWon = 0;
let roundsDrawn = 0;

// Array with strings for choices.
const options = ["rock", "paper", "scissors"];

// Get random Computer choice (using math.floor and math.random to get random choice)
function getComputerChoice() {                                                    
    const choice = options[Math.floor(Math.random() * options.length)];          
    return choice;
}

// Get User choice.
function getUserChoice(){
    let userChoice = prompt("Please choose either 'rock', 'paper' or 'scissors?':").toLowerCase();
    while (!options.includes(userChoice)){
        userChoice = prompt("Invalid Input. Please enter either 'rock', 'paper' or 'scissors':").toLowerCase();
    }
    return userChoice
}

// Play a round
function playRound(){
    const human = getUserChoice();
    const computer = getComputerChoice();
    const roundWinner = determineWinner(human, computer);
}


// Determine winner and update score
function determineWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice)
        console.log(`You both selected ${humanChoice}. It's a draw`)  // Template literals used with ${ } to nest an expression within the string.
        roundsDrawn++
    } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ){
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`)
        humanScore++
    }
}





// Play five rounds
