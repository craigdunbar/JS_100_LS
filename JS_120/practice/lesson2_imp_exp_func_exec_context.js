// Question 1
// What will the following code output?

// function func() {
//   return this;
// }
// let context = func()
// console.log(context); // logs the global object 

// line 7 calls func as a function but doesn't give any context therfore globla 
// obbject is returned because that's the implicit context

// Question 2
// What will the following code output?

// let obj = {
//   func: function() {
//     return this;
//   }
// };
// let context = obj.func()
// console.log(context)

// this will log obj as func is invoked  as a method.
// method invocation has an implicit context of the calling object.

// Question 3
// What will the folowing code output?
message = 'Hello from the global scope'

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage() // logs 'Hello from the global scope' since this is a funciton invokation, 
// and there is no context given it looks in the 
// global object for a variable called message which it finds

// let foo = {
//   message: 'Hello from function scope!'
// };

// foo.deliverMessage = deliverMessage;
// foo.deliverMessage(); 
// logs 'Hello from the function scope' since foo is the implicit context for the method call, JS looks 
// in foo for a message property and this becomes foo.message.

// ex4
// What built-in methods have we learned about that we can 
// use to specify a function's execution context explicitly?
// call and apply

// ex5
// Take a look at the following code snippet. 
// Use call to invoke the add method but with 
// foo as execution context. 
// What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo)) // logs 3 as it uses foo.a and foo.b