// ex2
// Rewrite the following code to use object-literal syntax to generate the returned object:
// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// ex3
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

// using a factory method

// function createInvoice(services = {}) {
//   // console.log(services)
//   let phoneCharge = services.phone;
//   if (phoneCharge === undefined) {
//     phoneCharge = 3000;
//   }

//   let internetCharge = services.internet;
//   if (internetCharge === undefined) {
//     internetCharge = 5500;
//   }
  
//   return {
//     phone: phoneCharge,
//     internet: internetCharge,

//     total: function() {
//       return this.phone + this.internet;
//     },
//    };
//  }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// Factory function to create payments

// function createPayment(services = {}) {
//   // console.log(services)
//   let payment = {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//   };

//   payment.total = function() {
//     return this.amount || (this.phone + this.internet);
//   };

//   return payment;
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
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

// console.log(paymentTotal(payments));      // => 24000

function createPayment(services = {}) {
  // console.log(services)
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function createInvoice(services={}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(paymentsArr) {
      paymentsArr.forEach(this.addPayment, this); // note syntax here
    },

    amountDue() {
      let paid = this.payments.reduce((sum, pment) => sum + pment.total(), 0);
      return this.total() - paid;
    }
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0