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
convert the given number into an array of string numbers
iterate over the array with a counter starting at 0
move this element at index 0 to the end of the array
on the next iteration move the elemtn at index 1 to the end and so on
continue the iteration until the counter === arr.length - 1
return the array joined back into a number
*/
function maxRotation(num) {
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length - 1; i++) {
    let digit = arr.splice(i, 1)
    arr = arr.concat(digit)
  }
  return Number(arr.join(''))
}
console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3)       === 3);
console.log(maxRotation(35)     === 53);
console.log(maxRotation(105)    === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);