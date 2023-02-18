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
8
set a counter at 0
split string 2 into an array of chars
iterate over the array
if str 1 includes the current char 
- use findIndex to confirm 
- if findIndex returns -1 return false
- else add one to a counter
remove the current char from str1 to avoid counting it twice
 - do this using the index and splice
 if the counter === str2.length return true
*/
function scramble(str1, str2) {
  let count = 0;
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let i = 0; i < arr2.length ; i ++) {
    let index = arr1.findIndex(el => el === arr2[i])
    if (index === -1) {
      return false;
    } else { 
      count += 1;
      arr1.splice(index, 1)
    }
  }
  if (count === str2.length) return true;
}
console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('jcedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);