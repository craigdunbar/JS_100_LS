/*
# -----------------------INSTRUCTIONS------------------------

Write a function that takes a string as an argument and
returns the character that occurs least often in the
given string. If there are multiple characters with the
same lowest number of occurrences, then return the one
that appears first in the string. When counting
characters, consider uppercase and lowercase versions to
be the same.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: character
# ---------------------------RULES---------------------------
# Explicit: case insensitive, if duplicate characters 
return lowest index, spaces included

# Implicit: 

# --------------------------EXAMPLES-------------------------
"Hello World" === "h"
"Mississippi" === "m"
# ----------------------------ALGO---------------------------
define an empty object
iterate over the string and check if the object contains the 
curent character as a key, if it does increase the value by one
if not add the character as a key

generate an array of values 
determine the lowest value
if two values are the lowest 
- determine which one has the lower index in the str 
-return this character

*/
function leastCommonChar(str) {
  let seenObj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (seenObj[char]) {
      seenObj[char] += 1;
    } else {
      seenObj[char] = 1
    }
  }
  let lowest = Math.min(...Object.values(seenObj))
  let arr = Object.keys(seenObj);
  
  for (let i = 0; i < arr.length; i ++) {
    if (seenObj[arr[i]] === lowest) {
      return arr[i]
    }
  }
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');