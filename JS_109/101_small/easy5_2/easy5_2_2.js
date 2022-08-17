/*
# -----------------------INSTRUCTIONS------------------------
# Combining Arrays
Write a function that takes two arrays as arguments and returns 
an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. 

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: one array that's the result of combining the two given arrays
# ---------------------------RULES---------------------------
# Explicit: no duplication

# Implicit: 

# --------------------------EXAMPLES-------------------------
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
# ----------------------------ALGO---------------------------
# xombine the second argument with the first
iterate over the second array and check the elements of first array
for a duplicate 
 - if no duplicate push the element to first array
 - if duplicate, continue to next element
*/
// function union(arr1, arr2) {
//   arr2.forEach(el => {
//     if (!arr1.includes(el)) {
//       arr1.push(el);
//     }
//   })
//   return arr1;
// }
// refactored using concat and new Set
function union(arr1, arr2) {
return [... new Set(arr1.concat(arr2))]
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]