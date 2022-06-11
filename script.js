//global variables
let wins = 0;
let losses = 0;
let ties = 0;
let rounds = 5;


game();

function game() {
    //loop for the five rounds of the game
    for (let i = 0; i < 5; i++) {
        playPrompt();
        rounds--;
    }
    let stats = `\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}\nPress F5 to play again!: ${ties}`;
    let win = `You Won the Game!${stats}`;
    let lose = `You Lost the Game!${stats}`;
    let tie = `You Tied the Game!${stats}`;
    if (wins > losses) {
        console.log(win);
    } else if (losses > wins) {
        console.log(lose);
    } else {
        console.log(tie);
    }
}

function playPrompt() {
    let remaining = `\n${rounds} more round(s)`;
    let message = `${remaining}\nPlease ENTER: 'Rock', 'Paper', or 'Scissors'\n`;
    let result = prompt(message);
    //catch null (cancel button was pressed)
    if (result === null) {
        alert(`Don't quit yet!`);
        playPrompt();
        return;
    }
    let playerSelection = result.toLowerCase();
    //validate string
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playRound(playerSelection, computerPlay());
    } else {
        alert(`Invalid input:`);
        playPrompt();
    }

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie!');
        ties++;
        return;
    } 
    //variables for messages
    let win = '\nYou Win!';
    let lose = '\nYou Lose!';
    let rockBreaksScissors = 'Rock breaks Scissors';
    let paperCoversRock = 'Paper covers Rock';
    let scissorsCutsPaper = 'Scissors cuts paper';
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(paperCoversRock + lose);
            losses++;
        } else {
            console.log(rockBreaksScissors + win);
            wins++;
        }
        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(paperCoversRock + win);
            win++;
        } else {
            console.log(scissorsCutsPaper + lose);
            losses++;
        }
        
    } else { //playerSelection must be 'scissors'
        if (computerSelection === 'rock') {
            console.log(rockBreaksScissors + lose);
            losses++;
        } else {
            console.log(scissorsCutsPaper + win);
            wins++;
        }
    }
}
function computerPlay() {
    //finds random number between 0-2
    let chance = Math.floor(Math.random() * 3);
    switch (chance) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";    
        default:
            console.log("computer had issues");
            return "error!"
    }
}
