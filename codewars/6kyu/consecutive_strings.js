/*
# -----------------------INSTRUCTIONS------------------------

You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k 
consecutive strings taken in the array.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
strings must be consecutive
n being the length of the string array, 
if n = 0 or k > n or k <= 0 return "" 

# Implicit: 

# --------------------------EXAMPLES-------------------------
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

# ----------------------------ALGO---------------------------
# define an empty string called longest
define a counter = 0
iterate over the array and generate a new array of substrings of current index 
+ k more elements
iterate over the new array and get the length of the new substrings
if the current substring is longer than longest reassign longest and set the counter to the 
length
return the longest string 
*/
function longestConsec(strarr, k) {
  let longStr = '';
  let counter = 0;
  let subArr = [];
  let length = 0;
  
  if (k < 0 || k > strarr.length || strarr.length === 0) return '';
  for (let i = 0; i < strarr.length; i++) {
      substr = strarr.slice(i, i + k)
      subArr.push(substr);
  }
  // console.log(subArr)
  subArr.forEach(el => {
    length = el.join('').length
    if (length > counter) {
      longStr = el.join('');
      counter = length
    }
  })
  // console.log(longStr)
  return longStr;
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta");
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3) === "");
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) ===  "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) ===  "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) ===  "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "");