// ask player for rock paper or scissors
// player types selection and presses enter
// computer randomly chooses rock paper or scissors
// result of match is player wins, computer wins, or tie
// result is returned to console
let countRock = 0;
let countScissors = 0;
let countPaper = 0;
function computerPlay() {
    //finds random number between 0-2
    let chance = Math.floor(Math.random() * 3);
    switch (chance) {
        case 0:
            countRock++;
            return "rock";
        case 1:
            countPaper++;
            return "paper";
        case 2:
            countScissors++;
            return "scissors";    
        default:
            console.log("computer had issues");
            return "error!"
    }
}
for (let i = 0; i < 1000; i++) {
    console.log(computerPlay());
}
console.log(
    `rocks = ${countRock}
    papers = ${countPaper}
    scissors = ${countScissors}`
);