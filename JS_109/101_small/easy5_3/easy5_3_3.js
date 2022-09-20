/*
# -----------------------INSTRUCTIONS------------------------
# Halvsies
Write a function that takes an array as an argument and returns 
an array that contains two elements, each of which is an array. 
Put the first half of the original array elements in the first 
element of the return value, and put the second half in the second element. 
If the original array contains an odd number of elements, 
place the middle element in the first half array.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: reutn array with two elements
for odd number of elements in original array make first element of new array bigger

# Implicit: array argument never empty

# --------------------------EXAMPLES-------------------------
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
# ----------------------------ALGO---------------------------
# 
define an empty array
determine the length of the array
determine half the length
if the length is odd then the firat array will contain 
half plus one elements 
push these elments to new array
else both elements will have exactly half of the array elements spplit
between the two new elemets

*/
function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let newArr = [];
 
  let right = arr.slice(0, half);
  let left = arr.slice(half);
  newArr.push(right, left);

  return newArr;
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]