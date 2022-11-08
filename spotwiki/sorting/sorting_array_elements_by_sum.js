// Create a function that takes an multidimensional array as an 
// argument and returns the same array sorted according 
// to the sum of elements of inner arrays., in ascending order 

// use reduce to get the sum of the inner arrays and sort by that resukt
// function sorting(arr) {
//   return arr.sort((a, b) => {
//     a = a.reduce((acc, value) => acc + value, 0);
//     b = b.reduce((acc, value) => acc + value, 0);
//     return a - b;
//   })
// }
// console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[0,1], [2,1], [1,2,3]]

// Create a function that takes an multidimensional array as an 
// argument and returns the same array sorted according 
// to the product of elements of inner arrays in descending order.

function sorting(arr) {
  return arr.sort((a, b) => {
    a = a.reduce((acc, value) => acc * value, 1);
    b = b.reduce((acc, value) => acc * value, 1);
    return b - a;
  })
}
console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[1,2,3], [2,1], [0,1]]