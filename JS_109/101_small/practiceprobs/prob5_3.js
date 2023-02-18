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
34
define an empty object
split the string into an array of chars
iterate over the array
if the object does not have the current char in lowercase as a key
create it
if it exists already add one to the value
return the lowest value key
if two hav ethe same value - return the llowest index first
use findIndex()
*/
function leastCommonChar(str) {
  let obj = {};
  // str = str.replace(/\s/g, '')
  let arr = str.split('');
  arr.forEach(el => {
    el = el.toLowerCase();
    if (!Object.keys(obj).includes(el)) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  })
  let lowest = Object.values(obj).sort((a,b) => a - b)[0]
  return Object.keys(obj).find(key => obj[key] === lowest);
  // console.log(lowest)
}
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');