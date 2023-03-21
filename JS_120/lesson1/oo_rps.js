/*
Step 1: Write the description of the problem

In rps a player can choose one of 3 options either
rock, paper, or scissors
Their oponent has the same 3 choices.
The winner is determined by comparing the two choices.
Rock breaks scissors, scissors cut paper, paper covers rock.

Step 2 : Extract nouns and verbs
Nouns: player, move, rule
Verbs: choose, compare

Step 3: organize and associate nouns and verbs

Player 
  - choose
Move
Rule 

???
-compare

Outline the object factories

function createPlayer() {
  return {
    // possible state: player name?
    // possible state: players current move?

    choose() {
      // not yet implemented
    },
  };
}

function createMove() {
  return {
    // possible state: type of move (rock, paper, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}
// Not sure where compare goes yet so add it as an ordinary 
// function for now
let compare = function(move1, move2) {
  // not implemted yet
};

Orchestration engine
THe engine should have the procedural program flow

RPSGame.play();

const RPSGame = {
  play() {
    displayWelcomeMessage();
    humnanChooseMove();
    computerChooseMove();
    displayWinner();
    displayGoodbyeMessage();
  },
};
Since human and computer can be objects of the player type

const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(), 

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner(),
    displayGoodbyeMessage();
  },
}
*/

// Walk through: OO rock paper scissors

// COntinuing with the factory functions above
// Implement the methods we call from the RPSGame.play above

// displayWelcomeMessage needs to be a method attached to an object
// since it's a part of the main game it should be placed into the RPSGame object.
// likewise displayGoodbyeMessage 

// lets update the createPlayer function
// provide playerType as an argument to updated createPlayer factory function
// this property can now be used in the choose method
// see below changes in createPlayer

// function createPlayer(playerType) {
//   return {
//     // possible state: player name?
//     // possible state: player's current move?
//     playerType: playerType,

//     choose() {
//       if (this.isHuman()) {

//       } else {

//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }

// then write the code for the computer choice

// function createPlayer(playerType) {
//   return {
//     // possible state: player name?
//     // possible state: player's current move?
//     playerType: playerType,

//     choose() {
//       if (this.isHuman()) {
//         // TODO
//       } else {
//         const choices = ['rock', 'paper', 'scissors'];
//         let randomIndex = Math.floor(Math.random() * choices.length);
//         return choices[randomIndex];
//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }

// choose should change the state of player objects
// to do this add a move property to the player object and
// change the choose method

// function createPlayer(playerType) {
//   return {
//     // possible state: player name?
//     playerType: playerType,
//     move: null,

//     choose() {
//       if (this.isHuman()) {
//         // TODO
//       } else {
//         const choices = ['rock', 'paper', 'scissors'];
//         let randomIndex = Math.floor(Math.random() * choices.length);
//         this.move = choices[randomIndex];
//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }

// now get the human player move, using input from the user
// use readline-sync

// let readline = require('readline-sync');

// function createPlayer(playerType) {
//   return {
//     // possible state: player name?
//     playerType: playerType,
//     move: null,

//     choose() {
//       if (this.isHuman()) {
//         let choice;

//         while (true) {
//           console.log('Please choose rock, paper, or scissors: ');
//           choice = readline.question();
//           if (['rock', 'paper', 'scissors'].includes(choice)) break;
//           console.log('Sorry, invalid choice.');
//         }

//         this.move = choice;
//       } else {
//         const choices = ['rock', 'paper', 'scissors'];
//         let randomIndex = Math.floor(Math.random() * choices.length);
//         this.move = choices[randomIndex];
//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }

// const RPSGame = {
//   human: createPlayer('human'),
//   computer: createPlayer('computer'),

//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paprt, Scissors!')
//   }, 

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goiodbye!')
//   },
  
//   play() {
//     this.displayWelcomeMessage();
//     this.human.choose();
//     this.computer.choose();
//     displayWinner();
//     this.displayGoodbyeMessage();
//   },
// };

// RPSGame.play();

// now implement displayWinner() 
// choose stores the moves as a piece of state in the move property
// we can use this to access the human and computer moves
// first make displayWinner an object in the RPSGame

// const RPSGame = {
//   human: createPlayer('human'),
//   computer: createPlayer('computer'),

//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!')
//   }, 

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goiodbye!')
//   },
  
//   displayWinner() {
//     console.log(`You chose: ${this.human.move}`);
//     console.log(`The computer chose: ${this.computer.move}`);
//   },

//   play() {
//     this.displayWelcomeMessage();
//     this.human.choose();
//     this.computer.choose();
//     this.displayWinner();
//     this.displayGoodbyeMessage();
//   },
// };
// RPSGame.play();

// complete displayWinner()

// const RPSGame = {
//   human: createPlayer('human'),
//   computer: createPlayer('computer'),

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

//   play() {
//     this.displayWelcomeMessage();
//     this.human.choose();
//     this.computer.choose();
//     this.displayWinner();
//     this.displayGoodbyeMessage();
//   },
// };
// RPSGame.play();

// let's add a play again feature
// add a loop around the 3 main game steps and break out
// if playAgain returns a falsey value
// the playAgain method will be part of the RPSGame object

// const RPSGame = {
//   human: createPlayer('human'),
//   computer: createPlayer('computer'),

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

// we don't need to track the players name so we can remove it from the
// createPlayer fucntion.
// the complete program is now below:

let readline = require('readline-sync');

function createPlayer(playerType) {
  return {
    // possible state: player name?
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors: ');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
}

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

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
    // return answer.toLowerCase()[0] === 'y' ? true : false;
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

RPSGame.play();
