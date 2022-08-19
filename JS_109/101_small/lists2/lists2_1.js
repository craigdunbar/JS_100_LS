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
# need to convert integer argument to string then split to array
then map this array into integers
then reduce to the sum of the integers
*/
function sum(num) {
  return num.toString()
  .split('')
  .map(el => Number(el))
  .reduce((a, b) => a + b)
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45