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
# loop over str1 and check if it contains the characters in str2
create an array of str1 characters
get each character from str2 and compare it to the characters
in str1
if the current character matches a character in str1 
add it to a new string
at the end of the iteration compare the new string to str2
if it matches return true else false
*/
function scramble(str1, str2) {
  let arr = str1.split('')
  
  for (let count = 0; count < str2.length; count ++) {
    let index = arr.findIndex(el => el === str2[count]);
    if (index === -1 ) {
      return false;
    } else {
      arr.splice(index, 1)
    }
  }
  return true;
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('jcedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);