
// Introduce the game
console.log('Welcome to the game!');

// Allow node to get user input in terminal
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
    // Validate user input
    const humanResponse = response.toLowerCase().replace(/[.\!\s]/g,"");
    if (humanResponse.match(/^(rock|paper|scissors)$/)) {
        console.log('You have chosen '+humanResponse+'.');}
    else {
        console.log("I'm afraid that isn't one of the three options. The computer overlord wins by default.");
    }
    
    // Random choice for computer
    const compChoice = Math.floor(Math.random()*3);
    switch (compChoice) {
        case 0:
            console.log('The computer has chosen rock.');
            break;
        case 1:
            console.log('The computer has chosen paper.');
            break;
        case 2:
            console.log('The computer has chosen scissors.');
            break;
        default:
            console.log('Uh oh, the computer has messed up. You win by default!');
    }

    // Compare choices and report on who has won
        if ((humanResponse === 'rock' && compChoice === 1) || 
            (humanResponse === 'paper' && compChoice === 2) ||
            (humanResponse === 'scissors' && compChoice === 0)) {
            console.log('You win!');
            }
        else if ((humanResponse === 'rock' && compChoice === 0) || 
                (humanResponse === 'paper' && compChoice === 1) ||
                (humanResponse === 'scissors' && compChoice === 2)) {
            console.group("It's a draw. How civilised.");}
        else {
            console.log('The computer got you this time!');
        }
    
    readline.close();
}

// Obtain choice from user
readline.question('Which do you choose: rock, paper or scissors?\n', handleUserResponse); // Everything that happens with the user input has to happen within this function. new line character using \n
