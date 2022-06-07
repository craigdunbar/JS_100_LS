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
# Output: integer representing an index 
# ---------------------------RULES---------------------------
# Explicit: first two fib number are always 1
Given arguement is always greater than or equal to 2

# Implicit: 

# --------------------------EXAMPLES-------------------------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
# ----------------------------ALGO---------------------------
# initialize an array with two elements both of value 1
initalize a loop with a counter starting at 3
on each iteration we add a new element who's
value is equal to the sum of the previous two elements
once this new value is added check the number of digits
if the number of digits matches the provided argument, stop the iteration.
 - change last array element to a string, then split to an array and then get the length
 return the counter, this is the index of the element with the correct number of digits
if not continue
*/

function findFibonacciIndexByLength(digits) {
  let arr = [1, 1];
  let numOfDigits = Number(digits);
  do {
    nextElement = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextElement);
  } while (String(arr[arr.length - 1]).split('').length !== numOfDigits);
  return (`${arr.length}n`);
}
console.log(findFibonacciIndexByLength(2n)); // === 7n;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)); // === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)); // === 45n;
console.log(findFibonacciIndexByLength(16n)); // === 74n;
// console.log(findFibonacciIndexByLength(100n)); // === 476n;
// console.log(findFibonacciIndexByLength(1000n)); //=== 4782n;
// console.log(findFibonacciIndexByLength(10000n)); //=== 47847n;