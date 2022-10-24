/*
# -----------------------INSTRUCTIONS------------------------
# How Old is Teddy?

Build a program that randomly generates Teddy's age, 
and logs it to the console. Have the age be a random number 
between 20 and 120 (inclusive).

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------

# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Teddy is 69 years old!
# ----------------------------ALGO---------------------------
# use Math.random() to generate the random float
use the range (MAx - min) + min (120 - 20) + 20
to get the correct range
use Math.floor to round down
*/
let age = Math.floor(Math.random() * ((120 - 20) + 20));
console.log(`Teddy is ${age} years old!`);