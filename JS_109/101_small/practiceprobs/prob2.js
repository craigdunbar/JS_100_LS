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
# given the array argument determine the length of the array
initialise a result array
initalise a loop to iterate over the array
on each iteration get the sum of 5 consecutive numbers
starting at index 0 on the first iteration and ending at arr.length - 5 
get the sum of these 5 integers
 - use reduce()
add this result to the result array
- us array.concat()

after all the iterations 
sort the result array an return the lowest value
*/
function minimumSum(arr) {
  let length = arr.length
  let resultsArr = [];

  if (arr.length < 5) {
    return null;
  }

  for (let i = 0; i < arr.length - 4; i++) {
    let currentArr = arr.slice(i, i + 5)
    sum = currentArr.reduce((acc, current) => acc + current, 0)
    resultsArr = resultsArr.concat(sum)
  }
  return (resultsArr.sort((a,b) => a - b)[0])
}


console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);