// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.history = [this.state];
  }
  setState(obj) {
    this.history.push(this.state);
    const newState = {...this.state}
    for(let prop in obj) {
      newState[prop] = obj[prop]
    }
    this.state = newState;
    return this.state;
  }
  goBack(){
    this.state = this.history.pop();
  }
}

module.exports = { StatefulThing };
