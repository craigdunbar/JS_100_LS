/* 
/*
# -----------------------INSTRUCTIONS------------------------

# Sum of sums

# --------------------------PROBLEM--------------------------
Write a function that takes an array argument and returns
the sum of the sums oe each leading subsequence in that array

# Input: array of integers
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: array is never empty

# Implicit: 

# --------------------------EXAMPLES-------------------------
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
# ----------------------------ALGO---------------------------
# 
initalize a function with array parameter
initalize an empty array
initialize a for loop to iterate thorugh the given array
add the first element to the newArr
For the subsequent elements we need to add the element to the total of the
last element of the newArr
repeat until all elements have been added.
perform another iteration ton the new array to get the sum of all element
return the total sum

using list processing funcitons.
map each element to the elemment + the previous element
then map this new array of subarrays with the sum of it's 
elements using reduce.
then reduce the outer array.

*/
// function sumOfSums(array) {
//   let newArr = []
//   for (let index = 0; index < array.length; index++) {
//     if(index === 0) {
//       newArr.push(array[index]);
//     } else {
//       total = newArr[index - 1] + array[index]
//     newArr.push(total);
//     }
//   }
//   return newArr.reduce((a, b) => a + b);
// }

function sumOfSums(array) {
  return array
    .map((_, index) => array.slice(0, index + 1).reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
}
console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));