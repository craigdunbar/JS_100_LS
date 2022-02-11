Initialize deck
Deal cards to the player and the dealer
Player turn: hot or stay
  - repeat until bust or stay
If player bust, dealer wins.
Dealer turn: hit or stay
  - repeat until total >= 17
If dealer busts, player wins.
Compare cards and declare winner.

Initalize deck
What is the best data structure to contain the deck?
Two array's:
Suit array: ['Hearts', 'Spades', 'Diamonds', 'Clubs']
Value array: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

To generate a random card
- first get random value 
- then get random suit
- concat the suit and value
- display the combined suit and value

let suitArray = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
let valuesArray = ['A', '2', '3', '4', '5', '6', '7', '8',
                   '9', '10', 'J', 'Q', 'K'];

randomValue = valuesArray[Math.floor(Math.random() 
              * valuesArray.length)];
randomSuit = suitArray[Math.floor(Math.random() 
              * suitArray.length)];
randomCard = randomValue + ' ' + randomSuit;
console.log(randomCard);