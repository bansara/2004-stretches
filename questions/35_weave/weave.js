// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...arr) => {
  //enter code here
  const result = [];
  let longest = 0;
  arr.forEach(a => {
    if (!Array.isArray(a)) {
      throw 'not an array'
    }
    if (a.length > longest) longest = a.length;
  });
  while (result.length < arr.length * longest) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length) {
        result.push(arr[i].shift())
      } else {
        result.push(null)
      }
    }
  }

  return result;
};

module.exports = { weave };
