//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  //code in here
  const result = {};
  let layers = '';
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      layers += `${key}/` + directory(obj[key]);
    } else {
      result[layers] = obj[key];
    }
  }
  return result;
};

module.exports = { directory };
