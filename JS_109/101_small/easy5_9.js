/*
# -----------------------INSTRUCTIONS------------------------
How Many?
Write a function that counts the number of occurrences of 
each element in a given array. 
Once counted, log each element alongside the number of occurrences. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: displayed on console
# ---------------------------RULES---------------------------
# Explicit: 
Consider the words case sensitive e.g. ("suv" !== "SUV").

# Implicit: 

# --------------------------EXAMPLES-------------------------
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
# ----------------------------ALGO---------------------------
# initalise an empty object 
initalise a loop and iterate over the vehicles array
add the element value to the object as a key 
if that key alreasy exists increase the value by 1
once the loop is complete 
log the key and value of each object property
*/

// function countOccurrences(arr) {
//   let count = {};
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (!Object.keys(count).includes(arr[idx])) {
//       count[arr[idx]] = 1;
//     } else {
//       count[arr[idx]] += 1;
//     }
//   }
//   Object.entries(count).forEach((el) => console.log(`${el[0]} => ${el[1]}`));
// }
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

// Further Exploration
// Try to solve the problem when words are case insensitive, e.g. "suv" and "SUV" 
// represent the same vehicle type.

function countOccurrences(arr) {
  let count = {};
  arr = arr.map((el) => el.toLowerCase());
  for (let idx = 0; idx < arr.length; idx++) {
    if (!Object.keys(count).includes(arr[idx])) {
      count[arr[idx]] = 1;
    } else {
      count[arr[idx]] += 1;
    }
  }
  // Object.entries(count).forEach((el) => console.log(`${el[0]} => ${el[1]}`));
  // can also use array destructuing:
  Object.entries(count).forEach( ([key, value]) => console.log(`${key} => ${value}`));
}

console.log(countOccurrences(vehicles));