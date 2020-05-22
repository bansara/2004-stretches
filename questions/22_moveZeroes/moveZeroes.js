const moveZeroes = (arr) => {
  //YOUR CODE HERE
  const numZeros = arr.filter(n => n===0).length;
  while(arr.slice(-numZeros).join("") !== '0'.repeat(numZeros))
  {
    let i = arr.indexOf(0);
    arr.splice(i,1);
    arr.push(0);
  } 
  return arr;
};

module.exports = { moveZeroes };
