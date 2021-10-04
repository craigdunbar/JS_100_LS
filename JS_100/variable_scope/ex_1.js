// what's my value 1
console.log(greeting);

var greeting = 'Hello world!';

// won't display anything will return undefined as greeting was defined first
// not correct: 
// All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that o
// above behaves like the following one:
// var greeting;

// console.log(greeting);

// greeting = 'Hello world!'
// When a var variable is declared but not assigned a value, like on line 1
// initialized to the value undefined.