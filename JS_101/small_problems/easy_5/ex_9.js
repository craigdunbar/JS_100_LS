/*
# -----------------------INSTRUCTIONS------------------------
# How many?
Write a function that counts the number of occurrences
of each element in the given array. Log each element with
 the number of occurences.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: strings
# ---------------------------RULES---------------------------
# Explicit: case sensitive

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
# initalize function with array arg
initalise counter
iterate through the array and check for duplicate entries
add to counter if duplicate is found
return element name and count
*/

// function countOccurrences(array) {
//   let newObj = {};
//   for (let index = 0; index < array.length; index++) {
//     if (!newObj[(array[index])]) {
//       newObj[array[index]] = 1;
//     } else {
//       newObj[(array[index])] += 1
//     }
//   }
//   for(let [key, value] of Object.entries(newObj)) {
//     console.log(`${key} => ${value}`);
//   }
// }
// further exploration
// treat suv and SUV as the same word

function countOccurrences(array) {
  let newObj = {};
  for (let index = 0; index < array.length; index++) {
    if (!newObj[(array[index]).toLowerCase()]) {
      newObj[array[index].toLowerCase()] = 1;
    } else {
      newObj[(array[index]).toLowerCase()] += 1
    }
  }
  for(let [key, value] of Object.entries(newObj)) {
    console.log(`${key} => ${value}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);
// console.log(countOccurrences(vehicles));