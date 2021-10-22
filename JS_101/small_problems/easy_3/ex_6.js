/*
# -----------------------INSTRUCTIONS------------------------

# madlib

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# 
*/

let rlSync = require('readline-sync');

console.log("Enter a noun:");
let noun = rlSync.question();

console.log("Enter a verb:");
let verb = rlSync.question();

console.log("Enter an adjective:");
let adjective = rlSync.question();

console.log("Enter an adverb:");
let adverb = rlSync.question();

console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the cheese!`);