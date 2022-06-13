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
# using map to create a new array
each given array element can be transformed using the spread operator to create 
an array from the value of el[0], el[1] times.
*/
function buyFruit(array) {
    return array.map((subArr, idx) => [...Array(subArr[1])]
                .map(el => array[idx][0])).flat();
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]