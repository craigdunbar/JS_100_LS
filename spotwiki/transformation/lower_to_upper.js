// Create a function that takes a string as an argument 
// and return a new string with all the letters upper-cased

// function allUpper(str) {
//   return str.toUpperCase()
// }
// console.log(allUpper('abcd')); //'ABCD'

// Create a function that takes a string as an argument 
// and return a new string with every second letter 
// changed to upper case.

// iterate over the string and uppercase every odd indexed letter
function toUpper(str) {
  let newStr = '';
  str.split('').forEach((char, idx) => {
    if (idx % 2 === 1) {
      newStr = newStr.concat(char.toUpperCase())
    } else {
      newStr = newStr.concat(char)
    }
  });
  return newStr;
}
console.log(toUpper('abcdef')); //'aBcDeF'
