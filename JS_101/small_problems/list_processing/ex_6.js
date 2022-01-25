/*
Palindromic Substrings

Write a function that returns a list of all palindromic
substrings of a string. The substrings in the returned list 
should be sorted by their order of apperance in the input
string. Duplicate substrings should be included multiple times.
Use the substrings method from the last exercise.
*/  


function substrings(str){
  let newArr = [];
  for (let count = 0; count < str.length; count ++) {
    newArr.push(leadingSubstrings(str.slice(count)));
  }
  return newArr.flat();
}


function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function palindromes(substrings) {
  let palindromesArr = [];

  for (let counter = 0; counter < substrings.length; counter++) {
    if ((substrings[counter].length > 1) && (substrings[counter] === substrings[counter].split('').reverse().join(''))) {
      palindromesArr.push(substrings[counter]);
    }
  }
  return palindromesArr;
}

console.log(palindromes(substrings('madam')));
console.log(palindromes(substrings('hello-madam-did-madam-goodbye')));
console.log(palindromes(substrings('knitting cassettes')));
