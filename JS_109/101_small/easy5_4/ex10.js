/*
# -----------------------INSTRUCTIONS------------------------
Array Average
Write a function that takes one argument, an array of integers, 
and returns the average of all the integers in the array, 
rounded down to the integer component of the average. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 
The array will never be empty, and the numbers will always be positive integers.

# Implicit: 

# --------------------------EXAMPLES-------------------------
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
# ----------------------------ALGO---------------------------
reduce the array to the sum of the elments
divide the resut of reduce by the number of elemtns
use Math.floor to get the rounded down number
*/
// function average(array) {
//   return Math.floor(array.reduce((acc, el ) => acc + el, 0)/ array.length)
// }

// // Try to solve this problem using Array.prototype.forEach method.

function average(arr) {
  let sum = 0;
  arr.forEach(el => sum += el);
  return Math.floor(sum/ arr.length);
}
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40