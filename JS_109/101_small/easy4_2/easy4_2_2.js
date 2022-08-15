/*
# -----------------------INSTRUCTIONS------------------------
Searching 101
Write a program that solicits six numbers from the user and 
logs a message that describes whether the sixth number 
appears among the first five numbers.

# --------------------------PROBLEM--------------------------

# Input: user input of 6 integers
# Output: string showing result of search
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

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
# using readline-sync to get 6 integers from the user
initalise an empty array
add the first 5 user numbers to the array
take the last user number and search the array to see if the number is in the array
log the message with the last number entered and whether it appears in the array
or not.
*/
let rlSync = require('readline-sync')
let first = rlSync.question('Enter the first number: ');
let second = rlSync.question('Enter the second number: ');
let third = rlSync.question('Enter thr third number: ');
let fourth = rlSync.question('Enter the fourth number: ');
let fifth = rlSync.question('ENter the fifth number: ');
let last = rlSync.question('Enter the last number: ');

let arr = [first, second, third, fourth, fifth];
if(arr.includes(last)) {
  console.log(`The number ${last} appears in ${arr}`); 
} else {
  console.log(`The number ${last} does not appear in ${arr}`); 
}

