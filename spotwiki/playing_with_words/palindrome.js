/*
# -----------------------INSTRUCTIONS------------------------
A word, sentence, or longer written work that reads the same backwards

Create a function that takes one string as an argument and returns 
a boolean value, true if the string is a palindrome and false if it's not

# --------------------------PROBLEM--------------------------
# Input:string

# Output: boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
isPalindrome('kayak'); //true
isPalindrome('apple'); //false

# -----------------ALGO and Data Structure ------------------
split str into an array, reverse it and join it again
if it's the same as the original str return true, else false
*/
function isPalindrome(str){
  return str.split('').reverse().join('') === str ? true : false
}
console.log(isPalindrome('kayak')); //true
console.log(isPalindrome('apple')); //false
