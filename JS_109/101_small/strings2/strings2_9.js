/*
# -----------------------INSTRUCTIONS------------------------
Search Word (Part 1)
Write a function that takes two arguments, a word and a string of text, 
and returns an integer representing the number of times the word appears in the text.

# --------------------------PROBLEM--------------------------

# Input: word and string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: You may assume that the word and text inputs will 
always be provided, and that all word breaks are spaces.
Thus, some words will include punctuation such as periods and commas. 
Also assume that the search is case-insensitive.


# Implicit: 

# --------------------------EXAMPLES-------------------------a
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
# initalise a counter
split the string into an array of words
iterate over the array
for each word rempce any punctuation charcters
compare the word with the given argument
if it matches, increase the counter by one
after the iteration is complete return the counter
*/
// function searchWord(word, string) {
//   let counter = 0;
//   string.split(' ').forEach(el => {
//     if (el.endsWith('.') || el.endsWith(',')) {
//       el = el.slice(0, el.length - 1)
//     }
//     if (el.toLowerCase() === word) {
//       console.log(el);
//       counter += 1
//     }
//   })
//   return counter;
// }

// can you also include input validation to handle cases in which one or both arguments are missing?
function searchWord(word, string) {
  if (arguments.length < 2) {
    return ("There is an argument missing.")
  }
    let counter = 0;
  string.split(' ').forEach(el => {
    if (el.endsWith('.') || el.endsWith(',')) {
      el = el.slice(0, el.length - 1)
    }
    if (el.toLowerCase() === word) {
      counter += 1
    }
  })
  return counter;
}
let text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3