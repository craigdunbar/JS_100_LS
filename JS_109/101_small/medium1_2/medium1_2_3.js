/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 3)
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the 
maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
# ----------------------------ALGO---------------------------
# working through the example 735291 
on first rotation move the first digit to the end.
then freeze the new first digit and move the second digit
then freeze the new second digit and move the third etc.
use the rotateRightmostDigit function from before
but this time initalise a loop with a counter where counter starts at 0
and ends at the number of digits in the given integer
*/
function maxRotation(num) {
  let length = num.toString().length
  for (let count = length; count > 0; count--) {
    num = rotateRightmostDigits(num, count)
  }
  return num;
}

function rotateRightmostDigits(int, count) {
  let digitsArr = int.toString().split('')
  let digit = digitsArr.splice(-count, 1);
  return Number(digitsArr.concat(digit).join(''));
}
// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845