/*
# -----------------------INSTRUCTIONS------------------------
Clean up the words
Given a string that consists of some words and an assortment 
of non-alphabetic characters, write a function that returns 
that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, 
you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).


# --------------------------PROBLEM--------------------------

# Input: string
# Output: string with only alphabetic characters and single spaces
# ---------------------------RULES---------------------------
 Explicit: no consecutive spaces

# Implicit: no empty strings 

BEYOND?

# --------------------------EXAMPLES-------------------------
cleanUp("---what's my +*& line?");    // " what s my line "
# ----------------------------ALGO---------------------------
# initalise an empty string 
iterate over the given string
add a space to the new string if the current character is non-alphabetic
unless the last character of the new string is a space
*/
function cleanUp(str) {
  let newStr = ''
  let singleSpaces = ''
  for (let count = 0; count < str.length; count++) {
    if (str[count].toLowerCase() >= 'a' && str[count].toLowerCase() <= 'z') {
      newStr = newStr + str[count];
    } else {
      newStr = newStr + ' ';
      if (newStr[newStr.length - 1] === ' ' && newStr[newStr.length - 2] === ' ') {
        newStr = newStr.slice(0, (newStr.length - 2) )
      }
    }
  }
  console.log(newStr)
}
cleanUp("---what's my +*& line?");    // " what s my line "