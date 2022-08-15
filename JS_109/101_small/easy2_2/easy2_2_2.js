/*
# -----------------------INSTRUCTIONS------------------------
Greeting a user

Write a program that asks the user for their name.
The program will greet the user.
If the user writes 'name!' then the computer yells back.

# --------------------------PROBLEM--------------------------

# Input: user inputs name
# Output: string or uppercase string
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
#get readline-sync
use readline-sync and question method to get user name
if user name ends with a !, return uppercase greeting
else return regular capitalised greeting
*/

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');

let length = name.length;
  if (name[length -1] === '!') { // could also use name.endsWith('!')
    console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`)
  } else {
    console.log(`Hello ${name}.`)
  }
