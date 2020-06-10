const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (student) => {
  //code in here
  if (typeof student !== 'string') throw new Error('blargh');
  const output = {};
  const URL = 'https://fullstack.com/api/cohort2004';
  axios.get(`${URL}`)
    .then(students => students.data)
    .then(data => {
      let count, pupil;
      for (let id in data) {
        count++;
        if (data[id][name] === student) pupil = data[id[name]]
      }
      output.count = count;
      output.student = pupil;

    }).catch(e => console.log(e))
  return output;
};

module.exports = { getStudent };
