/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 2)
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you 
want to rotate to the end and shift the remaining digits to the left.


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
# ----------------------------ALGO---------------------------
split the number into an array of string digits
given the number and the count 
use splice and the count to remove the digit from the array
use push to add it to the end of the array
*/
function rotateRightmostDigits(num, count) {
  let arr = num.toString().split('')
  let digit = arr.splice(-count, 1)
  arr = arr.concat(digit)
  return Number(arr.join(''));
}
console.log(rotateRightmostDigits(735291, 1) ===  735291)
console.log(rotateRightmostDigits(735291, 2) ===  735219)
console.log(rotateRightmostDigits(735291, 3) ===  735912)
console.log(rotateRightmostDigits(735291, 4) ===  732915)
console.log(rotateRightmostDigits(735291, 5) ===  752913)
console.log(rotateRightmostDigits(735291, 6) ===  352917)