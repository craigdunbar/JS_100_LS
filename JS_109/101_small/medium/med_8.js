/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Numbers (Memoization)
Memoization is an approach that involves saving a computed answer 
for future reuse, instead of computing it from scratch every time it is needed. 
In the case of our recursive fibonacci function, using memoization saves 
calls to fibonacci(nth - 2) because the necessary values have already been 
computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive 
fibonacci function to use memoization.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
# ----------------------------ALGO---------------------------
# initalise an array with two elements each with value 1
initalise a loop that will start at a count of 3 and interate the given number of times
the funciton should add the previous two array elements together and add the
result at the end of the array
return the last element of the array
*/
function fibonacci(n) {
  let fibArr = [1, 1];
  for (let count = 2; count < n; count ++) {
    fibArr.push(fibArr[count - 1] + fibArr[count - 2]);
  }
  return fibArr[fibArr.length - 1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
