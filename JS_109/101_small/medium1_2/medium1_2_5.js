/*
# -----------------------INSTRUCTIONS------------------------
Word to Digit
Write a function that takes a sentence string as an argument 
and returns that string with every occurrence of a "number word" — 
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
— converted to its corresponding digit character.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: string

# Implicit: string with all number words changed to digits

BEYOND?

# --------------------------EXAMPLES-------------------------
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
# ----------------------------ALGO---------------------------
# create an object containing all the number words as keys and the digit equivalent 
as the value
split the given sentence into an array of words 
iterate over the array and check to see if any of the words are included in the 
number words object keys
if it is then return the value and push to a new array
if it's not a number words then push it to the array as is

*/
function wordToDigit(str) {
let wordsObj = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
let newArr = [];
let wordsArr = str.split(' ').map(word => {
  if (word.endsWith('.')) {
    return word = word.split('').slice(0, word.length -1).join('');
  } else {
    return word;
  }
})

wordsArr.forEach(el => {
  if (Object.keys(wordsObj).includes(el)) {
    newArr.push(wordsObj[el]);
  } else {
    newArr.push(el)
  }
  return newArr;
})

 let newStr = newArr.slice(0, -2).join(' ')
 return newStr.concat('. ').concat(newArr[newArr.length - 1]).concat('.')
}
console.log(wordToDigit('Please call me at five five five one two three four . Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."