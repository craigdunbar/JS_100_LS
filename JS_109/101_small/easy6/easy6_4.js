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
# define a function with a string argument
get the length of the string
get the midpoint by dividing the length by 2
if length is odd return the middle character, if even middle 2
*/
function centerOf(str) {
  length = str.length;
  let middle = (Math.ceil(length/2));

  if (length % 2 === 0){
    return (str.slice(middle - 1, middle + 1));
  } else {
    return (str.slice(middle - 1, middle));
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"