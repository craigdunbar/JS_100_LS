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

BEYOND?

# --------------------------EXAMPLES-------------------------
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
# ----------------------------ALGO---------------------------
# given the integer argument
convert the integer to a string.
convert the string into an array of character.
reverse the array, join back to a string and convert back to number
compare the original integer to the reversed integer
*/
function isPalindromicNumber(num) {
  let reversedNum = Number(String(num).split('').reverse().join(''));
  return num === reversedNum ? true : false
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true