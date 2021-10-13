// convert a signed number to a string
// can use function from last exercise

function integerToString(num) {
  if (num === 0) return '0';
  arr = [];
  while (num / 10 > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return arr.reverse().join('');
}

function signedIntegerToString(num) {
  if( num < 0) {
    num = num * Math.sign(num);
    return ('-' + integerToString(num));
  } else if (num > 0) {
    return ('+' + integerToString(num));
  } else {
    return integerToString(num)
  }
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');