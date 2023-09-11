// Q1
// What method can we use to bind a function permanently to a particiular contex?
// We can use bind()

// Q2
// What will the following code output?
// let obj = {
//   message: 'Javascript',
// }

// function foo() {
//   console.log(this.message);
// }

// foo.bind() // logs nothing as it does not invoke the function

// Q3
// What will the following code output?

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo()); // logs NaN since this.a and this.b return undefined as they are looked for in the global object
// console.log(bar()); // logs 5 as it's explicitly bound to obj

// Q5
// What will the following code output?

// let positivity = {
//   message: 'Javascript makes sense!',
// }

// let negativity = {
//   message: 'Javascript makes no sense!',
// }

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage();
// this will log 'JavaScript makes sense' as bar is permanently bound to positivity

// Q6
// What will the following code output?

let obj = {
  a: 'Amazebulous!',
}

let otherObj = {
  a: 'This is not a real word!',
}

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj); // bar is permanently bound to obj here

bar.call(otherObj); // call can't changed bind

// logs 'Amazebulous' because of the permanent binding on line 70.