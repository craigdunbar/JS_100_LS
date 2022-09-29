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

# --------------------------EXAMPLES-------------------------a
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
# ----------------------------ALGO---------------------------
# inialize an array with first two elements having a value of 1
initalize a loop that starts ar 2 and ends at the value of given integer argument
on each iteration sum the previous two values in the array and the result gets 
added to the array 
return the last element in the array
*/
function fibonacci(n) {
  let arr = [1, 1];
  for (let count = 2; count < n; count++) {
    arr = arr.concat(arr[count -1] + arr[count - 2]);
  }
  return arr[arr.length - 1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050