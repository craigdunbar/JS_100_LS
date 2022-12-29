/*
# -----------------------INSTRUCTIONS------------------------
Sum Of Digits
Write a function that takes one argument, a positive integer, 
and returns the sum of its digits. 
Do this without using for, while, or do...while loops,
instead, use a series of method calls to perform the sum.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: do not use loops

# Implicit: 

# --------------------------EXAMPLES-------------------------
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
# ----------------------------ALGO---------------------------
conver the integer to a string, split into an array
use reduce() to get the sum of the digits
*/
function sum(num) {
  return num.toString()
            .split('')
            .reduce((acc, el) => acc = acc + Number(el), 0)
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45