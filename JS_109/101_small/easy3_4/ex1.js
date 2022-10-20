/*
# -----------------------INSTRUCTIONS------------------------
ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns 
a new string that contains the value of the original string
with all the consecutive duplicate characters collapsed into
a single character

# --------------------------PROBLEM--------------------------

# Input: string
# Output: new string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
# ----------------------------ALGO---------------------------
# define an empty array
convert the string to an array of chars
iterate over the array
if the last character of the new array is not the same as the 
current character, add this character to the new array
join the array back into a string
replace the double space in the new string with a single space
*/
function crunch(str) {
  let arr = str.split('');
  let nonDupArr = [];
  arr.forEach(el => {
    if (nonDupArr[nonDupArr.length - 1] !== el) {
      nonDupArr = nonDupArr.concat(el)
    }
  })
  return nonDupArr.join('');
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""