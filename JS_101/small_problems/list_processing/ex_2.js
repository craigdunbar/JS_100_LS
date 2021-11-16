/*
Alphabetical Numbers
Write a function that takes an array of integers between 0 and 19,
and returns an array of those intgers sorted based on the English word 
for each number.
input: array
output: array

Algo:
initalise an object with numbers 0 to 19 as keys and string equivalents as 
values.
initalise an empty array.
iterater throught the array of integers and add the string equivalent of each
to the new array
sort the new array
iterate throught the new array and convert the string back to integers

*/
let strings = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six' , 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
    12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
}
function alphabeticNumberSort(array) {
  let stringArr = [];
  let sortedNumberArr = []
  
  array.forEach((num) => {
    stringArr.push(strings[num]);
  });
  stringArr = stringArr.sort();

stringArr.forEach((word) => {
  let digit = (Object.keys(strings).find(key => strings[key] === word))
  sortedNumberArr.push(Number(digit));
});
return sortedNumberArr;
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]