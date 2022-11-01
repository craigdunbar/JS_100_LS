/*
# -----------------------INSTRUCTIONS------------------------
For a given nonempty string s find a minimum substring t and 
the maximum number k, such that the entire 
string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return : an array [t, k]

# --------------------------PROBLEM--------------------------

# Input: string
# Output: arr with substring and integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

for string

s = "ababab" // ["ab", 3]

s = "abcde" // ["abcde", 1]

because for this string "abcde" the minimum substring t, 
such that s is t repeated k times, is itself.
# ----------------------------ALGO---------------------------
# 
define and empty array
iterate over the string argument
make a substring starting at index 0 and containing one character
check this substring against the next character
if it's not the same make another substring 
starting at zero again and this time with 2 character
check against the next two characters
if it's the same add to the array and also the result of str.length / number of chars
break out the loop
if not continue making the substrings
get the length of the 
*/
// function f(str) {
//   let arr = [];
//   for (let i = 0; i <= str.length; i ++) {
//     let substring = str.slice(0, i + 1);
//     let sublength = substring.length
//     let next = str.slice(sublength, sublength * 2);
//     if (substring === next) {
//       arr = arr.concat(substring).concat(str.length/ sublength);
//       return arr;
//     } else if (substring.length === str.length) {
//       arr = arr.concat(str).concat(1)
//       return arr;
//     }
//   }
// }
// this works but an easier check would be:
// susbstring.repeat(str.length/ susbstring/length) === str
function f(str) {
  let arr = [];
  for (let i = 1; i <= str.length; i ++) {
    let substring = str.slice(0, i);
    if (substring.repeat(str.length/ i) === str) {
      arr = arr.concat(substring).concat(str.length/ i);
      return arr;
    }
  }
}
console.log(f("ababab"))
console.log(f("abcde"))
// 012345
// abcabc
// 0 1
// a b

// 01 23
// ab ab 

// 012 345
// abc abc