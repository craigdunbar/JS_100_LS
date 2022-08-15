/*
# -----------------------INSTRUCTIONS------------------------
Running Totals
Write a function that takes an array of numbers and returns 
an array with the same number of elements, but with each 
element's value being the running total from the original array.


# --------------------------PROBLEM--------------------------

# Input: array
# Output: array with elements that are the sum of the previous elements
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
# ----------------------------ALGO---------------------------
# 
given the array argument use map to vreate a new array
the callback function for the map method should return the sum of the current 
element and the previos one

*/
function runningTotal(arr) {
  let sum = 0;
  // return arr.map((el, idx) => {
    
  //   if (idx === 0) {
  //     sum = el;
  //     return sum;
  //   } else {
  //     sum = arr[idx] + sum
  //     return sum;
  //   }
  // })
  return arr.map(el => sum = sum + el);
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []