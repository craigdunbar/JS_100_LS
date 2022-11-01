/*
# -----------------------INSTRUCTIONS------------------------

A pangram is a sentence that contains every single letter of 
the alphabet at least once. 
For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.


# --------------------------PROBLEM--------------------------

# Input: str
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
var string = "The quick brown fox jumps over the lazy dog."
assert.strictEqual(isPangram(string), true)

var string = "This is not a pangram."
assert.strictEqual(isPangram(string), false)

# ----------------------------ALGO---------------------------
# create an empty array
iterate over the string
if the array doesn't include the current letter
add the letter to the array
continue to the end of the string
if array.length === 26 its a pangram
*/
function isPangram(string) {
  let lettersArr = [];
  let str = string.replace(/[^a-z]/gi, '')
  for (char of str) {
    if (!lettersArr.includes(char.toLowerCase())) {
      lettersArr = lettersArr.concat(char.toLowerCase())
    }
  }
  return lettersArr.length === 26 ? true : false
}


var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)) //, true)

string = "This is not a pangram."
console.log(isPangram(string)) //, false)