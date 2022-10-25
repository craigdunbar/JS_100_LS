/*
# -----------------------INSTRUCTIONS------------------------

WeIrD StRiNg CaSe
Write a function toWeirdCase that accepts a string, and returns 
the same string with all even indexed characters in each word 
upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string with characters changed to upper and lowercase
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
# ----------------------------ALGO---------------------------
# split the string into an array of words
split the words into an subarrays of characters
for each sub array convert the even index to upper case
else lower case
*/
// completed in 24 mins as i got lost in the nested loops
function toWeirdCase(str) {
  let wordsArr = str.split(' ');
  let newWord = [];
  let newWordsArr = [];
  
  wordsArr.forEach(word => {
    let charsArr = word.split('');
    newWord = charsArr.map((char, idx) => {
      if (idx % 2 === 0) {
        return char = char.toUpperCase()
      } else {
        return char = char.toLowerCase()
      }
    });
    newWordsArr.push(newWord.join(''));
  })
  return newWordsArr.join(' ');
}
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"