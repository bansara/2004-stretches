const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(multiply('mike', 'joe')).toThrow();

    expect(multiply(1, [1,2,3])).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(4, 5)).toBe(20);

    // test that the returned value is correct
    expect(multiply(10, 10)).toBe(100);

    // test some other values
    expect(multiply(1, 50)).toBe(50);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    const random1 = Math.random() * 10;
    const random2 = Math.random() * 5;
    const result = random1 * random2;
    expect(multiply(random1, random2)).toBe(result);
  });
});
