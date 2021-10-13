// convert a number to a string
// reverse the last two exercises

// function integerToString(num) {
//   return str = ('' + num)
// }
// can't use an expression like this.. Read the question!!

function integerToString(num) {
  if (num === 0) return '0';
  arr = [];
  while (num / 10 > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return arr.reverse().join('');
}
console.log(integerToString(4321) === '4321');
console.log(integerToString(0) === "0");
console.log(integerToString(5000) === "5000");
console.log(integerToString(1234567890) === "1234567890");