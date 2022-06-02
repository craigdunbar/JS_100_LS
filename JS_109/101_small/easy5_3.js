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
# define a function with array parameter
initalise an empty array
calculate the midpoint of the given array rounding up if odd
add the elements form 0 to midpoint to first element of new array
add the elements from midpoint + 1 to end of array to second element of new array
return new array

*/
function halvsies(arr) {
  let newArr = [];
  let middle = Math.ceil((arr.length / 2));

  let first = arr.slice(0, middle);
  newArr.push(first);

  let second = arr.splice(middle, (arr.length - 1));
  newArr.push(second);

  return newArr;
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]