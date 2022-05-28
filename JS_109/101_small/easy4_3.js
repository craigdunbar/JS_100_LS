/*
# -----------------------INSTRUCTIONS------------------------
When Will I Retire?
Build a program that logs when the user will retire 
and how many more years the user has to work until retirement.

# --------------------------PROBLEM--------------------------

# Input: two integers from user
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
# ----------------------------ALGO---------------------------
# ask user for current age and age at retirement
calculate retirememt year and how long left to work and log both
values using string literals
*/
let rlSync = require('readline-sync');
let age = rlSync.question("How old are you?: ");
let retire = rlSync.question("What age do you want to retire?: ");

let currentYear = 2022;
let retirementYear = currentYear + (retire - age);
let yearsToRetirement = retire - age

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You have ${yearsToRetirement} years left to work.`)