/*
# -----------------------INSTRUCTIONS------------------------
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
  (findShort("bitcoin take over the world maybe who knows perhaps"), 3);
  (findShort("turns out random test cases are easier than writing out basic ones"), 3); 
  (findShort("Let's travel abroad shall we"), 2);
# ----------------------------ALGO---------------------------
# 
define a counter = 100
spit the string into an array of words
iterate over the array
get the length of the word
if the length is shorter than the counter 
set the counter to the length
return the counter
*/
function findShort(str) {
  let counter = 100;
  str.split(' ').forEach(word => {
    let length = word.length;
    length < counter ? counter = length : counter;
  })
  return counter;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//, 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"))//, 3); 
console.log(findShort("Let's travel abroad shall we"))//, 2);