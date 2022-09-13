/*
# -----------------------INSTRUCTIONS------------------------
Short Long Short

Write a function that takes two strings as arguments, determines
the length of the strings then returns the results of concatenating
the shorter string, the longer string,  and 
the shorter string again.

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: sentence made up of shot - long - short strings
# ---------------------------RULES---------------------------
# Explicit: assume strings are different lengths

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
# ----------------------------ALGO---------------------------
# determine the length of the two string arguments
concatenate the shortest string + longest + shortest and
log to the console.
*/
function shortLongShort(str1, str2) {
  return str1.length < str2.length? str1+str2+str1 : str2+str1+str2
}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"