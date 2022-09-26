/*
# -----------------------INSTRUCTIONS------------------------
Leading Substrings
Write a function that takes a string argument and returns a list of 
substrings of that string. 
Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: array pf substrings
# ---------------------------RULES---------------------------
# Explicit: sorted form short to longest

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
# ----------------------------ALGO---------------------------
# define an empty array 
iterate over the given string 
using slice make from index 0 and the loop count 
push the strings to the empty array
*/
// function leadingSubstrings(str) {
//   let arr = [];
//   for (let count = 1; count <= str.length; count ++) {
//     let substring = str.slice(0, count);
//     arr = arr.concat(substring);
//   }
//   return arr;
// }

// Further Exploration
// Rewrite leadingSubstrings using list processing functions(ie map, filter, or reduce )
// split the string into an array of characters
// map this arrray with the result of using slice on the element at index 0
// going one character further each time
 
// function leadingSubstrings(str) {
//   let charsArr = str.split('');
//   return charsArr.map((el, idx) => el = charsArr.slice(0, idx + 1).join(''));
// }
 
// using reduce
// split the str into an array of chars
// use map to transform the array of chars into the array of sunbstrings
// by using reduce
// where the accumulator is the result of using slice(0, b)

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
