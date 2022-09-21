/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 2)
Write a function that takes a string, doubles every consonant 
character in the string, and returns the result as a new string. 


# --------------------------PROBLEM--------------------------

# Input: str
# Output: new str
# ---------------------------RULES---------------------------
# Explicit: double only consonants

# Implicit: 

# --------------------------EXAMPLES-------------------------
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
# ----------------------------ALGO---------------------------
# split the string into an array of characers
iterate over the array
unless the character is a vowell, or non-alphabetic character double it
use match to cheack the character 
*/
function doubleConsonants(str) {
  let arr = str.split('');
  let newArr = arr.map(el => {
    if (el.match(/[aeiou - ? !]/)) {
      return el;
    } else {
      return el + el
    }
  });
  return newArr.join('');
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
