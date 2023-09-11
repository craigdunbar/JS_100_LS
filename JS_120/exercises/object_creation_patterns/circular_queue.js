// circular queue
// write a class that implements the circular queue example given
// generate an array
// use the argument provided to determine the Number
// of empty slots using new Array(arg)
// assign all the values in the array to null using Array.fill

// write a method that adds a number agrument to the array
// if the array is full it should overrite the oldest entry
// which is the lowest number - use Math.min(...arr)?
// to find the lowest numbered element and then findIndex
// to get the index and then repace the element at that index

// write another method that removes the element given 
// as an argument and replaces it with null
// use findIndex as before

// 

// LS solution

class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null)
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(object) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = this.increment(this.nextPosition);
    }
    this.buffer[this.nextPosition] = object;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition =this.increment(this.oldestPosition);
    }
    return value;
  }
  increment(position) {
    return (position + 1) % this.buffer.length
  }
}