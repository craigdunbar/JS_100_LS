/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 3)
Take the number 735291 and rotate it by one digit to the left, 
getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits 
to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final 
two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the 
maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from 
the previous exercise.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
# ----------------------------ALGO---------------------------
# use the last exercise function
define a function with an integer parameter
convert the interger to an array of digits
start a loop at 0, that runs to the end of the array
use slice and the current count to select the didgit to be moved
use the function from the last exercise to create the new array on each iteration

return the final array
*/
function maxRotation(num) {
  let length = String(num).length
  for (let count = length; count > 0; count--) {
    num = rotateRightmostDigits(num, count)
    // console.log(arr)
  }
  return num;
}

function rotateRightmostDigits(integer, index) {
  let numArr = String(integer).split('');
  let element = numArr.splice(-index, 1)
  numArr = numArr.concat(element);
  return Number(numArr.join(''));
 }
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845