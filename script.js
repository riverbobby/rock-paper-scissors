const playButton = document.querySelector('#btn-play');
playButton.onclick = game();

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

    //add to display #gamePageContainer
    gamePageContainer.style.display = 'flex';
    
    //activate button start over
    const startOver = document.querySelector('#btn-start-over');
    startOver.onclick = () => window.location.reload();

    //initialize stats
    const winsDisplay = document.querySelector('#wins');
    const lossesDisplay = document.querySelector('#losses');
    const tiesDisplay = document.querySelector('#ties');
    winsDisplay.textContent = `Wins: ${wins}`;
    lossesDisplay.textContent = `Losses: ${losses}`;
    tiesDisplay.textContent = `Ties: ${ties}`;
    //initialize initial-result
    const initialResult = document.querySelector('#initial-result');
    initialResult.textContent = '';

    //initialize game
    while (!gameOver) {
        playRound();

        //display stats

        if (wins > 4 || losses > 4) {
            gameOver = true;
        }
    }
    //display final-result
    const result = document.querySelector('#final-result');
    result.style.display = 'block';
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        initialResult.textContent = "Tie!";
        ties++;
        return;
    } 
    //variables for messages
    let rockBreaksScissors = 'Rock breaks Scissors';
    let paperCoversRock = 'Paper covers Rock';
    let scissorsCutsPaper = 'Scissors cuts paper';
    let win = 'you win this round!';
    let lose = 'you lose this round!';
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            initialResult.textContent = `${paperCoversRock} + ${lose}`;
            losses++;
        } else {
            initialResult.textContent = `${rockBreaksScissors} + ${win}`;
            wins++;
        }
        
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            initialResult.textContent = `${paperCoversRock} + ${win}`;
            wins++;
        } else {
            initialResult.textContent = `${scissorsCutsPaper} + ${lose}`;
            losses++;
        }
        
    } else { //playerSelection must be 'scissors'
        if (computerSelection === 'rock') {
            initialResult.textContent = `${rockBreaksScissors} + ${lose}`;
            losses++;
        } else {
            initialResult.textContent = `${scissorsCutsPaper} + ${win}`;
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
