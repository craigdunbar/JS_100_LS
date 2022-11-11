// Create a function that takes a string as a an argument and returns a boolean, 
// true if the string is in alphabetical order and false if it's not

// sort the str into alphabetical order and then compare to the original

function isAlphabetical(str) {
  let newStr = str.split('').sort().join('');
  return str === newStr ? true : false
}

console.log(isAlphabetical('abcdefg')); //true
console.log(isAlphabetical('adegttksn')); //false
