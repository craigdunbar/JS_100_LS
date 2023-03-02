// ex 1
// What will the following code log to the console? 
// Explain why it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); //  2 

// ex2
let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo); //  3

// ex3
let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo); // 4

// ex4
// As we saw in problem 2, the following code creates a new property 
// in the baz object instead of assigning the property in the prototype object.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

// Write a function that searches the prototype chain of an 
// object for a given property and assigns it a new value. 
// If the property does not exist in any of the prototype objects, 
// the function should do nothing. The following code should work as shown:

function assignProperty(obj, property,value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }
    
    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

// ex5
// Consider the following two loops:
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// If foo is an arbitrary object, will these loops always 
// log the same results to the console? 
// Explain why they do or do not. 
// If they don't always log the same information, 
// show an example of when the results differ.

// The for/in loop will iterate over all the properties,
// even the inherited ones, where forEach will not.

let bar = { a: 1, b: 2 };
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;

// first loop:
a: 3        // from foo
c: 4        // from foo
b: 2        // from bar

// second loop:
a: 3        // from foo
c: 4        // from foo

// The two loops produce the same results only when 
// the prototype chain doesn't contain enumerable 
// properties.

// ex6
// How do you create an object that doesn't have a 
// prototype? How can you determine whether an 
// object has a prototype?
// use creat and null

let bareObject = Object.create(null);

// to check for prototype use get.PrototypeOf()
if (Object.getPrototypeOf(obj)) {
  // obj has a prototype
} else {
  // obj does not have a prototype
}