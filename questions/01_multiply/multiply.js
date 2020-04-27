// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {

    if(isNaN(num1) || isNaN(num2)) {
        throw 'Error';
    }
    return num1 * num2;
};

module.exports = { multiply };

