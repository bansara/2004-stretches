// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe,supplies) => {
  //enter code here
  if(typeof recipe !== 'object' || typeof supplies !== 'object') throw 'you are not the father';
  let stuff = [];
  for (let ingredient in recipe) {
    if(!Object.keys(supplies).includes(ingredient)) {
      return 0;
    }
    stuff.push(Math.floor(supplies[ingredient]/recipe[ingredient]))
  }
  return Math.min(...stuff);
};

module.exports = { btownbake };
