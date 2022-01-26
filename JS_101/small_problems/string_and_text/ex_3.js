/*
# -----------------------INSTRUCTIONS------------------------

# Lettercase counter

Given a string return an object containing the number of
characters that are lowercase, uppercase and neither.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: if string is empty return 0 values for object keys

# Implicit:

# --------------------------EXAMPLES-------------------------
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
# ----------------------------ALGO---------------------------
# initalize function with string parameter
convert string to array
initalize an object with lowercase, uppercase and neither as keys
initalize a loop
iterate through each character of the string array
if char is lowercase, increase lvalue of owercase key by 1
if char is uppercase, increase value of uppercase key by 1
if char is not a letter, increase value of neither key  by 1
return the object
*/
function letterCaseCount(str) {
let charsArr = str.split('');
let letters = 'abcdefghijklmnopqrstuvwxyz'
let obj = {lowercase: 0, uppercase: 0, neither: 0};

charsArr.forEach(char => {
  if (letters.includes(char.toLowerCase()) === false) {
    obj.neither += 1;
  } else if (char === char.toLowerCase()) {
    obj.lowercase += 1;
  } else {
    obj.uppercase += 1;
  } 
  })
  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }