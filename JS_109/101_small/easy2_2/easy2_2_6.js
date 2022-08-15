/*
# -----------------------INSTRUCTIONS------------------------

The End Is Near But Not Here

Write a function that returns the next to last word in the
String passed to it as an argument. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string at length - 2 of original string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
# ----------------------------ALGO---------------------------
# convert the given string into an array of words
use array element reference to log the second from last element
*/

function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true