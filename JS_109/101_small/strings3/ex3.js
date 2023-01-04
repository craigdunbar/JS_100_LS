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
create an array with the three keys given above
iterate over the string
compare the current character to it's lowercase equivalent
if it's an alphabetic letter and 
if theyre the same 
add one to the lowercase keys value
else add one to the uppercase key value

if it's neither add one to the neither keys value
*/
function letterCaseCount(str) {
  let obj = {lowercase: 0, uppercase: 0, neither:0};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() < 'a') { 
      obj.neither += 1
    }
    else if (str[i].toLowerCase() === str[i]) {
      obj.lowercase += 1;
    } else {
      obj.uppercase += 1;
    }
  }
  console.log(obj)
}
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }