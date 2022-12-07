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
define an empty object
iterate over the array
check if the onbect contains the array element as a key,
if so add one to the value
if not add the key
log the result as shown
*/
function countOccurrences(array) {
  let seenObj = {}
  array.forEach(el => {
    if(!seenObj[el]) {
      seenObj[el] = 1;
    } else {
      seenObj[el] += 1;
    }
  })
  let entries = Object.entries(seenObj)
  for (let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]} => ${entries[i][1]}`)
  }
  // Object.entries(count).forEach( ([key, value]) => console.log(`${key} => ${value}`));
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);