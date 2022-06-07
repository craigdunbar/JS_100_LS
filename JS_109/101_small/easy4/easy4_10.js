/*
# -----------------------INSTRUCTIONS------------------------
Letter Swap
Given a string of words separated by spaces, write a function 
that swaps the first and last letters of every word.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: You may assume that every word contains at least one letter, 
and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words 
and spaces, and that there are no leading, trailing, or repeated spaces.

# Implicit: 

# --------------------------EXAMPLES-------------------------
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
# ----------------------------ALGO---------------------------
# initalise a function with one parameter that takes a string argument
split the string into an array of individual words
iterate over the words and swap the first and last characters
join the words back into a string 
return the string
*/
function swap(str) {
  let wordsArr = str.split(' ');
  return wordsArr.map((word) => {
    swapArr = word.split('');
    let first = swapArr[0];
    let last = swapArr[swapArr.length - 1];
    swapArr[0] = last;
    swapArr[swapArr.length - 1] = first;
    return swapArr.join('');
  })
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"