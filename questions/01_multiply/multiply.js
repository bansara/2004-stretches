// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2) || arguments.length !== 2) {
        throw "multiply take exactly two numbers";
    }
    return num1 * num2;
};

module.exports = { multiply };

