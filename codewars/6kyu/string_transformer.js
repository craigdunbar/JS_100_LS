/*
# -----------------------INSTRUCTIONS------------------------
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
"Example Input" ==> "iNPUT eXAMPLE"

# ----------------------------ALGO---------------------------
# 
create an empty array
split string into an array of words
iterate over the array
for each word split into an array of chars
if char is lowercase make it uppercase and vice versa
join the chars array back into a word 
push this word to the empty array
reverser the array and return it
*/
function stringTransformer(str) {
  let newArr = [];
  let newWord = '';
  str.split(' ').forEach(word => {
    word.split('').forEach(char => {
      if(char === char.toLowerCase()) {
        newWord += char.toUpperCase()
      } else {
        newWord += char.toLowerCase()
      }
    })
    newArr.push(newWord)
    newWord = '';
  })
  return newArr.reverse().join(' ');
}
console.log(stringTransformer("Example Input"))// ==> "iNPUT eXAMPLE")