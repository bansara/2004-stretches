/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  //YOUR CODE
  if(str.length === 1) return true;
  if(typeof str === 'number') str = str.toString();
  str = str.replace(/[^a-z0-9+]+/gi, '');
  str = str.toLowerCase();
  const halfLength = Math.floor(str.length) / 2;
  const firstHalf = str.slice(0,halfLength);
  const secondHalf = str.slice(-halfLength).split('').reverse().join('');
  console.log(firstHalf, secondHalf);
  return firstHalf === secondHalf;
};

module.exports = { validPalindrome };
