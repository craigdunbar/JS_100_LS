/*
# -----------------------INSTRUCTIONS------------------------
Lettercase Counter

Write a function that takes a string and returns an object 
containing three properties: one representing the number 
of characters in the string that are lowercase letters, 
one representing the number of characters that are uppercase letters, 
and one representing the number of characters that are neither.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
# ----------------------------ALGO---------------------------
# define an object with the 3 keys above
iterate over the given string
if the current character is lowercase add one to the objects lowercase value
if the current character is uppercase add one to the objects uppercase value
etc
return the object
*/
function letterCaseCount(str) {
  let letterObj = {lowercase: 0, uppercase: 0, neither: 0};
  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      letterObj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      letterObj.uppercase += 1;
    } else {
      letterObj.neither += 1;
    }
  }
  return letterObj;
}
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }