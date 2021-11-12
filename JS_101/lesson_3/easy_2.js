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

// working through the sort for my own understanding..
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

// using forEach
let numbers = [1, 2, 3, 4, 5];
let revArr = []

numbers.forEach((number) => {
  revArr.unshift(number);
})
console.log(revArr);

Question 3
Given a number and an array, determine if whether the number 
is included in the array

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

Question 4
Starting with the string: 
let famousWords = "seven years ago...";

show two different ways to put the expected "Four score and" in frony of it.
let famousWords = "seven years ago...";
console.log(`Four score and ${famousWords}`);
console.log("Four score and " + famousWords);
console.log("Four score and".concat(' ',famousWords));

Question 5
Given the array of numbers [1, 2, 3, 4, 5], mutate the array 
by removing the number at index 2, so the array becomes
[1, 2, 4, 5]

let arr = [1, 2, 3, 4, 5]
arr.splice(2, 1);
console.log(arr);

Question 6
Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

THis will create a nested array:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Create an array that contains the above values, 
but in an un-nested format:

I used array.flat()
console.log(flintstones.flat());

Using reduce

flintstones = flinstones.reduce((accum, el) => {
  return accum.concat(element);
}, []);

Using forEach

let newArr = []
flintstones.forEach(el => {
  newArr = newArr.concat(el);
})

Question 7
Consider the following object:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Create an array from this object that contains only two
elements: Barney's name and number

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newArr =[];
newArr = Object.entries(flintstones)[2]
console.log(newArr);

Question 8
Check whether the objects assigned to variables numbers and
table are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

Question 9
Center the following title over a 40 character wide.
let title = "Flintstone Family Members";
let pad = Math.floor((40 - title.length) / 2);
console.log(title.padStart(pad + title.length));

Question 10
Write two one-line expressions to count the number of
lower case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);

*/
