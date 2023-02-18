/*
# -----------------------INSTRUCTIONS------------------------
Given an array of strings made only from lowercase letters
return an array of all characters that show up within the 
given array(including duplicates).
For example: if a character occurs 3 times in all strings
but not 4 times, you need to include that character 3 times in
the final answer.

# --------------------------PROBLEM--------------------------

# Input: array of strings 
# Output: array of characters
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
[a, b] // []
[ab, bc] //[b]
['bella', 'label', 'roller'] // ['e', 'l', 'l']
['cool', 'lock', 'cook'] // ['c', 'o']
['hello', 'goodbye', 'booya', 'random'] // ['o']
['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', yyyzz'] // []
# ----------------------------ALGO---------------------------
30
dfeine an empty array
get the first elment(word) of the array
split the word into an array of chars
iterate over the chars array
check if each of the other words contain this char
- use fnd Index 
- if findIndex is >= 0 for all other words 
- add char to the empty array
- remove the char from the other words

return the new array
*/
function commonChars(arr) {
  let dupArr = [];
  let count = 0;
  arr[0].split('').forEach(char => {
    // console.log(char)
    for (let i = 1; i< arr.length; i ++) {
      let nextWord = arr[i].split('')
      let index = nextWord.findIndex(el => el === char);
      if(index >= 0) {
        count ++
        nextWord.splice(index, 1)
        arr[i] = nextWord.join('');
      }
    }
    if (count === arr.length - 1) {
      dupArr.push(char)
    }
    count = 0;
  })
  return dupArr;
}
console.log(commonChars(['a', 'b'])); // === []);
console.log(commonChars(['ab', 'bc'])); //['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzz'])); // [