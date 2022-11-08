// Create a function that takes an array as an argument 
// and returns the same array with all elements 
// sorted in alphabetical order.

// function sorting(arg) {
//   return arg.sort()
// }

// console.log(sorting(['a', 'd', 'a', 'b'])); //=> ['a', 'a', 'b', 'd'];
// console.log(sorting(['banana', 'apple', 'pear'])); //=> ['apple', 'banana', 'pear']

// Create a function that takes an array as an argument 
// and returns the same array with all elements sorted 
// in descending order. 

// function sorting(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sorting([3,5,1,2,11,456])); //=> [456,11,5,3,2,1];

// Create a function that takes an array as an argument 
// and returns the same array with all elements sorted 
// in ascending order.

// function sorting(arr) {
//   return arr.sort((a, b) => b - a);
// }

// console.log(sorting([3,5,1,2,11,456])); //=> [1,2,3,5,11,456];

// Create a function that takes an array of strings as 
// an argument and returns the same array with all elements 
// sorted according to length of the string in ascending order. 

// function sorting(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }
// console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); // => ['o', 'lo', 'llo', 'ello', 'hello']

// Create a function that takes an array of strings as an argument 
// and returns the same array with all elements sorted according 
// to length of the string in descending order.

// function sorting(arr) {
//   return arr.sort((a,b) => b.length - a.length)
// }
// console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); //=> ['hello', 'ello', 'llo', 'lo', 'o']

// Create a function that takes an array of strings as an argument 
// and returns the same array with all elements sorted according to 
// length of the string in alphabetical order, case insensitive

function sorting(arr) {
//   return arr.sort((a, b) => {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//   if ( a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
//   });
    return arr.sort((a, b) => a.localeCompare(b));
    // arr.sort((a, b) => a.toLowerCase() - b.toLowerCase()) doesn't work. why??
}
console.log(sorting(['goo', 'A', 'aB', 'Ab', 'c', 'C'])); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']
