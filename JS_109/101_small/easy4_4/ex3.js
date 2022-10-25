/*
# -----------------------INSTRUCTIONS------------------------
When Will I Retire?
Build a program that logs when the user will retire 
and how many more years the user has to work until retirement.


# --------------------------PROBLEM--------------------------

# Input: user input
# Output: strings 
# ---------------------------RULES---------------------------

# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
# ----------------------------ALGO---------------------------
# use readline-sync to get the user input
calculate the year of retirement
calculate the number of years to retirement 
calculate the year of retirement.
logged with string interpolation
*/
let rlSync = require('readline-sync');
let age = rlSync.question('What is your age? ');
let retireAge = rlSync.question('At what age do you want to retire? ');

let yearsToRetire = retireAge - age;
let currentYear = new Date().getFullYear();
let retireYear = currentYear + yearsToRetire;

console.log(`It's ${currentYear}. You will retire in ${retireYear}`);
console.log(`You only have ${yearsToRetire} years of work to go!`);

