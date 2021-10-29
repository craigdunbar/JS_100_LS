// same as before but exclude non-letters
function wordSizes(string) {
  let arr = string.split(' ');
  let obj = {};
  for (let count = 0; count < arr.length; count++) {
    let wordSize = arr[count].replace(/[^a-z]/gi, '').length;
    // if(!obj.hasOwnProperty(wordSize)) {
    if(wordSize === 0) {
      continue;
    }
    if (!obj[wordSize]) {
      obj[wordSize] = 1;
    } else {
      obj[wordSize] += 1;
    }
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}