/*
# -----------------------INSTRUCTIONS------------------------
How Many?
Write a function that counts the number of occurrences of 
each element in a given array. 
Once counted, log each element alongside the number of occurrences. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: log count to the console
# ---------------------------RULES---------------------------
# Explicit: Consider the words case sensitive e.g. ("suv" !== "SUV").

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
# define an empty object 
iterate over the array argument
check if the object contains a key with the same name as the current element
use includes() and the object keys array to do this
if it exists add 1 to the value
if it doesn't create the key and asign it a value of 1
*/
function countOccurrences(arr) {
  let obj = {};
  arr.forEach(el => {
    if (!Object.keys(obj).includes(el)) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  });
  Object.keys(obj).forEach(el => {
    console.log(`${el} => ${obj[el]}`)
  });
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2