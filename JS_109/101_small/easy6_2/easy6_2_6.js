/*
# -----------------------INSTRUCTIONS------------------------
Counting Up
Write a function that takes an integer argument and returns an 
array containing all integers between 1 and the argument (inclusive), 
in ascending order.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: array of integers
# ---------------------------RULES---------------------------
# Explicit: You may assume that the argument will always be a positive integer.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
# ----------------------------ALGO---------------------------
# given the integer argument 
initalise a loop with a counter starting at one 
and ending at the given integer
push each count value to an array
return this array
*/
// function sequence(num) {
//   let arr = [];
//   for (let count = 1; count <= num; count++) {
//     arr.push(count)
//   }
//   return arr;
// }
// using map and pread syntax
function sequence(num) {
return [...Array(num)].map((_, idx) => idx + 1);
}
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]