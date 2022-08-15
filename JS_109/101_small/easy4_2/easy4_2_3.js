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

BEYOND?

# --------------------------EXAMPLES-------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
# ----------------------------ALGO---------------------------
# use readline_sync to get user input
asl user for age
ask user for age at retirement
set a year variable to 2022
log statements using string interpolation
*/
let currentYear = 2022
let rlSync = require('readline-sync');

let age = rlSync.question('What is you age? ');
let retireAge = rlSync.question('What age would you like to retire: ');
let yearsToRetire = retireAge - age
let retirementYear = currentYear + yearsToRetire

 console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
 console.log(`You only have ${yearsToRetire} years of work to go!`);