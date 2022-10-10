/*
# -----------------------INSTRUCTIONS------------------------
Given an non-empty string check if it can be construsted
by taking a substring if it and appending mulitple copies
of the substring together.


# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Assume the given string consits of only 
lowercase English letters

# Implicit: 

# --------------------------EXAMPLES-------------------------a
'abab' === true // substring is 'ab'
'aba' === false 
# ----------------------------ALGO---------------------------
# 
generatae the substrings of the given string starting with 2 characcters
remove these characters from the string and determin if the subdstring matches the 
the next set of characters of same length as the current substring
ie
if string is abcabc
first substring is ab string is now cabc,
the next two character in the string are ca does not equal ab so generate next substring
now abc string is abc the match so return abc
repeat this check until the substring is equal to the half the length of the given string
more than half theres no way to conctruct the string from substrings
*/
function repeatedSubstringPattern(str) {
 
  let mid = Math.floor(str.length / 2)
    for (let count = 1; count <= mid; count ++) {
      let substring = str.slice(0, count);
      if (substring.repeat(str.length/ substring.length) === str) {
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
