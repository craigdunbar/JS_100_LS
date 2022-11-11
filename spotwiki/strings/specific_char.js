// Create a function that takes two strings as an argument and returns a 
// boolean value, true if the first string contains the second one

// this time use includes to see if the char is ion the string
function hasString(str1, str2) {
  return str1.includes(str2)
}

console.log(hasString('abcd', 'd')); //true
console.log(hasString('abcd', 'f')); //false
