// greet a user
// ask for a users name
// if user types a ! then return all caps

let rlSync = require('readline-sync');
let name = rlSync.question("what is your name?");

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}