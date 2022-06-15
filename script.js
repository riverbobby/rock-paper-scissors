//global variables
let wins = 0;
let losses = 0;
let ties = 0;

const playButton = document.querySelector('#btn-play');
playButton.addEventListener('click', game);

function game() {//starts the game
    const bod = document.querySelector('#body');
    const gamePageContainer = document.querySelector('#game-page-container');

    //remove from display #loadPageContainer
    const loadPageContainer = document.querySelector('#load-page-container');
    bod.removeChild(loadPageContainer);

    //add to display #gamePageContainer and components
    gamePageContainer.style.visibility = 'visible';
    
    //activate button start over
    const startOver = document.querySelector('#btn-start-over');
    startOver.onclick = () => window.location.reload();

    refreshStats();
    refreshSelectors();
}


function playRound(playerSelection, computerSelection) {//plays a round
    //initialize initialResult and selectionResult
    const initialResult = document.querySelector('#initial-result');
    const selectionResult = document.querySelector('#selection-result');

    //variables for messages
    let rockBreaksScissors = 'Rock breaks Scissors';
    let paperCoversRock = 'Paper covers Rock';
    let scissorsCutsPaper = 'Scissors cuts paper';
    let winRound = 'you win this round!';
    let loseRound = 'you lose this round!';
    let choices = `You choose: ${playerSelection} + Computer chooses: ${computerSelection}`;

    //display #selection-result
    selectionResult.textContent = choices;

    if (playerSelection === computerSelection) {
        initialResult.textContent = "Tie!";
        ties++;
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                initialResult.textContent = `${paperCoversRock}, ${loseRound}`;
                losses++;
            } else {
                initialResult.textContent = `${rockBreaksScissors}, ${winRound}`;
                wins++;
            }
            
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                initialResult.textContent = `${paperCoversRock}, ${winRound}`;
                wins++;
            } else {
                initialResult.textContent = `${scissorsCutsPaper} , ${loseRound}`;
                losses++;
            }
            
        } else { //playerSelection must be 'scissors'
            if (computerSelection === 'rock') {
                initialResult.textContent = `${rockBreaksScissors}, ${loseRound}`;
                losses++;
            } else {
                initialResult.textContent = `${scissorsCutsPaper}, ${winRound}`;
                wins++;
            }
        } 
    }

    refreshStats();

    if (wins > 4 || losses > 4) {//ends game
        //remove #selection-title and selections
        const selectionTitle = document.querySelector('#selection-title');
        const selections = document.querySelector('#selections');
        const gamePageContainer = document.querySelector('#game-page-container');
        gamePageContainer.removeChild(selectionTitle);
        gamePageContainer.removeChild(selections);
        // display final-result
        const result = document.querySelector('#final-result');
        if (wins > 4) {
            result.textContent = 'YOU ARE VICTORIOUS, YOU BEAT THE COMPUTER!!'; 
        } else {
            result.textContent = 'GAME OVER, YOU HAVE BEEN VANQUISHED!!';
        }

    } else {//keep playing
        refreshSelectors();
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

function refreshStats() {
    const winsDisplay = document.querySelector('#wins');
    const lossesDisplay = document.querySelector('#losses');
    const tiesDisplay = document.querySelector('#ties');
    winsDisplay.textContent = `Wins: ${wins}`;
    lossesDisplay.textContent = `Losses: ${losses}`;
    tiesDisplay.textContent = `Ties: ${ties}`;
}

function refreshSelectors() {
    let computerSelection = computerPlay();
    const rock = document.querySelector('#rock');
    rock.onclick = () => {
        playRound('rock', computerSelection)
    };
    const paper = document.querySelector('#paper');
    paper.onclick = () => {
        playRound('paper', computerSelection)
    };
    const scissors = document.querySelector('#scissors');
    scissors.onclick = () => {
        playRound('scissors', computerSelection)
    };
}
