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

iterate over the given string
if the current character is the same as the character converted to uppercase
continue
else break and return false
if iteration completes return true
*/
// function isUppercase(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i].toUpperCase()) {
//       return false
//     }
//   }
//   return true;
// }
// can also just convert the entire string to uppercase and comaper to the original
function isUppercase(str) {
  return str === str.toUpperCase()
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true