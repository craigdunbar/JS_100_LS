/*
# -----------------------INSTRUCTIONS------------------------
Scramblies
Complete the function scramble(str1, str2) that returns true 
if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.

Notes:

Performance needs to be considered.


# --------------------------PROBLEM--------------------------

# Input: two strings
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: Only lower case letters will be used (a-z). 
No punctuation or digits will be included.

# Implicit: 

# --------------------------EXAMPLES-------------------------
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
# ----------------------------ALGO---------------------------
# given the two string arguments
we need to see if str2 can be made from str1 characters
split the str2 into an array of characters
iterate over this array
or use array.filter fir the currentt character.
if arr.filter() rerurns the same number of characters as str2
we know it can be made
else it cant and we return false
*/
function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let count1 = 0;
  let count2 = 0;

  for (let count = 0; count < arr2.length; count ++) {
    let currentChar = arr2[count]
    count1 = arr1.filter(el => el === currentChar).length
    count2 = arr2.filter(el => el === currentChar).length

     if (count1 < count2) {
      return false
     }
  }
  return true;
}
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('rkqodlw',           'world'      ) === true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ) === true );
console.log(scramble('katas',             'steak'      ) === false);
console.log(scramble('scriptjavx',        'javascript' ) === false);
console.log(scramble('scriptingjava',     'javascript' ) === true );
console.log(scramble('scriptsjava',       'javascripts') === true );
console.log(scramble('javscripts',        'javascript' ) === false);
console.log(scramble('jscripts',          'javascript' ) === false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ) === true );
console.log(scramble('commas',            'commas'     ) === true );
console.log(scramble('sammoc',            'commas'     ) === true )
  