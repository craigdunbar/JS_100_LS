// convert a string to signed number
// same as last exercise but if string
// is negative return a negative number

numbers = {
  '0':0, '1':1, '2':2, '3':3, '4':4,
  '5':5, '6':6, '7':7, '8':8, '9':9,
}

// function stringToSignedInteger(str) {
//   if (str.startsWith('-')) {
//     str = str.substring(1);
//     arr = str.split('').map(char => numbers[char]);
//     let total = 0
//     arr.forEach(el => (total = (10 * total) + el));
//     return total * -1;
//   } else if (str.startsWith('+')) {
//     str = str.substring(1);
//     arr = str.split('').map(char => numbers[char]);
//     let total = 0
//     arr.forEach(el => (total = (10 * total) + el));
//     return total
// } else {
//   arr = str.split('').map(char => numbers[char]);
// let total = 0;
// arr.forEach(el => (total = (10 * total) + el));
// return total 
// }
// }

// refactored using helper function stringToIntger()

function stringToInteger(str) {
  let arr = str.split('').map(char => numbers[char]);
  let total = 0
  arr.forEach(el => (total = (10 * total) + el));
  return total
}

function stringToSignedInteger(str) {
  if (str.startsWith('-')) {
    str = str.substring(1);
    return -stringToInteger(str);
  } else if (str.startsWith('+')) {
    str = str.substring(1);
    return stringToInteger(str);
  } else {
  return stringToInteger(str);
  }
}

// LS solution
// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case "-":
//       return -stringToInteger(string.slice(1, string.length));
//     case "+":
//       return stringToInteger(string.slice(1, string.length));
//     default:
//       return stringToInteger(string);
//   }
// }

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true