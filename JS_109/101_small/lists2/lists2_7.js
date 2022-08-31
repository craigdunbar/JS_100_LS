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

BEYOND?

# --------------------------EXAMPLES-------------------------
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
# ----------------------------ALGO---------------------------
# just as the previous examples we need to loop through the given array and 
map a new array where the elements are the result of adding the subsequent elments
then we can reduce this number down to the sum of all the sums.

*/
// function sumOfSums(arr) {
//   let sumArr = [];
//   let sum = 0;
//   for (let idx = 0; idx < arr.length; idx++) {
//     sum = sum + arr[idx];
//     sumArr.push(sum)
//   }
//   return sumArr.reduce((a, b) => a + b)
// }
// using list processing functions
function sumOfSums(arr) {
  let sum = 0;
  let sumArr = arr.map((el ,idx) => {
    return sum += arr[idx];
  });
  return sumArr.reduce((a, b) => a + b);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35