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
# initalise a function with an array parameter
iterate over the given array and create a new array
from the result of adding the previous two elements together.
*/
// function runningTotal(arr) {
//   let newArr = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     if(idx < 1) {
//       newArr.push(arr[idx]);
//     } else {
//     arr[idx] = arr[idx] + arr[idx -1];
//     newArr.push(arr[idx])
//     }
//   }
//   return newArr;
// }

// Further exploration
// use map 

function runningTotal(arr) {
  let sum = 0;
  return arr.map(el => sum = sum + el);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
