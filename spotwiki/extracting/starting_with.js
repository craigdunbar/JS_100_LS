// Create a function that takes a string as an argument and 
// return an array of words that exist in that strings 
// and begins with letter a.

// split string into an array
// use filter to select strings that start with the letter 'a'
function extractStr(str) {
  return str.split(' ').filter(el => el.startsWith('a'))
}
console.log(extractStr('abcd bcd aa')); //[abcd, aa]
