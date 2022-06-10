// ask player for rock paper or scissors
// player types selection and presses enter
// computer randomly chooses rock paper or scissors
// result of match is player wins, computer wins, or tie
// result is returned to console

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
console.log(computerPlay());