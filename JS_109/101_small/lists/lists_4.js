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
# initalise an empty array
iterate over the  and string and add the first character to the new array
then combine the first and second characters together and push to new array
ans so on
return the new array
*/
// function leadingSubstrings(str) {
//     let substringArr = [];
//     for (let idx = 0; idx < str.length; idx ++) {
//         substringArr.push(str.slice(0, idx + 1));
//     }
//     return substringArr;
// }

// Further Exploration
// Rewrite leadingSubstrings using list processing functions(ie map, filter, or reduce )
// function leadingSubstrings(str) {
//     let substringArr = [];
//     let charsArr = str.split('');
//     return substringArr = charsArr.map((_, idx) => str.slice(0, idx + 1));
// }
// using reduce()

function leadingSubstrings(string) {
  let substringArr = [];
  let charsArr = string.split('');
  
  charsArr.reduce((a, b) => {;
    substringArr.push(a + b);
    return a + b;
  }, []);
  return substringArr;    
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]