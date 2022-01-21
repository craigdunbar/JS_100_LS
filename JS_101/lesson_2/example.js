// function bar() {
//   let xyz = 3;
//   const qux = 5;
//   return qux;
// }
// bar();
// console.log(qux);

let foo = 1;

function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

bar();