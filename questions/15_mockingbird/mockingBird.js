// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(func());
  }
  console.log(output)
  return output;
};

// see test specs to complete this stretch

module.exports = { repeater };
