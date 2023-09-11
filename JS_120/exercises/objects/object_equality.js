// Testing Object Equality

// In JavaScript, comparing two objects either with `==` or `===` checks for object identity. 
// In other words, the comparison evaluates as true if it's the same object on either side 
// of `==` or `===`.
// This is a limitation, in a sense, because sometimes we need to check if
// two objects have the same key/value pairs. 
// JavaScript doesn't give us a way to do that.

// Write a function `objectsEqual` that accepts two object arguments and 
// returns `true` or `false` depending on whether the objects have the same key/value pairs.

// use two arrays to get the object keys and values for the arguments, 
// iterate over the second array and check if the first array contains every subarray
// return true if it does and false otherwise.

function objectsEqual(obj1, obj2) {
  
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  // console.log(keys1, keys2)
  let val1 = Object.values(obj1);
  let val2 = Object.values(obj2);
  // console.log(val1, val2)

  if (keys1.every((el, idx) => el === keys2[idx]) && val1.every((el, idx) => el === val2[idx])) {
    return true;
  } else {
    return false;
  }
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false