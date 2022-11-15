// Create a function that takes a string as an argument and returns 
// true if the string contains a pair of parenthesis, 
// where '(' and ')' is a pair but ')' and ')' is not. 
// Return false otherwise

// use includes to search the String

function findPairs(str) {
  return str.includes('(') && str.includes(')') ? true : false
}


console.log(findPairs('abcd(abcd ) dbb ) ddss (')); //true
console.log(findPairs('ab))) ccc (((')); //true
console.log(findPairs('(fff))))((')); //false ?? true right?
console.log(findPairs('((((((')); //false
console.log(findPairs('()()())()()(')); //true
