/*
# -----------------------INSTRUCTIONS------------------------
Search Word (Part 1)
Write a function that takes two arguments, a word and a string of text, 
and returns an integer representing the number of times the word appears in the text.

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: You may assume that the word and text inputs will 
always be provided, and that all word breaks are spaces.
Thus, some words will include punctuation such as periods and commas. 
Also assume that the search is case-insensitive.

# Implicit: 

# --------------------------EXAMPLES-------------------------
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
# ----------------------------ALGO---------------------------
# use RegEx.test() to dtermine if the given string occurs in the text.
split the given string into an array of words and use filter with the RegEx in 
the callback
*/
// function searchWord(str, text) {
//   return text.split(' ').filter(word => {
//     return word.toLowerCase() === str;
//   }).length;
// }

// using RegExp
// from docs
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // expected output: Array ["T", "I"]

// function searchWord(str, text) {
//   let regex = new RegExp(str, 'gi');
//   let found = text.match(regex);
//   return found.length;
// }
let text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// Further Exploration
// The current solution matches the word even when it is just a part of a 
// bigger word, instead of a whole word by itself.
// Refactor the current solution so that it only matches whole words.
// function searchWord(str, text) {
//   let regex = new RegExp('\\b' + str + '\\b', 'gi'); 
// we need to match word boundaries, so we want to use the \b anchor. 
// But we're using a string to describe the regex, so we have to escape the \ character with an extra \.
//   let found = text.match(regex);
//   console.log(found);
//   return found.length;
// }
// console.log(searchWord('qui', text));      // should return 4, NOT 13

// can you also include input validation to handle cases in which one or both arguments are missing?
function searchWord(str, text) {
  if (!str || !text) return "Arguments missing"
  return text.split(' ').filter(word => {
    return word.toLowerCase() === str;
  }).length;
}
console.log(searchWord('sed'));      // "arguments missing"
console.log(searchWord('qui', text));      // should return 4, NOT 13

