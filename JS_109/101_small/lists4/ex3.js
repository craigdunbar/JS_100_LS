/*
# -----------------------INSTRUCTIONS------------------------

Multiply All Pairs

Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 
You may assume that neither argument will be an empty array.
# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
# ----------------------------ALGO---------------------------
define an empty array
iterate over the first array argument
multiply the first element by the elements in the second array 
push the result to the new array
do this for all elements in first array

return the new array
*/
function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i ++){
    for (let j = 0; j < arr2.length; j++) {
      newArr.push(arr1[i] * arr2[j])
    }
  }
  return newArr.sort((a,b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]