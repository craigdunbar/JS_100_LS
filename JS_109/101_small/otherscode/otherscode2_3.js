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
7:30
could do this with array and splice
make arrays of the two strings
iterate over the second string and look fo rthe corresponding character in the 
first string
if the char is found add one to a counter and remove the char
-so this with findIndex and splice
if the counter is the same as arr.length return true
else return false

*/
function scramble(str1, str2) {
  let counter = 0;
  let arr1 = str1.split('')
  str2.split('').forEach(char => {
    let idx = arr1.findIndex(num => num === char)
    if (idx >= 0) {
      counter += 1;
      arr1.splice(idx, 1)
    }
  })
  return counter === str2.length ? true : false
}
console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('jcedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);