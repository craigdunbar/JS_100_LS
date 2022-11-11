// Create a function that takes three strings as arguments 
// and return a string with all the characters that are the 
// same as the second argument replaced with the thirds argument character. 

function replaceIt(str1, str2, str3) {
 let newStr = '';
 for (let char of str1) {
  if (char === str2) {
    newStr = newStr.concat(str3)
  } else {
    newStr = newStr.concat(char)
  }
 }
 return newStr;
}

console.log(replaceIt('abcdefgaa', 'a', '00')); '00bcdefg0000'
