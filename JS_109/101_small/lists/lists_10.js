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
# function should return true if inventory is available false otherwise
to determine if inventory is available the out quantities must be subtracted from 
the in quantities to chack if there is inventory in 
use the function from the previos exercise to filter for the transcastion ID
then we need to sum the values for the quantity property
then return true if the quantity is positive
*/
function transactionsFor(itemID, array) {
    return array.filter(transaction => transaction['id'] === itemID)
}
function isItemAvailable(itemID, array) {
    let total = 0;
    transactionsFor(itemID, array).forEach(item => {
        if (item['movement'] === 'in') {
            total = total + item['quantity'];
        } else {
            total = total - item['quantity']
        }
        return total 
    });
    return total > 0 ? true : false;
}
// LS solution with reduce() 
// function isItemAvailable(itemID, array) {
//   let available = transactionsFor(itemID, array).reduce((total, item) => {
//     if (item['movement'] === 'in') {
//       return total + item['quantity'];
//   } else {
//       return total - item['quantity']
//   }
//   }, 0);
//   return available > 0;
// }

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