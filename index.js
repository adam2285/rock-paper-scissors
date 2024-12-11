/* Two players (computer and human) who each have to pick either RP or S.
Choices then need to be compared when playing a round. 
The winner recieves a point, the loser doesn't and in case of a tie no points.
5 rounds will be played and at the end of the 5 rounds an overall winner is declared.
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
    if (humanChoice === computerChoice){
        console.log(`You both selected ${humanChoice}. It's a draw`)  // Template literals used with ${ } to nest an expression within the string.
        roundsDrawn++
    } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ){
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`)
        humanScore++;
        humanRoundsWon++;
    } else {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You lose!`)
        computerScore++;
        computerRoundsWon++;
    }

    console.log(`Your score is ${humanScore} and the computer score is ${computerScore}.`)
 }

// Play five rounds
function playGame(){
    for (let i = 0; i < 5; i++){               // 'for' expression creates a loop (if 'i' is less than '5', increment by '1')
        console.log(`\nRound ${i+1}:`);        // '\n' creates a new line. Logs round number to the console.
        playRound()
    }

    if (humanScore > computerScore) {
        console.log('\nGame Summary');
        console.log('You won!');
        console.log(`After 5 rounds you won the game. You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log('Thanks for playing!');
    } else if (humanScore < computerScore) {
        console.log('\nGame Summary');
        console.log('You lost!');
        console.log(`After 5 rounds you won the game. You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log('Thanks for playing!');
    } else {
        console.log('\nGame Summary');
        console.log(`After 5 rounds it was a Draw!. You won ${humanRoundsWon} round(s), the computer won ${computerRoundsWon} round(s) and ${roundsDrawn} round(s) were a draw.`);
        console.log('Thanks for playing!');
    }
    
}

console.log(playGame())