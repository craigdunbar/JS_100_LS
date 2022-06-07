/*
# -----------------------INSTRUCTIONS------------------------

Madlibs

Create a simple madlib program that prompts for a noun, 
a verb, an adverb, and an adjective, and injects them 
into a story that you create.

# --------------------------PROBLEM--------------------------

# Input: 4 words from user
# Output: sentence containing the four words
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
# get a noun, verb, adjective and adverb from the user using 
readline-sync.
add the provided words to a sentence
*/
let rlSync = require('readline-sync');

let noun = rlSync.question('Please enter a noun: ');
let verb = rlSync.question('Please enter a verb: ');
let adjective = rlSync.question('Please enter an adjective: ');
let adverb = rlSync.question('Please enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
