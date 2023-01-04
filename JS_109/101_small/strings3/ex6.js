/*
# -----------------------INSTRUCTIONS------------------------
Staggered Caps (Part 1)
Write a function that takes a string as an argument and returns that string 
with a staggered capitalization scheme. Every other character, starting from 
the first, should be capitalized and should be followed by a lowercase or
non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as 
characters for determining when to switch between upper and lower case.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: str with every other alphabetic character capitalized
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
# ----------------------------ALGO---------------------------
convert the string to an array
map the array
if the index is even uppercase the character
else lowercase the char
*/
function staggeredCase(str) {
  return str.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase()
    } else {
      return char.toLowerCase();
    }
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
