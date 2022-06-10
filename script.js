// ask player for rock paper or scissors
// player types selection and presses enter
// computer randomly chooses rock paper or scissors
// result of match is player wins, computer wins, or tie
// result is returned to console


playPrompt();

function playPrompt() {
    let message = "Please ENTER: 'Rock', 'Paper', or 'Scissors'";
    let playerSelection = prompt(message).toLowerCase();
    //validate string
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playRound(playerSelection, computerPlay());
    } else {
        console.log(`Invalid input, next time\n ${message}`);
    }

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie press F5 to try again!');
        return;
    } 
    //variables for messages
    let win = '\nYou Win!\npress F5 to play again!';
    let lose = '\nYou Lose!\npress F5 to try again!';
    let rockBreaksScissors = 'Rock breaks Scissors';
    let paperCoversRock = 'Paper covers Rock';
    let scissorsCutsPaper = 'Scissors cuts paper';
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log(paperCoversRock + lose);
        } else {
            console.log(rockBreaksScissors + win);
        }
        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(paperCoversRock + win);
        } else {
            console.log(scissorsCutsPaper + lose);
        }
        
    } else { //playerSelection must be 'scissors'
        if (computerSelection === 'rock') {
            console.log(rockBreaksScissors + lose);
        } else {
            console.log(scissorsCutsPaper + win);
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
