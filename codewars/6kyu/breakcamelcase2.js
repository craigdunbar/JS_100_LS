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

split the string into an array of chars
map the array 
if any char is upper case add a space in front of it
join the arr then split using the space 
*/
function camel(str) {
  let arr = str.split('')
  let newArr = arr.map(char => {
    if (char === char.toUpperCase()) {
      return ' ' + char;
    } else {
      return char;
    }
  }).join('')
  console.log(newArr)
}
camel("camelCasing")
camel("identifier")
camel("")