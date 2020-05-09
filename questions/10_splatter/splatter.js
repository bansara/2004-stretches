//write the splatter function

const splatter = (...args) => {
  //write code here
  return [...args].reduce((a,c) => {
    for (let val in c) {
    a += c[val]
    }
    return a
  }, 0)
};

module.exports = { splatter };
