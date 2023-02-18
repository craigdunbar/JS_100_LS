/*
# -----------------------INSTRUCTIONS------------------------
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

# --------------------------PROBLEM--------------------------

# Input: array
# Output: minimum sum of 5 characters or null
# ---------------------------RULES---------------------------
# Explicit: if less than 5 characters in array return null

# Implicit: consecutive numbers from lowest index first?

# --------------------------EXAMPLES-------------------------a
[1, 2, 3, 4, 5, -5] === 9
smallest sum is created from 2 + 3 + 4 + 5 = -5 === 9

[55, 2, 6, 5, 1, 2, 9, 3, 5, 100] === 16 
first iteration 55 + 2  + 6 + 5 + 1 === 69
second 2 + 6 + 5 + 1 + 2 === 16


# ----------------------------ALGO---------------------------
25
dfine a variable called lowest and initalise to infinity
if array.length < 5 return null
iterate over the array starting from index 0
create subarrays of 5 elements
iteration will end at i < arr.length - 4
use reduce to get the sum of the array
if the sum is less than lowest reassign lowest to the sum

return lowest

*/
function minimumSum(arr) {
  if (arr.length < 5) return null

  let lowest = Infinity
  for (let i = 0; i < arr.length - 4; i++) {
    let result = arr.slice(i, i + 5).reduce((acc, val) => acc + val)
    if (result < lowest) {
      lowest = result;
    }
  }
  return lowest;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);