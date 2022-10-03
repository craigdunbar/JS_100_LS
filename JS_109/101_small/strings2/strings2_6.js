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
# initalise a counter starting at one
split the string into an array of character
iterate over the array
if the current character is alphabetic and the counter is odd, capiltalize the char
abd increase the counter
if the character is non alphabetic then skip it and increase the counter
return the joined array
*/
function staggeredCase(str) {
  return str.split('').map((char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"