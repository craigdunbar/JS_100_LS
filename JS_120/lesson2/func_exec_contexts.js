// ex1
function func() {
  return this;
}

let context = func();

console.log(context); // global object

// fline 5 calls func as a functions
// the implicit context for func is the global object

// ex2
// What will the following code output? 
// Explain the difference, if any, between this output 
// and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context); // {func: [Function: func]}
// this prob invokes func as a method, so it has an implicit
// execution context that refers to the object used to 
// invoke it

// ex3 What will the following code output?
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // 'Hello from the global scope!'
let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage(); // 'Hello from the function scope!'
//delivermessage() on line 7 is a function call, function invocation
// execution context is the global object, therefore the global
// property message is logged
// the second log is a method call foo.deliveryMessage()
// the implicit function execution context for a method invocationo
// is the calling object, which is foo.message

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

bar.add.call(foo) // invoke call on bar.add with foo as the explicit context
// add uses foo.a and foo.b not bar.a and bar.b