// // Selection example

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(obj) {
// let produceKeys = Object.keys(obj);
// let fruitObj = {};

// for (let count = 0; count < produceKeys.length; count ++ ) {
//   let currentKey = produceKeys[count];
//   let currentValue = produce[currentKey];

//   if (currentValue === 'Fruit') {
//     fruitObj[currentKey] = currentValue;
//   }
// }
// return fruitObj;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// Transfomation example

// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubledNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNum = numbers[counter];
//     numbers[counter] = currentNum * 2

//     counter += 1
//   }
//   return numbers;
// }
// // This solution returns a new array and does not mutate
// // the original
// // Now write a function that mutates the original array

// function doubledNumbers(numsArr) {
//   for (let counter = 0; counter < numsArr.length; counter ++) {
//     numsArr[counter] *= 2
//   }
//   return numsArr;
// }
// // using map
// // function doubledNumbers(numsArr) {
// //   return numsArr.map((num) => num * 2);
// // }

// console.log(doubledNumbers(myNumbers));
// console.log(myNumbers);

// Write a function that doubles the numbers in an array
// that have odd indices.

// let numbers = [1, 4, 3, 7, 2, 6];
// function doubleOddIndices(numbers) {
//   let doubledArr = []

//   for (let index = 0; index < numbers.length; index ++) {
    
//     if (index % 2 !== 0) {
//       doubledArr.push(numbers[index] *= 2);
//     } else {
//       doubledArr.push(numbers[index]);
//     }
//   }
//   return doubledArr; 
// }
// console.log(doubleOddIndices(numbers));

// Write a function that lets you multiply every array item
// by a specified value. Return a new array

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numsArr, num) {
  let multipliedArr = [];

  for (let counter =0; counter < numsArr.length; counter++) {
    let currentNum = numsArr[counter];
    multipliedArr.push(currentNum * num);
  }
  return multipliedArr;
}
console.log(multiply(myNumbers, 3));