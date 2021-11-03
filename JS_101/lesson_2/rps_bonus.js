const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

let answer = '';

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${VALID_CHOICES[choice]}, computer chose ${computerChoice}`);

  if ((VALID_CHOICES[choice] === 'rock' && computerChoice === 'scissors') ||
      (VALID_CHOICES[choice] === 'rock' && computerChoice === 'lizard') ||
      (VALID_CHOICES[choice] === 'paper' && computerChoice === 'rock') ||
      (VALID_CHOICES[choice] === 'paper' && computerChoice === 'spock') ||
      (VALID_CHOICES[choice] === 'scissors' && computerChoice === 'paper') ||
      (VALID_CHOICES[choice] === 'scissors' && computerChoice === 'lizard') ||
      (VALID_CHOICES[choice] === 'lizard' && computerChoice === 'paper') ||
      (VALID_CHOICES[choice] === 'lizard' && computerChoice === 'spock') ||
      (VALID_CHOICES[choice] === 'spock' && computerChoice === 'scissors') ||
      (VALID_CHOICES[choice] === 'spock' && computerChoice === 'rock')) {
    prompt("You win!");
  } else if (VALID_CHOICES[choice] === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

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

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
} while (answer === 'y');
console.log("Goodbye!");