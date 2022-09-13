/*
# -----------------------INSTRUCTIONS------------------------
Sum or product of consecutive numbers

Write a program that asks the user for an integer greater
than  zero, then asks whrther to compute the sum or product
of all intgers between one and the given integer.
# --------------------------PROBLEM--------------------------

# Input: user inputs integer, user input sum or product
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: validate all entries

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# use readline-sync to get the user input for integer and then
s or p for sum or product
use reduce() to get either the sum or the product
log the result
*/
let rlSync = require('readline-sync');
let sum = 0;
let prod = 1;
let num = 0;
while(true) {
  num = rlSync.question('Enter a number greater than zero: ');
  if (num > 0) {
    break;
  } else {
    console.log("That's not a valid number")
  }
}
for (let count = 1; count <= num; count ++) {
    sum += count;
    prod = prod * count;
}
while(true) {
  let calc = rlSync.question('Do you want the sum or the product? Enter s or p: ');
  if (calc.toLowerCase() === 's') {
    console.log(sum); 
    break;
  } else if (calc.toLowerCase() === 'p') {
    console.log(prod);
    break;
  } else {
    console.log('This is not a valid choice')
  }
}