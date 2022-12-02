/*
# -----------------------INSTRUCTIONS------------------------
Letter Swap
Given a string of words separated by spaces, write a function 
that swaps the first and last letters of every word.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
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
# split the sting into an array of words
iterate over the array using map
split each word into an array of characters
on each iteration  swap first and last characters
join the mapped array and return the string
*/
function swap(str) {
  let arr = str.split(' ');
  return arr.map(word => {
    let chars = word.split('')
    let first = chars[0];
    let last = chars[chars.length - 1]
    chars[0] = last;
    chars[chars.length - 1] = first;
    return chars.join('')
  }).join(' ')
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));