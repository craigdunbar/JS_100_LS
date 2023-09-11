// Using the following code, create a `towMixin`
//  mixin that contains a method named `tow`
//  that returns `I can tow a trailer!`
//  when invoked. Include the mixin in the `Truck`
//  class.

class Truck {}

class Car {}

const towMixin = {
  tow() {
    return "I can tow a trailer";
  }
}

Object.assign(Truck.prototype, towMixin)

let truck = new Truck();
console.log(truck.tow());