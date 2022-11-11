// Create a function that takes a string as an argument and return a 
// boolean, true if the string contains only numbers and false otherwise

function hasOnlyNumbers(str) {
  return str.replace(/\d/g, '').length === 0 ? true : false
}

console.log(hasOnlyNumbers('12311')); //true
console.log(hasOnlyNumbers('Pdd00_4a11')); //false
