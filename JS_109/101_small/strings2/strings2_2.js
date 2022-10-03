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
# iterate over the given array using map
for each element use replace to remove the vowels 
return the non vowel element 
*/
function removeVowels(arr) {
  return arr.map(el => el.replace(/[aeiou]/gi, ''))
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]