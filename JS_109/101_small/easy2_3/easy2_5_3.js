/*
# -----------------------INSTRUCTIONS------------------------
Arithmetic Integer

Write a program that prompts the user for two integers 
and then prints the result of the following operations on
those two numbers: addition, subtraction, product, quotient
remainder and power

# --------------------------PROBLEM--------------------------

# Input: two integers input from user
# Output: result of calculations
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
# ----------------------------ALGO---------------------------
# use readline-sync to get the user input
return the calculations as above
*/
let rlSync = require('readline-sync');
let num1 = rlSync.question('Enter the first number: ');
let num2 = rlSync.question('Enter the second number: ');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
