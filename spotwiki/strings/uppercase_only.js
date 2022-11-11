// Create a function that takes a string as an argument and return a boolean, 
// true if the string contains only upper case letters and false otherwise
function hasUpperC(str) {
  return str.replace(/[A-Z]/g ,'').length === 0 ? true : false
}

console.log(hasUpperC('OOPDDBW')); //true
console.log(hasUpperC('dujjJJD')); //false