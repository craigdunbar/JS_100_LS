// Question 1
// What will the following code log to the console?

// let qux = {foo: 1};
// let baz = Object.create(qux)

// console.log(baz.foo + qux.foo); // logs 2

// baz does not have own property foo but since it's prototype is qux JS will search the prototype chain 
// for the foo property and return it's value

// Question 2
// What will the following code log to the console?

// let qux = {foo: 1};
// let baz = Object.create(qux)
// baz.foo = 2

// console.log(baz.foo + qux.foo); // logs 3

// Since we assign bar.foo on line 3 bar now has a new own property called foo, with a value of 2
// the foo property on qux is not changed so still has a value of one. 
// Therefore 3 is returned.

// Question 3
// What will the following code log to the console?

// let qux = {foo: 1};
// let baz = Object.create(qux)
// qux.foo = 2

// console.log(baz.foo + qux.foo); // logs 4

// Here we reassign the foo property in qux. Since bar dosnt have it;s own foo propewrty it still 
// nherits from qux. And therefore the change in qux is reflected in bar so the answer is 4

// Question 4
// Write a function that searches the prototype chain of an object for a given property and assigns
//  it a new value. If the property does not exist in any of the prototype objects, the function should
// do nothing.

let fooA = {bar: 1};
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);


// function assignProperty(name, prop, val) {
//   while (name !== null) { // checks if top of prototypal chain (always null at the top)
//     if (name.hasOwnProperty(prop)) { // if prop is an own property reassign it else do nothin
//       name[prop] = val;
//       break;
//     } 
//     name = Object.getPrototypeOf(name) // go up the prototypal chain one step and repeat the check for "own" property
//   }
// }

// recursive solution:
// function assignProperty(name, prop, val) {
//   if (name === null) {
//     return  
//   } else if (name.hasOwnProperty(prop)) {
//       name[prop] = val;
//   } else {
//       assignProperty(Object.getPrototypeOf(name), prop, val);
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// // console.log(fooB.bar); 
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// Question 5

// The two loops below will not always return the same results.
// This is because the in operator will look for properties in the prototypal chain,
// whereas Object.keys will only return own properties.

// For example
// let bar = {a: 1};
// let foo = Object.create(bar);
// foo.b = 2;

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }
// returns b:2, a: 1

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`)
// }) 
// returns b: 2;

// Question 6
// HOw do you create an object that doesn't have a prototype?
// Set the prototype to null using Object.create

let foo = Object.create(null)
console.log(Object.getPrototypeOf(foo))