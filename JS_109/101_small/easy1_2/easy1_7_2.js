/*
# -----------------------INSTRUCTIONS------------------------
Short Long Short

Write a function that takes two strings as arguments, determines
the length of the strings then returns the results of concatenating
the shorter string, the longer string,  and 
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
# given the two string arguments determine the length of each string
if str1 is longer then string two then assign it to a variable called longer 
and vice versa.
concatenate the strings together in the order of small , long, small
return the new string
*/
function shortLongShort(str1, str2) {
  let length1 = str1.length
  let length2 = str2.length
  let long = '';
  let short = '';
  
  if (length1 > length2) {
    long = str1;
    short = str2
  } else {
    long = str2;
    short = str1;
  }
  return short+long+short
}
// refactored
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