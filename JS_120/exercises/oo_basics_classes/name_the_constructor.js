// Update the following code so that, instead of logging the values, 
// each statement logs the name of the constructor to which it belongs.

// console.log("Hello");
// console.log([1,2,3]);
// console.log({name: 'Srdjan'});
// expected output:
// String
// Array
// Object

// typeof won't work as it'll return object for array
// since constructors have a name propertry we can use constructor property look up
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);