/*
# -----------------------INSTRUCTIONS--------------------------------------

# ddaaiillyy ddoouubbllee

# --------------------------PROBLEM----------------------------------------
write a function that takes a string arguement
and returns a new string with all consecutive duplicate characters reduced to single

# Input: string
# Output: new string
# ---------------------------RULES-----------------------------------------
# Explicit: all consecutive duplicate characters removed

# Implicit: 

# --------------------------EXAMPLES---------------------------------------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
# ----------------------------ALGO----------------------------------------
# initialise function with string arguement
  initialise an empty string
  iterate through given string and add characters to new string 
  if not duplicate of previous character
*/
function crunch(str) {
  newString = ''
  for (let el = 0; el < str.length; el++) {
    let char = str.charAt(el);
    if (newString[newString.length - 1] !== char) {
      newString += char
    }
  }
  return newString
}
console.log(crunch('ddaaiillyy ddoouubbllee')  === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a')  === "a");
console.log(crunch('') === "");

// further exploration
// if iteration stops a str.length - 1 then the last character in the string
// is not checked and therefore unless the last two characters
// are duplicates the code fails

// RegEx
// function crunch(str) {
//   newStr = str.replace((/(.)(?=\1)/g), '');
//    return newStr;
// }

// (.) => . character matches any single character, 
// the () creates a group capture which is referred to as \1,
// ?=\1 is a positive lookahead looking at one character after 
// the current one, if it's the same the regex captures it
// and replaces it with an empty string.