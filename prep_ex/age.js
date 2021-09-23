let rlSync = require('readLine-sync');
let age = rlSync.question("How old are you?");
console.log(`You are ${age}`);
console.log('in 10 years you will be ' + (Number(age) + 10));
console.log('in 20 years you will be ' + (Number(age) + 20));
console.log('in 30 years you will be ' + (Number(age) + 30));
console.log('in 40 years you will be ' + (Number(age) + 40));

