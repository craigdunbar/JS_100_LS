/*
# -----------------------INSTRUCTIONS------------------------
When Will I Retire?
Build a program that logs when the user will retire 
and how many more years the user has to work until retirement.

# --------------------------PROBLEM--------------------------

# Input: two integers representing age and desired retirement age
# Output: string stating current year and year of retirment and age at retirement
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
# ----------------------------ALGO---------------------------
# use readline-sync to get the two inputs
define a variable for current year and use Date() method to get the year
calculate the retirement year
calculate how many years to retirement
*/
let rlSync = require('readline-sync');
let age = rlSync.question('What is your age?: ');
let retireAge  = rlSync.question('At what age do you want to retire?: ');
let yearsToRetire = retireAge - age;

let currentYear = new Date().getFullYear();
let retireYear = currentYear + yearsToRetire;
console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`(You only have ${yearsToRetire} years of work to go!`);
