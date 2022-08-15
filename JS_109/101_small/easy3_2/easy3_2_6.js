/*
# -----------------------INSTRUCTIONS------------------------
Madlibs

Create a simple madlib program that prompts for a noun, 
a verb, an adverb, and an adjective, and injects them 
into a story that you create.


# --------------------------PROBLEM--------------------------

# Input: 4 strings from user
# Output: log a sentence using the users words
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

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
# use readline-sync to get user input
input a noun, verb, adjective, and adverb
use string interpolation to insert the users strings into some sentences
*/
let rlSync = require('readline-sync');
let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)