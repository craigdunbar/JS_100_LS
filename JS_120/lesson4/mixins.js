// // Problem 1:
// // If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make
// // them goFast? How can you check whether you Car or Truck can now go fast?

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

// // use Object.assign to mix Speed into the prototypes of both constructors for the Car class and Truck class

// Object.assign(Car.prototype, Speed)

// Object.assign(Truck.prototype, Speed)

// // To check if the Car and Truck can now go fast we need to call goFast on a car or truck object
// let blueTruck = new Truck();
// console.log(blueTruck.goFast()) // logs I'm a Truck and going super fast!

// let smallCar = new Car();
// console.log(smallCar.goFast()) // logs I'm a Car and going super fast!

// Problem 2

// In the laset question, we used a mix-in named Speed that contained a goFast method.
// We included the mix-in in the Car class and then called the goFast method from an instance of the Car class.
// You mayn have noticed that the string printed when we call goFast includes the name of the type
// of vehicle we are using. How is that done?

// The constructor property references a function object, 
// constructor.name references the name property on that object.
// From MDN:
// The name data property of a Function instance indicates the function's name as specified 
// when it was created, or it may be either anonymous or '' (an empty string) for functions 
// created anonymously.
// So within goFast, this refers to the object that invoked the method (Car and Truck)
// The constructor property of an object references the class that the object belongs to 
// ie Car or Truck
// Constructors have a name property that contains the name of the class as a string which is 
//  what gets output in goFast.

// console.log(smallCar.constructor) // logs [class Car]
// console.log(smallCar.constructor === Car)  // logs true
// console.log(smallCar.constructor.name) // logs Car

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
// First step is to create a mix-in object to share the range method
const CommonRange = {
  range() {
    return this.fuelCap * this.fuelEfficiency
  }
};
// then use Object.Assign() to allow the classes to use the CommonRange object

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.FuelCap = fuelCapInLiter
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}
Object.assign(WheeledVehicle.prototype, CommonRange)

// Auto and Motorcycle don't need anything as they inherit from WheeledVehicle
class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30, 30, 32, 32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20, 20], 80, 8.0)
  }
}
// Catamaran needs to define it's own fuel values, and add CommonRange to it's prototype property

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter
  }
}
Object.assign(Catamaran.prototype, CommonRange);
