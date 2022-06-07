/*
# -----------------------INSTRUCTIONS------------------------
Greeting a user

Write a program that asks the user for their name.
The program will greet the user.
If the user writes 'name!' then the computer yells back.

# --------------------------PROBLEM--------------------------

# Input: string containing name from user
# Output: sting or string in uppercase
# ---------------------------RULES---------------------------
# Explicit: return string in uppercase if user ends name in !

# Implicit: 

# --------------------------EXAMPLES-------------------------
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
# ----------------------------ALGO---------------------------
# use require to install readline 
ask the user for their name.
initalise a 'name' variable and assign the result of readline.question()
to the name variable.
if the name end with '!' return an uppercase greeting
else return a regular greeting.

*/
let readline = require('readline-sync');
console.log("What is your name?");
let name = readline.question();
if (name.endsWith('!')) {
  name = name.slice(0, -1)
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
