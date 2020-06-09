/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, key1, key2) {
  return arr.sort((a, b) => a[key1] < b[key1] ? -1 : 1)
    .map(obj => obj[key2])
}

module.exports = { sortOrder };
