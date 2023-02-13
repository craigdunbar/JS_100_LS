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
if eother string is empty return false
get the length of each string and chose the smaller string
split the string into an array of chars
iterate over the array
get the index of the current char in the second string
if the index is not -1 add one to a counter
then remove this char from the search string using splice and the index number
if counter > 1 return true

return false if counter never gets larger than 1
*/
function substring(str1, str2) {
  let testStr = ''
  let searchStr = ''
  let count = 0;

  if (str1 === '' || str2 === '') return false;
  if (str1.length > str2.length) {
    testStr = str2
    searchStr = str1;
  } else {
    testStr = str1;
    searchStr = str2
  }
  let testArr = testStr.split('');
  for (let i = 0; i < testArr.length; i ++){
    let char = testArr[i].toLowerCase();
    let arr = searchStr.split('')
    let index = arr.findIndex(el => el === char)
    if (index >= 0) {
      count ++
      arr.splice(index, 1);
      searchStr = arr.join('')
    }
    if (count > 1) {
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