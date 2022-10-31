/*
# -----------------------INSTRUCTIONS------------------------

In this kata you are required to, given a string, replace every 
letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: str of numbers
# ---------------------------RULES---------------------------
# Explicit: ignore non letters

# Implicit: 

# --------------------------EXAMPLES-------------------------
alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

# ----------------------------ALGO---------------------------
# define an object with letters as keys and aphabet postion as values
iterate over the string
define an empty array
for each character check if it's a letter
- if not skip it
use the current char to access the object property value 
- push this value to the array
return the array joined back to a str with spaces
*/
function alphabetPosition(str) {
  let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
            'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
            'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
            'p' : 16, 'q': 17, 'r' : 18, 's': 19, 't': 20,
            'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}
let numArr = [];
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char.match(/[^a-zA-Z]/)) continue;

  let num = obj[char]
  numArr = numArr.concat(num);
}
  return numArr.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight.")); 
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");