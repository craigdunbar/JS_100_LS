/*
# -----------------------INSTRUCTIONS------------------------
Multiply two numbers 

Write a function that takes two arguments, multiplies them
together and returns the result.

# --------------------------PROBLEM--------------------------

# Input: two integers
# Output: product of the two integers
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: numbers are positive integers

# --------------------------EXAMPLES-------------------------
console.log(multiply(5, 3) === 15); // logs true
# ----------------------------ALGO---------------------------
# define a function with two parameters num1 and num2
define a total variable and addign it the value of num1*num2
return total
*/
function multiply(num1, num2) {
  let total = num1 * num2;
  return total;
}
console.log(multiply(5, 3) === 15); // logs true