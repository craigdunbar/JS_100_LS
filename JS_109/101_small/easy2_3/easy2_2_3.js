/*
# -----------------------INSTRUCTIONS------------------------
Greeting a user

Write a program that asks the user for their name.
The program will greet the user.
If the user writes 'name!' then the computer yells back.

# --------------------------PROBLEM--------------------------

# Input: user inputs name
# Output: uppercase if name ends in !
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
# ----------------------------ALGO---------------------------
# use readline-sync to get the input from the user
if the user name endsWith ! uppercase the greeting 
else return normal case greeting
*/
let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?');
if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}