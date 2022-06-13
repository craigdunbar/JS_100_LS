/*
# -----------------------INSTRUCTIONS------------------------
Sum of Sums
Write a function that takes an array of numbers and returns 
the sum of the sums of each leading subsequence in that array. 
Examine the examples to see what we mean. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 
You may assume that the array always contains at least one number.

# Implicit: 

# --------------------------EXAMPLES-------------------------
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
# ----------------------------ALGO---------------------------
# map the given array argument to produce a new array that constains elements
that are the result of adding the current element and the previous element together
unless it's the first element which should be returned as is.
use reduce to return a single integer of the sum of all the elements in the mapped array.
*/
function sumOfSums(array) {
  let sumArr = []
  let sum = 0;
  for (let count = 0; count < array.length; count++) { 
    sum += array[count];
    sumArr = sumArr.concat(sum);
  }
  return (sumArr.reduce((a, b)=> a + b));
}
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35