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
# 
define an empty array
given the string argument convert the string to an array of words
iterate over the words and add the even indexed words to the empty array
Select every second word ( odd index)
make a copy of the word 
iterate over the word and select every 4th character
convert this character to uppercase
add this word to the new array
after the iteration is complete 
return the new array joined back into a string
*/
function toWeirdCase(str) {
  let arr = [];
  let stringArr = str.split(' ');
  let currentWord = ''

  for (let wordIdx = 0; wordIdx < stringArr.length; wordIdx++) {

    if (wordIdx % 2 === 0) {
      arr = arr.concat(stringArr[wordIdx]);
    } else if ( !wordIdx % 2 === 0) {

      currentWord = stringArr[wordIdx];

      if (currentWord.length < 4) {
        arr = arr.concat(currentWord)
    } else { 
        let copy = currentWord.slice(0);
        for (let count = 0; count < copy.length; count ++) {
  
          if ((count + 1) % 4 === 0) {
            let char = copy[count]
            copy = copy.slice(0, count) + copy[count].toUpperCase() + copy.slice(count + 1);
          }
        }
        arr = arr.concat(copy);
      }
    }
  }
  // console.log(arr);
  return arr.join(' ');
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