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
# if either argumnent is an empty string return false
comparison is case insensetive so convert both string args to lowercase
split the strings into arrays
iterate over the first word and check if each letter of the second word appears in it
use array.every() to return true or false
*/
// function substringTest(str1, str2) {
//   if (str1 === '' || str2 === '') {
//     return false;
//   }

//   let str1Arr = str1.toLowerCase().split('');
//   let str2Arr = str2.toLowerCase().split('');

// let indexArr = [];
//  for (let i = 0; i < str2Arr.length; i ++) {
//   currentChar = str2Arr[i];
//   let index = str1Arr.findIndex(el => el === currentChar);
//   if (index === -1) {
//     return false;
//   }
//   str1Arr.splice(index, 1)
//   if (str1Arr.join('').length  < str1.length - 2) {
//     return true;
//   }
//  }
// }
// the above solution works but the question asked specifiaclly if there was
// a substring that appears in both strings so I need to generate an array of all substring
// for both the given strings and then see if they have the same one

function allSubstrings(str) {
  let substringsArr = [];

  for (index =0; index < str.length; index++) {
    substring = str.slice(index)
    for (let count = 0; count < substring.length; count ++) {
      substrings = substring.slice(0, count + 1)
      substringsArr = substringsArr.concat(substrings);
    }
  }
  return substringsArr;
}

function substringTest(str1, str2) {
  str1= str1.toLowerCase()
  str2 = str2.toLowerCase()

  let substringsArr1 = allSubstrings(str1).filter(el => el.length > 1)
  let substringsArr2 = allSubstrings(str2).filter(el => el.length > 1)

  for (let i = 0; i < substringsArr2.length; i++) {
    if (substringsArr1.includes(substringsArr2[i])) {
      return true;
    } 
  }
  return false;
}

console.log(substringTest('Something', 'Fun' ) === false);
console.log(substringTest('Something', 'Home' ) === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567' , '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);