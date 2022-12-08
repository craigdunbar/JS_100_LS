/*
# -----------------------INSTRUCTIONS------------------------
You are given an array of strings and an integer k. 
Your task is to return the first longest string consisting 
of k consecutive strings taken in the array.

# --------------------------PROBLEM--------------------------

# Input: array and integer
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

if n === 0 or k > n or k <= 0 return ''
define a variable longest = 0
define a variable longestStr = ''
given the integer arguument
iterate over the array and generate the substrings
the substring will be current element + k more elements
get the length of the substring
if length > longest 
longest = length 
longestStr = substring

after iteration return the substring
*/
function longestConsec(arr, k) {
  let n = arr.length
  if (n === 0 || k > n || k <= 0) return '';
  
  let longest = 0;
  let longestStr = ''
  for (let i = 0; i < arr.length; i ++) {
    let substring = arr.slice(i, i + k).join('');
    if (substring.length > longest) {
      longest = substring.length;
      longestStr = substring
    }
    // console.log(substring)
  }
  return longestStr;
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