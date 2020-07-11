// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, target) => {
  //write code here
  const result = []

  arr.forEach(n => {
    if (arr.includes(target - n)) {
      result.push(n);
    }
  })
  return result;
};

module.exports = { twoNumberSum };
