/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Number Location By Length

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
such that the 
first two numbers are 1 by definition, and each subsequent number is 
the sum of the two previous numbers. 

Write a function that calculates and returns the index of the first Fibonacci number 
that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: argument always an integer greater than 2

# Implicit: 

# --------------------------EXAMPLES-------------------------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
# ----------------------------ALGO---------------------------
# define an array with the first two elements having the value of 1
the subsequent elements are the sum of the perviuos two 
initialise a loop to add the next fib to the array
repeat this until the element pushed to the array has a length the same 
as the argument provided
ie id argument is 2 then the array will be [1, 1, 2, 3, 5, 8, 13] since 13 has
two digits this is the number that will be returned.
*/
// function findFibonacciIndexByLength(num) {
//   let fibArr = [1, 1];
//   let count = 2
//   do {
//     nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
//     fibArr = fibArr.concat(nextFib)
//     count ++;
//   } while (String(fibArr[fibArr.length - 1]).length < num)
//   return `${count}n`
// }
// the above works but it times out on execution

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
console.log(findFibonacciIndexByLength(2n)) //=== 7n;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)) //=== 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) //=== 45n;
console.log(findFibonacciIndexByLength(16n)) //=== 74n;
console.log(findFibonacciIndexByLength(100n)) //=== 476n;
console.log(findFibonacciIndexByLength(1000n)) //=== 4782n;
console.log(findFibonacciIndexByLength(10000n)) //=== 47847n;