/*
# -----------------------INSTRUCTIONS------------------------
Isn't it odd?

Write a funciton that takes one integer argument, which may
be positive, negative or zero. This method returns true if the
number's absolute value is odd.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: boolean
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
# get the given integers absolute value
determine if the abs value is odd
return true or false
*/
function isOdd(num) {
  return Math.abs(num) % 2 === 1 ? true : false
}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true