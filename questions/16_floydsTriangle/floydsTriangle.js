// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let output = '';
    if (!n) return output;
    let num = 1;
    function makeRow(rowNumber) {
        let row = '';
        for (let i = 1; i <= rowNumber; i++) {
            row += num.toString();
            num++;
        }
        return row;
    }
    for (let i = 0; i < n; i++) {
        output += makeRow(i+1);
        if(i < n - 1) output += '\n';
    }
    return output;
};

module.exports = { floydsTriangle };
