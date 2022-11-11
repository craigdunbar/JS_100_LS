// Create a function that takes a string and a number as arguments and return 
// an array containing all the characters that appears in the string 
// as many times as the second argument

// create an empty array
// split the string into an array of chars
// use filter to return an array of current chars that occur given num times
// add this array to the empty array

function extractChar(str, num) {
  let newArr = [];
  let arr = str.split('');
  arr.forEach(char => {
  if (arr.filter(el => el === char).length === num) {
    newArr = newArr.concat(char)
  }
});
return newArr;
}
console.log(extractChar('abcabcdefra', 2)); // ['b', 'b', 'c', 'c'];
