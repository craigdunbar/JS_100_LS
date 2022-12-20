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
given the two strings return true if str1 includes every letter from str2
need to split the strings into arrays 
iterate over string2 and check if every character appears in str1 

*/
function substring(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase()
  if (str1 === '' || str2 === '') return false;
  return str2.split('').every(char => str1.includes(char));
}
// the above doesn't work for last test case.
// need to create two arrays of substrings form each given string
// then check if the same substring appears in both substring arrays

// get all substrings from both strings and push into two arrays
// iterate over the str1 substring array and see if it includes any of the str2 substring arrays
// and return the one that matches.

function substring(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  subArr1 = [];
  subArr2= [];

  for (let i = 0; i < str1.length; i ++) {
    let substring = str1.slice(i);
    for(let j = 0; j < substring.length; j++) {
      let substrings = substring.slice(0, j + 1)
        subArr1.push(substrings)
    }
  }
  for (let i = 0; i < str2.length; i ++) {
    let substring = str2.slice(i);
    for(let j = 0; j < substring.length; j++) {
      let substrings = substring.slice(0, j + 1)
        subArr2.push(substrings)
    }
  }
  subArr2 = subArr2.filter(el => el.length > 1);
  for (let count = 0; count < subArr2.length; count++) {

    if (subArr1.includes(subArr2[count])) {
      return true;
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