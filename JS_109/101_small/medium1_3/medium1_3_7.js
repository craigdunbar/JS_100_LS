/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Numbers (Procedural)
Rewrite your recursive fibonacci function so that it computes its 
results without using recursion.

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
# to do this procedurally we need two variables
last and second last
these varibale will hold the values of the previuos fibs
and allow us to calculate the current fib
need a loop to generate the fib on the nth iteration
*/
function fibonacci(n) {
let last = 1;
let secondlast = 1;

for (let count = 2; count < n; count ++) {
  current = secondlast + last 
  last = secondlast;
  secondlast = current
}
return secondlast;
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050