/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 2)
Write a function that takes a string, doubles every consonant 
character in the string, and returns the result as a new string. 

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit:  
The function should not double vowels ('a','e','i','o','u'), 
digits, punctuation, or whitespace.

# Implicit: 

# --------------------------EXAMPLES-------------------------
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
# ----------------------------ALGO---------------------------
define a vowel array
split the string into an array of chars
map the array 
if the elment is not a vowel double it, else return single vowel
*/
function doubleConsonants(str) {
  let vowelArr = Array.from('aeiou')
  return str.split('').map(el => {
    if (vowelArr.includes(el) || !el.match(/[a-z]/gi)) {
      return el;
    } else {
      return el+el;
    }
  }).join('')
  // console.log(vowelArr)
}
console.log(doubleConsonants("String"))
console.log(doubleConsonants('Hello-World!'))
console.log(doubleConsonants('July 4th'))
console.log(doubleConsonants(''))
