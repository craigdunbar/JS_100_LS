/*
# -----------------------INSTRUCTIONS------------------------

Arithmetic Integer

Write a program that prompts the user for two integers 
and then prints the result of the following operations on
those two numbers: addition, subtraction, product, quotient
remainder and power

# --------------------------PROBLEM--------------------------

# Input: user inputs two integers
# Output: log result of mathemtical operations on the integers
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
# get readline-sync
use question method to ask user for two integers
assign to variables as integers using Number method
use console.log and string interpolation to display the result of the operations
use Math.floor to round the div result

*/
let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Enter the first number: "));
let num2 = Number(rlSync.question("Enter the second number: "));

let add = num1 + num2;
let sub = num1 - num2;
let multi = num1 * num2
let div = Math.floor(num1 / num2);
let mod = num1 % num2;

console.log(`${num1} + ${num2} = ${add}`);
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} * ${num2} = ${multi}`);
console.log(`${num1} / ${num2} = ${div}`);
console.log(`${num1} % ${num2} = ${mod}`);