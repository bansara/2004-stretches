const fizzBuzz = (num) => {
  if (typeof num !== 'number' || num % 1 !== 0 || num < 1) throw 'input is not an integer'
  //YOUR CODE HERE
  let output = []
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      output.push('FizzBuzz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else {
      output.push(i);
    }
  }
  return output;
};
module.exports = { fizzBuzz };
