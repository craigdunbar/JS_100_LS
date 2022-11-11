/*
# -----------------------INSTRUCTIONS------------------------

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position 
in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears 
earliest in the original string.

All letters will be lowercase and all inputs will be valid.


# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: All letters will be lowercase and all inputs will be valid.

# Implicit: 

# --------------------------EXAMPLES-------------------------
'aa b' => aa = 1 + 1 => 2
            b = 2 
  aa appears first so return aa

# ----------------------------ALGO---------------------------
# 
create an array of letters of alphabet
need to initialise a counter to hold the highest string value
also need an empty string to hold the highest string
split the string into an array of words
iterate over the array
for each word split the word into chars, map the chars array with
alphabet position values and reduce to a number
if the number is higher that the current counter make it the counter
and make the current word the highest string
*/
function high(str) {
  
  let lettersArr = Array.from('abcdefghijklmnopqrstuvwxyz')
  let wordsArr = str.split(' ');
  let highest = 0;
  let highStr = ''
  
  wordsArr.forEach(word => {
    let num = word.split('').map(el => el = lettersArr.indexOf(el) + 1)
              .reduce((a, b) => a + b, 0);
    if (num > highest) {
      highest = num;
      highStr = word;
    }
  })
  return highStr;
}

console.log(high('man i need a taxi up to ubud'))//, 'taxi');
console.log(high('what time are we climbing up the volcano')) //, 'volcano'); 
console.log(high('take me to semynak')) //, 'semynak');   
console.log(high('aa b')) //, 'aa');
console.log(high('b aa'))//, 'b');
console.log(high('bb d')) //, 'bb');
console.log(high('d bb')) //, 'd');
console.log(high('aaa b')) //, 'aaa');