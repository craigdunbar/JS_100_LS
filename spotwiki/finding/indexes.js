// Create a function that takes two strings as an argument 
// and returns a number representing an index number of the 
// character passed as a second argument in the first string argument. 
// If the character doesn't exist in the string the function should return false.

function findIndex(str1, str2) {
  let idx = str1.split('').indexOf(str2)
  return  idx > 0 ? idx : false
}
console.log(findIndex('Aabcdefgh ab A', 'a')); //1
console.log(findIndex('bcdefgBA', 'a')); //false
