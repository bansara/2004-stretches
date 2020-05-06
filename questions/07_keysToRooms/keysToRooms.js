/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  //YOUR CODE HERE
  const length = rooms.length;
  let keys = [];
  rooms.forEach(room => {
    keys = [...keys, ...room]
  })
  const keySet = [...new Set(keys)].filter(key => key !== 0);
  const sortedString = keySet.sort((a,b)=>a-b).join('');
  let countingString = '';
  for(let i = 1; i <= rooms.length; i++){
    countingString += i;
  }
  return sortedString.length === countingString.length;
};

module.exports = { keysToRooms };
