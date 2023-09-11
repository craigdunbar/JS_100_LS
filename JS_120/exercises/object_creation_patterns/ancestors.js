// Implement an ancestors method that returns the prototype chain (ancestors) 
// of a calling object as an array of object names. 
// Here's an example output:

// name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// console.log(Object.getPrototypeOf(foo) === Object.prototype)
// console.log(Object.getPrototypeOf(bar))
// console.log(Object.getPrototypeOf(baz))
// console.log(Object.getPrototypeOf(qux))

let foo = {
  name: 'foo',
  ancestors() {
  ancestorsArray =[];
  let proto = Object.getPrototypeOf(this)
  while (Object.getPrototypeOf(proto) !== null) {
      ancestorsArray.push(proto.name)
      proto = Object.getPrototypeOf(proto)
    }
  ancestorsArray.push('Object.prototype')
  return ancestorsArray
  }
}

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

// qux.ancestors()

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']