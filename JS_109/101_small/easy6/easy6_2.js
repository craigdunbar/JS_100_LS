/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 2)
Write a function that takes a string, doubles every consonant 
character in the string, and returns the result as a new string. 



# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
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
# same idea as previous question but vowels and non-aplhabetic 
characters should not be doubled.
*/
function doubleConsonants(str) {
  let newStr = '';
  for (let char of str) {
    if (char.match(/[^a-z]/i) || (char.match(/[aeiou]/i))) {
      newStr += char
    } else {
      newStr += char.repeat(2);
    }
  }
  return newStr;
}

console.log(doubleConsonants('String') ===  "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July_4th') === "JJullyy_4tthh");
console.log(doubleConsonants('') ===  "");