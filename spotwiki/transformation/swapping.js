// Create a function that takes a string as an argument 
// and returns a string with the first and 
// the last character swapped

function swapIt(str) {
let arr = str.split('');
  arr[0] = str[str.length - 1];
  arr[arr.length - 1] = str[0];
  return arr.join('');
}
console.log(swapIt('abcdef')); //'fbcdea'
