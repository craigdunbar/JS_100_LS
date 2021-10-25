/*
# -----------------------INSTRUCTIONS------------------------
# Clean up the words

remove all non-alphabetic words from the given string
and return the string

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: remove all non-alphabetic characters
            remove consecutive white spaces

# Implicit: 

# --------------------------EXAMPLES-------------------------
cleanUp("---what's my +*& line?");    // " what s my line "
# ----------------------------ALGO---------------------------
# initialise a function with string argument
initalize an array containing all the letters of the alphabet
iterate through each character in the string and
compare it to the array.
if the character is non-alphabetic replcae it with a space
once all the characters have been checked 
remove any consecutive white spaces
*/
function cleanUp(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  chars = str.split('');
  for (el = 0; el < chars.length; el++) {
    if (!alphabet.includes(chars[el])) {
      chars[el] = ' ';
    }
  }
  return chars.join('').replace(/  /g, "")
}
console.log(cleanUp("---what's my +*& line?") === " what s my line ");