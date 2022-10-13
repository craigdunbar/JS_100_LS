const { keyIn } = require("readline-sync");

/*
# -----------------------INSTRUCTIONS------------------------
You are given an array of strings and an integer k. 
Your task is to return the first longest string consisting 
of k consecutive strings taken in the array.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: string - representing elements concatenated
# ---------------------------RULES---------------------------
# Explicit: n being the length of the string array, if n = 0 
or k > n or k <= 0 return "".
strings must be consecutive

# Implicit: 

# --------------------------EXAMPLES-------------------------
Example: longest_consec(["zone", "abigail", "theta", "form", "libe", 
"zas", "theta", "abigail"], 2) 
result => "abigailtheta"
# ----------------------------ALGO---------------------------
# 
define a variable to hold the longest string
iterate over the array of strings starting at the string at index 0
and continue to the end of the array
set the current string as arr[count]
on each iteration create a new string that is the result of concatenating
the current string with the next k -1  strings
- use slice(current, current + k)
on the first iteration set this string as the longest string

on the second iteration concatenate the same number of strings
if this string.length is longer than the first 
set it as the longest string
else continue
*/
function longestConsec(arr, k) {
  let longest = '';
  let newStr =''

  if (k <= 0 || k > arr.length || arr.length === 0) {
    return '';
  }

  for (let i = 0; i <= arr.length - k; i++) {
    newStr = arr[i]
    for (let count = 1; count < k; count++) {
      newStr += arr[i + count]
    }
    if (newStr.length > longest.length) {
      longest = newStr
    }
  }
  return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true