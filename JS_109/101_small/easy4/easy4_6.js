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
# reverse the provided argument and compare to the original
if palindrome return true else false.
to reverse a number convert to a string, spilt into individual digits, 
reverse the order, then join back together and convert back to a number
*/
function isPalindromicNumber(num) {
  return num === Number(num.toString().split('').reverse().join(''));
}

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// Further exploration
// what if number starts with zero's?
// An integer cannot start with 0 as this changes it to an octal literal 
// ie 011 return 9 in node as 011 is an octal (base 8)
// to deal with an argument that starts with a 0 use parseInt() 
// with a radix (base) of 10 as second argument
// ie parseInt(022.toString(8), 10) => 22

function isPalindromicNumber(num) {
  num = parseInt(num.toString(8), 10)
  return num === Number(num.toString().split('').reverse().join(''));
}
console.log(isPalindromicNumber(034543));        
console.log(isPalindromicNumber(00123210));       
console.log(isPalindromicNumber(022));           
console.log(isPalindromicNumber(05));            