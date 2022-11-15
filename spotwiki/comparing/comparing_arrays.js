// Create a function that takes two arrays as arguments 
// and return a boolean value true if two arrays pointing 
// to the same space in the memory and false otherwise.

// function theSame(arr1, arr2) {
//   return arr1 === arr2 ? true : false;
// }
// let a = [1,2,3];
// let b = a;
// let c = [1,2,3];

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //false
// console.log(theSame(c,b)); //false

// Create a function that takes two arrays as arguments 
// and return a boolean value true if two arrays have 
// the same values (primitives) and false otherwise.

// function theSame(arr1, arr2) {
//   let counter = 0;
//   for (let i = 0 ; i < arr1.length; i ++) {
//     if (arr1[i] === arr2[i]) {
//       counter++;
//     }
//   }
//   return counter === arr1.length ? true : false
// }

// let a = [1,2,3];
// let b = a;
// let c = [1,2,3];

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //true
// console.log(theSame(c,b)); //true

// Create a function that takes two arrays as arguments 
// and return a boolean value true if those two arrays 
// have the same values (primitives and objects). 
// The same objects are objects that are pointing to 
// the same place in the memory.


function theSame(arr1, arr2) {
  let counter = 0;
  for (let i = 0 ; i < arr1.length; i ++) {
    if (arr1[i] === arr2[i]) {
      counter++;
    }
  }
  return counter === arr1.length ? true : false
}

let a = [1,2,3];
let b = [1,2,3];

let c = [a, b]
let d = [a, b]
let e = [[1,2,3], [1,2,3]]

console.log(theSame(c,d)); //true
console.log(theSame(c, e)); //false
console.log(theSame(d,e)); //false