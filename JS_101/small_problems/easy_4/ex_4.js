/*
# -----------------------INSTRUCTIONS------------------------
# Palindromatic strings 1
write a function to return true if the given string is a
palindrome.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: case matters, all characters matter

# Implicit: 

# --------------------------EXAMPLES-------------------------
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
# ----------------------------ALGO---------------------------
# initialise function with string arguemnt
split string into characters
compare string to string reversed
return true if theyre the same, false otherwise
*/
function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true