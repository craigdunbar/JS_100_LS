/*
# -----------------------INSTRUCTIONS------------------------
Grocery List
Write a function that takes a grocery list in a two-dimensional 
array and returns a one-dimensional array. 
Each element in the grocery list contains a fruit name and a 
number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears the number of times equal to its desired quantity.

# --------------------------PROBLEM--------------------------

# Input: nested array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
# ----------------------------ALGO---------------------------
define and empty array
iterate over the given array
for each subarray generate an array of undefineds then map them with the value of elment
at index 0
push this new array to the empty array
return the new array flattened
*/
function buyFruit(arr) {
  let newArr = [];
  arr.forEach(subArr => {
    newArr.push([...Array(subArr[1])].map(el => el = subArr[0]))
  })
  return newArr.flat();
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]