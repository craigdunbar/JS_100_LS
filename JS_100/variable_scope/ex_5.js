// what'a my value 5

function myFunction() {
  let a = 1

  if(true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

console.log(myFunction());
// => 1, 2 wrong throws an error
// because can't log(a) on line 7 
// before it's initialised on line 8
// a defined on line 6 shadows line 4