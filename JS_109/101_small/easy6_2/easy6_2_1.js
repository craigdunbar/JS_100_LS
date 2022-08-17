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
# Explicit: double each character, return new string

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
# ----------------------------ALGO---------------------------
# split the string argument into an array of characters
map this array doubling hte characters on each iteration
join the array back into a string and return this string
*/
function repeater(str) {
  return str.split('').map(el => el + el).join('');
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""