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
# Explicit: case matters and all characters matter.

# Implicit: no empty strings

BEYOND?

# --------------------------EXAMPLES-------------------------
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
# ----------------------------ALGO---------------------------
# given a string argument
spilt the string into an array of characters
refverse the string array and join it together again
compare to the original using strict equality
if they're the same return true else false
*/
function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr ? true : false
}
  // if (str === reverseStr) {
  //   return true;
  // }else {
  //   return false;
  // }
// }

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true