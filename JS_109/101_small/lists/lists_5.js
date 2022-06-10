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

# --------------------------EXAMPLES-------------------------
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
# ----------------------------ALGO---------------------------
# use the leadingSubstrings function from before
only this time it should be inside a loop that iterates 
over every character in the string.
*/

// function substrings(string) {
//   let resultArr = [];
//   for (let count = 0; count < string.length; count++) {
//     let substrings = leadingSubstrings(string, count);
//     resultArr.push(substrings);
//   }
//   return resultArr.flat();
// }

// function leadingSubstrings(str, count) {
//     let substringArr = [];
//     let charsArr = str.split('');
//     substringArr = charsArr.map((_, idx) => (str.slice(count, idx + 1)));
//     return substringArr.filter(el => el !== '');
// }
// the above solution works but I had to alter the leadingSubstrings function
// try again without altering the leadingSubstrings function
// also to avoid nested arrays use concat() inplace of push().
function substrings(string) {
  let resultsArr = [];
  for (let count = 0; count < string.length; count++) {
    let substring = string.slice(count);
    let substrings = leadingSubstrings(substring)
    resultsArr = resultsArr.concat(substrings);
  }
  return resultsArr;
}

function leadingSubstrings(str) {
    let substringArr = [];
    for (let idx = 0; idx < str.length; idx ++) {
        substringArr.push(str.slice(0, idx + 1));
    }
    return substringArr;
}
console.log(substrings('abcde')) //
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]);