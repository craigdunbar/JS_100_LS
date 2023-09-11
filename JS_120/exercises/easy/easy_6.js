// Refactoring Vehicles
// Consider the following classes:
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 4;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Motorcycle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 2;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Truck {
  constructor(make, model, payload) {
    this.make = make;
    this.model = model;
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

// Refactor these classes so they all use a common superclass, and inherit behavior as needed.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model)
    this.payload = payload
  }
  getWheels() {
    return 6;
  }
}

// All of our constructor methods take `make` and  `model` parameters, 
// and store them in `make` and `model` properties. We can refactor all of 
// this commonality into `Vehicle` by moving `constructor` from one of the classes 
// into `Vehicle`, and deleting it from both `Car` and `Motorcycle`. 
// However, our `Truck` class takes a 3rd parameter `payload`, so we can't just delete 
// `constructor` method in `Truck` class.

// Our `info` method is identical in all 3 of the original classes, 
// so we just move that into `Vehicle` and remove it from the original classes.