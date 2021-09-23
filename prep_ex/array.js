// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) {
//     return false;
//   }
// }

//   return true;
// }

// console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
// console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));

// ex_1
// let array1 = [1, 2, undefined, 4];
// array1.length // 4

// let array2 = [1]
// array2.length = 5;
// array2.length // 6 nope 5

// let array3 = []
// array3[-1] = [1];
// array3.length // 1 nope 0

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3; 
// array4.length // 3

// let array5 = [];
// array5[100] = 3;
// array5.length // 101

// ex_2
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
//   console.log(myArray.filter(num => num%2 === 0))

// ex_3 - got this first time!
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9,17,16,0],
// ]
// myArray.forEach(function(inner) {
//   inner.forEach(function(value) {
//     if (value %2 === 0) {
//       console.log(value);
//     }
//   })
// })

// ex_4
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
// let newArray = myArray.map (value => {
//   if (value %2 === 0) {
//     return 'even'
//   } else {
//     return 'odd'
//   }
// });
//   console.log(newArray)

// ex_5
// let things = [ 1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers)

// function findIntegers(things) {
//   let number = things.filter(value => Number.isInteger(value) === true)
//   return number
// }

// ex_6
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));

// function oddLengths(arr) {
//   let newArr = arr.map(value => value.length)
//   let arr2 = newArr.filter(element => element %2 !== 0)
//   return arr2
// }

// ex_7
// let array = [3, 5, 7];
// function sumOfSquares(array) {
// let sum = array.reduce((accumulator, element) => accumulator + (element * element), 0)
// return sum
// }
// console.log(sumOfSquares(array));

// ex_8
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// function oddLengths(elements) {
//   return elements.reduce((filteredArray, current) => {
//     let length = current.length
//     if (length % 2 === 1) {
//       filteredArray.push(length);
//     }
//     return filteredArray;
//   }, []);
// }
// console.log(oddLengths(arr)); //1 5 3

// ex_9
// function numbers(arr) {
//   console.log(arr.includes(3));
// }

// numbers([1, 3, 4, 7, 9, 11]);
// numbers([]);
// numbers([2, 4, 6, 8]);

// ex_10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;
console.log(arr)