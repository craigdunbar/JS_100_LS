/*
# -----------------------INSTRUCTIONS------------------------
You are given a secret message you need to decipher. 
Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)


# --------------------------PROBLEM--------------------------

# Input: string
# Output:string
# ---------------------------RULES---------------------------
# Explicit: there are no special characters used, only letters and spaces

# Implicit: 

# --------------------------EXAMPLES-------------------------
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

# ----------------------------ALGO---------------------------
# 
create an empty array
split the string into an array of words
iterate over the words 
- determine how many numbers are at the start of the word
- use replace to get a number string
- use this number to get the letter equivalent using String.fromCharCode();
- add this letter to a new string

use replace to get a letters only string
-swap the first and last characters
do this for all the words

*/
function decipherThis(str) {
  let numStr = ''
  let letterStr = ''
  let newStr = ''

str.split(' ').forEach(word => {
  numStr = word.replace(/[a-z]/gi, '')
  newStr = newStr + String.fromCharCode(Number(numStr))

  letterStr = word.replace(/[^a-z]/gi, '')
  letterArr = letterStr.split('');
  let first = letterArr[0];
  let last = letterArr[letterArr.length - 1];
  letterArr[0] = last;
  letterArr[letterArr.length - 1] = first;
  newStr = newStr + letterArr.join('') + ' ';
  })
  return newStr;
}
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) // 'Have a go at this and see how you do'