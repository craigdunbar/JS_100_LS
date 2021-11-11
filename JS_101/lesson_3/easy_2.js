/*
Question 1
Given a string return a new string that replaces every
occurence of the word 'important' with 'urgent':

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'));

Further exploration:
Remove multiple occurrences of the same word
advice = advice.replace(/important/g, 'urgent');
advice = advice.replaceAll('important', 'urgent'); // doesn't work?
console.log(advice);

Question 2
Use reverse and sort on an array without mutating the original array
like below:

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// use slice to generate a new reversed array
let numbers = [1, 2, 3, 4, 5];

let revArr = numbers.slice().reverse();
console.log(revArr);
console.log(numbers);

let sortedArr = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(sortedArr);
console.log(numbers);

// worling through the sort..
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  console.log(`a = ${a} b = ${b}`);
  console.log(a -b);
  if(a - b > 0) {
    console.log(b);
  } else {
    console.log(a);
  }
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
numbers = [4, 2, 5, 1, 3];

2 4 5 1 3  (checked 2 & 4)
2 4 5 1 3  (checked 2 & 5)
2 4 5 1 3  (checked 4 & 5)
2 1 4 5 3  (checked 1 & 4)
1 2 4 5 3  (checked 1 & 2)
1 2 3 4 5  (checked 3 & 4)
1 2 3 4 5  (checked 2 & 3)
*/
