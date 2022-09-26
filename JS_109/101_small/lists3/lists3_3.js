/*
# -----------------------INSTRUCTIONS------------------------
Multiply All Pairs

Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.e

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
# ----------------------------ALGO---------------------------
# define a new array 
iterate over the first array argument 
within this iteration start another loop that will iterate over the values
in  the second array
multiply the element in first array by the values in the second array
push each result to the new array
repeat this process for all elements in first array
sort the new array and return it
*/
function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  for (let count = 0; count < arr1.length; count++) {
    for (let index = 0; index < arr2.length; index ++) {
      let result = arr1[count] * arr2[index];
      newArr.push(result);
    }
  }
  return newArr.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]