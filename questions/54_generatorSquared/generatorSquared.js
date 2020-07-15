// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here
function* sqauredGen(x, y) {

    for (let i = x + 1; i < y + 1; i++) {
        yield i * i;
    }

}

module.exports = { sqauredGen };
