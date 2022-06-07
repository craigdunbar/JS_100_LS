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
# use require to install readline-sync
as user for integer.
save this value to a variable using prompt method
ask user to choose sum or product
save this to a varianble using prompt method
initialise a for loop
starting with count = 1 iterate until count = integer,
incrementing count by one
for sum add the consecutive numbers to the total of previuos
numbers.
for product multiply the total by the next number
log the sum or the product
*/

let readline = require('readline-sync');
// console.log("Please enter an integer greater than 0: ");
// let integer = Number(readline.prompt());

// let sum = 0;
// let product = 1;
// for (let count = 1; count <= integer; count++) {
//   sum += count;
//   product = product * count;
// }

// while (true)  {
//   console.log("Enter 's' to compute the sum, 'p' to compute the product.");
//   let answer = readline.prompt()
//   if (answer.toLowerCase() === 's') {
//     console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
//     break;
//   } else if (answer.toLowerCase() === 'p') {
//   console.log(`The product of the integers between 1 and ${integer} is ${product}`);
//     break;
// } else {
//     console.log("That's not a valid input");
//   }
// }
// if input was an array then we could use the array.reduce() 
// method
 let arr = [1, 2, 3, 4, 5];
 let sum = arr.reduce((a, b) => a + b, 0);
 let product = arr.reduce((a, b) => a * b, 1);

 while (true)  {
  console.log("Enter 's' to compute the sum, 'p' to compute the product.");
  let answer = readline.prompt()
  if (answer.toLowerCase() === 's') {
    console.log(`The sum of the integers in ${arr} is ${sum}`);
    break;
  } else if (answer.toLowerCase() === 'p') {
  console.log(`The product of the integers in ${arr} is ${product}`);
    break;
} else {
    console.log("That's not a valid input");
  }
} 