/*
# -----------------------INSTRUCTIONS------------------------
Delete Vowels
Write a function that takes an array of strings and returns 
an array of the same string values, but with all vowels (a, e, i, o, u) removed.


# --------------------------PROBLEM--------------------------

# Input: array
# Output: array without vowels
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
# ----------------------------ALGO---------------------------
use replace to remove any vowels in the word and replace with ''
mao the array with the result of
using replace on each word
return this mapped array
*/
function removeVowels(arr) {
  return arr.map(word => {
    return word.replace(/[aeiou]/gi, '')
  })
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]