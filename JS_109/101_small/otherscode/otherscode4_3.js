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
10:45
define a new array

split the first string inot an array of chars
iterate over the array
find the index of the current char in the other two strings
if the index !== -1 then add the current char to a new array
remove the current char form the 2 strings to avoid recounting
move to the net char in the first string
reutn the new array
*/
function commonChars(arr) {
  let dupArr = [];
  let count = 0;
  arr[0].split('').forEach(char => {
    for (let i = 1; i < arr.length; i++) {
      let wordArr = arr[i].split('');
      let index = wordArr.findIndex(el => el === char) 
      if (index >= 0) {
        count ++
        wordArr.splice(index , 1)
        arr[i] = wordArr.join('');
      }
    }
    if (count >= arr.length - 1) {
      dupArr.push(char)
      return count = 0;
    } else {
      return count = 0;
    }
  })
  return dupArr;
}

console.log(commonChars(['a', 'b'])); // === []);
console.log(commonChars(['ab', 'bc'])); //['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzz'])); // [