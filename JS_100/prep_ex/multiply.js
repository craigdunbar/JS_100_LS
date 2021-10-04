function multiply(num1, num2) {
  total = num1 * num2
  return total
}
function getNum(string) {
let rLsync= require('readLine-Sync');
let num = rLsync.question(string);
return num
}
let firstNum = getNum('What is the first number?');
let secondNum = getNum('What is the second number?');

multiply(firstNum, secondNum);
console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
