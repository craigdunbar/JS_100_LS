// Create a function that takes an multidimensional array 
// and returns an array sorted in descending order 
// according to length of the array.

// function sortArrLength(arr) {
//   return arr.sort((a, b) => b.length - a.length)
// }
// console.log(sortArrLength([[1,2,undefined], [null, 0, 'hello wolrd', 11], [{1:1}]])); //[[null, 0, 'hello wolrd', 11], [1,2,undefined], [{1:1}] ];
// console.log(sortArrLength([['a'], ['ab', 'a', null], [101, 1]])); //[['ab', 'a', null], [101, 1], ['a']]

// Create a function that takes an array of objects as 
// an argument and return sorted array in ascending 
// order depending on sum of an array stored as a value of key arr

// since array has array as values in the object element
// object values will return a nested array so we need to use [0] to access 
// it and then use reduce to get the sum

// function sortArrOfObj(arr) {
//   return arr.sort((a, b) => {
//     a = Object.values(a)[0].reduce((acc, val) => acc + Number(val), 0)
//     b = Object.values(b)[0].reduce((acc, val) => acc + Number(val), 0)
//     console.log(a, b);
//     return a - b;
//   })
// }
// console.log(sortArrOfObj([{arr : [1,2]}, {arr: [11]}, {arr: [1,2,3,0]}])); // [{arr : [1,2]}, {arr: 1,2,3,0}, {arr: [11]}];

// Create a function that takes an array of arrays as argument 
// and returns a sorted array in ascending order depending on 
// how many undefined exist in the array.

function sortUndefined(arr) {
  return arr.sort((a, b) => {
    a = a.filter(el => el === undefined).length
    b = b.filter(el => el === undefined).length
    return a - b;
  })
}
console.log(sortUndefined([[11, undefined, undefined, null, 0], [NaN, {}, ''], [undefined]])); // [[NaN, {}, ''], [undefined], [11, undefined, undefined, null, 0] ]
