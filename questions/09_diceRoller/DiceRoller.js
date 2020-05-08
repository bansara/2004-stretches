// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice) {
    if(typeof sides !== 'number' || typeof numDice !== 'number' || sides < 1 || numDice < 1) {
      throw 'Input invalid.'
    }
    this.sides = sides;
    this.numDice = numDice;
    this.history = [];
  }
  roll() {
    const result = []
    for (let i = 0; i < this.numDice; i++) {
      result.push( (Math.floor(Math.random() * this.sides ) + 1))
    }
    this.history.push(result);
    // console.log(result)
    return result;
  }
}

module.exports = { DiceRoller };
