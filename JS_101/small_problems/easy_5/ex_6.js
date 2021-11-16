/*
# -----------------------INSTRUCTIONS------------------------
# Multiplucative average
Given an array of integers, multiply all integers
together and print the average as a string rounded tp
3 decimal points

# --------------------------PROBLEM--------------------------

# Input: array
# Output: string
# ---------------------------RULES---------------------------
# Explicit: round to 3 decimal

# Implicit: arr not empty, all integers greater than 0

# --------------------------EXAMPLES-------------------------
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
# ----------------------------ALGO---------------------------
# initalise function with array arg
iterate through the array to get product of all values
get number of elements in the array
calculate average
diaplay everage to 3 decimal points
*/
function multiplicativeAverage(array) {
  let newArr = array.reduce((previous, current) => {
    return previous * current
  }, 1)
  let average = newArr/ array.length
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"