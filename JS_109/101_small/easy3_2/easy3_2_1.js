/*
# -----------------------INSTRUCTIONS------------------------
ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns 
a new string that contains the value of the original string
with all the consecutive duplicate characters collapsed into
a single character

# --------------------------PROBLEM--------------------------

# Input: string with all characters doubled
# Output: new string with all duplicates removed
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
# ----------------------------ALGO---------------------------
# initalize an empty string
split str into an array of characters
iterate over str and add each character to the new string
check the current string against the last character of new str
if it's the same go to next iteration, if not add to new string
use str[str.length - 1] to get last character

*/
function crunch(str) {
  let newStr = ''
  let strArr = str.split('');
  for (let idx = 0; idx < strArr.length; idx++) {
    if (newStr[newStr.length - 1] !== strArr[idx]) {
    newStr = newStr + strArr[idx]
    }
  }
  console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""