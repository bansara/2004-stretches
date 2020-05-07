// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  const trimmedObj = {};
  for(let prop in obj) {
    if (obj[prop] !== undefined && obj[prop] !== null){
      trimmedObj[prop] = obj[prop]
    }
  }
  return trimmedObj;
};

module.exports = { trim };
