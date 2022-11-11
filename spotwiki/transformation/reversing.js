// Create a function that takes a string as an 
// argument and return a new, reversed string.

function reverseIt(str) {
  return str.split('').reverse().join('')
}
console.log(reverseIt('abcdef')); //'fedcba'

