/*
# -----------------------INSTRUCTIONS------------------------
Complete the function scramble(str1, str2) that returns true 
if a portion of str1 characters can be rearranged to match 
str2, otherwise returns false.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.


# Implicit: 

# --------------------------EXAMPLES-------------------------
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

# ----------------------------ALGO---------------------------
# 12
split both strings into array's of characters
iterate over the second string and check if the char is included in the first
if so add one to a counter
remove the char from str1
if at the end the counter === str2.length then return true
*/
function scramble(str1, str2) {
  let count = 0;
  let arr1 = str1.split('');
  str2.split('').forEach(el => {
    if (arr1.includes(el)) {
      count += 1;
      let idx = arr1.findIndex(val => val === el)
      arr1.splice(idx,1)
    }
  })
  return count === str2.length ? true : false
}
console.log(scramble('rkqodlw', 'world')) // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // ==> True
console.log(scramble('katas', 'steak')) // ==> False
console.log(scramble('rkqodlw',           'world'      )) //, true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   )) //, true );
console.log(scramble('katas',             'steak'      )) //, false);
console.log(scramble('scriptjavx',        'javascript' )) //, false);
console.log(scramble('scriptingjava',     'javascript' )) //, true );
console.log(scramble('scriptsjava',       'javascripts')) //, true );
console.log(scramble('javscripts',        'javascript' )) //, false);
console.log(scramble('jscripts',          'javascript' )) //, false);
console.log(scramble('aabbcamaomsccdd',   'commas'     )) //, true );
console.log(scramble('commas',            'commas'     )) //, true );
console.log(scramble('sammoc',            'commas'     )) //, true )