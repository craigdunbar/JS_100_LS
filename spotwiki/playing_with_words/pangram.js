/*
# -----------------------INSTRUCTIONS------------------------
A phrase or sentence containing all 26 letters of the alphabet 
(ideally repeating as few letters as possible). 
You may remember this one from typing class: 
"The quick brown fox jumped over the lazy sleeping dog," 
but Willard Espy came up with a shorter and more interesting one: 
"Bawds jog, flick quartz, vex nymphs." 
An abundance of pangrams, using some very obscure words or 
initials can be found.

Create a function that takes a string as an argument and 
returns a boolean value, true if the word is a pangram 
and false if it's not

# --------------------------PROBLEM--------------------------

# Input: string 
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
isPangram("The quick brown fox jumped over the lazy sleeping dog,"); //true
isPanagram('abcd'); //false

# ----------------------------ALGO---------------------------
# 
remove the spaces from the string
creat an empty object to hold the seen letters
split the string argument into an array of letters
if the current letter of the array is included in the letters array
create an object key 
if the object key already exists add one to the value
at the end of the iteration the object keys array should be 26 characters
*/

function isPangram(str) {
  str = str.replace(/\s/g, '').toLowerCase()
  let seenObj ={};

  str.split('').forEach(el => {
    if (!Object.keys(seenObj).includes(el)) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1;
    }
  })
  return Object.keys(seenObj).length === 26 ? true : false
}
console.log(isPangram("The quick brown fox jumped over the lazy sleeping dog")); //true
console.log(isPangram('abcd')); //false