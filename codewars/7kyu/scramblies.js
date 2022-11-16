/*
# -----------------------INSTRUCTIONS------------------------
Complete the function scramble(str1, str2) that returns true 
if a portion of str1 characters can be rearranged to match 
str2, otherwise returns false.

# --------------------------PROBLEM--------------------------

# Input: two strings
# Output:boolean
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
# 
split str1 into an array of chars
iterate over the chars
if str2 includes the current char 
if it does remove the current char from str2 
if it doesnt contain the current char return false
return true if all the chars of str1 are included in str2
*/
function scramble(str1, str2) {
  let arr2 = str2.split('')
  let arr1 = str1.split('');
  for (let i = 0; i < arr2.length; i++) {
    let char = arr2[i]
    if (arr1.includes(char)) {
    let idx = arr1.indexOf(char);
    arr1.splice(idx, 1)
    } else {
      return false;
    }
  }
 return true;
}
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