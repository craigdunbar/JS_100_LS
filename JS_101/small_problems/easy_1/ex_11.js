// UTF-16 string value
// write a function that takes a string argument
// get UTF-16 value of each character in string
// return sum of UTF-16 values

function utf16Value(string) {
  total = 0
  for (el in string) {
    total += string.charCodeAt(el)
  }
  return total
}
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0)

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811