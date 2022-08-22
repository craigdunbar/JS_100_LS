/*
# -----------------------INSTRUCTIONS------------------------
Leading Substrings
Write a function that takes a string argument and returns a list of 
substrings of that string. 
Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: array of substrings
# ---------------------------RULES---------------------------
# Explicit: sorted form short to longest

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
# ----------------------------ALGO---------------------------
# given the string argument
define an empty array
to get the substrings we can use string slice() 
intialise a loop with counter starting at 0.
use push and str.slice(0, counter) to add the substrings to the array
*/
// function leadingSubstrings(str) {
//   let arr = [];
//   for (let count = 0; count < str.length; count++) {
//     arr.push(str.slice(0, count + 1));
//   }
//   return arr;
// }
// Further Exploration
// Rewrite leadingSubstrings using list processing functions(ie map, filter, or reduce )
// split str into an array of characters
// map a new array where each elemtn is the substrings from before

// function leadingSubstrings(str) {
//   let charsArr = str.split('');
//   return charsArr.map((el, idx) => el = str.slice(0, idx + 1))
// }
// using reduce
function leadingSubstrings(str) {
  let arr = [];
  let charsArr = str.split('');
  charsArr.reduce((a, b) => {
    arr.push(a + b);
    return a + b;
  }, []);
  return arr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]