/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 2)
Write a function that takes a string, doubles every consonant 
character in the string, and returns the result as a new string. 



# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: The function should not double vowels ('a','e','i','o','u'), 
digits, punctuation, or whitespace.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
# ----------------------------ALGO---------------------------
# same as before but have a conditional to not double vowels, digits, punctuation or spaces
*/
// function doubleConsonants(str) {
//   let arr = ['a', 'e', 'i', 'o', 'u', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '?', '-'];
//   return str.split('').map(el => {
//     if (!arr.includes(el)) {
//     return el + el;
//     } else {
//       return el
//     }
//   }).join('')
// }

// refactired without uding the long array
function doubleConsonants(str) {
  let newStr = '';
  for (let char of str) {
    // console.log(char)
    if (char.match(/[^a-z]/gi) || char.match(/[aeiou]/gi)) {
      newStr = newStr + char
    } else {
      newStr = newStr + char.repeat(2)
    }
  }
  return newStr;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""