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
# use the substrings function from previous exercise
this time we need a second loop to  change the index of the starting element
*/

function substrings(str) {
  let allSubstrings = []
  for (let idx = 0; idx < str.length; idx++) {
    let substring = str.slice(idx)
    let substrings = leadingSubstrings(substring)
    allSubstrings = allSubstrings.concat(substrings)
  }
  return allSubstrings;
}
function leadingSubstrings(str, idx) {
  let arr = [];
  for (let count = 0; count < str.length; count++) {
    arr.push(str.slice(0, count + 1));
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