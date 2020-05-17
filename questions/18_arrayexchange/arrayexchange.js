//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (a1,a2) => {
    if(!Array.isArray(a1) || !Array.isArray(a2)) throw new Error("this is not the droid you're looking for");
    const a1l = a1.length;
    const a2l = a2.length;
    for(let i = 0; i < a1l; i++) {
        a2.unshift(a1.shift());
    }
    for(let i = 0; i < a2l; i++) {
        a1.push(a2.pop())
    }
};

module.exports = { arrayexchange };
