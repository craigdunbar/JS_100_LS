/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 2)
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you 
want to rotate to the end and shift the remaining digits to the left.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
# ----------------------------ALGO---------------------------
we need to be able to access the digit at the postiion given by the second argument
to do that given the integer argument, change the integer to a string, 
split the string into an array if digits
use array slice with the given argument made negative to return this element
then concat this element to the end of the array of characters
then join the array and coerce it back into an integer.
*/
function rotateRightmostDigits(int, count) {
  let digitsArr = int.toString().split('')
  let digit = digitsArr.splice(-count, 1);
  return Number(digitsArr.concat(digit).join(''));
}
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);