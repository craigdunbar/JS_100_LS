const a  = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// => {firstName: Jane, lastName: Doe}
// can still change xontent of object declared 
// with const