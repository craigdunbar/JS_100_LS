/*
# -----------------------INSTRUCTIONS------------------------
Grocery List
Write a function that takes a grocery list in a two-dimensional 
array and returns a one-dimensional array. 
Each element in the grocery list contains a fruit name and a 
number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears 
the number of times equal to its desired quantity.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
# ----------------------------ALGO---------------------------
# 
define an empty array 
iterate over the given array 
for each element in  the array add element 0 to the empty array element 1 times
return the new array
*/
function buyFruit(arr) {
  let fruitArr = [];
  arr.forEach( subArr => {
      fruitArr = fruitArr.concat(([...Array(subArr[1])].map(el => el = subArr[0]))); 
  });
  return fruitArr;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]