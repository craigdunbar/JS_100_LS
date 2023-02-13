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
# 31
split the given string into an array of words
iterate over the array using map
if the word.length  < 4 return the word unchanged
if the word.length >= 4 
-split the word into an array of chars
- reassign the char at index 3 to uppercase
-join the word back together again
return the word

return the mapped array joined back together
*/
function toWeirdCase(str) {
  let wordArr = str.split(' ')
  return wordArr.map((word, idx) => {
    if (word.length < 4 || idx % 2 === 0) {
      return word;
    } else if (word.length >= 4 && idx % 2 === 1) {
      newArr = word.split('')
      for (let i = 3; i < newArr.length; i += 4) {
      newArr[i] = newArr[i].toUpperCase()
      }
      word = newArr.join('')
      return word;
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
