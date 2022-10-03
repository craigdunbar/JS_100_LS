/*
# -----------------------INSTRUCTIONS------------------------
Sum Square - Square Sum

Write a function that computes the difference between the 
square of the sum of the given integer argument and the sum 
of the squares of the first given integer argument

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
 Explicit: argument is an integer

# Implicit: no non- negative integers

# --------------------------EXAMPLES-------------------------a
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
# ----------------------------ALGO---------------------------
# given the integer argument generate an array of the integers from 1 to the given integer
use array.reduce() to get the square of the sum
use reduce again to get the sum of the squares
calculate the difference and return the result
*/
function sumSquareDifference(num) {
  let arr = [...Array(num)].map((el, idx) => el = idx +1)
  let sumSquared = arr.reduce((a, b) => a + b) ** 2;
  let squaresSum = arr.reduce((a, b) => a + b ** 2);
  let result = sumSquared - squaresSum
  return result;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150