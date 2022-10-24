/*
# -----------------------INSTRUCTIONS------------------------
Madlibs

Create a simple madlib program that prompts for a noun, 
a verb, an adverb, and an adjective, and injects them 
into a story that you create.

# --------------------------PROBLEM--------------------------

# Input: strings from user input
# Output: string using the users input
# ---------------------------RULES---------------------------

# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
# ----------------------------ALGO---------------------------
# use readline-sync to get the user input
use string interpolation to generate the string
*/
let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);


