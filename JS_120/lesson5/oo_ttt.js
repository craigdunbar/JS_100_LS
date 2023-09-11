/*
OO Tic Tac Toe overview

We'll apply the OO steps we learned earlier
1. Write a description of the problem
2. Extract the significant nouns and verbs from the description.
3. Organize and associate the verbs with the nouns

Description:
Let's begin by writing a textual description of the game

TTT is a 2 player board game
The board is a 3x3 grid
Players take turns marking a square with a marker that identifies the player
Traditionally the player to go first uses an X to mark the square and the sescond player uses an O
The first player to mark 3 squares in a row wins
A row can be horizontal, vertical or diagonal
There is one human player and one computer player
The human player always places first in the initial version of our game, you can change it later

Identify the Nouns and Verbs:
Nouns: game, board, square, grid, marker, row, player, human, computer
Verbs: play, mark, move, place

Board and grid are the same, as are mark, move and place so we will use board and mark only

Organise:
Into significant nouns and verbs in a way that shows some of the most likely relationships

Game(n)
Board(n)
Row(n)
Square(n)
Marker(n)
Player(n)
  - Mark(v)
  - Play(v)
  - Human(n)
  - Computer(n)
Note that Human and Computer are beneath Player to indicate they are subclasses of Player.

The list above gives a general idea of the types of objects(nouns) that we will need 
and the behaviours they should implement(verbs) but this list will be fluid through the 
coding exercise.

Scaffolding:
Now that we have the list of nouns and verbs lets build some skeletal classes or 'scaffolding'
We'll need a constructor method in each class and we shopuld consider some possible states 
for each classes objects.
*/

// class Board {
//   constructor() {
//     // STUB - we'll talk about this later
//     // We need a way to model the 3x3 grid. Perhaps 'squares'?
//     // What data structure should we use? Array, object, something else?
//     // What shpould the data structure store? Strings? Numbers?
//   }
// }

