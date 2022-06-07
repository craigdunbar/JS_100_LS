/*
# -----------------------INSTRUCTIONS------------------------

# Stringy Strings
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, 
always starting with a '1'. 
The length of the string should match the given integer.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: str of 1's and 0's
# ---------------------------RULES---------------------------
# Explicit: length of new string should match original

# Implicit: 

# --------------------------EXAMPLES-------------------------
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
# ----------------------------ALGO---------------------------

initalise a loop thats iterations mathch the length of the given integer
initalise a new string that starts with '1'
add alternating 1's and 0's until the loop is done
*/
function stringy(num) {
  let newStr = ''
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      newStr = newStr + '1';
    } else {
      newStr = newStr + '0';
    }
  }
  return newStr
}
console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");