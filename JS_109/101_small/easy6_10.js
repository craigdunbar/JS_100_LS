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
# split the string into an array of words using a space delimeter
iterate over the array and if any word is 5 character or longer reverse it
else leave the word as-is
join the array together using space delimter
return the string
*/
function reverseWords(str) {
  return str.split(' ').map(el => {
    if (el.length >= 5) {
      return el.split('').reverse().join('');
    } else {
      return el;
    }
  }).join(' ');
}
// refactored using ternary operator
function reverseWords(str) {
  return str.split(' ')
    .map(el => el.length >= 5 ? el.split('').reverse().join('') : el)
    .join(' ');
}
console.log(reverseWords('Professional') === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");