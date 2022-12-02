/*
# -----------------------INSTRUCTIONS------------------------
Palindromic numbers
Write a function that returns true if its integer argument is 
palindromic, or false otherwise. 
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
# 
convvert the number to a string
split the string into an array
reverse the array and join back into a string then a number
compare the numbers
if the same return true, if not return false
*/
function isPalindromicNumber(num) {
  let reversed = Number(num.toString().split('').reverse().join(''));
  return reversed === num ? true : false;
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true