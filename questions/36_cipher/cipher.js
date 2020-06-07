const encrypt = (str) => {
  const arrOfWords = str.split(' ');
  let outputArr = [];
  arrOfWords.forEach(word => {
    const wordArr = word.split('');
    const last = wordArr.pop();
    const second = wordArr.splice(1, 1).join('');
    wordArr.splice(1, 0, last);
    wordArr.push(second);
    wordArr[0] = wordArr[0].charCodeAt(0);
    outputArr.push(wordArr.join(''))
  })
  return outputArr.join(' ');
};

module.exports = { encrypt };
