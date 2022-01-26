/*
# -----------------------INSTRUCTIONS------------------------

# Capitalize words

Given a string argument return that string with the first 
character of every word capitalized and the rest of the 
string in lower case.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: capitalized string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
# ----------------------------ALGO---------------------------
# initalize a function with string param
split string into an array of words.
iterate through the array
use element reference to capitalize the first letter
use slice to change the remianing characters to lowercase
return the new word into the array
return the array joined to make the original sentence
*/
// function wordCap(string) {
// let capsWordArr = string.split(' ').map(word => {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// })
// return capsWordArr.join(' ');
// }

// refactored: 
function wordCap(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'