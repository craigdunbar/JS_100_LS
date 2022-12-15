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
# Output: one or two characters
# ---------------------------RULES---------------------------
# Explicit: string argumnet is never empty

# Implicit: 

# --------------------------EXAMPLES-------------------------
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
# ----------------------------ALGO---------------------------
get the length of the string argument 
calculate the mid char
if the string is odd return the mid char
if even return the mid char + 1
*/
function centerOf(str) {
  let length = str.length
  let mid = Math.floor(length / 2)
  // console.log(mid)
  if (length % 2 === 0) {
    return str.slice(mid - 1, mid + 1);
  } else {
    return str[mid];
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"