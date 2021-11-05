// DOuble char(2)
// write a function that doubles every consonant (not vowel)
// and returns a new string

function doubleConsonants(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', '!', '-', '4', ' '];
    let newStr =''
    let strArr = Array.from(str);
    for (let idx = 0; idx < strArr.length; idx++) {
        if (!vowels.includes(strArr[idx])) {
          newStr += strArr[idx].repeat(2);
        } else {
          newStr += strArr[idx];
        }
      }
    return newStr;
  }
  
console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");