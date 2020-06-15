const { makeyourown } = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('returns an object', () => {
    expect(typeof makeyourown(5)).toEqual('object');
  });
  it('assigns default values to arguments if none are given', () => {
    expect(makeyourown()).toMatchObject({
      pizza: 'yesss feed me',
      anchovies: 'nooo kill them with fire'
    });
  });
  it('assigns arguments to values of the object', () => {
    expect(makeyourown('yes please', 'no!!')).toMatchObject({
      pizza: 'yes please',
      anchovies: 'no!!'
    });
  });
});
