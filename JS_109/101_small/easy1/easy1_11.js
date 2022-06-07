/*
# -----------------------INSTRUCTIONS------------------------

UTF-16 String Value

Write a funciton that determines and returns the UTF-16 string
value of a string passed in as an argument.
THe UTF-16 string value is the sum of the UTF-16 values of every 
character in the string.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: use String.charCodeAt() to determine the UTF-16 vlaue

# Implicit: 

# --------------------------EXAMPLES-------------------------
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
# ----------------------------ALGO---------------------------
# define the fucntion utf16Value with one parameter
initalise a variable total and assign it the value 0
initalise a loop starting at 0, ending when the loop is 
less than given string.length and increment by one

get the UTF 16 value for each charcater in the given string
add this to the total
return the total
*/
function utf16Value(str) {
  let total = 0;
  for (let count = 0; count < str.length; count++) {
    total += str.charCodeAt(count);
  }
  return total;
}
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811