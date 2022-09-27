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
define a function with an integer and an index arguments 
convert the integer to an array of digits
use splpice to remove the deired element from the array
use concat to add this element to the end of the array
*/
function rotateRightmostDigits(integer, index) {
 let numArr = String(integer).split('');
 let element = numArr.splice(-index, 1)
//  console.log(element);
 numArr = numArr.concat(element);
 return Number(numArr.join(''));
}
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);