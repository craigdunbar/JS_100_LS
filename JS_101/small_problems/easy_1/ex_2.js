// Odd numbers

// let count = 1
// while(count <= 99) {
//   console.log(count);
//   count += 2
// }

let rlSync = require('readline-sync');
let end = rlSync.question("What should be the last number?");
for(let i = 1; i <= end; i += 2) {
  console.log(i);
}
