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

BEYOND?

# --------------------------EXAMPLES-------------------------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
# ----------------------------ALGO---------------------------
# initliaze an empty array
split the given string argument into an array of characters
iterate over the array
if the current element is not the last elemnt of the new array
then add this character to the array
else skip it and move to the next character
*/
function crunch(str) {
  let arr = [];
  str.split('').forEach(el => {
    if (el !== arr[arr.length - 1]) {
      arr.push(el)
    }
  })
  return arr.join('')
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""