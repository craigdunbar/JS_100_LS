/*
# -----------------------INSTRUCTIONS------------------------
Swap Case

Write a function that takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
# ----------------------------ALGO---------------------------
# convert the given string into an array
map the array
if the current character is uppercase convert it to lowercase and vice versa
return the mapped array
*/
function swapCase(str) {
  return str.split('').map(char => {
    // if (char.toLowerCase() === char) {
    //   return char.toUpperCase()
    // } else {
    //   return char.toLowerCase()
    // }
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()
  }).join('')
}
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"