/*
# -----------------------INSTRUCTIONS------------------------

# Swap Case

given a string as an argument, return the string with the 
letter cases swapped.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: new string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: string is not empty

# --------------------------EXAMPLES-------------------------
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
# ----------------------------ALGO---------------------------
# 
initalize a function with string param
convert to string to an array of chars
iteratr through the array 
if the char is uppercase letter change it to lower case letter
if the char is a lowercase letter change it to an uppercase letter
leave non alphabetic chars the same
*/
function swapCase(string) {
let charsArr = string.split('')
let swappedArr = charsArr.map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char
  }
});
return swappedArr.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"