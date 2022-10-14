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
# define an empty object 
split the string into an array of characters
iterate over this array
if the current character is not a key in the object
- assign it as a key with a value of 1
if it already exists increase the value by one

this will create an object with all the occurences of the character
find the key with the lowest value and return it.
- create an array iof object values and find the lowest value
- use find() method to determine the key of this lowest value
if multiple keys have the same lowest value
return the character that appears first in the string
- use findIndex() to dtermine the index of each character 
- return the element woth the lowest index
*/
function leastCommonChar(str) {
  let charObj = {};
  let lowestChar = '';

  let arr = str.toLowerCase().split('');
  let index = arr.length;
  
  arr.forEach(el => {
    if (!Object.keys(charObj).includes(el)) {
      charObj[el] = 1;
    } else {
      charObj[el] += 1;
    }
  })
  let lowest = Object.values(charObj).sort((a, b) => a - b)[0];
  let chars = Object.keys(charObj).filter(key => charObj[key] === lowest)

  chars.forEach(char => {
    let result = arr.findIndex(el => el === char)
    if (result < index) {
      index = result;
      lowestChar = char;
    }
  })
  return lowestChar;
}
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');