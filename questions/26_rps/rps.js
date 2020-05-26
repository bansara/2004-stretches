//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  //YOUR CODE HERE
  constructor(p1, p2) {
    this.players = [p1, p2];
    this.score = [0, 0];
  }
  play(p1Move, p2Move) {
    let output;
    let moves = p1Move+p2Move;
    if (p1Move === p2Move) output = 'Tie Game';
    switch (moves) {
      case 'RockPaper':
      case 'PaperScissors':
      case 'ScissorsRock':
        this.score[1]++;
        output = `${p2Move} defeats ${p1Move}, ${this.players[1]} wins this round.`;
        break;
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        this.score[0]++;
        output = `${p1Move} defeats ${p2Move}, ${this.players[0]} wins this round.`
        break;
      default:
    }
    return output;
  }
  winner() {
    const winner = this.score[0] > this.score[1] ? this.players[0] : this.players[1];

    return `The victor is ${winner} with ${winner === this.players[0] ? this.score[0] : this.score[1]} points.`
  }
}

module.exports = { RPS };
