/*
# -----------------------INSTRUCTIONS------------------------

# Staggered Caps 1

Write a fuction that takes a string argument and returns
that string with staggered capitalization scheme. Every
other character, starting from the first, should be capitalized
and should be followed by a lower case or non-alphabetic
character.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: every character with an even index should be
capitalized, non-alphabetic characters should not be changed
but are counted in the indexing

# Implicit: string will contain more than one character

# --------------------------EXAMPLES-------------------------
'I Love Launch School!';        // "I LoVe lAuNcH ScHoOl!"
'ALL_CAPS');                     // "AlL_CaPs"
'ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
# ----------------------------ALGO---------------------------
#
initalize a function with string param
split the given string into an array of characters
iterate through the array of chars using the value and index
if index of even, capitalize the character
join the array of chars back to a string
return the string
*/

function staggeredCase(string) {
  return string
    .split('')
    .map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"