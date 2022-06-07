/*
# -----------------------INSTRUCTIONS------------------------
List of Digits
Write a function that takes one argument, a positive integer, 
and returns a list of the digits in the number.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
# ----------------------------ALGO---------------------------
# conert the given integer to a string.
split the string into digits
loop through the array of strings and convert each one to a number ??
*/
function digitList(num) {
  return (String(num).split('')).map((el) => Number(el));
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]