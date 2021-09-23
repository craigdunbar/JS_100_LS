// //Write a program named greeter.js that greets 'Victor' three times. 
// //Your program should use a variable and not hard code the string value 'Victor' in each greeting.

// let name = 'Victor';

// console.log(`Good morning, ${name}.`);
// console.log(`Good afternoon, ${name}.`);
// console.log(`Good evening, ${name}.`);

// let rLsync = require('readLine-Sync');
// let name = rLsync.question('What is your name?');
// console.log(`Hello, ${name}!`);

let rLsync = require('readLine-Sync');
let firstName = rLsync.question('What is your first name?');
let lastName = rLsync.question('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);

// let rLSync = require('readLine-Sync');

// function first_name () {
//   let firstName = rLSync.question("What is your first name?");
// }
// function last_name () {
//   let lastName = rLSync.question("What's your last name?");
// }
// first_name()
// last_name()
// console.log(`Hello, ${firstName} ${lastName}`);


// function getName(prompt) {
//     let readlineSync = require('readline-sync');
//     let name = readlineSync.question(prompt);
//     return name;
//   }
  
//   let firstName = getName('What is your first name? ');
//   let lastName = getName('What is your last name? ');
//   console.log(`Hello, ${firstName} ${lastName}!`);