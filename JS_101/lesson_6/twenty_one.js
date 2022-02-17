const readline = require('readline-sync');

const SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function pause() {
  let now = Date.now();
  let end = now + 3000;
  while (now < end) {
    now = Date.now();
  }
}

function getCard() {
  let randomCard = [];
  let randomValue = VALUES[Math.floor(Math.random() * VALUES.length)];
  let randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
  randomCard.push(randomValue, randomSuit);
  return randomCard;
}

function playersCards(playersHand) {

  let firstCard = getCard();
  let secondCard = getCard();
  if (secondCard.join(' ') === firstCard.join(' ')) {
    secondCard = getCard();
  }

  playersHand.push(firstCard, secondCard);
  return playersHand;
}
function displayPlayersCards(playersHand) {
  console.clear();

  prompt(`You have: `);
  playersHand.forEach(card => {
    console.log(`${card.join(' ')}`);
  });
}

function getScore(cards) {
  let totalScore = 0;
  let valueCard = 0;
  cards.forEach(card => {
    if (['J', 'Q', 'K'].includes(card[0])) {
      valueCard = 10;
    } else if (['A'].includes(card[0])) {
      valueCard = 11;
    } else {
      valueCard = Number(card[0]);
    }
    totalScore += valueCard;
    return totalScore;
  });

  cards.filter(el => el[0] === 'A').forEach(_ => {
    if (totalScore > 21) totalScore -= 10;
  });
  return totalScore;
}

function displayScore(getTotalScore, playersHand) {
  let currentScore = Number(getTotalScore(playersHand));
  prompt(`Your total is: ${currentScore}`);
}

function dealersCards(dealersHand) {

  let firstCard = getCard();
  let secondCard = getCard();

  if (secondCard.join(' ') === firstCard.join(' ')) {
    secondCard = getCard();
  }

  dealersHand.push(firstCard, secondCard);
  return dealersHand;
}

function displayDealersCards(dealersHand) {
  prompt(`Dealer has: ${dealersHand[0].join(' ')} and one unknown card`);
}

function hitOrStay(answer) {
  console.log('');
  while (true) {
    prompt(`Do you want to hit or stay? Enter 'h' or 's'`);
    answer = readline.question();
    if (answer === 'h' || answer === 's') {
      break;
    } else {
      prompt("That's not a valid entry");
    }
  }
  return answer;
}

function displayDealersScore(getDealersScore, dealersHand) {
  let currentdealerScore = Number(getDealersScore(dealersHand));
  prompt(`The Dealer's total is: ${currentdealerScore}`);
}

function displayDealersCardsFinal(dealersHand) {
  console.clear();

  prompt(`Dealer has: `);
  dealersHand.forEach(card => {
    console.log(`${card.join(' ')}`);
  });
}

function displayWinner(playersCards, dealersCards) {
  console.log('');
  if (getScore(playersCards) > 21) {
    prompt('Dealer wins');
  } else if (getScore(dealersCards) > 21) {
    prompt('Player wins');
  } else if (getScore(playersCards) === getScore(dealersCards)) {
    prompt("It'a tie!");
  } else if ((getScore(playersCards) > getScore(dealersCards))
            && (getScore(playersCards) <= 21)) {
    prompt('Player wins!');
  } else if ((getScore(dealersCards) <= 21)
            && (getScore(dealersCards) > getScore(playersCards))) {
    prompt("Dealer wins!");
  }
}
function playAgain() {
  let response;
  while (true) {
    prompt("Do you to play another game?: ('y' or 'n')");
    response = readline.question().toLowerCase();
    if (response === 'y' || response === 'n') break;
    prompt("Sorry that's not a valid response");
  }
  if (response !== 'y') {
    return false;
  }
  return null;
}

// main game

while (true) {
  console.clear();
  prompt("Welcome to Twenty One!");
  pause();
  let playersHand = [];
  let dealersHand = [];
  let answer = '';

  while (true) {
    playersCards(playersHand);
    displayPlayersCards(playersHand);
    getScore(playersHand);
    displayScore(getScore, playersHand);
    dealersCards(dealersHand);
    displayDealersCards(dealersHand);

    while (true) {

      answer = hitOrStay(answer);
      if (answer === 'h') {
        let nextCard = getCard();
        playersHand.forEach(card => {
          if (card.join(' ') === nextCard.join(' ')) {
            nextCard = getCard();
          }
        });
        playersHand.push(nextCard);
      } else if (answer === 's') {
        break;
      } else {
        prompt(`Thats not a valid answer`);
        pause();
      }
      displayPlayersCards(playersHand);
      displayScore(getScore, playersHand);
      if (getScore(playersHand) > 21) {
        prompt(`Youre busted`);
        pause();
        break;
      }
    }
    if (getScore(playersHand) > 21) break;

    displayDealersCardsFinal(dealersHand);
    getScore(dealersHand);
    displayDealersScore(getScore, dealersHand);

    while (true) {
      if (getScore(playersHand) > 21
          || getScore(dealersHand) > 21) break;

      if (getScore(dealersHand) < 17) {
        let nextDealerCard = getCard();
        dealersHand.forEach(card => {
          if (card.join() === nextDealerCard.join()) {
            nextDealerCard = getCard();
          }
        });
        dealersHand.push(nextDealerCard);
        pause();
      } else if (getScore(dealersHand) >= 17
                && getScore(dealersHand) <= 21) {
        prompt('Dealer stays');
        console.log('');
        pause();
        break;
      } else {
        prompt('Dealer is busted');
        console.log('');
        break;
      }
      displayDealersCardsFinal(dealersHand);
      getScore(dealersHand);
      displayDealersScore(getScore, dealersHand);
    }
    break;
  }
  while (true) {
    if (getScore(playersHand) > 21) {
      prompt("Dealer wins!");
      break;
    } else if (getScore(dealersHand) > 21) {
      prompt("Dealer busted!");
      prompt("Player wins!");
      break;
    }

    displayScore(getScore, playersHand);
    displayDealersScore(getScore, dealersHand);
    displayWinner(playersHand, dealersHand);
    break;
  }
  if (playAgain() === false) break;
}
console.log('');
prompt('Thanks for playing!');
console.log('');
