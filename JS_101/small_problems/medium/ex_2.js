/*
# -----------------------INSTRUCTIONS------------------------
Rotation Part 2

Write a function that rotates the last count digits of a
number. 
Move the first of the digits to the end and shift the 
remaining digits to the left.

# --------------------------PROBLEM--------------------------

# Input: number and a single count variable
# Output: number with the integer at the given count variable
added to the end of the original number.
# ---------------------------RULES---------------------------
# Explicit: rotate the last count digits of the number.
            leave the rest of the number the same
# Implicit: 

# --------------------------EXAMPLES-------------------------
(735291, 1) => 1 is the count variable so we don't move anything
as it's already at the end so the number is 735291

(735291, 2) => the second last digit is 9, so this is moved
to the end of the number, so 735219 is returned.

(735291, 4) => the 4th from the right number is 5 so the 
returned number is 732915
# ----------------------------ALGO---------------------------
# initalise the function with two number parameters
convert the number to a string and then an array
take the second argument and use it to count back from 
the end of the first arguemnt to get the number that's to be
moved.
use splice() to remove the chosen element
use push to add it to the  end of the array
flatten the array to return the number

*/
function rotateRightmostDigits(number, value) {
  let numArr = String(number).split('');
  let digit = numArr.splice(-value, 1);
  numArr.push(digit);
  return numArr.join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917