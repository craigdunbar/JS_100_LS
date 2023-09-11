// Q1
// What are two disadvantages of working with factory functions?
// Each function creates copies of all methods which is inefficient
// There is no way to tell which factory function created the object, so you mnay be working with the wrong one.

//Q2
// Rewrite the folowing code to use object literal syntax to generate the retuned object.

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//   propA: 10,
//   propB: 20,
//   }
// }

//Q3

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// To process multiple invoices we need a factory method.
// The requirements of the factory function are as follows:
// 1 - it returns an invoice object, with phone and internet properties and a total method
// 2 - the default value for then phone service is 3000, and the internet service is 5500(in cents)
// 3 - the function takes an object and argument whose attriv=butes override the default values.

// the function should work with the following code:

// function createInvoice(services = {}) {
//     let internetCost = services.internet;
//     if (internetCost === undefined) {
//       internetCost = 5500;
//     }

//     let phoneCost = services.phone;
//     if (phoneCost === undefined) {
//       phoneCost = 3000;
//     }

//     return {
//       phone: phoneCost,
//       internet: internetCost,

//       total: function() {
//         return this.phone + this.internet;
//       }
//     };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({internet: 6500 }));
// invoices.push(createInvoice({phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)) // => 31000

//Q4
// Now we can build a factory function to create payments. The function can take an object argument in
// one of 3 forms
// Payment for one service eg {internet: 1000} or {phone: 1000}
// Payment for both services eg {internet: 1000, phone: 1000}
// Payment with just an amount property eg {amount: 2000}

// The function  should return an object that has the amount paid for each service and a total method
// that returns the payment total.
// If the amount property is not present in the argument, it should return the sum of the phone
// and the internet charges; if the amount property is present, return the value of that property.
// The code below should work:

function createPayment (services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  }

  return payment;
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments)); // => 24000

// Q5
// Update the createInvoice fucntion so that it can add payments(s) to invoices. 

function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment)
    },

    addPayments: function(payments) {
      payments.forEach(this.payment, this);
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment, 0);
    },

    amoountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3  = createPayment({phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayment([payment2, payment3]);
console.log(invoice.amoountDue());