// class Square {
//   constructor() {
//     // STUB
//     // We need some way to keep track of this squares marker
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Marker {
//   constructor() {
//     // STUB
//     // A marker is something that represents a players piece on the board
//   }
// }

// class Player {
//   constructor() {
//     // STUB
//     // maybe a 'marker' to keep track of this player's symbol ie X or O
//   }

//   mark() {
//     // STUB 
//     // We need a way to mark the board with this player's marker
//     // How do we access the board?
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class Computer extends Player {
  // constructor() {
    // STUB
  // }
// }

// class TTTGame {
//   constructor() {
//     // STUB
//     // Need a board and two players
//   }

//   play() {
//     // STUB
//     // orchestrate game play
//   }
// }

// let game = new TTTGame();
// game.play();

/* 
Do we really need the Square and Player classes? Do we need the Human and Computer classes
that extend the Player class? We don't know yet?
THe TTTGame object is the orchestration engine ( the class that controls the flow of the
game) and is usually the last class in the file and is given a unique name hence TTTGame
rather the simply Game.
The last two lines start the game by creating a new TTTGame object, then calling the play() method
*/

/*
Orchestration engine

Let's sketch out the behaviour of the play mathod and the TTTGame class
We need to start thinking about the algorithm that play should use.
We will use a 'spike', which is some exploratory code to help you begin sketching out your programs
structure and design. They look a bit like pseudocode but more closley resemble the final code.
Below is the spike for the play method
*/
// class TTTGame {
//   // omitted code

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.displayBoard();

//       this.firstPlayerMoves();
//       if (this.gameOver()) break;

//       this.secondPlayerMoves();
//       if (this.gameOver()) break;
//       break // exectues loop only once for now (added to stop infinite loop as gameOver() always returns false)
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     // STUB
//     // show welcome message
//   }

//   displayGoodbyeMessage() {
//     // STUB
//     // show a goodbye message
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   displayBoard() {
//     // STUB
//     // display the board, including its current state
//   }

//   firstPlayerMoves() {
//     // STUB
//     // the first player makes a move
//   }

//   secondPlayerMoves() {
//     // STUB
//     // the second player makes a move
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// Lets add the welcome and goodbye messages to the play() spike
// class TTTGame {
//   // omitted code

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.displayBoard();

//       this.firstPlayerMoves();
//       if (this.gameOver()) break;

//       this.secondPlayerMoves();
//       if (this.gameOver()) break;
//       break // exectues loop only once for now (added to stop infinite loop as gameOver() always returns false)
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   displayBoard() {
//     // STUB
//     // display the board, including its current state
//   }

//   firstPlayerMoves() {
//     // STUB
//     // the first player makes a move
//   }

//   secondPlayerMoves() {
//     // STUB
//     // the second player makes a move
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// Part 2

// So the code so far is:

// class Board {
//   constructor() {
//     // STUB - we'll talk about this later
//     // We need a way to model the 3x3 grid. Perhaps 'squares'?
//     // What data structure should we use? Array, object, something else?
//     // What shpould the data structure store? Strings? Numbers?
//   }
// }

// class Square {
//   constructor() {
//     // STUB
//     // We need some way to keep track of this squares marker
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Marker {
//   constructor() {
//     // STUB
//     // A marker is something that represents a players piece on the board
//   }
// }

// class Player {
//   constructor() {
//     // STUB
//     // maybe a 'marker' to keep track of this player's symbol ie X or O
//   }

//   mark() {
//     // STUB 
//     // We need a way to mark the board with this player's marker
//     // How do we access the board?
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class Computer extends Player {
  // constructor() {
    // STUB
  // }
// }

// class TTTGame {
 // omitted code
  
  //   play() {
  //     // SPIKE 
  //     this.displayWelcomeMessage();
  
  //     while(true) {
  //       this.displayBoard();
  
  //       this.firstPlayerMoves();
  //       if (this.gameOver()) break;
  
  //       this.secondPlayerMoves();
  //       if (this.gameOver()) break;
  //       break // exectues loop only once for now (added to stop infinite loop as gameOver() always returns false)
  //     }
  
  //     this.displayResults();
  //     this.displayGoodbyeMessage();
  //   }
  
  //   displayWelcomeMessage() {
  //     console.log('Welcome to Tic Tac Toe!')
  //   }
  
  //   displayGoodbyeMessage() {
  //     console.log('Thanks for playing! Goodbye!')
  //   }
  
  //   displayResults() {
  //     // STUB
  //     // show the results of this game (win, lose, tie)
  //   }
  
  //   displayBoard() {
  //     // STUB
  //     // display the board, including its current state
  //   }
  
  //   firstPlayerMoves() {
  //     // STUB
  //     // the first player makes a move
  //   }
  
  //   secondPlayerMoves() {
  //     // STUB
  //     // the second player makes a move
  //   }
  
  //   gameOver() {
  //     // STUB
  //     return false;
  //   }
  // }
  
  // let game = new TTTGame();
  // game.play();
  
// as I progress through the changes in the code I will update the code and show it below:

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }
// }
// // class Board {
// //   constructor() {
// //     this.squares = {
// //     '1': 'X',
// //     '2': ' ',
// //     '3': ' ',
// //     '4': ' ',
// //     '5': 'O',
// //     '6': ' ',
// //     '7': ' ' ,
// //     '8': ' ',
// //     '9': ' ',
// //     }
// //   }
// //   display() {
// //     console.log('');
// //     console.log('     |     |');
// //     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
// //     console.log('     |     |');
// //     console.log('-----+-----+-----');
// //     console.log('     |     |');
// //     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
// //     console.log('     |     |');
// //     console.log('-----+-----+-----');
// //     console.log('     |     |');
// //     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
// //     console.log('     |     |');
// //     console.log('');
// //   }
// // }

// // class Square {
// //   constructor() {
// //     // STUB
// //     // We need some way to keep track of this squares marker
// //   }
// // }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Marker {
//   constructor() {
//     // STUB
//     // A marker is something that represents a players piece on the board
//   }
// }

// class Player {
//   constructor() {
//     // STUB
//     // maybe a 'marker' to keep track of this player's symbol ie X or O
//   }

//   mark() {
//     // STUB 
//     // We need a way to mark the board with this player's marker
//     // How do we access the board?
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class Computer extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.firstPlayerMoves();
//       if (this.gameOver()) break;

//       this.secondPlayerMoves();
//       if (this.gameOver()) break;
//       break // exectues loop only once for now (added to stop infinite loop as gameOver() always returns false)
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   // displayBoard() { // <= moved to the Board class now
//   //   console.log('');
//   //   console.log('     |     |');
//   //   console.log('  O  |     |  O  ');
//   //   console.log('     |     |');
//   //   console.log('-----+-----+-----');
//   //   console.log('     |     |');
//   //   console.log('     |  X  |');
//   //   console.log('     |     |');
//   //   console.log('-----+-----+-----');
//   //   console.log('     |     |');
//   //   console.log('  X  |     |');
//   //   console.log('     |     |');
//   //   console.log('');
//   // }

//   firstPlayerMoves() {
//     // STUB
//     // the first player makes a move
//   }

//   secondPlayerMoves() {
//     // STUB
//     // the second player makes a move
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// Display the board

// We can use console.log invocations to display the 3x3 board
// so displayBoard() within the class TTTGame object becomes:
// displayBoard() {
//   console.log('');
//   console.log('     |     |     ');
//   console.log('  O  |     |  O  ');
//   console.log('     |     |     ');
//   console.log('-----+-----+-----');
//   console.log('     |     |     ');
//   console.log('     |  X  |     ');
//   console.log('     |     |     ');
//   console.log('-----+-----+-----');
//   console.log('     |     |     ');
//   console.log('  X  |     |     ');
//   console.log('     |     |     ');
//   console.log('');
// }
// we will add that to the code above, but with trailing spaces at the end of the lines removed.
// displayBoard() should be in the Board class so that the board object is able to keep track of
// it's state and to render itself.
// TO do this the TTTGame needs a board object that it can use.
// therefore we add this.board = new Board() to the TTTGame constructor. 
// now displayBoard() can be moved to the Board class and use the board property (this.board) 
// of the TTTGame to access it.
// the name of the method is changed to display() as displayBoard is now redundant as
// this.board.display will always use a board object.
// so far this only displays the initial board, so we need a way to display the game in progress

// The Board's state
// The board object primarily maintains and represents the state of the board, so it makes sense to 
// initalise that state in the constructor. But how do we represent the board?
// Using an array or a matrix is too complicated (see LS notes) so we can use an object 
// with 9 properties named '1', '2', '3' etc.
// we will add a squares object to the constructor:
//this.squares = {
  // '1': 'X',
  // '2': ' ',
  // '3': ' ',
  // '4': ' ',
  // '5': 'O',
  // '6': ' ',
  // '7': ' ' ,
  // '8': ' ',
  // '9': ' ',
// }
// this is added to the Board class constructor in the code above 
// we can now change the display method to use this.squares to retrieve the marker for each square
// for example:
// console.log('   ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  ')
// we'll add these changes to the code.

// The Square Class

// Currently the board class uses strings to represent the state of each of the 9 squares. 
// The scaffolding code from earlier suggests that we use a Square class instead.
// What are the states and behaviours that we might need in a Square class?

// State: The current marker: either X, O or ' '.
// Behavior: create new square
// Behavior: retrieve the current marker from the square
// Behavior: test whether the square is unmarked

// Since there's not a lot to the Square class we could write the Board class without it
// but we will do it for practice.
// The Square class is moved to the top of the file to ensure that Board's constructor knows 
// about the Square class. If we left the Square class where it was then calls to square would 
// raise an error. So  the code will now be:

// class Square {
//   constructor() {
//     this.marker = marker;
//   }
// }

// class Board {
//   constructor() {
//     this.square = {
//       '1': new Square(' '),
//       '2': new Square(' '),
//       '3': new Square(' '),
//       '4': new Square(' '),
//       '5': new Square(' '),
//       '6': new Square(' '),
//       '7': new Square(' '),
//       '8': new Square(' '),
//       '9': new Square(' '),
//     };
//   }
// }

// When we make the changes above to the code the will run and gives us the output below..

// Welcome to Tic Tac Toe!

//      |     |
//   [object Object]  |  [object Object]  |  [object Object]  
//      |     |
// -----+-----+-----
//      |     |
//   [object Object]  |  [object Object]  |  [object Object]  
//      |     |
// -----+-----+-----
//      |     |
//   [object Object]  |  [object Object]  |  [object Object]  
//      |     |

// Thanks for playing! Goodbye!

// This clearly isn't right and it's due to the fact that new Square returns a Square object 
//not a string.
// How do we fix that?
// We can utilise the Object.prototype.toString method. Since every object inherits from 
// Object prototype they all have access to this method. 
// JS uses toString to implicitly convery something to a string which in this case returns
// [object Object]. We can overide toString in a class by defining our own toString that JS 
// should call instead. In this case we will use:

// class Square {
//   toString() {
//     return this.marker;
//   }
// }

// now the board will display correctly.

// Refactoring: Eliminate the magic constant
// For readability, let's create a symbolic constant for the 'magic constant' we're using
// to represent unused squares, currently a space character.
// We'll also add symbolic constants for the X and O markers.
// The code will be:
// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
// }
// The static keyword defines a property that belongs to the class not the individual objects 
// created from the class.
// It's useful for defining class constants as can be done with other languages.
// Note we must quantify the constant name with the class name eg Square.UNUSED_SQUARE,
// even if we reference it from somewhere in the class.

// Refactor: DRY Board initialzation
// The initalization of this.square in the board object is repetiative.
// Let's DRY up the code (Don't Repeat Yourself) with a loop
// The old code:
// class Board {
//   constructor() {
//     this.square = {
//       '1': new Square(' '),
//       '2': new Square(' '),
//       '3': new Square(' '),
//       '4': new Square(' '),
//       '5': new Square(' '),
//       '6': new Square(' '),
//       '7': new Square(' '),
//       '8': new Square(' '),
//       '9': new Square(' '),
//     };
//   }
// }

// becomes:
// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }
// }

// Part 3

// Here is the current code:

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Marker {
//   constructor() {
//     // STUB
//     // A marker is something that represents a players piece on the board
//   }
// }

// class Player {
//   constructor() {
//     // STUB
//     // maybe a 'marker' to keep track of this player's symbol ie X or O
//   }

//   mark() {
//     // STUB 
//     // We need a way to mark the board with this player's marker
//     // How do we access the board?
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class Computer extends Player {
//   constructor() {
//     // STUB
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.firstPlayerMoves();
//       if (this.gameOver()) break;

//       this.secondPlayerMoves();
//       if (this.gameOver()) break;
//       break // exectues loop only once for now 
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   firstPlayerMoves() {
//     // STUB
//     // the first player makes a move
//   }

//   secondPlayerMoves() {
//     // STUB
//     // the second player makes a move
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// I will follow the changes in the LS course and the updated code will be below:

// let readline = require('readline-sync')

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }

//   setMarker(marker) {
//     this.marker = marker;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }

//   markSquareAt(key, marker) {
//     this.squares[key].setMarker(marker);
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Player {
//   constructor(marker) {
//     this.marker = marker;
//   }

//   getMarker() {
//     return this.marker;
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     super(Square.HUMAN_MARKER);
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super(Square.COMPUTER_MARKER);
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//     this.human = new Human();
//     this.computer = new Computer();
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.humanMoves();
//       this.board.display() // so we can see human's move
//       if (this.gameOver()) break;

//       this.computerMoves();
//       this.board.display() // so we can see the computers moves
//       if (this.gameOver()) break;
//       break // exectues loop only once for now 
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   humanMoves() {
//     let choice;

//     while (true) {
//       choice = readline.question('Choose a square between 1 and 9: ');

//       let integerValue = parseInt(choice, 10);
//       if (integerValue >= 1 && integerValue <= 9) {
//         break;
//       }

//       console.log("Sorry, that's not a valid choice.")
//       console.log("");
//     }

//     this.board.markSquareAt(choice, this.human.getMarker());
//   }

//   computerMoves() {
//   let choice = Math.floor((9 * Math.random()) + 1);
//   this.board.markSquareAt(choice, this.computer.getMarker())
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// Now we need to create the players, a human and a computer.
// we also need to implement the code that allows them to make a move
// We do turn taking and valid-move detection in the next assignment

// Creating the Players

// Let's assume for now that the human player always plays first, and the computer second.
// We will update the TTTGame to make this clearer.
// so within the TTTGame the play() method becomes:
// class TTTGame {
//   play() {
//     this.displayWelcomeMessage();

//     while (true) {
//       this.board.display();

//       this.humanMoves();
//       if (this.gameOver()) break;

//       this.computerMoves();
//       if (this.gameOver()) break;
//       break; // execute loop once for now
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   humanMoves() { // was firstPlayerMoves
//     console.log('human moves')
//   }

//   computerMoves() { // was secondPlayerMoves
//     console.log('computer moves')
//   }
// }

// this is added to the code above

// Since the human and computer are both players in the game we should create a couple
// of Player objects (human and computer) when we start the game:

// class Human extends Player {
//   constructor() {
//     super()
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super()
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board();
//     this.human = new Human();
//     this.computer = new Computer();
//   }
// }

// this is added to the code above

// Get the Human's move
// Let's write the code to let the human pick a square, a value between 1 - 9.
// The code should display a prompt, read and validate the input, then mark the selected square.
// If the selection is invalid, display a message and select agian.

// let readline = require('readline-sync'); // this will be the first line in the code file

// class TTTGame {
  // humanMoves() {
  //   let choice;

  //   while (true) {
  //     choice = readline.question('Choose a square between 1 and 9: ');

  //     let integerValue = parseInt(choice, 10);
  //     if (integerValue >= 1 && integerValue <= 9) {
  //       break;
  //     }

  //     console.log("Sorry, that's not a valid choice.")
  //     console.log("");
  //   }
  //   // mark the selected square with human marker...
  // }
// }

// Placing the players move on the board
// Since TTTGame has the Board object we will use this to call the method that will 
// mark the selected square with the human marker.

// class Square {
//   setMarker(marker) {
//     this.marker = marker;
//   }
// }

// class Board {
//   markSquareAt(key, marker) {
//     this.square[key].setMarker(marker);
//   }
// }

// class TTTGame {
//   humanMoves() {
//     // omitted code

//     this.board.markSquareAt(choice, Square.HUMAN_MARKER)
//   }
// }

// Definining a Player's Marker
// In the humanMoves() method we pass the human player's marker 'X' to the board object.
// We will also need to pass the computer marker to markSquareAt() so we should let each player
// object define it's marker
// So the Player class will change to:
// class Player {
//   constructor(marker) {
//     this.marker = marker;
//   }

//   getMarker() {
//     return this.marker;
//   }

//   // mark() // this will be deleted since "Board" provides 'markSqureAt' now
// }

// the human aand computer classes will become:

// class Human extends Player {
//   constructor() {
//     super(Square.HUMAN_MARKER);
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super(Square.COMPUTER_MARKER);
//   }
// }

// and the TTTGame humanMoves() method will now use:

// this.board.markSquareAt(choice, this.human.getMarker());

// The computer's move

// We will make the computer pick a square at random using Math.random
// The computerMoves() method inside the TTTGame class will change to..

// computerMoves() {
//   let choice = Math.floor((9 * Math.random()) + 1);
//   this.board.markSquareAt(choice, this.computer.getMarker())
// }

// we will also add a third call to this.board.display so we can see the computers moves.
// currently this method will overwrite a human move rather than recognise that it's taken already

// Remove the marker class

// Since we are using strings to represent the markers the marker class is not needed.
// if we used more complex images etc. then it would make sense to keep it.
// Delete the marker class

// PART 4

// So far our players can only make one move and there's no validation 
// Here' how the code looks..

// let readline = require('readline-sync')

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }

//   setMarker(marker) {
//     this.marker = marker;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }

//   markSquareAt(key, marker) {
//     this.squares[key].setMarker(marker);
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Player {
//   constructor(marker) {
//     this.marker = marker;
//   }

//   getMarker() {
//     return this.marker;
//   }

//   play() {
//   // STUB 
//   // We need a way for each player to play the game.
//   // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//     super(Square.HUMAN_MARKER);
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super(Square.COMPUTER_MARKER);
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//     this.human = new Human();
//     this.computer = new Computer();
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.humanMoves();
//       this.board.display() // so we can see human's move
//       if (this.gameOver()) break;

//       this.computerMoves();
//       this.board.display() // so we can see the computers moves
//       if (this.gameOver()) break;
//       break // exectues loop only once for now 
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   humanMoves() {
//     let choice;

//     while (true) {
//       choice = readline.question('Choose a square between 1 and 9: ');

//       let integerValue = parseInt(choice, 10);
//       if (integerValue >= 1 && integerValue <= 9) {
//         break;
//       }

//       console.log("Sorry, that's not a valid choice.")
//       console.log("");
//     }

//     this.board.markSquareAt(choice, this.human.getMarker());
//   }

//   computerMoves() {
//     let choice = Math.floor((9 * Math.random()) + 1);
//     this.board.markSquareAt(choice, this.computer.getMarker())
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();


// WE will make all the new changes in the code below:

// let readline = require('readline-sync')

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }

//   setMarker(marker) {
//     this.marker = marker;
//   }

//   isUnused() {
//     return this.marker === Square.UNUSED_SQUARE;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }  
//     unusedSquares() {
//       let keys = Object.keys(this.squares);
//       return keys.filter(key => this.squares[key].isUnused());
//     }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }

//   markSquareAt(key, marker) {
//     this.squares[key].setMarker(marker);
//   }

//    unusedSquare() {
    // let keys = Object.keys(this.squares);
    // return keys.filter(key => this.squares[key].isUnused())
    // }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Player {
//   constructor(marker) {
//     this.marker = marker;
//   }

//   getMarker() {
//     return this.marker;
//   }
// }

// class Human extends Player {
//   constructor() {
//     super(Square.HUMAN_MARKER);
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super(Square.COMPUTER_MARKER);
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//     this.human = new Human();
//     this.computer = new Computer();
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.humanMoves();
//       if (this.gameOver()) break;

//       this.computerMoves();
//       if (this.gameOver()) break;
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   humanMoves() {
//     let choice;

//     while (true) {
//       let validChoices = this.board.unusedSquares();
//       const prompt = `Choose a square (${validChoices.join(', ')}): `;
//       choice = readline.question(prompt);

//       let integerValue = parseInt(choice, 10);
//       if (validChoices.includes(choice)) break;

//       console.log("Sorry, that's not a valid choice.")
//       console.log("");
//     }

//     this.board.markSquareAt(choice, this.human.getMarker());
//   }

//   computerMoves() {
//     let validChoices = this.board.unusedSquares();
//     let choice;

//     do {
//       choice = Math.floor((9 * Math.random()) + 1).toString();
//     } while (!validChoices.includes(choice));
  
//     this.board.markSquareAt(choice, this.computer.getMarker())
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// Taking Turns

// THe human and computer should take turns playing until the game is over.
// We will start by removing the break from the loop in the play() method within the TTTGame class.
// we will also remove the calls to this.board.display so it only shows for the human move.

// If we run the code now there is no end to the game and the square can be overwritten.

// Validating moves

// We want the prmopt to show only the unused squares and only accept those numbers
// We will build an unusedSquares method on the Board class that returns an array of the unused
// squares, the array should contain the keys associated with the unused squares,
// not square objects
// The Square class and the Board class will change as follows:

// class Square {
//   isUnused() {
//     return this.marker === Square.UNUSED_SQUARE;
//   }
// }

// class Board {
//   unusedSquares() {
//     let keys = Object.keys(this.square);
//     return keys.filter(key => this.squares[key].isUnused());
//   }
// };

// We can use the value of unusedSquares() to construct the prompt:
// the while loop inside the humanMoves() method of the TTTGame class becomes:

// while(true) {
  // let validChoices = this.board.unusedSquares();
  // const prompt = `Choose a square (${validChoices.join(', ')}): `;
  // choice = readline.question(prompt);
// }

// we can also use same array to determine if the human choice is valid:
// instead of the integer check we can use:

// if (validChoices.includes(choice)) break;

// Finally unusedSquares can be used to validate the computer choice:

// computerMoves() {
//   let choice = Math.floor((9 * Math.random()) + 1);
//   this.board.markSquareAt(choice, this.computer.getMarker())
// }
// becomes

// computerMoves() {
//   let validChoices = this.board.unusedSquares();
//   let choice;
//   do {
//     choice = Math.floor((9 * Math.random()) + 1).toString();
//   } while (!validChoices.includes(choice));

//   this.board.markSquareAt(choice, this.computer.getMarker())
// }

// The game now proceeds as planned but after the last computer move it enters an infinite loop

// Remove play() method from Player class as it's clearly not being used.

// Part 5

// All that's left now is to determine whether the game is finished, and who won.
// here's the code so far:

// let readline = require('readline-sync')

// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';

//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//   toString() {
//     return this.marker;
//   }

//   setMarker(marker) {
//     this.marker = marker;
//   }

//   isUnused() {
//     return this.marker === Square.UNUSED_SQUARE;
//   }
// }

// class Board {
//   constructor() {
//     this.squares = {};
//     for (let counter = 1; counter <=9; ++counter) {
//       this.squares[String(counter)] = new Square();
//     }
//   }  
//     unusedSquares() {
//       let keys = Object.keys(this.squares);
//       return keys.filter(key => this.squares[key].isUnused());
//     }

//   display() {
//     console.log('');
//     console.log('     |     |');
//     console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
//     console.log('     |     |');
//     console.log('-----+-----+-----');
//     console.log('     |     |');
//     console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
//     console.log('     |     |');
//     console.log('');
//   }

//   markSquareAt(key, marker) {
//     this.squares[key].setMarker(marker);
//   }

//   unusedSquare() {
//     let keys = Object.keys(this.squares);
//     return keys.filter(key => this.squares[key].isUnused())
//   }
// }

// class Row {
//   constructor() {
//     // STUB
//     // We need a way to identify a row of 3 squares
//   }
// }

// class Player {
//   constructor(marker) {
//     this.marker = marker;
//   }

//   getMarker() {
//     return this.marker;
//   }
// }

// class Human extends Player {
//   constructor() {
//     super(Square.HUMAN_MARKER);
//   }
// }

// class Computer extends Player {
//   constructor() {
//     super(Square.COMPUTER_MARKER);
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board()
//     this.human = new Human();
//     this.computer = new Computer();
//   } 

//   play() {
//     // SPIKE 
//     this.displayWelcomeMessage();

//     while(true) {
//       this.board.display();

//       this.humanMoves();
//       if (this.gameOver()) break;

//       this.computerMoves();
//       if (this.gameOver()) break;
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log('Welcome to Tic Tac Toe!')
//   }

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing! Goodbye!')
//   }

//   displayResults() {
//     // STUB
//     // show the results of this game (win, lose, tie)
//   }

//   humanMoves() {
//     let choice;

//     while (true) {
//       let validChoices = this.board.unusedSquares();
//       const prompt = `Choose a square (${validChoices.join(', ')}): `;
//       choice = readline.question(prompt);

//       if (validChoices.includes(choice)) break;

//       console.log("Sorry, that's not a valid choice.")
//       console.log("");
//     }

//     this.board.markSquareAt(choice, this.human.getMarker());
//   }

//   computerMoves() {
//     let validChoices = this.board.unusedSquares();
//     let choice;

//     do {
//       choice = Math.floor((9 * Math.random()) + 1).toString();
//     } while (!validChoices.includes(choice));
  
//     this.board.markSquareAt(choice, this.computer.getMarker())
//   }

//   gameOver() {
//     // STUB
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// Wwe will make changes to the code below:

let readline = require('readline-sync')

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <=9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }  
  displayWithClear() {
    console.clear();
    console.log('');
    console.log('');
    this.display();
  }

  display() {
    console.log('');
    console.log('     |     |');
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}  `)
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}  `)
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}  `)
    console.log('     |     |');
    console.log('');
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused())
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {

  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];

  constructor() {
    this.board = new Board()
    this.human = new Human();
    this.computer = new Computer();
  } 

  play() {
    // SPIKE 
    this.displayWelcomeMessage();

    this.board.display()

    while(true) {
      // this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear()
    }
    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe!')
    console.log('');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing! Goodbye!')
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congrats!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! Take that human!");
    } else {
      console.log("It's a tie")
    }
  }
  
    isWinner(player) {
      return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
        return this.board.countMarkersFor(player, row) === 3;
      });
    }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(', ')}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.")
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));
  
    this.board.markSquareAt(choice, this.computer.getMarker())
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();

// As it stands the code enters an infinite loop when the board is full. The loop occurs in 
// the computerMoves() method in the TTTGame class when there's a lack of valid moves on a full
// board. The root cause is the fact that we shouldn't call computerMoves() at all when the board 
// is full. It's one of two conditions we must check for to determine when the game is over. 
// The other occurs when one player on the places a winning marker.
// Let's start with the game over functionality. 

// The class TTTGame will now include a gameOver() method that checks for both game over 
//conditions. We'll make each a seperate method

// class TTTGame {
//   gameOver() {
//     return this.boardIsFull() || this.someoneWon();
//   }

//   boardIsFull() {
//     // STUB
//     return false;
//   }

//   someoneWon() {
//     // STUB
//     return false;
//   }
// }

// NOte that we don't care yet about who won; all we need to know right now is that someone won. 
// We also don't need to distinguish between a full-board tie and a full board win, so the order 
// in which we call the methods isn't important.

// Is the board full?
// unusedSquares() in the Board class returns an array that contains the keys of all remaining
// unused squares. So all we have to do is check whether the return value is an empty array.
// adding the code below will end the game when the board is full
// class TTTGame {
//   boardIsFull() {
//     let unusedSquares = this.board.unusedSquares();
//     return unusedSquares.length === 0;
//   }
// }

// Since the board has all the info needed to determine if the board is full, we will move 
// boardIsFull() to the Board class instead of the TTTGame class.

// class Board {
//   isFull() {
//     return this.unusedSquares().length === 0;
//   }
// }

// Did someone win the game?
// the board has all the info it needs to determine if there is a winner, it needs
// to detect three sqares in a row.
// HOwever the board is just a 3x3 grid and is not specific to TTT so the best place to 
// determine the winner is with the rules of the game in the TTTGame class.
// Let's make a nested array with all the possible winning combinations in the TTTGame

// class TTTGame {
//   static POSSIBLE_WINNING_ROWS = [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9'],
//     ['1', '4', '7'],
//     ['2', '5', '8'],
//     ['3', '6', '9'],
//     ['1', '5', '9'],
//     ['3', '5', '7'],
//   ];
// }

// we also need a method that counts the number of squares that contain a player's marker
// the method should work for a list of specific squares, so we'll need two arguments: a player,
// and a list of keys for the squares we want to examine:

// class Square {
//   getMarker() {
//     return this.marker;
//   }
// }

// class Board { 
//   countMarkersFor(player, keys) {
//     let markers = keys.filter(key => {
//       return this.squares[key].getMarker() === player.getMarker();
//     });
//     return markers.length
//   }
// }

// note that the first argument to countMarkersFor is the player we are counting square for, the 
// second arg is an array of the keys from the board's grid eg [1 ,4, 7] from which we will count
// the players markers.
// We also added a getMarker method to the Square class

// the array and method can now be added to the TTTGame to determine whether there is a winner 

// class TTTGame {
//   someoneWon() {
//     return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
//       return  this.board.countMarkersFor(this.hunman, row) === 3 ||
//       this.board.countMarkersFor(this.computer, row) === 3;
//     });
//   }
// }

// note that the Array.prototype.some method returns true if any invocation of the callback function
// returns true, false if every invocation returns false.

// Our method iterates through the list of possible winning rows and checks each to see whether 
// it contains a winning set of markers. For each row, we merely count the number of markers belonging
// to each player, if either one has 3 markers we have a winner.

// Who won the Game?

// we need to know who won the game.
// we'll need that information in the displayResults method in TTTGame:

// class TTTGame {
//   displayResults() {
//     if (this.isWinner(this.human)) {
//       console.log("You won! COngrats!");
//     } else if (this.isWinner(this.computer)) {
//       console.log("I won! Take that human!");
//     } else {
//       console.log("It's a tie")
//     }
//   }

//   isWinner(player) {
//     return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
//       return this.board.countMarkersFor(player, row) === 3;
//     });
//   }
// }

// Refactoring
// WE can refactor someoneWon() by using isWinner()

// someoneWon() {
//   return this.isWinner(this.human) || this.isWinner(this.computer);
// }

// also delete the Row class as it's not used.

// we will also clear the screen rather than having everything happen one after the other
// using console.clear();
