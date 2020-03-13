

//Produce random computer response
export function compRandomChoice() {
    const random = Math.floor(Math.random() * 3);
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
export function compareChoices(human, computer) {
    if (human === computer) {
        return "draw";
    }
    else if ((human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')) {
        return "win";
    }
    else {
        return "lose";
    }
}