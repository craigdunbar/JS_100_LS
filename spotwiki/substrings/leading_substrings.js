/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes a string as an argument and 
returns an array with all leading sub-strings of that string. 

Create a function that takes a string as an argument and 
returns an array with all leading sub-strings of that string 
that are 3 letters or longer

Create a function that takes a string as an argument and 
returns an array with all leading sub-strings of that string 
that are shorter than 5 letters, starting from the 
longest to the shortest

# --------------------------PROBLEM--------------------------

# Input: str
# Output: array of leading substrings
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

allLeadSubstr('abcd'); // => ['a', 'ab', 'abc', 'abcd'];

allLeadSubstr('abcdef'); //=> ['abc', 'abcd', 'abce', 'abcdef'];

allLeadSubstr('abcdefg'); //=> ['abcd', 'abc', 'ab', 'a'];

# ----------------------------ALGO---------------------------
# create an empty array to hold the substrings
initalise a loop with i from 0 to str.length 
on each iteration use slice 
- str.slice(0, i)
push the substrings to the array
*/
// function allLeadSubstr(str) {
//   let subArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let substring = str.slice(0, i + 1);
//     subArr = subArr.concat(substring);
//   }
//   console.log(subArr)
// }
// allLeadSubstr('abcd'); // => ['a', 'ab', 'abc', 'abcd'];

// further: all leading sub-strings of that string 
// that are 3 letters or longer

// function allLeadSubstr(str) {
//   let subArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let substring = str.slice(0, i + 1);
//     if (substring.length >= 3) {
//     subArr = subArr.concat(substring);
//     }
//   }
//   console.log(subArr)
// }
// allLeadSubstr('abcdef'); //=> ['abc', 'abcd', 'abce', 'abcdef'];

// further: with all leading sub-strings of that string 
// that are shorter than 5 letters, starting from the 
// longest to the shortest

function allLeadSubstr(str) {
  let subArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(0, i + 1);
    if (substring.length < 5) {
    subArr = subArr.concat(substring);
    }
  }
  console.log(subArr.sort((a, b) => {
    return b.length - a.length
  }))
}
allLeadSubstr('abcdefg'); //=> ['abcd', 'abc', 'ab', 'a'];
