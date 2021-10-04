// dot notation versus bracket notation

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // => {prefix: 'Pacific'}

let ocean = {};
let prefix = 'Indian';
ocean[prefix] = 'Pacific';

console.log(ocean); // => same
// wrong => {Indian: 'Pacific'}

// snippet 1 adds a property 'prefix' 
// to the ocean object
// snippet 2 adds the property 'Indian'
// to the object using the 
// variable prefix as key
