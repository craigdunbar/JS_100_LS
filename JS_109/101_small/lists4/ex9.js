/*
# -----------------------INSTRUCTIONS------------------------
Inventory Item Transactions
Write a function that takes two arguments, an inventory item 
ID and a list of transactions, and returns an array containing 
only the transactions for the specified inventory item.

# --------------------------PROBLEM--------------------------

# Input: object value and an array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
# ----------------------------ALGO---------------------------
define an empty array
iterate over the given  array
if the object.id === 101
push the object to the empty array
else cointinue
*/
// function transactionsFor(num, arr) {
//   let newArr = [];
//   arr.forEach(el => {
//     if (el.id === 101) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// }

// using filter

function transactionsFor(num, arr) {
  return arr.filter(el => el.id === 101)
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

console.log(transactionsFor(101, transactions));