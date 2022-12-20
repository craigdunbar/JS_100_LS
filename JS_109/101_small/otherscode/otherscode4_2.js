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
define an empty array to hole the chars

 - have to check each word for the letters in the first word

iterate over the array and split the current word into chars
iterate over the chars and see if the other words include the urrent char
if so add the current char to the new array
then remove the current char from the other words 
  - do this by using indexOf to get the index of the char 
  - then use splice to remove this char 
now repeat the check the next char in the forst word and see if it's included
in the other shortened words
return the new array
*/
function duplicates(arr) {
  let newArr = [];
  let index = 0;
  // let count = 0;
  let word = arr[0]
  let charsArr = word.split('');

  for (let i = 0; i < charsArr.length; i++) {
    let char = charsArr[i];
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      index = arr[j].indexOf(char);
      if (index !== -1) {
        count += 1;
        let currentArr = arr[j].split('')
        currentArr.splice(index, 1)
        arr[j] = currentArr.join('')
      } 
    }
    // console.log(count)
    if (count >= arr.length - 1) {
      newArr.push(char)
    }
  }
  return newArr;
}

console.log(duplicates(['a', 'b'])) // []
console.log(duplicates(['ab', 'bc'])) //[b]
console.log(duplicates(['bella', 'label', 'roller'])) // ['e', 'l', 'l']
console.log(duplicates(['cool', 'lock', 'cook'])) // ['c', 'o']
console.log(duplicates(['hello', 'goodbye', 'booya', 'random'])) // ['o']
console.log(duplicates(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzz'])) // []