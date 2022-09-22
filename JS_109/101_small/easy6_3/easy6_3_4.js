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
# Output: character
# ---------------------------RULES---------------------------
# Explicit: odd return one, even return two characters

# Implicit: 

# --------------------------EXAMPLES-------------------------
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
# ----------------------------ALGO---------------------------
# if str lenght is odd use Math.floor() to round down and then return that 
character
if str.length is even return return middle character and next character
remember str is zero indexed so will need to subtract one 
*/
function centerOf(str) {
  let length = str.length
  let char = 0;
  if(length % 2 === 0) {
    char = length/ 2;
    return str[char - 1] + str[char];
  } else {
    char = Math.floor(length / 2) 
      return str[char];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"