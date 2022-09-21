/*
# -----------------------INSTRUCTIONS------------------------
Double Char (Part 1)
Write a function that takes a string, 
doubles every character in the string, and returns the result 
as a new string.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: new string
# ---------------------------RULES---------------------------
# Explicit: double each character, return new string

# Implicit: 

# --------------------------EXAMPLES-------------------------
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
# ----------------------------ALGO---------------------------
# define an empty string
iterate over the given string and add the characters doubled to the empty string
*/
function repeater(str) {
  let newStr = '';
  for (let char of str) {
    newStr = newStr.concat(char.repeat(2))
  }
  return newStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""