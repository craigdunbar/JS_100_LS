const { SourceCode } = require("eslint");

/*
# -----------------------INSTRUCTIONS------------------------
# Letter swap
Given a string of words, seperated by spaces, swap the first
and last letters of every word.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: every word has at least one letter
            strings always contain at least one word
            there are no non-alphanumeric characters
            no extra whitespaces.

# Implicit: 

# --------------------------EXAMPLES-------------------------
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
# ----------------------------ALGO---------------------------
# initalize a function with string arg
iterate through each word in the string
get first and last character of the word
reassign them
move to next word
stop iteration at last word
print new new string
*/
// function swap(string) {
//   let newStr = ''
//   wordArr = string.split(' ');
//   wordArr.forEach(function(word) {
//     let chars = word.split('');
//     let first = chars[0];
//     let last = chars[chars.length - 1]
//     chars[0] = last;
//     chars[chars.length -1] = first;
//     newStr += chars.join('') +' ';
//   })
//   return (newStr);
// }

// using map
function swap(string) {
  let wordArr = string.split(' ');
    wordArr = wordArr.map(word => {
    chars = word.split('');
    let first = chars[0];
    let last = chars[chars.length - 1]
    chars[0] = last;
    chars[chars.length -1] = first;
    return chars.join('');
  })
  return wordArr.join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"