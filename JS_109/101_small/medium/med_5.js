/*
# -----------------------INSTRUCTIONS------------------------
Word to Digit
Write a function that takes a sentence string as an argument 
and returns that string with every occurrence of a "number word" — 
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
— converted to its corresponding digit character.

# --------------------------PROBLEM--------------------------

# Input: string of alphabetic characters 
# Output: string of alphabtic and numerical characters
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
# ----------------------------ALGO---------------------------
# convert the string into an array of words delimited by spaces
iterate over the words array and check if each word is a "number word"
if it is change to the number equivalent string and return it 
if not return the word.
map would be a good option to return the new string
*/
function wordToDigit(str) {
  let wordArr = str.split(' ');
  let digitArr = []
 for( let count = 0; count < wordArr.length; count ++) {
   let word = wordArr[count];
   if(word.endsWith('.')) {
     word =  word.slice(0, (word.length -1))
   }
   
   switch (word) {
    case 'zero': 
      digitArr.push('0');
        break;
    case 'one': 
      digitArr.push('1');
        break;
    case 'two': 
      digitArr.push('2');
        break;
    case 'three': 
     digitArr.push('3');
     break;
    case 'four': 
      digitArr.push('4');
      break;
    case 'five': 
      digitArr.push('5');
      break;
    case 'six': 
       digitArr.push('6');
     break;
    case 'seven': 
       digitArr.push('7');
     break;
    case 'eight': 
       digitArr.push('8');
     break;
    case 'nine': 
       digitArr.push('9');
     break;
    default:
      digitArr.push(word);
           
    }
  };
  digitArr[(digitArr.length) - 2] = `${digitArr[(digitArr.length) - 2]}.`
   return digitArr.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."