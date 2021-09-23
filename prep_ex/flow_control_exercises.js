
// false || (true && false); //f
// true || (1 + 2); // true
// (1 + 2) || true; // true - 3 
// true && (1 + 2); // true - 3
// false && (1 + 2); // false
// (1 + 2) && true; // true
// (32 * 4) >= 129; // false
// false !== !true; // false
// true === 4; // flase
// false === (847 === '847'); // true
// false === (847 == '847'); // false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

// function check(num) {
//   if ((num === parseInt(num)) && (num%2 === 0)) {
//     console.log('even');
// } else if 
//     ((num === parseInt(num)) && (num%2 !== 0)) {
//     console.log('odd');
// } else {
//       console.log("this is not an integer");
//     }
//   }
// check(5)
// check(6)
// check('hi')

// return foo() ? 'bar' : qux();

// function foo(word) {
// if (word === 'bar') {
//   console.log('bar');
// } else {
//   console.log('qux');
// }
// }
// foo('bar')
// foo('cat')

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

// function string(word) {
//   if (word.length > 10) {
//     console.log(word.toUpperCase());
//   } else {
//     console.log(word);
//   }
//   }
// string('hello world')
// string('goodbye')

function numberRange(num) {
  if ((num > 0) && (num <= 50)) {
    console.log(`${num} is between 0 and 50`);
  } else if 
    ((num > 50) && (num <= 100)) {
      console.log(`${num} is between 51 and 100`);
  } else if
    ((num >100) && (num <= 125)) {
      console.log(`${num} is greater than 100`)
  } else {
      console.log(`${num} is less than zero`);
    }
  }

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);