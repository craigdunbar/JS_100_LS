/*
# -----------------------INSTRUCTIONS------------------------
Capitalize Words
Write a function that takes a string as an argument and returns 
that string with the first character of every word capitalized 
and all subsequent characters in lowercase.

# --------------------------PROBLEM--------------------------

# Input: string 
# Output: string with capitlaized words 
# ---------------------------RULES---------------------------
# Explicit: You may assume that a word is any sequence of non-whitespace characters.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
# ----------------------------ALGO---------------------------
# split the given string into an array of words
map the array and capitalize every word
join the array back into a sentence and return it
*/
function wordCap(str) {
  let arr = str.split(' ');
  return arr.map(word => word = word[0].toUpperCase() + word.slice(1)).join(' ')
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'