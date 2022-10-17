/*
# -----------------------INSTRUCTIONS------------------------
Sum or product of consecutive numbers

Write a program that asks the user for an integer greater
than  zero, then asks whrther to compute the sum or product
of all intgers between one and the given integer.

# --------------------------PROBLEM--------------------------

# Input: user input integer and sum or product
# Output: 
# ---------------------------RULES---------------------------
# Explicit: don;t need to validate?

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# use readline-sync to get the inputs
create an array from one to the input number
- use [...Array(num)] to create the array and map to changed the values
if the answer is sum 
- use reduce starting at 0 and add
if the answer is product 
- use reduce starting at 1 and multiply

*/
let rlSync = require('readline-sync');
let num = Number(rlSync.question('Enter the number greater than 0: '));
let operation = rlSync.question('Do you want the sum or the product? Enter s or p: ');

let arr = [...Array(num)].map((el,idx) => el = idx + 1)
if (operation === 's') {
  console.log(arr.reduce((acc, value) => acc + value, 0));
} else if (operation === 'p') {
  console.log(arr.reduce((acc, value) => acc * value, 1));
} else {
console.log("not a valid entry");
}