/*
# -----------------------INSTRUCTIONS------------------------
Fibonacci Numbers - Procedural

Re-write the recursive fibonacci fucntion from the last 
exercise so that it computes it's result without using
recursion.

# --------------------------PROBLEM--------------------------

# Input: number
# Output: result of fibonacci sequence on given number
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
# ----------------------------ALGO---------------------------
# 
initalise a funciton with an integer paramater
initalise an new array called fibArr with elements [1, 1]
if the given integer is 1 return 1
if the given integer is 2 return 1
initalise a loop
ie while count < integer 
if the integer is >2 the fib value is the sum of
integer[index -1] + integer[index - 2]
push this result to the fibArr
until count = integer
return the fib value for the given integer
*/
 function fibonacci(number) {
  let fibArr = [1, 1];
  let count = 2;
  if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 1;
  } else if (number > 2) {
    while (count < number) {
      fibArr.push(fibArr[count -1] + fibArr[count - 2]);
      count ++;
    }
  }
  return fibArr[fibArr.length - 1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
