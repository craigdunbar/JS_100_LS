/*
# -----------------------INSTRUCTIONS------------------------
Running Totals
Write a function that takes an array of numbers and returns 
an array with the same number of elements, but with each 
element's value being the running total from the original array.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
# ----------------------------ALGO---------------------------
# initalize a variable sum with value of 0
iterate over the array and create a new array 
add the current elements value to the sum variable
then the value of sum becomes the element in the new array
use map to create the new array
*/
function runningTotal(arr) {
  let sum = 0;
  return arr.map(el => sum = sum + el);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []