/*
# -----------------------INSTRUCTIONS------------------------
Get The Middle Character
Write a function that takes a non-empty string argument 
and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly 
one character. 
If the string has an even length, you should return exactly 
two characters.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: middle character or characters
# ---------------------------RULES---------------------------
# Explicit: even return 2 characters

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
# ----------------------------ALGO---------------------------
# determine the length of the given string
if odd return the middle character
if even return the middle two characters
  - determine this by str.length/ 2 - 1 character and str.length / 2 character
*/
function centerOf(str) {
  let length = str.length
  let middle = length / 2
  if (length % 2 === 0) {
    return str[middle - 1] + str[middle]
  } else {
    return str[Math.floor(middle)]
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"