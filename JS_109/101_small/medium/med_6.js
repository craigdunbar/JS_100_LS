/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Numbers (Recursion)
The Fibonacci series is a sequence of numbers in which each number 
is the sum of the previous two numbers
 The first two Fibonacci numbers are 1 and 1.
 F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

Write a recursive function that computes the nth Fibonacci number, 
where nth is an argument passed to the function.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
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
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return n = fibonacci(n - 1) + fibonacci(n - 2)
    }
}
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765