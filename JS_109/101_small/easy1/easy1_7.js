/*
# -----------------------INSTRUCTIONS------------------------
Short Long Short

Write a function that takes two strings as arguments, determines
the length of the strings then returns the results of concatenating
the shorter string, the longer string, the longer string and 
the shorter string again.

# --------------------------PROBLEM--------------------------

# Input: two strings 
# Output: one string (combination of the two given strings)
# ---------------------------RULES---------------------------
# Explicit: assume strings are different lengths.

# Implicit: 

# --------------------------EXAMPLES-------------------------
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
# ----------------------------ALGO---------------------------
# 
define the function shortLongShort with two string parameters
the first argument will be assigned to str1 variable
the second argument will be assigned to the str2 variable
find the length of the two strings
if str1.length < str2.length return str1+str2+str1
eles return str2+str1+str2
*/
function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1+str2+str1;
  } else {
    return str2+str1+str2;
  }
}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"