let playerPoints = 0;
let computerPoints = 0;
const games = 5;

computerPlay = () => {
    let choices = ['rock', 'paper', 'sissors']
    let computerChoices = choices[Math.floor(Math.random() * choices.length)];
    return computerChoices;

}



singleRound = (playerSelection, computerSelection) => {
   if (playerSelection === computerSelection) {
    return `it's a draw!`;
   } else if ((playerSelection === 'rock') && (computerSelection === 'sissors')) {
    return `you win! rock beats sissors`
   } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
    return `you lose! paper beats rock`
   } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    return `you win! paper beats rock`
   } else if ((playerSelection === 'paper') && (computerSelection === 'sissors')) {
    return `you lose! sissors beats paper`
   } else if ((playerSelection === 'sissors') && (computerSelection === 'paper')) {
    return `you win! sissors beats paper`
   } else if ((playerSelection === 'sissors') && (computerSelection === 'rock')) {
    return `you lose! rock beats paper`
   } 
};

const playerSelection = 'paper';
const computerSelection = computerPlay();

console.log(singleRound(playerSelection.toLowerCase(), computerSelection));

//return winner instead of console logging

//2.create loop condition


game = () => {

    for(let i = 0; i < 5; i++ ) {

    }
}


