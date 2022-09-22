/*
# -----------------------INSTRUCTIONS------------------------
Reverse It (Part 1)
Write a function that takes a string argument and returns a 
new string containing the words from the string argument in reverse order.


# --------------------------PROBLEM--------------------------

# Input: str
# Output: new str 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
# ----------------------------ALGO---------------------------
# split the string into an array of words
reverse the array, join back into a str
*/
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ')
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"