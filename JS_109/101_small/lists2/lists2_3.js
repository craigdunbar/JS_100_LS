/*
# -----------------------INSTRUCTIONS------------------------

Multiply All Pairs

Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.e

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: You may assume that neither argument will be an empty array.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
# ----------------------------ALGO---------------------------
# given the two array arguments 
initalise an empty array
iterate over the first array an mulitply each element by all the elements
in the second array
push each result to the new empty array
sort the new array into ascending order
return the new array 
*/
function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  arr1.forEach(el => {
    for (let count = 0; count < arr2.length; count++) {
      newArr.push(el * arr2[count])
    }
  })
  return newArr.sort((a, b) => a - b);
}
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]