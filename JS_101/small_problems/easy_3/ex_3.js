/*
# -----------------------INSTRUCTIONS------------------------

# stringy strings
# --------------------------PROBLEM--------------------------
# write a function that takes a number arguement and returns a string of '1's and '0's with length equal to the given number

# Input: number
# Output: string of 1's and 0's
# ---------------------------RULES---------------------------
# Explicit: string must be length of goven number
            string must start with '1'

# Implicit: 

# --------------------------EXAMPLES---------------------------------------
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
# ----------------------------ALGO----------------------------------------
# 
initalise a function with number arguement
initalise empty string
initialise for loop
start count at zero, continue until count = num, increase count by one each time
on each iteration if count is even add a '1' else add a '0'
end loop
print string
*/
// function stringy(num) {
//   str = ''
//   for (count = 0; count < num; count++) {
//     if (count % 2 === 0) {
//       str += '1'
//     } else {
//       str += '0'
//     }
//   }
//     return str
// }

// using a ternary operator
function stringy(num) {
  str =''
  for ( let count = 0; count < num; count++) {
    let digit = ((count % 2) === 0) ? 1 : 0;
    str += digit
  }
  return str
}
console.log(stringy(6) ===  "101010");
console.log(stringy(9)  ===  "101010101");
console.log(stringy(4)  ===  "1010");
console.log(stringy(7) ===  "1010101");