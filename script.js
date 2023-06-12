// Buttons
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');

let options = ['Rock', 'Paper', 'Scissor'];
let permissionToExit;
let roundWin = '';
let userScore = 0;
let comScore = 0;

// return a random computer choice
function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * 3)];
  return randomChoice;
}

// return a player choice
function getPlayerChoice() {
  while (true) {
    let playerChoice = prompt('Choose weapon: [Rock, Paper, Scissor]');

    if (playerChoice != null) {
      playerChoice =
        playerChoice.charAt(0).toUpperCase() +
        playerChoice.slice(1).toLowerCase();

      if (options.includes(playerChoice)) {
        return playerChoice;
      } else if (playerChoice === null) {
        return permissionExit();
      } else {
        continue;
      }
    } else {
      return permissionExit();
    }
  }
}

// ask user to confirm cancelation in picking.
function permissionExit() {
  let grant = confirm('Are you sure? You want to cancel');
  if (grant) {
    permissionToExit = 'You cancel, successfully.🥹';
    return permissionToExit;
  } else {
    getPlayerChoice();
  }
}

// function game play round
function playRound(userChoice, comChoice) {
  if (userChoice === comChoice) {
    console.log("It's a draw! ");
  } else if (userChoice === 'Rock') {
    if (comChoice === 'Scissor') {
      roundWin = 'USER';
      console.log('You win!');
    } else if (comChoice === 'Paper') {
      roundWin = 'COMPUTER';
      console.log('You lose!');
    }
  } else if (userChoice === 'Paper') {
    if (comChoice === 'Rock') {
      roundWin = 'USER';
      console.log('You win!');
    } else if (comChoice === 'Scissor') {
      roundWin = 'COMPUTER';
      console.log('You lose!');
    }
  } else if (userChoice === 'Scissor') {
    if (comChoice === 'Paper') {
      roundWin = 'USER';
      console.log('You win!');
    } else if (comChoice === 'Rock') {
      roundWin = 'COMPUTER';
      console.log('You lose!');
    }
  }

  if (permissionToExit != 'You cancel, successfully.🥹') {
    console.log(addScore(roundWin));
  }

  return isGameOver();
}

// add score and return a string of score.
function addScore(roundWinner) {
  if (roundWinner === 'USER') {
    userScore++;
  } else if (roundWinner === 'COMPUTER') {
    comScore++;
  }

  return `👨🏻 Score : ${userScore} || 🤖 Score : ${comScore}`;
}

// return a winner
function isGameOver() {
  if (userScore === 5) {
    return '🎉🎉You Win the battle!!🎉🎉';
  } else if (comScore === 5) {
    return '😢😢Computer Win the battle!!🥲🥲';
  } else if (permissionToExit === 'You cancel, successfully.🥹') {
    //if permission to exit is true return the execution!
    return 'You cancel❌';
  }
}

function game() {
  while (!isGameOver()) {
    playRound(getPlayerChoice(), getComputerChoice());
  }

  // Return the winner
  return isGameOver();
}
