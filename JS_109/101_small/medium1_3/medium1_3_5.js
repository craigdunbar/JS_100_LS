/*
# -----------------------INSTRUCTIONS------------------------
Word to Digit
Write a function that takes a sentence string as an argument 
and returns that string with every occurrence of a "number word" — 
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
— converted to its corresponding digit character.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string with numerals
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
# ----------------------------ALGO---------------------------
# split the string into an array of words
iterate over the array of words and transform any number word with it's numerocal
equivalent
use map to so the transformation
use an object to hold the number words as keys and the values would be the digits
if the word ends with a period remove the period, search the object and if the 
word is found convert to a digit then add the period back on.
join the mapped array back to a string and return it
*/
function wordToDigit(str) {
  let arr = str.split(' ');
  let wordsObj = {zero : '0', one: '1', two: '2', three: '3', four: '4', five: '5',
  six: '6', seven: '7', eight: '8', nine: '9'}
  
  let digitArr = arr.map(word => {
    if( word.endsWith('.')) {
      word = word.slice(0, word.length - 1)
    }
    if (Object.keys(wordsObj).includes(word)) {
      return word = wordsObj[word]
    } else {
        return word;
      }
  })
  digitArr[digitArr.length - 2] = digitArr[digitArr.length - 2].concat('.')
  return digitArr.join(' ');
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."