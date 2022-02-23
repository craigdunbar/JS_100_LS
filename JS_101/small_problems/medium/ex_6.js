/*
# -----------------------INSTRUCTIONS------------------------
Fibonnaci Numbers (recursion) 

Write a recursive function that computes the nth fibonacci 
number, where nth is an argument passed to the function.

# --------------------------PROBLEM--------------------------

# Input: starting integer
# Output: sum of the given onteger in a fibonacci sequence
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
# ----------------------------ALGO---------------------------
#
*/

function fibonacci(number) {
  if (number <= 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
