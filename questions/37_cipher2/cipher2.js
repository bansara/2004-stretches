const decypher = (str) => {
  //YOUR CODE HERE
  const strArr = str.split(' ');
  const result = [];
  strArr.forEach(word => {
    let wordArr = word.split('');
    let decoded = ''
    const num = word.match(/[0-9]+/)[0];
    const firstLetter = String.fromCharCode(num * 1)
    const secondLetter = wordArr.pop();
    const restOfWord = wordArr.splice(num.length);

    decoded += firstLetter;
    decoded += secondLetter;
    decoded += restOfWord;
    result.push(decoded)

  })
  return result.join(' ');
};
module.exports = { decypher };
