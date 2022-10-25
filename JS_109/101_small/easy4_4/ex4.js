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

# Explicit: case matters

# Implicit: 

# --------------------------EXAMPLES-------------------------
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
# ----------------------------ALGO---------------------------
# split the string into an array of characters
reverser the array
join array back into string
compare the strings
*/
function isPalindrome(str) {
  let reverse = str.split('').reverse().join('')
  return str === reverse ? true : false
  // console.log(reverse);
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true