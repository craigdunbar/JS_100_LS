/*
# -----------------------INSTRUCTIONS------------------------

# When will I retire
Write a program to log when the user will retire
and how many more years given the user inputs of age and 
age at retirment.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: number

two string input, converted to numbers
need the current year
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: inputs are positive numbers greater than 0

# --------------------------EXAMPLES-------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
# ----------------------------ALGO---------------------------
# get current age
get retirement age
calculate years to retirement
print current year.
print year they will retire.
print number of years of work left
*/
let rlSync = require('readline-sync');

console.log("What is your age?");
let age = Number(rlSync.prompt());
console.log("At what age do you want to retire?");
let retireAge = Number(rlSync.prompt());

let yearsLeft = retireAge - age;

let currentYear = new Date().getFullYear();
let retireYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.
You only have ${yearsLeft} years of work to go!`);