/*
# -----------------------INSTRUCTIONS------------------------
Leading Substrings
Write a function that takes a string argument and returns a list of 
substrings of that string. 
Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: array
# ---------------------------RULES---------------------------
# Explicit: ordered from short to long

# Implicit: 

# --------------------------EXAMPLES-------------------------
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
# ----------------------------ALGO---------------------------
iterate over the string
use slice to generate the substrings starting at index 0
push the substrings to an array
*/
function leadingSubstrings(str) {
  let arr = [];
  for(let i = 0; i <str.length; i++) {
    let substring = str.slice(0, i + 1);
    arr.push(substring)
  }
  return arr
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]