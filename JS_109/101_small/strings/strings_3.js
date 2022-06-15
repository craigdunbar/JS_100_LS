/*
# -----------------------INSTRUCTIONS------------------------
Lettercase Counter

Write a function that takes a string and returns an object 
containing three properties: one representing the number 
of characters in the string that are lowercase letters, 
one representing the number of characters that are uppercase letters, 
and one representing the number of characters that are neither.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
# ----------------------------ALGO---------------------------
# define an object with three properties , lowercase 
uppercase and neither all with initial values of 0.
iterate over the given string and check each character for case or non alphabetic
add one to the value of the corresponding object property
return the object
*/
function letterCaseCount(str) {
  let obj = {lowercase : 0, uppercase : 0, neither : 0};
  str.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      obj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  })
  return obj;
}
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }