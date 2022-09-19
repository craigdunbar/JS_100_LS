/*
# -----------------------INSTRUCTIONS------------------------
Palindromic Numbers
Write a function that returns true if its integer argument 
is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
# ----------------------------ALGO---------------------------
# to reverse an integer first convert to a string then split into an array
then reverse then join agian. finally conevert back to an integer
then cmpare reversed integer to original
return true of false for palindrome
*/
function isPalindromicNumber(num) {
  let reverseNum = Number(String(num).split('').reverse().join(''));
  return num === reverseNum ? true : false;
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true