/*
# -----------------------INSTRUCTIONS------------------------

The End Is Near But Not Here

Write a function that returns the next to last word in the
String passed to it as an argument. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: next to last word from the string argument
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
# ----------------------------ALGO---------------------------
# split the string argument into an array of words
return the element at array.length - 2
*/
function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2]
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true