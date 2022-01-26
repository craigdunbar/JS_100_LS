const { SourceCode } = require("eslint");

/*
# -----------------------INSTRUCTIONS------------------------
Uppercase check

Write a function that takes a string argument and returns
true if all of the alphabetic characters inside tne string
are uppercase; false otherwise. Ignore non alphabetic characters
# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: ignore non-alphabetic characters

# Implicit: handle empty strings

# --------------------------EXAMPLES-------------------------
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
# ----------------------------ALGO---------------------------
# initalize a function with string parameter
remove non alphabetic characters
initalize a loop
iterate through the string 
check of each character is upperCase
return true or false
*/
function isUppercase(str) {
  strArr = str.replace(/[^a-zA-Z]/g, '').split('');
  return strArr.every(char => char === char.toUpperCase());
}
// String.toUpperCase ignores non-alphabetic characters so 
// the easiest method is simply

// function isUppercase(string) {
//   return string.toUpperCase() === string;
// }

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
