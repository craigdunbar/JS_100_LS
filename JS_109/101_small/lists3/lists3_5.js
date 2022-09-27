/*
# -----------------------INSTRUCTIONS------------------------
All Substrings
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should 
come first, then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings 
at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
# ----------------------------ALGO---------------------------
# 
define an empty array
initalise a loop starting at count of 0
generate a substring using slice starting at count and going to the end
of the string
use the leadingSUbstrings function from last exercise
to generate the substrings of the first substring
and push them to the  empty array
then generate the next substring and pass it into the leadingSubstrings function
repeat until the end of the original string
*/
function substrings(str) {
  let substringsArr = [];
  for (let index = 0; index < str.length; index++) {
    let substring = str.slice(index, str.length)
    substringsArr = substringsArr.concat(leadingSubstrings(substring));
  }
  return substringsArr;
}
function leadingSubstrings(str) {
  let arr = [];
  for (let count = 1; count <= str.length; count ++) {
    let substring = str.slice(0, count);
    arr = arr.concat(substring);
  }
  return arr;
}
console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]