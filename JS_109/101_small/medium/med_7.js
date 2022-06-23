/*
# -----------------------INSTRUCTIONS------------------------

Fibonacci Numbers (Procedural)
Rewrite your recursive fibonacci function so that it computes its 
results without using recursion.
# --------------------------PROBLEM--------------------------

# Input: number
# Output: fibonnaci number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
# ----------------------------ALGO---------------------------
# fib sequence 1 1 2 3 5 8 13 etc
initalise two variables to hold the previous two values 
ie fib(3) = first value + second value => 1 + 1
fib(4) = second value + third value => 1 + 2
we need to reassign the two variables on each iteration 
the last value is the result of adding the previous two together and the 
second last value becomes the previous last value
*/
function fibonacci(n) {
  let secondValue = 1;
  let lastValue = 1;
  for (count = 2; count < n; count++) {
    let newValue = lastValue + secondValue;
    secondValue = lastValue;
    lastValue = newValue;
  }
   return lastValue; 
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050