/*
# -----------------------INSTRUCTIONS------------------------
Multiplicative Average
Write a function that takes an array of integers as input, 
multiplies all of the integers together, divides the result 
by the number of entries in the array, and returns the 
result as a string with the value rounded to three decimal places.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: string with 3 dp
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
# ----------------------------ALGO---------------------------
# use reduce to get the product of all the elements in the 
array argument
divide this number by the number of elements in the array
return the number as a string with 3 decimal points
*/
function multiplicativeAverage(arr) {
  let int = arr.reduce((a, b) => a * b, 1);
  return (int/arr.length).toFixed(3);
}
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"