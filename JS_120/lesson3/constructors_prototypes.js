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
const Circle = function(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

let a = new Circle(3);
let b = new Circle(4);
console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false
