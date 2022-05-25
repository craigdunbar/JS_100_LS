/*
# -----------------------INSTRUCTIONS------------------------
ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns 
a new string that contains the value of the original sring
with all the consecutive duplicate characters collapsed into
a single character

# --------------------------PROBLEM--------------------------

# Input: string containing consecutive duplicate characters
# Output: string of single charcters
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
# split the given string into an array of characters.
iterate over the string and add the first character to a new array
compare the next character with the last character of the new array and if they are the same don't add it.
if they are different add it to the new array.
continue until all the letters have been checked.

*/
function crunch(string) {
  let arr = string.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr[(newArr.length) - 1] !== arr[i]) {
      newArr.push(arr[i])
    }
  }
    return newArr.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
