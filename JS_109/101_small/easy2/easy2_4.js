/*
# -----------------------INSTRUCTIONS------------------------
Squaring an Argument

Using the previous multiply() function write a function that
computes the square of its argument 

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: square of integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
# ----------------------------ALGO---------------------------
# 
*/
function multiply(num1, num2) {
  let total = num1 * num2;
  return total;
}
function multiply(num1, multiplier) {
  let total = num1 ** multiplier;
  return total;
}


function square(num, multiplier) {
  return multiply(num, multiplier);
}
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true
console.log(square(5, 3)); // logs true
