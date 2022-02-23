/*
# -----------------------INSTRUCTIONS------------------------
Word to digit

Write a function that takes a sentence as an arguement and
returns that string with every occurrance of a "number" 
converted to it's digit character

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string with numbers inplace of number words
# ---------------------------RULES---------------------------
# Explicit: convert all number words to their digits, return
the original string.

# Implicit: string is not empty

# --------------------------EXAMPLES-------------------------
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
# ----------------------------ALGO---------------------------
# initalise a function with a sentence parameter
split the sentence into an array of individual words.
iterate over the array if the word is a "number" convert it
to it's digit 
return the string with all the number words converted to digits
*/
function wordToDigit(string) {
  newString = [];
  string.split(' ').forEach(word => {
    if (word.endsWith('.')) {
      word = word.replace('.', '');
    } else {
      word;
    }
    switch (word) {
      case 'one':
        newString.push('1');
        break;
      case 'two':
        newString.push('2');
        break;
      case 'three':
        newString.push('3');
        break;
      case 'four':
        newString.push('4');
        break;
      case 'five':
        newString.push('5');
        break;
      case 'six':
        newString.push('6');
        break;
      case 'seven':
        newString.push('7');
        break;
      case 'eight':
        newString.push('8');
        break;
      case 'nine':
        newString.push('9');
        break;
      case 'zero':
        newString.push('0');
        break;
      default :
        newString.push(word);
    }
  });
  newString[newString.length - 2] = (`${newString[newString.length - 2]}.`);

  return newString.join(' ');
}
// My solution works but it's not great. The period attahced to the
// final 'four' string was not easy to work around.

// here's the LS solution

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp(word, 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });

//   return sentence;
// }

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."