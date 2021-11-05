/*
# -----------------------INSTRUCTIONS------------------------
# Array Average
Given an array or integers, return the average of the
intgers rounded down to the integer component

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
# ----------------------------ALGO---------------------------
# initalize a function with array arg
iterater through the elements of the array
add each elements value to the total to get the
sum of all the elements.
divide the sum by the number of elements to get the 
avarage.
*/
// function average(array) {
//   let sum = 0
//   for (let idx = 0; idx < array.length; idx++) {
//     sum += array[idx];
//   }
//   return ave = Math.floor(sum/array.length);
// }
// using reduce
function average(array) {
  let sum = array.reduce((total, element) => {
    return total += element
  }, 0)
  return ave = Math.floor(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40