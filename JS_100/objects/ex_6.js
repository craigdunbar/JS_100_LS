// is it true?

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("it's true!");
  }
}

// => "it's true" never outputs as 
// the if statement is looking for a 
// boolean and the obj props are always
// strings
// 
for (let prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}

// logs:
// num (string)
// property name (string)
// true (string)
// fun (string)

// in order for the code to work 
// the if statement needs to look 
// for prop === 'true'