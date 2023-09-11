// Read the following code carefully. 
// What do you think is logged on line 7. 
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // will log undefined undefined as the global object is the execution context
// actually logs NaN since it's trying to concatenate undefined and undefined which is NaN

// LS solution

// If you said it logs `NaN`, you're correct. It is tempting to say that the code will log "Rick Sanchez" to the console but that's not correct.

// Anywhere outside a function, the keyword `this` is bound to the global object. 
// If the keyword is used inside a function, then its value depends on how the function was invoked.

// Since `window.firstName` and `window.lastName` (if you're using a browser) are not defined, 
// the operation being performed here is `undefined + undefined` which results in 
// fullName having the value `NaN`.