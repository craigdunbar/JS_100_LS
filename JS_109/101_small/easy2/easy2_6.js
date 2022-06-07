/*
# -----------------------INSTRUCTIONS------------------------

The End Is Near But Not Here

Write a function that returns the next to last word in the
String passed to it as an argument. 
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Words are any sequence of non-blank characters
Assume input String always contains at least two words.

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
# ----------------------------ALGO---------------------------
# 
*/
function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true