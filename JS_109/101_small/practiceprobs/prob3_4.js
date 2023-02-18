/*
# -----------------------INSTRUCTIONS------------------------
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string 
# ---------------------------RULES---------------------------
# Explicit: 4th character of every second word should be uppercase.
other character will not be changed

# Implicit: if word has less than 4 characters nothing changes

# --------------------------EXAMPLES-------------------------a
console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

'Lorem Ipsum is simply dummy text of the printing world' 
every second word is starting at first word :
Ipsum, simply, text, the, world
and uppercase every 4 th letter :
IpsUm, simPly, texT, the, worLd
final string is
Lorem IpsUm is simPly dummy texT of the printing worLd'
# ----------------------------ALGO---------------------------
uppercase every 4th char in every second word
if word is less than 4 chars skip it

split the string into an array of words
iterate over the array using map and the element and the idx
if the idx is even do nothing
if the idx is odd and the word is longer than 4 chars
uppercase every 4th char 
return the mapped arr
*/
function toWeirdCase(str) {
  let arr = str.split(' ');
  return arr.map((el, idx) => {
    if (el.length < 4) {
      return el;
    } else if (idx % 2 === 0) {
      return el;
    } else if (el.length >= 4 && idx % 2 === 1) {
      return el.split('').map((char, index) => {
        if (index > 0 && (index + 1) % 4 === 0) {
          return char.toUpperCase();
        } else {
          return char;
        }
      }).join('')
    }
  }).join(' ');
}
console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".