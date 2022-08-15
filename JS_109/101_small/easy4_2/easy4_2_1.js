/*
# -----------------------INSTRUCTIONS------------------------

# How Old is Teddy?

Build a program that randomly generates Teddy's age, 
and logs it to the console. Have the age be a random number 
between 20 and 120 (inclusive).

# --------------------------PROBLEM--------------------------

# Input: 
# Output: integer between 20 and 120
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
Teddy is 69 years old!
# ----------------------------ALGO---------------------------
# generate a random number between 20 and 120
use string interpolation to add the number 
*/
let num = Math.random() * (120 - 20) + 20;
let age = Math.floor(num);
console.log(`Teddy is ${age} years old!`)