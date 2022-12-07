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
define a variable called lowest
define an empty array called result

given the array argument 
if arr.lenght < 5 return null
iterate over the array and generate subArrays of five elments from the original array
reduce the subArray to the sum of it's products
if the result of reduce is small than the lowest variable 
reassign lowest to the current result
reassign result to the current subArray
at the end of the iteration 
 return the value of lowest
*/
function minimumSum(arr) {
  let lowest = Infinity;
  let result = [];
  if (arr.length < 5) return null;

  for (let i = 0; i < arr.length - 4; i ++) {
    let subArr = arr.slice(i, i + 5);
    let sum = subArr.reduce((acc, el) => acc + el, 0);
    if (sum < lowest) {
      lowest = sum;
      result = subArr;
    }
    // console.log(sum) 
  }
  return lowest;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);