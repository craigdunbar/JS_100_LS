/*
# -----------------------INSTRUCTIONS------------------------
Array Average
Write a function that takes one argument, an array of integers, 
and returns the average of all the integers in the array, 
rounded down to the integer component of the average. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: rounded down integer
# ---------------------------RULES---------------------------
# Explicit: The array will never be empty, and the numbers will always be positive integers.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
# ----------------------------ALGO---------------------------
# use reduce to sum the integers in the array
divide this result by the numbers of elments in the array
use Math.floor to round down to the nearest integer
return the result
*/
function average(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return Math.floor(sum/ arr.length);
}
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// Try to solve this problem using Array.prototype.forEach method.
// function average(arr) {
//   let sum = 0
//   arr.forEach(el => sum = sum + el)
//   return Math.floor(sum/arr.length)
// }
