// DOuble char(2)
// write a function that doubles every consonant (not vowel)
// and returns a new string

function doubleConsonants(str) {
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let newStr =''
    let strArr = Array.from(str);
    for (let idx = 0; idx < strArr.length; idx++) {
        if (consonants.includes((strArr[idx]).toLowerCase())) {
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