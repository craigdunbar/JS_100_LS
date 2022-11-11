/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes a string as an argument and 
return a boolean, true if the string contains only vowels 
and false otherwise.

# --------------------------PROBLEM--------------------------
# Input:string

# Output:boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
hasOnlyVowels('aaeuiooae'); //true
hasOnlyVowels('tgbhrrf_00&'); //false

# -----------------ALGO and Data Structure ------------------
use string replace to remove all the vowels
the length should be 0
*/
function hasOnlyVowels(str) {
  return str.replace(/[aeiou]/gi, '').length === 0 ? true : false
}
console.log(hasOnlyVowels('aaeuiooae')); //true
console.log(hasOnlyVowels('tgbhrrf_00&')); //false