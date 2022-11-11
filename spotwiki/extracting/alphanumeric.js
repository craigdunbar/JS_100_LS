// Create a function that takes a string as an argument and return 
// an array of all the alphanumeric characters that the input string contained.

// replace every chat that;s not a number with ''
// create an array from the str

function extractStr(str){
  return str.replace(/[^0-9]/g, '').split('')
}
console.log(extractStr('abcd123acc 227 0 , *&^a')); //['1', '2', '3', '2', '2', '7', '0'];