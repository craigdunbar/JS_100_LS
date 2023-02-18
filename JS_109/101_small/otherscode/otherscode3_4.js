/*
# -----------------------INSTRUCTIONS------------------------
Given an non-empty string check if it can be construsted
by taking a substring of it and appending mulitple copies
of the substring together.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: Assume the given string consits of only 
lowercase English letters

# Implicit: 

# --------------------------EXAMPLES-------------------------a
'abab' === true // substring is 'ab'
'aba' === false 
# ----------------------------ALGO---------------------------
19
generate substrings and use repeat to try and match the original string
set a variable called repeat to 0
get the mid point of the string
iterate over the str
generate substrings starting at one char long
count = str.length / substring length
if substring repeated count times is the same as the str return true
else continue adding chars to the substring
*/
function repeat(str) {
  let count = 0;
  let mid = Math.floor(str.length / 2)

  for(let i =0; i < mid; i++) {
    let substring = str.slice(0, i + 1);
    count = str.length / substring.length
    if (substring.repeat(count) === str) {
      return true;
    }
  }
  return false;
}
console.log(repeat('abab')  === true);
console.log(repeat('aba') === false);
console.log(repeat('aabaaba') === false);
console.log(repeat('abaababaab') === true);
console.log(repeat('abcabcabcabc') === true);
console.log(repeat('aaa') === true);