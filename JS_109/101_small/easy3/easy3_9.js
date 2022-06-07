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
# Output: string with non-alpha characters removed, and no double spaces
# ---------------------------RULES---------------------------
# Explicit: no consecutive spaces

# Implicit: no empty strings

# --------------------------EXAMPLES-------------------------
cleanUp("---what's my +*& line?");    // " what s my line "
# ----------------------------ALGO---------------------------
# use String.replace() method with regex to remove non-alphanumeric characters
use \s+ to remove consecutive whitespaces
*/
function cleanUp(str) {
  return str.replace(/[^A-Z]/gi, ' ').replace(/\s+/g, ' ')
}
console.log(cleanUp("---what's my +*& line?") ===  " what s my line ");
