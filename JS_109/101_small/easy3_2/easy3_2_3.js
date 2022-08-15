/*
# -----------------------INSTRUCTIONS------------------------
# Stringy Strings
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, 
always starting with a '1'. 
The length of the string should match the given integer.


# --------------------------PROBLEM--------------------------

# Input:integer
# Output: string of 1's and 0's 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
# ----------------------------ALGO---------------------------
# given the integer argument 
initalise an empty string 
initalise a loop that starts at 0 and continues to integer
odd idx add 1 to str, even add 0

*/
function stringy(num) {
  let str = ''
  for (let idx = 0; idx < num; idx++) {
    if (idx % 2 === 0) {
      str = str + '1';
    } else {
      str = str + '0';
    }
  }
  return str;
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"