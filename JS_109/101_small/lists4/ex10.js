/*
# -----------------------INSTRUCTIONS------------------------
Inventory Item Availability
Building on the previous exercise, write a function that returns
true or false based on whether or not an inventory item is available. 
As before, the function takes two arguments: an inventory item and a list of transactions. 
The function should return true only if the sum of the quantity values 
of the item's transactions is greater than zero. 
Notice that there is a movement property in each transaction object. 
A movement value of 'out' will decrease the item's quantity.

# --------------------------PROBLEM--------------------------

# Input: array and integer
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 
You may (and should) use the transactionsFor function from the previous exercise.

# Implicit: 

# --------------------------EXAMPLES-------------------------
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
# ----------------------------ALGO---------------------------
use the filter methos from the previous exercise to the an array
of transaction
iterate over this new array
if movement is in add the quntity va,ue to a running total
if the movement value is out subtract from the running total
if after all iterations the running total is positive return true
else return flase
*/
function isItemAvailable(num, arr) {
  let sum = 0;
  let transactions = arr.filter(el => el.id === num) 
  transactions.forEach(transaction => {
    if(transaction.movement === 'in') {
      sum += transaction.quantity
    } else {
      sum -= transaction.quantity
    }
  })
  return sum > 1 ? true : false;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true