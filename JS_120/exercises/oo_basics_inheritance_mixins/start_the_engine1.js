// Change the following code so that creating a new Truck
//  automatically invokes startEngine.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

// If we want to override a property, but still have access to 
// functionality from a parent class use `super`.

// When you invoke `super` within constructor, like we did in this solution,  
// it appears alone and must be used before the `this` keyword is used. 
