// Moving
// You have the following classes.

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }

  walk() {
    console.log(`${this.name} ${gait.call(this)} forward`)
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

// You need to modify the code so that this works:

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// You are only allowed to write one new method to do this

// Since we are only allowed to write one method, this would leads us to use a mixin.

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

// now we can include this mixin to each class using Object.assign()

Object.assign(Person.prototype, walkMixin)
let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

Object.assign(Cat.prototype, walkMixin)

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// // "Kitty saunters forward"

Object.assign(Cheetah.prototype, walkMixin)

let flash = new Cheetah("Flash");
console.log(flash.walk());
// // "Flash runs forward"