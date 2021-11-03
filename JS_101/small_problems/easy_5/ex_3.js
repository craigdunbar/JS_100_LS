/*
# -----------------------INSTRUCTIONS------------------------
# Halvsies
Write a function that takes an array and returns
two arrays with the values of the original array
split between first half and second half.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: nested array
# ---------------------------RULES---------------------------
# Explicit: if odd number of elemnts, first half is bigger

# Implicit: 

# --------------------------EXAMPLES-------------------------
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
# ----------------------------ALGO---------------------------
# initalize a funtion with array arg
get half length of array
add first hald to a new array
add second half to the new array
print the new array
*/
function halvsies(arr) {
  let newArr = [];
  let half = Math.ceil(arr.length / 2);
newArr.push(arr.slice(0, half));
newArr.push(arr.slice(half, arr.length));
return newArr;
}


console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]