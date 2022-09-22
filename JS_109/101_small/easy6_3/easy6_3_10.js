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
# Output: new string
# ---------------------------RULES---------------------------
# Explicit: letters with 5+ characters reversed

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
# ----------------------------ALGO---------------------------
# split string into an array of words
iterate over the words array
split the word into characters
if the number of characters > 5 reverse the character and join back inot a word
else join back into a word
return the newStr
*/
function reverseWords(str) {
  let wordsArr = str.split(' ');
   return wordsArr.map(word => {
    let charsArr = word.split('');
    if (charsArr.length > 5) {
      charsArr.reverse().join('');
    } else {
    charsArr.join('');
    }
    // console.log(charsArr.join(''));
    return charsArr.join('');
  }).join(' ');;
  // return wordsArr.join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"