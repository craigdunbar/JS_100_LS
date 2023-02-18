/*
# -----------------------INSTRUCTIONS------------------------
Given two strings, your job is to find out if there is a 
substring that appears in both strings. You will return true
if you find a substring that apppears in both, or false if not.
We only care about substrings that are longer than one letter.

# --------------------------PROBLEM--------------------------

# Input: strings
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: case insensetive

# Implicit: 

# --------------------------EXAMPLES-------------------------a
'Something', 'Fun' // false
'Something', 'Home' // true
'Something', '' // false
'', 'Something' // false
'BANANA', 'banana' // true
'test', 'lllt' // false
'', '' // false
'1234567' , '541265'
'supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou' // true

# ----------------------------ALGO---------------------------
iterate over the  first string 
generate substrings of two chars or more in lowercase
it str2 in lowercase includes the substring return true
else continue to add chars

*/
function substring(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let substring = str1.slice(i).toLowerCase()
    for (let j = 1; j < substring.length; j ++) {
      let substrings = substring.slice(0, j + 1)
      if (str2.toLowerCase().includes(substrings)) return true;
    }
  }
  return false;
}
console.log(substring('Something', 'Fun') === false)
console.log(substring('Something', 'Home') === true)
console.log(substring('Something', '') === false)
console.log(substring('', 'Something') === false)
console.log(substring('BANANA', 'banana') === true)
console.log(substring('test', 'lllt') === false)
console.log(substring('', '') === false)
console.log(substring('1234567' , '541265') === true)
console.log(substring('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true)