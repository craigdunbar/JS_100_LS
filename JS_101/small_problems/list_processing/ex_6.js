/*
Palindromic Substrings

Write a function that returns a list of all palindromic
substrings of a string. The substrings in the returned list 
should be sorted by their order of apperance in the input
string. Duplicate substrings should be included multiple times.
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
