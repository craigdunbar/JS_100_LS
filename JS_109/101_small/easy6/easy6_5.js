/*
# -----------------------INSTRUCTIONS------------------------
Always Return Negative
Write a function that takes a number as an argument. 
If the argument is a positive number, return the negative of that number. 
If the argument is a negative number, return it as-is.

# --------------------------PROBLEM--------------------------

# Input: number
# Output: negative number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
# ----------------------------ALGO---------------------------
# use Math.abs() to get a non negative number for a negative or positive argument
subtract double the argument to get the negative value required.
*/
// function negative(num) {
//   return (Math.abs(num) - (2 * Math.abs(num)));
  // return Math.abs(number) * -1;
// }
// using ternary operator
function negative(num) {
return num < 0 ? num : num * -1
}
// this returns a negative zero.
// JavaScript actually has two different representations for zero: 
// positive zero, represented by +0 (or just 0), and negative zero, represented by -0.
// This is because JavaScript implements the IEEE Standard 
// for Floating-Point Arithmetic (IEEE 754), which has signed zeroes.
// https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114
// Use the function below to distinguish between a number and negative zero
function negative(num) {
  if (Object.is(num, -0)) return num;
  return(num >= 0 ? num * -1 : num);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0