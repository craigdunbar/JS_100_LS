/*
# -----------------------INSTRUCTIONS------------------------
Capitalize Words
Write a function that takes a string as an argument and returns 
that string with the first character of every word capitalized 
and all subsequent characters in lowercase.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: You may assume that a word is any sequence of non-whitespace characters.

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
# ----------------------------ALGO---------------------------
# split the string argument into an array of words
map this array into a new array 
for each element that is mapped
capiatalize the first letter and then use slice to concat the rest of 
the word 
return this new array, joined back into a string
*/
function wordCap(str) {
  return str.split(' ').map(word => {
    return (word[0].toUpperCase() + word.slice(1));
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'