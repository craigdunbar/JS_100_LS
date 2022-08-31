/*
# -----------------------INSTRUCTIONS------------------------
Grocery List
Write a function that takes a grocery list in a two-dimensional 
array and returns a one-dimensional array. 
Each element in the grocery list contains a fruit name and a 
number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears the number of times equal to its desired quantity.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
# ----------------------------ALGO---------------------------
# given the arr argument we can loop through the array and
generate a sub array with the number of elements indicated as the second element
we can then map this new array with the first element
we can use the spread operator and Array method
*/
function buyFruit(array) {
  let listArr = [];
  array.forEach(subArr => {
    let [fruit, count] = subArr;
    listArr = listArr.concat([...Array(count)].map(el => el = fruit));
  })
  return listArr;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]