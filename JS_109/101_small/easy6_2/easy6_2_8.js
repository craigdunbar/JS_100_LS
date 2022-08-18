/*
# -----------------------INSTRUCTIONS------------------------
Sequence Count
Create a function that takes two integers as arguments. 
The first argument is a count, and the second is the starting 
number of a sequence that your function will create. 
The function should return an array containing the same number 
of elements as the count argument. 
The value of each element should be a multiple of the starting number.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: count argument will always be an integer greater than or equal to 0
The starting number can be any integer
If the count is 0, the function should return an empty array.

# Implicit: 

# --------------------------EXAMPLES-------------------------
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
# ----------------------------ALGO---------------------------
#
define an empty array
define a counter and assign it a value of 0
initalise a loop
use the first argument as the end condition of the loop
use the second argument to increment the counter
push this result to the empty array
return the array
*/
// function sequence(num1, num2) {
//   let arr = [];
//   for (let idx = 1; idx <= num1; idx++) {
//     arr.push(idx * num2);
//   }
//   return arr
// }

// using map
function sequence(num1, num2) {
  return [...Array(num1)].map((el, idx) => el = (idx + 1) * num2);
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []