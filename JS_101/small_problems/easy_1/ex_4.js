// how big is the room?
// let rlSync = require('readline-sync');
// let length = rlSync.question("Enter the length of the room in meters:");
// let width = rlSync.question("Enter the width of the room in meters:");

// let areaMeters = length * width
// let areaFeet = areaMeters * 10.7639

// console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);

// I used question() instead of prompt()
// LS solution
// let readlineSync = require("readline-sync");

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );

//Extra work

let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters:");
let width = rlSync.question("Enter the width of the room in meters:");

console.log("What units do you wish? meters or feet?");
let units = rlSync.prompt()
units = parseInt(units, 10)

let areaMeters = length * width
let areaFeet = areaMeters * 10.7639

if (units === 'meters') {
  console.log(`The area of the room is ${areaMeters} square meters.`);
} else {
  console.log(`The area of the room is ${areaFeet} square feet.`);
}