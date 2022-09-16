/*
# -----------------------INSTRUCTIONS------------------------
# Stringy Strings
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, 
always starting with a '1'. 
The length of the string should match the given integer.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string
# ---------------------------RULES---------------------------
# Explicit: always start with a one

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
# ----------------------------ALGO---------------------------
# define an empty string
creat a loop tha iterates the given integer number of times
if the index is odd add a 1 to the string else a 0
return the string
*/
function stringy(num) {
  let str = '';
  for (let count = 1; count <= num; count ++) {
    if (count % 2 === 1) {
      str = str + '1'
    } else {
      str = str + '0'
    }
  }
  return str;
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"