/*
# -----------------------INSTRUCTIONS------------------------
UTF-16 String Value

Write a funciton that determines and returns the UTF-16 string
value of a string passed in as an argument.
THe UTF-16 string value is the sum of the UTF-16 values of every 
character in the string.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: sum of UTF 16 values
# ---------------------------RULES---------------------------
# Explicit: use String.charCodeAt()

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
# ----------------------------ALGO---------------------------
# initalize a variable sum with a value of 0
iterate over the string and convert each character in turn to it's 
UTF 16 value.
add this value to the sum variable
continue the iteration to the end of the string
*/
function utf16Value(str) {
  let sum = 0;
  for (let count = 0; count < str.length; count++) {
    sum += str.charCodeAt(count);
  }
  return sum;
}
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0