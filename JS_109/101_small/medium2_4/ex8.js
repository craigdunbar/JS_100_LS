/*
# -----------------------INSTRUCTIONS------------------------
Longest Sentence

Write a program that prints the longest sentence in a string based on the 
number of words.
Sentences may end with periods (.), exclamation points (!), or question marks (?). 
You should treat any sequence of characters that are not spaces or 
sentence-ending characters as a word. 
Thus, -- should count as a word. 
Log the longest sentence and its word count to the console. 
Pay attention to the expected output, and be sure you preserve the punctuation 
from the end of the sentence. 
Note that this problem is about manipulating and processing strings. 
As such, every detail about the string matters 
(e.g., case, punctuation, tabs, spaces, etc.).

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
# ----------------------------ALGO---------------------------
30
split the string into sentences delimited by either .?!
iterate over the string and look at each word in turn
if the las charcter is a sentence ending charaster 
use slice from the start of the sentence to the current word
get the length of each sentence and return the longest
*/
function longest(str) {
  let arr = str.split(' ')
  let endings = ['.', '?', '!']
  let length = 0;
  
  for (let i = 0; i <= arr.length - 1; i ++) {
    let currentWord = arr[i]
    length = currentWord.length
    if (endings.includes(currentWord[length - 1])) {
      let first = arr.slice(0, i + 1) 
      let second = arr.slice(i + 1)
      if (first.length > second.length) {
        return first.join(' ')
      } else { 
        return second.join(' ');
      }
    }
  }
}
console.log(longest("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longest("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.