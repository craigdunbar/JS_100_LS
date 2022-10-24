/*
# -----------------------INSTRUCTIONS------------------------
Searching 101
Write a program that solicits six numbers from the user and 
logs a message that describes whether the sixth number 
appears among the first five numbers.

# --------------------------PROBLEM--------------------------

# Input: user input 6 integers
# Output: log string
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
# use readline-sync to get the user input
creat an array of the 5 numbers
use includes() to see if the 6th number is in the array
log the message
*/
let rlSync = require('readline-sync');
let first = rlSync.question('Enter the 1st number: ');
let second = rlSync.question('Enter the 2nd number: ');
let third = rlSync.question('Enter the 3rd number: ');
let fourth = rlSync.question('Enter the 4th number: ');
let fifth = rlSync.question('Enter the 5th number: ');
let last = rlSync.question('Enter the last number: ');

let arr = [first, second, third, fourth, fifth]
if (arr.includes(last)) {
  console.log(`The number ${last} appears in ${arr.join(', ')}`);
} else {
  console.log(`The number ${last} does not appear in ${arr.join(', ')}`)
}




