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

BEYOND?

# --------------------------EXAMPLES-------------------------
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');
# ----------------------------ALGO---------------------------
# define the function with one parameter that  takes a string argument
split the string into an array of words delimited by spaces
loop through the array and for each word swap the first and last characters
of the string element
 - do this by splitting each string element into an array of characters 
 - set a variable to the first character and anothe variable to the last char
 - swap the two characters
 - join the string
 after all iterations are complete, join the array back into a sentence and 
 return it
*/
function swap(str) {
  let arr = str.split(' ')
   let swapArr = arr.map(el => {
    let charsArr = el.split('')
    let first = charsArr[0];
    let last = charsArr[charsArr.length - 1];
    charsArr[0] = last;
    charsArr[charsArr.length - 1] = first;
    return charsArr.join('');
  })
  return swapArr.join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));