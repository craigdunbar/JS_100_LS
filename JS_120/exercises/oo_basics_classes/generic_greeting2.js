// Using the following code, add two methods: static method genericGreeting
//  and instance method personalGreeting.
//  The first method should log a greeting that's generic to the class. The
//  second method should be an instance method and log a greeting that's 
// custom to the object.

class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log("Hi! I'm a cat")
  }

  personalGreeting() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting(); // logs Hi! I'm a cat
kitty.personalGreeting(); // logs Hi! I'm Sophie

//The most notable difference between static and instance method is 
// that static methods are called on a class(constructor function), not any
// instance of the class. Think of static methods as generic actions a 
// class may perform, like this:

// class Cat {
//   static speak() {
//     console.log("Meow!");
//   }
// }
// Cat.speak() // "Meow!"

// We know that cats meow, therefore, it makes sense to add speak
//  as a generic action for Cat.