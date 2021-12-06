/*
***** Problem 1 ****
What is the return value of the filter method
call below?
[1, 2, 3].filter(num => 'hi');
since the callback always evaluates to 'hi' which is truthy
the callback with return true for each element and therefore
the return value is:
[1, 2, 3]

**** Probelm 2 ****

What is the return value of map below?

[1, 2, 3].map(num => {
  num * num;
});
since there is no expicit return statement in the function 
this code will return:
[undefined, undefined, undefined]

**** Problem 3 ****

[1, 2, 3].map(num => num * num);
this code will return [1, 4, 9] since there is no need
for an explicit return statement in this condensed 
arrow function without braces.

**** Problem 4 ****

What is the return value of the following statement?
['ant', 'bear', 'catepillar'].pop().length;
returns 11
since length is being chained to pop, so length
is being called on 'caterpillar' as this is the 
return Value of pop

**** Problem 5 ****

What is the callbacks return value in the code below?
[1, 2, 3].every(num => {
  return num = num * 2;
});
// true
Since Array.every returns true or false depending on whether
all the elements meet the test of the call back.
Each element is getting doubled so the return is a truthy
integer and therefore it returns true.

**** Problem 6 ****

How does Array.fill work? Is it destructive? 
How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

we should, test in node and log arr to see 
if it's been mutated. Also read docs
arr // [1, 1, 1, 1, 1]

**** Problem 7 ****
What is the return value of map in this code?
['ant', 'bear'].map(elem => {
  if(elem.length > 3) {
    return elem;
  }
});
// [undefined, 'bear'];
since anything under length of 3 has no explicit return 
value, so undefined is implicitly returned.

**** Problem 8 ****

Write a program that takes the array below and 
creates an object where the names are keys and the values
are the positions in the array:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
function returns:
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {}
flintstones.forEach((name, indx)  => {
  obj[name] = indx
});
console.log(obj);

*** Problem 9 ***

Add up all the ages of the musters family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesValues = Object.values(ages);
let sum = agesValues.reduce((a, b) => a + b);
console.log(sum);

*** Problem 10 ***

Pick out the minumum age from the munster family object
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAgesValues = Object.values(ages).sort().shift()
console.log(minAgesValues);

// using Math.min
console.log(Math.min(...Object.values(ages)));

*** Problem 11 ***
Create an object that expresses the frequency with which
each letter occurs in the string.
let statement = "The Flintstones Rock";
statement = statement.replace(/ /g, '');
let charObj = {}
for (let count = 0; count < statement.length; count++) {
  let objKey = statement[count];
  if (Object.keys(charObj).includes(objKey)) {
    charObj[objKey]++;
  } else {
    charObj[objKey] = 1
  }
}
console.log(charObj);
*/
