/*
Array methods:

Array.forEach is a method that's equivalent to a for 
and while loop ie
let numbers + [1, 2, 3];
let counter = 0;

while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter += 1;
}
is the same as:
[1, 2, 3].forEach(number => {
  console.log(number);
})

forEach is a method called on the array.
The method takes a funnction as an argument
 -- the () => {..} component. This is called the callback.
 The code within the callback is executed for each iteration
 and the result is displayed.

 forEach also passes a second argument, the index position 
 of the element in the array, to the callback function.
 ie
 [1, 2, 3].forEach((number, idx) +> {
   console.log(`${idx}: ${number}`);
 });
will log 0: 1
         1: 2
         2: 3

forEach on strings doesn't work but you can use 
string.split('') to get an array of characters and then
use forEach on that array.

forEach can't be used on objects either.
You can use Object.keys, Object.values and Object.entries
to return arrays that you can then use with forEach.

Object.entries returns a nested array of all the key-value
pairs of the object.
ie
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
console.log(produceKeyValues);
logs 
[
  [ 'apple', 'Fruit' ],
  [ 'carrot', 'Vegetable' ],
  [ 'pear', 'Fruit' ],
  [ 'broccoli', 'Vegetable' ]
]
using forEach
produceKeysValues.forEach(keyValue => {
  let [key, value] = keyValue;
// the line above is array destructuring assignment
// it's the same as writing 
// let key = keyValue[0];
// let value = keyValue[1];

  console.log(`${key} is a ${value}`);
})
logs
apple is a Fruit
carrot is a Vegetable
pear is a Fruit
broccoli is a Vegetable

Array.filter can be used instead of for loop and 
if statements ie

let numbers = [1, 2, 3];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index ++) {
  if (numbers[index] % 2 === 1) {
    oddNUmbers.push(numbers[index]);
  }
}
returns [1, 3] 

is the same as:

let oddNumbers = [1, 2, 3].filter(num +> {
  return num % 2 === 1;
});

filter works by examining the return value of the callback 
on each iteration. It determines the truthiness of 
the return value.
If the return value of the callback is truthy, then filter
will select that element. If it's falsy, the element won't
be selected.
If a return statement is not included the callback 
will return undefined, which is falsy, and therfore
no elements will be selected and filter will return an 
empty array.

Array map uses the return value of the callback to transform
the elements in the array, and returns a new array.

ie 

[1, 2, 3].map(num => num * 2);
// [2, 4 6]

if the callback evaluates to a boolean then the return 
array will contain booleans. If the callback doesn't contain
a return statement, then map will return an array of undefined
in place of the original elements.
*/
