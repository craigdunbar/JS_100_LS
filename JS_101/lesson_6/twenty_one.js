const SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8',
                   '9', '10', 'J', 'Q', 'K'];

function getCard() {
  let randomCard = [];
  let randomValue = VALUES[Math.floor(Math.random() * VALUES.length)];
  let randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
    randomCard.push(randomValue, randomSuit)
  return randomCard;
}

function playersCards(getCard) {
  firstCard = getCard()
  secondCard = getCard()
  return [firstCard, secondCard];
}
function displayPlayersCards(playersCards) {
  console.log(`You have ${firstCard.join(' ')} and ${secondCard.join(' ')}`);
}

function getTotalScore(playersCards) {
  let totalScore = Number(firstCard[0]) + Number(secondCard[0]);
  return totalScore;
}

function displayScore(playersCards) {
  let currentScore = Number(getTotalScore(playersCards));
console.log(`You're total is: ${currentScore}`);
}

playersCards(getCard);
displayPlayersCards(playersCards);
getTotalScore(playersCards);
displayScore(getTotalScore);
