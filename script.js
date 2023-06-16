const btns = document.querySelectorAll('#allButtons .buttons');
let playerSign = document.querySelector('#player .sign');
const playerScore = document.querySelector('#player .score');
const computerScore = document.querySelector('#computer .score');
let computerSign = document.querySelector('#computer .sign');
let roundMessage = document.querySelector('#round-message');
let resultWinner = document.querySelector('#winner');
let gamelogResult = document.querySelector('#game-log .result');
const modalPreview = document.querySelector('#modal');
const modalResult = document.querySelector('#modal .result');
const overlay = document.querySelector('#overlay');
const clsBtnModal = document.querySelector('.close-modal');
const playAgain = document.querySelector('.play-again');

playAgain.addEventListener('click', () => {
  userScore = 0;
  comScore = 0;
  modalPreview.classList.add('hidden');
  overlay.classList.add('hidden');
  playerSign.textContent = '❔';
  computerSign.textContent = '❔';
  playerScore.textContent = userScore;
  computerScore.textContent = comScore;
  roundMessage.textContent = 'First 5 points will win!';
  roundMessage.style.color = 'black';
});
// options to select, computer choice.
const options = ['Rock', 'Paper', 'Scissor'];
let userScore = 0;
let comScore = 0;
let computerChoice = '';
let playerChoice = '';
let gameOver = false;

clsBtnModal.addEventListener('click', () => {
  modalPreview.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modalPreview.classList.add('hidden');
  overlay.classList.add('hidden');
});

btns.forEach(buttons => {
  buttons.addEventListener('click', () => {
    if (buttons.textContent === 'ROCK') {
      computerChoice = getComputerChoice();
      playerChoice = getFormatPlayerChoice(buttons.textContent);
    } else if (buttons.textContent === 'SCISSOR') {
      computerChoice = getComputerChoice();
      playerChoice = getFormatPlayerChoice(buttons.textContent);
    } else if (buttons.textContent === 'PAPER') {
      computerChoice = getComputerChoice();
      playerChoice = getFormatPlayerChoice(buttons.textContent);
    }

    handleChoice(playerChoice, computerChoice);
  });
});

// return a random computer choice.
function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * 3)];
  return randomChoice;
}

// return a format player choice.
function getFormatPlayerChoice(choice) {
  let playerChoice =
    choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return playerChoice;
}

function handleChoice(playerChoice, computerChoice) {
  if (isGameOver()) {
    checkWinner();
    return;
  }

  switch (playerChoice) {
    case 'Rock':
      playerSign.textContent = '✊';
      break;
    case 'Paper':
      playerSign.textContent = '🖐️';
      break;
    case 'Scissor':
      playerSign.textContent = '✌️';
  }

  switch (computerChoice) {
    case 'Rock':
      computerSign.textContent = '✊';
      break;
    case 'Paper':
      computerSign.textContent = '🖐️';
      break;
    case 'Scissor':
      computerSign.textContent = '✌️';
  }

  playRound(playerChoice, computerChoice);
}

// function game play round
function playRound(userChoice, comChoice) {
  let roundWin;

  if (userChoice === comChoice) {
    roundMessage.textContent = "It's a draw!";
    roundMessage.style.color = 'gray';
  } else if (userChoice === 'Rock') {
    if (comChoice === 'Scissor') {
      roundWin = 'player';
      roundMessage.textContent = 'You Win!';
      roundMessage.style.color = 'green';
    } else if (comChoice === 'Paper') {
      roundWin = 'computer';
      roundMessage.textContent = 'You Lose!';
      roundMessage.style.color = 'red';
    }
  } else if (userChoice === 'Paper') {
    if (comChoice === 'Rock') {
      roundWin = 'player';
      roundMessage.textContent = 'You Win!';
      roundMessage.style.color = 'green';
    } else if (comChoice === 'Scissor') {
      roundWin = 'computer';
      roundMessage.textContent = 'You Lose!';
      roundMessage.style.color = 'red';
    }
  } else if (userChoice === 'Scissor') {
    if (comChoice === 'Paper') {
      roundWin = 'player';
      roundMessage.textContent = 'You Win!';
      roundMessage.style.color = 'green';
    } else if (comChoice === 'Rock') {
      roundWin = 'computer';
      roundMessage.textContent = 'You Lose!';
      roundMessage.style.color = 'red';
    }
  }

  addScore(roundWin);
  gameLog(roundWin);
}

// display game log
function gameLog(winner) {
  let newGamelogResult = document.createElement('p');
  if (winner != undefined) {
    if (winner === 'player') {
      newGamelogResult.textContent = `The ${winner} new score : ${userScore}`;
      newGamelogResult.style.color = 'green';
    } else if (winner === 'computer') {
      newGamelogResult.textContent = `The ${winner} new score : ${comScore}`;
      newGamelogResult.style.color = 'red';
    }
  } else {
    newGamelogResult.textContent = `DRAW`;
  }
  gamelogResult.appendChild(newGamelogResult);
}
// add score and return a string of score.
function addScore(roundWinner) {
  if (roundWinner == 'player') {
    userScore++;
  } else if (roundWinner == 'computer') {
    comScore++;
  }

  playerScore.textContent = userScore;
  computerScore.textContent = comScore;

  // check winner
  checkWinner();
}

function isGameOver() {
  return userScore === 5 || comScore === 5;
}
function checkWinner() {
  if (userScore === 5) {
    modalResult.style.color = 'green';
    modalResult.textContent = 'You Won!';
    modalPreview.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else if (comScore === 5) {
    modalResult.style.color = 'red';
    modalResult.textContent = 'You Lose!';
    modalPreview.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}
