/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE
class digitalRoot {
    root(n) {
        if (n.toString().length === 1) {
            return n;
        } else {
            const numSum = n.toString()
                .split('')
                .reduce((a, c) => {
                    return a += c * 1;
                }, 0);
            return this.root(numSum);
        }
    }
}
module.exports = { digitalRoot };
