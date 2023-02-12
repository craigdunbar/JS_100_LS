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
16
iterate over the string and generate substrings 
for each substring calculate how many times it would need to repeat 
- result = str.length / substring.length
if the susbstring.repeat(result) is the same as the given string
- return true
if no substrings can be found to create the given string return false
*/
function repeat(str) {
  let length = str.length;
  for (let i =0; i < str.length - 1; i++) {
    let substring = str.slice(0, i + 1);
    // console.log(substring)
    let result = length / substring.length
    // console.log(substring.repeat(result))
    if (substring.repeat(result) === str) {
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
