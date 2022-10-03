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
# 
define an empty string
iterate over the given string
if the character is lowercase make it uppercase and vice versa
add it to the new string
*/
function swapCase(str) {
  let newStr = ''
  for (let char of str) {
    if (char === char.toLowerCase()) {
      newStr = newStr + char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      newStr = newStr + char.toLowerCase();
    }
  }
  return newStr;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"