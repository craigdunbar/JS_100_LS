/*
# -----------------------INSTRUCTIONS------------------------

# Search word 1
Write a function that takes two arguments, a word and a string
of text, and returns an integer representing the number of 
times the word appears in the text.

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: two strings always provided, words delimited by
spaces

# Implicit: case doesn't matter

# --------------------------EXAMPLES-------------------------
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
# ----------------------------ALGO---------------------------
# 
initalize a function with two string parameters
initalize a counter and set it to zero
split the second argument into an array of words
iterate through the array of words
  compare each word with the first argument
  if the word contains the given string increase the
  counter by one.
return the counter
*/
function searchWord(str, sentence) {
let counter = 0;
sentence.split(' ').forEach(word => {
  word.toLowerCase() === str ? counter += 1 : counter;
});
return counter;
}
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// LS solution using regex:
// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi');
//   const matches = text.match(regex);
//   return matches ? matches.length : 0;
// }
console.log(searchWord('sed', text));      // 3
