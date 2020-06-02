// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
    if (!Array.isArray(arr)) throw 'no no no no nooooo!';
    const sorted = arr.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted.includes(sorted[i] + 2)) {
            result.push([sorted[i], sorted[i] + 2])
        }
    }
    return result;
};

module.exports = { diffTwo };
