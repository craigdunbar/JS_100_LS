/*
# -----------------------INSTRUCTIONS------------------------
Counting Up
Write a function that takes an integer argument and returns an 
array containing all integers between 1 and the argument (inclusive), 
in ascending order.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: array
# ---------------------------RULES---------------------------
# Explicit: You may assume that the argument will always be a positive integer

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
# ----------------------------ALGO---------------------------
# initalise an empty array
initalise a loop that goes from 1 to the given integer
push the counter value to the empty array
return the array
*/
// function sequence(num) {
//   let arr = [];
//   for (let count = 1; count <= num; count ++) {
//     arr = arr.concat(count)
//   }
//   return arr;
// 
// using map and spread operator
function sequence(num) {
  return [...Array(num)].map((_, idx) => idx + 1); 
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]