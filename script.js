//global variables
let rounds = 5;

// loadPageContainer.parentNode.removeChild(loadPageContainer);
// bod.appendChild(loadPageContainer);

const playButton = document.querySelector('#btn-play');
playButton.onclick = game();

// () => bod.removeChild(loadPageContainer);
// TODO: put to following in main game function once it is ready



function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let gameOver = false;
    const bod = document.querySelector('#body');
    const gamePageContainer = document.querySelector('#game-page-container');

    //remove from display #loadPageContainer
    const loadPageContainer = document.querySelector('#load-page-container');
    loadPageContainer.style.display = 'none';

    //initialize game
    while (!gameOver) {
        playPrompt();
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
            wins++;
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
