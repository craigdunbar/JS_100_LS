/*
# -----------------------INSTRUCTIONS------------------------
# How old is Teddy?
Write a program that randomly generates a number between
20 and 120 and log to the console with as Teddy's age.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: string
# ---------------------------RULES---------------------------
# Explicit: number between 20 and 120 inclusive

# Implicit: 

# --------------------------EXAMPLES-------------------------
Teddy is 69 years old!
# ----------------------------ALGO---------------------------
# use Math.random()
must use 121 as upper range of 120 wouldn't be included
per the MDN documentation.
Math.random returns a floating point number between 0 and 1
so we must multiply that by the range to get the 
desired return value.
Also must add the lower limit to ensure we don't return 0
written as:
Math.random() * (max -min) + min;
*/
let age = Math.random() * (121 - 20) + 20;
console.log(`Teddy is ${Math.round(age)} years old`);