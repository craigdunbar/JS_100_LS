/*
# -----------------------INSTRUCTIONS------------------------

Reverse It (Part 2)
Write a function that takes a string argument containing one 
or more words and returns a new string containing the words 
from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. 
Words will be separated by a single space.

# --------------------------PROBLEM--------------------------

# Input: string 
# Output: string
# ---------------------------RULES---------------------------
# Explicit: only wrods with five characters or more get reversed

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
# ----------------------------ALGO---------------------------
define an empty array
spilt the string into an array of words
iterate over the array 
get the length of the current word
if the word is greater than 5 chars it should be reversed
push the words to a new array
return the new array joined
*/
function reverseWords(str) {
  let newArr = [];
  str.split(' ').forEach(word => {
    if (word.length >= 5) {
      newArr = newArr.concat(word.split('').reverse().join(''))
    } else {
      newArr = newArr.concat(word)
    }
  })
  return newArr.join(' ')
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"