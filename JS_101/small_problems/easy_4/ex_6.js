/*
# -----------------------INSTRUCTIONS------------------------
# Palindromic numbers
Funciton returns true if integer is a palindrome, false if not
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
# since integers are primitive values
need to convert integer to string to do comparison
*/
function isPalindromicNumber(num) {
  reversedNum = Number(num.toString().split('').reverse().join(''));
  return (num === reversedNum) 
  }

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true