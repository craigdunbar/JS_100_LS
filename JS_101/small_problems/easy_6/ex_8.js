/* Sequence count
Create a function that takes two integer args.
THe first arg is a count and wil determine the size of the return array.
the second arg is the starting number of the sequence. The value of each element 
should be a multiiple of the starting number.

*/
// function sequence(count, start) {
//   let arr = [];
//   for (let idx = 1; idx <= count; idx ++) {
//     let count = (idx * start)
//     arr.push(count);
//   }
//   return arr;
// }

// refactored using map
function sequence(count, start) {
  let arr = [...Array(count)].map((_, idx) => idx = ((idx + 1) * start));
  return(arr);
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []