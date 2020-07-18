const fold = (arr, int) => {
  //YOUR CODE HERE
  const result = [];
  const arrCopy = [...arr]
  const shiftPop = (arr) => {
    result.push(arr.shift() + arr.pop());
  }

  while (arrCopy.length && int) {
    int--;
    if (arrCopy.length % 2 === 0) {
      shiftPop(arrCopy);
    }
    else {
      if (arrCopy.length > 1) {
        shiftPop(arrCopy)
      } else {
        result.push(arrCopy.pop())
      }
    }
  }
  return result;
};

module.exports = fold;
