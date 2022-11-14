// Create a function that takes two strings as arguments 
// and returns a boolean value true if a second argument 
// (a character) exists in the first argument (longer string) 
// and false otherwise.

function findMe(str, char) {
  return str.includes(char)
}

console.log(findMe('abcdefghijk', 'a')); //true
console.log(findMe('abcdefgh', 'z')); //false