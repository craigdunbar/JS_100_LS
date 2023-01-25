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
since we need to replace the string mumeral with a digit we can use an object
object will have strings as keys and digits as values
split the atring argument into an array of words
iterate over the words
if the word ends in a period, remove the period and continue below
if the current word is included in the object keys
- use Object.keys(obj) to get an array of the keys
- use includes() to check if word is in the keys array
replace it with the digit (value)
if the word had ended in a period it must be added on here
if not continue on to the next word
*/
function wordToDigit(str) {
  let numObj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
                seven: 7, eight: 8, nine: 9}
  let wordsArr = str.split('. ')[0];
  return wordsArr.split(' ').map(word => {
    if (word.endsWith('.')) {
      word = word.split('').slice(0, -1).join('')
    }
    if (Object.keys(numObj).includes(word)) {
      return word = numObj[word]
    } else {
      return word;
    }
  }).join(' ') +'. ' + str.split('. ')[1] // easier to add the period to the second last word after the join
  // return wordsArr.join('');
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."