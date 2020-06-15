// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('not an array')
    };
    this.arr = arr;
    this.index = 0;
    this.done = false;
  }
  next() {

    this.done = this.index < this.arr.length ? false : true;
    const output = {
      done: this.done,
      value: this.arr[this.index]
    }
    this.index++;
    return output;

  }
}


module.exports = { Iterator };
