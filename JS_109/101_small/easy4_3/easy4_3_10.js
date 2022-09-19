/*
# -----------------------INSTRUCTIONS------------------------
Letter Swap
Given a string of words separated by spaces, write a function 
that swaps the first and last letters of every word.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: str
# ---------------------------RULES---------------------------
# Explicit: You may assume that every word contains at least one letter, 
and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words 
and spaces, and that there are no leading, trailing, or repeated spaces.

# Implicit: 

# --------------------------EXAMPLES-------------------------
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');
# ----------------------------ALGO---------------------------
# split the given string into an array of words
itersate over the array and get the first and last character of each word
swap the characters 
after the iteration is complete, join the array back into a string
return the str
*/
function swap(str) {
  let wordsArr = str.split(' ');
  return wordsArr.map(word => {
    let charsArr = word.split('');
    let first = charsArr[0];
    let last = charsArr[word.length - 1];
    charsArr[0] = last;
    charsArr[word.length - 1] = first;
    return charsArr.join('')
  });
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));