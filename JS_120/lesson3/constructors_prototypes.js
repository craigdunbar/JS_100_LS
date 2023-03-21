// What does the following code log to the console? 
// Try to answer without running the code. 
// Can you explain why the code produces the output it does?
// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);
// The value of this within the RECTANGLE.area and RECTANGLE.perimeter 
// methods gets set to the RECTANGLE object when they are 
// called. Since RECTANGLE doesn't define width and height properties, 
// the property accesses both return undefined. 
// Since mathematical operations on undefined produce a 
// value of NaN, the return value of the methods is NaN.

// ex2
// How would you fix the problem in the code from problem 1?
// use call() to set the execution context
// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

// ex3
// Write a constructor function called Circle that takes a radius as 
// an argument. You should be able to call an area method on any objects 
// created by the constructor to get the circle's area. 

// let CIRCLE = {
//   area: function() {
//     return (Math.PI * this.radius**2);
//   }
// }

// function Circle(radius) {
//   this.radius = radius;
//   this.area = CIRCLE.area.call(this);
// }
// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area) // 28.274333882308138
// console.log(a.area())
// console.log(a.area().toFixed(2)); // => 28.27
// b.area().toFixed(2); // => 50.27
// a.hasOwnProperty('area'); // => false

// the above code doesn't work as a.area() is not a function
// const Circle = function(radius) {
//   this.radius = radius;
// };

// Circle.prototype.area = function() {
//   return Math.PI * this.radius * this.radius;
// };

// let a = new Circle(3);
// let b = new Circle(4);
// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty('area')); // => false

// ex4
// What will the following code log to the console and why?
// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // true
// Even though we define the swingSword method on the prototype after 
// we create the ninja, all objects created by the Ninja constructor 
// share the same prototype object. 
// Thus, when we define swingSword, it immediately becomes 
// available to the ninja object.

// ex5
// What will the following code output and why? 
// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword()); // ninjs.swingSword() is not a function
// Despite the similarities to the code in the previous question, this code doesn't work the same way. That's because we're reassigning Ninja.prototype to an entirely new object instead of mutating the original prototype object. The prototype for the ninja object doesn't change; it's still the original prototype defined during the constructor's invocation. Thus, JavaScript can't find the swingSword method in the prototype chain of ninja.

// ex6
// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// ex7
// create a new instance of an object, without having direct access to the constructor function:
// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else
// let ninjaB = Object.create(ninjaA)
// console.log(ninjaA.constructor === ninjaB.constructor) // => true
// This code works as well, but there is a flaw: it puts the swung property in the prototype object instead of in the ninjaB object where it belongs. Thus, ninjaA and ninjaB are somewhat different objects:
// ninjaA:
//   swung: false
//   constructor: Ninja
//   prototype: {}

// ninjaB:
//   constructor: Ninja
//   prototype: {
//     swung: false
//   }

// better to use:
// let ninjaB = new ninjaA.constructor();

// ex8
// Write a constructor function that you can use with or without the new operator. The function should return the same result with either form.
// function User(first, last) {
//   // ... add code here
// }

function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

// Constructor functions built this way are called scope-safe constructors. Most, but not all, of JavaScript's built-in constructors, such as Object, RegExp, and Array, are scope-safe. String is not:
// new Object();          // Object {}
// Object();              // Object {}

// new Array(1, 2, 3);    // [1, 2, 3]
// Array(1, 2, 3);        // [1, 2, 3]

// new String("abc");     // [String: 'abc']
// String("abc");         // 'abc'