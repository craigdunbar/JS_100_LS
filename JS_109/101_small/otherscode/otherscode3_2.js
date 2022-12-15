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
given the string argument
iterate over the string with a counter starting at 0
use slice and count to get the first substring (one char)
divide the string length by the count + 1 to get the multiplier
use repeat to generate a substring of the current char repeated multiplier times
compare this repeated string to the given string
if it;s the same return the current char 
if not repeat with slice and the counter incrementes ie two character substring now
repeat until the substring is greater than half the length of the given string
if no combination is found return false
*/
function repeatedSubstringPattern(str) {
  let length = str.length 
  for (let i = 0; i < length/ 2; i ++) {
    let substring = str.slice(0, i + 1);
    let multiple = length / substring.length
    let newStr = substring.repeat(multiple)
    if (newStr === str) {
      return true;
    }
  }
  return false;
}
console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);
console.log(repeatedSubstringPattern('aaa') === true);
