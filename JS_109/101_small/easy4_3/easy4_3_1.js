/*
# -----------------------INSTRUCTIONS------------------------
# How Old is Teddy?

Build a program that randomly generates Teddy's age, 
and logs it to the console. Have the age be a random number 
between 20 and 120 (inclusive).

# --------------------------PROBLEM--------------------------

# Input: 
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Teddy is 69 years old!
# ----------------------------ALGO---------------------------
# use Math.random() to generate a random floating pt number.
Since we have a range limitation we can use (max - min) + min to generate the required number
use Math.floor() to round down
*/
let num = Math.floor(Math.random() * (120 - 20) + 20);
console.log(`Teddy is ${num} years old`);