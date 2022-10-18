/*
# -----------------------INSTRUCTIONS------------------------
Greeting a user

Write a program that asks the user for their name.
The program will greet the user.
If the user writes 'name!' then the computer yells back.

# --------------------------PROBLEM--------------------------

# Input: string input from user
# Output: string or uppercase string
# ---------------------------RULES---------------------------
# Explicit: return string in uppercase if user ends name in !

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
# ----------------------------ALGO---------------------------
# use readline-sync to get the user name
if the input doesn't end with a ! log "Hello name"
else if the name ends with a ! log the uppercase reply
*/
let rlSync = require('readline-sync');
let name = rlSync.question('What is you name? ');
if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}`);
}