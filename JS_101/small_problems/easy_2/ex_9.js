// convert a string to a number
// can't use parseInt() or Number()
// need to use case statement to return
// the integer of the given string


// function stringToInteger(str) {
//   let arr = [];
//   let newArr = [];
//   arr = str.split('');
//   for (el = 0; el < arr.length; el++) {
//     switch (arr[el]) {
//       case '0':
//         newArr.push(0);
//         break;
//       case '1':
//         newArr.push(1);
//         break;
//       case '2':
//         newArr.push(2);
//         break;
//       case '3':
//         newArr.push(3);
//         break;
//       case '4':
//         newArr.push(4);
//         break;
//       case '5':
//         newArr.push(5);
//         break;
//       case '6':
//         newArr.push(6);
//         break;
//       case '7':
//         newArr.push(7);
//         break;
//       case '8':
//         newArr.push(8);
//         break;
//       case '9':
//         newArr.push(9);
//         break;
//     }
//   }
//   let total = 0;
//   newArr.forEach(el => (total = (10 * total) + el));
//   return total;
// }

// ls solution uses an object to convert strings to integers
// second try based on LS solution

// numbers = {
//   '0':0, '1':1, '2':2, '3':3, '4':4,
//   '5':5, '6':6, '7':7, '8':8, '9':9,
// }

// function stringToInteger(str) {
//   let arr = str.split('').map(char => numbers[char]);
//   let total = 0
//   arr.forEach(el => (total = (10 * total) + el));
//   return total
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// Further Exploration
// write a hexadecimaltoInteger() function

hex = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 
  5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
  'a': 10, 'b': 11, 'c': 12, 'd':13,
  'e': 14, 'f': 15
}

function hexadecimalToInteger(str) {
  let arr = str.split('').map(char => hex[char.toLowerCase()]);
  let total = 0;
  arr.forEach(el => (total = (16 * total) + el));
  return total

}

console.log(hexadecimalToInteger('4D9f') === 19871);
