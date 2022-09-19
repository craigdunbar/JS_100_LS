/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Strings (Part 2)
Write another function that returns true if the string passed 
as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, 
and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome 
function you wrote in the previous exercise.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: case - insensitive, ignore non-alphanumeric

# Implicit: 

# --------------------------EXAMPLES-------------------------
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
# ----------------------------ALGO---------------------------
# use function from previous exercise to check for palindrome
define new function to make string lowercase and remove non-alphabetic characters
*/

function isRealPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return isPalindrome(str)
}

function isPalindrome(str) {
  let newStr = str.split('').reverse().join('');
  return str === newStr ? true : false;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false