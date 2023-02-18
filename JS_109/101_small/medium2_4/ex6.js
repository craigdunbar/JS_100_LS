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
12
generate an array from one to the given integer
use Array.from(num) and then map 
then calculate the square tof the sum using reduce
also calculate the sum of the squares
get the difference and return it
*/
function sumSquare(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  let sumSquare = arr.reduce((acc, el) => acc + el, 0) **2
  let squareSum = arr.reduce((acc, el) => acc + el **2, 0)
  return sumSquare - squareSum;
}

console.log(sumSquare(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquare(10));     // 2640
console.log(sumSquare(1));      // 0
console.log(sumSquare(100));    // 25164150