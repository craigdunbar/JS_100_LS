/*
# -----------------------INSTRUCTIONS------------------------
Writte a function scramble(str1, str2) that returns true if a 
portion of str1 characters can be rearranged to match str2,
otherwise return false.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: only lowercase letters will be used.
No punctuation or digits will be included.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
str1 is 'rkqodlw' and str2 is 'world' return true
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' return true
str1 is 'katas' and str2 is 'steak' return false
# ----------------------------ALGO---------------------------
split both strings into arrays
define an empty array
iterate over str2 and check if str1 includes each character
if the character is present in str1 push the char to an empty array
and remove it using splice and findIndex from str1
- to account for multiples of the same char
if the holding array === str2 after the iteration return true
*/
function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let newArr = [];
  let index = 0
  for (let i = 0; i < arr2.length; i ++) {
    let char = arr2[i]
    if (arr1.includes(char)) {
      newArr = newArr.concat(char);
      index = arr1.findIndex(el => el === char);
      arr1.splice(index, 1)
    }
  }
  return newArr.join('') === str2;
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('jcedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
