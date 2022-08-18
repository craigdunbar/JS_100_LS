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
# Explicit: letters with 5+ characters reversed

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
# ----------------------------ALGO---------------------------
# same as before but with a conditional that counts string length
and reverses if 5 or more characters
*/
function reverseWords(str) {
  let arr = str.split(' ');
  return arr.map(el => {
    if (el.length >= 5) {
      return el.split('').reverse().join('');
    } else {
      return el;
    }
  }).join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"