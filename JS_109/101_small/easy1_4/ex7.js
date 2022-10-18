/*
# -----------------------INSTRUCTIONS------------------------
Short Long Short

Write a function that takes two strings as arguments, determines
the length of the strings then returns the results of concatenating
the shorter string, the longer string, the longer string and 
the shorter string again.

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: string - result of concatenating the arguments
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
# ----------------------------ALGO---------------------------
# determine the length of each string
use string interpolation to build the string of 
- short long short
*/
function shortLongShort(str1, str2) {
  let length1 = str1.length
  let length2 = str2.length
  if (length1 < length2) {
    console.log(`${str1}${str2}${str1}`)
  } else {
    console.log(`${str2}${str1}${str2}`)
  }
}
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"