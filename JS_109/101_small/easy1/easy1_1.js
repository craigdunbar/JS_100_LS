/*
# -----------------------INSTRUCTIONS------------------------
Isn't it odd?

Write a funciton that takes one integer argument, which may
be positive, negative or zero. This method returns true if the
number's absolute value is odd.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string true or false
# ---------------------------RULES---------------------------
# Explicit: Argument is a valid interger
            return true or false

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
# ----------------------------ALGO---------------------------
# define the fucntion isOdd with one parameter called num
use Math.abs() to get the absolute value of the integer.
if the absolute value is odd return true
else return false
*/
function isOdd(num) {
  let absNum = Math.abs(num);
  if (absNum %2 === 1) {
    return 'true';
  } else {
    return 'false'
  }
}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true