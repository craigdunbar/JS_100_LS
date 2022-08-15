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
given the integer argument calculate the absoulte value by using Math.abs(num)
then calcaulate if the abs number is odd by looking at the result of %2
*/
function isOdd(num) {
  let abs = Math.abs(num)
  if (abs % 2 === 1) {
    return true;
  } else {
    return false
  }
}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true