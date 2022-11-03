/*
# -----------------------INSTRUCTIONS------------------------

# Create a function that takes two arguments: starting number 
and end number and returns an array with numbers starting from 
startNumber and ending on endNumber.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]

# ----------------------------ALGO---------------------------
# 
given the two number arguments
initalise a loop that starts at num1 and ends at num2
on each iteration add num to an array
return the array

*/
function generateArr(num1, num2) {
  let arr = [];
  for (let count = num1; count <= num2; count++) {
    arr = arr.concat(count)
  }
  console.log(arr)
}
generateArr(3, 10) // 
// [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]