const findBy = (arr, key, value) => {
  //YOUR CODE HERE
  return arr.find(obj => obj[key] === value);
};

module.exports = { findBy };
