/*
# -----------------------INSTRUCTIONS------------------------
The End Is Near But Not Here

Write a function that returns the next to last word in the
String passed to it as an argument. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: word from string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
# ----------------------------ALGO---------------------------
# split the string into an array of words
return the word at the second to last index 
- word.length - 2
*/
function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true