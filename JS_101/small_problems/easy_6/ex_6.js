/*
# -----------------------INSTRUCTIONS------------------------
# Counting up
write a function that takes an integer arg and returns an array 
containing all integers between 1 and the arg in ascending order

# --------------------------PROBLEM--------------------------

# Input: integer  
# Output: array
# ---------------------------RULES---------------------------
# Explicit: integer is always positive

# Implicit: 

# --------------------------EXAMPLES-------------------------
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
# ----------------------------ALGO---------------------------
# initalise function with integer arg
initalise empty array
initalise iteration
add the integer as first element in the array
second element is int - 1 and so on, down to 1
then reverse the array and return it
*/
// function sequence(num) {
//   let arr = []
//   for (let count = 1; count <= num; count ++) {
//     arr.push(count);
//   }
//   return (arr);
// }

//using map
function sequence(num) {
  return ([...Array(num)].map((_, idx) => idx + 1));
}
/* [...Array(num)] creates a new array with the number
of values specified in its argument ie it returns:
[undefined,undefined,undefined,undefined,undefined].
Use map to set each element to index +1. We don't need the
first argument of the current element so use an underscore.
If underscore is not used then map will try to add 1 to undefined 
which returns NaN. 

*/
console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]