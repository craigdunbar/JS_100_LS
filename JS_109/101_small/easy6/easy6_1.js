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
# define a function with a aingle string argument
initalise an empty string
iterate over the string and add the character twice to the new string
*/
function repeater(str) {
  let newStr = '';
  for (let char of str) {
    newStr += char.repeat(2);
  }
  return newStr;
}
console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === "");
