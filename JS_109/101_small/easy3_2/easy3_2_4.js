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

# Input: positive integer
# Output: index of fibonacci number with given integer number of digits
# ---------------------------RULES---------------------------
# Explicit: 

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

// The last example may take a minute or so to run.
# ----------------------------ALGO---------------------------
# initalise an array with first two elements equal to one
the next digit in the array is the sum of the previous two digits
initalise a loop that continues to add elements to the array until
the element has the same number of digits as the given integer
check the number of dogots in the element by converting the element to a string
and getting it's length
if the str.length is less than integer continue
else break

*/
function findFibonacciIndexByLength(digits) {
  let num = parseInt(digits)
  let arr = [1, 1];
  let numOfDigits = 0
  do {
    let nextFib = (arr[arr.length - 2] + arr[arr.length - 1]);
    arr.push(nextFib)
    numOfDigits = Number(String(arr[arr.length - 1]).length)
  } while (numOfDigits !== num)
  return `${arr.length}n`;
}

console.log(findFibonacciIndexByLength(2n)); //=== 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)) //=== 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) //=== 45n;
console.log(findFibonacciIndexByLength(16n)) // === 74n;
console.log(findFibonacciIndexByLength(100n)) // === 476n;
console.log(findFibonacciIndexByLength(1000n)) // === 4782n;
console.log(findFibonacciIndexByLength(10000n)) //=== 47847n;