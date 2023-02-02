/*
# -----------------------INSTRUCTIONS------------------------
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"Example Input" ==> "iNPUT eXAMPLE"

# ----------------------------ALGO---------------------------
spolit the string into an array of words
reverse the array
map the array where any lowercase becomes uppercase and vice verse
return the mapped array

*/
function transform(str) {
  let arr = str.split(' ').reverse().join(' ')
  return arr.split('')
  .map(el => {
    if (el === el.toLowerCase()) {
      return el.toUpperCase();
    } else if (el === el.toUpperCase()) {
      return el.toLowerCase();
    }
  }).join('')
}
console.log(transform("Example Input"))