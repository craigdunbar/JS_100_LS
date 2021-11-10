/*Question 1
Will the code below return an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
no it will just treat aray slots 3 - 5 as empty
numbers[4] // will return undefined

Question 2
How can you determine if a given string ends in an bang (!)?
use the endsWith() method

let str1 = "Come over here!"; 
console.log(str1.endsWith('!')); // true
let str2 = "What's up, Doc?";
console.log(str2.endsWith('!')); // false

Question 3
Determine whether the following object of people contians 
an entry for "Spot".
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
use Object.hasOwnProperty()
ages.hasOwnProperty('Spot'); // false

Question 4
Using the following String, create a new string that 
contains all lowercase letters except for the 
first character which should be capitalised.
let munstersDescription = "the Munsters are CREEPY and Spooky.";
=> The munsters are creepy and spooky.
let newStr = ''
munstersDescription.toLowerCase()
newStr = newStr + munstersDescription[0].toUpperCase()
newStr = newStr + munstersDescription.substring(1).toLowerCase();
console.log(newStr);
LS solution
munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase();

Question 5
What will the following code output?
console.log(false == '0'); // logs true
console.log(false === '0'); // logs false
The non-strict (==) operator coerces the values to the 
same type and can produce unexpected results.

Question 6
Add enteries to Munster family ages object
Marilyn age 22, and Spot age 237


let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// ages.Marilyn = 22;
// ages.Spot = 237;
let additionalAges = { Marilyn: 22, Spot: 237 };
ages = Object.assign(ages, additionalAges);
console.log(ages);

Question 7
Determine whether the name Dino appeaers in the 
strings below. Check each string seperately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino')); // logs false
console.log(str2.includes('Dino')); // logs true
console.log(str1.match('Dino')); // logs null
console.log(str2.match('Dino')); // logs an array of [value, index, input, group]
console.log(str1.indexOf('Dino')); // logs -1
console.log(str2.indexOf('Dino')); // logs 41 (index of first occurrence)

Question 8
Add the "Dino" to the following array

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);

Question 9
How can we add multiple items to the above array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

Question 10
Return a new sentance that ends just before the word house.

*/
let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.indexOf('house'));
// console.log(advice.substring(0, 38));
// or 
console.log(advice.substring(0, advice.indexOf('house')));