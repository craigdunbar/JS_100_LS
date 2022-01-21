const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

const SCORE = {
  player: 0,
  computer: 0
};

const WINNING_GAMES = 3;

let answer = '';

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (VALID_CHOICES[choice] === 'rock' && computerChoice === 'scissors') ||
        (VALID_CHOICES[choice] === 'rock' && computerChoice === 'lizard') ||
        (VALID_CHOICES[choice] === 'paper' && computerChoice === 'rock') ||
        (VALID_CHOICES[choice] === 'paper' && computerChoice === 'spock') ||
        (VALID_CHOICES[choice] === 'scissors' && computerChoice === 'paper') ||
        (VALID_CHOICES[choice] === 'scissors' && computerChoice === 'lizard') ||
        (VALID_CHOICES[choice] === 'lizard' && computerChoice === 'paper') ||
        (VALID_CHOICES[choice] === 'lizard' && computerChoice === 'spock') ||
        (VALID_CHOICES[choice] === 'spock' && computerChoice === 'scissors') ||
        (VALID_CHOICES[choice] === 'spock' && computerChoice === 'rock');
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${VALID_CHOICES[choice]}, computer chose ${computerChoice}`);
  let winner = ''
  if (playerWins(choice, computerChoice)) {
    prompt("You win!");
    SCORE.player += 1;
  } else if (VALID_CHOICES[choice] === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
    SCORE.computer += 1;
  }
  return winner
}

// function gameScore(winner) {
//   // const winner = displayWinner()
//   console.log(winner);
//   if (winner === 'player') {
//     SCORE.player += 1;
//   } else if (winner === 'computer') {
//     SCORE.player += 1
//   }
// }
function finalWinner() {
  if (SCORE.player === WINNING_GAMES) {
    console.log("Player is the final winner!!");
  } else if (SCORE.computer === WINNING_GAMES) {
    console.log("Computer is the final winner!");
  }
}
// function endGame() {
//   if (SCORE.player === 3 || SCORE.computer === 3) {
//     break;
//   }
// }

// main program loop 
  do {
    prompt(`Choose one: ${Object.values(VALID_CHOICES)}\n   Enter: r, p ,sc, l, sp`);
    let choice = readline.question().toLowerCase();

    while (!Object.keys(VALID_CHOICES).includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
    }

    let randomIndex = (Math.floor(Math.random() *
    Object.values(VALID_CHOICES).length));

    let computerChoice = Object.values(VALID_CHOICES)[randomIndex];

    displayWinner(choice, computerChoice);
    // gameScore();
    prompt(`Player: ${SCORE.player} and Computer: ${SCORE.computer}`);
    finalWinner();

    if (SCORE.player === 3 || SCORE.computer === 3) {
      break;
    }

    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
  } while (answer === 'y') 
console.log("Goodbye!");