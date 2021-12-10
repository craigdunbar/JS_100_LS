/*
*** Problem 1 ***
Order the follwing array of number strings by descending
numerical value 

let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((a, b) => Number(b) - Number(a)));
// [ '11', '10', '9', '8', '7' ]

*** Problem 2 ***
Order the following array of objects based on the year of
publication, from earliest to latest

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => a['published'] - b['published']));

*** Problem 3 ***

For each of these collection objects, demonstrate how you 
would access the letter 'g'.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(obj2['third'])[0]);

*** Problem 4 ***

For each of these collection objects, demonstrate how you would
change the value 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;

*** Problem 5 ***

Compute and display the total age of the male members 
of the following object.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = 0
Object.values(munsters).forEach((el) => {
  if (el['gender'] === 'male') {
  total += el['age'];
  }
});
console.log(total);

*** Problem 6 ***

Given the munsters object below, print the name, age, and 
gender of each family member

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersNames = Object.keys(munsters);
for (let count = 0; count < munstersNames.length; count++) {
  currentName = munstersNames[count];
  console.log(`${currentName} is a ${munsters[currentName]['age']}-year-old ${munsters[currentName]['gender']}`);
}

LS solution
 Object.entries(munsters).forEach(entry => {
   let name = entry[0];
   let age = entry[1]['age'];
   let gender = entry[1].gender;

   console.log(`${name} is a ${age}-year-old ${gender}`);
 });

 *** Problem 7 ***

 Given the following code, what will be the final values
 of a and b? Don't run the code

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // [4, [5, 8]]
arr[1][0] -= a; // [4, [3, 8]]

a // 2
b // [3 ,8]

a doesn't change because we are referencing arr[0] not a
b changes because we are modifying the array that b references

*** Problem 8 ***

Using forEach method, write some code that outputs all 
vowels from the strings in the arrays. Don't use for
or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];

Object.entries(obj).forEach(entry => {
  entry[1].join().split('').forEach(char => {
    if (vowels.includes(char)) {
      console.log(char)    
    }
  });
});

since I don't need the keys from the object I can use
Object.values instead

Object.values(obj).forEach(entry => {
  entry.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char)    
      }
    });
  });
});

*** Problem 9 ***
Given the following data structure, return a new array with
the same structure but with the values of each subarray ordered
alphabetically or numerically as appropriate, in ascending
order

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortArr = arr.map(subArr => {
  if (typeof(subArr[0]) === 'number') {
    return subArr.slice().sort((a, b) => Number(a) - Number(b));
  } else {
    return subArr.slice().sort();
  }
})
console.log(sortArr);
console.log(arr);
** Note: remember to use slice() so that original arr is
not mutated.

*** Problem 10 *** REVIEW THIS ONE

Perform the same transforamation as before but this time
descending

let sortArr = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof(subArr[0]) === 'number') {
      return b - a 
    } 
    
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
});
console.log(sortArr);

*** Problem 11 ***

Given the following data structure, use map to return a 
new array identical to the original, but with each number 
incremented by 1. Do not modify the original 

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map(obj => {
  let newObj = {};
  
  for (let key in obj) {
    for (let count = 0; counter < obj.length)
    newObj[key] = obj[key] + 1;
  }
return newObj;
}));

console.log(arr);

*** Problem 12 ***
Given the following data structure, use a combination 
of methods, including filter, to return a new array identical
to the original, but containing only the numbers that are 
multiples of three

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(element => {
  return element.filter(num => num % 3 === 0);
}));
console.log(arr);

*** Problem 13 ***
Given the following data structure, sort the array
so that the sub-arrays are ordered based on the sum
of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

