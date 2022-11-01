/*
# -----------------------INSTRUCTIONS------------------------

Complete the solution so that the function will break up camel casing, 
using a space between words.

# --------------------------PROBLEM--------------------------

# Input: one word string
# Output: string broken up by uppercase letters
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

# ----------------------------ALGO---------------------------
# 
define an empty string
iterate over the string and look at each character
if the char is lowercase add it to the string
if the character is upper case add a space and then this char
to the new string
return the new string
*/
function solution(str) {
  let newStr = ''
  for (char of str) {
    if (char === char.toLowerCase()) {
      newStr = newStr + char
    } else {
      newStr = newStr + ' ' + char
    }
  }
  return newStr;
}
console.log(solution('camelCasing')) //, 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest')) //, 'camel Casing Test', 