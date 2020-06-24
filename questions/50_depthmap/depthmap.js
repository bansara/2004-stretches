//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  //write code here
  if (typeof obj !== 'object') throw 'I object';
  let depth = 0;
  obj.depth = depth;
  depth++;
  for (let key in obj) {

    if (typeof key !== 'object') {
      break;
    } else {
      obj[key].depth = depth;
      depth++
      obj[key] = recordDepth(obj[key])
    }
  }
  console.log(obj)
  return obj;
};

module.exports = { recordDepth };
