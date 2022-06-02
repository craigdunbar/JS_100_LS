/*
# -----------------------INSTRUCTIONS------------------------

# Combining Arrays
Write a function that takes two arrays as arguments and returns 
an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: one new array
# ---------------------------RULES---------------------------
# Explicit: 
You may assume that both arguments will always be arrays.

# Implicit:

# --------------------------EXAMPLES-------------------------
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
# ----------------------------ALGO---------------------------
# define a function with two array parameters
initalise a new empty array
add arr2 to arr1
iterate over arr1 and add the elements to newArr
if the last element of newArr is the same as the next element in arr1 don't add it
return the newArr of unique values
*/
// function union(arr1, arr2) {
//   let newArr = [];
//   arr1.push(arr2)
//   arr1 = arr1.flat();
//   for (let idx = 0; idx < arr1.length; idx++) {
//     if (!newArr.includes(arr1[idx])) {
//       newArr.push(arr1[idx]);
//     }
//   }
//   return newArr;
// }
// using array.concat instead of push since concat doesn't nest 
// and new Set to remove duplicates 
function union(arr1, arr2) {
  // return Array.from(new Set(arr1.concat(arr2)))
  return ([... new Set(arr1.concat(arr2))]);


}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
