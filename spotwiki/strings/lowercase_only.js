// Create a function that takes a string as an argument and return a boolean, 
// true if the string contains only lower case letters and false otherwise.
function hasLowerC(str) {
  return str.replace(/[a-z]/g, '').length === 0 ? true : false
}

console.log(hasLowerC('opddghrr')); //true
console.log(hasLowerC('dujjJJDdd')); //false
