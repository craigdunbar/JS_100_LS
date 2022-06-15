/*
# -----------------------INSTRUCTIONS------------------------
Delete Vowels
Write a function that takes an array of strings and returns 
an array of the same string values, but with all vowels (a, e, i, o, u) removed.



# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
# ----------------------------ALGO---------------------------
# iterate over the given array
map each character of each element in the array to a new array
if the character does not match a vowel
return the new array 
*/
// function removeVowels(arr) {
//   return arr.map(el => {
//     return el.split('').filter(char => {
//       if (!['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
//         return char;
//       }
//     }).join('');
//   });
// }
// refactored
function removeVowels(arr) {
  return arr.map(el => el.replace(/[aeiou]/gi, ''))
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]