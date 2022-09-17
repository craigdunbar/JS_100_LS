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
# Output: string
# ---------------------------RULES---------------------------
# Explicit: no consectutive spaces

# Implicit: no empty strings

# --------------------------EXAMPLES-------------------------
cleanUp("---what's my +*& line?");    // " what s my line "
# ----------------------------ALGO---------------------------
# use regex and string replace to remove the non-alphabetic characters
and then use replace again to remove any consectutive spaces
*/
function cleanUp(str) {
  return str.replace(/[^a-z]/gi, ' ').replace(/\s+/g, ' ');
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "