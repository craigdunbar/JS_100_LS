// Create a function that takes two strings as arguments. 
// The second string represents a character that is supposed 
// to be removed from the string.

// use replace to remove the char from the string can't make this work
function removeIt(str1, str2) {
  // return str1.replace(str2, '').replace(str2, '') // this is goofy
  let newStr = '';
  for (let char of str1) {
    if (char === str2) {
      continue
    } else {
      newStr = newStr.concat(char)
    }
  }
  return newStr;
}
console.log(removeIt('abcdefghd', 'd')); //'abcefgh'