/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 1)
Write a function that takes a string, 
doubles every character in the string, and returns the result 
as a new string.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: new string
# ---------------------------RULES---------------------------
# Explicit: double every character

# Implicit: 

# --------------------------EXAMPLES-------------------------
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
# ----------------------------ALGO---------------------------
split the string into an array and map the array doubling the chars
*/
function repeater(str) {
  return str.split('').map(el => el + el).join('')
}
console.log(repeater('Hello'))
console.log(repeater('Good job!'))
console.log(repeater(''))

