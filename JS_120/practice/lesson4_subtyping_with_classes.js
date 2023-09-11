//Q1
// Look at the code below:
// class Game {
//   play() {
//     return 'Start the Game'
//   }
// }

// class Bingo extends Game {
//   rulesOfPlay() {
//     // rules of play
//   }
// }
// what happens if we add a play method on the Bingo class?
// The new play method would be an 'own' method on the Bingo class and would therefore
// be invoked insted of the inherited method from the Gamne class. The new play method would
// 'overide' the original method.

//Q2
// class hierarchy
// Create a class named Greeting that has a single method named greet. The method should take a string
// argument and it should print that argument to the console.

class Greeting {
  greet(str) {
    console.log(str)
  }
}

// Now create two more class that inherit from the Greeting class: one name 'hello' and the other 'goodbye;
// The hello class should have a hi method that takes no arguments and logs "Hello".
// The goobye class should have a bye method that logs "Goodbye".
// use the greet method from the Greeting class when implementing Hello and Goodbye. Don't call console.log
// from either of them.

class Hello extends Greeting {
  hi() {
    this.greet("Hello")
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye")
  }
}