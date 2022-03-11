/*
# -----------------------INSTRUCTIONS------------------------
ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns 
a new string that contains the value of the original sring
with all the consecutive duplicate characters collapsed into
a single character

# --------------------------PROBLEM--------------------------

# Input: string containing consecutive duplicate characters
# Output: string of single charcters
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
# ----------------------------ALGO---------------------------
# 
*/
function crunch(string) {
  let arr = string.split('');
  let newArr = [];
  arr.forEach(el => {

  })
}
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
