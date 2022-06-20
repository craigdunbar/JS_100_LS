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

# Input: number
# Output: max rotated number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
# ----------------------------ALGO---------------------------
# given example:
735291 first digit moves to end
352917 second digigt moves
329175 third digit moves
321759 fourth
321597 fifth
321579 sixth 
use the same function as the previous exercise but this time iterate over
the length of the numArr to select which digit to move on each iteration
starting at the first digit and moving in ascneding order through the array
until numArr.length digits have been moved.

*/
// function maxRotation(num) {
//   let numArr = String(num).split('');

//   for (let count = 0; count <= numArr.length; count++) {
//     let digit = numArr.splice(count, 1);
//     numArr = numArr.concat(digit);
//   }
// return Number(numArr.join(''));
// }

// calling rotateRIghtmostDigits function from previous exercise

function maxRotation(num) {
  let numArr = String(num).split('');

  for (let count = numArr.length; count > 0; count--) {
    num = rotateRightmostDigits(num, count)
  }
return num;
}

function rotateRightmostDigits(num ,count) {
  let numArr = String(num).split('');
  let digit = numArr.splice(-count, 1);
  return Number(numArr.concat(digit).join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845