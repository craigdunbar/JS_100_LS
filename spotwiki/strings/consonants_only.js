/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes a string as an argument and 
return a boolean, true if the string contains only consonants 
and false otherwise

# --------------------------PROBLEM--------------------------
# Input:string

# Output: boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
hasOnlyConsonants('typRRWQQL'); //true
hasOnlyConsonants('AccdE4$$ __ '); //fa;se

# -----------------ALGO and Data Structure ------------------
same as before only replace anything that's not a vowel
*/


function hasOnlyConsonants(str) {
  return str.replace(/[^aeiou]/gi, '').length === 0 ? true : false
}
console.log(hasOnlyConsonants('typRRWQQL')); //true
console.log(hasOnlyConsonants('AccdE4$$ __ ')); //fa;se