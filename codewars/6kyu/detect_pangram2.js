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
create an empty object
spilt the string into an arrya of characters
iterate over the string 
add the current char as a key to the object or increase value by one if it exists
get an array of the object values
if this array contains a zero return false
else return true

*/
function isPangram(str) {
  let seenObj = {};
  str = str.toLowerCase().replace(/[^a-z]/gi, '')
  str.split('').forEach(el => {
    if (!Object.keys(seenObj).includes(el)) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1;
    }
  })
  if (Object.keys(seenObj).length !== 26) {
    return false;
  } else {
    return true;
  }
}
var string = "The quick brown fox jumps over the lazy dog." 
console.log(isPangram(string))//, true)

var string = "This is not a pangram."
console.log(isPangram(string))//, false)