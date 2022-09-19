/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Strings (Part 1)
Write a function that returns true if the string passed as an 
argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. 
For this problem, the case matters and all characters matter.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: case maters, all characters matter

# Implicit: no empty strings

# --------------------------EXAMPLES-------------------------
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
# ----------------------------ALGO---------------------------
# split the given string argument into an array of characters
reverser the array then join back into a string
if the original string and the reversed string are the same
return true, else return false
*/
function isPalindrome(str) {
  let newStr = str.split('').reverse().join('');
  return str === newStr ? true : false;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true