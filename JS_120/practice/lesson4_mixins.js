// // // Problem 1:
// // // If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make
// // // them goFast? How can you check whether you Car or Truck can now go fast?

// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`)
//   }
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow'`);
//   }
// }

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow`);
//   }
// }

// // we can use Object.assign() to allow the Speed object to be used as a mix-in

// Object.assign(Car.prototype, Speed)
// Object.assign(Truck.prototype, Speed)

// // To test it we can create a car or truck object and call goFast()
// let smallCar = new Car()
// smallCar.goFast() // logs I'm a Car and going super fast!

// // we can also use the 'in' method to check that on object responds to a specific method ie:
// console.log('goFast' in smallCar); // logs true

// Problem 2

// In the last question, we used a mix-in named Speed that contained a goFast method.
// We included the mix-in in the Car class and then called the goFast method from an instance of the Car class.
// You may have noticed that the string printed when we call goFast includes the name of the type
// of vehicle we are using. How is that done?

//Hint: The constructor property references a function object, 
// constructor.name references the name property on that object.

// when we use this.constructor.name 
// this refers to the object that invoked the method. (Car and Truck)
// the constructor property of an object references the class that the object belongs to ie Car and Truck
// constructors have a name property that contains the name of the class as a string and this is what is output

// Problem 3
// Ben and Alyssa are working on a vehicle management system. THey have created classes names
// Autpo and Motorcycle to represent automobiles and motorcycles. After they noticed that the 
// information and calculations performed was common to both vehicle types, they decided to break out 
// the commonality into a separate class named WheeledVehicle.
// Their code is below:

// class WheeledVehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     this.tires = tirePressure;
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.FuelCap = fuelCapInLiter
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }

//   range() {
//     return this.fuelCap * this.fuelEfficiency;
//   }
// }

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30, 30, 32, 32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20, 20], 80, 8.0)
//   }
// }

// Then they are asked to incorporate a new vehicle - a catamaran
// class Catamaran {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     // catamaran specific logic

//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//   }
// }
// although this new class doesnt fit well with the others we still want to share code for
// tracking fuel efficiency and range.
// Modify the class definitions and move code into mix-ins to do this.
// Move the range method into an object called Distance and use Object.assign() to allow 
// all 3 classes access to it.

let Distance = {
  range() {
    return this.fuelCapInLiter * this.kmTravelledPerLiter;
  }
}

class WheeledVehicle {
  constructor(tirePressure,kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.kmTravelledPerLiter = kmTravelledPerLiter;
    this.fuelCapInLiter = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Distance);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30, 30, 32, 32], 50, 25.0);
  }
}
// Object.assign(Auto.prototype, Distance) - can just add once to WheeledVehicle.prototype

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20, 20], 80, 8.0)
  }
}
// Object.assign(Motorcycle.prototype, Distance);can just add once to WheeledVehicle.prototype

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.kmTravelledPerLiter = kmTravelledPerLiter;
    this.fuelCapInLiter = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Distance);

let smallCat = new Catamaran(2, 2, 10, 100)
console.log(smallCat.range());

let car = new Auto()
console.log(car.range());