/*
# -----------------------INSTRUCTIONS------------------------
Reverse It (Part 1)
Write a function that takes a string argument and returns a 
new string containing the words from the string argument in reverse order.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: reversed string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
# ----------------------------ALGO---------------------------
# split the string into an array of words
reverse the array
join the array back into a string 
*/
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"