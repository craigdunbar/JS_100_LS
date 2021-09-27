let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
// => false
// the b declared on line 5 is in the scope
// of the if statement so it's not available 
// in outer scope