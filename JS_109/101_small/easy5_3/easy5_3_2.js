/*
# -----------------------INSTRUCTIONS------------------------
# Combining Arrays
Write a function that takes two arrays as arguments and returns 
an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: array
# ---------------------------RULES---------------------------
# Explicit: You may assume that both arguments will always be arrays.

# Implicit: 

# --------------------------EXAMPLES-------------------------
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
# ----------------------------ALGO---------------------------
# use the spread operator to combine the two arrays
use the new Set function to remove the duplicates
*/
function union(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return [...new Set(newArr)];
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]