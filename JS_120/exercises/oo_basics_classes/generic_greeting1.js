// Modify the following code so that Hello! I'm a cat!
//  is logged when Cat.genericGreeting
//  is invoked.

class Cat {
  static genericGreeting() {
    console.log("Hi, I'm a cat!")
  }
}

Cat.genericGreeting();

// When looking at the initial example, the first thing you should notice is the invocation of `genericGreeting`. It's being invoked on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method.

// We define static methods on classes by using the `static` keyword.

// To invoke static methods, they must be called on the class itself, 
// not an instance of the class. If we invoke a static method on an 
// instance of the class, we'll get a `TypeError`:

class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}  

let kitty = new Cat();
kitty.genericGreeting(); // => kitty.genericGreeting is not a function