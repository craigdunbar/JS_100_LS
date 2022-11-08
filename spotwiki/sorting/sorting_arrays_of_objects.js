// Create a function that takes an array of objects as argument 
// and return the same array with all the elements sorted 
// according to it's value in ascending order

// sorting([{a: 1}, {a: 0}, {a : 3}]); //=> [{a:0}, {a:1}, {a:3}];

// input: array output: sorted array 

// function sorting(arr) {
//   return arr.sort((a, b) => Object.values(a) - Object.values(b));
// }
// console.log(sorting([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];


// Create a function that takes an array of objects as argument 
// and return the same array with all the elements sorted according 
// to it's key in descending order.

function sorting(arr) {
  return arr.sort((a, b) => Object.keys(b) - Object.keys(a))
}
console.log(sorting([{0: 1}, {3: 1}, {1 : 1}])); //[{3:1}, {1:1}, {0:1}]
