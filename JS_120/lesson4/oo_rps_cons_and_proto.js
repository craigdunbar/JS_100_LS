// below is the factory_function vewrsion of the rps game

// const readline = require('readline-sync');

// function createPlayer() {
//   return {
//     move: null,
//   };
// }

// function createComputer() {
//   let playerObject = createPlayer();

//   let computerObject = {
//     choose() {
//       const choices = ['rock', 'paper', 'scissors'];
//       let randomIndex = Math.floor(Math.random() * choices.length);
//       this.move = choices[randomIndex];
//     },
//   };

//   return Object.assign(playerObject, computerObject);
// }

// function createHuman() {
//   let playerObject = createPlayer();
  
//   let humanObject = {
//     choose() {
//       let choice;

//       while (true) {
//         console.log('Please choose rock, paper, scissors:');
//         choice = readline.question();
//         if(['rock', 'paper', 'scissors'].includes(choice)) break;
//           console.log('Sorry, invalid choice.');
//       }

//       this.move = choice;
//     },
//   };

//   return Object.assign(playerObject, humanObject);
// }

// const RPSGame = {
//   human: createHuman(),
//   computer: createComputer(),

//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!')
//   }, 

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!')
//   },
  
//   displayWinner() {
//     let humanMove = this.human.move;
//     let computerMove = this.computer.move;

//     console.log(`You chose: ${this.human.move}`);
//     console.log(`The computer chose: ${this.computer.move}`);

//     if ((humanMove === 'rock' && computerMove === 'scissors') ||
//         (humanMove === 'paper' && computerMove === 'rock') ||
//         (humanMove === 'scissors' && computerMove === 'rock')) {
//           console.log('You win!');
//     } else if ((humanMove === 'rock' && computerMove === 'paper') ||
//               (humanMove === 'paper' && computerMove === 'scissors') ||
//               (humanMove === 'scissors' && computerMove === 'rock')) {
//                 console.log('Computer wins!')
//     } else {
//       console.log("It's a tie!")
//     }
//   },

//   playAgain() {
//     console.log('Would you like to play again? (y/n)');
//     let answer = readline.question();
//     // return answer.toLowerCase()[0] === 'y' ? true : false;
//     return answer.toLowerCase()[0] === 'y'
//   },

//   play() {
//     this.displayWelcomeMessage();
//     while (true) {
//       this.human.choose();
//       this.computer.choose();
//       this.displayWinner();
//       if (!this.playAgain()) break;
//     }

//     this.displayGoodbyeMessage();
//   },
// };

// RPSGame.play();

// lets convert this using constructors and prototypes:
// the steps are:
// Write a constructor function for every factory function
// Move the initalization code from the factory function into the constructor
// Move all the other methods from the factory fucntion into the constructors prototype
// Replace the factory function invocations with constructor calls

// we need to initalize the state of an object in its constructor and put the instance methods in the construstor prototype
// Here we have two properties human and computer
// we'll use the constructor to create and initalize these properties for each new object

// function RPSGame() {
//   this.human = createHuman();
//   this.computer = createComputer();
// }

// // next we move all the methods from the RPSGame object and add them to the constructors prototype:
// RPSGame.prototype = {
//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!')
//   }, 

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!')
//   },
  
//   displayWinner() {
//     let humanMove = this.human.move;
//     let computerMove = this.computer.move;

//     console.log(`You chose: ${this.human.move}`);
//     console.log(`The computer chose: ${this.computer.move}`);

//     if ((humanMove === 'rock' && computerMove === 'scissors') ||
//         (humanMove === 'paper' && computerMove === 'rock') ||
//         (humanMove === 'scissors' && computerMove === 'rock')) {
//           console.log('You win!');
//     } else if ((humanMove === 'rock' && computerMove === 'paper') ||
//               (humanMove === 'paper' && computerMove === 'scissors') ||
//               (humanMove === 'scissors' && computerMove === 'rock')) {
//                 console.log('Computer wins!')
//     } else {
//       console.log("It's a tie!")
//     }
//   },

//   playAgain() {
//     console.log('Would you like to play again? (y/n)');
//     let answer = readline.question();
//     // return answer.toLowerCase()[0] === 'y' ? true : false;
//     return answer.toLowerCase()[0] === 'y'
//   },

//   play() {
//     this.displayWelcomeMessage();
//     while (true) {
//       this.human.choose();
//       this.computer.choose();
//       this.displayWinner();
//       if (!this.playAgain()) break;
//     }

//     this.displayGoodbyeMessage();
//   },
// };
// // make sure the prototype points back to the constructor:
// RPSGame.prototype.constructor = RPSGame;

// to start playing the game with the new RPSGame constructor, we need to instantiate a game object and call it's play method
// let game  = new RPSGame();
// game.play();

// the RPSGame is now fully converted

// Converting the Player Creation Factories
// let's convert the createPlayer function to a constructor
// function Player() {
//   this.move = null;
// }

// next convert the createHuman factory function. createHuman reuses the createPlayer factory
// so that means the Human constructor must inherit from Player. We do this by usiing call to invoke
// the Player's constructor with the Human object as context

// function Human() {
//   Player.call(this);
// }

// Human.prototype.choose = function () {
//   let choice;

//   while (true) {
//     console.log('Please choose rock, paper, or scissors:');
//     choice = readline.question();
//     if (['rock', 'paper', 'scissors'].includes(choice)) break;
//     console.log('Sorry, invalid choice.')
//   }

//   this.move = choice;
// };
//Player.prototype doesn't have any methods so Human.prototype doesn't need to inherit from it

// Now let's change the createComputer factory function
// function Computer() {
//   Player.call(this);
// }
// Computer.prototype.choose = function() {
//   const choices = ['rock', 'paper', 'scissors'];
//   let randomIndex = Math.floor(Math.random() * choices.length);
//   this.move = choices[randomIndex];
// }
// note if methods are added to Player.prototype then Human.prototype and Computer.prototype
// will have to inherit from it using Object.create() and remember to change the constructor property
// to refer back to either Human or Computer

// the last thing to do now is to change the RPSGame constructor to use the Human and Computer 
// constructors instead of the factory functions

// function RPSGame() {
//   this.human = new Human();
//   this.computer = new Computer();
// }

// the copmplete code is now:
const readline = require('readline-sync');

function Player() {
  this.move = null;
}

function Computer() {
  Player.call(this);
}

Computer.prototype.choose = function() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  this.move = choices[randomIndex];
}

function Human() {
  Player.call(this);
}

Human.prototype.choose = function () {
  let choice;

  while (true) {
    console.log('Please choose rock, paper, or scissors:');
    choice = readline.question();
    if (['rock', 'paper', 'scissors'].includes(choice)) break;
    console.log('Sorry, invalid choice.')
  }

  this.move = choice;
};

function RPSGame() {
  this.human = new Human();
  this.computer = new Computer();
}

RPSGame.prototype = {
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!')
  }, 

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!')
  },
  
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'rock')) {
          console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
              (humanMove === 'paper' && computerMove === 'scissors') ||
              (humanMove === 'scissors' && computerMove === 'rock')) {
                console.log('Computer wins!')
    } else {
      console.log("It's a tie!")
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y'
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};
// make sure the prototype points back to the constructor:
RPSGame.prototype.constructor = RPSGame;

let game  = new RPSGame();
game.play();