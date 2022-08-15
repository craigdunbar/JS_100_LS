/*
# -----------------------INSTRUCTIONS------------------------

Squaring an Argument

Using the previous multiply() function write a function that
computes the square of its argument 

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: result of integer squared
# ---------------------------RULES---------------------------
# Explicit: use previous multiply function

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
# ----------------------------ALGO---------------------------
# 
*/

function multiply(num1, num2) {
  return num1 * num2;
}
function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true