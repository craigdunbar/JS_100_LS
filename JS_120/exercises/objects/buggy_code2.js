// A grocery store uses a JavaScript function to calculate discounts on various items. 
// They are testing out various percentage discounts but are getting unexpected results. 
// Go over the code, and identify the reason why they aren't getting the expected discounted 
// prices from the function. 
// Then, modify the code so that it produces the correct results.

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let self = this.price
    let discount = self * percent / 100;
    self -= discount;

    return self;
  },
};

console.log(item.discount(20) === 40);  // should return 40
// 40
console.log(item.discount(50) === 25);  // should return 25
// // 20
console.log(item.discount(25) === 37.5);  // should return 37.5
// 15

// the issue is that price is being reassigned after each calculation so the original price
// of 50 is being overwritten.
// we can solve this by assigning this.price to another variable in the global scope of the 
// nested function discount()

// LS solution

// function discountItem(item, percent) {
//   let discount = item.price * percent / 100;
//   return item.price - discount;
// }