/*
# -----------------------INSTRUCTIONS------------------------
Multiply Lists
Write a function that takes two array arguments, each containing 
a list of numbers, and returns a new array that contains the 
product of each pair of numbers from the arguments that have 
the same index. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: one array with elements being product of given array elements
# ---------------------------RULES---------------------------
# Explicit: You may assume that the arguments contain the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
# ----------------------------ALGO---------------------------
# initalise an empty array
iniatlise an iteration 
iterate over the first array and multiply each element value by
the corresponding element of the second array
add this result to the new array
return the new array
*/
function multiplyLists(arr1, arr2) {
  let newArr = []
  for (let idx =0; idx < arr1.length; idx++) {
    let prod = arr1[idx] * arr2[idx];
    newArr.push(prod)
  }
  return newArr;
}
console.log(multiplyLists([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]