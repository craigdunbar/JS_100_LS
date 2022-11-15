// Create a function that takes two objects as arguments 
// and return a boolean value true if two objects pointing 
// to the same space in the memory and false otherwise. 

// function theSame(obj1, obj2) {
//   return obj1 === obj2 ? true : false;
// }

// let a = {1:2};
// let b = a;
// let c = {1:2};

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //false

// Create a function that takes two objects as arguments 
// and return a boolean value true if two objects have 
// the same values (primitives) and false otherwise

// function theSame(obj1, obj2) {
//   let counter = 0;
//   for (let i = 0 ; i < Object.keys(obj1).length; i ++) {
//     if (obj1[i] === obj2[i]) {
//       counter++;
//     }
//   }
//   if (counter === Object.keys(obj1).length 
//   &&  counter === Object.keys(obj2).length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let a = {1:2, 2:3};
// let b = {1:2, 2:3};
// let c = {2:3, 1:2};
// let d = {1:2, 2:3, 3:4};
// let e = {'a': 1}

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //true
// console.log(theSame(a,d)); //false
// console.log(theSame(a,e)); //false

// - Create a function that takes two objects as arguments 
// and return a boolean value `true` if those two objects 
// have the same values (primitives and objects). 
// The same objects are objects that are pointing to the 
// same place in the memory. For example:
    
function theSame(obj1, obj2) {
  let counter = 0;
  for (let i = 0 ; i < Object.keys(obj1).length; i ++) {
    if (obj1[i] === obj2[i]) {
      counter++;
    }
  }
  if (counter === Object.keys(obj1).length 
  &&  counter === Object.keys(obj2).length) {
    return true;
  } else {
    return false;
  }
}

let a = {1:2};
let b = {2:2};
let c = {1:a, 2:b};
let d = {1:a, 2:b};
let e = {1:{1:2}, 2:{1:2}};

console.log(theSame(c,d)); //true
console.log(theSame(c,e)); //false
console.log(theSame(d,e)); //false
