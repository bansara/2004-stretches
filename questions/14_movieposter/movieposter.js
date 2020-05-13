//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (array) => {
  //write code here
  if(!Array.isArray(array) || array.length < 1) throw new Error('this input sucks.');
  let longestWord = 0;
  array.forEach(word => {
    if(word > longestWord) {
      longestWord = word.length;
    }
  })
  let output = '';
  for (let i = 0; i < array.length; i++) {
    if(i === 0) {
      output = '*'.repeat(longestWord + 4) + '\n';
    } 
    output += `* ${array[i]}${' '.repeat(longestWord - array[i].length)} *`;
    if(i === array.length - 1) {
      
      output = '*'.repeat(longestWord + 4);
    }

  }
  return output;
};

module.exports = { movieposter };
