/*
# -----------------------INSTRUCTIONS------------------------

# Searching 101
Get 6 numbers from the user. Log a messaage that says
whether the 6th number is among the first 5.

# --------------------------PROBLEM--------------------------

# Input: 6 strings
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: strings all represent positive numbers

# --------------------------EXAMPLES-------------------------
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
# ----------------------------ALGO---------------------------
# get 6 numbers from user with readline-sync
initalize an empty array
add each of the first five numbers in the array
iterate through the array and determine if the 6th number 
is included already.
print a message saying if the sixth number appears 
in the first five or not
*/
let rlSync = require('readline-sync');
let numArray = []

console.log("Enter the 1st number:");
let num1 = rlSync.question();
numArray += num1;

console.log("Enter the 2nd number:");
let num2 = rlSync.question();
numArray += num2;

console.log("Enter the 3rd number:");
let num3 = rlSync.question();
numArray += num3;

console.log("Enter the 4th number:");
let num4 = rlSync.question();
numArray += num4;

console.log("Enter the 5th number:");
let num5 = rlSync.question();
numArray += num5;

console.log("Enter the last number:");
let num6 = rlSync.question();

if (numArray.includes(num6)) {
  console.log(`The number ${num6} apprears in ${numArray.split('')}.`);
} else {
  console.log(`The number ${num6} does not appear in ${numArray.split('')}.`);
}

// let readlineSync = require("readline-sync");

// let numbers = [];

// console.log("Enter the 1st number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 2nd number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 3rd number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 4th number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 5th number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the last number:");
// const lastNumber = Number(readlineSync.prompt());

// if (numbers.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in ${numbers}.`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
// }