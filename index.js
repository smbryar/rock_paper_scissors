
// Introduce the game
console.log('Welcome to the game!');

// Allow node to get user input in terminal
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Validate user response
function validateUserResponse (response) {
    const humanResponse = response.toLowerCase().replace(/[.\!\s]/g,"");
    if (humanResponse.match(/^(rock|paper|scissors)$/)) {
        return humanResponse } 
    else {
        return undefined;} 
}


//Produce random computer responce
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

//Compare user and computer choice
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

//This function lets the user choose to play again
function playAgain(response) {
    const simpleResponse = response.toLowerCase().replace(/[.\!\s]/g,"");
    if (simpleResponse === "y") {
        readline.question("Let's play again. Which do you choose: rock, paper or scissors?\n", handleUserResponse);
        return;
    }
    else {
        readline.close();
    }
}    
    
//This function acts on the user response to initial question
function handleUserResponse (response) {
    // Validate user input
    const humanResponse = validateUserResponse (response);
    
    if (humanResponse === undefined) {
        readline.question('Try again, maybe your spelling was off? Which do you choose: rock, paper or scissors?\n', handleUserResponse);
        return;
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
        readline.question('You win! Would you like to play again? Y/N?\n', playAgain);
        return;
        }
    else if (result === false) {
        readline.question('The computer got you this time! Would you like to play again? Y/N?\n', playAgain);
        return;
    }
    else {
        readline.question("It's a draw. How civilised. Would you like to play again? Y/N?\n", playAgain);
        return;
    }
    
    readline.close();
}

// Obtain choice from user
readline.question('Which do you choose: rock, paper or scissors?\n', handleUserResponse); 
