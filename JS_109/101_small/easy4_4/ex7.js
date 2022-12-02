/*
# -----------------------INSTRUCTIONS------------------------
Running Totals
Write a function that takes an array of numbers and returns 
an array with the same number of elements, but with each 
element's value being the running total from the original array.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

# ----------------------------ALGO---------------------------
# iterate over the array 
define a sum variable that is the sum of the previous variables
use map to creat a new array with the elenmetns being the current sum
*/
function runningTotal(arr) {
  let sum = 0;
  return arr.map(el => sum += el);
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []