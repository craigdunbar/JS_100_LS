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

# Input: 
# Output: 
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

define an empty array to hold the subarrays
get the length of the array argument
half the length using Math.ceil to get the higher number if odd length
split the array into two subarrays using the half length value
*/
function halvsies(arr) {
  let splitArr = [];
  let half = Math.ceil(arr.length / 2)
  let first = arr.slice(0, half);
  let second = arr.slice(half)
  splitArr.push(first, second)
  return splitArr;
}
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]