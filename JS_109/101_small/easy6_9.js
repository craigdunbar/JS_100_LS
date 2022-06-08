/*
# -----------------------INSTRUCTIONS------------------------

Reverse It (Part 1)
Write a function that takes a string argument and returns a 
new string containing the words from the string argument in reverse order.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
# ----------------------------ALGO---------------------------
# split the string argument into an array of words using a space as delimeter
reverse the array
join the words together again
*/
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"