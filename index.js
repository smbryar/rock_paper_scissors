
// Introduce the game
console.log('Welcome to the game!');

// Allow node to get user input in terminal
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateUserResponse (response) {
    const humanResponse = response.toLowerCase().replace(/[.\!\s]/g,"");
    if (humanResponse.match(/^(rock|paper|scissors)$/)) {
        return humanResponse } 
    else {
        return undefined;} 
}

function compRandomChoice()  {
    const random = Math.floor(Math.random()*3);
    switch (random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return undefined;
        }
    }

function compareChoices(human,computer) {
    if (human === computer) {
        return undefined; }
    else if ((human === 'rock' && computer === 'scissors') || 
            (human === 'paper' && computer === 'rock') ||
            (human === 'scissors' && computer === 'paper')) {
        return true; }
    else {
        return false;}
    }
    

function handleUserResponse (response) {
    // Validate user input
    const humanResponse = validateUserResponse (response);
    
    if (humanResponse === undefined) {
        console.log("I'm afraid that isn't one of the three options. The computer overlord wins by default.")
    }
    else {
        console.log("You have chosen "+humanResponse+".");
    }
    
    // Random choice for computer

    const compChoice = compRandomChoice();

    if (compChoice === undefined) {
        console.log('Uh oh, the computer has messed up. You win by default!')
    }
    else {
        console.log('The computer has chosen '+compChoice+'.');
    }
    

    // Compare choices and report on who has won

    const result = compareChoices(humanResponse,compChoice);

    if (result === true) {
        console.log('You win!');
        }
    else if (result === false) {
        console.group('The computer got you this time!');}
    else {
        console.log("It's a draw. How civilised.");
    }
    
    readline.close();
}

// Obtain choice from user
readline.question('Which do you choose: rock, paper or scissors?\n', handleUserResponse); 