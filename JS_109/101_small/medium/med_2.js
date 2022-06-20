/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 2)
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you 
want to rotate to the end and shift the remaining digits to the left.

# --------------------------PROBLEM--------------------------

# Input: number
# Output: number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
# ----------------------------ALGO---------------------------
# use slice(-num) to select the number that is to be moved
then concat the rest of the number 

*/
function rotateRightmostDigits(num ,count) {
  let numArr = String(num).split('');
  let digit = numArr.splice(-count, 1);
  return Number(numArr.concat(digit).join(''));
}
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);