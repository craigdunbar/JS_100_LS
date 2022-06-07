/*
# -----------------------INSTRUCTIONS------------------------
Multiply Lists
Write a function that takes two array arguments, each containing 
a list of numbers, and returns a new array that contains the 
product of each pair of numbers from the arguments that have 
the same index. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: You may assume that the arguments contain the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
# ----------------------------ALGO---------------------------
# initalise an empty array
initalise a for loop that's equal to the size of one of the arrays
using the count of the loop
multiply the vlaues of elements with the same index from each array
push this value to the new array
*/
function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx] * arr2[idx]);
  }
  return newArr;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
