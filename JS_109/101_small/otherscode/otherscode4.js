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
# starting with the first letter of the first word
check if the other words contain this letter
if all the words include this letter
push this letter to a new array
remove this letter from the words

we can find the index of the letter to determine where it should be removed from
if it's not there the index will be -1
ie 
let arr = ['bella', 'label', 'roller'] 
current character is arr[0].split('')[0] => 'b'
let firstndex = arr[1].split('').findIndex(el => el === 'b') => 2
let secondIndex = arr[2].split('').findIndex(el => el === 'b') => -1
if(firstIndex >= 0 && secondIndex >= 0) then push 'b' to a new array
in this case thats not true so 'b' doesnt get pushed
we need a loop to determine current character 
and also a loop for number of wrods in the array
*/
function commonChars(arr) {
  let commonArr = [];
  let count = 1;
  let charCount = 0;
  // let index = 0;
  // for (let count = 0; count < arr.length; count ++) {
    for (let index = 0; index < arr[0].length; index ++ ) {
      currentChar = arr[0][index]
      // console.log(currentChar)
    while (count < arr.length) {
      let wordArr = arr[count].split('')
      let index = wordArr.findIndex(el => el === currentChar);
      // console.log(index)
      if (index >= 0) {
        charCount += 1;
       wordArr.splice(index, 1);
       arr[count] = wordArr.join('');
      }
      count += 1;
      if (charCount === arr.length - 1) {
        commonArr = commonArr.concat(currentChar);
      };
    }
    count = 1;
    charCount = 0;
    // console.log(commonArr)
  }
  return commonArr;
}

console.log(commonChars(['a', 'b'])); // === []);
console.log(commonChars(['ab', 'bc'])); //['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzz'])); // []