// let array = ['apple', 3];
// console.log([...Array(array[0].repeat(array[1]))]);


/*
# -----------------------INSTRUCTIONS------------------------

# Grocery List

# --------------------------PROBLEM--------------------------
Given a two dimensional array where each element is a fruit
name and a number, return a one dimensional array such that
each fruit name appears the number of times equal to the 
given number

# Input: nested array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: fruit name must appear the given number of times

# Implicit: 

# --------------------------EXAMPLES-------------------------
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
# ----------------------------ALGO---------------------------
# 
initalize a function with array parameter
initalize an empty array
for Each element in the original array, split the element
into a key and value pair.
initalise a loop where the key will be pushed to the new
array, the given number of times
repeat for the next element 
return the new array
*/

function buyFruit(array) {
  let newArr = [];
  array.forEach(fruitNumber => {
    let[key, value] = fruitNumber;
    for(let count = 0; count < value; count++) {
      newArr.push(key);
    }
  })
  return newArr;
}
// using map and fill
const buyFruit = (fruitList) => {
  return fruitList.map(([fruit, count]) => Array(count).fill(fruit)).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));