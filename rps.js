
let score = {
    wins: 0,
    loses: 0,
    tie: 0
}



let playerMove = '';

function computerPick() {

    let randi = Math.random();
    let computerMove = '';

    if (randi >= 0 && randi < 1 / 3) {
        computerMove = 'rock';
    } else if (randi > 0.33 && randi < 0.66) {
        computerMove = 'paper';
    } else if (randi > 0.666 && randi < 1) {
        computerMove = 'scissors'
    }
    return computerMove;
}

function playGame(playerMove) {
    let result = '';
    const computerMove = computerPick();
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.'
        }
        else if (computerMove === 'paper') {
            result = 'You lose.'
        }
        else if (computerMove === 'scissors') {
            result = 'You win.'
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.'
        }
        else if (computerMove === 'paper') {
            result = 'Tie.'
        }
        else if (computerMove === 'scissors') {
            result = 'You lose.'
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.'
        }
        else if (computerMove === 'paper') {
            result = 'You win.'
        }
        else if (computerMove === 'scissors') {
            result = 'Tie.'
        }
    }



    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.loses += 1;
    } else if (result === 'Tie.') {
        score.tie += 1;
    }

    let paraElement = document.querySelector('.result');
    paraElement.innerHTML = result;

    let pickElement = document.querySelector('.pick');
    pickElement.innerHTML = `You picked <img src="images/${playerMove}.png"> . Computer picked <img src="images/${computerMove}.png">`;

    let scoreElement = document.querySelector('.score');
    scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Tie: ${score.tie}`;



    /*console.log(computerMove);
    console.log(playerMove);
    console.log(result); */

    /*alert(`You picked ${playerMove}. Computer picked ${computerMove}.Result: ${result}
Wins: ${score.wins} Loses: ${score.loses} Tie: ${score.tie} 
    `);*/

}

function resetButton() {

    const resetElement = document.querySelector('.score');
    resetElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Tie: ${score.tie}`;
}
