// 3.Fake Cat
// Without calling the Cat constructor, create an object that looks and acts like a Cat
//  instance that doesn't have a defined name.

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// let anotherCat = class extends Cat { // this works but it's calling the Cat constructor
//   constructor(name) {
//     super()
//   }
// }

let fakeCat = Object.create(Cat.prototype)

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.