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
# Explicit: if odd number of elements make firdt element of new array bigger

# Implicit: 

# --------------------------EXAMPLES-------------------------
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
# ----------------------------ALGO---------------------------
# given the array argument calculate the no of elements
if even then split array into two halves
if odd slit array into Math.ceil(array.length / 2) for first array and
Math.floor(array.length / 2) for the second element
*/
function halvsies(arr) {
  let length = arr.length;
  let first = [];
  let second = [];
  // if(length % 2 === 0) { // don't need to determine if length is odd or even
  //   let half = ((arr.length / 2));
  //   first = arr.slice(0, half)
  //   second = arr.slice(arr.length/ 2);
  //   return [first, second]
  // } else {
    let half = Math.ceil(arr.length / 2);
    first = arr.slice(0, half)
    second = arr.slice(half);
    return [first, second]
  // }
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]