/*
# -----------------------INSTRUCTIONS------------------------
Uppercase Check
Write a function that takes a string argument and returns true 
if all of the alphabetic characters inside the string are uppercase; 
false otherwise. Ignore characters that are not alphabetic.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Ignore characters that are not alphabetic.

# Implicit: 

# --------------------------EXAMPLES-------------------------
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
# ----------------------------ALGO---------------------------
# replace all non alphabetic characters in the given string with ''.
compare this string to the same string convereted to UpperCase.
return true if it's strictly equal, false otherwise
*/
// function isUppercase(str) {
//   str = str.replace(/[^a-z]/gi, '') 
//   return str === str.toUpperCase();
// }
// toUpperCase only works on string alphabetic characters so there's no need to replace them
function isUppercase(str) {
  return str === str.toUpperCase()
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true