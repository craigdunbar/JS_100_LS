/*
# -----------------------INSTRUCTIONS------------------------
Uppercase Check
Write a function that takes a string argument and returns true 
if all of the alphabetic characters inside the string are uppercase; 
false otherwise. Ignore characters that are not alphabetic.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: ignore non alphabetic characters

# Implicit: 

# --------------------------EXAMPLES-------------------------a
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
# ----------------------------ALGO---------------------------
# 
define a counter and initalize it to a value of 0
create a letters only string by replacing any non letter with ''
iterate over the given string
convert each character to uppercase and compare it to the original
if it's the same add one to the counter
get the length of the string
if the length of the alphabetic characters in the string is the same as
the counter return true, else return false
*/
// function isUppercase(str) {
//   let count = 0;
//   let lettersOnly  = str.replace(/[^a-z]/gi, '');
  
//   for (let char of lettersOnly) {
//     if (char === char.toUpperCase()) {
//       count += 1;
//     }
//   }
//   return lettersOnly.length === count ? true : false 
// }

// or simply 
function isUppercase(str) {
  return str === str.toUpperCase()
}
// since toUpperCase() only works on string characters so no need to use replace().
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true