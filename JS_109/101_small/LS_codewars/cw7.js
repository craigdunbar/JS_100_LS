/*
# -----------------------INSTRUCTIONS------------------------
Detect pangram
A pangram is a sentence that contains every single letter 
of the alphabet at least once. 
For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. 
Ignore numbers and punctuation.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: ignore punctuation and numbers

# Implicit: 

# --------------------------EXAMPLES-------------------------
"The quick brown fox jumps over the lazy dog." true
    
"This is not a pangram." // false
# ----------------------------ALGO---------------------------
# need to check each letter of the alphabet 
generate an array of all the letters of alphabet
iterate over that array and check if the given string contains
the current letter, split the str into an array of characters
if so continue
if not return false
return true if the iteration completes

*/
function isPangram(str) {
  let letters = ['a', 'b', 'c', 'd' ,'e', 'f', 'g' ,'h' ,'i', 'j',
                  'k', 'l', 'm', 'n','o','p','q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z']
  let strArr = str.toLowerCase().split('');

  for (let count = 0; count < letters.length; count ++) {
    if (!strArr.includes(letters[count])) {
      return false;
    }
  } 
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")) // false
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true