/*
# -----------------------INSTRUCTIONS------------------------
How Many?
Write a function that counts the number of occurrences of 
each element in a given array. 
Once counted, log each element alongside the number of occurrences. 

# --------------------------PROBLEM--------------------------

# Input: array
# Output: display string of variable name and number of occurences
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
# 
initalise an empty object
iterate over the given array
for each element create a key in the object unless
the key already exists increase the value by one
display each key and coresponding value
*/
function countOccurrences(arr) {
  let obj = {};
  for (let idx = 0; idx < arr.length; idx++) {
    if (!obj[arr[idx]]) {
      obj[arr[idx]] = 1;
    } else {
      obj[arr[idx]] = obj[arr[idx]] + 1;
    }
  }
  return Object.entries(obj).forEach(el => console.log(`${el[0]} => ${el[1]}`));
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);