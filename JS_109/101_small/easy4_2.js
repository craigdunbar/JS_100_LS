/*
# -----------------------INSTRUCTIONS------------------------
Searching 101
Write a program that solicits six numbers from the user and 
logs a message that describes whether the sixth number 
appears among the first five numbers.


# --------------------------PROBLEM--------------------------

# Input: six numbers from user
# Output: string
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
# ask user for 6 numbers
add the first 5 numbers to an array
take the 6th number and see if the array already includes that number
log a message that tells the user if the number was in the first five or not
*/

//   let rlSync = require('readline-sync');
//   let arr = [];
//   let first = rlSync.question("Enter the first number: ");
//   let second = rlSync.question("Enter the second number: ");
//   let third = rlSync.question("Enter the third number: ");
//   let fourth = rlSync.question("Enter the fourth number: ");
//   let fifth = rlSync.question("Enter the fifth number: ");
//   let last = rlSync.question("Enter the last number: ");

//   arr.push(first, second, third, fourth, fifth);
//   if (arr.includes(last)) {
//     console.log(`The number ${last} appears in ${arr.join(', ')}.`);
//   } else {
//   console.log(`The number ${last} does not appear in ${arr.join(', ')}.`);
// }
// // further exploration:
// function findNum() {
//   let rlSync = require('readline-sync');
//   let arr = [];
//   let first = rlSync.question("Enter the first number: ");
//   let second = rlSync.question("Enter the second number: ");
//   let third = rlSync.question("Enter the third number: ");
//   let fourth = rlSync.question("Enter the fourth number: ");
//   let fifth = rlSync.question("Enter the fifth number: ");

//   arr.push(first, second, third, fourth, fifth);
  
//   let num = '25';
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return (`There is a number greater than ${num} in ${arr.join(', ')}`);
//     }
//   }
//   return (`There is not a number greater than ${num} in ${arr.join(', ')}`);
// }
// console.log(findNum());

// using Array.some()
function findNum() {
  let rlSync = require('readline-sync');
  let arr = [];
  let first = rlSync.question("Enter the first number: ");
  let second = rlSync.question("Enter the second number: ");
  let third = rlSync.question("Enter the third number: ");
  let fourth = rlSync.question("Enter the fourth number: ");
  let fifth = rlSync.question("Enter the fifth number: ");

  arr.push(first, second, third, fourth, fifth);
  
    return (arr.some(num => num > 25));
}
console.log(findNum());