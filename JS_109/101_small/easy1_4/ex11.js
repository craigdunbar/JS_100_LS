/*
# -----------------------INSTRUCTIONS------------------------

UTF-16 String Value

Write a funciton that determines and returns the UTF-16 string
value of a string passed in as an argument.
THe UTF-16 string value is the sum of the UTF-16 values of every 
character in the string.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: use String.charCodeAt() to determine the UTF-16 vlaue

# Implicit: 

# --------------------------EXAMPLES-------------------------
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
# ----------------------------ALGO---------------------------
# 
iterate over the string
on each iteration converrt the element to the UTF value using 
String.charCodeAt() method add this value to a total variable
return the total 
*/
function utf16Value(str) {
  let total = 0;
  for (let count = 0; count < str.length; count ++) {
    total += str.charCodeAt(count)
  }
  return total;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0