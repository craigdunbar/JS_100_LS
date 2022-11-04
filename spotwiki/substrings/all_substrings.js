/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes a string as an argument and 
returns an array with all the sub-string of given string

Further:
Create a function that takes a string as an argument and 
returns an array with all the sub-string of given string 
that are longer than 1 letter.

Create a function that takes a string as an argument and 
returns an array with all the sub-string of given string 
that are exactly 3 letters long

# --------------------------PROBLEM--------------------------

# Input: string
# Output: array of substrings
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
allSubstr('abcd'); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']

# ----------------------------ALGO---------------------------
# 
create an empty array to hold the substrings
initalise a loop from 0 to str.length to determine the starting substring
use slice to get the substring 
- substring = str.slice(i)
initalise a second loop from 0 to substring.length to generate all the substrings
use slice agian to get all the substrings
- substrings = substring.slice(0, j + 1)
push the susbstrings to the array
*/
// function allSubstr(str) {
//   let subArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let substring = str.slice(i);
//     for (let j = 0; j < substring.length; j++) {
//       let substrings = substring.slice(0, j + 1)
//       subArr = subArr.concat(substrings);
//     }
//   }
//   console.log(subArr)
// }
// allSubstr('abcd'); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']

// Further: all the sub-string of given string 
// that are longer than 1 letter.

// function allSubstr(str) {
//   let subArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let substring = str.slice(i);
//     for (let j = 0; j < substring.length; j++) {
//       let substrings = substring.slice(0, j + 1)
//       if (substrings.length > 1){
//       subArr = subArr.concat(substrings);
//       }
//     }
//   }
//   console.log(subArr)
// }
// allSubstr('abcd');//=> ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd'];

// Further: with all the sub-string of given string 
// that are exactly 3 letters long

function allSubstr(str) {
  let subArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i);
    for (let j = 0; j < substring.length; j++) {
      let substrings = substring.slice(0, j + 1)
      if (substrings.length === 3){
      subArr = subArr.concat(substrings);
      }
    }
  }
  console.log(subArr)
}
allSubstr('abcd'); // => ['abc', 'bcd'];
