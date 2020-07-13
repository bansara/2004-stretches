const balanced = (arr) => {
  //YOUR CODE HERE
  const left = 0;
  const right = arr.length - 1;
  let sumL, sumR;
  while (left < right) {
    sumL += arr[left];
    sumR += arr[right];
    if (sumL < sumR) {
      left++;
    } else if (sumR < sumL) {
      right--;
    } else if (sumR === sumL) {
      if (right - left === 2) return left + 1;
      else if (right - left === 1) return left;
      else {
        left++;
        right--;
      };
    }
  }
  return -1;
};

module.exports = balanced;
