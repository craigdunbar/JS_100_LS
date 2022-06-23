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
# initalise an array with two elements each with value 1
initalise a loop that will start at a count of 3 and interate the given number of times
the funciton should add the previous two array elements together and add the
result at the end of the array
return the last element of the array
*/
function fibonacci(n) {
    let fibArr = [1, 1];
    for (let count = 2; count < n; count ++) {
        let sum = fibArr[count - 1] + fibArr[count - 2]
        fibArr.push(sum)
    }
    return fibArr[fibArr.length - 1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050