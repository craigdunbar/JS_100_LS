// Create a function that takes two strings as arguments 
// and return a boolean value true if those two strings 
// are the same and false otherwise.
// case sensitive

// function theSame(str1, str2) {
//   return str1 === str2 ? true : false
// }

// console.log(theSame('abcdf', 'Abcdf'))//false

// Create a function that takes two strings as arguments 
// and return a boolean value true if those two strings 
// have the same characters (ignoring the case), 
// and false otherwise.

 function theSame(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase() ? true : false;
 }
console.log(theSame('abcdef', 'ABCDef')) //true
console.log(theSame('abcdef', 'a bcdef')) //false
