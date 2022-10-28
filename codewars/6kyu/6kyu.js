/*
*** Stop gninnipS My sdroW!

function spinWords(string){
  let newStr = string.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word
    });
    return newStr.join(' ');
  };

*** Sum of Digits / Digital Root

function digital_root(n) {
  while(n >= 10) {
  n = n.toString().split('').reduce((a, b) => Number(a) + Number(b));
}
  return n
}

*** Array.diff

function arrayDiff(a, b) {
  b.forEach(element => {
   a = a.filter(value => value !== element);
  });
  return a;
}

*** Bit Counting

var countBits = function(n) {
return n.toString(2).replace(/['0']/g, '').length;
};

*** Who likes it?

function likes(names) {
let length = names.length
switch(length) {
case 0 :
  return 'no one likes this';
  break;
case 1: 
  return (`${names[0]} likes this`);
break;
case 2: 
  return (`${names[0]} and ${names[1]} like this`);
break;
case 3: 
  return (`${names[0]}, ${names[1]} and ${names[2]} like this`);
break;
default:
  return (`${names[0]}, ${names[1]} and ${length -2} others like this`);
}}

*** Create Phone Number

function createPhoneNumber(numbers){
  set1 = numbers.slice(0,3).join('');
set2 = numbers.slice(3,6).join('');
set3 = numbers.slice(6).join('');
return `(${set1}) ${set2}-${set3}`;
}

*** Find The Parity Outlier

function findOutlier(integers){
  let evenArr = []
  let oddArr = []
  let arr1 = integers.forEach(element => {
    element % 2 === 0 ? evenArr.push(element) : oddArr.push(element)
    return evenArr, oddArr;
})
  return evenArr.length === 1 ? Number(evenArr) : Number(oddArr);
}

*** Counting Duplicates

function duplicateCount(text){
  let charsArr = text.toLowerCase().split('');
  let counts = {};

  for (let index = 0; index < text.length; index++) {
    currentChar = charsArr[index];
    if (Object.keys(counts).includes(currentChar)) {
      counts[currentChar] = counts[currentChar] + 1;
    } else {
      counts[currentChar] = 1;
    }
  }
  let dup = []
  for( key in counts) {
    if (counts[key] > 1) {
      dup.push(key);
    }
  }
  return dup.length;
}

*** Duplicate Encoder

function duplicateEncode(word){
  let obj = {};
  let lettersArr = word.toLowerCase().split('');

for(let index = 0; index < word.length; index++) {
  if (Object.keys(obj).includes(lettersArr[index])) {
    obj[lettersArr[index]] = obj[lettersArr[index]] + 1;
  } else {
    obj[lettersArr[index]] = 1
  }
}
let newArr = []
 lettersArr.forEach(char => { 
  if (obj[char] === 1) {
    newArr.push('(');
  } else {
    newArr.push(')');
  }
 });
 return newArr.join('');
}

*** Persistent Bugger.

function persistence(num) {
let count = 0;
  
while (num >= 10) {
  num = num.toString().split('').reduce((a, b) => a * b);
  count ++
};
return count;
};

*** Replace With Alphabet Position

function alphabetPosition(text) {
  text = text.toLowerCase().replace(/[^a-z]/g, '');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = []
  
  for(let count = 0; count < text.length; count++) {
  let char = text[count]
  let index = alphabet.indexOf(char) + 1;
  newStr.push(index);
};
return newStr.join(' ');
}

*** Tribonacci Sequence

function tribonacci(signature,n){
let tribonArr = []
if (n === 0) {
  return []
} else if (n <= 3) {
  for (let index = 0; index < n; index++) {
    element = signature[index];
    tribonArr.push(element)
  }
    return tribonArr;
} else if (n > 3) {
  for (let count = 2; count < n -1; count++) {
  tribonArr = signature
  sum = signature[count] + signature[count -1] + signature[count - 2]
  tribonArr.push(sum);
}
return tribonArr;
}
};

*** Your order, please

function order(words){
    arr = words.split(' ');
  let newArr = []
  let sortedStr = []
  newArr = arr.map(element => {
      return element.split('').filter(char => {
      return Number.isInteger(Number(char)) === true;
    });
  });
  let sortedArr = newArr.flat().sort((a,b) => a - b);
  for (let count = 0; count < sortedArr.length; count ++) {
    num = sortedArr[count]
    arr.forEach( element => {
      if (element.includes(num)) {
        sortedStr.push(element);
      };
      return sortedStr;
    })
  };
  return sortedStr.join(' ');
}

*** Unique In Order

var uniqueInOrder=function(iterable){
 let unique = []
  let lastChar = [];

  for (let count = 0; count < iterable.length; count ++) {
    let char = iterable[count];
    if (char !== lastChar) {
      unique.push(char);
      lastChar = char;
    }
  }
  return unique;
}

*** Playing with digits

function digPow(n, p){
  result = 0
  numArr = n.toString().split('');
  for (let count = 0; count < numArr.length; count++) {
    result += numArr[count] ** p;
    p ++;
  };
    let k = result / n;
    if (Number.isInteger(k) === true) {
      return k;
    } else {
      return -1;
    }
  }

*** Convert string to camel case

function toCamelCase(str){
  camelCase = []
  if (str === '') {
    return str
  } else {
  let newStr = str.replace(/[^a-z]/gi, ' ');
  let arr = newStr.split(' ')
    if (arr[0][0].toUpperCase() === arr[0][0]) {
        arr.forEach(el => {
          camelCase.push(el[0].toUpperCase() + el.slice(1));
              });
            
    } else if (arr[0][0].toUpperCase() !== arr[0][0]) {
      camelCase.push(arr[0]);
      arr.slice(1).forEach(word => {
        camelCase.push(word[0].toUpperCase() + word.slice(1));
      })
    }
  return camelCase.join('');
}
}

*** Does my number look big in this?

function narc(value) {
  let numArr = String(value).split('')
  length = numArr.length
  total = 0
  for (let count = 0; count < length; count ++) {
    total += numArr[count] ** length
  }
  if (total === value) {
    return true
  } else {
    return false
  }
}

*** Detect Pangram

function pangram(string) {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let str = string.toLowerCase();
str = str.replace(/ /g, '').replace(/[^a-z]/gi, '');
let newStr = Array.from(new Set(str));
total = 0

for (let count = 0; count < newStr.length; count ++) {
  if (alphabet.includes(newStr[count])) {
    total += 1
  }
}
if (total === 26) {
  return true
} else {
  return false
}
}
console.log(pangram("the quick brown fox jumps over the lazy dog"));
console.log(pangram('Cwm fjord bank glyphs vext quiz'));
console.log(pangram('Pack my box with five dozen liquor jugs.'));

*** Find the missing letter

function find(arr) {
  for(let count = 0; count < arr.length - 1; count ++) {
    if((arr[count].charCodeAt() + 1) !== (arr[count + 1].charCodeAt())) {
      return (String.fromCharCode(arr[count].charCodeAt() + 1));
    }
  }
}
console.log(find(["a","b","c","d","f"]));
console.log(find(["O","Q","R","S"]));

*** Find the unique number

function findUniq(array) {
  let result = {};
    for (let index = 0; index < array.length; index++) {
        currentNum = array[index];
        if (Object.keys(result).includes(String(currentNum))) {
          result[currentNum] = result[currentNum] + 1;
        } else {
          result[currentNum] = 1;
        }
  }
  for(key in result) {
    if(result[key] === 1) {
      return key;
    }
  }
  }

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0 ]));

Split Strings

// given the string argument
// get the length of the string
// get the number of pairs by dividing the length by 2
// initalise an empty array to hold the substrings
// if the length is even return the pairs of substrings by iterating
// over the string and increasing the count by 2 on each iteration
// the string[count] and string[count + 1]
// if the length is odd then push the substrings to the array
// but on the last substring include the '_' 
function solution(str){
 let length = str.length;
 let substringsArr = [];
  let substring = '';
  for (let count = 0; count < length; count +=2) {
    if(str[count + 1] === undefined) {
      substring = str[count] + '_';
    } else {
    substring = str[count] + str[count + 1];
    }
    substringsArr = substringsArr.concat(substring);
  }
  return substringsArr
}

*/

