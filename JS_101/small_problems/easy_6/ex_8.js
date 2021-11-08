/* Sequence count
Create a function that takes two integer args.
THe first arg is a count and wil determine the size of the return array.
the second arg is the starting number of the sequence. The value of each element 
should be a multiiple of the starting number.

*/
function sequence(num1, num2) {
  let str = '';
  for (let idx = num2; idx <= num1; idx ++) {
    let count = idx*num2
    str += (count);
  }
  return Array.from(str);
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []