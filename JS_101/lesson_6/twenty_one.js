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
  firstCard = getCard();
  secondCard = getCard();
  thirdCard = getCard();
  console.log([firstCard, secondCard, thirdCard]);
  return [firstCard, secondCard, thirdCard];
}
function displayPlayersCards(playersCards) {
  console.log(`You have ${firstCard.join(' ')} and ${secondCard.join(' ')} and ${thirdCard.join(' ')}`);
}

function getTotalScore(playersCards) {

  if (['J', 'Q', 'K'].includes(firstCard[0])) {
    valueFirstCard = 10;
  } else if (['A'].includes(firstCard[0])) {
    valueFirstCard = 11
  } else {
    valueFirstCard = Number(firstCard[0]);
  }

  if (['J', 'Q', 'K'].includes(secondCard[0])) {
    valueSecondCard = 10;
  } else if ((['A'].includes(secondCard[0]))) {
    valueSecondCard = 11;
  } else {
    valueSecondCard = Number(secondCard[0]);
  }

  if (['J', 'Q', 'K'].includes(thirdCard[0])) {
    valueThirdCard = 10;
  } else if ((['A'].includes(thirdCard[0]))) {
    valueThirdCard = 11;
  } else {
    valueThirdCard = Number(thirdCard[0]);
  }
  let totalScore = valueFirstCard + valueSecondCard + valueThirdCard;
  if( totalScore > 21 && ([firstCard, secondCard, thirdCard].filter(el => el[0] === 'A').length > 0)) { 
    totalScore -= 10;
  }
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
