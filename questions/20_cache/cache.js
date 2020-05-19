// see test specs

function cache(f) {
  if (typeof f !== 'function') {
    throw new Error('Input must be a function.');
  }
  const cachedArg = [];
  const cachedResult = [];
  return (x) => {
    if(cachedArg.includes(x)){
      const index = cachedArg.indexOf(x);
      return cachedResult[index];
    }
    else {
      cachedArg.push(x);
      const result = f(x);
      cachedResult.push(result);
      return result;
    }

  }
}


module.exports = { cache };
