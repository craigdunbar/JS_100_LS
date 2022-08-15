/*
# -----------------------INSTRUCTIONS------------------------
Sum or product of consecutive numbers

Write a program that asks the user for an integer greater
than  zero, then asks whrther to compute the sum or product
of all intgers between one and the given integer.

# --------------------------PROBLEM--------------------------

# Input: integer
          user iput of either 's' of 'p'
# Output: the resulting integer of either the sum or product
# ---------------------------RULES---------------------------
# Explicit: need to validate?

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
use require to get readine-sync
get the user to input a number
get the user to enter either and s or p to represent 
sum or product
calculate either the sum or the product of all the integers between
1 and the given integer
return the result
*/

// let rlSync = require('readline-sync');
// let num = rlSync.question("Please enter a number: ");
// let calc = rlSync.question("Please enter s to calculate the sum, or p to calculate the product: ");
// let sum = 0;
// let prod = 1;

// if (calc === 's') {
//   for (let count = 1; count <= num; count++) {
//     sum += count
//   }
//   console.log(sum)
// } else if (calc === 'p') {
//   for (let count = 1; count <= num; count++) {
//     prod *= count
//   }
//   console.log(prod);
// } else {
//   console.log("That's not a valid input")
// }
let readline = require('readline-sync');

console.log("Please enter an integer greater than 0: ");
let integer = Number(readline.prompt());

let sum = 0;
let product = 1;
for (let count = 1; count <= integer; count++) {
  sum += count;
  product = product * count;
}

while (true)  {
  console.log("Enter 's' to compute the sum, 'p' to compute the product.");
  let answer = readline.prompt()
  if (answer.toLowerCase() === 's') {
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
    break;
  } else if (answer.toLowerCase() === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${product}`);
    break;
} else {
    console.log("That's not a valid input");
  }
}