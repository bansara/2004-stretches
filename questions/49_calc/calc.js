// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  //write code here
  constructor(n) {
    if (typeof n !== 'number') throw 'what do you think this is, algebra?';
    this.result = n;
  }
  add(n) {
    this.result += n;
    return this;
  }
  sub(n) {
    this.result -= n;
    return this;
  }
  mul(n) {
    this.result *= n;
    return this;
  }

}

module.exports = { chainCalc };
