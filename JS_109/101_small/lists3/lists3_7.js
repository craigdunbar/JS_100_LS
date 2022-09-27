/*
# -----------------------INSTRUCTIONS------------------------
Sum of Sums
Write a function that takes an array of numbers and returns 
the sum of the sums of each leading subsequence in that array. 
Examine the examples to see what we mean.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: You may assume that the array always contains at least one number.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
# ----------------------------ALGO---------------------------
# iterate over the given array and use map to transform the elements
to the result of adding the current element to the prior elements
then reduce the mapped array to a single integer and return it
*/
function sumOfSums(arr) {
  let sum = 0;
  return arr.map((el, idx) => {
    sum += arr[idx];
    return el = sum;
  }). reduce((a,b) => a + b);
}
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35