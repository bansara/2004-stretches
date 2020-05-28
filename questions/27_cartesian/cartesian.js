const cartesian = (arr) => {
  //YOUR CODE GOES HERE
  if (!Array.isArray(arr)) throw 'not an array';

  let notGoingNS = false;

  const reduced = arr.reduce((a, c) => {
    a[c]++;
    return a
  }, { n: 0, s: 0, e: 0, w: 0 });

  if (reduced.n > reduced.s) {
    reduced.n -= reduced.s;
    reduced.s = 0;
  } else if (reduced.n < reduced.s) {
    reduced.s -= reduced.n;
    reduced.n = 0;
  } else {
    reduced.n = 0;
    reduced.s = 0;
    notGoingNS = true;
  }
  if (reduced.e > reduced.e) {
    reduced.e -= reduced.w;
    reduced.w = 0;
  } else if (reduced.e < reduced.w) {
    reduced.w -= reduced.e;
    reduced.e = 0;
  } else {
    reduced.e = 0;
    reduced.w = 0;
    if (notGoingNS) return "These directions don't go anywhere!";
  }


  return reduced;
};

module.exports = { cartesian };

