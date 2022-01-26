/*
# -----------------------INSTRUCTIONS------------------------

# Delete vowels

Take an array of strings and return an array of the same
string values with the vowels removed.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: remove all vowels, return an array

# Implicit: array not empty

# --------------------------EXAMPLES-------------------------
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
# ----------------------------ALGO---------------------------
# initalize a function with array parameter
initialise an iteration
loop through the elements of the given array
remove all vowels from each element 
return the array

*/
function removeVowels(array) {
return array.map(subArr => subArr.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
