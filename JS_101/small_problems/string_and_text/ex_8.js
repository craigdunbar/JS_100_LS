/*
# -----------------------INSTRUCTIONS------------------------

# How long are you?
Given a string argument return an array that contains every
word from the string, with each word followed by a space and
the word's length

# --------------------------PROBLEM--------------------------

# Input: string
# Output: array of strings
# ---------------------------RULES---------------------------
# Explicit: words in string seperated by a space, if no argument
is passed return an empty array

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]
# ----------------------------ALGO---------------------------
# initalize a function with a string parameter
split the string to an array of strings
map the elements of the array but concat 
the string.length to the end of the string
return the new array of strings and lenghts

*/
function wordLengths(string = '') {
  if (string.length === 0) {
    return []
  } else {
  return string
    .split(' ')
    .map((element) => element + ' ' + element.length);
}
}

// LS solution uses arguments.length to determine
// if no argument was passed. I used a default parameter.
// The guard clause then becomes:
// if (arguments.length === 0 || words.length === 0) 

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
