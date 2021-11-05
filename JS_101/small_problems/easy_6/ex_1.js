// Doible char (1)
// Take a string a double each character and return a new string

function repeater(str) {
  let newStr = ''
  let chars = Array.from(str)
  for (let idx = 0; idx < chars.length; idx++) {
    newStr += chars[idx].repeat(2)
  }
  return newStr
}

// using map
// function repeater(str) {
//   return string.split('').map(char => char + char).join('');
// }

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""