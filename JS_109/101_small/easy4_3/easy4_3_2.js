/*
# -----------------------INSTRUCTIONS------------------------
Searching 101
Write a program that solicits six numbers from the user and 
logs a message that describes whether the sixth number 
appears among the first five numbers.

# --------------------------PROBLEM--------------------------

# Input: 6 numbers from the user
# Output: logs a string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

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
# use readline-sync to get the inouts from the user.
create and array from the first 5 inputs
use inludes() method to determine whether the last num appears in the first 5 
log the message
*/
let rlSync = require('readline-sync');
let num1 = rlSync.question("Enter the first number: ");
let num2 = rlSync.question("Enter the second number: ");
let num3 = rlSync.question("Enter the third number: ");
let num4 = rlSync.question("Enter the fourth number: ");
let num5 = rlSync.question("Enter the fifth number: ");
let num6 = rlSync.question("Enter the last number: ");

let arr = Array(num1, num2, num3, num4, num5);

if (arr.includes(num6)) {
  console.log(`The number ${num6} appears in ${arr.join(', ')}.`);
} else {
  console.log(`The number ${num6} does not appear in ${arr.join(', ')}.`)
}