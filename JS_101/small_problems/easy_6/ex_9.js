/*
# -----------------------INSTRUCTIONS------------------------
# Reverse it (part 1)
Write a function that takes a string argument and returns a
new string the words in reverse order.
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
# initalise a funciton with string arg
split string into array of words seperated by (' ')
reverse the array
join back into  a string
*/
function reverseSentence(str) {
  return newStr = str.split(' ').reverse().join(' ');
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"