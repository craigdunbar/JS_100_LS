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
# Explicit: case matters, all characters matter

# Implicit: no empty srings

# --------------------------EXAMPLES-------------------------
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
# ----------------------------ALGO---------------------------
# define function with a string parameter
assign a variable with the string reversed
compare the two strings with the strict equality operator
if they are the same return true else false
*/
function isPalindrome(str) {
  let reverse = str.split('').reverse().join('');
  return reverse === str ? true : false
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true