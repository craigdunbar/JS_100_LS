/*
# -----------------------INSTRUCTIONS------------------------

How long are you?
Write a function that takes a string as an argument and returns 
an array that contains every word from the string, with each 
word followed by a space and the word's length. 
If the argument is an empty string or if no argument is passed, 
the function should return an empty array.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: array
# ---------------------------RULES---------------------------
# Explicit: You may assume that every pair of words in the string 
will be separated by a single space.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
# ----------------------------ALGO---------------------------

dplit the string into an array of words
map the array
the new elements should be the orignal string with a space and then the string length
return the mapped array
*/
function wordLengths(str) {
  if (str === '' || arguments.length === 0) return [];
  return str.split(' ').map(word => {
    return word = word + ' ' + word.length
  })
}
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []