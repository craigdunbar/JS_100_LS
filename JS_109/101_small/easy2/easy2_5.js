/*
# -----------------------INSTRUCTIONS------------------------
Arithmetic Integer

Write a program that prompts the user for two integers 
and then prints the result of the following operations on
those two numbers: addition, subtraction, product, quotient
remainder and power

# --------------------------PROBLEM--------------------------

# Input: two integers
# Output: reuslts of performing the operations
# ---------------------------RULES---------------------------
# Explicit: dont need to validate input

# Implicit: 

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
==> 23 ** 17 = 1.4105003956066297e+23
# ----------------------------ALGO---------------------------
# 
*/
let readline = require('readline-sync');
let first = Number(readline.question("enter the first number: "));
let second = Number(readline.question("Enter the second number: "));
let sum = 
console.log(`${first} + ${second} = ${first + second}`);
console.log(`${first} - ${second} = ${first - second}`);
console.log(`${first} * ${second} = ${first * second}`);
console.log(`${first} / ${second} = ${Math.floor(first / second)}`);
console.log(`${first} % ${second} = ${first % second}`);
console.log(`${first} ** ${second} = ${first ** second}`);


