/*
# -----------------------INSTRUCTIONS------------------------
Rotation Part 3
We are going to return the maximum rotation of the given 
number.
Meaning we will rotate the first number to the end, then the
new first number will freeze and we will move the second 
number to the end. Then the first and second numbers will
be frozen and we will rotate the third number and so on.

# --------------------------PROBLEM--------------------------

# Input: number
# Output: maximum rotation of the original number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Starting number  => 735291
1st rotation => 352917
2nd rotation => 329175  first digit fixed
3rd          => 321759  first 2 fixed
4th          => 321597  first 3 fixed
5th          => 321579  first 4 fixed

starting number = 105
1st rotation => 051
2nd          => 015 drop leading 0 return 15

# ----------------------------ALGO---------------------------
# initalise the function with number parameter.
convert the number to a string and then an array
use a loop to iterate over the number array.
within the loop use the previous exercise function 
to move the required integer to the back of the number.
on first iteration it will be the first element of the array
on the second iteration it will be the second element
third iteration the third element etc.
the iteration will finish at number array length - 1
return the rotated number.
*/
function maxRotation(number) {
  let numArr = String(number);
  for (let index = 0; index < numArr.length; index++) {
    numArr.push(numArr.splice(index, 1))
  }
  return Number(numArr.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// function rotateRightmostDigits(number, value) {
//   let numArr = String(number).split('');
//   let digit = numArr.splice(-value, 1);
//   numArr.push(digit);
//   return numArr.join('');
// }