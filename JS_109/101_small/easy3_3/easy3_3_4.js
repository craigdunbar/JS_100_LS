/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Number Location By Length

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the 
first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. 

Write a function that calculates and returns the index of the first Fibonacci number 
that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer representing an index value
# ---------------------------RULES---------------------------
# Explicit: argument always an integer greater than 2

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
# ----------------------------ALGO---------------------------
# define an array with two elements each with value of 1
initalize a loop that will start at 2 and stop when the iteration has the same number of
digits as the provided integer argument
on each iteration the result of adding the two previous elemtns in the array will
be pushed to the array
when the last element in  the array has the desired number of digits break and
return the index number of the last element

*/
function findFibonacciIndexByLength(digits) {
  let num = Number(digits)
  let arr = [1,1]
  let count = 2n;
  let result = 0;
  while (true) {
    result = (arr[arr.length - 1] + arr[arr.length - 2])
    count ++;
    arr.push(result);
    if (String(arr[arr.length - 1]).split('').length === num) break;
  }
  console.log(count);
}
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);